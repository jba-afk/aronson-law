import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[860px] overflow-hidden bg-[var(--aronson-navy-deep)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/hero/annapolis-evening.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(197,154,61,0.16),transparent_36%)]" />

      <div className="container relative z-10 flex min-h-[860px] items-center">
        <div className="max-w-4xl pt-8">
          <p className="eyebrow mb-5">
            Practical Counsel · Proven Advocacy
          </p>

          <h1 className="serif max-w-4xl text-[clamp(4rem,7vw,7.75rem)] leading-[0.9] tracking-[-0.055em]">
            Sophisticated
            <br />
            Representation.
            <br />
            Personal
            <br />
            Commitment.
          </h1>

          <div className="accent-rule my-8" />

          <p className="max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Aronson Law provides thoughtful legal counsel and determined
            advocacy for individuals, families, and businesses throughout
            Maryland.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/practice-areas" className="btn btn-secondary">
              Explore Practice Areas
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/75">
            Serving individuals, families, and businesses across Maryland.
          </p>
        </div>
      </div>
    </section>
  );
}