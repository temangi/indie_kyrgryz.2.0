"use client";

import Link from "next/link";
import { Envelope } from "@phosphor-icons/react/Envelope";
import { InstagramLogo } from "@phosphor-icons/react/InstagramLogo";
import { Phone } from "@phosphor-icons/react/Phone";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import styles from "../Footer.module.scss";
import { sendGAEvent } from "@next/third-parties/google";

const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "https://wa.me/996555203101?text=Hi%20Indie%20Kyrgyz%20Travel", color: "#25D366" },
];

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.footer__menu}>
          
          <section className={styles.footer__contact}>
            <p className={styles.footer__title}>Still have questions?</p>
            <p className={styles.footer__description}>
              Contact us on WhatsApp, and we&apos;ll answer all your questions.
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
                  onClick={() => sendGAEvent("event", "whatsapp_click")}
                >
                  <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
                  {link.name}
                </Link>
              ))}
            </div>
          </section>

          <div className={styles.footer__info}>
            <p className={styles.footer__infoTitle}>Our contacts:</p>
            <address className={styles.footer__address}>
              <a href="tel:+996555203101" className={styles.footer__link}>
                <Phone size={20} aria-hidden="true" />
                +996 555 203 101
              </a>
              <a href="mailto:indiekyrgyztravel@gmail.com" className={styles.footer__link}>
                <Envelope size={20} aria-hidden="true" />
                indiekyrgyztravel@gmail.com
              </a>
              <a href="https://www.instagram.com/indie_kyrgyz_travel" target="_blank" rel="noopener noreferrer" className={styles.footer__link}>
                <InstagramLogo size={20} aria-hidden="true" />
                @indie_kyrgyz_travel
              </a>
            </address>
          </div>
          
        </div>

        <p className={styles.footer__copyright}>
          © {new Date().getFullYear()} Indie Kyrgyz Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;