import { Metadata } from 'next';
import Link from 'next/link';
import { getTourBySlug, TOURS } from '@/lib/tours';
import { formatMoney } from '@/lib/format';
import { TourCard } from '@/components/tour-card';
import { Icon } from '@/components/icons';

interface TourDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  return {
    title: `${tour.title} | IslandDay`,
    description: tour.summary,
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  const currency = 'THB' as const;
  const relatedTours = TOURS.filter(t => t.slug !== slug).slice(0, 3);

  return (
    <main>
      <div className="container">
        <div className="t-head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <Link href="/tours">Tours</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">{tour.title}</span>
          </nav>
          <div className="t-head__row">
            <div>
              <h1 className="h1">{tour.title}</h1>
              <div className="t-meta">
                <a href="#reviews" className="chip">
                  <Icon name="star" size={14} fill className="star" />
                  <strong className="medium" style={{ color: 'var(--text-primary)' }}>{tour.rating}</strong>
                  <span>({tour.reviews} reviews)</span>
                </a>
                <span className="chip">
                  <Icon name="clock" size={14} />
                  {tour.duration}
                </span>
                <span className="chip">
                  <Icon name="users" size={14} />
                  {tour.group}
                </span>
                <span className="chip">
                  <Icon name="van" size={14} />
                  Hotel pickup
                </span>
                <span className="chip">
                  <Icon name="utensils" size={14} />
                  Thai & Western lunch
                </span>
              </div>
            </div>
            <div className="t-actions">
              <button className="btn btn--secondary btn--sm" data-save={tour.slug}>
                <Icon name="heart" size={16} />
                Save
              </button>
              <button className="btn btn--secondary btn--sm" data-share>
                <Icon name="share" size={16} />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="gallery">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className={`ph g-${i}`} role="button" tabIndex={0} aria-label={`Open photo ${i + 1}`}>
              <Icon name="image" className="ph__icon" />
              {i === 0 && <span className="gallery__video"><Icon name="play" size={14} fill />Video</span>}
              {i === 4 && <span className="gallery__all"><Icon name="image" size={14} />View all 16 photos</span>}
            </div>
          ))}
        </div>

        <div className="t-main">
          <div>
            <nav className="tabs" aria-label="Tour sections">
              <a href="#description" className="is-active">Description</a>
              <a href="#pricing">Pricing</a>
              <a href="#fees">Fees</a>
              <a href="#itinerary">Itinerary</a>
              <a href="#included">Included</a>
              <a href="#pickup">Pickup</a>
              <a href="#faqs">FAQs</a>
              <a href="#reviews">Reviews</a>
            </nav>

            <section className="t-block" id="description" style={{ border: 0 }}>
              <h2 className="h3">Highlights</h2>
              <ul className="hl-box">
                {tour.highlights.map((h, i) => (
                  <li key={i}><Icon name="check" size={16} />{h}</li>
                ))}
              </ul>
              <h2 className="h3" style={{ margin: '40px 0 20px' }}>Description</h2>
              <div className="readmore">
                <p>{tour.summary}</p>
                <p>Full-day marine park tour with {tour.kayak ? 'kayaking' : 'snorkelling'}, viewpoints, and beach time.</p>
              </div>
            </section>

            <section className="t-block" id="pricing">
              <h2 className="h3">Pricing</h2>
              <div className="price-cards">
                <div className="price-card">
                  <div><h3 className="h5">Adult</h3><span className="body-s muted">Age 12+</span></div>
                  <p className="h4"><span>{formatMoney(tour.price, currency)}</span> <span className="body-s muted" style={{ fontWeight: 400 }}>per person</span></p>
                </div>
                <div className="price-card">
                  <div><h3 className="h5">Child</h3><span className="body-s muted">Age 4–11</span></div>
                  <p className="h4"><span>{formatMoney(tour.child, currency)}</span> <span className="body-s muted" style={{ fontWeight: 400 }}>per person</span></p>
                </div>
                <div className="price-card">
                  <div><h3 className="h5">Infant</h3><span className="body-s muted">Age 1–3</span></div>
                  <p className="h4">Free</p>
                </div>
              </div>
            </section>

            <section className="t-block" id="fees">
              <h2 className="h3">Additional fees</h2>
              <div className="fees">
                <div className="row gap-8 warning medium">
                  <Icon name="info" size={18} />
                  <span>Paid directly on the day — not part of the price above</span>
                </div>
                <div className="fees__row">
                  <span>National park fee · Adult</span>
                  <strong className="medium">{formatMoney(300, currency)} / person</strong>
                </div>
                <div className="fees__row">
                  <span>National park fee · Child</span>
                  <strong className="medium">{formatMoney(150, currency)} / person</strong>
                </div>
              </div>
            </section>

            <section className="t-block" id="itinerary">
              <h2 className="h3">Itinerary</h2>
              <ol className="itin">
                <li>
                  <span className="itin__dot"><Icon name="van" size={14} /></span>
                  <div><span className="caption" style={{ color: 'var(--brand-secondary)' }}>07:30–08:30</span><h3 className="h5">Hotel pickup</h3><p className="body-s secondary">Air-conditioned minivan from your accommodation to the pier.</p></div>
                </li>
                <li>
                  <span className="itin__dot"></span>
                  <div><span className="caption" style={{ color: 'var(--brand-secondary)' }}>08:30</span><h3 className="h5">Pier check-in</h3><p className="body-s secondary">Check in, coffee and a snack while the crew prepares.</p></div>
                </li>
                <li>
                  <span className="itin__dot"></span>
                  <div><span className="caption" style={{ color: 'var(--brand-secondary)' }}>09:00</span><h3 className="h5">Boat departure</h3><p className="body-s secondary">Crossing time varies by boat type ({tour.crossing}).</p></div>
                </li>
                <li>
                  <span className="itin__dot"></span>
                  <div><span className="caption" style={{ color: 'var(--brand-secondary)' }}>12:30</span><h3 className="h5">Lunch & activities</h3><p className="body-s secondary">Thai buffet lunch and guided activities.</p></div>
                </li>
                <li>
                  <span className="itin__dot"></span>
                  <div><span className="caption" style={{ color: 'var(--brand-secondary)' }}>15:00</span><h3 className="h5">Return crossing</h3><p className="body-s secondary">Heading back to the island pier.</p></div>
                </li>
                <li>
                  <span className="itin__dot"><Icon name="van" size={14} /></span>
                  <div><span className="caption" style={{ color: 'var(--brand-secondary)' }}>16:00–17:00</span><h3 className="h5">Hotel drop-off</h3><p className="body-s secondary">Arrival time depends on your area.</p></div>
                </li>
              </ol>
            </section>

            <section className="t-block" id="included">
              <h2 className="h3">What&apos;s included</h2>
              <div className="incl">
                <div style={{ background: 'var(--success-bg)' }}>
                  <h3 className="h5">Included</h3>
                  <ul>
                    <li><Icon name="check" size={16} className="success" />Hotel pickup & drop-off</li>
                    <li><Icon name="check" size={16} className="success" />Boat transportation</li>
                    <li><Icon name="check" size={16} className="success" />Lunch & drinking water</li>
                    <li><Icon name="check" size={16} className="success" />Life vests & snorkel gear</li>
                    {tour.kayak && <li><Icon name="check" size={16} className="success" />Kayak gear</li>}
                    {tour.parkFee && <li><Icon name="check" size={16} className="success" />Park entrance fee</li>}
                  </ul>
                </div>
                <div style={{ background: 'var(--surface-muted)' }}>
                  <h3 className="h5">Not included</h3>
                  <ul>
                    {!tour.parkFee && <li><Icon name="x" size={16} className="muted" />Park entrance fee</li>}
                    <li><Icon name="x" size={16} className="muted" />Personal expenses</li>
                    <li><Icon name="x" size={16} className="muted" />Alcoholic drinks</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="t-block" id="pickup">
              <h2 className="h3">Hotel pickup areas</h2>
              <div className="pickup-box">
                <h3 className="h5">15 areas covered</h3>
                <div className="zones">
                  {['Bophut', 'Chaweng', 'Chaweng Noi', 'Choeng Mon', 'Lamai', 'Mae Nam', 'Bang Rak', 'Nathon', 'Lipa Noi', 'Plai Laem', 'Ban Tai', 'Laem Yai', 'Na Mueang', 'Taling Ngam', 'Laem Set'].map(zone => (
                    <span key={zone} className="chip">{zone}</span>
                  ))}
                </div>
              </div>
            </section>

            <section className="t-block" id="reviews">
              <h2 className="h3">Reviews</h2>
              <div className="rv-summary">
                <div className="rv-summary__score">
                  <span className="score__num">{tour.rating}</span>
                  <span className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" size={14} fill className="star" />
                    ))}
                  </span>
                  <span className="body-s muted">{tour.reviews} reviews</span>
                </div>
              </div>
            </section>
          </div>

          <aside className="booking" aria-label="Book this tour">
            <div className="bw">
              <div className="bw__price">
                <div>
                  <span className="body-s muted">From</span>
                  <div className="row gap-8" style={{ alignItems: 'baseline' }}>
                    <span className="price-l">{formatMoney(tour.price, currency)}</span>
                    <span className="body-s muted">/ person</span>
                  </div>
                </div>
                <span className="chip chip--success"><Icon name="check" size={14} />Free cancellation</span>
              </div>
              <div>
                <span className="lbl">Date</span>
                <input type="date" className="date-btn" placeholder="Choose a date" />
              </div>
              <div>
                <span className="lbl">Guests</span>
                <div className="guests">
                  <div className="guest">
                    <div className="guest__info"><strong className="medium">Adults</strong><small>Age 12+</small></div>
                    <div className="stepper">
                      <button type="button">−</button>
                      <output>2</output>
                      <button type="button">+</button>
                    </div>
                  </div>
                  <div className="guest">
                    <div className="guest__info"><strong className="medium">Children</strong><small>Age 4–11</small></div>
                    <div className="stepper">
                      <button type="button">−</button>
                      <output>0</output>
                      <button type="button">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bw__total">
                <div className="line line--total">
                  <span>Total today</span>
                  <span>{formatMoney(tour.price * 2, currency)}</span>
                </div>
              </div>
              <Link href="/checkout" className="btn btn--primary btn--block btn--lg">Book now</Link>
              <a href="#" className="btn btn--whatsapp btn--block"><Icon name="chat" size={18} />Ask on WhatsApp</a>
            </div>
          </aside>
        </div>
      </div>

      <section className="section section--muted">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>You might also like</h2>
          <div className="grid grid-3">
            {relatedTours.map(t => (
              <TourCard key={t.slug} tour={t} currency={currency} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
