import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreas() {
  return (
    <section className="section bg-[var(--maryland-ivory)]">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-4">Practice Areas</p>
          <h2 className="section-title">Focused Legal Counsel.</h2>
          <div className="accent-rule mx-auto my-6" />
          <p className="text-lg leading-8 text-[var(--muted)]">
            Aronson Law provides strategic representation for individuals,
            families, and businesses throughout Maryland.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="card group p-8 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="serif mb-4 text-3xl text-[var(--aronson-garnet)]">
                {area.title}
              </h3>
              <p className="mb-6 leading-7 text-[var(--muted)]">
                {area.description}
              </p>
              <span className="text-sm font-bold uppercase tracking-wide text-[var(--aronson-garnet)]">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}