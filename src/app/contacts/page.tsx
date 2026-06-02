import type { Metadata } from "next";
import styles from "./contacts.module.scss";

const CONTACTS_URL = "https://indiekyrgyz.com/contacts";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Indie Kyrgyz Travel in Kyrgyzstan for private tour quotes — email, phone, WhatsApp, Instagram, and TikTok. Fast replies for travelers from Europe, the US, and worldwide.",
  alternates: {
    canonical: CONTACTS_URL,
  },
  openGraph: {
    title: "Contact | Indie Kyrgyz Travel",
    description:
      "Reach our Bishkek-based team for nomadic culture tours, trekking, and custom Kyrgyzstan itineraries.",
    url: CONTACTS_URL,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const CONTACTS = {
  email: "indiekyrgyztravel@gmail.com",
  phoneDisplay: "+996 555 203 101",
  phoneTel: "+996555203101",
  whatsapp: "https://wa.me/996555203101?text=Hi%20Indie%20Kyrgyz%20Travel",
  instagram: "https://www.instagram.com/indie_kyrgyz_travel",
  tiktok: "https://www.tiktok.com/@indie.kyrgyz.travel",
} as const;

const ContactsPage = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.kicker}>Get in touch</p>
          <h1>Contacts</h1>
          <p className={styles.lead}>
            Reach us by email, phone, or your favourite messenger and socials —
            we usually reply on WhatsApp within the same day.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>
              <a
                className={styles.link}
                href={`mailto:${CONTACTS.email}`}
              >
                {CONTACTS.email}
              </a>
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.label}>Phone</p>
            <p className={styles.value}>
              <a className={styles.link} href={`tel:${CONTACTS.phoneTel}`}>
                {CONTACTS.phoneDisplay}
              </a>
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.label}>WhatsApp</p>
            <p className={styles.value}>
              <a
                className={styles.link}
                href={CONTACTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.label}>Instagram</p>
            <p className={styles.value}>
              <a
                className={styles.link}
                href={CONTACTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @indie_kyrgyz_travel
              </a>
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.label}>TikTok</p>
            <p className={styles.value}>
              <a
                className={styles.link}
                href={CONTACTS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
              >
                @indie.kyrgyz.travel
              </a>
            </p>
          </article>
        </div>

        <p className={styles.seoBlock}>
          Indie Kyrgyz Travel plans private and small-group tours across Issyk-Kul,
          Song-Kul, the Tien Shan, and remote regions. Whether you are messaging from
          Europe, the US, or elsewhere, tell us your dates and interests — we answer
          most WhatsApp chats the same day and help with visas, packing, and realistic
          daily pacing for nomadic stays and mountain routes.
        </p>

        <p className={styles.note}>
          For tour requests you can also use the booking form on the homepage — we
          will get back to you with options and availability.
        </p>
      </div>
    </section>
  );
};

export default ContactsPage;
