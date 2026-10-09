'use client';

import { useState } from 'react';
import { Icon } from './icons';

const FAQS = [
  {
    q: "Where do the tours leave from?",
    a: "Almost every tour departs from a pier on Koh Samui. A minivan collects you from your hotel inside the covered zones; your exact pickup time and pier are in your confirmation. Staying on Koh Phangan or Koh Tao? Read that island's departure guide first."
  },
  {
    q: "How do I book and pay?",
    a: "Choose a tour, pick a date, set the number of guests and pay online by card, Apple Pay or Google Pay. You get an instant confirmation email with the operator, date and inclusions in writing."
  },
  {
    q: "Can children join?",
    a: "Yes — lots of families do this trip. Minimum ages are set per boat and rough water can change what the crew allows. If comfort matters more than speed, pick a bigger boat."
  },
  {
    q: "What happens if the weather is bad?",
    a: "If the operator cancels for weather or safety you choose a new date or a full refund. Captains may also reorder stops on the day when wind or park instructions require it."
  },
  {
    q: "Is the national park fee included?",
    a: "Not always. On most tours the park fee (THB 300 adult / THB 150 child) is paid in cash on the day. The comparison table shows exactly which tours include it."
  }
];

interface FAQSectionProps {
  title?: string;
  showWhatsApp?: boolean;
}

export function FAQSection({ title = "Common questions", showWhatsApp = true }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section--muted">
      <div className="container">
        <div className="faq-layout">
          <div className="stack gap-16">
            <h2 className="h2">{title}</h2>
            {showWhatsApp && (
              <>
                <p className="secondary">Still unsure? Our team answers on WhatsApp daily 07:00–22:00.</p>
                <a className="btn btn--whatsapp" style={{ alignSelf: 'flex-start' }} href="#" data-wa>
                  <Icon name="chat" size={18} />
                  Chat on WhatsApp
                </a>
              </>
            )}
          </div>

          <div>
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openIndex === idx ? 'is-open' : ''}`}>
                <h3>
                  <button
                    className="faq-q"
                    aria-expanded={openIndex === idx}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    {faq.q}
                    <span className="faq-q__icon">
                      <Icon name="plus" size={16} />
                    </span>
                  </button>
                </h3>
                {openIndex === idx && (
                  <div className="faq-a">
                    <div>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
