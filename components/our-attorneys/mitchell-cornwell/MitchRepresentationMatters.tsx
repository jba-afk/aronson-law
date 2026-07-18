import Image from "next/image";
import Link from "next/link";

const credentials = [
  { icon: "people", text: "Serving Maryland Families Since 1984" },
  { icon: "calculator", text: "Attorney & Certified Public Accountant" },
  { icon: "gavel", text: "Former President, Talbot County Bar Association" },
  { icon: "courthouse", text: "Former Talbot County Auditor (2006–2025)" },
  { icon: "people", text: "Former Member, Judicial Nominating Commission" },
  { icon: "pin", text: "Serving Clients Throughout Maryland’s Eastern Shore" },
];

function GlanceIcon({ type }: { type: string }) {
  const common = "h-8 w-8";
  if (type === "calculator") return <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true"><rect x="11" y="5" width="26" height="38" rx="2" stroke="currentColor" strokeWidth="1.8"/><rect x="16" y="10" width="16" height="7" stroke="currentColor" strokeWidth="1.8"/><path d="M17 24h2M24 24h2M31 24h2M17 31h2M24 31h2M31 31h2M17 38h2M24 38h2M31 38h2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg>;
  if (type === "gavel") return <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true"><path d="m12 15 11 11M19 8l14 14M8 19l14 14M28 27l12 12M24 31 9 9M7 41h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="m17 7 4-4 14 14-4 4L17 7ZM7 17l4-4 14 14-4 4L7 17Z" stroke="currentColor" strokeWidth="1.7"/></svg>;
  if (type === "courthouse") return <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true"><path d="M5 17h38L24 6 5 17ZM9 21h30M11 21v17M19 21v17M29 21v17M37 21v17M6 38h36M4 43h40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === "pin") return <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true"><path d="M24 43s13-13 13-25a13 13 0 1 0-26 0c0 12 13 25 13 25Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="1.8"/></svg>;
  return <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true"><circle cx="18" cy="16" r="6" stroke="currentColor" strokeWidth="1.8"/><circle cx="32" cy="18" r="5" stroke="currentColor" strokeWidth="1.8"/><path d="M7 40v-8c0-7 4-11 11-11s11 4 11 11v8M28 26c7 0 12 4 12 11v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

const attorneys = [
  {
    name: "Justin Aronson",
    role: "Managing Attorney",
    focus: "Family Law · Construction Law · Commercial Litigation",
    image: "/attorneys/justin-aronson-hires.jpg",
    href: "/our-attorneys/justin-aronson",
    position: "object-[center_8%]",
  },
  {
    name: "Mitch Cornwell",
    role: "Attorney",
    focus: "Trusts & Estates · Probate · Business Planning",
    image: "/attorneys/mitch-cornwell.jpg",
    href: "/our-attorneys/mitchell-cornwell",
    position: "object-top",
  },
];

export default function MitchRepresentationMatters() {
  return (
    <section className="bg-[#fbfaf7] text-[#111827]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.15fr_0.85fr] lg:gap-10 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:self-center">
          {attorneys.map((attorney) => (
            <Link key={attorney.name} href={attorney.href} className="group overflow-hidden border border-[#dfd5c8] bg-white shadow-[0_12px_32px_rgba(7,23,38,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#d3a13a]/70 hover:shadow-[0_18px_42px_rgba(7,23,38,0.12)]">
              <div className="relative aspect-[8/11] overflow-hidden bg-[#eee7de]">
                <Image src={attorney.image} alt={attorney.name} fill sizes="(max-width: 1023px) 45vw, 16vw" className={`object-cover transition duration-500 group-hover:scale-[1.025] ${attorney.position}`} />
              </div>
              <div className="flex min-h-[210px] flex-col justify-center px-5 py-7 text-center">
                <h3 className="serif text-xl font-bold text-[var(--aronson-navy)]">{attorney.name}</h3>
                <p className="mt-1 text-sm font-bold text-[#3a414b]">{attorney.role}</p>
                <p className="mt-2 text-base leading-7 text-[#555e69]">{attorney.focus}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:border-l lg:border-[#ded4c7] lg:pl-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b77b13]">Boutique Service. Complementary Experience.</p>
          <h2 className="serif mt-4 text-4xl leading-tight text-[var(--aronson-navy)] sm:text-5xl">Working Together at Aronson Law</h2>
          <div className="mt-4 h-0.5 w-16 bg-[#d3a13a]" />
          <div className="mt-7 space-y-5 text-[17px] leading-8 text-[#303844] sm:text-lg">
            <p>Aronson Law brings together attorneys with distinct strengths and a shared commitment to exceptional client service.</p>
            <p>Mitch leads the firm&apos;s Trusts &amp; Estates practice, helping clients plan for the future, administer estates, and navigate probate with confidence.</p>
            <p>When matters involve business ownership, family considerations, or litigation, clients benefit from the collaborative approach of a boutique firm where attorneys work closely together to provide practical, well-rounded counsel.</p>
          </div>
        </div>

        <aside className="overflow-hidden border border-[#ded4c7] bg-white shadow-[0_12px_34px_rgba(7,23,38,0.07)]">
          <h2 className="serif bg-[var(--aronson-navy)] px-6 py-4 text-center text-2xl uppercase tracking-[0.08em] text-white">At a Glance</h2>
          <ul className="divide-y divide-[#eee7de] px-6">
            {credentials.map((credential) => (
              <li key={credential.text} className="flex gap-4 py-5 text-[16px] leading-6 text-[#27313d]">
                <span className="shrink-0 text-[#c28b24]"><GlanceIcon type={credential.icon} /></span>
                <span>{credential.text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
