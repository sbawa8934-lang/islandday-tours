'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
  };

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">Contact</span>
          </nav>
          <h1 className="h1">Get in touch</h1>
          <p>Questions about tours, group bookings or anything else? We&apos;re here to help.</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-layout">
          <div>
            <h2 className="h2" style={{ marginBottom: 32 }}>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="field" style={{ marginBottom: 20 }}>
                <label>Your name</label>
                <div className="input">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label>Email</label>
                <div className="input">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="field" style={{ marginBottom: 20 }}>
                <label>Message</label>
                <textarea className="ta" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--lg">Send message</button>

              {submitted && (
                <div className="success-box is-visible">
                  <Icon name="check" size={24} className="success" />
                  <span>Thanks! We&apos;ll reply within 24 hours.</span>
                </div>
              )}
            </form>
          </div>

          <div className="contact-card">
            <h3 className="h5" style={{ marginBottom: 24 }}>Contact info</h3>
            <ul className="contact-info">
              <li>
                <Icon name="pin" size={16} className="brand" />
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>Office address</strong>
                  <small>123 Beach Road, Koh Samui, Surat Thani 84140, Thailand</small>
                </div>
              </li>
              <li>
                <Icon name="phone" size={16} className="brand" />
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>Phone</strong>
                  <a href="tel:+66000000000">+66 00 000 0000</a>
                </div>
              </li>
              <li>
                <Icon name="mail" size={16} className="brand" />
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>Email</strong>
                  <a href="mailto:hello@islandday.example">hello@islandday.example</a>
                </div>
              </li>
              <li>
                <Icon name="chat" size={16} className="brand" />
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>WhatsApp</strong>
                  <a href="https://wa.me/66000000000">Message us on WhatsApp</a>
                </div>
              </li>
              <li>
                <Icon name="clock" size={16} className="brand" />
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>Hours</strong>
                  <small>Daily 07:00–22:00 (GMT+7)</small>
                </div>
              </li>
            </ul>

            <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--border-default)' }}>
              <h4 className="h5" style={{ marginBottom: 12 }}>Quick links</h4>
              <Link href="/tours" className="row" style={{ justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
                <span>All tours</span>
                <Icon name="chevR" size={16} />
              </Link>
              <Link href="/compare" className="row" style={{ justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
                <span>Compare tours</span>
                <Icon name="chevR" size={16} />
              </Link>
              <Link href="/guide" className="row" style={{ justifyContent: 'space-between', padding: '8px 0', fontSize: 14 }}>
                <span>Park guide</span>
                <Icon name="chevR" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
