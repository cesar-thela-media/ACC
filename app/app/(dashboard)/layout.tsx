import { DashboardNav } from "@/components/layout/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen" style={{ background: "var(--color-sage-900)" }}>
      <DashboardNav />
      <main
        className="flex-1 overflow-auto"
        style={{ background: "var(--color-sage-900)", color: "var(--color-text-inverse)" }}
      >
        <div className="max-w-5xl mx-auto px-8 py-10">{children}</div>
      </main>
    </div>
  );
}
