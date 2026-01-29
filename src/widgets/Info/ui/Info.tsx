import Image from "next/image";
import styles from "../Info.module.scss";

const Info = () => {
  return (
    <section id="info" className={styles.info} aria-labelledby="info-title">
      <div className="container">
        <div className={styles.menu}>
          <h2 id="info-title" className="visuallyHidden">
            Why travel with Indie Kyrgyz
          </h2>
          <div className={styles.details}>
            <div className={styles.textContent}>
              <h3 className={styles.title}>Real impressions</h3>
              <p className={styles.description}>
                Immerse yourself in local culture: stay in traditional yurts,
                discover the cuisine, mountain landscapes, and the people who
                preserve centuries-old traditions.
              </p>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.title}>Proven reliability</h3>
              <p className={styles.description}>
                We've been working in tourism for over 5 years, organizing group
                and individual trips throughout Kyrgyzstan and southern
                Kazakhstan.
              </p>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.title}>Care in every step</h3>
              <p className={styles.description}>
                Our guides are well-versed in the locales and atmosphere, making
                your trip easy, engaging, and as comfortable as possible.
              </p>
            </div>
          </div>
          <Image
            className={styles.image}
            src="/images/info.svg"
            alt="Travel experience illustration"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
