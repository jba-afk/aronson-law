import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for the Aronson Law website.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <main className="bg-[#fbfaf7] py-20 lg:py-24">
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--chesapeake-gold)]">
          Our Commitment
        </p>
        <h1 className="serif mt-3 text-5xl text-[var(--aronson-navy)] sm:text-6xl">
          Accessibility Statement
        </h1>

        <div className="mt-10 space-y-8 text-[17px] leading-8 text-[#4c5561]">
          <p>
            Aronson Law is committed to making its website accessible and usable for the widest possible audience, including people with disabilities.
          </p>
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">Ongoing Effort</h2>
            <p className="mt-3">
              Accessibility is an ongoing effort. The firm seeks to provide clear navigation, readable content, keyboard-accessible controls, descriptive text for meaningful images, and sufficient visual contrast.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">Need Assistance?</h2>
            <p className="mt-3">
              If you experience difficulty accessing any part of this website or need information in another format, please call <a className="font-semibold text-[var(--aronson-garnet)] underline-offset-4 hover:underline" href="tel:+14108225240">(410) 822-5240</a> or email <a className="font-semibold text-[var(--aronson-garnet)] underline-offset-4 hover:underline" href="mailto:jba@aronsonlaw.com">jba@aronsonlaw.com</a>. Please identify the page or feature involved and the format that would be most helpful.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
