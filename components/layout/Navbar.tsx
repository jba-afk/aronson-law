import Image from "next/image";
import Link from "next/link";

const practiceAreas = [
  ["Family Law", "/practice-areas/family-law"],
  ["Construction Law", "/practice-areas/construction-law"],
  ["Complex Commercial Litigation", "/practice-areas/complex-commercial-litigation"],
  ["Trusts & Estates", "/practice-areas/trusts-estates"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--aronson-navy-deep)]">
      <div className="container flex min-h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Aronson Law home">
          <Image
            src="/brand/logo.png"
            alt="Aronson Law LLC"
            width={290}
            height={88}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wide text-white lg:flex">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/our-firm">Our Firm</Link>
          <Link className="nav-link" href="/attorneys">Our Attorneys</Link>

          <div className="group relative">
            <button className="nav-link flex items-center gap-1 uppercase">
              Practice Areas <span className="text-[var(--chesapeake-gold)]">⌄</span>
            </button>

            <div className="invisible absolute left-0 top-full mt-4 w-72 translate-y-2 border border-[var(--border)] bg-white py-2 text-[var(--ink)] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {practiceAreas.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-5 py-3 text-sm font-semibold normal-case tracking-normal transition hover:bg-[var(--maryland-ivory)] hover:text-[var(--aronson-garnet)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn btn-primary">
            Schedule Consultation
          </Link>
          <Link href="/pay-online" className="btn btn-secondary">
            Pay Your Bill
          </Link>
        </div>
      </div>
    </header>
  );
}