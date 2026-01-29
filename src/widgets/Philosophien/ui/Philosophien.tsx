import Image from "next/image";
import styles from "../Philosophien.module.scss";

const Philosophien = () => {
  return (
    <section
      id="philosophien"
      className={styles.philosophien}
      aria-labelledby="philosophien-title"
    >
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 id="philosophien-title" className={styles.title}>
              Founding story
            </h2>
            <p className={styles.subtitle}>[ What we believe ]</p>
          </header>
          <div className={styles.main}>
            <Image
              className={styles.img}
              src="/images/Img.svg"
              alt="Founding story illustration"
              width={500}
              height={400}
            />
            <ul className={styles.desc}>
              <li>
                On of the tour days when Jack was just a guide, he and his
                travelers were trekking to Lake Song-Kul when they stumbled upon
                a shepherd's yurt — completely by chance. The locals invited
                them in, and under the bright sun by the lake, a sense of
                friendship slowly unfolded.
              </li>
              <li>
                The shepherds' children were swimming, laughter echoed
                everywhere, and the wife of one of the travelers, watching it
                all, quietly whispered, 'This is one of the most touching
                moments of my life.' Tears glimmered in her eyes.
              </li>
              <li>
                In that moment, Jack realized that his work wasn't just about
                tours — it was about creating real, unforgettable moments of
                happiness for people.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophien;
