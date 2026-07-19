import type { Metadata } from "next";
import Link from "next/link";
import MeetOurAttorneys from "@/components/our-firm/MeetOurAttorneys";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet Justin B. Aronson and Mitchell T. Cornwell, the attorneys of Aronson Law in Easton, Maryland.",
  alternates: { canonical: "/our-attorneys" },
};

export default function OurAttorneysPage() {
  return (
    <main>
      <section className="bg-[var(--aronson-navy)] px-6 py-20 text-center text-white lg:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--chesapeake-gold)]">
          Experienced Maryland Counsel
        </p>
        <h1 className="serif mx-auto mt-4 max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl">
          Meet Our Attorneys
        </h1>
        <div className="mx-auto mt-6 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
          Practical advice, determined advocacy, and personal attention for
          individuals, families, fiduciaries, and businesses throughout Maryland.
        </p>
      </section>

      <MeetOurAttorneys />

      <section className="bg-[var(--maryland-ivory)] px-6 py-16 text-center lg:py-20">
        <h2 className="serif text-4xl text-[var(--aronson-navy)]">
          Start a Conversation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--muted)]">
          Contact Aronson Law to discuss the nature of your matter and the firm&apos;s availability.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex min-h-13 items-center justify-center bg-[var(--aronson-garnet)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[var(--aronson-garnet-light)]"
        >
          Schedule a Consultation
        </Link>
      </section>
    </main>
  );
}
