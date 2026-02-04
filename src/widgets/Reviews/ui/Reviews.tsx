import Image from "next/image";
import styles from "../Reviews.module.scss";
import r1 from "@/public/images/reviews/1.webp"
import r2 from "@/public/images/reviews/2.webp"
import r3 from "@/public/images/reviews/3.webp"
import r4 from "@/public/images/reviews/4.webp"
import r5 from "@/public/images/reviews/5.webp"
import r6 from "@/public/images/reviews/6.webp"

const arrRev = [r1, r2, r3, r4, r5, r6]

const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviews} aria-labelledby="reviews-title">
      <div className="container">
        <div className={styles.menu}>
          <header className={styles.header}>
            <h2 id="reviews-title" className={styles.title}>
              Reviews
            </h2>
          </header>
        </div>
      </div>
       <div className={styles.main}>
            {arrRev.map((el, index) => {
              return (
                <Image
                  key={index}
                  src={el}
                  alt={`Review photo ${index + 1}`}
                  className={styles.main__img}
                />
              )
            })}
          </div>
    </section>
  );
};

export default Reviews;
