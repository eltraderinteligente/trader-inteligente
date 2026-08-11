# Taking payments — the decision, and how to set it up

This replaces the earlier version of this document, which compared course
platforms. That comparison assumed the site sold three self-paced courses. It
does not. It sells one thing: a live mentorship with four places.

**The decision: Stripe, no public buy button, monthly subscription.**

---

## Why Stripe and not PayPal

The product is billed monthly and continues month to month. That makes it a
subscription, not a sale, and Stripe handles subscriptions properly — including
a page where the student cancels by themselves, which matters legally as well as
practically.

PayPal is not useless here. Some Latin American buyers trust it and will not
type a card into a site they do not know. But it is weaker at recurring billing,
and receiving money is restricted or awkward in several Latin American
countries. It is a reasonable *second* option later. It is a poor only option.

## Why no buy button

There are four places. A public checkout means a stranger can pay at three in
the morning for a place that does not exist, and now there is a refund to
issue — the exact situation the month-to-month model was designed to avoid.

So the flow is:

1. Someone applies through the form on `/contacto` or `/en/contact`.
2. Javier reads it and replies. They talk.
3. If both agree, Javier sends **that one person** a Stripe payment link.

No price is charged anywhere on this website. Nothing on this site ever touches
a card.

---

## Setting up Stripe — what only Javier can do

**Nothing in this section produces anything that belongs in this repository.**
Do not paste an API key, a secret key, or a bank detail into any file here, and
do not send one in chat. None is needed. The only thing this project ever needs
from Stripe is a public payment link, and even that is not stored here — it is
sent by email to one person at a time.

### 1. Open the account

<https://dashboard.stripe.com/register>. Register as an **individual / sole
proprietor** and use the SSN, since there is no LLC yet. Payouts go to a
personal bank account. Stripe will ask for identity verification — a photo of a
driver's licence or passport.

### 2. Describe the business honestly

Stripe asks what you sell. Trading education is a category Stripe reviews more
carefully than average, and accounts in this niche do get frozen. The true
description is also the one that keeps the account:

> Live small-group education in reading price charts. Four students at a time,
> three months, sessions over video. No trading signals, no managed money, no
> performance claims.

Never describe it as anything about profit, income, or returns. The site backs
this up: a risk disclosure on every page, no earnings claims anywhere, a named
teacher with a real biography. That consistency is the account's protection.

### 3. Create the product and price

Products → Add product.

- Name: the mentorship, in whichever wording you prefer.
- Price: **USD 500**, **recurring**, **monthly**.

The price also appears on `/mentoria` — it is set in
`src/components/pages/Mentoring.astro`. If it ever changes, it has to change in
both places.

### 4. Create a payment link

Payment links → New. Choose the recurring price. Stripe gives a URL like
`https://buy.stripe.com/…` that can be sent to anybody.

Create **two** links, one per language — Stripe lets you set the checkout
language, and a Spanish-speaking student landing on an English checkout page
often abandons it.

### 5. Turn on the customer portal — do not skip this

Settings → Billing → Customer portal. Switch on **"Customers can cancel
subscriptions"**.

This is what makes the promise on the site true. `/mentoria` and the FAQ both
say a student can stop whenever they want. Federal law on recurring online
charges requires that cancelling be genuinely easy, and "email me and I'll
handle it" is not that. The portal link appears in every Stripe receipt.

### 6. Test it before it is real

Stripe has a test mode with fake card numbers. Run one subscription through it
and then cancel it from the customer portal, as if you were the student. Watch
what the emails say. That is the thing to check, because the emails are what a
student actually experiences.

---

## The four rules for recurring charges

These apply to anyone billing monthly online, and breaking them is where
complaints come from:

1. **Say clearly it repeats**, how much, and how often — before payment.
2. **Get a deliberate yes.** Not a pre-ticked box, not buried in terms.
3. **Make cancelling easy**, in roughly as few steps as signing up.
4. **Send a receipt** for every charge.

Stripe does 1, 3 and 4 for you once the portal is on. The site handles the rest:
the price block on `/mentoria` now states in both languages that the charge
renews monthly, that it can be cancelled by the student without asking, and
that the month they cancel is the last one billed.

---

## What it costs

**2.9% + $0.30** per US card. On one student at $500, that is $14.80.

Two things add to it, and both are common for Latin American students:

- Cards issued outside the US: **+1.5%**.
- Currency conversion: **+1%**.

Worst case is roughly 5.4% + $0.30 — about $27 on $500. There is no monthly fee
and no platform cut, because there is no platform.

---

## About using a personal account

This works and plenty of people start this way. Two things worth knowing.

**There is no separation.** As a sole proprietor, the business and Javier are
the same legal person. A chargeback, a dispute, or a lawsuit reaches personal
money and personal assets. An LLC is the normal fix, it costs about $125 a year
in Florida, and it is worth asking an accountant about before there are more
than a handful of students.

**Keep the money visibly separate anyway.** Even without an LLC, opening a
second personal checking account used only for this makes the bookkeeping
possible and the tax return far easier. Mixing it with grocery money is the
thing that becomes painful later, not the thing that is painful now.

**Tax.** Stripe reports payments received to the IRS and will send a 1099-K.
The income is reportable whether or not a form arrives. Self-employment tax
applies on top of income tax. This is an accountant question, not a web
question — and it is genuinely worth one hour of an accountant's time before
the first payment, not after.

---

## What exists on this site for all of this

- `src/components/ApplicationForm.astro` — the application form. Disabled with a
  visible notice until a form endpoint is set in `src/config/forms.ts`.
- `src/components/pages/Contact.astro` — the page it sits on, including the note
  explaining that nothing is paid there.
- `src/components/pages/Mentoring.astro` — the price, and the recurring-charge
  and cancellation wording.
- `/gracias` and `/en/thank-you` — kept for later. Stripe can redirect there
  after a successful payment; it is excluded from Google on purpose.

`src/config/offers.ts` and `src/components/PriceBlock.astro` are left over from
the three-course version of this site and are no longer used by any page. They
can be deleted once that is confirmed.

**No payment code, no API keys and no card handling exist anywhere in this
repository, and none should.**
