import Link from 'next/link';
import { TOURS } from '@/lib/tours';
import { TourCard } from '@/components/tour-card';
import { Icon } from '@/components/icons';

export const metadata = {
  title: 'Tours from Koh Samui, Phangan & Tao | IslandDay',
  description: 'Book marine park tours departing from Koh Samui, Koh Phangan and Koh Tao',
};

export default function DeparturePage() {
  const currency = 'THB' as const;
  const islands = ['Koh Samui', 'Koh Phangan', 'Koh Tao'];

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">Departure islands</span>
          </nav>
          <h1 className="h1">Tours from your island</h1>
          <p>Whether you&apos;re staying on Koh Samui, Koh Phangan or Koh Tao, there are tour options departing near you.</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 96 }}>
        <div className="steps-3">
          {islands.map((island, i) => (
            <div key={island} className="step-card">
              <div className="num">{i + 1}</div>
              <h3 className="h5">{island}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12 }}>
                {i === 0 ? 'Main resort island, 15 min to pier' : i === 1 ? 'Backpacker hub, 20 min to pier' : 'Diving mecca, longest crossing'}
              </p>
              <Link href={`/tours?island=${island.toLowerCase()}`} className="btn btn--secondary btn--sm">
                View tours
              </Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80 }}>
          <h2 className="h2">Sample tours</h2>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {TOURS.slice(0, 3).map(tour => (<TourCard key={tour.slug} tour={tour} currency={currency} />))}
          </div>
        </div>
      </div>

      <section className="section section--muted">
        <div className="container">
          <h2 className="h2">How hotel pickup works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 24 }}>
            <div>
              <div style={{ marginBottom: 12 }}>
                <Icon name="clock" size={32} className="brand" />
              </div>
              <h3 className="h5">Morning pickup</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Minivan arrives 07:00–08:00 depending on your location. Exact time in your confirmation.</p>
            </div>
            <div>
              <div style={{ marginBottom: 12 }}>
                <Icon name="van" size={32} className="brand" />
              </div>
              <h3 className="h5">Covered zones</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We pick up from most hotels in central and beach areas. Remote villas may have a surcharge.</p>
            </div>
            <div>
              <div style={{ marginBottom: 12 }}>
                <Icon name="ship" size={32} className="brand" />
              </div>
              <h3 className="h5">Pier check-in</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Arrive at the pier 15 min early. Coffee and safety briefing before departure.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
