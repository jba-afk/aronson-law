"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const attorneys = [
  {
    label: "Justin Aronson",
    href: "/our-attorneys/justin-aronson",
  },
  {
    label: "Mitch Cornwell",
    href: "/our-attorneys/mitchell-cornwell",
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

type DesktopMenu = "attorneys" | "practice-areas" | null;
type MobileSection = "attorneys" | "practice-areas" | null;

export default function Navbar() {
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] =
    useState<MobileSection>(null);

  const desktopNavigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        desktopNavigationRef.current &&
        !desktopNavigationRef.current.contains(event.target as Node)
      ) {
        setDesktopMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopMenu(null);
        setMobileOpen(false);
        setMobileSection(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeAllMenus() {
    setDesktopMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  function handleDesktopBlur(
    event: React.FocusEvent<HTMLDivElement>,
  ) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setDesktopMenu(null);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(197,154,61,0.28)] bg-[var(--maryland-ivory)] shadow-[0_6px_24px_rgba(7,23,38,0.08)]">
      <div className="container flex min-h-[102px] items-center justify-between gap-5 lg:min-h-[165px] lg:gap-10">
        <Link
          href="/"
          aria-label="Aronson Law home"
          className="flex shrink-0 items-center"
          onClick={closeAllMenus}
        >
          <Image
            src="/brand/logo.png"
            alt="Aronson Law LLC"
            width={270}
            height={175}
            priority
            className="h-[94px] w-auto object-contain lg:h-[165px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          ref={desktopNavigationRef}
          aria-label="Primary navigation"
          className="hidden items-center gap-11 text-[0.95rem] font-bold uppercase tracking-[0.05em] text-[var(--aronson-navy)] lg:flex"
        >
          <Link className="nav-link" href="/" onClick={closeAllMenus}>
            Home
          </Link>

          <Link
            className="nav-link"
            href="/our-firm"
            onClick={closeAllMenus}
          >
            Our Firm
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("attorneys")}
            onMouseLeave={() => setDesktopMenu(null)}
            onBlur={handleDesktopBlur}
          >
            <button
              type="button"
              className="nav-link flex items-center gap-2 uppercase"
              aria-haspopup="menu"
              aria-expanded={desktopMenu === "attorneys"}
              onClick={() =>
                setDesktopMenu((current) =>
                  current === "attorneys" ? null : "attorneys",
                )
              }
              onFocus={() => setDesktopMenu("attorneys")}
            >
              Our Attorneys

              <span
                aria-hidden="true"
                className={`text-[var(--chesapeake-gold)] transition-transform duration-300 ease-out ${
                  desktopMenu === "attorneys" ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            <div
              role="menu"
              className={`absolute left-0 top-full mt-4 w-64 border border-[var(--border)] bg-white py-2 shadow-xl transition-all duration-200 ${
                desktopMenu === "attorneys"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              {attorneys.map((attorney) => (
                <Link
                  key={attorney.href}
                  href={attorney.href}
                  role="menuitem"
                  onClick={closeAllMenus}
                  className="group/item block px-5 py-3 text-sm font-semibold normal-case tracking-normal transition-colors duration-200 hover:bg-[var(--maryland-ivory)] focus:bg-[var(--maryland-ivory)] focus:outline-none"
                >
                  <span className="block text-[var(--ink)] transition-colors duration-200 group-hover/item:text-[var(--aronson-garnet)] group-focus/item:text-[var(--aronson-garnet)]">
                    {attorney.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDesktopMenu("practice-areas")}
            onMouseLeave={() => setDesktopMenu(null)}
            onBlur={handleDesktopBlur}
          >
            <button
              type="button"
              className="nav-link flex items-center gap-2 uppercase"
              aria-haspopup="menu"
              aria-expanded={desktopMenu === "practice-areas"}
              onClick={() =>
                setDesktopMenu((current) =>
                  current === "practice-areas"
                    ? null
                    : "practice-areas",
                )
              }
              onFocus={() => setDesktopMenu("practice-areas")}
            >
              Practice Areas

              <span
                aria-hidden="true"
                className={`text-[var(--chesapeake-gold)] transition-transform duration-300 ease-out ${
                  desktopMenu === "practice-areas" ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            <div
              role="menu"
              className={`absolute left-0 top-full mt-4 w-72 border border-[var(--border)] bg-white py-2 shadow-xl transition-all duration-200 ${
                desktopMenu === "practice-areas"
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              {practiceAreas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={closeAllMenus}
                  className="group/item block px-5 py-3 text-sm font-semibold normal-case tracking-normal transition-colors duration-200 hover:bg-[var(--maryland-ivory)] focus:bg-[var(--maryland-ivory)] focus:outline-none"
                >
                  <span className="block text-[var(--ink)] transition-colors duration-200 group-hover/item:text-[var(--aronson-garnet)] group-focus/item:text-[var(--aronson-garnet)]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            className="nav-link"
            href="/contact"
            onClick={closeAllMenus}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop action buttons */}
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

          <a
            href="https://secure.lawpay.com/pages/aronsonlawllc/trust"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whitespace-nowrap border border-[var(--chesapeake-gold)] bg-transparent text-[var(--aronson-navy)] hover:bg-[rgba(197,154,61,0.12)]"
          >
            Pay Your Bill
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen((current) => !current);
            setMobileSection(null);
          }}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--chesapeake-gold)] text-[var(--aronson-navy)] transition hover:bg-[rgba(197,154,61,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aronson-garnet)] lg:hidden"
        >
          <span className="sr-only">
            {mobileOpen ? "Close menu" : "Open menu"}
          </span>

          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "top-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] h-0.5 w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                mobileOpen ? "bottom-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-[102px] z-40 overflow-y-auto bg-[var(--aronson-navy)] text-white transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="container flex min-h-full flex-col px-6 py-8"
        >
          <div className="divide-y divide-white/15 border-y border-white/15">
            <Link
              href="/"
              onClick={closeAllMenus}
              className="block py-6 text-base font-bold uppercase tracking-[0.08em] transition hover:text-[var(--chesapeake-gold)]"
            >
              Home
            </Link>

            <Link
              href="/our-firm"
              onClick={closeAllMenus}
              className="block py-6 text-base font-bold uppercase tracking-[0.08em] transition hover:text-[var(--chesapeake-gold)]"
            >
              Our Firm
            </Link>

            <div>
              <button
                type="button"
                aria-expanded={mobileSection === "attorneys"}
                onClick={() =>
                  setMobileSection((current) =>
                    current === "attorneys" ? null : "attorneys",
                  )
                }
                className="flex w-full items-center justify-between py-6 text-left text-base font-bold uppercase tracking-[0.08em]"
              >
                Our Attorneys

                <span
                  aria-hidden="true"
                  className={`text-xl text-[var(--chesapeake-gold)] transition-transform duration-200 ${
                    mobileSection === "attorneys" ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  mobileSection === "attorneys"
                    ? "grid-rows-[1fr] pb-4"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 border-l border-[var(--chesapeake-gold)] pl-5">
                    {attorneys.map((attorney) => (
                      <Link
                        key={attorney.href}
                        href={attorney.href}
                        onClick={closeAllMenus}
                        className="block py-3.5 text-base leading-6 text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none"
                      >
                        {attorney.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                aria-expanded={mobileSection === "practice-areas"}
                onClick={() =>
                  setMobileSection((current) =>
                    current === "practice-areas"
                      ? null
                      : "practice-areas",
                  )
                }
                className="flex w-full items-center justify-between py-6 text-left text-base font-bold uppercase tracking-[0.08em]"
              >
                Practice Areas

                <span
                  aria-hidden="true"
                  className={`text-xl text-[var(--chesapeake-gold)] transition-transform duration-200 ${
                    mobileSection === "practice-areas" ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  mobileSection === "practice-areas"
                    ? "grid-rows-[1fr] pb-4"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 border-l border-[var(--chesapeake-gold)] pl-5">
                    {practiceAreas.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAllMenus}
                        className="block py-3.5 text-base leading-6 text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="block py-6 text-base font-bold uppercase tracking-[0.08em] transition hover:text-[var(--chesapeake-gold)]"
            >
              Contact
            </Link>
          </div>

          <div className="mt-8 grid gap-4">
            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="flex min-h-14 items-center justify-center bg-[var(--aronson-garnet)] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-white shadow-lg transition hover:brightness-110"
            >
              Schedule a Consultation
            </Link>

            <a
              href="https://secure.lawpay.com/pages/aronsonlawllc/trust"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center border border-[var(--chesapeake-gold)] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-[var(--aronson-navy)]"
            >
              Pay Your Bill
            </a>
          </div>

          <div className="mt-auto pt-10 text-sm leading-6 text-white/60">
            <p>127 N. West Street, Suite D</p>
            <p>Easton, Maryland 21601</p>

            <a
              href="tel:+14108225240"
              className="mt-3 inline-block text-white transition hover:text-[var(--chesapeake-gold)]"
            >
              (410) 822-5240
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}