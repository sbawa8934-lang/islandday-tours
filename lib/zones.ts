import type { PickupZone, Hotel } from './types';

export const ZONES: PickupZone[] = [
  { name: 'Bophut', time: '07:30', fee: 0 },
  { name: 'Chaweng', time: '07:40', fee: 0 },
  { name: 'Chaweng Noi', time: '07:40', fee: 0 },
  { name: 'Choeng Mon', time: '07:35', fee: 0 },
  { name: 'Lamai', time: '07:50', fee: 0 },
  { name: 'Mae Nam', time: '07:20', fee: 0 },
  { name: 'Bang Rak / Big Buddha', time: '07:30', fee: 0 },
  { name: 'Bang Por', time: '07:15', fee: 0 },
  { name: 'Nathon', time: '07:00', fee: 0 },
  { name: 'Lipa Noi', time: '07:00', fee: 0 },
  { name: 'Hua Thanon', time: '07:55', fee: 0 },
  { name: 'Plai Laem', time: '07:35', fee: 0 },
  { name: 'Ban Tai', time: '07:25', fee: 0 },
  { name: 'Laem Yai / Bang Makham', time: '07:10', fee: 0 },
  { name: 'Na Mueang (inland)', time: '07:45', fee: 0 },
  { name: 'Taling Ngam', time: '06:50', fee: 300 },
  { name: 'Laem Set', time: '07:55', fee: 300 }
];

export const STAYS: Hotel[] = [
  { name: 'Coral Bay Resort', zone: 'Chaweng Noi' },
  { name: 'Coral Cove Villas', zone: 'Lamai' },
  { name: 'Coral Garden Hostel', zone: 'Bophut' },
  { name: 'Palm Shore Beach Hotel', zone: 'Chaweng' },
  { name: 'Fisherman\'s Village Boutique', zone: 'Bophut' },
  { name: 'Silver Sands Bungalows', zone: 'Lamai' },
  { name: 'Mae Nam Garden Resort', zone: 'Mae Nam' },
  { name: 'Big Buddha Bay Villas', zone: 'Bang Rak / Big Buddha' },
  { name: 'Choeng Mon Cliff Hotel', zone: 'Choeng Mon' },
  { name: 'Sunset Hills Pool Villa', zone: 'Taling Ngam' },
  { name: 'Nathon Harbour Inn', zone: 'Nathon' },
  { name: 'Lipa Lodge', zone: 'Lipa Noi' }
];
