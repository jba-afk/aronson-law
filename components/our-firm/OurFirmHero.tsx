import Link from "next/link";

export default function OurFirmHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[var(--aronson-navy)] text-white">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            "url('/photography/annapolis-evening.png')",
          backgroundPosition: "72% center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,23,38,0.95)] via-[rgba(7,23,38,0.62)] to-[rgba(7,23,38,0.14)]" />

      <div className="container relative z-10 flex min-h-[650px] items-center">
        <div className="max-w-[720px] py-20">
          <p className="mb-5 text-base font-bold uppercase tracking-[0.16em] text-[var(--chesapeake-gold)]">
            Our Firm
          </p>

          <h1 className="serif text-[clamp(3.7rem,5.2vw,5.8rem)] leading-[0.96] tracking-[-0.04em]">
            Sophisticated
            <br />
            Representation.
            <br />
            Personal
            <br />
            Commitment.
          </h1>

          <div className="my-7 h-[3px] w-28 bg-[var(--chesapeake-gold)]" />

         <p className="max-w-2xl text-lg leading-8 text-white/90">
  Aronson Law provides thoughtful legal counsel and determined advocacy
  for individuals, families, and businesses throughout Maryland.
</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--aronson-garnet)] px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/our-attorneys"
              className="inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--chesapeake-gold)] px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--chesapeake-gold)] hover:text-[var(--aronson-navy)]"
            >
              Meet Our Attorneys
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
