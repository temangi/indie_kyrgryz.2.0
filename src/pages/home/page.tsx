import { MainHero } from "../../widgets/MainHero";
import { Tours } from "../../widgets/Tours";
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
      <MainHero title={"INDIE KYRGYZ TRAVEL"} img={heroImg} unTitle="Discover the beauty of Kyrgyzstan" />
      <Tours />
      <Info />
      <Application />
      <Reise />
      <Philosophien />
      <Team />
      <WhyWe />
      <FAQ faqData={faqDataHome}/>
      <Reviews />
    </>
  );
};

export default HomePage;