"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const ADS_ID = "AW-17961172694";

/**
 * Google Ads remarketing hits www.google.com and doubleclick.net on load
 * and sets third-party cookies. The contacts page has no map or form
 * conversion, so the tag stays off there. Analytics is a separate tag.
 */
export function GoogleAdsTag() {
  const pathname = usePathname();
  if (pathname === "/contacts") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}
