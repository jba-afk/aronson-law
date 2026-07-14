import Container from "@/components/ui/Container";

const processSteps = [
  {
    number: "1",
    title: "Listen",
    description:
      "We take time to understand your situation, your concerns, and your goals before offering legal advice.",
  },
  {
    number: "2",
    title: "Develop a Strategy",
    description:
      "Every matter receives an individualized legal strategy tailored to your objectives and unique circumstances.",
  },
  {
    number: "3",
    title: "Guide You",
    description:
      "We communicate clearly and keep you informed throughout every stage of your case.",
  },
  {
    number: "4",
    title: "Advocate",
    description:
      "Whether negotiating or litigating, we pursue practical solutions with determination and professionalism.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="serif text-[clamp(2.8rem,4vw,4.25rem)] leading-tight text-[var(--aronson-garnet)]">
            Our Process
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />
        </div>

        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[var(--aronson-garnet)] lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--aronson-garnet)] text-2xl font-bold text-white shadow-[0_8px_20px_rgba(122,20,35,0.2)]">
                  {step.number}
                </div>

                <h3 className="serif mb-4 text-3xl leading-tight text-[var(--aronson-garnet)]">
                  {step.title}
                </h3>

                <p className="max-w-[260px] leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}