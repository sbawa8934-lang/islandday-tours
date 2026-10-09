'use client';

import { useState } from 'react';
import { Icon } from './icons';

export function TourFinder() {
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const personsText = `${adults} adult${adults !== 1 ? 's' : ''}${children > 0 ? `, ${children} child${children !== 1 ? 'ren' : ''}` : ''}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      const params = new URLSearchParams({ date, adults: String(adults), children: String(children) });
      window.location.href = `/tours?${params.toString()}`;
    }
  };

  return (
    <div className="finder-wrap">
      <div className="container">
        <form className="finder" onSubmit={handleSubmit} role="search" aria-label="Find a tour">
          <div className="finder__field">
            <Icon name="cal" size={24} />
            <div style={{ flex: 1 }}>
              <label htmlFor="f-date">Date</label>
              <input
                type="date"
                id="f-date"
                aria-label="Choose a date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="finder__field">
            <Icon name="users" size={24} />
            <div style={{ flex: 1 }}>
              <label>Persons</label>
              <span className="finder__val">{personsText}</span>
            </div>
            <Icon name="chevD" size={18} className="muted" />
            <div className="popover" style={{ display: 'block' }}>
              <div className="guest">
                <div className="guest__info">
                  <strong className="medium">Adults</strong>
                  <small>Age 12+</small>
                </div>
                <div className="stepper">
                  <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))}>
                    <Icon name="minus" size={14} />
                  </button>
                  <output>{adults}</output>
                  <button type="button" onClick={() => setAdults(adults + 1)}>
                    <Icon name="plus" size={14} />
                  </button>
                </div>
              </div>
              <div className="guest">
                <div className="guest__info">
                  <strong className="medium">Children</strong>
                  <small>Age 4–11</small>
                </div>
                <div className="stepper">
                  <button type="button" onClick={() => setChildren(Math.max(0, children - 1))}>
                    <Icon name="minus" size={14} />
                  </button>
                  <output>{children}</output>
                  <button type="button" onClick={() => setChildren(children + 1)}>
                    <Icon name="plus" size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="finder__field">
            <Icon name="ship" size={24} />
            <div style={{ flex: 1 }}>
              <label htmlFor="f-pref">Boat preference</label>
              <select id="f-pref">
                <option value="">Show me all options</option>
                <option value="calm">Calm, steady ride</option>
                <option value="kayaking">Real kayaking time</option>
                <option value="family">Good for families</option>
                <option value="value">Best value</option>
                <option value="small-group">Small group / private</option>
              </select>
            </div>
            <Icon name="chevD" size={18} className="muted" />
          </div>

          <button type="submit" className="btn btn--primary btn--lg">Find my tour</button>
        </form>
      </div>
    </div>
  );
}
