# Your harness

## Every improvement ends with a prose review

The deliverable here is a website someone reads. Code that compiles and a page
that holds a reader are different achievements, and only one of them is checked
by `pnpm check`. So the last step of every improvement that touches
reader-facing prose is a review of that prose --- not a glance over the diff,
but a pass by an agent that reads the changed pages whole and judges them
against the pages around them.

Prose is anything a visitor meets: `src/content/**`, `src/pages/**` (including
copy inside `.astro`), `src/components/**`, `PROCESS.md` and `reflections/**`.

**The rule.** Do not call an improvement done until the `prose-coherence` agent
has read what changed and you have acted on what it found. Acting means fixing
what it quotes, or saying plainly in your closing message which findings you are
leaving and why. Report its verdict line either way.

**Why an agent and not a checklist.** Coherence is a property of the whole, and
the agent that just spent a turn writing a page is the worst possible judge of
whether that page reads well --- it knows what the page meant to say, so it reads
its own intent back into the text. A reader who has not seen the intent catches
what the author cannot.

**What the review is for.** Two questions, in this order. Does the change still
agree with everything else on the site --- the other collections, the nav, the
voice, the names things are called? And does a reader who does not have to keep
reading keep reading?

**Quote or say nothing.** The agent's findings name a file and line and quote
the text they are about. So do yours, when you report back. "The introduction
now reads better" is not a claim anyone can check; the sentence before and the
sentence after are.

This rule is enforced locally by a `Stop` hook in `.claude/`, which fingerprints
the prose files and blocks the end of any turn that changed them until the
review has run. `.claude/` is machine-local and gitignored --- the hook is the
enforcement, this file is the rule. The rule stands whether or not the hook is
loaded.

## The checklist was tested against five readers, not one

`prose-coherence` catches whether a page agrees with itself. It won't catch
whether an anxious beginner bounces off unglossed jargon, or a skimmer loses
the thread by session five, or a skeptic reads "assessed on its merits" as a
promise that "baking someone else's dough" carries no answering cost --- a
single review, however careful, shares whoever wrote the page's blind spots
and assumed vocabulary.

So before shipping, five agents read the deployed site as five different
students: a skeptical overachiever testing whether the bake-offs and the
twelve weeks actually escalate; an anxious first-timer testing whether jargon
lands where reassurance is supposed to; a skimmer giving each page fifteen
seconds; a slop-detector comparing all twelve sessions and all twelve
lectures side by side for templated filler; a logistics nitpicker
cross-referencing every week, date, weight and link. Same discipline as
`prose-coherence`: a finding is a quote and a file, or it isn't a finding.

Three of their findings were properties any future page can fail again, not
defects only that page had, so they're now permanent checks in
`prose-coherence`: a term used at a reader's first contact with a topic has
to carry its own meaning or gloss it; a policy that states a rule sits next
to what happens if it's broken, like its neighbours already do; a nav label
and the page it points to agree on the word and its number.

Two other findings didn't become rules --- a repeated title shape across the
sessions index, and the exact tone of the late-work policy --- because both
are taste calls that cut either way, and a permanent check would fight the
next person's judgement instead of catching a real drift.
