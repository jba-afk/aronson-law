import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden bg-[var(--aronson-navy)] text-white">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url('/photography/annapolis-evening.png')",
          backgroundPosition: "75% center",
        }}
      />

<div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,23,38,0.94)] via-[rgba(7,23,38,0.56)] to-[rgba(7,23,38,0.08)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,23,38,0.28)] via-transparent to-transparent" />

      <div className="container relative z-10 flex min-h-[780px] items-center">
        <div className="max-w-[720px] py-20">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[var(--chesapeake-gold)]">
            Practical Counsel · Proven Advocacy
          </p>

<h1 className="serif text-[clamp(3.6rem,5vw,5.5rem)] leading-[0.96] tracking-[-0.04em]">
            Sophisticated
            <br />
            Representation.
            <br />
            Personal
            <br />
            Commitment.
          </h1>

          <div className="my-7 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />

          <p className="max-w-2xl text-lg leading-8 text-white/90">
            Aronson Law provides thoughtful legal counsel and determined
            advocacy for individuals, families, and businesses throughout
            Maryland.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>

            <Link href="/practice-areas" className="btn btn-secondary">
              Explore Practice Areas
            </Link>
          </div>

          <p className="mt-7 text-base text-[var(--chesapeake-gold)]">
            Serving individuals, families, and businesses across Maryland.
          </p>
        </div>
      </div>
    </section>
  );
}