import Container from "@/components/ui/Container";

const services = [
  {
    title: "Estate Planning",
    items: [
      "Wills",
      "Trust Agreements",
      "Powers of Attorney",
      "Advance Medical Directives",
    ],
    icon: (
      <>
        <path d="M18 10H40L50 20V54H18Z" />
        <path d="M40 10V20H50" />
        <path d="M25 29H43" />
        <path d="M25 36H43" />
        <path d="M25 43H37" />
        <path d="M43 44L48 49L57 38" />
      </>
    ),
  },
  {
    title: "Probate & Estate Administration",
    items: [
      "Estate Administration",
      "Personal Representative Guidance",
      "Probate Proceedings",
      "Asset Distribution",
    ],
    icon: (
      <>
        <path d="M10 25L32 10L54 25Z" />
        <path d="M14 25H50" />
        <path d="M18 29V47" />
        <path d="M28 29V47" />
        <path d="M38 29V47" />
        <path d="M48 29V47" />
        <path d="M12 49H52" />
        <path d="M8 55H56" />
      </>
    ),
  },
  {
    title: "Trust Administration",
    items: [
      "Trustee Guidance",
      "Trust Interpretation",
      "Ongoing Administration",
      "Fiduciary Advice",
    ],
    icon: (
      <>
        <path d="M32 8L52 16V31C52 44 44 53 32 58C20 53 12 44 12 31V16Z" />
        <path d="M32 16V49" />
        <path d="M21 24H43" />
        <path d="M21 24L17 34H25Z" />
        <path d="M43 24L39 34H47Z" />
        <path d="M19 35C21 40 24 40 26 35" />
        <path d="M41 35C43 40 46 40 48 35" />
      </>
    ),
  },
  {
    title: "Business & Legacy Planning",
    items: [
      "Succession Planning",
      "Family Businesses",
      "Tax Considerations",
      "Business Continuity",
    ],
    icon: (
      <>
        <path d="M14 21H50V52H14Z" />
        <path d="M23 21V15C23 12 25 10 28 10H36C39 10 41 12 41 15V21" />
        <path d="M14 31H50" />
        <path d="M28 31V36H36V31" />
        <path d="M20 52V56" />
        <path d="M44 52V56" />
      </>
    ),
  },
];

export default function TrustsEstatesServices() {
  return (
    <section className="bg-[var(--maryland-ivory)] py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Comprehensive Estate Counsel</p>

          <h2 className="section-title mt-3 text-[var(--aronson-navy)]">
            Our Services
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-16 bg-[var(--chesapeake-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Every estate plan and administration matter is different. We
            provide practical guidance tailored to your family, your assets,
            and your long-term goals.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[1700px] grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="trusts-estates-service-card group rounded-[5px] border border-[var(--border)] bg-white px-8 py-9 shadow-[var(--shadow-soft)]"
            >
              <div
  className="
    flex
    h-[72px]
    w-[72px]
    items-center
    justify-center
    rounded-full
    text-white
    transition-all
    duration-500
    group-hover:scale-110
    group-hover:shadow-[0_18px_36px_rgba(122,20,35,0.28)]
    group-hover:rotate-[2deg]
  "
  style={{
    background:
      "radial-gradient(circle at 30% 30%, #e8c977 0%, #c59a3d 55%, #a97c24 100%)",
    boxShadow:
      "inset 0 2px 2px rgba(255,255,255,.18), inset 0 -3px 5px rgba(0,0,0,.08)",
  }}
>
                <svg
                  viewBox="0 0 64 64"
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
              </div>

              <h3 className="serif mt-7 text-[1.55rem] leading-tight text-[var(--aronson-navy)]">
                {service.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.98rem] leading-6 text-[var(--muted)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[2px] font-bold text-[var(--chesapeake-gold)]"
                    >
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}