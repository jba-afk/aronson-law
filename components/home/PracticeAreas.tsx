import { practiceAreas } from "@/data/practiceAreas";
import Container from "@/components/ui/Container";
import PracticeCard from "@/components/ui/PracticeCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PracticeAreas() {
  return (
    <section className="section bg-[var(--maryland-ivory)]">
      <SectionHeading
        eyebrow="Practice Areas"
        title="Focused Legal Counsel."
        description="Aronson Law provides strategic representation for individuals, families, and businesses throughout Maryland."
      />

      <Container>
        <div className="grid gap-7 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <PracticeCard
              key={area.href}
              title={area.title}
              description={area.description}
              href={area.href}
              icon={area.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}