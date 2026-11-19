import styles from "./style.module.scss";
import Image from "next/image";
import img from "@/public/images/slide3.webp";
import BookTour from "../BookTour/BookTour";
import { TourBookingScope } from "./TourBookingScope";

type TourInfoProps = {
  route: string;
  price: string;
  duration: string;
  tour: string;
  dates?: string[];
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "5-12th of May" → "5–12". A range that crosses months keeps the end month. */
function shortDateLabel(date: string) {
  const sameMonth = date.match(/^(\d+)-(\d+)(?:st|nd|rd|th)? of /);
  if (sameMonth) return `${sameMonth[1]}–${sameMonth[2]}`;

  const crossesMonth = date.match(
    /^(\d+)(?:st|nd|rd|th)? of \w+ – (\d+)(?:st|nd|rd|th)? of (\w+)/,
  );
  if (crossesMonth) {
    return `${crossesMonth[1]} – ${crossesMonth[2]} ${crossesMonth[3].slice(0, 3)}`;
  }

  return date;
}

function groupDatesByStartMonth(dates: string[]) {
  const groups: { month: string; items: string[] }[] = [];

  for (const date of dates) {
    const month = MONTHS.find((name) => date.includes(name)) ?? "Dates";
    const label = shortDateLabel(date);
    const group = groups.find((item) => item.month === month);
    if (group) group.items.push(label);
    else groups.push({ month, items: [label] });
  }

  return groups;
}

export const TourInfo = ({
  route,
  price,
  duration,
  tour,
  dates,
}: TourInfoProps) => {
  const dateGroups = dates && dates.length > 0 ? groupDatesByStartMonth(dates) : [];

  return (
    <section className={styles.mainTour}>
      <TourBookingScope tourName={tour} />
      <div className="container">
        <div className={styles.mainContent}>
          <h2 className={styles.title}>TOUR ESSENTIALS</h2>

          {dateGroups.length > 0 && (
            <section className={styles.datesPanel} aria-label="Available dates">
              <p className={styles.datesHeading}>Available dates</p>
              <p className={styles.datesNote}>Each departure lasts {duration}.</p>
              <div className={styles.monthGrid}>
                {dateGroups.map((group) => (
                  <div key={group.month} className={styles.month}>
                    <p className={styles.monthName}>{group.month}</p>
                    <ul className={styles.monthDates}>
                      {group.items.map((item) => (
                        <li key={item} className={styles.dateChip}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className={styles.details}>
            <article className={styles.infoCard}>
              <aside className={styles.duration}>
                <div className={styles.durationItem}>
                  <p className={styles.label}>duration:</p>
                  <span className={styles.value}>{duration}</span>
                </div>

                <div className={styles.durationItem}>
                  <p className={styles.label}>ROUTE DISTANCE:</p>
                  <span className={styles.value}>{route} <small>(round trip)</small></span>
                </div>

                <div className={styles.durationItem}>
                  <p className={styles.label}>PRICE:</p>
                  <span className={styles.value}>{price}</span>
                </div>
              </aside>

              <Image
                className={styles.cardImage}
                src={img}
                alt="A guesthouse in a mountain valley in Kyrgyzstan"
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </article>
          </div>

          <BookTour />      
        </div>
      </div>
    </section>
  );
};
