import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function TrustsEstatesHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[var(--aronson-navy)]">
      {/* Background photograph */}
      <div
        aria-hidden="true"
        className="trusts-estates-hero-image absolute inset-0 scale-[1.04] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/photography/trusts-estates-hero.png')",
        }}
      />

      {/* Dark left-side overlay for readable text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(3,11,19,0.96)] via-[rgba(3,11,19,0.72)] to-[rgba(3,11,19,0.12)]"
      />

      {/* Gentle lower vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(3,11,19,0.42)] via-transparent to-[rgba(3,11,19,0.08)]"
      />

      <Container className="relative z-10 flex min-h-[620px] items-center py-20 lg:py-28">
        <div className="max-w-[700px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chesapeake-gold)]">
            Thoughtful Estate Counsel
          </p>

          <h1 className="serif text-[clamp(3.25rem,5.8vw,5.4rem)] leading-[0.96] tracking-[-0.035em] text-white">
            Trusts &amp; Estates
          </h1>

          <p className="serif mt-6 max-w-2xl text-[clamp(1.4rem,2.4vw,2.1rem)] italic leading-tight text-[var(--chesapeake-gold)]">
            Thoughtful Planning for the People and the Future That Matter Most
          </p>

          <div className="trusts-estates-hero-rule mt-7 h-[3px] w-24 origin-left bg-[var(--chesapeake-gold)]" />

          <div className="mt-7 max-w-xl space-y-4 text-[1.05rem] leading-7 text-white/88">
            <p>
              Estate planning is not simply about preparing documents. It is
              about protecting your family, preserving what you have built,
              and creating clarity for the people you love.
            </p>

            <p>
              Whether you are planning for the future or administering the
              estate of a loved one, Aronson Law provides experienced guidance
              with compassion and care.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton href="/contact">
              Schedule a Consultation
            </PrimaryButton>

            <a
              href="/our-attorneys/mitchell-cornwell"
              className="inline-flex min-h-12 items-center justify-center rounded-[3px] border-2 border-[var(--chesapeake-gold)] bg-white/10 px-7 text-sm font-extrabold uppercase tracking-[0.025em] !text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--chesapeake-gold)] hover:!text-[var(--aronson-navy)]"
            >
              Meet Mitch Cornwell
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
