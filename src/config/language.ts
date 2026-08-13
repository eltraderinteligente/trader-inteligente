/**
 * Where the visitor's language choice is remembered, in their own browser.
 *
 * Written by LanguageSwitcher when someone clicks ES or EN, and read by
 * LanguagePreference on the homepage. Named in one place because a typo in
 * either half would silently break the other: the choice would be saved and
 * then never found, and the site would keep guessing.
 *
 * This is a preference, not personal data — it holds 'es' or 'en' and nothing
 * else — which is why it needs no cookie banner consent.
 */
export const LANG_PREFERENCE_KEY = 'lang-preference';
