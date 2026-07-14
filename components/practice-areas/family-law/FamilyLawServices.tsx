import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    icon: "⚖",
    title: "Divorce",
    description:
      "Strategic representation focused on protecting your financial interests and helping you pursue a practical long-term resolution.",
  },
  {
    icon: "♧",
    title: "Child Custody",
    description:
      "Thoughtful advocacy for parenting arrangements that serve the best interests of your children.",
  },
  {
    icon: "▦",
    title: "Child Support",
    description:
      "Clear guidance regarding support calculations, enforcement, and modification under Maryland law.",
  },
  {
    icon: "⌂",
    title: "Alimony",
    description:
      "Advice and advocacy regarding temporary, rehabilitative, and indefinite alimony claims.",
  },
  {
    icon: "◇",
    title: "Property Division",
    description:
      "Careful analysis and representation concerning the equitable distribution of marital property.",
  },
  {
    icon: "↻",
    title: "Post-Judgment Matters",
    description:
      "Representation involving modifications, enforcement, contempt, and other issues arising after judgment.",
  },
];

export default function FamilyLawServices() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="serif text-[clamp(3rem,4vw,4.5rem)] leading-tight text-[var(--aronson-navy)]">
            Family Law Services
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            We provide practical counsel and determined advocacy across a
            broad range of Maryland family law matters.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group border border-[var(--border)] bg-white px-8 py-9 shadow-[0_10px_28px_rgba(7,23,38,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(7,23,38,0.1)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--chesapeake-gold)] text-3xl text-[var(--aronson-garnet)]">
                {service.icon}
              </div>

              <h3 className="serif text-3xl text-[var(--aronson-garnet)]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--aronson-garnet)] px-8 py-4 text-base font-bold uppercase tracking-[0.12em] !text-white transition-all duration-300 hover:bg-[#7a1c29] hover:shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </Container>
    </section>
  );
}