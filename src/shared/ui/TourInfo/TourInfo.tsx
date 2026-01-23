import styles from "./style.module.scss";
import Image from "next/image";
import img from "@/public/images/s1.webp"

export const TourInfo = () => {
  return (
    <section className={styles.mainTour}>
      <div className="container"> 
        <section className={styles.mainContent}>
          <h1 className={styles.title}>ГЛАВНОЕ О ПОХОДЕ</h1>

          <main className={styles.details}>
            <article className={styles.infoCard}>
              <aside className={styles.duration}>
                <div className={styles.durationItem}>
                  <p className={styles.label}>продолжительность:</p>
                  <span className={styles.value}>2 дня</span>
                </div>
                <div className={styles.durationItem}>
                  <p className={styles.label}>РАССТОЯНИЕ МАРШРУТА:</p>
                  <span className={styles.value}>около 15 км (туда-обратно)</span>
                </div>
                <div className={styles.durationItem}>
                  <p className={styles.label}>СТОИМОСТЬ:</p>
                  <span className={styles.value}>9 500 ₽</span>
                </div>
              </aside>
              <Image
                className={styles.cardImage}
                src={img}
                alt="Изображение похода "
              />
            </article>
          </main>

          <button className={styles.mainButton}>ЗАПИСАТЬСЯ В ПОХОД</button>
        </section>
      </div>
    </section>
  );
};