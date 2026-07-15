import Container from "@/components/ui/Container";

const problems = [
  {
    number: "01",
    title: "The Owner Has Not Paid",
    description:
      "We evaluate your contract rights and develop an efficient strategy to pursue payment while protecting important business relationships whenever possible.",
  },
  {
    number: "02",
    title: "The Contractor Walked Off the Job",
    description:
      "We assess the governing contract, available remedies, project documentation, and the practical next steps needed to protect your interests.",
  },
    {
  number: "03",
  title: "A Major Contract Needs Renegotiation",
  description:
    "Careful contract drafting and negotiation can allocate risk clearly, prevent misunderstandings, and reduce the likelihood of expensive disputes.",
},
  {
    number: "04",
    title: "The Project Has Gone Sideways",
    description:
      "When problems escalate, we develop a strategy that protects your legal and business interests and positions you for the strongest practical outcome.",
  },
];

export default function ConstructionLawProblems() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
            When Problems Arise
          </p>

          <h2 className="mt-4 serif text-[clamp(2.75rem,3.6vw,4rem)] leading-[1.08] text-[var(--aronson-navy)]">
            Common Construction Problems We Help Solve
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-[var(--muted)]">
            Construction disputes can disrupt schedules, cash flow, and
            long-standing business relationships. Aronson Law helps clients
            identify their options and move toward practical solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group relative min-h-[330px] border border-[var(--border)] bg-[var(--maryland-ivory)] px-8 py-9 shadow-[0_10px_28px_rgba(7,23,38,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,23,38,0.1)]"
            >
              <div className="flex items-center gap-4">
                <span className="serif text-2xl text-[var(--chesapeake-gold)]">
                  {problem.number}
                </span>

                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              <h3 className="mt-8 serif text-[2rem] leading-tight text-[var(--aronson-garnet)]">
                {problem.title}
              </h3>

              <div className="mt-5 h-px w-12 bg-[var(--chesapeake-gold)]" />

              <p className="mt-5 text-[17px] leading-8 text-[var(--muted)]">
                {problem.description}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}