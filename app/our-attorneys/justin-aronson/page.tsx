import type { Metadata } from "next";
import JustinHero from "@/components/our-attorneys/justin-aronson/JustinHero";
import JustinStory from "@/components/our-attorneys/justin-aronson/JustinStory";
import JustinHighlights from "@/components/our-attorneys/justin-aronson/JustinHighlights";
import JustinRepresentativeMatters from "@/components/our-attorneys/justin-aronson/JustinRepresentativeMatters";
import JustinRecognition from "@/components/our-attorneys/justin-aronson/JustinRecognition";
import JustinCredentials from "@/components/our-attorneys/justin-aronson/JustinCredentials";
import JustinTestimonials from "@/components/our-attorneys/justin-aronson/JustinTestimonials";
import JustinCTA from "@/components/our-attorneys/justin-aronson/JustinCTA";

export const metadata: Metadata = {
  title: "Justin B. Aronson",
  description:
    "Meet Justin B. Aronson, Managing Member of Aronson Law and a Maryland attorney focused on family law, construction law, and complex commercial litigation.",
  alternates: { canonical: "/our-attorneys/justin-aronson" },
};

export default function JustinAronsonPage() {
  return (
    <>
      <JustinHero />
      <JustinStory />
      <JustinHighlights />
      <JustinRepresentativeMatters />
      <JustinRecognition />
      <JustinCredentials />
      <JustinTestimonials />
      <JustinCTA />
    </>
  );
}
