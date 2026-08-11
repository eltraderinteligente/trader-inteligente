---
title: 'Why indicators lag'
description: 'Every indicator is a function of past prices. That does not make them useless, but it explains why they always confirm after the fact and why I teach on a bare chart.'
pubDate: 2026-09-29
lang: en
translationKey: indicadores
author: 'Javier Andrade'
tags: ['indicators', 'market structure']
draft: true
---

There is a pattern that repeats whenever something is not working on the chart:
add another little window. One more average, one more oscillator, something to
confirm. The conclusion is always the same one — something is missing — and a
few months later price takes up less than half the screen without the decisions
having improved.

The question almost nobody asks along the way is where the contents of those
little windows are coming from.

## Where an indicator comes from

An indicator is a formula. It takes some numbers, does arithmetic with them and
returns another number that gets drawn on the screen. The numbers it takes are
past prices. In some cases past volume as well, but past either way.

From that comes a consequence that is not an opinion of mine: **an indicator
cannot contain information that price does not already contain.** It is a
transformation of the same data. There is no external source. Nobody phones the
market to ask what it is going to do. If what goes in is the last fifty
candles, everything that comes out the other side is made of those fifty
candles and nothing else.

And there is a second consequence, just as mechanical. Almost every indicator
averages, smooths, or compares against a lookback period. Averaging is, by
definition, mixing what is happening now with what happened before. A
twenty-period average moves more slowly than price because nineteen of those
twenty candles are history. That is not an implementation flaw somebody could
fix. It is what averaging means.

## A worked example with a moving average

Round numbers, so the shape of it is visible.

Imagine an instrument has spent weeks moving around 100. The average of the
last twenty candles is also 100, because all twenty candles are worth roughly
that. So far the average and the price say the same thing.

Now buyers turn up and in a single candle price goes from 100 to 110. What does
the average do? It recalculates: nineteen candles at 100 and one at 110. The
result is 100.5. Price is at 110 and the average says 100.5.

The average will only reach 110 once all twenty candles are worth 110 — twenty
candles later. In the meantime it climbs gradually, dragged along by price,
always behind. If your signal is "price crosses the average" or "the fast
average crosses the slow one", that cross happens once enough new candles have
entered the calculation. By construction, after the move.

This is not the moving average failing. This is the moving average doing
exactly what it was designed to do. You asked it for an average of the past and
it gave you an average of the past.

> [[IMAGE — screenshot missing: a chart with a moving average over price, with
> two marks, where the move actually began and where the crossover
> occurred.]]

## "Lagging" is not the same as "useless"

I want to be fair here, because a lot of people say this dismissively and I do
not think that is honest.

An indicator is a reasonable way to summarise something you would otherwise
have to eyeball. If what you want to know is whether price is above or below
where it has been trading on average for the last few months, a moving average
answers that in a second and answers it the same way every day. If what you
want to know is how much this instrument typically moves in a day — which
matters a great deal for deciding how much you risk and how far away you place
things — eyeballing it is slow and unreliable, and a volatility measure
summarises it well.

And there is one thing a formula does better than you do: it is consistent. The
formula gives you the same number today that it will in six months. Your eye
does not. Your eye changes depending on how you slept, on what you read that
morning, and above all on whether you have a position open.

They can be used well, and where that happens three things tend to coincide:
knowing exactly what is inside the formula, using it to summarise rather than
to decide, and keeping the decision somewhere else.

## The real objection

Lag is not my main objection. My objection is a different one, and it is less
comfortable: **an indicator hides the thing it is made of.**

When you draw an average over price, what you see is a smooth line. The twenty
candles that produced that line are still there, but visually they have been
replaced by it. For someone who can already read those candles, that is a
saving of effort. For someone who cannot yet, it is a change of subject: they
learn to read the indicator instead of learning to read price.

The symptom is easy to spot. Somebody tells you without hesitating that RSI is
at 30, but if you ask whether the last low finished above or below the previous
low, they have to go and check. They know the reading. They do not know the
thing.

The second symptom arrives later. When the indicator fails — and it will,
because it is an average of the past and the past runs out — that person has
nothing underneath to fall back on. They never learned what was underneath.

## Why I teach on a bare chart

It is not that indicators are forbidden, or that you have to pick a side. What
anyone ends up having on their screen is their own business.

I teach on a bare chart as a matter of order. Structure — the sequence of highs
and lows we went through in the earlier posts — is the raw material. An
indicator is processed material. It is fairly easy to understand something
processed once you know what it is made of, and close to impossible the other
way round.

When somebody can read structure unaided, adding an indicator becomes a
judgement they are equipped to make: they know what that formula sees and what
it does not. Before that, adding one just covers everything up.

## What to do with this in the coming week

If you use an indicator, do not throw it out. Do this instead:

1. Open a chart you know well, with the indicator you normally use on it.
2. Take it off. Spend a few days looking at price alone and marking structure,
   the way we did in the earlier posts.
3. Put it back. Now walk through the last few signals it gave and, for each
   one, ask what price had already done before the signal appeared.
4. Measure that gap. Not to prove the indicator is worthless, but to see with
   your own eyes how large the delay is and decide what it is worth to you.

It is an afternoon's work and it leaves you with your own opinion instead of
mine.

The next post is about a very common question, one with a considerably less
comfortable answer: how long it really takes to learn to trade.

---

Nothing in this post is a recommendation to buy or sell any instrument. It is
educational material. Trading the markets involves the risk of loss.
