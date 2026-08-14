# Blog schedule and chart list

The ten posts are written in both languages. They are released one at a time,
on the dates below.

## How a post goes live

Two things have to be true, and neither happens on its own:

1. `draft: false` in **both** the Spanish and the English file.
2. The publication date has passed.

The date check is in `src/lib/content.ts`. It is a safety net, not a timer —
the site is a set of finished files, so a post whose date passes overnight
does **not** appear by itself. Somebody has to rebuild the site, which happens
when a change is pushed to GitHub.

**In practice this means no post can reach a reader unless Javier has asked
for it.** That is deliberate. Every post teaches his method under his name, so
he reads it before it is public.

## Order of release

| Date | Post | Reviewed | Chart | Live |
| --- | --- | --- | --- | --- |
| 11 Aug 2026 | What is market structure? | — | needed | **yes** |
| 18 Aug 2026 | What a swing is and how to spot one | no | needed | no |
| 25 Aug 2026 | Swing structure and internal structure | no | needed | no |
| 1 Sep 2026 | How to know when a trend is really broken | no | needed | no |
| 8 Sep 2026 | Multiple timeframes | no | needed | no |
| 15 Sep 2026 | Supply and demand: what a zone is | no | needed | no |
| 22 Sep 2026 | What to do when the market has no trend | no | needed | no |
| 29 Sep 2026 | Why indicators lag | no | needed | no |
| 6 Oct 2026 | How long does it really take to learn to trade? | no | none | no |
| 13 Oct 2026 | Setting up TradingView from scratch | no | 2 needed | no |

The eleventh file in each language, `example-template` /
`ejemplo-plantilla`, is a blank template for writing future posts. It is not a
post and must never be published.

## Charts each post needs

Every chart below is described in the post itself as a comment, at the exact
point where it belongs. The comments are hidden from readers.

Nothing here needs to be pretty. A screenshot with lines drawn on it by hand
is worth more than a polished graphic, because it shows the thing being
taught rather than decorating the page.

1. **What is market structure?** — one chart with the highs and lows marked by
   hand, showing all three cases: uptrend, downtrend, range.
2. **What a swing is** — the same stretch of chart twice. On top, every minor
   spike marked. Underneath, only the swings that pass the rule.
3. **Swing structure and internal structure** — a clear up-leg with the two
   swing points marked in one colour and, inside that leg, the internal
   sequence marked in another, showing the lower internal high and the break
   of the internal low.
4. **When a trend is really broken** — two cases side by side. Left: a deep
   pullback that still respects the previous low. Right: the complete break
   sequence, a high that falls short and then the loss of the low.
5. **Multiple timeframes** — the same stretch of price on two timeframes side
   by side, with the pullback marked on the higher one and opened out as a
   full trend on the lower one.
6. **Supply and demand** — a well-marked zone: the base of the move as a
   rectangle, the fast move leaving it. Next to it, the same situation marked
   badly with a single line.
7. **When the market has no trend** — an uptrend turning into a range, with
   the points marked, the last two highs level with each other and the two
   lows the same, before the box becomes obvious.
8. **Why indicators lag** — a chart with a moving average over price, with two
   marks: where the move actually began, and where the crossover occurred.
9. **How long it takes to learn** — no chart.
10. **Setting up TradingView** — two images. First, the same instrument twice:
    the chart as it arrives by default, and the chart once cleaned up. Second,
    the same instrument on a daily chart under two different timezones, so it
    is visible that the candles are not the same.

## How to send them

- **PNG**, straight from TradingView.
- **As wide as the screen allows.** Roughly 1600 pixels across or more. A
  narrow screenshot goes blurry when the page stretches it.
- **One instrument, one idea.** Whatever the post is about should be the only
  marked-up thing on the chart.
- **No account details visible.** No order panel, no balance, no watchlist
  showing positions. Crop them out or hide them before capturing.
- **Any instrument.** It does not matter which market, as long as the shape
  being taught is clearly there.

Send the file and say which post it belongs to. Sizing, the alt text for
screen readers, and placement in the page are handled from there.
