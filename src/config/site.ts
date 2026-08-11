export const SITE = {
  // Used for sitemap, RSS, canonical and hreflang URLs. No trailing slash.
  // elsmartrader.com is registered too and redirects here; it must never be
  // set as the canonical URL or Google will see two sites with one set of pages.
  url: 'https://eltraderinteligente.com',
  name: 'El Trader Inteligente',
  // [[BUSINESS ENTITY — needs real legal entity name and jurisdiction]]
  legalEntity: '[[LEGAL ENTITY]]',
  email: '[[CONTACT EMAIL]]',
} as const;

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_TAGS: Record<Locale, string> = {
  es: 'es-419',
  en: 'en-US',
};

export const CURRENCY: Record<Locale, string> = {
  es: 'USD',
  en: 'USD',
};
