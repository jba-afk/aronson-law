import Container from "@/components/ui/Container";
import { getTestimonial } from "@/data/testimonials";

export default function FamilyLawTestimonial() {
  const testimonial = getTestimonial("jose-excellent-service");

  if (!testimonial) {
    return null;
  }

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden border border-[var(--chesapeake-gold)] bg-[var(--maryland-ivory)] px-8 py-12 shadow-[0_14px_38px_rgba(7,23,38,0.08)] sm:px-12 lg:px-16 lg:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-3 -top-12 serif text-[13rem] leading-none text-[var(--aronson-garnet)] opacity-[0.06]"
          >
            “
          </span>

          <div className="relative mx-auto max-w-4xl text-center">
            <div
              aria-label={`${testimonial.rating}-star review`}
              className="text-2xl tracking-[0.12em] text-[var(--chesapeake-gold)]"
            >
              <span aria-hidden="true">
                {"★".repeat(testimonial.rating)}
              </span>
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.17em] text-[var(--aronson-garnet)]">
              Client Review
            </p>

            <blockquote className="mt-6 serif text-[clamp(2.2rem,4vw,4.25rem)] leading-[1.08] tracking-[-0.025em] text-[var(--aronson-navy)]">
              “Justin and his team were very professional and very
              knowledgeable.”
            </blockquote>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              “They walked me through the process and communicated with me
              effectively and efficiently.”
            </p>

            <div className="mx-auto mt-8 h-px max-w-2xl bg-[var(--border)]" />

            <p className="mt-7 font-semibold text-[var(--ink)]">
              {testimonial.reviewer}, {testimonial.reviewerDescription}
            </p>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Five-star client review on {testimonial.source}
            </p>

            <a
              href={testimonial.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-garnet)] transition hover:text-[var(--aronson-garnet-light)]"
            >
              Read More Client Reviews on Avvo
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}