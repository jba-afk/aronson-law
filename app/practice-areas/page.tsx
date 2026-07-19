import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PracticeCard from "@/components/ui/PracticeCard";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore Aronson Law's Maryland practice areas: family law, construction law, complex commercial litigation, and trusts and estates.",
  alternates: { canonical: "/practice-areas" },
};

export default function PracticeAreasPage() {
  return (
    <main>
      <section className="bg-[var(--aronson-navy)] px-6 py-20 text-center text-white lg:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--chesapeake-gold)]">
          Focused Legal Counsel
        </p>
        <h1 className="serif mx-auto mt-4 max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl">
          Practice Areas
        </h1>
        <div className="mx-auto mt-6 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/80">
          Thoughtful representation for individuals, families, businesses, and
          construction-industry clients throughout Maryland.
        </p>
      </section>

      <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
        <Container>
          <div className="grid gap-7 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <PracticeCard key={area.href} {...area} />
            ))}
          </div>

          <div className="mt-14 border border-[var(--border)] bg-white p-8 text-center shadow-[var(--shadow-soft)] sm:p-10">
            <h2 className="serif text-4xl text-[var(--aronson-navy)]">
              Not Sure Where Your Matter Fits?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--muted)]">
              Tell us generally how we may be able to help. The firm will follow
              up to discuss your matter and its availability.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-13 items-center justify-center bg-[var(--aronson-garnet)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--aronson-garnet-light)]"
            >
              Contact Aronson Law
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
