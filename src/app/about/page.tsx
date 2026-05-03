import Link from "next/link";
import styles from "./about.module.scss";

const AboutPage = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.kicker}>About Indie Kyrgyz Travel</p>
          <h1>Travel Kyrgyzstan with locals who know every hidden corner</h1>
          <p className={styles.lead}>
            We design authentic journeys across Kyrgyzstan - from alpine lakes
            to nomadic villages - with personal support before, during, and
            after your trip.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2>Who We Are</h2>
            <p>
              Indie Kyrgyz Travel is a local team of guides and travel planners
              based in Kyrgyzstan. We create small-group and custom tours for
              travelers who want more than standard sightseeing.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to help guests discover the real spirit of
              Kyrgyzstan: nature, culture, and people. We focus on safe routes,
              honest communication, and memorable experiences.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Why Travel With Us</h2>
            <ul>
              <li>Local expertise and carefully planned routes</li>
              <li>Flexible itineraries tailored to your pace</li>
              <li>Direct support via WhatsApp during your journey</li>
            </ul>
          </article>
        </div>

        <div className={styles.cta}>
          <h3>Ready to plan your trip?</h3>
          <p>Tell us where you want to go and we will build your route.</p>
          <Link href="/#application" className={styles.button}>
            Create a custom tour
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
