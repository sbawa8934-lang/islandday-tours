'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { TOURS } from '@/lib/tours';
import { TourCard } from '@/components/tour-card';
import { Icon } from '@/components/icons';

export default function ToursPage() {
  const currency = 'THB' as const;
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    boatType: [] as string[],
    includes: [] as string[],
    minPrice: 1000,
    maxPrice: 5000,
  });
  const [sortBy, setSortBy] = useState('recommended');

  const filtered = useMemo(() => {
    let results = TOURS.filter(tour => {
      if (search && !tour.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (filters.boatType.length > 0 && !filters.boatType.includes(tour.type)) return false;
      if (filters.includes.includes('kayak') && !tour.kayak) return false;
      if (filters.includes.includes('park') && !tour.parkFee) return false;
      if (tour.price < filters.minPrice || tour.price > filters.maxPrice) return false;
      return true;
    });

    if (sortBy === 'price') results.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') results.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') results.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'duration') results.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));

    return results;
  }, [search, filters, sortBy]);

  const handleToggleFilter = (category: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: (prev[category as keyof typeof prev] as any[]).includes(value)
        ? (prev[category as keyof typeof prev] as any[]).filter(v => v !== value)
        : [...(prev[category as keyof typeof prev] as any[]), value]
    } as any));
  };

  const handleClearFilters = () => {
    setSearch('');
    setFilters({ boatType: [], includes: [], minPrice: 1000, maxPrice: 5000 });
    setSortBy('recommended');
  };

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">Tours</span>
          </nav>
          <h1 className="h1">All Marine Park tours</h1>
          <p>Speedboats, big boats, kayaking days and private charters — live prices, direct booking and free cancellation on every tour.</p>
        </div>
      </section>

      <div className="container">
        <div className="listing">
          <aside className="filters" aria-label="Filters">
            <div className="filters__head">
              <h2 className="h4">Filters</h2>
              <button className="muted" type="button" onClick={handleClearFilters} style={{ fontSize: 14 }}>Clear all</button>
            </div>

            <label className="input input--sm">
              <Icon name="search" size={16} />
              <input type="search" placeholder="Search tours" value={search} onChange={(e) => setSearch(e.target.value)} />
            </label>

            <div className="fgroup">
              <button type="button">Boat type<Icon name="chevD" size={16} className="secondary" /></button>
              <div className="fgroup__body">
                {['speedboat', 'bigboat', 'catamaran'].map(type => (
                  <label key={type} className="check">
                    <input type="checkbox" checked={filters.boatType.includes(type)} onChange={() => handleToggleFilter('boatType', type)} />
                    <span>{type === 'speedboat' ? 'Speedboat' : type === 'bigboat' ? 'Big boat' : 'Catamaran'}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="fgroup">
              <button type="button">Includes<Icon name="chevD" size={16} className="secondary" /></button>
              <div className="fgroup__body">
                <label className="check">
                  <input type="checkbox" checked={filters.includes.includes('kayak')} onChange={() => handleToggleFilter('includes', 'kayak')} />
                  <span>Kayaking included</span>
                </label>
                <label className="check">
                  <input type="checkbox" checked={filters.includes.includes('park')} onChange={() => handleToggleFilter('includes', 'park')} />
                  <span>Park fee included</span>
                </label>
              </div>
            </div>

            <div className="fgroup">
              <button type="button">Price per adult<Icon name="chevD" size={16} className="secondary" /></button>
              <div className="fgroup__body">
                <div className="range">
                  <span className="range__rail"></span>
                  <span className="range__fill"></span>
                  <input type="range" min="1000" max="5000" step="100" value={filters.minPrice} onChange={(e) => setFilters(p => ({ ...p, minPrice: parseInt(e.target.value) }))} />
                  <input type="range" min="1000" max="5000" step="100" value={filters.maxPrice} onChange={(e) => setFilters(p => ({ ...p, maxPrice: parseInt(e.target.value) }))} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span className="medium">THB {filters.minPrice.toLocaleString()}</span>
                  <span className="medium">THB {filters.maxPrice.toLocaleString()}+</span>
                </div>
              </div>
            </div>
          </aside>

          <section aria-label="Results">
            <div className="toolbar">
              <span className="medium" style={{ color: 'var(--text-secondary)' }}>{filtered.length} of {TOURS.length} tours</span>
              <div className="toolbar__right">
                <label className="select">
                  <span className="muted">Sort:</span>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="price">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                    <option value="rating">Top rated</option>
                    <option value="duration">Shortest first</option>
                  </select>
                  <Icon name="chevD" size={14} />
                </label>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-2">
                {filtered.map(tour => (<TourCard key={tour.slug} tour={tour} currency={currency} />))}
              </div>
            ) : (
              <div className="empty is-visible">
                <Icon name="search" size={32} className="muted" />
                <h3 className="h4">No tours match those filters</h3>
                <p className="secondary">Try removing a filter — or ask us on WhatsApp for a custom private charter.</p>
                <button className="btn btn--secondary" onClick={handleClearFilters}>Clear all filters</button>
              </div>
            )}
          </section>
        </div>
      </div>

      <section className="section section--muted">
        <div className="container">
          <div className="editorial">
            <div>
              <h2 className="h2">How to pick the right marine park tour</h2>
              <p>Choose between fast speedboats (40 min crossing), stable big boats (90 min), or sailing yachts (120 min). Speedboats fit more stops; big boats work best for families. Most tours include lunch, hotel pickup, and snorkelling gear. Park fees (THB 300 adult/150 child) are paid in cash on the day. Visit in season (Nov–Apr) for calm seas and guaranteed park access.</p>
            </div>
            <div className="panel" style={{ boxShadow: 'none' }}>
              <h3 className="h5" style={{ marginBottom: '8px' }}>Quick links</h3>
              <Link href="/compare" className="row" style={{ justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-default)' }}>
                <span className="medium brand">Compare all tours</span>
                <Icon name="chevR" size={16} className="brand" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
