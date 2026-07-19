import type { Metadata } from "next";
import FamilyLawHero from "@/components/practice-areas/family-law/FamilyLawHero";
import FamilyLawOverview from "@/components/practice-areas/family-law/FamilyLawOverview";
import FamilyLawServices from "@/components/practice-areas/family-law/FamilyLawServices";
import FamilyLawAttorney from "@/components/practice-areas/family-law/FamilyLawAttorney";
import FamilyLawTestimonial from "@/components/practice-areas/family-law/FamilyLawTestimonial";
import FamilyLawFAQ from "@/components/practice-areas/family-law/FamilyLawFAQ";
import FamilyLawCTA from "@/components/practice-areas/family-law/FamilyLawCTA";

export const metadata: Metadata = {
  title: "Family Law",
  description:
    "Maryland family-law counsel for divorce, custody, child support, property division, agreements, and related family matters.",
  alternates: { canonical: "/practice-areas/family-law" },
};

export default function FamilyLawPage() {
  return (
    <>
      <FamilyLawHero />
      <FamilyLawOverview />
      <FamilyLawServices />
      <FamilyLawAttorney />
      <FamilyLawTestimonial />
      <FamilyLawFAQ />
      <FamilyLawCTA />
    </>
  );
}
