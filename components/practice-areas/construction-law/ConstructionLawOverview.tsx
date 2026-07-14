import SplitIllustrationSection from "@/components/ui/SplitIllustrationSection";
import ConstructionBlueprintIllustration from "@/components/ui/ConstructionBlueprintIllustration";

export default function ConstructionLawOverview() {
  return (
    <SplitIllustrationSection
      eyebrow="Construction Law"
      title="We Understand Construction Projects"
      illustration={<ConstructionBlueprintIllustration />}
      bullets={[
        "Help solve problems efficiently whenever possible.",
        "Be fully prepared when litigation becomes necessary.",
      ]}
    >
      <p>
        Successful construction projects require planning, coordination,
        communication, and accountability. Legal issues can interrupt
        schedules, strain business relationships, and increase costs.
      </p>

      <p>
        Aronson Law provides practical legal guidance designed to help clients
        solve problems efficiently, protect their interests, and keep projects
        moving forward.
      </p>
    </SplitIllustrationSection>
  );
}