type Gtag = (
  command: "config" | "event" | "consent" | "set",
  targetId: string | "default",
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

const GA_ID = "G-6WFTRHW6FD";

const safeGtag = (command: Parameters<Gtag>[0], params?: Record<string, unknown>) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  if (command === "config") {
    window.gtag("config", GA_ID, params);
    return;
  }

  window.gtag(command, "default", params);
};

export const pageview = (url: string) => {
  safeGtag("config", { page_path: url });
};

export const trackEvent = (action: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", action, params);
};

export const setUserProperties = (properties: Record<string, unknown>) => {
  safeGtag("set", properties);
};

export const updateConsent = (consentState: Record<string, "granted" | "denied">) => {
  safeGtag("consent", consentState);
};