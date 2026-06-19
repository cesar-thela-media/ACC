import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Clinician | The Circle",
  description:
    "The therapist directory is coming soon. Join The Circle to be listed in our trusted network of licensed clinicians.",
};

export default function FindAClinicianPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#2D3B2C",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        {/* Amber radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(194,150,58,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Concentric rings */}
        {[50, 35, 22].map((size) => (
          <div
            key={size}
            aria-hidden
            style={{
              position: "absolute",
              width: `${size}vw`,
              height: `${size}vw`,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.05)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        ))}

        <div
          className="text-center px-5 md:px-6"
          style={{ position: "relative", zIndex: 1, maxWidth: 720 }}
        >
          <p
            className="font-semibold uppercase mb-5"
            style={{
              color: "#C2963A",
              fontSize: 11,
              letterSpacing: "0.28em",
            }}
          >
            Member Directory
          </p>
          <h1
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
              fontWeight: 400,
              color: "#ffffff",
            }}
          >
            Find your people in Austin.
          </h1>
          <p
            className="text-base leading-relaxed mx-auto mb-8"
            style={{
              color: "rgba(255,255,255,0.62)",
              maxWidth: 560,
            }}
          >
            A curated directory of licensed clinicians who share a commitment to
            community and clinical excellence.
          </p>
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium"
            style={{
              border: "1px solid #C2963A",
              color: "#C2963A",
            }}
          >
            Coming soon
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section
        style={{
          background: "#F0EDE6",
          padding: "clamp(4rem, 8vw, 7rem) 0",
        }}
      >
        <div
          className="mx-auto px-5 md:px-6 text-center"
          style={{ maxWidth: 680 }}
        >
          <p
            className="font-semibold uppercase mb-4"
            style={{
              color: "#C2963A",
              fontSize: 11,
              letterSpacing: "0.28em",
            }}
          >
            Are you a licensed therapist?
          </p>
          <h2
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Join The Circle. Get listed when it launches.
          </h2>
          <p
            className="text-base leading-relaxed mb-8 mx-auto"
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: 520,
            }}
          >
            Members get a public directory listing, referral network access, and
            a professional home in Austin&rsquo;s clinical community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/join"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              style={{ background: "#C2963A", color: "#fff" }}
            >
              Apply for membership
            </Link>
            <Link
              href="/what-we-offer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                border: "1px solid #C2963A",
                color: "#C2963A",
                background: "transparent",
              }}
            >
              Learn what&rsquo;s included &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
