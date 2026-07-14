import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

interface SplitIllustrationSectionProps {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  illustration: ReactNode;
  bullets?: string[];
  reverse?: boolean;
  className?: string;
}

export default function SplitIllustrationSection({
  eyebrow,
  title,
  children,
  illustration,
  bullets = [],
  reverse = false,
  className = "",
}: SplitIllustrationSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white py-20 lg:py-28 ${className}`}
    >
      <Container className="relative z-10">
        <div
          className={`grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
                {eyebrow}
              </p>
            )}

            <h2 className="mt-4 serif text-[clamp(2.9rem,4.5vw,5rem)] leading-[1.04] text-[var(--aronson-garnet)]">
              {title}
            </h2>

            <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

            <div className="mt-8 space-y-6 text-[17px] leading-8 text-[var(--muted)]">
              {children}
            </div>

            {bullets.length > 0 && (
              <ul className="mt-8 space-y-4">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-4 text-[16px] leading-7 text-[var(--aronson-navy)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 text-lg font-bold text-[var(--chesapeake-gold)]"
                    >
                      ✓
                    </span>

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative min-h-[420px] lg:min-h-[620px]">
            {illustration}
          </div>
        </div>
      </Container>
    </section>
  );
}