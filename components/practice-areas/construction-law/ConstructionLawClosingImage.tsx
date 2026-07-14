import Container from "@/components/ui/Container";

export default function ConstructionLawClosingImage() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden border border-[var(--border)] shadow-[0_18px_50px_rgba(7,23,38,0.12)]">
          <div
            aria-hidden="true"
            className="h-[560px] bg-cover bg-center sm:h-[620px] lg:h-[680px]"
            style={{
              backgroundImage:
                "url('/photography/construction-hero.jpg')",
              backgroundPosition: "center 45%",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[rgba(7,23,38,0.94)] via-[rgba(7,23,38,0.58)] to-[rgba(7,23,38,0.08)]"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[680px] px-8 py-12 text-white sm:px-12 lg:px-14">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
                Built on Preparation
              </p>

              <h2 className="mt-4 serif text-[clamp(2.65rem,3.6vw,4rem)] leading-[1.04]">
                Good Construction Projects Begin with Good Planning
              </h2>

              <div className="mt-6 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
                Successful legal representation is no different. Careful
                planning, clear communication, and practical strategy help
                protect your project and your business.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}