export const trackConversion = (identifier: string = "guest") => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    const transactionId = `tr_${Date.now()}_${identifier.replace(/[^a-zA-Z0-9]/g, "")}`;

    (window as any).gtag("event", "conversion", {
      send_to: "AW-17961172694/jiK_CM7F3PobENb9xvRC",
      value: 1.0, 
      currency: "USD",
      transaction_id: transactionId,
    });
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn("⚠️ Google Tag (gtag.js) не обнаружен. Проверьте блокировщики рекламы или установку скрипта в <head>.");
    }
  }
};
