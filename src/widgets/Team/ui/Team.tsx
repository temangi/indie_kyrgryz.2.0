import Image from "next/image";
import styles from "../Team.module.scss";

const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>About us</h1>
            <p className={styles.subtitle}>People who create our journeys:</p>
          </article>
          <main className={styles.main}>
            <div className={styles.member}>
              <h1 className={styles.memberTitle}>JACK / ZHAKSHYLYK</h1>
              <article className={styles.infoBlock}>
                <Image
                  src="https://res.cloudinary.com/dyp4fq9zj/image/upload/v1768975773/cat_xjfd9d.jpg"
                  alt="Jack"
                  className={styles.memberImg}
                  width={200}
                  height={200}
                />
                <div className={styles.memberInfo}>
                  <p className={styles.role}>
                    Jack is the founder, guide, and content creator who
                    showcases Kyrgyzstan through his social media blog. He
                    personally tests every route, designs safe and well-planned
                    tours, captures drone footage, and helps people experience
                    the country on a deeper level. His work combines
                    inspiration, creativity, and reliable service.
                  </p>
                </div>
              </article>
            </div>
            <div className={styles.member}>
              <h1 className={styles.memberTitle}>ANUAR / ANU</h1>
              <article className={styles.infoBlock}>
                <Image
                  src="https://res.cloudinary.com/dyp4fq9zj/image/upload/v1768975773/cat_xjfd9d.jpg"
                  alt="Anuar"
                  className={styles.memberImg}
                  width={200}
                  height={200}
                />
                <div className={styles.memberInfo}>
                  <p className={styles.role}>
                    Anuar is a skilled guide and cultural ambassador who brings
                    the rich heritage of Kyrgyzstan to life. With a deep
                    knowledge of local traditions and history, he creates
                    immersive experiences that connect travelers with the heart
                    of the region. His passion for storytelling and commitment
                    to sustainable tourism make him an invaluable part of the
                    team.
                  </p>
                </div>
              </article>
            </div>
          </main>
        </section>
      </div>
    </section>
  );
};

export default Team;
