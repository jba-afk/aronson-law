import Link from "next/link";

interface PracticeCardProps {
  title: string;
  description: string;
  href: string;
}

export default function PracticeCard({
  title,
  description,
  href,
}: PracticeCardProps) {
  return (
    <Link
      href={href}
      className="card group block p-8 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <h3 className="serif mb-4 text-3xl text-[var(--aronson-garnet)]">
        {title}
      </h3>

      <p className="mb-6 leading-7 text-[var(--muted)]">
        {description}
      </p>

      <span className="text-sm font-bold uppercase tracking-wide text-[var(--aronson-garnet)]">
        Learn More →
      </span>
    </Link>
  );
}