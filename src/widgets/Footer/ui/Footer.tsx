import Link from "next/link";
import styles from "../Footer.module.scss";

const Footer = () => {
  return (
    <section id="footer" className={styles.footer}>
      <div className="container">
        <section className={styles.menu}>
          <article className={styles.item}>
            <h2 className={styles.title}>Still have questions?</h2>
            <p className={styles.text}>
              Contact us on WhatsApp or Telegram, and we'll answer all your
              questions.
            </p>
            <a
              className={styles.button}
              href="https://wa.me/996704313147?text=Hi Jake"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialMedia}>WhatsApp</span>
            </a>
            <a
              className={styles.button}
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialMedia}>Telegram</span>
            </a>
          </article>
          <article className={styles.item}>
            <p className={styles.text}>
              or call us at: <br />
              +7 (984) 270-44-47
            </p>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Footer;
