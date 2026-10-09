import { Metadata } from 'next';
import Link from 'next/link';
import { TOURS } from '@/lib/tours';
import { Hero } from '@/components/hero';
import { TourFinder } from '@/components/tour-finder';
import { TourCard } from '@/components/tour-card';
import { FAQSection } from '@/components/faq-section';
import { ReviewsSection } from '@/components/reviews-section';
import { Icon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Marine Park Tours from Koh Samui | IslandDay',
  description: 'Compare every marine park tour from Koh Samui — speedboats, big boats, kayaking days and private charters. Live prices, free cancellation, direct booking.',
};

const HIGHLIGHTS = [
  { num: '01', overline: 'Viewpoint', title: 'Island summit' },
  { num: '02', overline: 'Activity', title: 'Sea kayaking' },
  { num: '03', overline: 'Lagoon', title: 'Emerald lake' },
  { num: '04', overline: 'Wildlife', title: 'Langur monkeys' },
  { num: '05', overline: 'Activity', title: 'Snorkel reefs' },
  { num: '06', overline: 'Beach', title: 'White sand bay' }
];

const BOAT_TYPES = [
  { icon: 'ship', title: 'Speedboat tours', desc: 'The quickest crossing and the easiest way to fit more stops into one day.', href: '/tours?type=speedboat' },
  { icon: 'anchor', title: 'Big boat tours', desc: 'More space, a steadier ride and usually the lowest starting price.', href: '/tours?type=bigboat' },
  { icon: 'waves', title: 'Kayaking tours', desc: 'Tours where paddling is a real part of the day, not a short extra.', href: '/tours?type=kayak' },
  { icon: 'sail', title: 'Private charters', desc: 'Your own boat, a flexible pace and full control of the itinerary.', href: '/tours?type=private' }
];

const GUIDE_CARDS = [
  { title: 'Emerald lagoon' }, { title: 'Island viewpoint' }, { title: 'Snorkelling' },
  { title: 'Kayaking' }, { title: 'Swimming & beaches' }, { title: 'Best time to visit' },
  { title: 'Wildlife' }, { title: 'Entrance fees' }
];

export default function Home() {
  const currency = 'THB' as const;
  const quickPicks = TOURS.slice(0, 3);

  return (
    <main>
      <Hero />

      <section className="carousel" aria-label="Park highlights">
        <div className="container">
          <div className="carousel__track">
            {HIGHLIGHTS.map((h) => (
              <Link key={h.num} href="/guide" className={`spot ph g-${h.num.charCodeAt(0) - 49}`}>
                <span className="spot__num">{h.num}</span>
                <span className="overline">{h.overline}</span>
                <span className="h5">{h.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TourFinder />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="overline">Our quick picks</span>
              <h2 className="h2">Start with these three</h2>
              <p>The clearest starting points for most visitors. Want every difference in one table? <Link className="link" href="/compare">Open the full comparison →</Link></p>
            </div>
          </div>
          <div className="grid grid-3">
            {quickPicks.map(tour => (
              <TourCard key={tour.slug} tour={tour} currency={currency} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="overline">Choose by boat and travel style</span>
              <h2 className="h2">Which type suits you?</h2>
            </div>
          </div>
          <div className="grid grid-4">
            {BOAT_TYPES.map(type => (
              <Link key={type.title} href={type.href} className="tile">
                <span className="tile__icon">
                  <Icon name={type.icon as any} size={24} />
                </span>
                <h3 className="h4">{type.title}</h3>
                <p>{type.desc}</p>
                <span className="link">Compare options <Icon name="arrowR" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="cbanner">
            <div className="cbanner__text">
              <span className="overline">One table, every tour</span>
              <h2 className="h2">Compare all tours side by side</h2>
              <p className="body-l">Boat type, group size, kayaking, park fees, live prices and reviews — in one place.</p>
              <Link className="btn btn--primary" href="/compare">Open the comparison</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="overline">All bookable options</span>
              <h2 className="h2">See every tour</h2>
            </div>
            <Link className="btn btn--secondary" href="/tours">View all {TOURS.length} tours</Link>
          </div>
          <div className="grid grid-3">
            {TOURS.map(tour => (
              <TourCard key={tour.slug} tour={tour} currency={currency} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="editorial">
            <div>
              <h2 className="h2">Same park, very different days out</h2>
              <p>Every boat on this site sails to the same marine park — that is where the similarity stops. One races across and fits in five stops; another is a sailing junk that takes its time and dodges the crowds.</p>
              <p>It all sits in <Link className="link" href="/compare">one comparison table</Link>: boat, group size, kayaking, park fees, live prices and guest scores. Prefer to be pointed in a direction? Pick a boat style above.</p>
            </div>
            <div className="panel">
              <h3 className="h4">What you get on almost any full-day tour</h3>
              <ul className="check-list">
                <li><span className="icon-box"><Icon name="van" size={18} /></span>Hotel pickup inside the covered zones</li>
                <li><span className="icon-box"><Icon name="ship" size={18} /></span>Return crossing to the marine park</li>
                <li><span className="icon-box"><Icon name="utensils" size={18} /></span>Lunch, drinking water and safety kit</li>
                <li><span className="icon-box"><Icon name="pin" size={18} /></span>Time at the lagoon and viewpoint (weather permitting)</li>
                <li><span className="icon-box"><Icon name="shield" size={18} /></span>Accident cover on the operator&apos;s terms</li>
              </ul>
              <div className="note note--warning" style={{ marginTop: '20px' }}>
                <Icon name="info" size={18} />
                <span>Kayaking and the park fee are not always included — they can change which tour is genuinely cheapest.</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '64px' }}>
            <h3 className="h3">What the day actually looks like</h3>
            <ol className="timeline-h">
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>07:00–08:30</span><strong className="h5" style={{display:'block'}}>Hotel pickup</strong><span className="body-s secondary">Van collects a string of hotels</span></li>
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>08:30</span><strong className="h5" style={{display:'block'}}>Pier check-in</strong><span className="body-s secondary">Briefing, snack & coffee</span></li>
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>09:00</span><strong className="h5" style={{display:'block'}}>Crossing</strong><span className="body-s secondary">40 min – 2 hrs by boat</span></li>
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>10:00</span><strong className="h5" style={{display:'block'}}>First stop</strong><span className="body-s secondary">Kayak or lagoon viewpoint</span></li>
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>12:30</span><strong className="h5" style={{display:'block'}}>Lunch</strong><span className="body-s secondary">On board or on a beach</span></li>
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>15:00</span><strong className="h5" style={{display:'block'}}>Return</strong><span className="body-s secondary">Back on the island ~16:00</span></li>
              <li><span className="timeline-h__line"></span><span className="caption" style={{color: 'var(--brand-secondary)'}}>16:00–17:00</span><strong className="h5" style={{display:'block'}}>Drop-off</strong><span className="body-s secondary">Door to door ≈ 10–12 hrs</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="overline">Park guide</span>
              <h2 className="h2">Know the park before you go</h2>
            </div>
            <Link className="btn btn--secondary" href="/guide">Full park guide</Link>
          </div>
          <div className="grid grid-4">
            {GUIDE_CARDS.map((card, idx) => (
              <Link key={idx} href="/guide" className="guide-card">
                <img src={`/images/guide-${idx + 1}.png`} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'var(--r-lg)' }} />
                <span className="guide-card__title">{card.title}<Icon name="arrowR" size={18} className="brand" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <ReviewsSection />
    </main>
  );
}
