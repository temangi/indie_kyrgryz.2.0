import styles from "../MainHero.module.scss";
import Image from "next/image";
import logo from "@/src/widgets/Header/logoW.png"

const MainHero = () => {
  return (
    <main>
      <section className={styles.main}>
        <Image src={logo} alt="Description" className={styles["main__logo"]} />
        <span className={styles["main__desc"]}>DISCOVER THE UNTAIMED HEART <br/> OF KYRGYZSTAN</span>
        <h1 className={styles["main__title"]}>INDIE KYRGYZ TRAVEL</h1>
      </section>
    </main>
  );
};

export default MainHero;
