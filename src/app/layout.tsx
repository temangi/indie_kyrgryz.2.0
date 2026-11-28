import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAnalyticsTracker from "./analytics/GoogleAnalyticsTracker";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { GoogleAdsTag } from "./analytics/GoogleAdsTag";
import { SignTour } from "../widgets/SignTour";
import { SeoJsonLd } from "@/src/shared/seo/SeoJsonLd";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/src/shared/seo/pageCopy";
import { TRAVEL_AGENCY_LD } from "@/src/shared/seo/organizationJsonLd";

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
        width: 1200,
        height: 630,
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
        <GoogleAdsTag />
        <SignTour title="Sign up for a Tour:" />
        <Header />
        <Suspense fallback={null}>
          <GoogleAnalyticsTracker />
        </Suspense>
        <SeoJsonLd
          id="global-ld"
          graph={[TRAVEL_AGENCY_LD, websiteLd]}
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