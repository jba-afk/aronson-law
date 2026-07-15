import TrustsEstatesHero from "@/components/practice-areas/trusts-estates/TrustsEstatesHero";
import TrustsEstatesOverview from "@/components/practice-areas/trusts-estates/TrustsEstatesOverview";
import TrustsEstatesServices from "@/components/practice-areas/trusts-estates/TrustsEstatesServices";
import EstatePlanningTimeline from "@/components/practice-areas/trusts-estates/EstatePlanningTimeline";
import TrustsEstatesReasons from "@/components/practice-areas/trusts-estates/TrustsEstatesReasons";
import TrustsEstatesFAQ from "@/components/practice-areas/trusts-estates/TrustsEstatesFAQ";
import TrustsEstatesCTA from "@/components/practice-areas/trusts-estates/TrustsEstatesCTA";


export default function TrustsEstatesPage() {
  return (
    <>
      <TrustsEstatesHero />
      <TrustsEstatesOverview />
      <TrustsEstatesServices />
      <EstatePlanningTimeline />
     <TrustsEstatesReasons />
<TrustsEstatesFAQ />
<TrustsEstatesCTA />
    </>
  );
}