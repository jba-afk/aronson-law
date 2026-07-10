import Container from "./Container";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <Container>
      <div
        className={`mb-16 ${
          centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
        }`}
      >
        {eyebrow && (
          <p className="eyebrow mb-4">
            {eyebrow}
          </p>
        )}

        <h2 className="serif text-5xl text-[var(--aronson-navy)]">
          {title}
        </h2>

        <div
          className={`accent-rule mt-6 ${
            centered ? "mx-auto" : ""
          }`}
        />

        {description && (
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            {description}
          </p>
        )}
      </div>
    </Container>
  );
}