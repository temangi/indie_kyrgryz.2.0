 "use client";
 
 import { useEffect } from "react";
 import { usePathname, useSearchParams } from "next/navigation";
 import { pageview } from "@/src/shared/lib/analytics";
 
 const GoogleAnalyticsTracker = () => {
   const pathname = usePathname();
   const searchParams = useSearchParams();
 
   useEffect(() => {
     if (!pathname) {
       return;
     }
 
     const query = searchParams?.toString();
     const url = query ? `${pathname}?${query}` : pathname;
     pageview(url);
   }, [pathname, searchParams]);
 
   return null;
 };
 
 export default GoogleAnalyticsTracker;
