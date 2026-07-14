import Container from "@/components/ui/Container";

const values = [
  {
    icon: "▣",
    title: "Preparation",
    description:
      "Great advocacy begins long before entering a courtroom. We prepare thoroughly so you can move forward with confidence.",
  },
  {
    icon: "◌",
    title: "Communication",
    description:
      "Clients deserve honest answers and timely updates. We keep you informed and remain available throughout the representation.",
  },
  {
    icon: "◇",
    title: "Integrity",
    description:
      "Professionalism and respect guide every decision we make and every interaction we have.",
  },
  {
    icon: "◎",
    title: "Commitment",
    description:
      "We approach every client’s matter with care, diligence, and a personal commitment to achieving the best possible outcome.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="serif text-[clamp(2.8rem,4vw,4.25rem)] leading-tight text-[var(--aronson-garnet)]">
            Our Values
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`px-7 text-center ${
                index !== values.length - 1
                  ? "lg:border-r lg:border-[var(--border)]"
                  : ""
              }`}
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center text-4xl text-[var(--aronson-garnet)]">
                {value.icon}
              </div>

              <h3 className="serif mb-4 text-3xl text-[var(--aronson-navy)]">
                {value.title}
              </h3>

              <p className="mx-auto max-w-[260px] leading-7 text-[var(--muted)]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}