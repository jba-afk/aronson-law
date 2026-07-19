import type { Metadata } from "next";
import OurFirmHero from "@/components/our-firm/OurFirmHero";
import OurStory from "@/components/our-firm/OurStory";
import FirmAdvantages from "@/components/our-firm/FirmAdvantages";
import OurProcess from "@/components/our-firm/OurProcess";
import MeetOurAttorneys from "@/components/our-firm/MeetOurAttorneys";
import OurValues from "@/components/our-firm/OurValues";

export const metadata: Metadata = {
  title: "Our Firm",
  description:
    "Learn about Aronson Law, a Maryland law firm providing thoughtful counsel, strategic advocacy, and personal attention.",
  alternates: { canonical: "/our-firm" },
};

export default function OurFirmPage() {
  return (
    <>
      <OurFirmHero />
      <OurStory />
      <FirmAdvantages />
      <OurProcess />
      <MeetOurAttorneys />
      <OurValues />
    </>
  );
}
