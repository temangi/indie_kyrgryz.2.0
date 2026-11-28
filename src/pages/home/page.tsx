import Link from "next/link";
import { MainHero } from "../../widgets/MainHero";
import { Tours } from "../../widgets/Tours";
import { Info } from "../../widgets/Info";
import { Application } from "../../widgets/Application";
import { Reise } from "../../widgets/Reise";
import { Team } from "../../widgets/Team";
import { FAQ } from "../../widgets/FAQ";
import { Reviews } from "../../widgets/Reviews";
import { faqDataHome } from "@/src/features/faq/model/constant";
import heroImg from "@/public/images/slide11.webp";

const HomePage = () => {

  return (
    <>
      <MainHero
        title="Private Tours in Kyrgyzstan"
        img={heroImg}
        imageAlt="A traveler with a backpack above a mountain lake in Kyrgyzstan"
        unTitle={
          <>
            Small groups, bilingual hosts, and routes through{" "}
            <Link href="/tour/song-kul" className="placeLink">
              Song-Kul
            </Link>
            ,{" "}
            <Link href="/tour/altyn-arashan" className="placeLink">
              Altyn-Arashan
            </Link>
            , Issyk-Kul, and the Tien Shan.{"\n"}
            Summer 2027 — limited departures; book when you’re ready.
          </>
        }
      />
      <Tours />
      <Info />
      <Application />
      <Reise />
      <Team />
      <Reviews />
      <FAQ faqData={faqDataHome}/>
    </>
  );
};

export default HomePage;