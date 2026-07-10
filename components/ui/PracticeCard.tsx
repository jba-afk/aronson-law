import Link from "next/link";

interface PracticeCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function PracticeCard({
  title,
  description,
  href,
  icon,
}: PracticeCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--aronson-garnet)] to-[var(--chesapeake-gold)]" />

      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--chesapeake-gold)] bg-[var(--maryland-ivory)] text-3xl text-[var(--aronson-garnet)] transition duration-300 group-hover:bg-[var(--aronson-garnet)] group-hover:text-white">
        {icon}
      </div>

      <h3 className="serif mb-4 text-3xl leading-tight text-[var(--aronson-navy)]">
        {title}
      </h3>

      <p className="mb-7 leading-7 text-[var(--muted)]">
        {description}
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--aronson-garnet)]">
        Learn More
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}