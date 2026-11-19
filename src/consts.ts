// Site-wide constants. GitHub username is 'thisisparth187' (set in
// astro.config.mjs too). If it is ever wrong, change it in both places.
// Everything else derives from these.
export const SITE_TITLE = 'Small Space Style';
export const SITE_TAGLINE = 'Home decor for small living rooms and rentals — honest picks, real measurements, no drilling required.';
export const SITE_DESCRIPTION =
  'Small-space home decor buying guides for renters and apartment living: sofas that actually fit, no-drill upgrades, washable rugs and rooms on a budget.';
export const SITE_AUTHOR = 'Parth';
export const SITE_URL = 'https://thisisparth187.github.io/small-space-style';
// Base path for a GitHub Pages *project* site. Change to '' if you move to a
// custom domain or a user site (thisisparth187.github.io).
export const SITE_BASE = '/small-space-style';

/** Prefix an internal path with the site base, e.g. url('/blog/') */
export const url = (path: string) =>
  `${SITE_BASE.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
