import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CommercialLitigationCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--aronson-navy)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/photography/annapolis-evening.png')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[rgba(3,11,19,0.96)] via-[rgba(3,11,19,0.82)] to-[rgba(3,11,19,0.52)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[rgba(3,11,19,0.58)] via-transparent to-transparent"
      />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--chesapeake-gold)]">
            Strategic Counsel for Business Disputes
          </p>

          <h2 className="serif mt-5 text-[clamp(2.65rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.035em] text-white">
            Protect Your Business Before Litigation Imperils It.
          </h2>

          <div className="mt-7 h-[3px] w-24 bg-[var(--chesapeake-gold)]" />

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85">
            Whether you are responding to a lawsuit, confronting a business
            dispute, or planning ahead to reduce litigation risk, Aronson Law
            provides strategic representation grounded in careful analysis,
            practical judgment, and determined advocacy.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton href="/contact">
              Schedule a Consultation
            </PrimaryButton>

            <a
  href="tel:4108207442"
  className="inline-flex min-h-12 items-center justify-center rounded-[3px] border-2 border-[var(--chesapeake-gold)] bg-[rgba(255,255,255,0.14)] px-7 text-sm font-extrabold uppercase tracking-[0.025em] !text-white shadow-[0_8px_20px_rgba(0,0,0,0.24)] backdrop-blur-[3px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--chesapeake-gold)] hover:!text-[var(--aronson-navy)]"
>
  Call Our Office
</a>
          </div>
        </div>
      </Container>
    </section>
  );
}