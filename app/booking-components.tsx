'use client';

import { useState } from 'react';
import provenance from './review-provenance.json';

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const [paused, setPaused] = useState(false);
  const reviews = provenance.records;
  return (
    <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}${paused ? ' is-paused' : ''}`} aria-labelledby={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>
      <div className="sa-testimonial-heading">
        <span aria-hidden="true">★★★★★</span>
        <h2 id={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>StealthAgents reviews</h2>
      </div>
      <button className="sa-testimonial-toggle" type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
        {paused ? 'Resume reviews' : 'Pause reviews'}
      </button>
      <div className="sa-testimonial-viewport" tabIndex={0} aria-label="Ten verified Stealth Agents client reviews">
        <div className="sa-testimonial-track">
          {reviews.map((review) => (
            <article className="sa-testimonial-card" key={review.name}>
              <div className="sa-testimonial-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
              <h3>{review.headline}</h3>
              <blockquote>“{review.body}”</blockquote>
              <p>{review.name}, {review.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="sa-testimonial-source">Verified first-party source: <a href={provenance.source} target="_blank" rel="noopener noreferrer">Stealth Agents</a>.</p>
    </section>
  );
}
