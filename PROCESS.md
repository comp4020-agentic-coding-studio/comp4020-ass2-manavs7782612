# Process overview

## What I built

Slop University's SLOP3422 (Bread): a fictional level-3 course site on the
provided Astro starter. Twelve weeks of Bakes, a matching lecture and slide
deck for each, three bake-off assessments with their own marking criteria,
staff pages for the two people who run it, and a policies page covering late
work, failed bakes, academic integrity, food safety and getting help — all
checked by the course's own spec tests against `dist/api/index.json`.

## How I got here

I asked for a plan before any content: build a twelve-week bread course on
this template, with "the plan should trigger separate agents for each week's
content" so "each task is executed by a different agent." Plan Mode returned
a frozen manifest first — twelve breads in a lean-to-unleavened arc, three
bake-offs, two staff, and the exact files each page would touch — so agents
could run against disjoint files without agreeing mid-flight. That wave
launched eighteen agents: one per week, one per bake-off, one for staff and
portraits, one for the homepage, one for the shared listing pages. Eighteen
writers, however consistent on the facts, are not one writer choosing when
to vary a sentence shape — that risk of confident, superficially-correct
sameness is why the manifest wasn't the last check.

None of it was committed as it went — the repo held three starter/spec
commits and a day of uncommitted work on top. Rather than write this account
against that history, I split the tree into the commits it should have
been —
[`6f0c6c8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/6f0c6c8)
through
[`1d40f8e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/1d40f8e) —
grouped by what each one is, dated now rather than pretending they landed
incrementally. That's a reconstruction, not a true history, and I'd rather say
so than let the commit log imply otherwise.

What caught that risk — and was genuinely incremental — is the harness and
what came after. CLAUDE.md arrives with no rules, so the first decision was
what "done" means for a page someone reads rather than code that compiles:
[`6fcd0ee`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/6fcd0ee)
commits to a rule that no reader-facing change is finished until an agent
that didn't write it has read the changed pages against the rest of the
site. That rule has a blind spot: one careful reader still shares the page's
own assumptions about what needs explaining. So before shipping I ran five
agents over the deployed pages as a skeptical overachiever, an anxious
first-timer, a skimmer, a slop-detector, and a logistics nitpicker — same
quote-or-say-nothing discipline, acting on what they found:
[`8107107`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-manavs7782612/commit/8107107)
glosses "poolish", "levain", "retard", "banneton" and "lame" where a
first-time reader meets them unglossed, gives the academic-integrity rule the
consequence its neighbours already have, and matches the
"Assessment"/"Assessments" nav label to the page it links to.

Three of those findings — the gloss, the consequence, the matching label —
are properties any future page can fail the same way, so they're now
permanent checks in `prose-coherence`, not just fixes to that page. Two I
left alone: a repeated title shape across the sessions index, and the
late-work policy's tone — taste calls where a permanent check would fight
the next person's judgement instead of catching real drift.

One more check felt worth doing: feedback on my Assignment 1 submission
flagged a component with a broken state and no interaction cue — this
course's HD artefact descriptor names the same failure: holding up under
the keyboard, a resize mid-interaction, a slow connection. Each held: the
theme's global `:focus-visible` rule covers every button and link, the nav
re-syncs its open state on a breakpoint change (`Nav.astro:151-158,165`),
and every image ships as a small responsive avif with no external calls
blocking the page. Verified, not assumed.
