import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./bootstrap.min.css";
import "./globals.css";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { SignTour } from "../widgets/SignTour";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SignTour title={"Sign Up for a Tour:"} />
        <Header />
        <main className="page">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-6WFTRHW6FD" />
      </body>
    </html>
  );
}
