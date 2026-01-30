"use client";

import Image from "next/image";
import styles from "../Info.module.scss";

const Info = () => {
  return (
    <section id="info" className={styles.info}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            Why travel with <br /> <span>Indie Kyrgyz</span>
          </h2>
        </div>
        
        <div className={styles.menu}>
          <div className={styles.details}>
            {[
              {
                title: "Real impressions",
                desc: "Immerse yourself in local culture: stay in traditional yurts, discover the cuisine, mountain landscapes, and the people."
              },
              {
                title: "Proven reliability",
                desc: "We've been working in tourism for over 5 years, organizing group and individual trips throughout Kyrgyzstan."
              },
              {
                title: "Care in every step",
                desc: "Our guides are well-versed in the locales and atmosphere, making your trip easy, engaging, and comfortable."
              }
            ].map((item, index) => (
              <div key={index} className={styles.textContent}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/info.svg"
              alt="Travel experience illustration"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;