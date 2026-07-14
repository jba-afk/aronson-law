import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

const services = [
  {
    title: "Construction Contracts",
    description:
      "Drafting, negotiating, and reviewing construction contracts that allocate risk appropriately, protect your interests, and reduce the likelihood of costly disputes.",
  },
  {
    title: "Mechanic's Liens & Bond Claims",
    description:
      "Preparing, filing, defending, and enforcing Maryland mechanic's liens and payment bond claims to protect your right to be paid.",
  },
  {
    title: "Payment Disputes",
    description:
      "Resolving unpaid invoices, retainage disputes, change-order claims, and other payment issues through negotiation or litigation when necessary.",
  },
  {
    title: "Construction Litigation",
    description:
      "Experienced representation for contractors, subcontractors, owners, and suppliers in complex construction disputes before state and federal courts, arbitration panels, and other tribunals.",
  },
  {
    title: "Defect Claims",
    description:
      "Representation in disputes involving alleged construction defects, delays, warranty claims, defective workmanship, and project-performance issues.",
  },
  {
    title: "Risk Management",
    description:
      "Helping contractors identify legal risks before problems arise through practical contract review, project counseling, and proactive legal advice.",
  },
];

export default function ConstructionLawServices() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
            How We Help
          </p>

          <h2 className="mt-4 serif text-[clamp(3rem,4vw,4.5rem)] leading-tight text-[var(--aronson-navy)]">
            Comprehensive Construction Counsel
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-[var(--muted)]">
            From contract negotiation through litigation, Aronson Law
            represents Maryland contractors, subcontractors, developers,
            suppliers, and property owners throughout every stage of a
            construction project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative min-h-[340px] overflow-hidden border border-[var(--border)] bg-white px-8 py-9 shadow-[0_10px_28px_rgba(7,23,38,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(7,23,38,0.11)]"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="serif text-3xl leading-tight text-[var(--aronson-garnet)]">
                {service.title}
              </h3>

              <div className="mt-5 h-px w-12 bg-[var(--chesapeake-gold)]" />

              <p className="mt-5 text-[17px] leading-8 text-[var(--muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <PrimaryButton href="/contact">
            Schedule a Consultation
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}