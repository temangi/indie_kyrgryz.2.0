import Image from "next/image";
import styles from "../Team.module.scss";

const Team = () => {
  return (
    <section id="team" data-section className={styles.team} aria-labelledby="team-title">
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 id="team-title" className={styles.title}>
              About us
            </h2>
            <p className={styles.subtitle}>People who create our journeys:</p>
          </header>
          <div className={styles.main}>
            <div className={styles.member}>
              <article className={styles.infoBlock}>
                <div className={styles.memberInfo}>
                  <p className={styles.role}>
                    Anuar is a skilled guide and cultural ambassador who brings
                    the rich heritage of Kyrgyzstan to life. With a deep
                    knowledge of local traditions and history, he creates
                    immersive experiences that connect travelers with the heart
                    of the region. His passion for storytelling and commitment
                    to sustainable tourism make him an invaluable part of the
                    team. Jack is the founder, guide, and content creator who
                    showcases Kyrgyzstan through his social media blog. He
                    personally tests every route, designs safe and well-planned
                    tours, captures drone footage, and helps people experience
                    the country on a deeper level. His work combines
                    inspiration, creativity, and reliable service.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
