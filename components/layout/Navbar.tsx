import Image from "next/image";
import Link from "next/link";

const practiceAreas = [
  {
    label: "Family Law",
    href: "/practice-areas/family-law",
  },
  {
    label: "Construction Law",
    href: "/practice-areas/construction-law",
  },
  {
    label: "Complex Commercial Litigation",
    href: "/practice-areas/complex-commercial-litigation",
  },
  {
    label: "Trusts & Estates",
    href: "/practice-areas/trusts-estates",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(197,154,61,0.28)] bg-[var(--maryland-ivory)] shadow-[0_6px_24px_rgba(7,23,38,0.08)]">
<div className="container flex min-h-[150px] items-center justify-between gap-10">
        <Link
          href="/"
          aria-label="Aronson Law home"
          className="flex shrink-0 items-center"
        >
          <Image
  src="/brand/logo.png"
  alt="Aronson Law LLC"
  width={230}
  height={150}
  priority
  className="h-[130px] w-auto object-contain"
/>
        </Link>

<nav className="hidden items-center gap-11 text-[0.95rem] font-bold uppercase tracking-[0.05em] text-[var(--aronson-navy)] lg:flex">
          <Link className="nav-link" href="/">
            Home
          </Link>

          <Link className="nav-link" href="/our-firm">
            Our Firm
          </Link>

          <Link className="nav-link" href="/attorneys">
            Our Attorneys
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="nav-link flex items-center gap-2 uppercase"
              aria-haspopup="true"
            >
              Practice Areas
              <span className="text-[var(--chesapeake-gold)]">⌄</span>
            </button>

            <div className="invisible absolute left-0 top-full mt-4 w-72 translate-y-2 border border-[var(--border)] bg-white py-2 text-[var(--ink)] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {practiceAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-3 text-sm font-semibold normal-case tracking-normal transition hover:bg-[var(--maryland-ivory)] hover:text-[var(--aronson-garnet)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link href="/contact" className="btn btn-primary whitespace-nowrap">
            Schedule Consultation
          </Link>

          <Link
            href="/pay-online"
            className="btn whitespace-nowrap border border-[var(--chesapeake-gold)] bg-transparent text-[var(--aronson-navy)] hover:bg-[rgba(197,154,61,0.12)]"
          >
            Pay Your Bill
          </Link>
        </div>
      </div>
    </header>
  );
}