import Image from "next/image";
import styles from "../Reviews.module.scss";

const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.header}>
            <h1 className={styles.title}>Reviews</h1>
          </article>
          <main className={styles.main}>
            <div className={styles.member}>
              <Image
                src="/images/otzyv.svg"
                alt="Reviews"
                width={800}
                height={400}
              />
            </div>
          </main>
        </section>
      </div>
    </section>
  );
};

export default Reviews;
