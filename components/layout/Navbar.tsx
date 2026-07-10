import Image from "next/image";
import Link from "next/link";

const attorneys = [
  {
    label: "Justin Aronson",
    href: "/attorneys/justin-aronson",
  },
  {
    label: "Mitch Cornwell",
    href: "/attorneys/mitch-cornwell",
  },
];

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
      <div className="container flex min-h-[165px] items-center justify-between gap-10">
        <Link
          href="/"
          aria-label="Aronson Law home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/brand/logo.png"
            alt="Aronson Law LLC"
            width={270}
            height={175}
            priority
            className="h-[165px] w-auto object-contain"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-11 text-[0.95rem] font-bold uppercase tracking-[0.05em] text-[var(--aronson-navy)] lg:flex"
        >
          <Link className="nav-link" href="/">
            Home
          </Link>

          <Link className="nav-link" href="/our-firm">
            Our Firm
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="nav-link flex items-center gap-2 uppercase"
              aria-haspopup="true"
            >
              Our Attorneys
              <span
                aria-hidden="true"
                className="text-[var(--chesapeake-gold)]"
              >
                ⌄
              </span>
            </button>

            <div className="invisible absolute left-0 top-full mt-4 w-64 translate-y-2 border border-[var(--border)] bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {attorneys.map((attorney) => (
                <Link
                  key={attorney.href}
                  href={attorney.href}
                  className="group/item block px-5 py-3 text-sm font-semibold normal-case tracking-normal transition-colors duration-200 hover:bg-[var(--maryland-ivory)] focus:bg-[var(--maryland-ivory)] focus:outline-none"
                >
                  <span className="block text-[var(--ink)] transition-colors duration-200 group-hover/item:text-[var(--aronson-garnet)] group-focus/item:text-[var(--aronson-garnet)]">
                    {attorney.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className="nav-link flex items-center gap-2 uppercase"
              aria-haspopup="true"
            >
              Practice Areas
              <span
                aria-hidden="true"
                className="text-[var(--chesapeake-gold)]"
              >
                ⌄
              </span>
            </button>

            <div className="invisible absolute left-0 top-full mt-4 w-72 translate-y-2 border border-[var(--border)] bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {practiceAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group/item block px-5 py-3 text-sm font-semibold normal-case tracking-normal transition-colors duration-200 hover:bg-[var(--maryland-ivory)] focus:bg-[var(--maryland-ivory)] focus:outline-none"
                >
                  <span className="block text-[var(--ink)] transition-colors duration-200 group-hover/item:text-[var(--aronson-garnet)] group-focus/item:text-[var(--aronson-garnet)]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-link" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            href="/contact"
            className="btn whitespace-nowrap !text-white shadow-[0_10px_20px_rgba(122,20,35,0.22)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_28px_rgba(122,20,35,0.28)]"
            style={{
              backgroundColor: "var(--aronson-garnet)",
              color: "#ffffff",
            }}
          >
            Schedule a Consultation
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