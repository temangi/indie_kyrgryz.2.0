import Image from "next/image";
import styles from "../Info.module.scss";

const Info = () => {
  return (
    <section id="info" className={styles.info}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.details}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>Real impressions</h1>
              <p className={styles.description}>
                Immerse yourself in local culture: stay in traditional yurts,
                discover the cuisine, mountain landscapes, and the people who
                preserve centuries-old traditions.
              </p>
            </div>
            <div className={styles.textContent}>
              <h1 className={styles.title}>Proven reliability</h1>
              <p className={styles.description}>
                We've been working in tourism for over 5 years, organizing group
                and individual trips throughout Kyrgyzstan and southern
                Kazakhstan.
              </p>
            </div>
            <div className={styles.textContent}>
              <h1 className={styles.title}>Care in every step</h1>
              <p className={styles.description}>
                Our guides are well-versed in the locales and atmosphere, making
                your trip easy, engaging, and as comfortable as possible.
              </p>
            </div>
          </article>
          <Image
            className={styles.image}
            src="/images/info.svg"
            alt="info"
            width={500}
            height={400}
          />
        </section>
      </div>
    </section>
  );
};

export default Info;
