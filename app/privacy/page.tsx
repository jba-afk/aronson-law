import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Aronson Law website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#fbfaf7] py-20 lg:py-24">
      <Container className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--chesapeake-gold)]">
          Website Information
        </p>
        <h1 className="serif mt-3 text-5xl text-[var(--aronson-navy)] sm:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-sm text-[var(--muted)]">Last updated July 19, 2026</p>

        <div className="mt-10 space-y-9 text-[17px] leading-8 text-[#4c5561]">
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">Information You Provide</h2>
            <p className="mt-3">
              If you submit the contact form, Aronson Law receives the information you choose to provide, including your name, email address, telephone number, preferred contact method, matter type, and general message.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">How Information Is Used</h2>
            <p className="mt-3">
              Information submitted through this website is used to respond to your inquiry, evaluate whether the firm may be able to assist, communicate with you, and maintain the security and operation of the website.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">Confidentiality and Representation</h2>
            <p className="mt-3">
              Contacting the firm or submitting information through this website does not create an attorney-client relationship. Do not send confidential or time-sensitive information unless and until the firm confirms representation in writing.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">Service Providers and Security</h2>
            <p className="mt-3">
              The website relies on service providers for hosting and email delivery. Aronson Law uses reasonable measures intended to protect submitted information, but no internet transmission or storage system can be guaranteed completely secure.
            </p>
          </section>
          <section>
            <h2 className="serif text-3xl text-[var(--aronson-navy)]">Questions</h2>
            <p className="mt-3">
              Questions about this policy may be directed to <a className="font-semibold text-[var(--aronson-garnet)] underline-offset-4 hover:underline" href="mailto:jba@aronsonlaw.com">jba@aronsonlaw.com</a> or (410) 822-5240.
            </p>
          </section>
        </div>

        <Link href="/contact" className="mt-12 inline-flex font-bold text-[var(--aronson-garnet)] hover:underline">
          Contact Aronson Law →
        </Link>
      </Container>
    </main>
  );
}
