import styles from "./style.module.scss";
import Image from "next/image";
import img from "@/public/images/slide3.webp";
import { SignTour } from "@/src/widgets/SignTour";
import BookTour from "../BookTour/BookTour";

type TourInfoProps = {
  route: string;
  price: string;
  duration: string;
  tour: string;
  dates?: string[]; 
};

export const TourInfo = ({ route, price, duration, tour, dates }: TourInfoProps) => {
  return (
    <section className={styles.mainTour}>
      <div className="container">
        <div className={styles.mainContent}>
          <h2 className={styles.title}>TOUR ESSENTIALS</h2>

          <div className={styles.details}>
            <article className={styles.infoCard}>
              <aside className={styles.duration}>
                
                {dates && dates.length > 0 ? (
                  <div className={styles.durationItem}>
                    <p className={styles.label}>Available Dates:</p>
                    <div className={styles.dateList}>
                      {dates.map((date, idx) => (
                        <div key={idx} className={styles.dateBadge}>
                          <span className={styles.calendarIcon}>📅</span>
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={styles.durationItem}>
                    <p className={styles.label}>duration:</p>
                    <span className={styles.value}>{duration}</span>
                  </div>
                )}

                <div className={styles.durationItem}>
                  <p className={styles.label}>ROUTE DISTANCE:</p>
                  <span className={styles.value}>{route} <small>(round trip)</small></span>
                </div>

                <div className={styles.durationItem}>
                  <p className={styles.label}>PRICE:</p>
                  <span className={styles.value}>{price}</span>
                </div>
              </aside>

              <Image className={styles.cardImage} src={img} alt="Tour" />
            </article>
          </div>

          <BookTour />      
        </div>
      </div>
      <SignTour title="Book this Tour:" tour={tour}/>
    </section>
  );
};
