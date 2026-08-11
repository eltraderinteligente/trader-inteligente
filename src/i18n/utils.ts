import es from './es.json';
import en from './en.json';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_TAGS,
  CURRENCY,
  SITE,
  type Locale,
} from '../config/site';
import { ROUTES, type RouteKey } from './routes';

// Typing `en` as `typeof es` makes a missing or misspelled key in en.json a
// build error rather than a string that silently renders in the wrong language.
const DICTIONARIES: Record<Locale, typeof es> = { es, en: en as typeof es };

type Leaves<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.${Leaves<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

export type TranslationKey = Leaves<typeof es>;

/**
 * Returns a `t()` function for the given language.
 *   const t = useTranslations('es');
 *   t('nav.courses')  ->  "Cursos"
 */
export function useTranslations(locale: Locale) {
  const dict = DICTIONARIES[locale];
  return function t(key: TranslationKey): string {
    const value = key
      .split('.')
      .reduce<unknown>((acc, part) => (acc as Record<string, unknown>)?.[part], dict);

    if (typeof value !== 'string') {
      throw new Error(`Missing translation for "${key}" in "${locale}"`);
    }
    return value;
  };
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Reads the language out of the current URL. Falls back to Spanish. */
export function getLocaleFromUrl(url: URL): Locale {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}

/** Strips the language prefix, e.g. "/en/courses" -> "/courses" */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && isLocale(segments[0])) segments.shift();
  return '/' + segments.join('/');
}

/** Dates rendered in the reader's language, e.g. "7 de agosto de 2026". */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Machine-readable date for <time datetime="..."> and structured data. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0]!;
}

export function formatCurrency(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(LOCALE_TAGS[locale], {
    style: 'currency',
    currency: CURRENCY[locale],
    // Whole prices render as "$497", prices with cents as "$497.50".
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * The <link rel="alternate" hreflang> set for a page, telling Google which
 * URL to serve to which language. `paths` maps each language to its URL.
 */
export function buildAlternates(paths: Record<Locale, string>) {
  const absolute = (p: string) => new URL(p, SITE.url).href;
  return [
    ...LOCALES.map((locale) => ({
      hreflang: locale,
      href: absolute(paths[locale]),
    })),
    // x-default is what Google serves when it has no better language match.
    { hreflang: 'x-default', href: absolute(paths[DEFAULT_LOCALE]) },
  ];
}

/** Static-page counterpart URLs, derived from the route map. */
export function alternatesForRoute(key: RouteKey): Record<Locale, string> {
  return { es: ROUTES[key].es, en: ROUTES[key].en };
}
