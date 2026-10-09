'use client';

import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function ConfirmedPage() {
  const bookingRef = 'ID-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <main>
      <div className="container">
        <div className="conf" style={{ paddingTop: 80 }}>
          <div>
            <div className="conf-ok">
              <Icon name="check" size={40} />
            </div>
            <h1 className="h1" style={{ marginTop: 24, marginBottom: 16 }}>Booking confirmed!</h1>
            <p className="body-l" style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
              Your tour is booked. Check your email for a confirmation with all the details you need.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
              <div>
                <div className="body-s muted">Booking reference</div>
                <div className="ref" style={{ marginTop: 8 }}>
                  {bookingRef}
                  <button type="button" onClick={() => navigator.clipboard.writeText(bookingRef)} className="muted" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, padding: '0 8px' }}>
                    Copy
                  </button>
                </div>
              </div>
              <div>
                <div className="body-s muted">Tour date</div>
                <div style={{ marginTop: 8, fontWeight: 600, fontSize: 20 }}>Tomorrow</div>
              </div>
            </div>

            <div style={{ background: 'var(--surface-muted)', borderRadius: 20, padding: 28, marginBottom: 32 }}>
              <h3 className="h5">What happens next</h3>
              <ol className="steps-list" style={{ color: 'var(--text-secondary)' }}>
                <li><Icon name="mail" size={16} /> Check your inbox for a confirmation email (and spam folder, just in case)</li>
                <li><Icon name="van" size={16} /> Your hotel pickup time will be confirmed the day before</li>
                <li><Icon name="clock" size={16} /> Arrive 15 minutes early at your pickup location</li>
                <li><Icon name="chat" size={16} /> Questions? Chat with us on WhatsApp</li>
              </ol>
            </div>

            <Link href="/" className="btn btn--primary btn--lg">Back to homepage</Link>
          </div>

          <div className="email">
            <div className="email__head">
              <h3 className="h5" style={{ color: '#fff', margin: 0 }}>Confirmation email</h3>
            </div>
            <div className="email__body">
              <p style={{ margin: '0 0 16px' }}>Hi Jane,</p>
              <p style={{ margin: '0 0 16px', color: 'var(--text-secondary)' }}>Your tour is booked for tomorrow at 10:00 AM. Our driver will collect you from your hotel at the time below.</p>

              <div className="email__table">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span className="body-s muted">Tour</span>
                  <strong>Speedboat & Kayak Day Trip</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span className="body-s muted">Date & time</span>
                  <strong>Tomorrow, 10:00 AM</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span className="body-s muted">Guests</span>
                  <strong>2 adults</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span className="body-s muted">Hotel</span>
                  <strong>Centara Samui Resort</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span className="body-s muted">Price</span>
                  <strong>THB 3,590</strong>
                </div>
              </div>

              <p style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-default)', fontSize: 12, color: 'var(--text-muted)' }}>
                See you tomorrow! If you have any questions, reply to this email or chat with us on WhatsApp.
              </p>
            </div>
            <div className="email__foot">© IslandDay Tours · hello@islandday.example</div>
          </div>
        </div>
      </div>
    </main>
  );
}
