import styles from "../MainHero.module.scss";

const MainHero = () => {
  return (
    <main>
      <section className={styles.main}>
        <span className={styles["main__desc"]}>DISCOVER THE UNTAIMED HEART <br/> OF KYRGYZSTAN</span>
        <h1 className={styles["main__title"]}>INDIE KYRGYZ TRAVEL</h1>
      </section>
    </main>
  );
};

export default MainHero;
