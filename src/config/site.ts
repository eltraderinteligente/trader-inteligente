export const SITE = {
  // Used for sitemap, RSS, canonical and hreflang URLs. No trailing slash.
  // elsmartrader.com is registered too and redirects here; it must never be
  // set as the canonical URL or Google will see two sites with one set of pages.
  url: 'https://eltraderinteligente.com',
  name: 'El Trader Inteligente',
  /**
   * Who the copyright and the legal pages belong to.
   *
   * A person, not a company: Javier operates under his own name and "El Trader
   * Inteligente" is the trading name, so the two are the same legal party. If a
   * company is ever registered — an LLC or similar — this becomes the company's
   * registered name, and the terms and privacy policy have to change with it,
   * because a contract signed with a company is not a contract with a person.
   */
  legalEntity: 'Javier Andrade',
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
