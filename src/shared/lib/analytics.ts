import { sendGAEvent } from '@next/third-parties/google';

type EventAction = 'open_modal' | 'submit_form' | 'click_tour_card' | 'burger_toggle';

export const trackEvent = (action: EventAction, label?: string, value?: string) => {
  if (typeof window !== 'undefined') {
    sendGAEvent({
      event: action,
      event_label: label,
      event_value: value,
    });
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA Event]: ${action}`, { label, value });
    }
  }
};