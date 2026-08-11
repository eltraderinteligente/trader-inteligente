import type { Locale } from '../config/site';

/**
 * Books Javier actually recommends.
 *
 * Deliberately empty until he names them. A reading list is an endorsement:
 * putting well-known titles here because they are well-known would be
 * inventing an opinion and attributing it to him.
 *
 * To add one, copy the shape below. `note` is the part that matters — it is
 * why he recommends it and who it suits, in his words. A list of titles with
 * no reason attached is worth nothing to a reader.
 *
 *   {
 *     title: 'Title of the book',
 *     author: 'Author name',
 *     asin: 'B00XXXXXXX',
 *     note: {
 *       es: 'Por qué lo recomiendo y para quién.',
 *       en: 'Why I recommend it and who it suits.',
 *     },
 *   }
 *
 * The order of the list is the order shown on the page. Put the one a
 * beginner should read first at the top.
 */
export interface Book {
  title: string;
  author: string;
  note: Record<Locale, string>;
  /**
   * The Amazon product code — the ten characters in the product URL after
   * `/dp/`. Example: amazon.com/dp/0071478345 → asin: '0071478345'.
   *
   * Optional. A book with no ASIN still shows, just without a link. That
   * matters: the list has to be able to hold a book Amazon does not sell,
   * otherwise the commission is quietly deciding what gets recommended.
   */
  asin?: string;
}

/**
 * The Amazon Associates tracking tag, e.g. 'eltraderintel-20'.
 *
 * Empty on purpose — Javier has to apply for the programme himself and
 * Amazon only approves sites that are already live. Nothing here may be
 * invented, and a wrong tag silently sends the commission to a stranger.
 *
 * While this is empty, book links point at plain Amazon URLs with no tracking
 * and the disclosure text is hidden, because there is nothing to disclose yet.
 *
 * [[AMAZON — falta el tag de asociado. Se pega aquí después de que Amazon
 * apruebe la cuenta.]]
 */
export const AMAZON_TAG = '';

/** Whether affiliate links are switched on. Drives the disclosure text too. */
export const isAffiliate = AMAZON_TAG.length > 0;

/**
 * The Amazon marketplace used for links.
 *
 * One marketplace, not one per country. An Associates tag is issued per
 * marketplace: an amazon.com tag earns nothing on amazon.es or amazon.com.mx.
 * Sending everyone to amazon.com means a reader in Mexico may see a shipping
 * cost that makes no sense — which is why the page says plainly where the
 * link goes, rather than pretending it adapts.
 */
const MARKETPLACE = 'https://www.amazon.com';

/**
 * The URL for a book, or null if it has no ASIN.
 *
 * The tag is appended only when one exists. Amazon requires the tag be in the
 * URL for the sale to be credited — there is no cookie set by visiting the
 * site itself.
 */
export function bookLink(book: Book): string | null {
  if (!book.asin) return null;
  const base = `${MARKETPLACE}/dp/${book.asin}`;
  return isAffiliate ? `${base}?tag=${AMAZON_TAG}` : base;
}

export const BOOKS: Book[] = [];
