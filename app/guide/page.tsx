import Link from 'next/link';
import { TOURS } from '@/lib/tours';
import { TourCard } from '@/components/tour-card';
import { Icon } from '@/components/icons';

export const metadata = {
  title: 'Marine Park Guide | IslandDay',
  description: 'Everything you need to know about the marine park',
};

export default function GuidePage() {
  const currency = 'THB' as const;
  const relatedTours = TOURS.slice(0, 3);

  return (
    <main>
      <div className="g-hero">
        <div className="container">
          <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">Marine park guide</span>
          </nav>
          <h1 className="display-l" style={{ color: '#fff', marginTop: 24 }}>Marine park guide</h1>
          <div className="g-hero__meta">
            <span>Last updated January 2026</span>
            <span>20 min read</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="article-layout">
          <div className="prose">
            <h2>Welcome to the marine park</h2>
            <p className="lead">A protected marine area 15km offshore Koh Samui, featuring limestone islands, emerald lagoons and pristine reefs. Most tours here take 3–5 hours in the park and visit 2–4 stops depending on boat type and season.</p>

            <h2>Best time to visit</h2>
            <p>The marine park is accessible year-round, but conditions are best November–April when seas are calm. May–October brings occasional rain and choppy waters, though many tours still operate. October sees the fewest visitors.</p>

            <h2>What to bring</h2>
            <ul style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.8 }}>
              <li>Swimsuit (you&apos;ll get wet)</li>
              <li>Reef-safe sunscreen (50+ SPF recommended)</li>
              <li>Towel and change of clothes</li>
              <li>Waterproof bag for valuables</li>
              <li>Camera with waterproof case</li>
              <li>Light jacket (early morning boat rides get cool)</li>
              <li>Motion sickness tablets if needed</li>
            </ul>

            <h2>Entrance fees</h2>
            <p>The national park charges THB 300 per adult and THB 150 per child (age 4–11). Most tours include this, but check before booking. Payment is cash on the day.</p>

            <h2>Wildlife &amp; safety</h2>
            <p>You&apos;ll see tropical fish, sea turtles, starfish and occasionally rays. The water is 28–30°C year-round. Reef shoes help on rocky areas. Keep 2m from marine life and never touch coral.</p>

            <h2>Nearby tours</h2>
            <div className="grid grid-3" style={{ marginTop: 32 }}>
              {relatedTours.map(tour => (<TourCard key={tour.slug} tour={tour} currency={currency} />))}
            </div>
          </div>

          <aside className="sidebar">
            <div className="toc">
              <h3 className="h5" style={{ margin: '0 0 16px' }}>In this guide</h3>
              <a href="#" className="is-active">Welcome</a>
              <a href="#">Best time</a>
              <a href="#">What to bring</a>
              <a href="#">Entrance fees</a>
              <a href="#">Safety</a>
              <a href="#">Nearby tours</a>
            </div>

            <div className="cta-box">
              <h3 className="h5">Still deciding?</h3>
              <p style={{ fontSize: 14, marginBottom: 12 }}>Compare all tours side-by-side for boat type, prices, and inclusions.</p>
              <Link href="/compare" className="btn btn--ghost-light btn--sm">Compare tours</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
