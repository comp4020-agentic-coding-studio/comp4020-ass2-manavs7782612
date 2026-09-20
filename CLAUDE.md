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
