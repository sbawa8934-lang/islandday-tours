import type { Currency } from './types';
import { SITE } from './site';

export function formatMoney(thb: number, currency: Currency, options?: { from?: boolean }): string {
  if (thb === 0) return 'Free';
  const rate = SITE.rates[currency] || 1;
  const value = thb * rate;
  const isWholeNumber = currency === 'THB' || currency === 'INR';
  const formatted = isWholeNumber
    ? Math.round(value).toLocaleString('en-US')
    : value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return (options?.from ? 'from ' : '') + SITE.symbols[currency] + formatted;
}

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function defaultWaMessage(): string {
  return 'Hi IslandDay! I have a question about your tours.';
}
