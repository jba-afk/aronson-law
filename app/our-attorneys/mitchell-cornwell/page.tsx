import type { Metadata } from "next";
import MitchHero from "@/components/our-attorneys/mitchell-cornwell/MitchHero";
import MitchStory from "@/components/our-attorneys/mitchell-cornwell/MitchStory";
import MitchHighlights from "@/components/our-attorneys/mitchell-cornwell/MitchHighlights";
import MitchRepresentationMatters from "@/components/our-attorneys/mitchell-cornwell/MitchRepresentationMatters";
import MitchCredentials from "@/components/our-attorneys/mitchell-cornwell/MitchCredentials";
import MitchTestimonials from "@/components/our-attorneys/mitchell-cornwell/MitchTestimonials";
import MitchCTA from "@/components/our-attorneys/mitchell-cornwell/MitchCTA";

export const metadata: Metadata = {
  title: "Mitchell T. Cornwell",
  description:
    "Meet Mitchell T. Cornwell, Of Counsel to Aronson Law, serving Maryland families, fiduciaries, and businesses in trusts, estates, probate, and planning matters.",
  alternates: { canonical: "/our-attorneys/mitchell-cornwell" },
};

export default function MitchellCornwellPage() {
  return (
    <>
      <MitchHero />
      <MitchStory />
      <MitchHighlights />
      <MitchRepresentationMatters />
      <MitchCredentials />
      <MitchTestimonials />
      <MitchCTA />
    </>
  );
}
