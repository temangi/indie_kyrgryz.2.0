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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Indie Kyrgyz Travel — Tours in Kyrgyzstan",
    template: "%s | Indie Kyrgyz Travel",
  },
  applicationName: "Indie Kyrgyz Travel",
  creator: "Indie Kyrgyz Travel",
  publisher: "Indie Kyrgyz Travel",
  category: "Travel",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "INDENYzI76CJmpjmsxDBroe2Db_ZnyxDkGtLZtvHckA",
  },
  description:
    "Authentic tours in Kyrgyzstan. Mountains, lakes, nomads, and unique local experiences.",
  keywords: [
    "Kyrgyzstan tours",
    "Travel Kyrgyzstan",
    "Silk Road tours",
    "Central Asia travel",
    "Indie Kyrgyz",
    "Tours in Kyrgyzstan",
    "Hiking Tian Shan",
    "Horseback riding Kyrgyzstan",
    "Small group tours Central Asia",
    "Issyk-Kul adventure",
    "Nomadic lifestyle tour",
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
        alt: "Indie Kyrgyz Travel",
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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SignTour title={"Sign Up for a Tour:"} />
        <Header />
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLd),
          }}
        />
        <main className="page">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-6WFTRHW6FD" />
      </body>
    </html>
  );
}
