# The email list — which service, and the rules that come with it

The forms are built. They post to whatever URL you paste into
`src/config/email.ts`. This document is about which service gives you that URL,
and about four legal or technical requirements that apply no matter which one
you pick.

Prices below change often. Treat them as "the right order of magnitude" and
check the current page before you sign up.

---

## First: what "double opt-in" means, and why it is switched on

Someone types their email into your form. **Single opt-in** adds them to the
list immediately. **Double opt-in** sends them one email that says "click here
to confirm", and until they click, they are not on the list.

It feels like friction and it is — you lose roughly 10–20% of signups. It is
still the right setting here, for three reasons:

1. **Anyone can type anyone's address into a form.** Without confirmation, a
   bored person can sign your business up to send mail to someone who never
   asked. That is the exact thing spam law is about.
2. **Typos poison your list.** `gmial.com` addresses bounce, and a high bounce
   rate is what makes Gmail start sending your real emails to spam.
3. **Under GDPR you must be able to prove consent.** A confirmation click,
   timestamped by your provider, is that proof. A form submission alone is
   weaker.

The forms already tell people this will happen, in both languages, so the
confirmation email is not a surprise that gets marked as spam.

---

## The three services

### Kit (formerly ConvertKit) — my recommendation

Built specifically for people who sell courses and digital products to an
audience. Not a general marketing tool that happens to do email.

**What it costs.** Free up to around 10,000 subscribers, which you are unlikely
to exceed for a long time. The free tier covers forms and one-off broadcasts.
**Automated sequences** — the "free class → three follow-up emails → course
offer" chain — generally require the paid plan, roughly $29/month at 1,000
subscribers, rising with list size.

**Why it fits this business.** Your funnel is: someone watches the free class,
gets a few emails that teach something real, and eventually buys a course. Kit
is organised around exactly that. Tags let you mark who watched the free class
versus who bought, and stop selling a course to someone who already owns it —
which sounds minor and is the difference between an audience that stays and one
that unsubscribes.

**Where it hurts.** The paid plan arrives sooner than you would like, because
sequences are the whole point and they are not free. The editor is plain — good
for deliverability, unimpressive if you want a designed newsletter.

### beehiiv — the alternative if the blog becomes the main engine

Newsletter-first. Built by people from Morning Brew, aimed at media businesses.

**What it costs.** Free up to around 2,500 subscribers. Paid from roughly
$49/month.

**Why you might prefer it.** It gives you a hosted newsletter website, a
built-in referral program ("get 3 friends to subscribe, unlock X"), and later
the ability to sell ad space or paid subscriptions. If the plan is that the
blog and newsletter become the business, this is the stronger tool.

**Where it hurts.** Weaker at the tag-and-segment work that selling courses
needs. The free tier is a quarter the size of Kit's. And it overlaps with this
website — you would be running a newsletter site next to a marketing site, with
two places that both look like "the brand".

### Resend — the wrong tool for this job

Worth explaining, because the name comes up constantly and it is genuinely
excellent at something else.

Resend is an **API for developers sending transactional email** — password
resets, receipts, "your order shipped". You write code that calls it. It is
fast, cheap (3,000 emails/month free), and has superb deliverability.

It is not a fit here because:

- **It needs a server.** This site is static by design. There is nothing to run
  the code that would call Resend.
- **There is no signup form to embed.** You would build the form, the storage,
  the confirmation flow and the unsubscribe page yourself.
- **There is no automation builder.** "Send email 2 three days after email 1"
  is something you would have to write and host.

Choosing Resend means becoming your own email platform. If a developer told you
it's cheaper, they are right about the invoice and wrong about the total cost.

---

## Side by side

| | Kit | beehiiv | Resend |
| :-- | :-- | :-- | :-- |
| Built for | Selling courses to an audience | Running a newsletter | Developers sending app email |
| Free up to | ~10,000 subscribers | ~2,500 subscribers | 3,000 emails/month |
| Paid from | ~$29/mo | ~$49/mo | ~$20/mo |
| Signup forms to embed | Yes | Yes | No |
| Automated sequences | Yes (paid) | Yes | No — you build them |
| Double opt-in | Built in | Built in | You build it |
| Needs a server | No | No | Yes |

**Pick Kit.** If in six months the newsletter is clearly the main thing and
courses are secondary, beehiiv is the one to move to — and moving is realistic,
because a list is a CSV of emails plus tags.

---

## Four things that apply whichever you choose

### 1. Send from your own domain, not Gmail

Emails must come from something like `hola@eltraderinteligente.com`, not a
Gmail address. Your provider will ask you to add three DNS records — **SPF**,
**DKIM** and **DMARC**. These are the internet's way of proving the email
really came from you and not from someone pretending to be you.

Since February 2024, Gmail and Yahoo **require** all three from anyone sending
to more than 5,000 addresses a day, and use them as a signal well below that
threshold. This is not optional polish; skipping it is how a business ends up
in the spam folder permanently. Every provider above walks you through it, and
it is a 15-minute job in the domain settings.

They also require your **spam complaint rate to stay under 0.3%** — roughly
three complaints per thousand emails. Double opt-in is the main thing that
keeps you under it.

### 2. Every commercial email needs a real physical postal address

This is US law (CAN-SPAM), it applies to you because you sell to US customers,
and it surprises everybody. Every marketing email must contain a valid physical
postal address for the business, visible in the footer.

You have three options: your home address (public forever — think hard), a PO
box, or a virtual business address (~$10–30/month). **Sort this out before the
first email goes out**, because it also has to match the entity you registered
the business under.

Fines under CAN-SPAM are per email, not per campaign.

### 3. Unsubscribing must be one click and must work within 10 days

CAN-SPAM gives you 10 business days to honour an unsubscribe; Gmail's rules
require one-click unsubscribe in the email header. All three providers handle
this automatically — the thing that breaks it is exporting your list and
mailing people from somewhere else, which quietly drops the unsubscribes.

### 4. GDPR applies to your Spanish-speaking readers in Spain, and to any EU visitor

You are aiming at the US and Latin America, but a Spanish-language site will
pick up readers in Spain, and that is enough. What it requires:

- **Consent must be an active choice.** No pre-ticked boxes. The forms are
  built this way and the checkbox is required.
- **Consent must be specific.** "I agree to receive emails with lessons,
  articles and news about new courses" is specific. "I agree to the terms" is
  not, which is why the two are separate.
- **You must be able to prove when consent was given.** Your provider stores
  this. Do not lose it in a migration.
- **People can ask for their data or ask to be deleted.** All three providers
  have a button for this.
- **Your privacy policy must say who you are, what you collect, why, and how
  long you keep it.** That page is still a placeholder — Phase 8 flags it for
  the lawyer review it needs.

---

## What is already built

- `src/config/email.ts` — three lists (masterclass, guides, newsletter), each
  with a **separate endpoint per language**. Two lists rather than one
  language-tagged list, because "send this sequence to this list" is easy in
  every provider and "send it conditionally" is not.
- `src/components/EmailSignup.astro` — the form. Consent checkbox unticked and
  required, honeypot field against bots, a hidden `lang` field, and the
  double-opt-in warning shown before submitting. Renders fully disabled with a
  visible notice until an endpoint exists.
- Live in three places: the free masterclass page, the guides page, and the
  footer of every page.

Once you have an account, each list gives you an embed or form-action URL.
Paste it into `src/config/email.ts` and the forms switch on. Nothing else
changes, and no API key goes into this repository.
