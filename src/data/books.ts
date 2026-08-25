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
 * The Amazon Associates tracking tag for the amazon.com store.
 *
 * Javier's own, taken from his Associates account. The `-20` on the end is the
 * suffix Amazon adds itself for the United States store — a tag for amazon.es
 * or amazon.com.mx would end differently and would earn nothing here.
 *
 * Setting this to a non-empty value is what switches the whole affiliate layer
 * on: the disclosure paragraph appears above the list and every link is marked
 * as an affiliate link. Empty it again and the site goes back to plain Amazon
 * URLs with no tracking and no disclosure, because there is then nothing to
 * disclose.
 *
 * It is not a secret. It travels in the URL of every link on the page, so it
 * belongs in the code rather than in an environment variable.
 */
export const AMAZON_TAG = 'eltraderintel-20';

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

/**
 * Ordered for a beginner reading top to bottom: the readable ones first, the
 * reference works in the middle, the hardest last.
 *
 * The notes describe what each book is and who it suits. They deliberately do
 * not say "this one changed how I trade" or anything else in the first
 * person, because that is Javier's to say and he has not said it yet about
 * every title here. Any book he has genuinely worked through should get its
 * note rewritten in his own voice — that is worth far more to a reader than a
 * neutral description.
 *
 * No ASINs yet. The code for one is ten characters out of an Amazon URL, and
 * a wrong one sends a reader to the wrong product — sometimes to a different
 * book with a similar name. They get filled in by copying the real URLs, not
 * from memory.
 */
export const BOOKS: Book[] = [
  {
    title: 'Reminiscences of a Stock Operator',
    author: 'Edwin Lefèvre',
    asin: '0471770884',
    note: {
      es: 'Publicado en 1923 y todavía se cita, porque lo que describe no es una técnica sino cómo se comporta la gente cuando hay dinero de por medio. Se lee como una novela. Es el más fácil de la lista para empezar.',
      en: 'Published in 1923 and still quoted, because what it describes is not a technique but how people behave when money is involved. It reads like a novel. The easiest one here to start with.',
    },
  },
  {
    title: 'Trading in the Zone',
    author: 'Mark Douglas',
    asin: '0735201447',
    note: {
      es: 'Sobre la parte psicológica: por qué alguien que sabe lo que tiene que hacer acaba haciendo otra cosa delante de la pantalla. Es el libro de disciplina que casi todo el mundo en esto acaba citando.',
      en: 'About the psychological side: why someone who knows what to do ends up doing something else once they are in front of the screen. It is the discipline book almost everyone in this field ends up citing.',
    },
  },
  {
    title: 'Technical Analysis of the Financial Markets',
    author: 'John J. Murphy',
    note: {
      es: 'El manual de referencia, y se nota: es denso y no se lee de una sentada. Sirve para consultar cuando aparece un concepto que no conoces, más que para leer de principio a fin. Hay edición en español.',
      en: 'The reference textbook, and it reads like one: dense, and not something to get through in one sitting. It works better as something to look things up in than as a book to read cover to cover.',
    },
  },
  {
    title: 'Market Wizards',
    author: 'Jack D. Schwager',
    note: {
      es: 'Entrevistas con operadores que usan métodos que se contradicen entre sí y a los que les fue bien igualmente. Es útil precisamente por eso: deja claro que no hay un único camino correcto, algo que cuesta ver cuando se empieza.',
      en: 'Interviews with traders whose methods contradict one another and who did well anyway. That is exactly what makes it useful: it makes clear there is no single right way, which is hard to see when you are starting.',
    },
  },
  {
    title: 'The Daily Trading Coach',
    author: 'Brett N. Steenbarger',
    note: {
      es: 'Psicología práctica repartida en 101 capítulos cortos, pensados para leer uno al día. Encaja bien con alguien que está haciendo ejercicios cada semana y quiere algo corto entre medias.',
      en: 'Practical psychology split into 101 short chapters, meant to be read one a day. It suits someone working through exercises each week who wants something short in between.',
    },
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    note: {
      es: 'No es un libro de trading y por eso está aquí. Explica por qué el cerebro toma malas decisiones cuando hay incertidumbre y dinero de por medio, que es exactamente la situación en la que vas a estar. Escrito por un premio Nobel de economía.',
      en: 'Not a trading book, which is why it is on the list. It explains why the brain makes poor decisions under uncertainty when money is involved, which is precisely the situation you will be in. Written by a Nobel laureate in economics.',
    },
  },
  {
    title: 'Trading Price Action Trends',
    author: 'Al Brooks',
    note: {
      es: 'Lo más cercano a estructura de mercado que hay publicado. Aviso: es genuinamente difícil de leer, incluso para gente con experiencia. Déjalo para el final, y no lo cojas como primer libro.',
      en: 'The closest thing in print to market structure. A warning: it is genuinely hard reading, even for people with experience. Leave it until last, and do not make it your first book.',
    },
  },
];
