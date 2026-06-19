import type { Metadata } from "next";
import Link from "next/link";

const values = [
  {
    title: "Clinical excellence",
    body: "We believe therapists do their best work when they are connected to other skilled clinicians who challenge and support them. Case consultation isn't optional. It's foundational.",
  },
  {
    title: "Sustainable practice",
    body: "Burnout is not inevitable. With the right structures, community, supervision, and personal care, therapists can build careers that last and practices that thrive.",
  },
  {
    title: "Professional identity",
    body: "Beyond your solo brand, there is a professional community you belong to. The Circle gives you a home, a directory listing, and colleagues who understand the work.",
  },
];

export const metadata: Metadata = {
  title: "Who We Are | The Circle",
  description:
    "Learn the story behind The Circle. Founded by Sarah Arnold, LPC-S, The Circle is a professional home and community for licensed therapists in Austin, TX.",
};

export default function WhoWeArePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 md:pt-36 pb-20 md:pb-28 text-center relative overflow-hidden"
        style={{ background: "var(--color-sage-800)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 48% at 50% 48%, rgba(194,150,58,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="container-fluid relative">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
            style={{ color: "var(--color-accent-highlight)" }}
          >
            Who we are
          </p>
          <h1
            className="leading-tight max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            A professional home and community for therapists
          </h1>
        </div>
      </section>

      {/* Origin story */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-sage-600)" }}
      >
        <div className="container-fluid text-center">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
            style={{ color: "var(--color-accent-highlight)" }}
          >
            The origin
          </p>
          <h2
            className="mb-10 max-w-2xl mx-auto leading-snug"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              color: "#fff",
            }}
          >
            Why The Circle exists.
          </h2>
          <div
            className="flex flex-col gap-6 text-base leading-relaxed max-w-2xl mx-auto text-left"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            <p>
              Most of us didn&apos;t fully anticipate how solo private practice would
              feel. You&apos;re doing meaningful work, but there may not be a team
              down the hall, no built-in debrief, and some days that absence is
              more noticeable than others.
            </p>
            <p>
              The Circle was designed to address that gap: a small network of
              clinicians who meet regularly, share resources, make referrals to
              each other, and show up for one another professionally and in real
              community.
            </p>
            <p>
              Founding members are therapists who have been part of Sarah&apos;s
              professional circle, former associates, trusted colleagues, and
              clinicians she has supervised. As The Circle grows, membership is
              open to any licensed therapist who shares this commitment to
              ongoing clinical growth and community.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="container-fluid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="aspect-square rounded-2xl max-w-sm w-full mx-auto md:mx-0 lg:sticky lg:top-24 overflow-hidden shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sarah-arnold.jpeg"
              alt="Sarah Arnold, LPC-S"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
              style={{ color: "var(--color-accent-highlight)" }}
            >
              The founder
            </p>
            <h2
              className="mb-6 leading-snug"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                color: "var(--color-sage-800)",
              }}
            >
              Sarah Arnold, LPC-S
            </h2>
            <div
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                Sarah is a Licensed Professional Counselor and Supervisor based
                in Austin, Texas, and the founder of Restored Family
                Counseling. She has spent her career working with individuals
                and couples doing the deeper work, exploring the parts of
                themselves that have been running the show, releasing what no
                longer serves them, and stepping into a life that feels in
                alignment with who they truly desire to be.
              </p>
              <p>
                As she built her group practice and supervised pre-licensed
                associates, she noticed a pattern: once therapists became fully
                licensed and launched their own practices, they lost the
                built-in community they had during training. Supervision groups
                ended. Colleagues scattered. What had once felt like a team
                became, almost overnight, a practice of one.
              </p>
              <p>
                The Circle is Sarah&apos;s answer to that problem.
                It is not a supervision group, a continuing education provider,
                or a therapist directory, though it includes elements of all
                three. It is a membership network: a professional community for
                therapists who want to keep growing, stay connected, and do
                excellent work over the long term.
              </p>
            </div>
            <a
              href="https://www.restoredfamily.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-base font-medium underline"
              style={{
                color: "var(--color-accent-highlight)",
                textUnderlineOffset: "4px",
              }}
            >
              Visit Restored Family Counseling →
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "var(--color-cream-100)",
          borderTop: "2px solid var(--color-accent-highlight)",
        }}
      >
        <div className="container-fluid">
          <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.28em] mb-5"
              style={{ color: "var(--color-accent-highlight)" }}
            >
              What we believe
            </p>
            <h2
              className="leading-snug"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                color: "var(--color-sage-800)",
              }}
            >
              The values that shape The Circle.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: "#fff",
                  boxShadow: "0 2px 16px rgba(45,59,44,0.07)",
                  borderTop: "3px solid var(--color-accent-highlight)",
                }}
              >
                <h3
                  className="text-lg leading-snug"
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontWeight: 600,
                    color: "var(--color-sage-800)",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-28 text-center"
        style={{ background: "var(--color-sage-800)" }}
      >
        <div className="max-w-2xl mx-auto px-5 md:px-6">
          <h2
            className="mb-8 leading-snug"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              color: "#fff",
            }}
          >
            This is the community you&apos;ve been looking for.
          </h2>
          <Link
            href="/join"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3.5 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
            style={{ background: "var(--color-accent-highlight)", color: "#fff" }}
          >
            Join the circle
          </Link>
        </div>
      </section>
    </>
  );
}
