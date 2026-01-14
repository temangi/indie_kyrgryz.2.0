import styles from "../WhyWe.module.scss";


const infos = [
  {
    id: 1,
    title: "Authentic Experience",
    desc: "Live like a nomad: spend nights in yurts, taste traditional cuisine, explore breathtaking mountain landscapes, and meet people who have preserved ancient traditions for centuries. Our tours are not just trips – they're a chance to immerse yourself in a culture where every word, every gesture, and every flavor carries history and soul"
  },
  {
    id: 2,
    title: "Reliability",
    desc: "We've been steadily working in tourism for over 5 years. During this time, we've organized dozens of individual and group tours across Kyrgyzstan and southern Kazakhstan. People trust us because we always keep our promises and carefully plan every detail of the journey."
  },
  {
    id: 3,
    title: "Quality Service",
    desc: "Our guides don't just know the route — they feel the vibe of the group, support each traveler, and make the entire journey smooth and comfortable. They know how to create an atmosphere of trust and warmth, so every day on the road feels joyful and effortless."
  },
  {
    id: 4,
    title: "A Team You Can Rely On",
    desc: "Our guides are experienced instructors and adventurers who have completed dozens of mountain routes. Each of them is trained in first aid and knows how to act in unexpected situations, always keeping a backup plan in mind."
  },
  {
    id: 5,
    title: "Comfort in Any Conditions",
    desc: "Even in the mountains, we make sure you feel cozy and safe. We set up camps that provide comfort after a full and active day, so you can recharge and enjoy the journey."
  },
  {
    id: 6,
    title: "Delicious and Varied Food",
    desc: "No trip is complete without good food. We create balanced menus and use only fresh, quality ingredients. Our guides know how to cook filling, tasty, and healthy meals even in the simplest conditions."
  },
  {
    id: 7,
    title: "Every Detail Taken Care Of",
    desc: "We handle all the logistics for you: transportation, meals, accommodation, first aid kits, and even the little things you might forget. All you need to do is relax and enjoy the adventure."
  }
];



const WhyWe = () => {
  return (
    <section id="why" className={styles.whyWe}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>WHY CHOOSE US?</h1>
            <p className={styles.subtitle}>OUR ADVANTAGES</p>
          </article>
          <main className={styles.main}>
            <article className={styles.item}>
              <h2 className={styles.itemTitle}>The Essence of Who We Are</h2>
              {infos.slice(0, 3).map((info) => (
                <div key={info.id} className={styles.itemContent}>
                  <aside className={styles.itemAside}>
                    <b className={styles.itemNumber}>{info.id}</b>
                    <h3 className={styles.itemHeading}>{info.title}</h3>
                  </aside>
                  <span className={styles.itemDescription}>{info.desc}</span>
                </div>
              ))}
            </article>

            <article className={styles.item}>
              {infos.slice(3).map((info) => (
                <div key={info.id} className={styles.itemContent}>
                  <aside className={styles.itemAside}>
                    <b className={styles.itemNumber}>{info.id}</b>
                    <h3 className={styles.itemHeading}>{info.title}</h3>
                  </aside>
                  <span className={styles.itemDescription}>{info.desc}</span>
                </div>
              ))}
            </article>
          </main>
        </section>
      </div>
    </section>
  );
};

export default WhyWe;
