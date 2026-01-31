"use client";

import Link from "next/link";
import styles from "../Footer.module.scss";

const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "https://wa.me/996704313147?text=Hi Jake", color: "#25D366" },
];

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.footer__menu}>
          
          <section className={styles.footer__contact}>
            <h3 className={styles.footer__title}>Still have questions?</h3>
            <p className={styles.footer__description}>
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
                  style={{ backgroundColor: link.color }} 
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </section>

          <div className={styles.footer__info}>
            <h4 className={styles.footer__infoTitle}>Our contacts:</h4>
            <address className={styles.footer__address}>
              <a href="tel:+996704313147" className={styles.footer__link}>
                +996 704 313 147
              </a>
              <a href="mailto:indiekyrgyztravel@gmail.com" className={styles.footer__link}>
                indiekyrgyztravel@gmail.com
              </a>
              <a href="https://www.instagram.com/indie_kyrgyz_travel" target="_blank" className={styles.footer__link}>
                @indie_kyrgyz_travel
              </a>
            </address>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;