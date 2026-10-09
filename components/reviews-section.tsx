import { REVIEWS } from '@/lib/reviews';
import { Icon } from './icons';

export function ReviewsSection() {
  const displayReviews = REVIEWS.slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="reviews-head">
          <div className="score">
            <span className="score__num">4.7</span>
            <div className="stack gap-4">
              <strong className="h4">Excellent</strong>
              <span className="stars">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size={18} fill className="star" />
                ))}
              </span>
              <span className="body-s muted">Based on 774 Google reviews · updated daily</span>
            </div>
          </div>
          <a className="btn btn--secondary" href="#" target="_blank" rel="noopener">
            See all reviews on Google
          </a>
        </div>

        <div className="grid grid-3">
          {displayReviews.map((review, idx) => (
            <article key={idx} className="review">
              <div className="review__head">
                <span className="avatar">{review.initial}</span>
                <div>
                  <strong className="body-s medium">{review.name}</strong>
                  <div className="caption muted">{review.date} · Google review</div>
                </div>
              </div>
              <span className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} name="star" size={14} fill className="star" />
                ))}
              </span>
              <p className="review__text is-clamped">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
