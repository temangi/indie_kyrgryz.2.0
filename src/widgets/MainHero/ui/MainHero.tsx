import styles from "../MainHero.module.scss";
import Image from "next/image";
import logo from "@/public/images/whiteLogo.png";
import { StaticImageData } from "next/image";

type MainHeroProps = {
  title: string;
  unTitle? : string
  img: StaticImageData;
}

const MainHero = ({title , unTitle ,  img}: MainHeroProps) => {
  return (
    <section className={styles.main} style={{backgroundImage: `url(${img.src})`}}>
      <Image priority src={logo} className={styles["main__logo"]} alt="Indie kyrgyz travel" />
      <p className={styles["main__desc"]}>
        {unTitle}
      </p>
      <h1 className={styles["main__title"]}>{title}</h1>
    </section>
  );
};

export default MainHero;
