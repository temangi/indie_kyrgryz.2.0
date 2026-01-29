import Link from "next/link";
import styles from "../Footer.module.scss";

const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "https://wa.me/996704313147?text=Hi Jake", color: "#25D366" },
  { name: "Telegram", href: "https://t.me/yourtelegram", color: "#0088cc" },
];

const Footer = () => {
  return (
    <footer id="footer" data-section className={styles.footer}>
      <div className="container">
        <div className={styles.footer__menu}>
          <section className={styles.footer__contact}>
            <h3 className={styles.footer__title}>Still have questions?</h3>
            <p className={styles.footer__text}>
              Contact us on WhatsApp or Telegram, and we'll answer all your questions.
            </p>
            
            <div className={styles.footer__socials}>
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  className={styles.footer__button}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.footer__socialName}>{link.name}</span>
                </Link>
              ))}
            </div>
          </section>

          <div className={styles.footer__item}>
            <address className={styles.footer__text}>
              Our contacts: <br />
              <a href="tel:+996704313147" className={styles.footer__phone}>
                +996 704 313 147
              </a>
              <br />
              <a href="mailto:indiekyrgyztravel@gmail.com" className={styles.footer__email}>
                indiekyrgyztravel@gmail.com
              </a>
              <br />
              <a href="https://www.instagram.com/ice_jack_sparrow?igsh=MWI1cDRvOTNiYzJ3Mg==" className={styles.footer__instagram}>
                @ice_jack_sparrow
              </a>
            </address>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;