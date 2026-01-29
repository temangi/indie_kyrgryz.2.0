import styles from "../WhyWe.module.scss";


const infos = [
  {
    id: 1,
    title: "Authenticity",
    desc : `We design our tours so you can truly connect with the ancient history, traditions, and
nomadic spirit of Kyrgyzstan — not as a show, but as a real experience.`
  },
  {
    id: 2,
    title: "Real Adventures",
    desc : `Our routes are created to help you live fully in the moment. Sometimes plans change
due to weather or conditions — and that’s when the most genuine emotions and
memories are born.`
  },
  {
    id: 3,
    title: "Flexible & Caring Guides",
    desc : `Our guides are open, attentive, and easy to connect with. They adapt to each traveler
and take care of the details, so you always feel supported and understood.`
  },
  {
    id: 4,
    title: "Comfort in Any Conditions",
    desc : `From mountains to remote valleys, we maintain comfort, safety, and a positive
atmosphere — even far from civilization.`
    },
  {
    id: 5,
    title: "Thoughtfully Planned Tours",
    desc : `Every journey is carefully organized, from routes and logistics to food and safety. We
handle everything, so you can relax and focus on the experience.`
    },
];



const WhyWe = () => {
  return (
    <section id="why" className={styles.whyWe} aria-labelledby="why-title">
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 id="why-title" className={styles.title}>
              WHY TRAVELERS TRUST US?
            </h2>
            <p className={styles.subtitle}>OUR ADVANTAGES</p>
          </header>
          <div className={styles.main}>
            <article className={styles.item}>
              <h3 className={styles.itemTitle}>The Essence of Who We Are</h3>
              {infos.slice(0, 2).map((info) => (
                <div key={info.id} className={styles.itemContent}>
                  <aside className={styles.itemAside}>
                    <span className={styles.itemNumber}>{info.id}</span>
                    <h4 className={styles.itemHeading}>{info.title}</h4>
                  </aside>
                  <p className={styles.itemDescription}>{info.desc}</p>
                </div>
              ))}
            </article>

            <article className={styles.item}>
              {infos.slice(2).map((info) => (
                <div key={info.id} className={styles.itemContent}>
                  <aside className={styles.itemAside}>
                    <span className={styles.itemNumber}>{info.id}</span>
                    <h4 className={styles.itemHeading}>{info.title}</h4>
                  </aside>
                  <p className={styles.itemDescription}>{info.desc}</p>
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
