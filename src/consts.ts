export const SITE_TITLE = 'Small Space Style';
export const SITE_TAGLINE = 'Home decor for small living rooms and rentals — measurements first, useful picks, no drilling required.';
export const SITE_DESCRIPTION = 'Small-space home decor buying guides for renters: sofas that fit, no-drill upgrades, washable rugs and rooms on a budget.';
export const SITE_AUTHOR = 'Parth';
export const SITE_URL = 'https://thisisparth187.github.io/small-space-style';
export const SITE_BASE = '/small-space-style';
export const url = (path: string) => `${SITE_BASE.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
export const ROOM_TILES = [
  { label: 'Small living rooms', image: 'photo-1524758631624-e2822e304c36', credit: 'R ARCHITECTURE' },
  { label: 'Rental-friendly upgrades', image: 'photo-1497366811353-6870744d04b2', credit: 'Spacejoy' },
  { label: 'Washable rugs', image: 'photo-1540518614846-7eded433c457', credit: 'Sidekix Media' },
  { label: 'Warm minimal bedrooms', image: 'photo-1560185008-b033106af5c3', credit: 'Jonathan Borba' },
  { label: 'Entryways under $200', image: 'photo-1513694203232-719a280e022f', credit: 'Spacejoy' },
];
export const photoUrl = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
