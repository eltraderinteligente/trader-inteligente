import type { Locale } from '../config/site';

/**
 * The single source of truth for every URL on the site.
 *
 * Each key is a "page identity" that exists in both languages. The language
 * switcher uses these pairs to send a visitor to the same page in the other
 * language instead of dropping them on the homepage.
 *
 * To add a page: add one entry here, then create the two page files.
 */
export const ROUTES = {
  home: { es: '/', en: '/en' },
  mentoring: { es: '/mentoria', en: '/en/mentoring' },
  faq: { es: '/preguntas', en: '/en/faq' },
  guides: { es: '/recursos', en: '/en/resources' },
  tools: { es: '/calendario-economico', en: '/en/economic-calendar' },
  blog: { es: '/blog', en: '/en/blog' },
  reviews: { es: '/opiniones', en: '/en/reviews' },
  about: { es: '/sobre-mi', en: '/en/about' },
  contact: { es: '/contacto', en: '/en/contact' },
  thankYou: { es: '/gracias', en: '/en/thank-you' },
  waitlistConfirmed: { es: '/en-la-lista', en: '/en/on-the-list' },
  questionSent: { es: '/pregunta-enviada', en: '/en/question-sent' },
  riskDisclosure: { es: '/aviso-de-riesgo', en: '/en/risk-disclosure' },
  terms: { es: '/terminos', en: '/en/terms' },
  privacy: { es: '/privacidad', en: '/en/privacy' },
  cookies: { es: '/cookies', en: '/en/cookies' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

/** The URL for a page identity in a given language. */
export function route(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}

/**
 * Parent paths for dynamic pages, e.g. a blog post lives under /blog/<slug>
 * in Spanish and /en/blog/<slug> in English.
 */
export const DYNAMIC_PARENTS = {
  blogPost: 'blog',
} as const satisfies Record<string, RouteKey>;

export type DynamicKey = keyof typeof DYNAMIC_PARENTS;

/** The URL for a dynamic page, e.g. dynamicRoute('blogPost', 'es', 'velas') */
export function dynamicRoute(
  key: DynamicKey,
  locale: Locale,
  slug: string,
): string {
  return `${route(DYNAMIC_PARENTS[key], locale)}/${slug}`;
}
