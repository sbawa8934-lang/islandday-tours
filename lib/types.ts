export type Currency = 'THB' | 'USD' | 'EUR' | 'GBP' | 'INR';

export interface Tour {
  slug: string;
  title: string;
  badge?: string;
  type: 'speedboat' | 'bigboat' | 'catamaran' | 'sailing' | 'private';
  g: number;
  duration: string;
  hours: number;
  crossing: string;
  group: string;
  groupMax: number;
  kayak: boolean;
  parkFee: boolean;
  lunch: boolean;
  pickup: boolean;
  rating: number;
  reviews: number;
  price: number;
  child: number;
  islands: string[];
  tags: string[];
  summary: string;
  highlights: string[];
}

export interface PickupZone {
  name: string;
  time: string;
  fee: number;
}

export interface Hotel {
  name: string;
  zone: string;
}

export interface Review {
  initial: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  id?: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  g: number;
  description?: string;
  image?: string;
}

export interface SiteConfig {
  whatsapp: string;
  parkFee: { adult: number; child: number };
  rates: Record<Currency, number>;
  symbols: Record<Currency, string>;
}
