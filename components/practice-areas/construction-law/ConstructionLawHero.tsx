import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ConstructionLawHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--aronson-navy)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/photography/construction-hero.jpg')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(7,23,38,0.98)] via-[rgba(7,23,38,0.9)] to-[rgba(7,23,38,0.35)]"
      />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 font-semibold uppercase tracking-[0.2em] text-[var(--chesapeake-gold)]">
            Practice Area
          </p>

          <h1 className="serif text-[clamp(3.5rem,6vw,5.5rem)] leading-none text-white">
            Construction Law
          </h1>

          <div className="mt-8 h-[3px] w-24 bg-[var(--chesapeake-gold)]" />

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/85">
            Strategic legal counsel for contractors, developers,
            subcontractors, suppliers, and property owners throughout
            Maryland.
          </p>

          <div className="mt-12">
            <PrimaryButton href="/contact">
              Schedule a Consultation
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}