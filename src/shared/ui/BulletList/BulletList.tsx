import styles from "./BulletList.module.scss";

type ButterListProps = {
  title?: string;
  desc: string;
  arr: string[];
  content?: string;
  unTitle?: string
};

function BulletList({ title, unTitle , desc, arr, content }: ButterListProps) {
  return (
    <section className={styles.details}>
      <div className={styles.details__header}>
        <h2 className={styles.details__title}>{title}</h2>
      </div>

      <p className={styles.details__intro}> {unTitle} {unTitle ? <br /> : null} {desc}</p>

      <ul className={styles.details__list}>
        {arr.map((item, index) => (
          <li key={index} className={styles.details__item}>
            {item}
          </li>
        ))}
      </ul>

     {content && <p className={styles.details__content}>{content}</p>}
    </section>
  );
}

export default BulletList;
