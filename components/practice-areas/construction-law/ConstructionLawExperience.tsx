import Container from "@/components/ui/Container";

const clientTypes = [
  "Property Owners",
  "General Contractors",
  "Subcontractors",
  "Developers",
  "Suppliers",
  "Design Professionals",
];

export default function ConstructionLawExperience() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Who We Represent */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
              Construction Industry Clients
            </p>

            <h2 className="mt-4 serif text-[clamp(2.75rem,3.6vw,4rem)] leading-[1.08] text-[var(--aronson-navy)]">
              Who We Represent
            </h2>

            <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

            <p className="mt-7 max-w-xl text-[17px] leading-8 text-[var(--muted)]">
              Aronson Law represents businesses and professionals throughout Maryland's construction industry, providing practical legal counsel tailored to each client's role, project, and long-term business objectives.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {clientTypes.map((clientType) => (
                <div
                  key={clientType}
                  className="flex min-h-16 items-center gap-4 border border-[var(--border)] bg-[var(--maryland-ivory)] px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--chesapeake-gold)] text-sm font-bold text-[var(--chesapeake-gold)]">
                    ✓
                  </span>

                  <span className="font-semibold text-[var(--aronson-navy)]">
                    {clientType}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Experience Matters */}
          <div className="border-l-0 border-[var(--border)] lg:border-l lg:border-[rgba(7,23,38,0.08)] lg:pl-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
              Practical Perspective
            </p>

            <h2 className="mt-4 serif text-[clamp(2.75rem,3.6vw,4rem)] leading-[1.08] text-[var(--aronson-navy)]">
              Why Experience Matters
            </h2>

            <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

            <div className="mt-7 space-y-6 text-[17px] leading-8 text-[var(--muted)]">
              <p>
                Construction disputes rarely involve legal issues alone. They
                can affect schedules, budgets, payment, business
                relationships, and the success of an entire project.
              </p>

              <p>
                Effective representation requires an understanding of how
                construction projects actually operate, how contracts allocate
                risk, and how disputes affect the people and businesses
                involved.
              </p>

              <p>
                Aronson Law provides strategic, efficient, and practical
                representation designed to protect your legal rights while
                remaining focused on your broader business objectives.
              </p>
            </div>

            <div className="mt-9 border-l-[3px] border-[var(--chesapeake-gold)] bg-gradient-to-r from-[var(--maryland-ivory)] to-white px-7 py-6 shadow-[0_10px_30px_rgba(7,23,38,0.08)]">
              <p className="serif text-2xl leading-snug text-[var(--aronson-garnet)]">
                Legal strategy should support the project, the business, and
                the client’s long-term goals.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}