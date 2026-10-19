import type { CSSProperties } from 'react';
import provenance from './review-provenance.json';

type Review = (typeof provenance.records)[number];
type ReviewStyle = CSSProperties & { '--review-index': number; '--review-count': number };

function FiveStarRating() {
  return (
    <div className="sa-testimonial-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => <span aria-hidden="true" key={index}>★</span>)}
    </div>
  );
}

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const reviews: readonly Review[] = provenance.records;
  return (
    <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>
      <div className="sa-testimonial-heading">
        <h2 id={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>StealthAgents reviews</h2>
      </div>
      <div className="sa-testimonial-viewport" aria-label="Ten verified StealthAgents client reviews. The reviews pause while hovered or focused.">
        <div className="sa-testimonial-track">
          {reviews.map((review, index) => (
            <article
              className="sa-testimonial-card"
              key={review.name}
              tabIndex={0}
              style={{ '--review-index': index, '--review-count': reviews.length } as ReviewStyle}
            >
              <FiveStarRating />
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
