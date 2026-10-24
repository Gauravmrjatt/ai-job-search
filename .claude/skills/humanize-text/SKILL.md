---
name: humanize-text
description: >
  Rewrites stiff, AI-sounding or corporate text into plain human prose. Removes em-dashes,
  cliches and filler, and replaces vague adjectives with measured facts. Use for READMEs,
  project descriptions, portfolio copy, cover letters, CV bullets, emails and any text where
  the voice should read like a person wrote it. Triggers on: humanize, make it sound human,
  rewrite this, remove em dashes, sounds like AI, too formal, tighten this copy, project
  description, README writing.
allowed-tools: Read, Glob, Grep, Edit, Write, Bash
framework_version: 1.0.0
---

# Humanize Text

Turn machine-flavoured prose into writing that sounds like a competent person typed it on purpose.

## Hard rules

1. **No em dashes.** Not `—`, not `–` used as a dash. Replace with a comma, a period, a colon, or two sentences. This is non-negotiable and applies to every output, including headings and table cells.
2. **No en dash ranges** where a plain word works. Write "3 to 5 days", not "3–5 days".
3. **No invented facts.** Every number, capability and comparison must be traceable to something you actually read: source, docs, config, or a measurement you ran. If you cannot verify it, cut it or describe the mechanism instead of the magnitude.
4. **No cliches.** Cut: "seamless", "robust", "powerful", "cutting-edge", "state of the art", "leverage", "utilize", "delve", "elevate", "unlock", "game changer", "passionate about", "in today's fast paced world", "it is worth noting".
5. **No empty superlatives.** "Blazing fast" and "highly scalable" mean nothing. Name the mechanism or give the number.
6. **No triads for rhythm.** AI text loves three-item lists that say the same thing. Keep one.
7. **No throat clearing.** Delete openers like "In this document we will explore", "Overall, it is important to understand that".

## Voice

- **Active and direct.** "The queue drains payouts in batches", not "payouts are drained by the queue".
- **Concrete nouns, plain verbs.** Prefer "sends", "writes", "checks", "retries" over "facilitates", "orchestrates", "handles".
- **Vary sentence length.** Short sentences land harder after a long one. Monotone rhythm is the clearest AI tell.
- **Write to one person.** Second person or first person. Never "one might observe".
- **Admit limits.** Saying "there is no backend, bookings are not persisted" reads as more credible than pretending.
- **Contractions are fine.** "It's" and "doesn't" beat "it is" and "does not" in almost every README.

## Turning features into honest numbers

Numbers make writing vivid. Fake numbers destroy credibility the moment someone checks. Measure, then state.

### What you may measure

| Claim type | How to get it | Example |
|---|---|---|
| Code size | `wc -l` over tracked source, excluding `node_modules`, `.next`, `dist`, lockfiles | "about 31,000 lines of TypeScript" |
| Endpoint count | count `router.get/post/...` or `app/api/**/route.ts` files | "107 HTTP endpoints" |
| Data model size | count `model X {` in Prisma schema, or `mongoose.model(` | "23 Prisma models" |
| Test coverage | count `*.test.js` / `*.spec.ts` files | "10 test files" |
| UI surface | count files under `components/` or `pages/` | "82 components" |
| Infrastructure | presence of `Dockerfile`, `docker-compose.yml`, `.github/workflows/` | "Dockerized, with CI" |
| Domain coverage | count enums or distinct resource route prefixes | "11 entities from enrolment to fee invoices" |

### What you may never invent

Traffic volumes ("10 million writes per day"), user counts, uptime, hash rates, latency, benchmark results, or "handles X requests". Nothing in a repository proves throughput. If the user asks for a scale claim, give them one of:

- **A measured structural fact:** "every redirect does one indexed lookup and writes one click row"
- **A verified configuration:** "Redis caching on the hot read path, RabbitMQ for payout batches"
- **An explicit gap:** "throughput has not been benchmarked"

State which of the three you used when the user asked for a big number. Then offer to benchmark for real if they want the claim.

### Worked example

Too inflated, and unverifiable:

> This url shortener handles 3.5 trillion hashes and serves 365 billion URLs with over 10 million write operations per day.

Honest, same energy, backed by code:

> A url shortener of about 970 lines. Short codes carry a unique index, so a redirect is a single lookup, and each visit writes one click record you can chart per link. Ships with Docker Compose.

The second version is shorter, more specific, and survives someone reading the source.

## Rewrite checklist

Before returning text, confirm:

- [ ] Zero `—` and `–` characters
- [ ] Every number traced to a measurement or a verified file
- [ ] No word from the cliche list
- [ ] No sentence longer than roughly 25 words
- [ ] Sentence lengths vary
- [ ] Claims are active voice
- [ ] Limits stated where they exist
- [ ] Reads aloud without sounding like a press release

## Quick fixes

| Instead of | Write |
|---|---|
| Leverage the cache | Use the cache |
| Seamless integration | Connects to X in one config file |
| Highly scalable architecture | Stateless API, work queued to RabbitMQ |
| Robust error handling | Retries failed jobs three times, then dead letters them |
| Blazing fast | 40 ms median response on local benchmarks (only if measured) |
| Utilizes JWT for authentication | Checks a JWT on every request |
| A wide array of features | List the features |
| In order to | To |
| Prior to | Before |
| At this point in time | Now |
