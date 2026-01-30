"use client";

import styles from "./BulletList.module.scss";

type BulletListProps = {
  title?: string;
  desc?: string;
  arr: string[];
  content?: string;
  unTitle?: string;
};

function BulletList({ title, unTitle, desc, arr, content }: BulletListProps) {
  return (
    <div className={styles.details}>
      {title && (
        <div className={styles.details__header}>
          <h3 className={styles.details__title}>{title}</h3>
        </div>
      )}

      {(unTitle || desc) && (
        <p className={styles.details__intro}>
          {unTitle && <strong className={styles.details__unTitle}>{unTitle}</strong>}
          {unTitle && desc && <br />}
          {desc}
        </p>
      )}

      <ul className={styles.details__list}>
        {arr.map((item, index) => (
          <li key={index} className={styles.details__item}>
            <span className={styles.details__marker}></span>
            <span className={styles.details__text}>{item}</span>
          </li>
        ))}
      </ul>

      {content && <p className={styles.details__content}>{content}</p>}
    </div>
  );
}

export default BulletList;