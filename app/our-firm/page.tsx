import OurFirmHero from "@/components/our-firm/OurFirmHero";
import OurStory from "@/components/our-firm/OurStory";
import FirmAdvantages from "@/components/our-firm/FirmAdvantages";
import OurProcess from "@/components/our-firm/OurProcess";
import MeetOurAttorneys from "@/components/our-firm/MeetOurAttorneys";
import OurValues from "@/components/our-firm/OurValues";

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