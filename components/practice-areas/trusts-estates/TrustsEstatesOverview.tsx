"use client";

import SplitIllustrationSection from "@/components/ui/SplitIllustrationSection";
import { EstateLegacyDrawing } from "@/components/practice-areas/trusts-estates/EstateLegacyDrawing";

export default function TrustsEstatesOverview() {
  return (
    <SplitIllustrationSection
      eyebrow="Planning With Purpose"
      title="Estate Planning Is One of the Greatest Gifts You Can Leave Your Family"
      illustration={<EstateLegacyDrawing />}
      bullets={[
        "Create clear instructions for the people you trust.",
        "Reduce uncertainty for your family during difficult moments.",
      ]}
    >
      <p>
        Most people do not enjoy thinking about estate planning. But thoughtful
        planning today can spare loved ones uncertainty, expense, and
        unnecessary conflict in the future.
      </p>

      <p>
        Our role is to help you create a plan that reflects your wishes,
        protects the people and property that matter most, and provides clarity
        and peace of mind for those you care about.
      </p>
    </SplitIllustrationSection>
  );
}