/**
 * Where forms send their data.
 *
 * This site is static, so it has no server of its own to receive a form.
 * The destination is a URL given to you by whichever form service you pick
 * (Netlify Forms, Formspree, Web3Forms…). Phase 9 walks through choosing one.
 *
 * Until a real URL is set, forms render in a disabled state with a visible
 * notice, so a broken form can never silently swallow a student's review.
 */
export const FORMS = {
  // [[REVIEW FORM ENDPOINT — needs the URL from your form service]]
  reviewAction: '',
  // [[CONTACT FORM ENDPOINT — needs the URL from your form service]]
  contactAction: '',
} as const;

export function isConfigured(action: string): boolean {
  return action.length > 0;
}

/**
 * Bots fill in every field they find, including ones a human cannot see.
 * A submission carrying a value here is discarded by the form service.
 */
export const HONEYPOT_FIELD = 'company-website';
