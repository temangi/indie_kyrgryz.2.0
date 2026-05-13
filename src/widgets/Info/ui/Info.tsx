"use client";

import Image from "next/image";
import styles from "../Info.module.scss";
import img from "@/public/images/tours/day/p2.webp";

const Info = () => {
  const infoItems = [
    {
      title: "Real impressions",
      desc: "Immerse yourself in local culture: stay in traditional yurts, discover the cuisine, mountain landscapes, and the people.",
    },
    {
      title: "Proven reliability",
      desc: "We've been working in tourism for over 5 years, organizing group and individual trips throughout Kyrgyzstan.",
    },
    {
      title: "Care in every step",
      desc: "Our guides are well-versed in the locales and atmosphere, making your trip easy, engaging, and comfortable.",
    },
  ];

  return (
    <section id="info" className={styles.info}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              Why travel with <br /> <span>Indie Kyrgyz</span>
            </h2>

            <div className={styles.details}>
              {infoItems.map((item, index) => (
                <div key={index} className={styles.textContent}>
                  <span className={styles.number}>{index + 1}</span>
                  <div className={styles.textBody}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <Image
                src={img}
                alt="Experience"
                fill
                sizes="100vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.experienceBadge}>
              <strong>5+</strong>
              <span>
                Years of <br /> Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
