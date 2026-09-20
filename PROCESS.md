# Process overview

## What I built

Slop University's SLOP3422 (Bread): a fictional level-3 course site on the
provided Astro starter. Twelve weeks of Bakes, a matching lecture and slide
deck for each, three bake-off assessments with their own marking criteria,
staff pages for the two people who run it, and a policies page covering late
work, failed bakes, academic integrity, food safety and getting help — all
checked by the course's own spec tests against `dist/api/index.json`.

## How I got here

The content — all twelve sessions, twelve lectures and decks, the three
bake-offs, the homepage, staff and policies pages — was written in one long
session and never committed as it went. By the time I sat down to write this
file, the repo held three commits from the starter and spec setup and a full
day of uncommitted work on top. I decided not to write this account against
that history: instead I split the working tree into the commits it should
have been —
[`6f0c6c8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/6f0c6c8)
through
[`1d40f8e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/1d40f8e) —
grouped by what each one is (identity and config, curriculum, assessments and
people, homepage and policies), dated now rather than pretending they landed
incrementally. That's a reconstruction, not a true history, and I'd rather say
so here than have a commit log imply a process I didn't follow.

What was genuinely incremental is the harness and what came after it. CLAUDE.md
arrives with no rules in it, so the first real decision was what "done" means
for a page someone reads rather than code that compiles:
[`6fcd0ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/6fcd0ee)
commits to a rule that no reader-facing change is finished until an agent that
didn't write it has read the changed pages against the rest of the site. That
rule has a blind spot — one careful reader still shares whoever wrote the page's
assumptions about what needs explaining. So before treating the site as
shippable I ran five agents over the deployed pages as five different readers —
a skeptical overachiever, an anxious first-timer, a skimmer, a slop-detector,
a logistics nitpicker — under the same quote-or-say-nothing discipline as the
main review, and acted on what they actually found:
[`8107107`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/8107107)
glosses "poolish", "levain", "retard", "banneton" and "lame" where a
first-time reader meets them unexplained, gives the academic-integrity rule
the stated consequence its neighbours already have, and fixes the
"Assessment"/"Assessments" nav label so it agrees with the page it links to.

Three of those five findings — the gloss, the consequence, and the matching
label — are properties any future page can fail the same way, so they're now
permanent checks in the local `prose-coherence` agent, not just fixes to that
one page. Two findings I left alone on purpose: a repeated title shape across
the sessions index, and the exact tone of the late-work policy. Both are taste
calls that cut either way, and a permanent check for either would fight the
next person's judgement instead of catching a real drift — the same standard
the other three had to clear.

One more check felt worth doing before calling this done: the feedback on my
Assignment 1 submission flagged a component with a broken state on screen and
no visible interaction cue — this course's own HD artefact descriptor names
the same failure directly: holding up under the keyboard, a resize
mid-interaction, a slow connection. Each held: the theme's global
`:focus-visible` rule covers every button and link, the nav re-syncs its open
state on a breakpoint change (`Nav.astro:151-158,165`), and every image ships
as a small responsive avif with no external calls blocking the page. Verified,
not assumed.
