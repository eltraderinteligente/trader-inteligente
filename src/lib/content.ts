import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../config/site';

/** Files are stored as "<locale>/<slug>", so the slug is the last segment. */
export function slugOf(entry: { id: string }): string {
  return entry.id.split('/').pop()!;
}

const isPublished = import.meta.env.PROD
  ? (draft: boolean) => !draft
  : () => true; // drafts stay visible while developing

export async function getPosts(
  locale: Locale,
): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.lang === locale && isPublished(data.draft),
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getCourses(
  locale: Locale,
): Promise<CollectionEntry<'courses'>[]> {
  const courses = await getCollection(
    'courses',
    ({ data }) => data.lang === locale && isPublished(data.draft),
  );
  return courses.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Reviews are opt-in twice over: the author must have consented, and a human
 * must have set `approved: true`. Anything else never reaches a page.
 */
export async function getApprovedReviews(
  locale?: Locale,
): Promise<CollectionEntry<'reviews'>[]> {
  const reviews = await getCollection(
    'reviews',
    ({ data }) =>
      data.approved &&
      data.consentToPublish &&
      (locale === undefined || data.lang === locale),
  );
  return reviews.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * A review stores its course as a translationKey, so one review file points at
 * the same course in either language. Returns the course title in the requested
 * language, falling back to the key itself when the course is not published yet.
 */
export async function courseTitles(
  locale: Locale,
): Promise<Map<string, string>> {
  const courses = await getCollection(
    'courses',
    ({ data }) => data.lang === locale,
  );
  return new Map(courses.map((c) => [c.data.translationKey, c.data.title]));
}

/**
 * Finds the same post/course in the other language via its translationKey,
 * so the language switcher can link to it. Returns undefined when the
 * counterpart has not been written yet.
 */
export async function findTranslationSlug(
  collection: 'blog' | 'courses',
  translationKey: string,
  locale: Locale,
): Promise<string | undefined> {
  const entries = await getCollection(collection, ({ data }) => {
    const d = data as { lang: Locale; translationKey: string };
    return d.lang === locale && d.translationKey === translationKey;
  });
  return entries[0] ? slugOf(entries[0]) : undefined;
}
