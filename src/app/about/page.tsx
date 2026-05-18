import Link from "next/link";
import type { Metadata } from "next";
import styles from "./about.module.scss";

const ABOUT_URL = "https://indiekyrgyz.com/about";

export const metadata: Metadata = {
  title: "About Indie Kyrgyz Travel",
  description:
    "Meet the Indie Kyrgyz Travel team: local guides and planners for private Kyrgyzstan tours, nomadic culture, trekking, and horse trips — trusted by guests from Europe, the US, and Australia.",
  alternates: {
    canonical: ABOUT_URL,
  },
  openGraph: {
    title: "About | Indie Kyrgyz Travel",
    description:
      "Local team, real routes, and personalized support for tours in Kyrgyzstan.",
    url: ABOUT_URL,
    type: "profile",
  },
};

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

        <section className={styles.seoSection} aria-labelledby="about-seo-heading">
          <h2 id="about-seo-heading">Private Kyrgyzstan tours from Bishkek</h2>
          <p>
            We specialize in multi-day road trips, trekking, and horseback routes that
            reach Song-Kul, Kel-Suu, Issyk-Kul’s south shore, and Altyn-Arashan — always
            with clear safety margins and honest timing. Most of our guests fly in from
            Europe or the US; we help you connect domestic legs, border crossings, and
            optional Kazakhstan extensions when you want a longer Central Asia loop.
          </p>
          <p>
            Every itinerary balances driving, walking, and downtime so you can enjoy
            nomadic hospitality without burnout. Ask us about group departures versus a
            fully private tour on your dates — we will match you to the right vehicle,
            driver-guide, and accommodation mix.
          </p>
        </section>

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
