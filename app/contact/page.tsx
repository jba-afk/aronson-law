import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Easton, Maryland",
  description:
    "Contact Aronson Law in Easton, Maryland to request a consultation regarding family law, construction law, commercial litigation, trusts and estates, probate, or business planning.",
  alternates: { canonical: "/contact" },
};

function ContactIcon({ type }: { type: "pin" | "phone" | "email" | "clock" }) {
  const classes = "h-8 w-8";
  if (type === "phone") return <svg viewBox="0 0 48 48" className={classes} fill="none" aria-hidden="true"><path d="M14 7c4 0 8 10 9 14 1 2 0 4-2 5l-4 3c4 8 10 14 18 18l3-4c1-2 3-3 5-2 4 1 13 6 13 9 0 5-5 9-10 9C25 59 8 42 8 21 8 13 10 7 14 7Z" transform="translate(-7 -7) scale(.95)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === "email") return <svg viewBox="0 0 48 48" className={classes} fill="none" aria-hidden="true"><rect x="5" y="9" width="38" height="30" rx="2" stroke="currentColor" strokeWidth="2"/><path d="m7 12 17 14 17-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === "clock") return <svg viewBox="0 0 48 48" className={classes} fill="none" aria-hidden="true"><circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2"/><path d="M24 13v12l8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg viewBox="0 0 48 48" className={classes} fill="none" aria-hidden="true"><path d="M24 43s13-13 13-25a13 13 0 1 0-26 0c0 12 13 25 13 25Z" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="2"/></svg>;
}

const details = [
  {
    icon: "pin" as const,
    title: "Visit Our Office",
    content: <>127 N. West Street, Suite D<br />Easton, Maryland 21601</>,
    href: "https://www.google.com/maps/search/?api=1&query=127+N.+West+Street+Suite+D+Easton+Maryland+21601",
    action: "Get Directions",
  },
  {
    icon: "phone" as const,
    title: "Call Our Office",
    content: <>(410) 822-5240</>,
    href: "tel:+14108225240",
    action: "Call Now",
  },
  {
    icon: "email" as const,
    title: "Email Aronson Law",
    content: <>jba@aronsonlaw.com</>,
    href: "mailto:jba@aronsonlaw.com",
    action: "Send an Email",
  },
  {
    icon: "clock" as const,
    title: "Consultations",
    content: <>Available by appointment<br />In person, by telephone, or via Zoom</>,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[var(--aronson-navy)] text-white">
        <Image src="/photography/mitch-eastern-shore-sunset.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,19,0.97)_0%,rgba(3,11,19,0.86)_48%,rgba(3,11,19,0.42)_100%)]" />
        <div className="relative mx-auto flex min-h-[500px] max-w-[1440px] items-center px-6 py-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e0b34f]">Start a Conversation</p>
            <h1 className="serif mt-4 text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">Contact Aronson Law</h1>
            <div className="mt-5 h-0.5 w-20 bg-[#d3a13a]" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">Legal matters are personal. Tell us briefly how we may be able to help, and a member of our firm will follow up to discuss appropriate next steps.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+14108225240" className="inline-flex min-h-14 items-center justify-center bg-[var(--aronson-garnet)] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#941d2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b34f]">Call (410) 822-5240</a>
              <a href="mailto:jba@aronsonlaw.com" className="inline-flex min-h-14 items-center justify-center border border-[#d3a13a] bg-black/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#d3a13a] hover:text-[#071726] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b34f]">Email the Firm</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-12 lg:py-24 xl:px-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b77b13]">Easton, Maryland</p>
            <h2 className="serif mt-3 text-4xl leading-tight text-[var(--aronson-navy)] sm:text-5xl">Reach Aronson Law Directly</h2>
            <div className="mt-4 h-0.5 w-16 bg-[#d3a13a]" />
            <p className="mt-6 text-[17px] leading-8 text-[#4c5561]">We welcome inquiries from individuals, families, fiduciaries, and businesses throughout Maryland’s Eastern Shore and beyond.</p>

            <div className="mt-9 grid gap-5">
              {details.map((detail) => (
                <article key={detail.title} className="flex gap-5 border border-[#dfd5c8] bg-white p-6 shadow-[0_10px_28px_rgba(7,23,38,0.05)]">
                  <span className="shrink-0 text-[#c28b24]"><ContactIcon type={detail.icon} /></span>
                  <div>
                    <h3 className="serif text-2xl text-[var(--aronson-navy)]">{detail.title}</h3>
                    <div className="mt-2 text-[17px] leading-7 text-[#4c5561]">{detail.content}</div>
                    {detail.href && <a href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-3 inline-flex text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-garnet)] transition hover:text-[#b77b13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3a13a]">{detail.action} <span aria-hidden="true" className="ml-2">→</span></a>}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 border border-[#d3a13a]/50 bg-[#fffaf0] p-6">
              <h3 className="serif text-2xl text-[var(--aronson-navy)]">Existing Client?</h3>
              <p className="mt-2 text-[16px] leading-7 text-[#4c5561]">Use Aronson Law’s secure LawPay portal to make a payment.</p>
              <a href="https://secure.lawpay.com/pages/aronsonlawllc/trust" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-12 items-center justify-center border border-[#b77b13] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-navy)] transition hover:bg-[#d3a13a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3a13a]">Pay Your Bill</a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-[#e2d8cc] bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-16 sm:px-8 md:grid-cols-3 lg:px-12 xl:px-16">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b77b13]">1</p><h2 className="serif mt-2 text-2xl text-[var(--aronson-navy)]">Send an Inquiry</h2><p className="mt-3 text-[16px] leading-7 text-[#555e69]">Share a general description without confidential details.</p></div>
          <div className="md:border-l md:border-[#ded4c7] md:pl-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b77b13]">2</p><h2 className="serif mt-2 text-2xl text-[var(--aronson-navy)]">We’ll Follow Up</h2><p className="mt-3 text-[16px] leading-7 text-[#555e69]">The firm will respond to discuss the nature of your matter and availability.</p></div>
          <div className="md:border-l md:border-[#ded4c7] md:pl-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b77b13]">3</p><h2 className="serif mt-2 text-2xl text-[var(--aronson-navy)]">Discuss Next Steps</h2><p className="mt-3 text-[16px] leading-7 text-[#555e69]">If appropriate, we’ll arrange a consultation and explain what comes next.</p></div>
        </div>
      </section>
    </main>
  );
}
