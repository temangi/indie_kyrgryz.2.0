import styles from "../MainHero.module.scss";
import { TourSlider } from "@/src/shared/ui/Slider";
import { MainSLider } from "../constant/constants";

const MainHero = () => {
  return (
    <main>
      <section className={styles.main}>
        <TourSlider items={MainSLider}/>
      </section>
    </main>
  );
};

export default MainHero;
