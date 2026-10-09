'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hotel: '',
    paymentMethod: 'card',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      window.location.href = '/confirmed';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <div className="co-header">
        <div className="container">
          <Link href="/" className="logo" style={{ fontSize: 14 }}>IslandDay</Link>
          <div className="co-progress">
            <button className="back" onClick={() => step > 1 && setStep(step - 1)}>
              <Icon name="chevL" size={16} />
              <span>Back</span>
            </button>
            {[1, 2, 3].map(i => (
              <div key={i} className={`co-step ${i === step ? 'is-active' : i < step ? 'is-done' : ''}`}>
                <div className="co-step__dot">{i < step ? <Icon name="check" size={14} /> : i}</div>
                {i < 3 && <div className={`co-step__sep ${i < step ? 'is-done' : ''}`}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="co-main">
          <div>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="co-card">
                  <div className="co-card__head">
                    <div className="num">1</div>
                    <div><strong>Traveller details</strong></div>
                  </div>
                  <div className="co-card__body">
                    <div className="form-row">
                      <div className="field">
                        <label>First name</label>
                        <div className="input">
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="field">
                        <label>Last name</label>
                        <div className="input">
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <div className="input">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="field">
                      <label>Phone number</label>
                      <div className="input">
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="co-card">
                  <div className="co-card__head">
                    <div className="num">2</div>
                    <div><strong>Hotel pickup & payment</strong></div>
                  </div>
                  <div className="co-card__body">
                    <div className="field">
                      <label>Hotel name or area</label>
                      <div className="input">
                        <input type="text" name="hotel" value={formData.hotel} onChange={handleChange} required />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: 12 }}>Payment method</label>
                      <div className="radio-cards">
                        <label className="radio-card">
                          <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} />
                          <div>
                            <strong>Credit/Debit card</strong>
                            <small>Visa, Mastercard, UnionPay</small>
                          </div>
                        </label>
                        <label className="radio-card">
                          <input type="radio" name="paymentMethod" value="bank" checked={formData.paymentMethod === 'bank'} onChange={handleChange} />
                          <div>
                            <strong>Bank transfer</strong>
                            <small>Direct to our account</small>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="co-card">
                  <div className="co-card__head">
                    <div className="num">3</div>
                    <div><strong>Review & confirm</strong></div>
                  </div>
                  <div className="co-card__body">
                    <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                      <p><strong style={{ color: 'var(--text-primary)' }}>Booking summary</strong></p>
                      <p>Name: {formData.firstName} {formData.lastName}</p>
                      <p>Email: {formData.email}</p>
                      <p>Phone: {formData.phone}</p>
                      <p>Hotel: {formData.hotel}</p>
                      <p style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-default)' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Total: THB 3,590</strong>
                      </p>
                      <p style={{ fontSize: 12, marginTop: 12 }}>
                        By confirming, you agree to our terms and conditions. A confirmation email will be sent to {formData.email}.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button type="submit" className="btn btn--primary btn--block btn--lg" style={{ marginTop: 24 }}>
                {step < 3 ? 'Continue' : 'Confirm booking'}
              </button>
            </form>
          </div>

          <div className="summary">
            <div className="bw">
              <div className="bw__price">
                <div>
                  <span className="body-s muted">Total price</span>
                  <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--brand-primary)' }}>THB 3,590</div>
                </div>
              </div>
              <div>
                <div className="body-s muted" style={{ marginBottom: 8 }}>Tour</div>
                <div style={{ fontWeight: 600 }}>Speedboat & Kayak Day Trip</div>
              </div>
              <div>
                <div className="body-s muted" style={{ marginBottom: 8 }}>Date</div>
                <div style={{ fontWeight: 600 }}>Tomorrow, 10:00</div>
              </div>
              <div>
                <div className="body-s muted" style={{ marginBottom: 8 }}>Guests</div>
                <div style={{ fontWeight: 600 }}>2 adults</div>
              </div>
              <div style={{ paddingTop: 16, borderTop: '1px solid var(--border-default)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 8 }}>
                  <span>Tour price</span>
                  <span>THB 3,590</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span>Park fee</span>
                  <span className="success" style={{ color: 'var(--success)' }}>Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
