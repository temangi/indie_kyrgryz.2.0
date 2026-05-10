import { MainHero } from "../../widgets/MainHero";
import { Tours } from "../../widgets/Tours";
import { OutdoorActivities } from "../../widgets/OutdoorActivities";
import { Info } from "../../widgets/Info";
import { Application } from "../../widgets/Application";
import { Reise } from "../../widgets/Reise";
import { Philosophien } from "../../widgets/Philosophien";
import { Team } from "../../widgets/Team";
import { WhyWe } from "../../widgets/WhyWe";
import { FAQ } from "../../widgets/FAQ";
import { Reviews } from "../../widgets/Reviews";
import { faqDataHome } from "@/src/features/faq/model/constant";
import heroImg from "@/public/images/slide11.webp";

const HomePage = () => {

  return (
    <>
      <MainHero
        title="INDIE KYRGYZ TRAVEL"
        img={heroImg}
        unTitle={`Small groups, bilingual hosts, routes through mountains and lakes.
Summer 2026 — limited departures; book when you’re ready.`}
      />
      <Tours />
      <OutdoorActivities />
      <Info />
      <Application />
      <Reise />
      <Philosophien />
      <Team />
      <WhyWe />
      <Reviews />
      <FAQ faqData={faqDataHome}/>
    </>
  );
};

export default HomePage;