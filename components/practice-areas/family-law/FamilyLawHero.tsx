import Link from "next/link";
import Container from "@/components/ui/Container";

export default function FamilyLawHero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[var(--aronson-navy)] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/photography/annapolis-evening.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,23,38,0.98)] via-[rgba(7,23,38,0.78)] to-[rgba(7,23,38,0.2)]" />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,23,38,0.45)] via-transparent to-transparent" />

      <Container className="relative z-10 flex min-h-[700px] items-center">
        <div className="max-w-3xl py-20">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)] md:text-base">
            Family Law
          </p>

          <h1 className="serif text-[clamp(4rem,7vw,7.5rem)] leading-[0.94] tracking-[-0.045em]">
            Experienced Guidance
            <br />
            Through Life&apos;s
            <br />
            Most Important
            <br />
            Transitions.
          </h1>

          <div className="my-7 h-[3px] w-24 bg-[var(--chesapeake-gold)]" />

          <p className="max-w-2xl text-lg leading-8 text-white/92 md:text-xl">
            Family legal matters are deeply personal. Aronson Law provides
            thoughtful counsel and determined advocacy to help clients
            navigate divorce, custody, child support, alimony, property
            division, and related family law matters throughout Maryland.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center bg-[var(--aronson-garnet)] px-7 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_10px_26px_rgba(122,20,35,0.24)] transition hover:bg-[var(--aronson-garnet-light)]"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/our-attorneys/justin-aronson"
              className="inline-flex min-h-14 items-center justify-center border border-[var(--chesapeake-gold)] px-7 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-white hover:text-[var(--aronson-navy)]"
            >
              Meet Justin Aronson
            </Link>
          </div>

          <nav
            aria-label="Breadcrumb"
            className="mt-10 text-sm text-white/70"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>

            <span className="mx-3 text-[var(--chesapeake-gold)]">›</span>

            <span>Practice Areas</span>

            <span className="mx-3 text-[var(--chesapeake-gold)]">›</span>

            <span className="text-white">Family Law</span>
          </nav>
        </div>
      </Container>
    </section>
  );
}
