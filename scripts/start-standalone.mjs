import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const standaloneDir = path.join(rootDir, ".next", "standalone");
const standaloneServer = path.join(standaloneDir, "server.js");
const publicDir = path.join(rootDir, "public");
const staticDir = path.join(rootDir, ".next", "static");
const standalonePublicDir = path.join(standaloneDir, "public");
const standaloneStaticDir = path.join(standaloneDir, ".next", "static");

if (!existsSync(standaloneServer)) {
  console.error("Standalone build output not found. Run `bun run build` or `npm run build` first.");
  process.exit(1);
}

if (existsSync(publicDir)) {
  mkdirSync(standalonePublicDir, { recursive: true });
  cpSync(publicDir, standalonePublicDir, { recursive: true, force: true });
}

if (existsSync(staticDir)) {
  mkdirSync(standaloneStaticDir, { recursive: true });
  cpSync(staticDir, standaloneStaticDir, { recursive: true, force: true });
}

const child = spawn(process.execPath, [standaloneServer], {
  cwd: standaloneDir,
  stdio: "inherit",
  env: {
    ...process.env,
    HOSTNAME: process.env.HOSTNAME || "0.0.0.0",
  },
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
