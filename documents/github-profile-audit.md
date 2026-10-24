# GitHub Profile Audit: @Gauravmrjatt

**Audited:** 2026-10-22
**Account age:** since 2020-04-13 (6.5 years)
**Repos:** 62 total / 43 public / 5 forks / 7 empty
**Followers:** 2 · **Stars received:** 0 · **Stars given:** 0
**Overall score: 34 / 100**

---

## Scorecard

| Area | Score | Verdict |
|---|---|---|
| Profile settings (bio, links, avatar) | 3/10 | Bio is visibly broken |
| Profile README | 5/10 | Looks like a tutorial copy-paste, not an engineer's portfolio |
| Pinned repositories | 2/10 | 5 of 6 have no description; strongest projects not pinned |
| Repo hygiene (README, topics, license) | 3/10 | 0 topics, 0 licenses, 14+ repos with no README |
| Code substance | 7/10 | Genuinely good: big real projects, modern TS |
| Activity & consistency | 4/10 | 958 commits/year, but a 16-day dead streak right now |
| Social proof / collaboration | 1/10 | 5 PRs, 2 issues, 0 stars given in 6.5 years |

The paradox: **your repos are much better than your profile suggests.** You have four 400 to 500 file production-ish apps, but a recruiter sees a broken bio, undescribed pins, and a 0-star grid.

---

## 1. Profile settings (critical)

### 1.1 Your bio is rendering broken
Current bio (exact bytes):

```
Hi, I'm\r\nGaurav ,\r\na passionate Full-Stack Developer and engineering student with a strong foundation in modern web technologies.
```

Those `\r\n` are **literal carriage-return/line-feed sequences pasted as text**, not line breaks. On your profile page it renders as one mangled string with visible artifacts. Also:

- `Gaurav ,` has a stray space before the comma
- 138 characters of filler: "with a strong foundation in modern web technologies" says nothing
- No title keyword a recruiter searches for

**Fix to one line, no line breaks:**

> Full-Stack Engineer · TypeScript, Next.js, Node.js · Building production web apps

### 1.2 Website field is empty, but your portfolio is live
`blog` is `""` while `https://gauravmrjatt.vercel.app` returns **HTTP 200** and the resume PDF returns **HTTP 200**. You're hiding your single best asset.

### 1.3 Location is empty
`location: null`. Recruiters filter by location. Set `India` (or your city). It also feeds GitHub's "near you" discovery.

### 1.4 Company is empty
Put your college, bootcamp, or "Freelance" here. An empty field reads as "no professional context."

### 1.5 No X/Twitter handle
`twitter_username: null`. Optional, but it's a free metadata signal.

### 1.6 You have two `gh` accounts on this machine
`Gauravmrjatt` (active) and `manvishalya566`. If that second account is yours, commits made there are invisible on this graph. Worth checking.

---

## 2. Profile README: a template, not a portfolio

File: `Gauravmrjatt/Gauravmrjatt/README.md` (2.3 KB)

### Broken
- **Broken line 21:** `- ⚡ ** 😄` is an unterminated bold marker that renders as literal `- ⚡ ** 😄`. Visible garbage in your About section.
- **Trophy widget returns HTTP 402** (`github-profile-trophy.vercel.app` is at its free-tier limit). Intermittently broken for viewers.
- **Trophy + stats block is the entire bottom half.** With 0 stars and 2 followers, an empty trophy shelf and a "streak" widget actively work against you.

### Wrong emphasis
- **Zero project links.** The README mentions "Working on Codellab" but never links it, never links a single repo, and never links the live demos you actually have.
- **Tech stack claims are unfalsifiable.** You claim Kafka, RabbitMQ, Kubernetes, AWS, GraphQL, PHP, C and Jest, with **no repo evidence for any of them**. A recruiter who clicks through sees Node/TS/JS only. That gap costs you credibility.
- **"Learning Kafka & Distributed Systems"** is fine, but static. Nothing says what you shipped recently.
- **Visitor badge** (`komarev`): low value, adds clutter.

