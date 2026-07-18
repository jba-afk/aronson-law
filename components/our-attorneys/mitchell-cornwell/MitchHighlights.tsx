const practices = [
  {
    title: "Estate Planning",
    items: ["Wills", "Revocable Trusts", "Powers of Attorney", "Advance Medical Directives"],
    icon: "document",
  },
  {
    title: "Probate & Estate Administration",
    items: ["Probate Proceedings", "Personal Representative Guidance", "Estate Settlement", "Fiduciary Representation"],
    icon: "scales",
  },
  {
    title: "Business & Tax Planning",
    items: ["Business Planning", "Document Drafting & Review", "Fiduciary Tax Matters", "Estate & Trust Tax Guidance"],
    icon: "building",
  },
];

function PracticeIcon({ type }: { type: string }) {
  if (type === "scales") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M24 7v34M12 13h24M16 13 8 29h16l-8-16Zm16 0-8 16h16l-8-16ZM16 41h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "building") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M11 42V8h26v34M7 42h34M17 15h5M27 15h5M17 22h5M27 22h5M17 29h5M27 29h5M21 42v-7h6v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <path d="M12 5h18l7 7v31H12V5ZM30 5v8h7M18 21h13M18 27h13M18 33h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MitchHighlights() {
  return (
    <section className="border-y border-[#e4dbcf] bg-[#f8f5f0] text-[#111827]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b77b13]">How Mitch Helps</p>
          <h2 className="serif mt-3 text-4xl text-[var(--aronson-navy)] sm:text-5xl">Practice Focus</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#d3a13a]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {practices.map((practice) => (
            <article key={practice.title} className="group border border-[#e2d9cd] bg-white p-7 shadow-[0_12px_35px_rgba(7,23,38,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d3a13a]/70 hover:shadow-[0_18px_44px_rgba(7,23,38,0.1)] sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--aronson-garnet)] text-white">
                  <PracticeIcon type={practice.icon} />
                </span>
                <h3 className="serif text-[1.65rem] leading-tight text-[var(--aronson-navy)]">{practice.title}</h3>
              </div>
              <ul className="mt-7 space-y-4">
                {practice.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] leading-7 text-[#303844]">
                    <span aria-hidden="true" className="mt-0.5 font-bold text-[#c28b24]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
