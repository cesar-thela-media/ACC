import Link from "next/link";

const values = [
  {
    title: "Clinical excellence",
    body: "We believe therapists do their best work when they are connected to other skilled clinicians who challenge and support them. Case consultation isn't optional — it's foundational.",
  },
  {
    title: "Sustainable practice",
    body: "Burnout is not inevitable. With the right structures — community, supervision, and personal care — therapists can build careers that last and practices that thrive.",
  },
  {
    title: "Professional identity",
    body: "Beyond your solo brand, there's a professional community you belong to. ACC gives you a home, a directory listing, and colleagues who understand the work.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="pt-32 pb-20"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5"
            style={{ color: "var(--color-sage-600)" }}
          >
            Who we are
          </p>
          <h1
            className="leading-tight mb-8 max-w-2xl"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            A professional home for therapists who take their work seriously.
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            The Austin Clinician Circle was founded by a therapist who felt the
            same isolation that most clinicians in private practice feel — and
            decided to build something about it.
          </p>
        </div>
      </section>

      {/* SARAH'S STORY */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-200)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div
            className="aspect-square rounded-2xl max-w-sm w-full sticky top-24"
            style={{ background: "var(--color-sage-100)" }}
          />
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-5"
              style={{ color: "var(--color-sage-600)" }}
            >
              The founder
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 400,
                color: "var(--color-sage-900)",
              }}
            >
              Sarah Arnold, LPC-S
            </h2>
            <div
              className="flex flex-col gap-5 text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                Sarah is a licensed professional counselor supervisor based in
                Austin, Texas, and the founder of Restored Family Counseling.
                She has spent her career working with individuals, couples, and
                families navigating trauma, attachment wounds, and relational
                difficulty.
              </p>
              <p>
                As she built her group practice and supervised pre-licensed
                associates, she noticed a pattern: once therapists became fully
                licensed and launched their own practices, they lost the built-in
                community they had during training. Supervision groups ended.
                Colleagues scattered. The richness of peer connection disappeared
                — replaced by the solitude of a solo caseload.
              </p>
              <p>
                The Austin Clinician Circle is Sarah's answer to that problem. It
                is not a supervision group, a continuing education provider, or a
                therapist directory — though it includes elements of all three. It
                is a membership network: a professional community for therapists
                who want to keep growing, stay connected, and do excellent work
                over the long term.
              </p>
              <p>
                Sarah continues to see clients at Restored Family Counseling and
                leads ACC's clinical consultation groups. She lives and practices
                in Austin.
              </p>
            </div>
            <a
              href="https://www.restoredfamily.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-medium underline"
              style={{
                color: "var(--color-sage-700)",
                textUnderlineOffset: "4px",
              }}
            >
              Visit Restored Family Counseling →
            </a>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5"
            style={{ color: "var(--color-sage-600)" }}
          >
            The origin
          </p>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Why Austin Clinician Circle exists.
          </h2>
          <div
            className="flex flex-col gap-6 text-sm leading-relaxed max-w-2xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Private practice is one of the most professionally isolating
              environments in any helping profession. You see clients back to
              back, hold their pain carefully, and then — often — sit alone in a
              room with no one to debrief with, no one to consult on a difficult
              case, no one to remind you why you chose this work.
            </p>
            <p>
              ACC was designed to address that gap with something simple and
              durable: a small network of Austin-area clinicians who meet
              regularly, share resources, make referrals to each other, and show
              up for one another professionally. No large conferences. No passive
              webinars. Real community with real colleagues.
            </p>
            <p>
              Founding members are therapists who have been part of Sarah's
              professional circle — former associates, trusted colleagues, and
              clinicians she has supervised or trained alongside. As ACC grows,
              membership is open to any licensed therapist who shares this
              commitment to ongoing clinical growth and community.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-200)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-5"
            style={{ color: "var(--color-sage-600)" }}
          >
            What we believe
          </p>
          <h2
            className="mb-14"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            The values that shape ACC.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title}>
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "var(--color-sage-800)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--color-sage-900)" }}
      >
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            This is the community you've been looking for.
          </h2>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: "#fff", color: "var(--color-sage-700)" }}
          >
            Apply for membership
          </Link>
        </div>
      </section>
    </>
  );
}
