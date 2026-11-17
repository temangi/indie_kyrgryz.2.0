import styles from "./privacyPolicy.module.scss";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { buildPageMetadata } from "@/src/shared/seo/pageMeta";
import { PRIVACY_DESCRIPTION, PRIVACY_TITLE } from "@/src/shared/seo/pageCopy";
import { buildWebPageGraph } from "@/src/shared/seo/webPageGraph";
import { SITE_ORIGIN } from "@/src/shared/seo/SeoJsonLd";
import { Breadcrumbs } from "@/src/shared/ui/Breadcrumbs";

const PRIVACY_URL = `${SITE_ORIGIN}/privacy-policy`;

export const metadata = buildPageMetadata({
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  path: "/privacy-policy",
});

/*
TODO: проверить и утвердить. Не публиковать, пока формулировки не проверит человек.
Черновик ниже собран только из того, что уже есть на сайте: поля форм, почта,
Google Analytics (G-6WFTRHW6FD) и Google Ads (AW-17961172694) в layout.
Юридическое основание обработки (договор или согласие) здесь не утверждается.

Draft, about 230 words:

Privacy Policy

Indie Kyrgyz Travel uses this page to explain what we collect when you write to us
or send a tour request on indiekyrgyz.com. The form may include your name, email
address, phone or WhatsApp number, preferred travel date, and trip preferences.
We use those details to answer you, prepare route options and pricing, and talk
through booking. We do not sell personal data. We share it only with the services
that deliver the message, such as our email provider.

The site also loads Google Analytics and Google Ads. Those services may store a
cookie or similar identifier in your browser so we can see aggregated visits and
whether an ad led to this website. You can control cookies in your browser. Blocking
them does not stop you from emailing or messaging us.

We keep request details only as long as we need them for the conversation, the
booking, and legal obligations. You can ask us to show, correct, or delete your
data. Write to indiekyrgyztravel@gmail.com. This applies to visitors from any
country, including the European Economic Area and the United States. Sending a
request does not create a booking until we confirm availability, price, and dates
in writing, usually by email or WhatsApp.

Last updated on the page: April 29, 2026. Do not change that date until the
approved text is published.
*/

const PrivacyPolicyPage = () => {
  return (
    <>
      <SeoJsonLd
        id="privacy-ld"
        graph={buildWebPageGraph({
          url: PRIVACY_URL,
          name: "Privacy Policy",
          description: PRIVACY_DESCRIPTION,
          breadcrumbLabel: "Privacy Policy",
        })}
      />
      <section className={styles.page}>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <div className="container">
        <div className={styles.card}>
          <h1>Privacy Policy</h1>
          <p>
            We value your privacy and protect your personal data. This policy
            explains what information we collect and how we use it.
          </p>

          <h2>What We Collect</h2>
          <p>
            We may collect your name, email address, phone/WhatsApp number,
            preferred travel date, and trip preferences that you submit through
            our forms.
          </p>

          <h2>How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>respond to your request;</li>
            <li>prepare tour options and pricing;</li>
            <li>contact you about booking details.</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal data. We only share data with trusted
            services required to process your request (for example, email
            delivery providers).
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep personal data only as long as necessary for communication,
            booking support, and legal obligations.
          </p>

          <h2>Your Rights</h2>
          <p>
            You can request access, correction, or deletion of your personal
            data at any time.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy requests, contact us at:{" "}
            <a href="mailto:indiekyrgyztravel@gmail.com">
              indiekyrgyztravel@gmail.com
            </a>
          </p>

          <p className={styles.footerSeo}>
            This page applies to visitors browsing indiekyrgyz.com from any country,
            including the European Economic Area and the United States. Submitting a
            tour request does not create a contract until we confirm availability,
            pricing, and dates in writing (usually via email or WhatsApp).
          </p>

          <p className={styles.updated}>Last updated: April 29, 2026</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default PrivacyPolicyPage;
