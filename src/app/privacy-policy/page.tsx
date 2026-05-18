import styles from "./privacyPolicy.module.scss";
import type { Metadata } from "next";

const PRIVACY_URL = "https://indiekyrgyz.com/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Indie Kyrgyz Travel privacy policy: how we handle booking forms, email, and WhatsApp data for Kyrgyzstan tour inquiries — GDPR-friendly practices for international travelers.",
  alternates: {
    canonical: PRIVACY_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <section className={styles.page}>
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
  );
};

export default PrivacyPolicyPage;
