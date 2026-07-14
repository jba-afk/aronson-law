import Container from "@/components/ui/Container";

const problems = [
  {
    title: "A Business Partner Has Violated Our Agreement",
    description:
      "We evaluate the agreement, identify the legal and practical risks, and develop a strategy designed to protect the business and preserve available leverage.",
    icon: (
      <>
        <circle cx="24" cy="17" r="6" />
        <circle cx="42" cy="17" r="6" />
        <circle cx="33" cy="36" r="6" />
        <path d="M18 47C18 39 23 34 30 34" />
        <path d="M48 47C48 39 43 34 36 34" />
        <path d="M24 23L30 31" />
        <path d="M42 23L36 31" />
      </>
    ),
  },
  {
    title: "We’re Being Sued for Breach of Contract",
    description:
      "We provide practical counsel from the earliest stages of litigation through discovery, negotiation, dispositive motions, and trial when necessary.",
    icon: (
      <>
        <path d="M17 45L42 20" />
        <path d="M35 14L48 27" />
        <path d="M13 39L26 52" />
        <path d="M39 18L44 13" />
        <path d="M17 43L12 48" />
        <path d="M29 33L51 55" />
        <path d="M45 49L52 42" />
      </>
    ),
  },
  {
    title: "Negotiations Have Broken Down",
    description:
      "Before positions harden further, we assess the dispute, preserve leverage, and identify realistic paths toward resolution or litigation readiness.",
    icon: (
      <>
        <path d="M14 33H50" />
        <path d="M20 27L14 33L20 39" />
        <path d="M44 27L50 33L44 39" />
        <path d="M32 13V53" />
        <path d="M26 19L32 13L38 19" />
        <path d="M26 47L32 53L38 47" />
      </>
    ),
  },
  {
    title: "The Dispute Is Affecting the Business",
    description:
      "We consider how litigation may affect operations, employees, reputation, customer relationships, and long-term business value—not just the legal claims.",
    icon: (
      <>
        <path d="M14 51V34" />
        <path d="M24 51V25" />
        <path d="M34 51V31" />
        <path d="M44 51V17" />
        <path d="M54 51H10" />
        <path d="M14 28L24 20L34 25L44 14" />
        <path d="M39 14H44V19" />
      </>
    ),
  },
];

export default function CommercialLitigationProblems() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Common Business Disputes</p>

          <h2 className="section-title mt-3 text-[var(--aronson-navy)]">
            Business Challenges We Help Resolve
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-[var(--chesapeake-gold)]" />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="commercial-problem-card relative"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--chesapeake-gold)] bg-[var(--maryland-ivory)] text-[var(--aronson-navy)]">
                  <svg
                    viewBox="0 0 64 64"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {problem.icon}
                  </svg>
                </div>

                <div>
                  <h3 className="serif text-[1.35rem] leading-tight text-[var(--aronson-navy)]">
                    {problem.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {problem.description}
                  </p>
                </div>
              </div>

              {index < problems.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute -right-4 top-0 hidden h-full w-px bg-[var(--border)] xl:block"
                />
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}