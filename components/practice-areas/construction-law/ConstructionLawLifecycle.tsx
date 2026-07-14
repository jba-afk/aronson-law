import Container from "@/components/ui/Container";

const lifecycleSteps = [
  {
    number: "01",
    title: "Before Construction",
    items: [
      "Contract review",
      "Risk assessment",
      "Negotiation",
    ],
  },
  {
    number: "02",
    title: "During Construction",
    items: [
  "Change orders",
  "Payment issues",
  "Differing Site Conditions",
],
  },
  {
    number: "03",
    title: "If a Dispute Arises",
    items: [
      "Negotiation",
      "Mediation",
      "Litigation",
    ],
  },
  {
    number: "04",
    title: "Resolution",
    items: [
      "Settlement",
      "Trial",
      "Appeal if necessary",
    ],
  },
];

export default function ConstructionLawLifecycle() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
            From Planning Through Resolution
          </p>

          <h2 className="mt-4 serif text-[clamp(2.75rem,3.6vw,4rem)] leading-[1.08] text-[var(--aronson-navy)]">
            The Construction Lifecycle
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-[var(--muted)]">
            Legal issues can arise at every stage of a construction project.
            Aronson Law helps clients address problems early, protect their
            interests, and pursue practical solutions when disputes escalate.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[var(--border)] lg:block"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {lifecycleSteps.map((step) => (
              <article
                key={step.number}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--aronson-navy)] text-lg font-bold text-white shadow-[0_8px_20px_rgba(7,23,38,0.16)]">
                  {step.number}
                </div>

                <h3 className="mt-7 serif text-[1.8rem] leading-tight text-[var(--aronson-garnet)]">
                  {step.title}
                </h3>

                <div className="mx-auto mt-4 h-px w-10 bg-[var(--chesapeake-gold)]" />

                <ul className="mt-5 space-y-2 text-[16px] leading-7 text-[var(--muted)]">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}