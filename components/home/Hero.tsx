import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[var(--aronson-navy-deep)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: "url('/hero/annapolis-evening.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      <div className="container relative z-10 flex min-h-[720px] items-center">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Practical Counsel · Proven Advocacy</p>

          <h1 className="serif text-6xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Sophisticated Representation.
            <br />
            Personal Commitment.
          </h1>

          <div className="accent-rule my-7" />

          <p className="max-w-xl text-lg leading-8 text-white/90">
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

          <p className="mt-8 text-sm text-white/75">
            Serving individuals, families, and businesses across Maryland.
          </p>
        </div>
      </div>
    </section>
  );
}