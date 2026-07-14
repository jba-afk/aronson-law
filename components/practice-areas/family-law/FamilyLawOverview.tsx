import SplitIllustrationSection from "@/components/ui/SplitIllustrationSection";
import FamilyCourthouseIllustration from "@/components/ui/FamilyCourthouseIllustration";

export default function FamilyLawOverview() {
  return (
    <SplitIllustrationSection
      eyebrow="Thoughtful Family Law Counsel"
      title="Helping Families Move Forward"
      illustration={<FamilyCourthouseIllustration />}
      bullets={[
        "Practical advice focused on your family and your future.",
        "Prepared advocacy when negotiation is not enough.",
      ]}
    >
      <p>
        Family law matters involve far more than statutes and court filings.
        They affect children, finances, homes, relationships, and plans for
        the future.
      </p>

      <p>
        Aronson Law provides clear, thoughtful guidance tailored to each
        client’s circumstances and goals. We work to resolve disputes
        efficiently whenever possible while remaining fully prepared to
        advocate in court when necessary.
      </p>
    </SplitIllustrationSection>
  );
}