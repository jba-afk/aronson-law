import Link from "next/link";

interface TestimonialCardProps {
  title: string;
  quote: string;
  highlightedEnding?: string;
  reviewer: string;
  reviewerDescription: string;
  source: string;
  sourceUrl?: string;
  rating?: number;
}

export default function TestimonialCard({
  title,
  quote,
  highlightedEnding,
  reviewer,
  reviewerDescription,
  source,
  sourceUrl,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl">

        <div className="overflow-hidden rounded-sm border border-[#e7dcc7] bg-[var(--maryland-ivory)] shadow-[0_14px_40px_rgba(7,23,38,0.08)]">

          <div className="px-10 py-14 lg:px-20">

            <div className="text-center">

              <div className="text-2xl tracking-[0.18em] text-[var(--chesapeake-gold)]">
                {"★".repeat(rating)}
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[var(--aronson-garnet)]">
                {title}
              </p>

            </div>

            <blockquote className="relative mt-12">

              <span
                aria-hidden="true"
                className="absolute -left-5 -top-8 serif text-8xl text-[#d9cdb8]"
              >
                “
              </span>

              <div className="relative space-y-8">

                <p className="text-xl leading-9 text-[var(--ink)] whitespace-pre-line italic">
                  {quote}
                </p>

                {highlightedEnding && (
                  <p className="serif text-center text-5xl font-semibold uppercase tracking-[0.18em] text-[var(--aronson-garnet)] lg:text-6xl">
                    {highlightedEnding}
                  </p>
                )}

              </div>

            </blockquote>

            <div className="mx-auto mt-12 h-px max-w-xl bg-[var(--border)]" />

            <div className="mt-10 text-center">

              <h4 className="serif text-3xl text-[var(--aronson-garnet)]">
                {reviewer}
              </h4>

              <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[var(--muted)]">
                {reviewerDescription}
              </p>

              {sourceUrl && (
                <Link
                  href={sourceUrl}
                  target="_blank"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[var(--aronson-garnet)] transition hover:text-[var(--aronson-garnet-light)]"
                >
                  Verified {source} Review
                  <span>→</span>
                </Link>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}