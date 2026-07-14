import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const attorneys = [
  {
    name: "Justin B. Aronson",
    title: "Managing Member",
    image: "/attorneys/justin-aronson-hires.jpg",
    imageAlt: "Justin B. Aronson",
    href: "/attorneys/justin-aronson",
    linkLabel: "Meet Justin",
    practiceAreas: [
      "Family Law",
      "Construction Law",
      "Complex Commercial Litigation",
    ],
  },
  {
    name: "Mitchell T. Cornwell",
    title: "Of Counsel",
    image: "/attorneys/mitch-cornwell.jpg",
    imageAlt: "Mitchell T. Cornwell",
    href: "/attorneys/mitch-cornwell",
    linkLabel: "Meet Mitch",
    practiceAreas: ["Trusts & Estates", "Probate", "Estate Planning"],
  },
];

export default function MeetOurAttorneys() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="serif text-[clamp(2.8rem,4vw,4.25rem)] leading-tight text-[var(--aronson-garnet)]">
            Meet Our Attorneys
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-20 bg-[var(--chesapeake-gold)]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {attorneys.map((attorney) => (
            <article
              key={attorney.name}
              className="overflow-hidden border border-[var(--border)] bg-[var(--maryland-ivory)] shadow-[0_10px_28px_rgba(7,23,38,0.08)]"
            >
              <div className="grid sm:grid-cols-[280px_1fr]">
                <div className="relative aspect-square w-full overflow-hidden bg-[var(--aronson-navy)] sm:aspect-auto sm:min-h-[360px]">
                  <Image
                    src={attorney.image}
                    alt={attorney.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 280px, 100vw"
                    quality={100}
                    unoptimized
                    className={
                      attorney.name === "Justin B. Aronson"
                        ? "object-cover object-center"
                        : "object-cover object-top"
                    }
                    priority={attorney.name === "Justin B. Aronson"}
                  />
                </div>

                <div className="flex flex-col justify-center px-8 py-10 lg:px-9">
                  <h3 className="serif text-3xl leading-tight text-[var(--aronson-garnet)] lg:text-4xl">
                    {attorney.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[var(--chesapeake-gold)]">
                    {attorney.title}
                  </p>

                  <div className="my-6 h-px w-full bg-[var(--border)]" />

                  <ul className="space-y-3 text-[var(--ink)]">
                    {attorney.practiceAreas.map((practiceArea) => (
                      <li
                        key={practiceArea}
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[1px] text-[var(--chesapeake-gold)]"
                        >
                          →
                        </span>

                        <span>{practiceArea}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={attorney.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-garnet)] transition hover:text-[var(--aronson-garnet-light)]"
                  >
                    {attorney.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}