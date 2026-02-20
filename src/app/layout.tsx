import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./bootstrap.min.css";
import "./globals.css";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { SignTour } from "../widgets/SignTour";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAnalyticsTracker from "./analytics/GoogleAnalyticsTracker";
import { Suspense } from "react";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

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
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
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
    "Authentic tours in Kyrgyzstan. Mountains, lakes, nomads, and unique local experiences.",
  keywords: [
    "Kyrgyzstan tours",
    "Travel Kyrgyzstan",
    "Tours in Kyrgyzstan",
    "Indie Kyrgyz",
    "Kyrgyz Travel Agency",
    "Winter tour in Kyrgyzstan",
    "Kyrgyzstan private tour",
    "Small group tours Kyrgyzstan",
    "Guided tours in Kyrgyzstan",
    "Best tour guide in Kyrgyzstan",
    "Kyrgyzstan travel guide",
    "Kyrgyzstan travel guide book",
    "Kyrgyz guided tours reviews",
    "Silk Road tours",
    "Central Asia travel",
    "Kyrgyz world trip",
    "Kyrgyz life",
    "Nomadic lifestyle tour",
    "Horseback riding Kyrgyzstan",
    "Hiking Tian Shan",
    "Issyk-Kul adventure",
    "Best time to visit Kyrgyzstan",
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
    title: "Indie Kyrgyz Travel",
    description: "Discover authentic tours in Kyrgyzstan with local guides.",
    url: "https://indiekyrgyz.com",
    siteName: "Indie Kyrgyz Travel",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mountains of Kyrgyzstan - Indie Kyrgyz Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indie Kyrgyz Travel",
    description: "Authentic tours in Kyrgyzstan with local guides.",
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
export const viewport = {
  themeColor: "#4f7b6b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Indie Kyrgyz Travel",
    url: "https://indiekyrgyz.com",
    logo: "https://indiekyrgyz.com/logo.png",
    image: "https://indiekyrgyz.com/og.jpg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+996704313147",
        email: "indiekyrgyztravel@gmail.com",
        areaServed: "KG",
        availableLanguage: ["en", "ru"],
      },
    ],
    sameAs: ["https://www.instagram.com/ice_jack_sparrow"],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Indie Kyrgyz Travel",
    alternateName: "Indie Kyrgyz",
    url: "https://indiekyrgyz.com",
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

        <SignTour title={"Sign Up for a Tour:"} />
        <Header />
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <Script
          id="organization-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
          strategy="afterInteractive"
        />
        <Script
          id="website-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
          strategy="afterInteractive"
        />
        <main className="page">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              marginTop: "20px",
            },
            success: {
              duration: 6000, 
            },
            error: {
              duration: 5000,
            },
          }}
        />
        <GoogleAnalytics gaId="G-6WFTRHW6FD" />
      </body>
    </html>
  );
}
