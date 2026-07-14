import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function FamilyLawAttorney() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="grid overflow-hidden border border-[var(--border)] bg-[var(--maryland-ivory)] shadow-[0_14px_36px_rgba(7,23,38,0.08)] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative min-h-[430px] overflow-hidden bg-[var(--aronson-navy)]">
            <Image
              src="/attorneys/justin-aronson-hires.jpg"
              alt="Justin B. Aronson"
              fill
              unoptimized
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--chesapeake-gold)]">
              Meet Your Attorney
            </p>

            <h2 className="mt-4 serif text-[clamp(3rem,4.5vw,5rem)] leading-[1.02] text-[var(--aronson-garnet)]">
              Justin B. Aronson
            </h2>

            <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[var(--aronson-navy)]">
              Managing Member
            </p>

            <div className="my-7 h-[3px] w-24 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

            <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
              <p>
                Clients facing divorce, custody disputes, and other family law
                matters work directly with Justin from beginning to end.
              </p>

              <p>
                He combines careful preparation, clear communication, and
                determined advocacy with a practical understanding that every
                family’s circumstances are different.
              </p>
            </div>

            <Link
              href="/attorneys/justin-aronson"
              className="mt-8 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-garnet)] transition hover:text-[var(--aronson-garnet-light)]"
            >
              Meet Justin Aronson
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}