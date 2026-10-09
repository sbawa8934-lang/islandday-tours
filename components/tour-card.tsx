import Image from 'next/image';
import Link from 'next/link';
import type { Tour } from '@/lib/types';
import { formatMoney } from '@/lib/format';
import { TYPE_LABEL } from '@/lib/tours';
import { Icon } from './icons';

interface TourCardProps {
  tour: Tour;
  currency: 'THB' | 'USD' | 'EUR' | 'GBP' | 'INR';
}

export function TourCard({ tour, currency }: TourCardProps) {
  return (
    <article className="card" data-slug={tour.slug}>
      <div className={`card__media`}>
        <Image
          src={`/images/tours/tour-${tour.g + 1}.png`}
          alt={tour.title}
          width={400}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
        {tour.badge && <span className="badge">{tour.badge}</span>}
        <button className="save-btn" data-save={tour.slug} aria-label={`Save ${tour.title}`}>
          <Icon name="heart" size={16} />
        </button>
      </div>
      <div className="card__body">
        <span className="card__dest">Marine Park · {TYPE_LABEL[tour.type]}</span>
        <h3 className="card__title">
          <Link href={`/tour/${tour.slug}`}>{tour.title}</Link>
        </h3>
        <div className="card__meta">
          <span>
            <Icon name="clock" size={16} />
            {tour.duration}
          </span>
          <span className="success">
            <Icon name="check" size={16} />
            Free cancellation
          </span>
        </div>
        <div className="card__foot">
          <span className="rating">
            <Icon name="star" size={16} className="star" fill />
            <strong>{tour.rating}</strong>
            <span className="muted">({tour.reviews} reviews)</span>
          </span>
          <span className="price-from">
            <small>from</small>
            <strong data-thb={tour.price}>{formatMoney(tour.price, currency, { from: true })}</strong>
          </span>
        </div>
      </div>
    </article>
  );
}
