export const SITE = {
  // Used for sitemap, RSS, canonical and hreflang URLs. No trailing slash.
  // elsmartrader.com is registered too and redirects here; it must never be
  // set as the canonical URL or Google will see two sites with one set of pages.
  url: 'https://eltraderinteligente.com',
  name: 'El Trader Inteligente',
  /**
   * The name in the copyright line at the foot of every page.
   *
   * The trading name rather than Javier's own, because that is what a reader
   * recognises. It is only a credit line — where it actually matters who is
   * liable, the legal pages name the person, since "El Trader Inteligente" is
   * a name he trades under and not a registered company that could be sued in
   * its own right.
   *
   * If a company is ever registered — an LLC or similar — this becomes its
   * exact registered name, and the terms and privacy policy have to change
   * with it: a customer contracting with a company is not contracting with a
   * person, and the two carry different liability.
   */
  legalEntity: 'El Trader Inteligente',
} as const;

/**
 * There is deliberately no contact address here.
 *
 * An address printed on a public page is harvested by spam bots within days,
 * and the only cure is to abandon the address. Every route into the inbox on
 * this site is a form instead: the submission arrives by email, so the reply
 * still comes from a real person, but there is nothing on the page to scrape.
 */

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
