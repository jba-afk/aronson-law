import Container from "@/components/ui/Container";
import { getTestimonial } from "@/data/testimonials";

const advantages = [
  {
    icon: "⚖",
    title: "Sophisticated Experience",
    description:
      "Complex litigation and trial experience applied to every matter, with a depth of knowledge gained from handling significant legal matters throughout Maryland and beyond.",
  },
  {
    icon: "◎",
    title: "Personal Accessibility",
    description:
      "Clients work directly with their attorney from beginning to end. We are responsive, approachable, and invested in your success.",
  },
  {
    icon: "♞",
    title: "Strategic Advocacy",
    description:
      "Every case begins with careful preparation, thoughtful planning, and a clear understanding of the client’s goals to achieve the best possible outcome.",
  },
  {
    icon: "⌖",
    title: "Maryland Focus",
    description:
      "Proudly serving individuals, families, and businesses throughout Maryland from our office in Easton.",
  },
];

export default function FirmAdvantages() {
  const testimonial = getTestimonial("bill-true-advocate");

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mb-14 grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="serif text-[clamp(3rem,4.5vw,4.75rem)] leading-[1.03] tracking-[-0.035em] text-[var(--aronson-garnet)]">
              What Sets
              <br />
              Aronson Law Apart?
            </h2>

            <div className="mt-6 h-[3px] w-24 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Clients come to Aronson Law for sophisticated legal counsel
              delivered with the accessibility, responsiveness, and personal
              commitment of a boutique Maryland firm.
            </p>
          </div>

          {testimonial && (
            <aside className="relative overflow-hidden border border-[var(--chesapeake-gold)] bg-[var(--maryland-ivory)] px-8 py-9 shadow-[0_12px_32px_rgba(7,23,38,0.09)] sm:px-10 lg:px-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 -top-8 serif text-[10rem] leading-none text-[var(--aronson-garnet)] opacity-[0.07]"
              >
                “
              </span>

              <div className="relative">
                <div
                  aria-label={`${testimonial.rating}-star review`}
                  className="mb-5 text-2xl tracking-[0.08em] text-[var(--chesapeake-gold)]"
                >
                  <span aria-hidden="true">
                    {"★".repeat(testimonial.rating)}
                  </span>
                </div>

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[var(--aronson-garnet)]">
                  {testimonial.title}
                </p>

                <blockquote className="serif text-[clamp(2rem,3vw,3.25rem)] leading-[1.12] tracking-[-0.025em] text-[var(--aronson-navy)]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-7 border-t border-[var(--border)] pt-5">
                  <p className="font-semibold text-[var(--ink)]">
                    {testimonial.reviewer}, {testimonial.reviewerDescription}
                  </p>

                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Five-star client review on {testimonial.source}
                  </p>

                  <a
                    href={testimonial.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-garnet)] transition hover:text-[var(--aronson-garnet-light)]"
                  >
                    Read More Client Reviews on Avvo
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </aside>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((advantage) => (
            <article
              key={advantage.title}
              className="flex min-h-[360px] flex-col items-center border border-[var(--border)] bg-[var(--maryland-ivory)] px-7 py-9 text-center shadow-[0_10px_28px_rgba(7,23,38,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(7,23,38,0.12)]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--chesapeake-gold)] bg-white text-4xl text-[var(--aronson-garnet)]">
                {advantage.icon}
              </div>

              <h3 className="serif mb-5 text-3xl leading-tight text-[var(--aronson-navy)]">
                {advantage.title}
              </h3>

              <p className="leading-7 text-[var(--muted)]">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}