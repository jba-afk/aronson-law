import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ArchitecturalBackground from "@/components/ui/ArchitecturalBackground";

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

const quickLinks = [
  {
    label: "Our Firm",
    href: "/our-firm",
  },
  {
    label: "Our Attorneys",
    href: "/our-attorneys",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--aronson-navy)] text-white">
      <ArchitecturalBackground
        variant="annapolis"
        className="opacity-[0.05]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15"
      />

      <Container className="relative z-10">
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-12 lg:py-20">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block"
              aria-label="Aronson Law home"
            >
              <Image
                src="/brand/logo.png"
                alt="Aronson Law, LLC"
                width={220}
                height={150}
                className="h-auto w-[205px] brightness-0 invert"
              />
            </Link>

            <p className="mt-5 serif text-3xl leading-snug text-white">
              Practical Counsel.
              <br />
              Proven Advocacy.
            </p>

            <div className="mt-6 h-[3px] w-16 bg-[var(--chesapeake-gold)]" />

            <p className="mt-6 text-[15px] leading-7 text-white/65">
              Thoughtful legal counsel for individuals, families, businesses,
              and construction-industry clients throughout Maryland.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
              Office
            </p>

            <address className="mt-6 space-y-4 not-italic text-[15px] leading-7 text-white/75">
              <p>
                127 N. West Street, Suite D
                <br />
                Easton, Maryland 21601
              </p>

              <p>
                <a
                  href="tel:+14108225240"
                  className="transition hover:text-white"
                >
                  (410) 822-5240
                </a>
              </p>

              <p>
                <a
                  href="mailto:jba@aronsonlaw.com"
                  className="break-words transition hover:text-white"
                >
                  jba@aronsonlaw.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
              Practice Areas
            </p>

            <nav
              aria-label="Footer practice-area navigation"
              className="mt-6"
            >
              <ul className="space-y-4">
                {practiceAreas.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[15px] leading-6 text-white/75 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--chesapeake-gold)]">
              Quick Links
            </p>

            <nav aria-label="Footer navigation" className="mt-6">
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[15px] leading-6 text-white/75 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <a
                    href="https://secure.lawpay.com/pages/aronsonlawllc/trust"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] leading-6 text-white/75 transition hover:text-white"
                  >
                    Pay Your Bill
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/15 py-7">
          <div className="flex flex-col gap-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Aronson Law, LLC. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <span>Attorney Advertising</span>

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/accessibility"
                className="transition hover:text-white"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
