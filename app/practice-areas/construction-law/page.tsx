import type { Metadata } from "next";
import ConstructionLawHero from "@/components/practice-areas/construction-law/ConstructionLawHero";
import ConstructionLawOverview from "@/components/practice-areas/construction-law/ConstructionLawOverview";
import ConstructionLawServices from "@/components/practice-areas/construction-law/ConstructionLawServices";
import ConstructionLawTestimonial from "@/components/practice-areas/construction-law/ConstructionLawTestimonial";
import ConstructionLawProblems from "@/components/practice-areas/construction-law/ConstructionLawProblems";
import ConstructionLawLifecycle from "@/components/practice-areas/construction-law/ConstructionLawLifecycle";
import ConstructionLawExperience from "@/components/practice-areas/construction-law/ConstructionLawExperience";
import ConstructionLawResults from "@/components/practice-areas/construction-law/ConstructionLawResults";
import ConstructionLawFAQ from "@/components/practice-areas/construction-law/ConstructionLawFAQ";
import ConstructionLawCTA from "@/components/practice-areas/construction-law/ConstructionLawCTA";
import ConstructionLawClosingImage from "@/components/practice-areas/construction-law/ConstructionLawClosingImage";

export const metadata: Metadata = {
  title: "Construction Law",
  description:
    "Maryland construction-law counsel for owners, contractors, subcontractors, and design professionals in contracts, claims, and disputes.",
  alternates: { canonical: "/practice-areas/construction-law" },
};

export default function ConstructionLawPage() {
  return (
    <>
   <ConstructionLawHero />
<ConstructionLawOverview />
<ConstructionLawServices />
<ConstructionLawProblems />
<ConstructionLawLifecycle />
<ConstructionLawExperience />
<ConstructionLawResults />
<ConstructionLawTestimonial />
<ConstructionLawFAQ />
<ConstructionLawClosingImage />
<ConstructionLawCTA />
    </>
  );
}
