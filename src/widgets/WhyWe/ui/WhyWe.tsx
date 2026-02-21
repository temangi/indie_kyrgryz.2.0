"use client";

import styles from "../WhyWe.module.scss";

const infos = [
  { id: 1, title: "Authenticity", desc: "We design our tours so you can truly connect with the ancient history, traditions, and nomadic spirit of Kyrgyzstan — not as a show, but as a real experience." },
  { id: 2, title: "Real Adventures", desc: "Our routes are created to help you live fully in the moment. Sometimes plans change due to weather — and that’s when the most genuine emotions are born." },
  { id: 3, title: "Flexible & Caring Guides", desc: "Our guides are open, attentive, and easy to connect with. They adapt to each traveler and take care of the details." },
  { id: 4, title: "Comfort in Any Conditions", desc: "From mountains to remote valleys, we maintain comfort, safety, and a positive atmosphere — even far from civilization." },
  { id: 5, title: "Thoughtfully Planned Tours", desc: "Every journey is carefully organized, from routes and logistics to food and safety. We handle everything for you." },
];

const WhyWe = () => {
  return (
    <section id="why" className={styles.whyWe} aria-labelledby="why-title">
      <div className="container">
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <p className={styles.subtitle}>Our Advantages</p>
            <h2 id="why-title" className={styles.title}>
              Why travelers trust us?
            </h2>
          </header>

          <div className={styles.grid}>
            <article className={`${styles.card} ${styles.featuredCard}`}>
              <h3 className={styles.featuredTitle}>The Essence of Who We Are</h3>
              {infos.slice(0, 2).map((info) => (
                <div key={info.id} className={styles.infoBlock}>
                  <div className={styles.infoHead}>
                    <span className={styles.number}>{info.id}</span>
                    <h4 className={styles.heading}>{info.title}</h4>
                  </div>
                  <p className={styles.description}>{info.desc}</p>
                </div>
              ))}
            </article>
            <article className={styles.card}>
              {infos.slice(2).map((info) => (
                <div key={info.id} className={styles.infoBlock}>
                  <div className={styles.infoHead}>
                    <span className={styles.number}>{info.id}</span>
                    <h4 className={styles.heading}>{info.title}</h4>
                  </div>
                  <p className={styles.description}>{info.desc}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;