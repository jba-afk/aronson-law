import type { Metadata } from "next";
import CommercialLitigationHero from "../../../components/practice-areas/complex-commercial-litigation/CommercialLitigationHero";
import CommercialLitigationOverview from "../../../components/practice-areas/complex-commercial-litigation/CommercialLitigationOverview";
import CommercialLitigationServices from "../../../components/practice-areas/complex-commercial-litigation/CommercialLitigationServices";
import CommercialLitigationProblems from "../../../components/practice-areas/complex-commercial-litigation/CommercialLitigationProblems";
import LitigationProcess from "../../../components/practice-areas/complex-commercial-litigation/LitigationProcess";
import CommercialLitigationCTA from "../../../components/practice-areas/complex-commercial-litigation/CommercialLitigationCTA";

export const metadata: Metadata = {
  title: "Complex Commercial Litigation",
  description:
    "Strategic Maryland litigation counsel for businesses, owners, and professionals facing high-stakes commercial disputes.",
  alternates: { canonical: "/practice-areas/complex-commercial-litigation" },
};

export default function ComplexCommercialLitigationPage() {
  return (
    <>
      <CommercialLitigationHero />
      <CommercialLitigationOverview />
      <CommercialLitigationServices />
      <CommercialLitigationProblems />
      <LitigationProcess />
      <CommercialLitigationCTA />
    </>
  );
}
