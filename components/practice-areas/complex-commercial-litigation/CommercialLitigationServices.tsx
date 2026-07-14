import Container from "@/components/ui/Container";

const services = [
  {
    title: "Contract Disputes",
    items: [
      "Breach of Contract",
      "Commercial Agreements",
      "Purchase & Sale Agreements",
      "Vendor Disputes",
    ],
  },
  {
    title: "Business Litigation",
    items: [
      "Partnership Disputes",
      "Shareholder Disputes",
      "Business Torts",
      "Fiduciary Duty Claims",
    ],
  },
  {
    title: "Real Estate & Construction Litigation",
    items: [
      "Commercial Real Estate",
      "Development Disputes",
      "Construction Litigation",
      "Related Business Claims",
    ],
  },
  {
    title: "Strategic Counsel",
    items: [
      "Risk Assessment",
      "Early Case Evaluation",
      "Settlement Strategy",
      "Trial Preparation",
    ],
  },
];

export default function CommercialLitigationServices() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Commercial Litigation Services</p>

          <h2 className="section-title mt-3 text-[var(--aronson-navy)]">
            How We Help
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-[var(--chesapeake-gold)]" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="commercial-service-card rounded-[5px] border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-soft)]"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--aronson-navy)] text-white">
                <span className="serif text-2xl">{index + 1}</span>
              </div>

              <h3 className="serif mt-6 text-2xl leading-tight text-[var(--aronson-navy)]">
                {service.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--ink)]"
                  >
                    <span className="mt-[2px] text-[var(--chesapeake-gold)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}