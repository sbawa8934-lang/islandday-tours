import type { Tour } from './types';

export const TOURS: Tour[] = [
  {
    slug: 'speedboat-kayak-day-trip',
    title: 'Speedboat & Kayak Day Trip',
    badge: 'Best seller',
    type: 'speedboat',
    g: 0,
    duration: '8 hours',
    hours: 8,
    crossing: '~1 hr',
    group: 'Up to 35',
    groupMax: 35,
    kayak: true,
    parkFee: false,
    lunch: true,
    pickup: true,
    rating: 4.7,
    reviews: 137,
    price: 1795,
    child: 1595,
    islands: ['koh-samui'],
    tags: ['fast', 'kayaking'],
    summary: '[Short, honest summary — the fastest way to see the park with a proper kayak session included.]',
    highlights: [
      'One-hour crossing — more time in the park',
      'Lagoon viewpoint and island summit climb',
      'Kayak and snorkel gear included in the price'
    ]
  },
  {
    slug: 'big-boat-island-cruise',
    title: 'Big Boat Island Cruise',
    badge: 'Best value',
    type: 'bigboat',
    g: 1,
    duration: '8–9 hours',
    hours: 8.5,
    crossing: '~90 min',
    group: 'Up to 120',
    groupMax: 120,
    kayak: false,
    parkFee: false,
    lunch: true,
    pickup: true,
    rating: 4.6,
    reviews: 128,
    price: 1245,
    child: 995,
    islands: ['koh-samui', 'koh-phangan'],
    tags: ['calm', 'family', 'value'],
    summary: '[Lowest price and the steadiest ride — lots of deck space and shade. Kayaking is an optional extra.]',
    highlights: [
      'Lowest starting price of any tour',
      'Heavier hull — steadier if you get seasick',
      'Deck space and shade instead of a packed cabin'
    ]
  },
  {
    slug: 'vip-small-group-speedboat',
    title: 'VIP Small-Group Speedboat',
    badge: 'Small group',
    type: 'speedboat',
    g: 2,
    duration: '8 hours',
    hours: 8,
    crossing: '~50 min',
    group: 'Max 16',
    groupMax: 16,
    kayak: true,
    parkFee: true,
    lunch: true,
    pickup: true,
    rating: 4.8,
    reviews: 52,
    price: 4195,
    child: 3695,
    islands: ['koh-samui'],
    tags: ['small-group', 'fast', 'kayaking'],
    summary: '[Sixteen guests on a boat licensed for 25, its own route away from the convoy, park fee included.]',
    highlights: [
      'Sixteen guests maximum',
      'Its own route, away from the standard convoy',
      'Park fee already included in the price'
    ]
  },
  {
    slug: 'premium-speed-catamaran',
    title: 'Premium Speed Catamaran',
    badge: 'New',
    type: 'catamaran',
    g: 3,
    duration: '8–9 hours',
    hours: 8.5,
    crossing: '~1 hr',
    group: 'Up to 40',
    groupMax: 40,
    kayak: true,
    parkFee: false,
    lunch: true,
    pickup: true,
    rating: 4.8,
    reviews: 14,
    price: 2895,
    child: 2495,
    islands: ['koh-samui'],
    tags: ['calm', 'fast', 'kayaking'],
    summary: '[Twin hulls — a fast crossing without the monohull slam, with real seating and wide decks.]',
    highlights: [
      'Twin hulls: fast but smooth',
      'Wide decks and real seating',
      'Snorkel and kayak gear included'
    ]
  },
  {
    slug: 'sea-kayak-explorer',
    title: 'Sea Kayak Explorer',
    badge: '',
    type: 'bigboat',
    g: 4,
    duration: '9 hours',
    hours: 9,
    crossing: '~90 min',
    group: 'Up to 60',
    groupMax: 60,
    kayak: true,
    parkFee: true,
    lunch: true,
    pickup: true,
    rating: 4.8,
    reviews: 39,
    price: 2595,
    child: 2195,
    islands: ['koh-samui', 'koh-phangan'],
    tags: ['kayaking', 'family'],
    summary: '[Paddling is the day: several guided kayak sessions through tunnels, overhangs and a hidden lagoon.]',
    highlights: [
      'Several guided paddling sessions',
      'Tunnels, overhangs and a hidden lagoon',
      'Park fee and buffet lunch included'
    ]
  },
  {
    slug: 'sunset-sailing-junk',
    title: 'Sunset Sailing Junk',
    badge: '',
    type: 'sailing',
    g: 5,
    duration: '10–11 hours',
    hours: 10.5,
    crossing: '~2 hrs',
    group: 'Up to 50',
    groupMax: 50,
    kayak: false,
    parkFee: true,
    lunch: true,
    pickup: true,
    rating: 4.8,
    reviews: 32,
    price: 3495,
    child: 2995,
    islands: ['koh-samui'],
    tags: ['calm', 'small-group'],
    summary: '[A red-sailed junk that takes its time — breakfast, buffet lunch and drinks on board, park fee included.]',
    highlights: [
      'The most relaxed pace of any tour',
      'Breakfast, lunch and drinks on board',
      'Park fee included'
    ]
  }
];

export const TYPE_LABEL: Record<string, string> = {
  speedboat: 'Speedboat',
  bigboat: 'Big boat',
  catamaran: 'Catamaran',
  sailing: 'Sailing yacht',
  private: 'Private charter'
};

export function getTourBySlug(slug: string): Tour {
  return TOURS.find(t => t.slug === slug) || TOURS[0];
}
