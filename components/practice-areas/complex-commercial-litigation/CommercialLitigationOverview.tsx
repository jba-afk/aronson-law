import SplitIllustrationSection from "@/components/ui/SplitIllustrationSection";
import LitigationStrategyIllustration from "./LitigationStrategyIllustration";

export default function CommercialLitigationOverview() {
  return (
    <SplitIllustrationSection
      eyebrow="Complex Commercial Litigation"
      title="Litigation Is a Business Decision"
      illustration={<LitigationStrategyIllustration />}
      bullets={[
        "Evaluate legal risk alongside business objectives.",
        "Pursue the strategy most likely to protect long-term interests.",
      ]}
    >
      <p>
        Sometimes litigation is unavoidable. Sometimes an early resolution
        serves the business better. The right strategy depends on the facts,
        the risks, the cost, and the client&apos;s broader objectives.
      </p>

      <p>
        Our role is not simply to litigate. We develop a legal strategy that
        aligns with the client&apos;s business goals while protecting its
        leverage, reputation, operations, and long-term interests.
      </p>
    </SplitIllustrationSection>
  );
}