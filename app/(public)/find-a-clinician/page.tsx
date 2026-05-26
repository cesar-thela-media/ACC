import Link from "next/link";

export default function FindAClinicianPage() {
  return (
    <>
      <section
        className="pt-28 md:pt-32 pb-16 md:pb-20"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5"
            style={{ color: "var(--color-sage-600)" }}
          >
            Find a clinician
          </p>
          <h1
            className="leading-tight mb-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-serif), Manrope, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Therapist directory coming soon.
          </h1>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We&apos;re preparing the public directory now. Soon you&apos;ll be able to
            browse licensed therapists in The Circle and find the right fit for
            referrals and client care.
          </p>
        </div>
      </section>

      <section
        className="pb-20 md:pb-28"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <div
            className="rounded-[32px] border px-6 py-10 md:px-10 md:py-12 text-center"
            style={{
              background: "#fff",
              borderColor: "var(--color-cream-300)",
              boxShadow: "0 12px 42px rgba(27,27,27,0.07)",
            }}
          >
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-600)" }}
            >
              Coming soon
            </p>
            <h2
              className="section-title-strong mb-5"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                color: "var(--color-sage-900)",
              }}
            >
              We&apos;re building the directory with care.
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The directory will launch once member profiles are ready. Until
              then, you can learn more about membership and what The Circle
              offers licensed therapists across Texas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/what-we-offer"
                className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "var(--color-sage-700)", color: "#fff" }}
              >
                Explore membership
              </Link>
              <Link
                href="/join"
                className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium transition-colors hover:bg-[var(--color-sage-50)]"
                style={{
                  color: "var(--color-sage-700)",
                  border: "1px solid var(--color-cream-300)",
                }}
              >
                Join the circle
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
