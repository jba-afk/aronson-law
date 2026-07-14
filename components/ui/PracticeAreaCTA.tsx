import Link from "next/link";
import Container from "@/components/ui/Container";

type PracticeAreaCTAVariant =
  | "family"
  | "construction"
  | "litigation"
  | "estates"
  | "plain";

interface PracticeAreaCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  variant?: PracticeAreaCTAVariant;
  backgroundImage?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhoneButton?: boolean;
  phoneLabel?: string;
  phoneNumber?: string;
}

export default function PracticeAreaCTA({
  eyebrow = "Aronson Law",
  title,
  description,
  variant = "plain",
  backgroundImage,
  primaryLabel = "Schedule a Consultation",
  primaryHref = "/contact",
  showPhoneButton = false,
  phoneLabel = "Call Our Office",
  phoneNumber = "+14108225240",
}: PracticeAreaCTAProps) {
  const resolvedBackgroundImage =
    backgroundImage ??
    (variant === "family"
      ? "/photography/annapolis-evening.png"
      : undefined);

  return (
    <section className="relative overflow-hidden bg-[var(--aronson-navy)] text-white">
      {resolvedBackgroundImage && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${resolvedBackgroundImage}')`,
          }}
        />
      )}

      {variant === "construction" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(
                30deg,
                transparent 48%,
                rgba(255,255,255,0.18) 49%,
                rgba(255,255,255,0.18) 50%,
                transparent 51%
              )
            `,
            backgroundSize: "48px 48px, 48px 48px, 220px 220px",
          }}
        />
      )}

      {variant === "litigation" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(115deg, transparent 46%, rgba(255,255,255,0.2) 47%, rgba(255,255,255,0.2) 48%, transparent 49%),
              linear-gradient(65deg, transparent 46%, rgba(255,255,255,0.12) 47%, rgba(255,255,255,0.12) 48%, transparent 49%)
            `,
            backgroundSize: "240px 240px, 300px 300px",
          }}
        />
      )}

      {variant === "estates" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(255,255,255,0.22) 1px, transparent 1.5px),
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px, 56px 56px, 56px 56px",
          }}
        />
      )}

      <div
        aria-hidden="true"
        className={
          resolvedBackgroundImage
            ? "absolute inset-0 bg-[rgba(7,23,38,0.82)]"
            : "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"
        }
      />

      <Container className="relative z-10 py-20 text-center lg:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--chesapeake-gold)]">
            {eyebrow}
          </p>

          <h2 className="mt-4 serif text-[clamp(3.2rem,5vw,5.75rem)] leading-[1.02] tracking-[-0.035em]">
            {title}
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 bg-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/85">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex min-h-14 items-center justify-center bg-[var(--aronson-garnet)] px-10 py-4 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition duration-300 hover:bg-[var(--aronson-garnet-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--chesapeake-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aronson-navy)]"
            >
              {primaryLabel}
            </Link>

            {showPhoneButton && (
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call Aronson Law at 410-822-5240"
                className="group inline-flex min-h-14 items-center justify-center border border-[var(--chesapeake-gold)] bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--chesapeake-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--aronson-navy)]"
              >
                <span className="text-white transition-colors duration-300 group-hover:!text-[var(--aronson-navy)]">
                  {phoneLabel}
                </span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}