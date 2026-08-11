import type { Locale } from './site';

/**
 * Prices and checkout links — the only place in the site where either lives.
 *
 * No payment processor is wired into this code, and none should be. A "Buy"
 * button is just a link. Whoever you sell through (Whop, Kajabi, Stripe…) gives
 * you a checkout URL; you paste it here and the button starts working. Nothing
 * else in the site changes, and no secret key ever touches this repository.
 *
 * See docs/payment-options.md for how to choose. Until you have chosen, every
 * button renders in a visible "not on sale yet" state rather than a dead link.
 */
export interface Offer {
  /** Amount in the currency for that language. `null` = not decided yet. */
  price: number | null;
  /**
   * Where the button sends the buyer, per language. Kept separate because a
   * Spanish buyer dropped onto an English checkout page usually abandons it.
   */
  checkoutUrl: Record<Locale, string>;
}

/**
 * Keyed by the `offerId` in a course's frontmatter. Adding a course means
 * adding one entry here with the same id.
 */
export const OFFERS: Record<string, Offer> = {
  // Matches `offerId: placeholder` in the example course files.
  // [[OFFER — template. Rename this key to the real course offerId.]]
  placeholder: {
    // [[PRICE — needs a real decision]]
    price: null,
    // [[CHECKOUT URL — needs the link from your sales platform]]
    checkoutUrl: { es: '', en: '' },
  },
};

export function getOffer(offerId: string): Offer | undefined {
  return OFFERS[offerId];
}

/**
 * A button only goes live when both halves are real: a price to show and a
 * place to send the buyer. Half-configured means not for sale.
 */
export function isOnSale(offer: Offer | undefined, locale: Locale): boolean {
  return (
    offer !== undefined &&
    offer.price !== null &&
    offer.checkoutUrl[locale].length > 0
  );
}
