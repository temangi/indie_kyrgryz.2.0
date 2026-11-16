import styles from "./contacts.module.scss";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import { CONTACT_DESCRIPTION, CONTACT_TITLE } from "@/src/shared/seo/pageCopy";
import { buildWebPageGraph } from "@/src/shared/seo/webPageGraph";
import { SITE_ORIGIN } from "@/src/shared/seo/SeoJsonLd";
import { Breadcrumbs } from "@/src/shared/ui/Breadcrumbs";

const CONTACTS_URL = `${SITE_ORIGIN}/contacts`;

export const metadata = buildPageMetadata({
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  path: "/contacts",
});

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
    <>
      <SeoJsonLd
        id="contacts-ld"
        graph={buildWebPageGraph({
          url: CONTACTS_URL,
          name: "Contacts",
          description: CONTACT_DESCRIPTION,
          pageType: "ContactPage",
          breadcrumbLabel: "Contacts",
        })}
      />
      <section className={styles.page}>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contacts" }]}
      />
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
    </>
  );
};

export default ContactsPage;
