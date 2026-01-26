import Image from "next/image";
import styles from "../Reviews.module.scss";
import r1 from "@/public/images/reviews/1.jpg"
import r2 from "@/public/images/reviews/2.jpg"
import r3 from "@/public/images/reviews/3.jpg"
import r4 from "@/public/images/reviews/4.jpg"
import r5 from "@/public/images/reviews/5.jpg"
import r6 from "@/public/images/reviews/6.jpg"

const arrRev = [r1, r2, r3, r4, r5, r6]

const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>Reviews</h1>
          </article>
          <main className={styles.main}>
            {arrRev.map((el, index) => {
              return (

                <Image
                  key={index}
                  src={el}
                  alt="Reviews"
                  className={styles.main__img}
                />
              )
            })}
          </main>
        </section>
      </div>
    </section>
  );
};

export default Reviews;
