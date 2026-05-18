import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TEAM_MEMBERS } from "@/src/widgets/Team/constants/members";
import styles from "./team.module.scss";

const TEAM_URL = "https://indiekyrgyz.com/team";

const VALUES = [
  {
    title: "On the ground",
    text: "Guides drive, hike, and camp on the same routes you will — we adjust timing when weather or roads change.",
  },
  {
    title: "Personal support",
    text: "From your first message to the last day of the trip, you talk directly with our team on WhatsApp.",
  },
  {
    title: "Local perspective",
    text: "We connect you with nomadic families, home cooks, and valleys that are hard to find without a local.",
  },
] as const;

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Indie Kyrgyz Travel team — local guides and founders who plan private Kyrgyzstan tours, trekking, horse trips, and nomadic culture experiences.",
  alternates: {
    canonical: TEAM_URL,
  },
  openGraph: {
    title: "Our Team | Indie Kyrgyz Travel",
    description:
      "Local guides and planners behind authentic tours in Kyrgyzstan.",
    url: TEAM_URL,
    type: "profile",
  },
};

const TeamPage = () => {
  const founder = TEAM_MEMBERS.find((m) => m.role === "Founder");
  const guides = TEAM_MEMBERS.filter((m) => m.role !== "Founder");

  return (
    <section className={styles.page}>
      <header className={styles.banner}>
        <div className="container">
          <p className={styles.kicker}>Our team</p>
          <h1>The people behind your adventure</h1>
          <p className={styles.lead}>
            A small Bishkek-based crew — every route tested on the ground, every
            guest supported by people who live here.
          </p>
        </div>
      </header>

      <div className="container">
        {founder && (
          <article className={styles.featured}>
            <div className={styles.featuredPhoto}>
              <Image
                src={founder.image}
                alt={founder.alt}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.photoImg}
                priority
              />
              <span className={styles.featuredBadge}>{founder.role}</span>
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.featuredLabel}>Founder</span>
              <h2>{founder.name}</h2>
              <p>{founder.bio}</p>
            </div>
          </article>
        )}

        <ul className={styles.grid} aria-label="Guides">
          {guides.map((member) => (
            <li key={member.id} className={styles.card}>
              <div className={styles.cardPhoto}>
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.photoImg}
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.role}>{member.role}</p>
                <h3>{member.name}</h3>
                <p className={styles.cardBio}>{member.bio}</p>
              </div>
            </li>
          ))}
        </ul>

        <section
          className={styles.values}
          aria-labelledby="team-values-heading"
        >
          <h2 id="team-values-heading">How we work together</h2>
          <ul className={styles.valuesList}>
            {VALUES.map((item, index) => (
              <li key={item.title} className={styles.valueItem}>
                <span className={styles.valueNum} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <aside className={styles.cta}>
          <div className={styles.ctaText}>
            <h3>Ready to travel with us?</h3>
            <p>
              Tell us your dates and interests — we will build a route around you.
            </p>
          </div>
          <Link href="/#application" className={styles.button}>
            Create a custom tour
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default TeamPage;
