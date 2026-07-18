import Image from "next/image";
import Link from "next/link";

const credentials = [
  {
    label: "Estate Planning",
    icon: "document",
  },
  {
    label: "Probate & Estate Administration",
    icon: "scales",
  },
  {
    label: "Attorney & Certified Public Accountant",
    icon: "calculator",
  },
  {
    label: "Serving Maryland’s Eastern Shore Since 1984",
    icon: "pin",
  },
];

function CredentialIcon({ type }: { type: string }) {
  if (type === "scales") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M24 7v34M13 13h22M17 13 9 29h16l-8-16Zm14 0-8 16h16l-8-16ZM16 41h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "calculator") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <rect x="10" y="5" width="28" height="38" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="15" y="10" width="18" height="7" stroke="currentColor" strokeWidth="1.8" />
        {[0, 1, 2].map((row) => [0, 1, 2].map((column) => <circle key={`${row}-${column}`} cx={17 + column * 7} cy={24 + row * 7} r="1.5" fill="currentColor" />))}
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        <path d="M24 43s13-13 13-25a13 13 0 1 0-26 0c0 12 13 25 13 25Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
      <path d="M13 5h17l7 7v31H13V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M30 5v8h7M18 21h14M18 27h14M18 33h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function MitchHero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#05080c] text-white">
        <Image
          src="/attorneys/mitch-cornwell-office-hero.jpg"
          alt="Mitch Cornwell in a traditional law office"
          fill
          priority
          className="object-cover object-[68%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/72 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[570px] lg:w-[48%]">
            <p className="serif text-xl uppercase tracking-[0.08em] text-[#d3a13a]">Meet</p>
            <h1 className="serif mt-3 text-6xl leading-[0.9] text-white sm:text-7xl xl:text-[5.4rem]">
              Mitch
              <span className="block">Cornwell</span>
            </h1>

            <p className="serif mt-5 text-2xl leading-snug text-[#d3a13a] sm:text-[1.75rem]">
              Trusted Counsel for Families, Fiduciaries
              <span className="block">&amp; Businesses Since 1984</span>
            </p>
            <div className="mt-5 h-0.5 w-14 bg-[#d3a13a]" />

            <div className="mt-5 max-w-[520px] space-y-4 text-[15px] leading-6 text-white/90 sm:text-base sm:leading-7">
              <p>
                For more than four decades, Mitch Cornwell has helped individuals,
                families, business owners, and fiduciaries navigate estate planning,
                probate administration, business planning, and tax-related matters
                with thoughtful guidance and practical advice.
              </p>
              <p>
                As both an attorney and a Certified Public Accountant, Mitch brings a
                perspective that helps clients consider not only the legal issues—but
                the financial implications of life’s most important decisions.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-[var(--aronson-garnet)] px-7 py-3 text-center text-xs font-bold uppercase tracking-[0.04em] text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#941d2e]">
                Schedule a Consultation
              </Link>
              <Link href="/practice-areas/trusts-estates" className="inline-flex min-h-12 items-center justify-center border border-[#d3a13a] bg-black/25 px-7 py-3 text-center text-xs font-bold uppercase tracking-[0.04em] text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#d3a13a] hover:text-[#06101f]">
                Explore Trusts &amp; Estates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Mitch Cornwell practice highlights" className="border-b border-[#e5ded4] bg-[#fbfaf7]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
          {credentials.map((credential, index) => (
            <div key={credential.label} className={`flex min-h-28 items-center gap-4 py-6 sm:px-6 ${index > 0 ? "sm:border-l sm:border-[#ded5c9]" : ""}`}>
              <span className="shrink-0 text-[#071726]"><CredentialIcon type={credential.icon} /></span>
              <p className="serif text-base leading-5 text-[#111827]">{credential.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
