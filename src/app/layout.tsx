import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAnalyticsTracker from "./analytics/GoogleAnalyticsTracker";
import { Suspense } from "react";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { SignTour } from "../widgets/SignTour";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/src/shared/seo/pageCopy";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiekyrgyz.com"),
  title: {
    default: HOME_TITLE,
    template: "%s | Indie Kyrgyz Travel",
  },
  applicationName: "Indie Kyrgyz Travel",
  appleWebApp: {
    title: "Indie Kyrgyz Travel",
    statusBarStyle: "default",
  },
  creator: "Indie Kyrgyz Travel",
  publisher: "Indie Kyrgyz Travel",
  category: "Travel",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "INDENYzI76CJmpjmsxDBroe2Db_ZnyxDkGtLZtvHckA",
  },

  description: HOME_DESCRIPTION,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://indiekyrgyz.com",
    siteName: "Indie Kyrgyz Travel",
    images: [
      {
        url: "/og.jpg",
        width: 1280,
        height: 720,
        alt: "Indie Kyrgyz Travel over a green mountain valley in Kyrgyzstan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og.jpg"],
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Indie Kyrgyz Travel" }],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f7b6b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@type": "Organization",
    "@id": "https://indiekyrgyz.com/#organization",
    name: "Indie Kyrgyz Travel",
    url: "https://indiekyrgyz.com",
    logo: "https://indiekyrgyz.com/logo.png",
    image: "https://indiekyrgyz.com/og.jpg",
    // TODO: add postalAddress (street, locality, postal code) when the real office address is published.
    description:
      "Authentic tour operator in Kyrgyzstan offering private and small group tours for international travelers from Europe, USA, Australia, and Asia.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+996555203101",
        email: "indiekyrgyztravel@gmail.com",
        areaServed: [
          "KG", // Кыргызстан
          "DE", // Германия
          "FR", // Франция
          "GB", // Великобритания
          "US", // США
          "AU", // Австралия
          "NL", // Нидерланды
          "CH", // Швейцария
          "AT", // Австрия
          "CA", // Канада
          "SE", // Швеция
          "NO", // Норвегия
          "PL", // Польша
          "IT", // Италия
          "ES", // Испания
          "JP", // Япония
          "KR", // Южная Корея
        ],
        availableLanguage: ["en", "ru"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/indie_kyrgyz_travel",
      "https://www.tiktok.com/@indie.kyrgyz.travel",
    ],
  };

  const websiteLd = {
    "@type": "WebSite",
    "@id": "https://indiekyrgyz.com/#website",
    name: "Indie Kyrgyz Travel",
    alternateName: ["Indie Kyrgyz", "Indie Kyrgyz Tours"],
    url: "https://indiekyrgyz.com",
    inLanguage: "en",
    publisher: { "@id": "https://indiekyrgyz.com/#organization" },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17961172694"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17961172694');
          `}
        </Script>
        <SignTour title="Sign up for a Tour:" />
        <Header />
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <SeoJsonLd
          id="global-ld"
          graph={[organizationLd, websiteLd]}
        />
        <main className="page">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              marginTop: "60px",
              fontSize: "16px",
              maxWidth: "350px",
            },
            success: {
              duration: 6000,
            },
            error: {
              duration: 5000,
            },
          }}
          containerStyle={{
            top: 20,
            left: 20,
            right: 20,
          }}
        />
        <GoogleAnalytics gaId="G-6WFTRHW6FD" />
      </body>
    </html>
  );
}