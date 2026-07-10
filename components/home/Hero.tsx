import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[860px] overflow-hidden bg-[var(--aronson-navy)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_right]"
        style={{
          backgroundImage:
            "url('/photography/annapolis-evening.png')",
        }}
      />

<div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,23,38,0.88)] via-[rgba(7,23,38,0.52)] to-[rgba(7,23,38,0.08)]" />
<div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,23,38,0.25)] via-transparent to-transparent" />

      <div className="container relative z-10 flex min-h-[860px] items-center">
<div className="max-w-[760px] py-24">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.14em] text-[var(--chesapeake-gold)]">
            Practical Counsel · Proven Advocacy
          </p>

          <h1 className="serif max-w-3xl text-[clamp(4rem,6vw,6.75rem)] leading-[0.96] tracking-[-0.045em]">
            Sophisticated
            <br />
            Representation.
            <br />
            Personal
            <br />
            Commitment.
          </h1>

          <div className="my-8 h-[3px] w-24 bg-[var(--chesapeake-gold)]" />

          <p className="max-w-2xl text-lg leading-8 text-white/92 md:text-xl">
            Aronson Law provides thoughtful legal counsel and determined
            advocacy for individuals, families, and businesses throughout
            Maryland.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>

            <Link href="/practice-areas" className="btn btn-secondary">
              Explore Practice Areas
            </Link>
          </div>

          <p className="mt-8 text-base text-[var(--chesapeake-gold)]">
            Serving individuals, families, and businesses across Maryland.
          </p>
        </div>
      </div>
    </section>
  );
}