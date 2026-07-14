import Container from "@/components/ui/Container";

const matters = [
  {
    clientType: "Commercial Contractors",
    title: "Payment and Collection Disputes",
    description:
      "Counsel in disputes involving unpaid contract balances, retainage, change orders, and other amounts due for completed construction work.",
  },
  {
    clientType: "Contractors and Suppliers",
    title: "Mechanic’s Liens and Bond Claims",
    description:
      "Representation concerning Maryland mechanic’s lien rights, payment bond claims, filing requirements, enforcement proceedings, and related defenses.",
  },
  {
    clientType: "Owners and Construction Businesses",
    title: "Defect, Delay, and Performance Claims",
    description:
      "Strategic representation in disputes involving alleged construction defects, project delays, warranty obligations, workmanship, and contractual performance.",
  },
  {
    clientType: "Project Participants",
    title: "Contract Negotiation and Risk Allocation",
    description:
      "Drafting, reviewing, and negotiating construction agreements designed to define responsibilities, allocate risk, and reduce the likelihood of future disputes.",
  },
];

export default function ConstructionLawResults() {
  return (
    <section className="bg-[var(--aronson-navy)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
            Experience Across the Construction Industry
          </p>

          <h2 className="mt-4 serif text-[clamp(2.75rem,3.6vw,4rem)] leading-[1.08] text-white">
            Representative Construction Matters
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-white/75">
            Aronson Law assists construction businesses and project
            participants with legal issues arising before, during, and after
            construction—from contract planning through dispute resolution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {matters.map((matter, index) => (
            <article
              key={matter.title}
              className="group relative overflow-hidden border border-white/15 bg-white/[0.06] px-8 py-9 transition duration-300 hover:-translate-y-1 hover:border-[var(--chesapeake-gold)]/60 hover:bg-white/[0.09]"
            >
              <div className="flex items-center gap-4">
                <span className="serif text-2xl text-[var(--chesapeake-gold)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="h-px flex-1 bg-white/15" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
                {matter.clientType}
              </p>

              <h3 className="mt-3 serif text-[2rem] leading-tight text-white">
                {matter.title}
              </h3>

              <p className="mt-5 text-[17px] leading-8 text-white/70">
                {matter.description}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-white/55">
          Every matter is different, and prior experience does not guarantee a
          particular result. The descriptions above identify general types of
          matters handled and are not intended to disclose confidential client
          information.
        </p>
      </Container>
    </section>
  );
}