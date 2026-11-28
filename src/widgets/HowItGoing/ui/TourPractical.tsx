import styles from "../HowItGoing.module.scss";
import type { TourPracticalDetails } from "../model/tourPractical";

function FactList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className={styles.factsItem}>
      <p className={styles.factsLabel}>{label}</p>
      <ul className={styles.factsList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FactLine({ label, text }: { label: string; text: string }) {
  return (
    <div className={styles.factsItem}>
      <p className={styles.factsLabel}>{label}</p>
      <p className={styles.factsValue}>{text}</p>
    </div>
  );
}

export function TourPractical({ details }: { details?: TourPracticalDetails }) {
  if (!details) return null;

  const included = details.included ?? [];
  const notIncluded = details.notIncluded ?? [];

  return (
    <section className={styles.facts} aria-label="Tour facts">
      {included.length > 0 ? <FactList label="Included" items={included} /> : null}
      {notIncluded.length > 0 ? (
        <FactList label="Not included" items={notIncluded} />
      ) : null}
      {details.groupSize ? (
        <FactLine label="Group size" text={details.groupSize} />
      ) : null}
      {details.difficulty ? (
        <FactLine label="Difficulty" text={details.difficulty} />
      ) : null}
      {details.season ? <FactLine label="Season" text={details.season} /> : null}
    </section>
  );
}
