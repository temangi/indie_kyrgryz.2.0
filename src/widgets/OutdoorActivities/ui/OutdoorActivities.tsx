import Link from "next/link";
import styles from "../OutdoorActivities.module.scss";

const blocks = [
  {
    id: "horse-trekking",
    tag: "Nomadic trails",
    title: "Horseback trekking",
    body: `Multi-day rides across summer jailoo and high pastures — for example toward Song-Kul — with matched horses, local handlers, and nights in yurts. Pace is relaxed so you can enjoy space, wind, and meeting shepherds along the way.`,
    href: "/tour/song-kul",
    linkLabel: "Explore horse tours",
  },
  {
    id: "mountain-trekking",
    tag: "On foot",
    title: "Mountain trekking & hiking",
    body: `Gorge-to-gorge routes in the Tien Shan: multi-day treks with camps or lodges, day hikes to waterfalls and canyons, and optional high passes when the group is ready. We plan distance and altitude sensibly so the mountains stay inspiring, not overwhelming.`,
    href: "/tour/mountain-adventure",
    linkLabel: "Explore trekking tours",
  },
  {
    id: "mixed-adventures",
    tag: "And more",
    title: "4×4, lakes & culture",
    body: `Where the road ends, Soviet-era 4×4s and transfers link the valleys. You also get scenic drives along Issyk-Kul, hot springs like Altyn-Arashan, Silk Road sites, eagle hunting demos, and city time in Bishkek — a flexible mix of walking, riding, and vehicle days.`,
    href: "/tour/4x4-off-road-adventure",
    linkLabel: "Explore 4x4 adventures",
  },
] as const;

export default function OutdoorActivities() {
  return (
    <section
      id="outdoor-activities"
      className={styles.section}
      aria-labelledby="outdoor-activities-title"
    >
      <div className="container">
        <header className={styles.header}>
          <p className={styles.kicker}>How we travel</p>
          <h2 id="outdoor-activities-title" className={styles.title}>
            Horse trekking, hiking & beyond
          </h2>
          <p className={styles.lead}>
            Most Indie Kyrgyz journeys combine several ways of moving through the
            landscape. Here is what that usually means in practice.
          </p>
        </header>

        <div className={styles.grid}>
          {blocks.map((item) => (
            <article
              key={item.id}
              className={styles.card}
              aria-labelledby={`${item.id}-title`}
            >
              <p className={styles.tagline}>{item.tag}</p>
              <h3 id={`${item.id}-title`} className={styles.cardTitle}>
                {item.title}
              </h3>
              <p className={styles.cardBody}>{item.body}</p>
              <Link href={item.href} className={styles.tagline}>
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
