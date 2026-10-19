'use client';

import { useEffect } from 'react';

const scheduler = 'https://go.oncehub.com/StealthAgentsTeam';
const confirmationPath = '/thanks-whats-next';
const completionEvents = new Set([
  'booking.completed',
  'booking_complete',
  'bookingComplete',
  'BOOKING_COMPLETE',
]);

function onceHubEventName(data: unknown): string {
  if (typeof data === 'string') {
    try { return onceHubEventName(JSON.parse(data)); } catch { return data; }
  }
  if (!data || typeof data !== 'object') return '';
  const event = data as Record<string, unknown>;
  for (const key of ['event', 'eventType', 'type', 'name']) {
    if (typeof event[key] === 'string') return event[key];
  }
  return '';
}

export default function OnceHubScheduler() {
  useEffect(() => {
    function handleOnceHubMessage(event: MessageEvent) {
      let host: string;
      try { host = new URL(event.origin).hostname; } catch { return; }
      if (host !== 'oncehub.com' && !host.endsWith('.oncehub.com')) return;
      if (completionEvents.has(onceHubEventName(event.data))) window.location.assign(confirmationPath);
    }
    window.addEventListener('message', handleOnceHubMessage);
    return () => window.removeEventListener('message', handleOnceHubMessage);
  }, []);

  return (
    <section className="sa-booking-calendar" aria-labelledby="booking-calendar-title">
      <h2 id="booking-calendar-title">Choose a consultation time</h2>
      <p className="booking-direct-link"><a className="btn primary" href={scheduler} target="_blank" rel="noopener noreferrer">Open the OnceHub scheduler in a new tab</a></p>
      <p className="booking-fallback-note">Use the direct link if the calendar does not load or is difficult to use.</p>
      <iframe
        src={`${scheduler}?brdr=1pxd8d8d8&em=1&Si=1`}
        id="SOI_StealthAgentsTeam"
        name="ScheduleOnceIframe"
        title="Schedule a consultation with Stealth Agents"
        scrolling="yes"
        frameBorder="0"
        height="850"
        width="100%"
        className="sa-oncehub-frame"
        referrerPolicy="strict-origin-when-cross-origin"
        data-booking-success-path={confirmationPath}
      />
    </section>
  );
}
