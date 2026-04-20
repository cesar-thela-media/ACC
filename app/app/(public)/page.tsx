import Link from "next/link";
import { PricingCard } from "@/components/cards/PricingCard";
import { ClinicianCard } from "@/components/cards/ClinicianCard";

const pillars = [
  {
    icon: "◎",
    title: "Clinical focus",
    body: "Monthly case consultation groups, continuing education units, and a curated resource library built for practicing clinicians.",
  },
  {
    icon: "◈",
    title: "Professional growth",
    body: "A public directory listing, trusted referral network, and business strategy guidance to sustain your practice.",
  },
  {
    icon: "◇",
    title: "Custom support",
    body: "Mindfulness structures for burnout prevention and discounted one-on-one coaching with Sarah Arnold, LPC-S.",
  },
];

const memberPreview = [
  {
    name: "Dr. Maya Okonkwo",
    credentials: "LCSW",
    tagline: "Trauma-informed care for adults navigating complex grief and loss.",
    specialties: ["Trauma", "Grief", "EMDR"],
    acceptingClients: true,
  },
  {
    name: "James Whitfield",
    credentials: "LPC",
    tagline: "Helping couples and individuals rebuild trust after relational rupture.",
    specialties: ["Couples", "Attachment", "Gottman"],
    acceptingClients: false,
  },
  {
    name: "Sofia Reyes",
    credentials: "LMFT",
    tagline: "Culturally responsive family therapy for first-generation and bilingual families.",
    specialties: ["Family", "Bilingual", "Anxiety"],
    acceptingClients: true,
  },
];

const pricingFeatures = [
  "Monthly case consultation group",
  "Continuing education access (CEUs)",
  "Curated clinical resource library",
  "Public directory listing",
  "Trusted clinician referral network",
  "Marketing and practice guidance",
  "Discounted coaching with Sarah",
  "Mindfulness and burnout resources",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{ background: "var(--color-sage-900)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Austin Clinician Circle
          </p>
          <h1
            className="mb-8 leading-tight max-w-2xl"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Deepen your work.
            <br />
            Find your community.
          </h1>
          <p
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            A virtual membership network for licensed therapists in the Austin
            area — built to end the isolation of private practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium transition-colors duration-150"
              style={{ background: "#fff", color: "var(--color-sage-700)" }}
            >
              Join the circle
            </Link>
            <Link
              href="/what-we-offer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium border transition-colors duration-150"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              What we offer
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-sage-600)" }}
          >
            Membership benefits
          </p>
          <h2
            className="mb-16 max-w-lg"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Everything you need to thrive in private practice.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="flex flex-col gap-4">
                <span
                  className="text-2xl"
                  style={{ color: "var(--color-sage-500)" }}
                >
                  {p.icon}
                </span>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--color-sage-800)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-200)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className="aspect-square rounded-2xl max-w-sm w-full"
            style={{ background: "var(--color-sage-100)" }}
          />
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-600)" }}
            >
              Founded by
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--color-sage-900)",
              }}
            >
              Sarah Arnold, LPC-S
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Sarah is a licensed professional counselor supervisor and the
              founder of Restored Family Counseling in Austin, TX. After years of
              supervising associates and building a group practice, she saw
              firsthand how isolated licensed therapists can become once they
              leave a structured training environment.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The Austin Clinician Circle is her answer — a professional home
              that gives therapists the community, resources, and support they
              need to sustain excellent work over the long haul.
            </p>
            <Link
              href="/who-we-are"
              className="text-sm font-medium underline transition-colors duration-150"
              style={{
                color: "var(--color-sage-700)",
                textUnderlineOffset: "4px",
              }}
            >
              Read more about ACC →
            </Link>
          </div>
        </div>
      </section>

      {/* DIRECTORY PREVIEW */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-100)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "var(--color-sage-600)" }}
          >
            Our clinicians
          </p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--color-sage-900)",
            }}
          >
            Therapists you can trust.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {memberPreview.map((c) => (
              <ClinicianCard key={c.name} {...c} />
            ))}
          </div>
          <Link
            href="/find-a-clinician"
            className="text-sm font-medium underline"
            style={{
              color: "var(--color-sage-700)",
              textUnderlineOffset: "4px",
            }}
          >
            Browse the full directory →
          </Link>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section
        className="py-24"
        style={{ background: "var(--color-cream-200)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--color-sage-600)" }}
              >
                Membership
              </p>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  color: "var(--color-sage-900)",
                }}
              >
                One membership. Everything you need.
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "var(--color-text-secondary)" }}
              >
                No tiers, no upsells. A single flat membership gives you full
                access to every benefit — clinical, professional, and personal.
              </p>
              <Link
                href="/what-we-offer"
                className="text-sm font-medium underline"
                style={{
                  color: "var(--color-sage-700)",
                  textUnderlineOffset: "4px",
                }}
              >
                See full details →
              </Link>
            </div>
            <div className="max-w-sm">
              <PricingCard
                price="$129"
                features={pricingFeatures}
                featured
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--color-sage-700)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Ready to find your clinical community?
          </h2>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Founding membership spots are limited. Apply now to join a cohort of
            Austin-area therapists who take their work seriously.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-medium transition-colors duration-150 hover:opacity-90"
            style={{ background: "#fff", color: "var(--color-sage-700)" }}
          >
            Apply for membership
          </Link>
        </div>
      </section>
    </>
  );
}