### What the README should be
1. One-line positioning + live portfolio link
2. **"Selected Work"**: 3 projects, each with a one line problem, stack, live demo link and repo link
3. Current focus (with a date, so it doesn't rot)
4. Experience / education
5. Contact

Trophies: drop them. You don't have the numbers for them.

---

## 3. Pinned repositories: the biggest quick win

Current pins:

| Pin | Language | Description | Live link | Last push |
|---|---|---|---|---|
| Codellab | TypeScript | **none** | none | 2026-02-09 (8 mo stale) |
| datavault | TypeScript | **none** | has homepage | 2026-02-12 (8 mo stale) |
| tod-ai | JavaScript | **none** | has homepage | 2025-04-11 (18 mo stale) |
| TicketHub | JavaScript | **none** | has homepage | 2026-01-06 |
| EcoFinds | JavaScript | **none** | has homepage | 2025-10-03 |
| Games | HTML | "Games created with python" | none | 2026-01-30 |

Problems:
- **5 of 6 pins have no description.** The pin cards show a name and a language dot. That's 5 missed pitches.
- **`Games` is pinned** (30 KB of Python-in-HTML scratch work) while `instant-panel`, `cheapship`, `neet`, `portfolio`, and `tg-bot` are not.
- **Two pins are stale** (Codellab, datavault, tod-ai), you are advertising work you stopped 8 to 18 months ago.
- **Pins contradict the "Working on Codellab" claim** in your README.

### Recommended pin set (order matters)

1. **instant-panel**, 94 MB, 360 files, active (Jul 2026), real features (`fix(campaigns): postback campaign cache clear`), 2 CI workflows. This is your most professional repo.
2. **cheapship**, 519 files, active Aug 2026, conventional commits, admin auth logic.
3. **neet**, 462 files, live Next.js + Payload CMS, active Aug 2026.
4. **portfolio**, live site, CI workflow, proves you can ship a personal brand.
5. **tg-bot**, Telegram bot, 9.8 KB README, real verification logic. Shows integrations.
6. **Codellab** *or* **datavault**, only if you add a description and a live demo.

Unpin `Games` immediately.

---

## 4. Repository hygiene: systemic neglect

### 4.1 Zero topics across all 62 repos
`repositoryTopics` is empty on **every single repo**. Topics are how GitHub search and topic pages surface your work. A repo with no topics is invisible unless someone already knows its URL.

Add 4 to 6 topics per repo. Example for `instant-panel`:
`nextjs`, `typescript`, `postgres`, `prisma`, `dashboard`, `campaign-management`

### 4.2 Zero licenses (55 of 56 own repos)
No `LICENSE` anywhere. "No license" legally means *all rights reserved*, a recruiter or collaborator technically can't reuse anything, and it signals inexperience. Add MIT to your open repos.

### 4.3 Fourteen public repos have no README at all
`url-shortner`, `School`, `Result-App`, `PayrollCore`, `Games`, `ABC`, `TicketHub` (pinned!), `Expense`, `AIRBNB`, `SkillBridge`, `Tod-Backend`, `python`, `py`, `face-recognition`

Plus two empty READMEs: `BridgeLabz-SIPP-Training-2026` (1 byte), `BridgeLabz-Training-3Y` (0 bytes).

`TicketHub` is pinned **without a README**. Clicking it shows a file list and nothing else.

### 4.4 Seven completely empty repos
`hp-lap`, `ABC`, `Tod-Backend`, `py`, `face-recognition`, `myweb`, `MyFiles`

Empty repos are pure noise. Delete or make private.

### 4.5 Duplicate / typo repos
| Pair | Problem |
|---|---|
| `coreinventory` / `coreinvntory` | Same day (2026-03-14), one is a typo |
| `kanspark` / `kasparkss` | Same day (2026-04-17), one is a typo |
| `py` / `python` | Two Python scratch repos |
| `neet` / `cuet` / `jee` | Near-identical codebase cloned for three exam sites |

This makes you look disorganized. Consolidate: one repo per project, delete the typo.

### 4.6 Five forks cluttering the grid
`ai-job-search`, `LibreCrawl`, `PayrollCore`, `register` (152 MB!), `PHP-web-shells`

**`PHP-web-shells` is the most damaging single item on your profile.** It is a 2018 fork of a repository of PHP web shells, which is malware tooling. Any recruiter or security-aware engineer who scrolls your repo list sees that. Unfork it. There is no upside.

Also: `register` is a 152 MB fork of the `is-a.dev` domain registry. Delete it.

### 4.7 Weak or empty descriptions
Public repos with **no description**: `cheapship`, `neet`, `portfolio`, `instant-panel`, `neet-datapipeline`, `osm-forest`, `Backend-Dev`, `tg-bot`, `osm`, `url-shortner`, `Gauravmrjatt`, `School`, `datavault`, `maintenance`, `Codellab`, `Chat-App`, `TicketHub`, `Job-Portal`, `codecrafter`, `Expense`, `Frontend-Dev`, `EcoFinds`, `BridgeLabz-Training-3Y`, `AIRBNB`, `tod-ai`, `LemonBooking`, `SkillBridge`, `docs`, `Tod-Backend`, `python`, `py`, `face-recognition`, `pwa-install-demo`

That's 33 of 43 public repos with a blank description.

---

## 5. Activity & social proof

### 5.1 You are on a 16 day dead streak, right now
Contributions by month (from the calendar):

```
Oct 2025    16
Nov 2025     5
Dec 2025    56
Jan 2026    43
Feb 2026    98
Mar 2026   232   ← peak
Apr 2026   206
May 2026    62
Jun 2026    86
Jul 2026    42
Aug 2026    10
Sep 2026     9
Oct 2026     1   ← 16 consecutive zero days
```

Six months ago you were pushing 200+ contributions/month. August onward you fell off a cliff. **A recruiter looking at your profile today sees a mostly-grey graph**, and your most recent activity is 1 contribution in October.

This is the single most time-sensitive problem. Ten minutes of real commits today changes the first impression.

### 5.2 958 contributions, 5 pull requests, 2 issues
You've written 815 commits in a year but opened **5 PRs**. That means near-zero collaboration signal. Engineering hiring looks for *working with others' code*, not just solo volume.

Start small: one documentation fix or typo PR to a library you actually use (`next`, `payload`, `shadcn-ui`). Five merged PRs to real OSS changes your profile more than another solo project.

### 5.3 0 stars given
You've starred nothing in 6.5 years. That is a perception problem, because it reads as "not engaged with the ecosystem." Star 15 to 20 repos you genuinely use. It also helps you find issues to contribute to.

### 5.4 0 stars received, 2 followers
Nobody has discovered your work because nothing is described, tagged, or shared. Fixing descriptions + topics + READMEs is the prerequisite; after that, posting projects to r/webdev, X, and LinkedIn is what actually moves stars.

---

## 6. Commit message quality is improving

Older commits:
```
new updates
readme added
new ui
fix build error
update to the fully nextjs to deploy on the vercel
new logic for eventsd          ← typo in message
```

Recent commits (2026):
```
feat: restrict order creation to admin users only
fix(campaigns): add postback campaign cache clear on update
style(education-timeline): refine timeline styling and title
feat(admin): optionally save imported content as draft
```

You've clearly adopted Conventional Commits in `cheapship`, `instant-panel`, `neet`, and `portfolio`. **That is a real, demonstrable growth story**, but it is buried in repos nobody opens because they have no description. Surface it.

---

## 7. What's genuinely good (lead with this)

Do not over-correct. You have real material:

- **Four substantial TypeScript apps** (360 to 519 files) with modern stacks: Next.js, Payload CMS, Postgres, Prisma
- **CI workflows** exist in `instant-panel` (2), `Codellab`, `portfolio`
- **Live deployments**: portfolio (200 OK), `kanspark`, `coreinventory`, `datavault`, `tod-ai`, `TicketHub`, `EcoFinds`, `codecrafter`
- **Broad domain coverage**: inventory, e-commerce, booking, ticketing, job portal, quiz platforms, Telegram bots, CMS-driven education sites
- **Conventional commits adopted**, which signals team-readiness
- **6.5-year account, 958 contributions/year**, not a fresh throwaway profile

---

## 8. Prioritized fix plan

### P0, today, about 20 minutes (highest impact per minute)
1. Rewrite bio: one line, no `\r\n`, no stray spaces
2. Set Website → `https://gauravmrjatt.vercel.app`
3. Set Location → `India`
4. Unpin `Games`, pin `instant-panel` + `cheapship`
5. Add descriptions to all 6 pins
6. Unfork `PHP-web-shells` and `register`
7. Make a real commit today (break the 16-day gap)

### P1, this week
8. Rewrite profile README: "Selected Work" with 3 projects + live links, drop trophies, fix `- ⚡ ** 😄`
9. Add READMEs to the 6 repos you keep pinned
10. Add 4 to 6 topics to each pinned repo
11. Delete the 7 empty repos
12. Delete typo duplicates (`coreinvntory`, `kasparkss`)

### P2, next two weeks
13. Add MIT LICENSE to all public own repos
14. READMEs for the remaining ~14 empty public repos (or make them private)
15. Descriptions for all 33 blank public repos
16. Consolidate `neet`/`cuet`/`jee` into one repo or clearly differentiate them
17. Star 15 to 20 repos you actually use

### P3, ongoing
18. Open 3 to 5 real PRs to libraries you use
19. Ship something visible every 2 weeks so the graph never goes grey again
20. Add a screenshot + demo GIF to each pinned repo README

---

## 9. Fix log, applied 2026-10-22

### Done via API

**Repo descriptions written (10):**
`instant-panel`, `cheapship`, `TicketHub`, `EcoFinds`, `tg-bot`, `Codellab`, `datavault`, `tod-ai`, `portfolio`, `neet`

**Profile README rewritten and pushed** (`267990b` → `8cebc2e`, 53 insertions / 62 deletions):
- Now 3.7 KB, project-led instead of badge-led
- Added "Selected Work" with 4 flagship projects: stack, what it does, live + source links
- Added a `More projects` table with 5 more repos and verified live demos
- Fixed the broken `- ⚡ ** 😄` line
- Removed all 4 external widgets (trophy 402-error, github-readme-stats, streak-stats, komarev) → 0 external image dependencies, nothing left to break
- Claims narrowed to what the repos actually evidence: Kafka, Kubernetes, AWS and GraphQL removed from the stack
- Date-stamped "Currently" block so staleness is visible and self-correcting
- This commit also ends the 16-day contribution drought

**Repos made private (4 public → private):**
`ABC`, `Tod-Backend`, `py`, `face-recognition`, all 0 KB

Note: `hp-lap`, `myweb`, `MyFiles`, `coreinvntory`, `kasparkss` were **already private**, so the typo duplicates were never publicly visible. Public repos: 43 → 38.

**Live demos verified (all HTTP 200):**
`ticket-hub-ten`, `datavault-two`, `eco-finds-sage`, `tod-ai-teal`, `codecrafter-red`, `coreinventory-two`, `osm-alpha`, `maintenance-mu-orcin`

**Dead demos found:** `kanspark.vercel.app` and `kasparkss.vercel.app` both return **404**. Those repos have `homepageUrl` pointing at dead links. Clear them.

### Second pass: READMEs and remaining descriptions

**Descriptions: 21 filled → 0 public repos left blank** (39/39 described).

**READMEs written and pushed (10):**

| Repo | Type | Commit |
|---|---|---|
| `TicketHub` | new README | `202440c` |
| `School` | new root README | `a874450` |
| `AIRBNB` | new README | `d5afe91` |
| `url-shortner` | new README | `433cab2` |
| `Expense` | new README | `6029740` |
| `Result-App` | new README | `f32f344` |
| `LemonBooking` | replaced README | `d6d2a15` |
| `maintenance` | replaced `create-next-app` boilerplate | `55510b5` |
| `Job-Portal` | replaced `create-next-app` boilerplate | `d1cb61b` |
| `codecrafter` | replaced `create-next-app` boilerplate | `06b1f0f` |

Every README documents the real scripts, real environment variable names and the real folder structure. No invented commands.

**4 public repos still have no README, by design:** `PayrollCore` (approved for deletion), `Games`, `SkillBridge`, `python` (recommended private).

### Findings discovered during README work

- **`School` is the strongest backend on the account** and was invisible: TypeScript, Apollo GraphQL **with WebSocket subscriptions**, Prisma + PostgreSQL (11 models), Redis, Kafka with a topic-bootstrap script, JWT access/refresh. This is the repo that actually substantiates the "Kafka / distributed systems" claim that was previously only asserted in the profile README. **Recommended for a pin.**
- **`osm-forest` is a real engineering project**, not a scratch repo: proof-of-work gating, anti-extraction layers, device fingerprinting, audit logging, daily mutation engine, plus unit/integration/security test suites.
- `School` has **99 `frontend/.next/` build files committed**, which bloats the repo and hides real code. Run `git rm -r --cached frontend/.next`.
- `codecrafter` contains a vendored `next-app-template-main/` starter that nothing imports.
- `url-shortner/server.js` has a **hardcoded fallback admin password** (`process.env.ADMIN_PASSWORD || '<literal>'`). Set the variable everywhere and delete the literal.
- `PayrollCore` has **959 `node_modules/` files committed**.
- `Games` has `__pycache__/` committed; `osm-forest` has `.DS_Store` committed.

### Revised pin recommendation

`School` replaces `datavault` in the top six:

1. `instant-panel`
2. `cheapship`
3. `TicketHub` *(after rotating its leaked credentials)*
4. `School`
5. `portfolio`
6. `tg-bot` *(after rotating its leaked bot token)*

---

### Blocked, needs `user` scope

`gh api -X PATCH user` returned **404**, because the active token lacks the `user` scope (has: `gist`, `read:org`, `repo`, `workflow`).

Run once to enable automation:

```bash
gh auth refresh -h github.com -s user
```

Or paste manually at <https://github.com/settings/profile>:

| Field | Value |
|---|---|
| **Bio** | Full-Stack Engineer · TypeScript, Next.js & Node.js · I build and ship production web apps |
| **Website** | https://gauravmrjatt.vercel.app |
| **Location** | India |

### Blocked, needs `delete_repo` scope
Approved for deletion, but `gh repo delete` returns **403**:

```bash
gh auth refresh -h github.com -s delete_repo
```

| Repo | Why | Size |
|---|---|---|
| `PHP-web-shells` | Fork of a PHP web-shell/malware repo. 0 of your commits. Worst item on the profile. | 1.2 MB |
| `register` | Fork of is-a.dev. 0 of your commits. Largest repo on the account. | 152 MB |
| `PayrollCore` | Fork with 1 trivial commit. | 1 MB |

Alternative: delete them by hand at `github.com/Gauravmrjatt/<repo>/settings` → Danger Zone.

### Blocked, not supported by the API
**Pinning repos**: no REST or GraphQL endpoint exists. Web UI only: `Profile → Customize your pins`.

Target pin order:
1. `instant-panel`
2. `cheapship`
3. `TicketHub`
4. `portfolio`
5. `tg-bot`
6. `Codellab`

Unpin `Games` and `datavault` / `tod-ai` (both stale).

---

## 10. 🔴 SECURITY: committed credentials in 6 public repos

Found 2026-10-22 while preparing repo READMEs. These are **real secret files in public repos**, not `.env.example` templates.

| Repo | File | Exposed keys | Public since | Severity |
|---|---|---|---|---|
| `tg-bot` | `.env.local` | **`BOT_TOKEN`**, `MONGO_URI`, `REDIS_URL`, `ADMIN_IDS`, `CHANNEL_INVITE_LINK` | 2026-04 | **Critical**: bot and channel takeover |
| `Codellab` | `.env.local` | **`NEXTAUTH_SECRET`**, `DATABASE_URL`, `JUDGE_SERVICE_URL` | 2026-02 | **Critical**: forge any session |
| `TicketHub` | `.env.local` | `MONGODB_URI`, **`ADMIN_PASSWORD`** | 2025-12-20 | **Critical**: live DB and admin panel are public |
| `EcoFinds` | `backend/config/.env` | `MONGO_URI`, `JWT_SECRET` | 2025-10 | High: forge auth tokens |
| `Expense` | `.env` | `MONGODB_URI`, `JWT_SECRET` | 2025-11-26 | High: forge auth tokens |
| `SkillBridge` | `server/.env` | `MONGODB_URI`, `JWT_SECRET` | 2025-07-12 | High: forge auth tokens |

Safe by comparison (intentional templates, no secrets): `cheapship/.env.example`, `neet/.env.example`, `LibreCrawl/.env.example`, `School/backend/.env.example`, `tg-bot/.env.example`.

Notes:
- The `TicketHub` URI is a real Atlas connection string to `cluster0.9o9m7wk.mongodb.net`, publicly readable for ~10 months.
- Two of these repos are **pinned candidates** (`tg-bot`, `TicketHub`).
- Total exposure window across repos: 3 to 15 months.

### Remediation order (order matters)

1. **Rotate first, clean second.** Deleting the file does not help while the credential is still valid, because git history keeps it and clones or forks may already hold it.
   - Regenerate the Telegram `BOT_TOKEN` via @BotFather → `/revoke`
   - Rotate the Atlas database user password for every `MONGO_URI` / `MONGODB_URI`
   - Generate new `JWT_SECRET` / `NEXTAUTH_SECRET` values and redeploy
   - Change the `TicketHub` admin password
2. Remove the file from HEAD, add to `.gitignore`, commit a `.env.example` with placeholder values.
3. Optionally purge history with `git filter-repo`, worth doing only after step 1, since rotation is what actually closes the hole.

---

## Target state

> A recruiter lands on the profile, reads a clean one-line bio with a live portfolio link, sees 6 described pins with live demos, and a green graph for the current month. Every pin opens to a README with screenshots, stack, and setup. In 90 seconds they can tell what you build and that you can finish things.
