import Image from "next/image";
import styles from "../Philosophien.module.scss";
import phil from "@/public/images/philos.webp";

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
              Our Philosophy
            </h2>
          </header>
          <div className={styles.main}>
            <div className={styles.imgWrapper}>
              <Image
                src={phil}
                alt="Founding story illustration"
                className={styles.img}
              />
            </div>
            <ul className={styles.desc}>
              <li>
                We help you feel history not in museums,but on the road —
                through distance, silence, and movement.
              </li>
              <li>
                This is how a small country opens up as a vast world,
                experienced personally.For us, travel is a feeling of the road,
                trust, and calm confidence.
              </li>
              <li>
                We design reliable journeys where you don’t just see — you live
                the nature, culture, and rhythm of Kyrgyzstan.
              </li>
              <li>
                Our goal is not simply to show a destination,but to give you a
                feeling you will want to return to.Because true experiences make
                life longer and happier.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophien;
