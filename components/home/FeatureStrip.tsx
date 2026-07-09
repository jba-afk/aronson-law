const features = [
  "Family Law",
  "Construction Law",
  "Complex Commercial Litigation",
  "Trusts & Estates",
];

export default function FeatureStrip() {
  return (
    <section className="border-b border-[var(--border)] bg-white">
      <div className="container grid grid-cols-1 divide-y divide-[var(--border)] md:grid-cols-4 md:divide-x md:divide-y-0">
        {features.map((feature) => (
          <div key={feature} className="flex items-center justify-center px-6 py-8 text-center">
            <span className="serif text-xl text-[var(--aronson-navy)]">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}