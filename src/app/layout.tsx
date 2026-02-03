import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./bootstrap.min.css";
import "./globals.css";
import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";
import { SignTour } from "../widgets/SignTour";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indie Kyrgyz Travel - Tours in Kyrgyzstan & Kazakhstan",
  description:
    "Small-group and private tours across Kyrgyzstan and Kazakhstan. Authentic routes, local guides, and unforgettable mountain experiences.",
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
        <SignTour title={"Sign Up for a Tour:"}/>
        <Header />

        <main className="page">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-ZT1KZ5H6KZ" />
    </html>
  );
}
