import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CommercialLitigationHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[var(--aronson-navy)]">
      {/* Boardroom background image */}
      <div
        aria-hidden="true"
        className="commercial-litigation-hero-image absolute inset-0 scale-[1.04] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/photography/commercial-litigation-hero.png')",
        }}
      />

      {/* Dark executive overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(7,13,19,0.78)]
via-[rgba(7,13,19,0.55)]
to-[rgba(7,13,19,0.25)]"
      />

      {/* Subtle lower vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(3,11,19,0.52)] via-transparent to-[rgba(3,11,19,0.12)]"
      />

      <Container className="relative z-10 flex min-h-[620px] items-center py-20 lg:py-28">
        <div className="max-w-[690px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chesapeake-gold)]">
            Strategic Commercial Counsel
          </p>

          <h1 className="serif text-[clamp(3.15rem,5.7vw,5.25rem)] leading-[0.96] tracking-[-0.035em] text-white">
            Complex Commercial Litigation
          </h1>

          <p className="serif mt-6 max-w-2xl text-[clamp(1.45rem,2.4vw,2.15rem)] italic leading-tight text-[var(--chesapeake-gold)]">
            Strategic Advocacy for High-Stakes Business Disputes
          </p>

          <div className="commercial-litigation-hero-rule mt-7 h-[3px] w-24 origin-left bg-[var(--chesapeake-gold)]" />

          <div className="mt-7 max-w-xl space-y-4 text-[1.05rem] leading-7 text-white/88">
            <p>
              Business disputes require more than legal knowledge. They
              require careful analysis, strategic planning, and experienced
              advocacy.
            </p>

            <p>
              Aronson Law represents businesses, owners, professionals, and
              individuals in complex commercial litigation throughout
              Maryland.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton href="/contact">
              Schedule a Consultation
            </PrimaryButton>

            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-[3px] border border-[var(--chesapeake-gold)] bg-[rgba(7,23,38,0.36)] px-7 text-sm font-extrabold uppercase tracking-[0.025em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[rgba(197,154,61,0.16)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}