import type { Locale } from './site';

/**
 * Where email signups go.
 *
 * Same idea as src/config/forms.ts: this static site has no server, so the
 * form posts straight to whichever email provider you choose. That provider
 * gives you an embed URL per list; you paste it here.
 *
 * See docs/email-options.md for how to choose between them.
 */
export interface EmailList {
  /**
   * The form endpoint, one per language.
   *
   * Two separate lists, not one list with a language tag. A Spanish reader who
   * receives an English welcome sequence unsubscribes, and every provider makes
   * "send this sequence to this list" far easier than "send it conditionally".
   */
  action: Record<Locale, string>;
}

/**
 * One list per reason someone signed up. Keeping them apart is what lets you
 * send a follow-up only to the people who asked for that particular thing.
 */
export const EMAIL_LISTS = {
  // The waiting list in the footer: people who want to know when a place
  // opens. Deliberately not a newsletter — nothing is sent on a schedule, so
  // there is no content commitment attached to collecting these addresses.
  // [[EMAIL LIST — waitlist. Needs the embed URL from your email provider.]]
  waitlist: { action: { es: '', en: '' } },
} as const satisfies Record<string, EmailList>;

export type EmailListKey = keyof typeof EMAIL_LISTS;

export function listAction(key: EmailListKey, locale: Locale): string {
  return EMAIL_LISTS[key].action[locale];
}

export function isListConfigured(key: EmailListKey, locale: Locale): boolean {
  return listAction(key, locale).length > 0;
}
