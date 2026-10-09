import Link from 'next/link';
import { TOURS } from '@/lib/tours';
import { formatMoney } from '@/lib/format';
import { Icon } from '@/components/icons';

export const metadata = {
  title: 'Compare Marine Park Tours | IslandDay',
  description: 'Compare boat types, prices, kayaking, park fees and reviews side-by-side',
};

export default function ComparePage() {
  const currency = 'THB' as const;

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">Compare</span>
          </nav>
          <h1 className="h1">Compare all tours</h1>
          <p>Boat type, group size, kayaking, park fees, live prices and reviews — in one table</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="ctable-wrap">
          <table className="ctable">
            <thead>
              <tr>
                <th>Tour name</th>
                <th>Boat type</th>
                <th>Group size</th>
                <th>Kayaking</th>
                <th>Park fee</th>
                <th>Price</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {TOURS.map(tour => (
                <tr key={tour.slug}>
                  <td><strong>{tour.title}</strong></td>
                  <td>{tour.type === 'speedboat' ? 'Speedboat' : tour.type === 'bigboat' ? 'Big boat' : 'Catamaran'}</td>
                  <td>{tour.group}</td>
                  <td>{tour.kayak ? <span className="yes-cell"><Icon name="check" size={16} />Yes</span> : <Icon name="x" size={16} />}</td>
                  <td>{tour.parkFee ? <span className="yes-cell"><Icon name="check" size={16} />Incl.</span> : <span className="pay-cell">+{formatMoney(300, currency)}</span>}</td>
                  <td><strong>{formatMoney(tour.price, currency)}</strong></td>
                  <td>
                    <span style={{ display: 'flex', gap: 2 }}>
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={14} fill className="star" />
                      ))}
                    </span>
                    {tour.rating}
                  </td>
                  <td><Link href={`/tour/${tour.slug}`} className="link">View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="section section--muted">
        <div className="container">
          <h2 className="h2">What the table means</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 24 }}>
            <div>
              <h3 className="h5">Boat type</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Speedboats are fast (40 min crossing), big boats steady (90 min), catamarans combination (120 min).</p>
            </div>
            <div>
              <h3 className="h5">Kayaking</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Tours where paddling is part of the day experience, not just a brief bonus activity.</p>
            </div>
            <div>
              <h3 className="h5">Park fee</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>If not included, expect to pay THB 300 (adult) or THB 150 (child) in cash on the day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
