import styles from "../MainHero.module.scss";
import Image from "next/image";
import logo from "@/src/widgets/Header/logoW.png"

const MainHero = () => {
  return (
    <section className={styles.main}>
      <Image
        src={logo}
        alt="Indie Kyrgyz Travel logo"
        className={styles["main__logo"]}
      />
      <p className={styles["main__desc"]}>
        DISCOVER THE UNTAIMED HEART <br /> OF KYRGYZSTAN
      </p>
      <h1 className={styles["main__title"]}>INDIE KYRGYZ TRAVEL</h1>
    </section>
  );
};

export default MainHero;
