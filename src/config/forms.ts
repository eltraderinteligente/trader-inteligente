import type { Locale } from './site';

/**
 * Where forms send their data.
 *
 * This site is static, so it has no server of its own to receive a form.
 * Two ways of solving that are supported:
 *
 * 'netlify'  — Netlify Forms. At deploy time Netlify scans the built HTML,
 *              finds any form carrying `data-netlify`, and starts collecting
 *              its submissions. They appear in the Netlify dashboard and, if
 *              notifications are switched on, by email. No account with a
 *              third party, no endpoint URL, and no JavaScript.
 *
 * 'endpoint' — the form posts to a URL from an external service (Formspree,
 *              Web3Forms…). Set the URL below. Kept as an escape hatch in
 *              case the site ever moves off Netlify.
 *
 * 'none'     — nothing is configured. Forms render disabled with a visible
 *              notice, so a broken form can never silently swallow an
 *              application.
 */
type Provider = 'netlify' | 'endpoint' | 'none';

export const FORMS: {
  provider: Provider;
  contactFormName: string;
  reviewFormName: string;
  waitlistFormName: string;
  questionFormName: string;
  contactAction: string;
  reviewAction: string;
} = {
  provider: 'netlify',

  /**
   * Netlify identifies a form by this name, and it is the label on the inbox
   * in the dashboard. Renaming one starts a new, empty inbox — the old
   * submissions stay under the old name rather than moving across.
   */
  contactFormName: 'application',
  reviewFormName: 'review',
  waitlistFormName: 'waitlist',
  questionFormName: 'question',

  // Only used when provider is 'endpoint'.
  contactAction: '',
  reviewAction: '',
};

/**
 * Where the browser lands after a successful submission.
 *
 * Netlify redirects here itself. Without it the student would see Netlify's
 * own generic confirmation page, which carries none of this site's wording
 * and looks like it belongs to somebody else.
 */
export const FORM_SUCCESS: Record<Locale, string> = {
  es: '/gracias',
  en: '/en/thank-you',
};

/** Whether a given form can accept a submission. */
export function isConfigured(action: string): boolean {
  if (FORMS.provider === 'netlify') return true;
  if (FORMS.provider === 'endpoint') return action.length > 0;
  return false;
}

/**
 * Bots fill in every field they find, including ones a human cannot see.
 * A submission carrying a value here is discarded rather than delivered.
 */
export const HONEYPOT_FIELD = 'company-website';
