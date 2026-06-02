import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./bootstrap.min.css";
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://indiekyrgyz.com",
    languages: {
      // x-default — для всех регионов без конкретного таргетинга
      "x-default": "https://indiekyrgyz.com",

      // Основной английский
      "en": "https://indiekyrgyz.com",

      // Европейские рынки (английский контент, но таргетинг на регион)
      "en-DE": "https://indiekyrgyz.com", // Германия
      "en-FR": "https://indiekyrgyz.com", // Франция
      "en-GB": "https://indiekyrgyz.com", // Великобритания
      "en-NL": "https://indiekyrgyz.com", // Нидерланды
      "en-CH": "https://indiekyrgyz.com", // Швейцария
      "en-AT": "https://indiekyrgyz.com", // Австрия
      "en-IT": "https://indiekyrgyz.com", // Италия
      "en-ES": "https://indiekyrgyz.com", // Испания
      "en-PL": "https://indiekyrgyz.com", // Польша
      "en-SE": "https://indiekyrgyz.com", // Швеция
      "en-NO": "https://indiekyrgyz.com", // Норвегия
      "en-DK": "https://indiekyrgyz.com", // Дания
      "en-FI": "https://indiekyrgyz.com", // Финляндия
      "en-BE": "https://indiekyrgyz.com", // Бельгия
      "en-CZ": "https://indiekyrgyz.com", // Чехия

      // Северная Америка
      "en-US": "https://indiekyrgyz.com", // США
      "en-CA": "https://indiekyrgyz.com", // Канада

      // Азиатско-Тихоокеанский регион
      "en-AU": "https://indiekyrgyz.com", // Австралия
      "en-NZ": "https://indiekyrgyz.com", // Новая Зеландия
      "en-JP": "https://indiekyrgyz.com", // Япония
      "en-KR": "https://indiekyrgyz.com", // Южная Корея
      "en-SG": "https://indiekyrgyz.com", // Сингапур
    },
  },

  title: {
    default: "Indie Kyrgyz Travel — Tours in Kyrgyzstan",
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
      { url: "/favicon-768x768.png", sizes: "768x768", type: "image/png" },
      { url: "/favicon-1648x1648.png", sizes: "1648x1648", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "INDENYzI76CJmpjmsxDBroe2Db_ZnyxDkGtLZtvHckA",
  },

  description:
    "Authentic tours in Kyrgyzstan for travelers from Europe, USA, Australia and beyond. Mountains, lakes, nomads, and unique local experiences with expert local guides.",

  keywords: [
    // --- Общие ---
    "Kyrgyzstan tours",
    "Travel Kyrgyzstan",
    "Tours in Kyrgyzstan",
    "Indie Kyrgyz",
    "Kyrgyz Travel Agency",
    "Kyrgyzstan private tour",
    "Small group tours Kyrgyzstan",
    "Guided tours in Kyrgyzstan",
    "Best tour guide in Kyrgyzstan",
    "Kyrgyzstan travel guide",
    "Kyrgyz guided tours reviews",
    "Silk Road tours",
    "Central Asia travel",
    "Nomadic lifestyle tour",
    "Horseback riding Kyrgyzstan",
    "Hiking Tian Shan",
    "Issyk-Kul adventure",
    "Best time to visit Kyrgyzstan",
    "Winter tour in Kyrgyzstan",
    "Kyrgyz world trip",
    "Kyrgyz life",
    "Kyrgyzstan travel guide book",

    // --- Германия / DACH ---
    "Kyrgyzstan tour from Germany",
    "Kirgisistan Reise",
    "Zentralasien Reise",
    "Reise Kirgisistan",
    "Kyrgyzstan holidays from Frankfurt",
    "Central Asia travel Germany",
    "Kyrgyzstan tour from Austria",
    "Kyrgyzstan tour from Switzerland",

    // --- Франция ---
    "Kyrgyzstan tour from France",
    "voyage Kirghizistan",
    "circuit Kirghizistan",
    "Kirghizistan tourisme",
    "Asie centrale voyage France",
    "Kyrgyzstan holidays from Paris",

    // --- Великобритания ---
    "Kyrgyzstan holidays UK",
    "Kyrgyzstan tours from London",
    "Central Asia holidays UK",
    "Kyrgyzstan travel from Britain",

    // --- Нидерланды / Бельгия ---
    "Kyrgyzstan tour from Netherlands",
    "Kirgizië reis",
    "Centraal-Azië reizen",

    // --- Скандинавия ---
    "Kyrgyzstan tour from Sweden",
    "Kyrgyzstan tour from Norway",
    "Kyrgyzstan tour Scandinavia",

    // --- Польша / Чехия ---
    "Kyrgyzstan tour from Poland",
    "Kyrgyzstan tour from Czech Republic",

    // --- США / Канада ---
    "Kyrgyzstan tour from USA",
    "Kyrgyzstan travel Americans",
    "Central Asia adventure travel USA",
    "Kyrgyzstan tours from Canada",

    // --- Австралия / Новая Зеландия ---
    "Kyrgyzstan tour from Australia",
    "Kyrgyzstan travel Australia",
    "Central Asia tours Australia",

    // --- Азия ---
    "Kyrgyzstan tour from Japan",
    "Kyrgyzstan tour from South Korea",
    "Kyrgyzstan tour from Singapore",
  ],

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
  metadataBase: new URL("https://indiekyrgyz.com"),
  openGraph: {
    title: "Indie Kyrgyz Travel — Authentic Tours in Kyrgyzstan",
    description:
      "Discover authentic tours in Kyrgyzstan with local guides. Perfect for travelers from Europe, USA, Australia and Asia.",
    url: "https://indiekyrgyz.com",
    siteName: "Indie Kyrgyz Travel",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Indie Kyrgyz Travel",
      },
    ],
    locale: "en_US",
    // Дополнительные локали для Open Graph
    alternateLocale: [
      "de_DE",
      "fr_FR",
      "en_GB",
      "en_AU",
      "en_CA",
      "nl_NL",
      "pl_PL",
      "sv_SE",
      "ja_JP",
      "ko_KR",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indie Kyrgyz Travel — Tours in Kyrgyzstan",
    description:
      "Authentic tours in Kyrgyzstan with local guides. For travelers from Europe, USA, Australia and beyond.",
    images: ["/icon.png"],
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

export const viewport = {
  themeColor: "#4f7b6b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@type": "Organization",
    name: "Indie Kyrgyz Travel",
    url: "https://indiekyrgyz.com",
    logo: "https://indiekyrgyz.com/icon.png",
    image: "https://indiekyrgyz.com/icon.png",
    // Описание с упоминанием международной аудитории
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
    name: "Indie Kyrgyz Travel",
    alternateName: ["Indie Kyrgyz", "Indie Kyrgyz Tours"],
    url: "https://indiekyrgyz.com",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Indie Kyrgyz Travel",
      url: "https://indiekyrgyz.com",
    },
    // Потенциальное действие (поиск) — помогает Google понять структуру
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://indiekyrgyz.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Дополнительный Schema: TouristDestination
  const touristDestinationLd = {
    "@type": "TouristDestination",
    name: "Kyrgyzstan",
    description:
      "A Central Asian country known for its dramatic mountain landscapes, nomadic culture, Issyk-Kul lake, and the Tian Shan range.",
    url: "https://indiekyrgyz.com",
    touristType: [
      "Adventure tourists",
      "Hikers",
      "Cultural tourists",
      "Nature lovers",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2044,
      longitude: 74.7661,
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
          graph={[organizationLd, websiteLd, touristDestinationLd]}
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