import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import PracticeAreas from "@/components/home/PracticeAreas";

export const metadata: Metadata = {
  title: "Aronson Law | Maryland Attorneys",
  description:
    "Practical counsel and proven advocacy for individuals, families, businesses, and construction-industry clients throughout Maryland.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <PracticeAreas />
    </>
  );
}
