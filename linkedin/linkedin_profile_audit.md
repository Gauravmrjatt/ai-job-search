# LinkedIn Profile Audit: Gaurav Chaudhary

Audited: Oct 22, 2026, against the canonical profile in `CLAUDE.md`.
Profile: www.linkedin.com/in/gauravmrjatt
Goal: land full-time roles (fintech / logistics / real-time / SaaS), India or remote.
Data source: live profile read from the browser (all sections) plus the screenshot of the top card.

---

## 1. Verdict

The profile sells a student. Your actual record sells a production engineer. Every fix below closes that gap.

Three problems account for most of the damage:

1. **The Experience section is missing your two strongest engagements.** Cashbackwallah (the production logistics platform, 1,000+ orders, shipped Aug 2026) and the Lead Tracking System (running and maintained since 2023) are not listed at all. A recruiter currently sees only Dream10, listed twice.
2. **The headline leads with the weakest fact.** "Engineering Student" is the first thing a recruiter reads, followed by dated stack labels ("MERN, LAMP", nothing you shipped this year is LAMP) and low-signal words ("Enthusiast", "Mentoring" with nothing on the profile to back it).
3. **Dates and titles do not match reality.** Dream10 shows two parallel jobs (DevOps Engineer and Full-stack Developer, both Mar 2025 to Jan 2026). Your canonical record says one freelance engagement, Mar to Nov 2025. One entry is honest, covers the same ground, and reads stronger.

Everything else is a smaller version of these three.

### Scorecard

| Section | Status | Why |
|---|---|---|
| Headline | Red | Leads with student; MERN/LAMP labels; vague words; none of your real keywords (TypeScript, Node.js, PostgreSQL, payments) |
| Location | Amber | "Greater Agra Area" vs Mathura on your CV; plus Open-to-work says all of India, which dilutes |
| About | Red | Generic, MERN-era, no numbers, no links, missing TypeScript/PostgreSQL/payments, no CTA |
| Experience | Red | Missing Cashbackwallah and Lead Tracking; Dream10 duplicated with inflated "DevOps Engineer" title and conflicting dates |
| Education | Amber | GLA entry has no degree name; profile claims 4 educations, some hidden; likely duplicates |
| Featured | Amber | Portfolio + generic GitHub item; missing the two live production demos |
| Projects | Amber | Dream10 copied a second time as a project with a third title ("Intern"); Cashbackwallah missing |
| Skills | Amber | 51 skills but top slots waste on "Backend", "Engineering", "Frontend"; ordering weak for recruiter search |
| Services | Amber | Shows "Web Design / Database Development / Web Development"; reads freelance-for-hire, signal noise for full-time hiring |
| Certifications | Green/Amber | JPMC Forage sim listed; the AWS JOVAC course is only in a post, not in the section |
| Awards | Red (missing) | No Honors & Awards section at all, despite WebX finalist, WebForge, Code Arambh, LeetCode 1,430 |
| Photo | Green | Good headshot, keep it |
| Banner | Amber | Dark stock desk photo, handwritten name, "FULLSTACK" pill; says nothing your headline should not already say |
| Open to work | Amber | Recruiters-only flag is on (good), but "all India, all workplace types" with no job titles tuned |

---

## 2. Ready-to-paste rewrites

Paste each block into the matching profile field, then check section 3 for the manual cleanup steps.

### 2.1 Headline (limit 220 chars, currently 155 of noise)

Pick one. Both are recruiter-search-shaped: title first, keywords, proof, then student status in the least prominent slot.

**Option A (recommended):**

```
Full-Stack Developer | Next.js, Node.js, TypeScript, PostgreSQL | Built production logistics & real-time platforms: payments, webhooks, CI/CD | B.Tech CSE '27
```

**Option B (tighter):**

```
Full-Stack Developer (Next.js / Node.js) | Shipped 3 production platforms incl. a logistics app at 1,000+ orders | Payments, Redis, Docker | B.Tech CSE '27
```

Why this works:
- Recruiters search titles and stack nouns. "Full-Stack Developer", "Next.js", "Node.js", "TypeScript", "PostgreSQL" are the terms your CV already targets.
- Lead with the fact that gets you hired, not the credential that waters you down. B.Tech '27 stays visible but last.
- "MERN, LAMP" dies. LAMP is PHP-era label-speak, matches none of your recent work, and reads like a 2016 template.

### 2.2 About (limit 2,600 chars; current one ~400)

Replace entirely with:

```
I build production web platforms end to end: schema, API, frontend, payments, deployment, monitoring.

I am a final-year B.Tech CSE student at GLA University and work freelance on live products with real users.

Recent work:

1) Cashbackwallah (cashbackwallah.com): a logistics platform for courier rate comparison, shipment booking, and multi-level franchise commissions. Stack: Next.js, TypeScript, Express, Prisma, PostgreSQL. Razorpay payments with signature verification, Shiprocket integration, KYC-gated orders, wallet ledger, automated payouts. 1,000+ orders processed.

2) Dream10.in: a real-time quiz platform with live leaderboards, anti-cheat, and automated prize payouts. Stack: Node.js, Redis, RabbitMQ, WebSockets, CI/CD.

3) Lead tracking platform (panel5.logicpay.in): affiliate lead tracking with fraud detection, postback handling, and payment processing. Live since 2024 and still maintained. RabbitMQ, Redis, Node.js Cluster, Prometheus, Grafana, Loki.

I care about correctness where money moves: signed webhooks, idempotent payment flows, transactional ledgers, and alerts when something breaks.

Stack: TypeScript, Next.js, React, Node.js, Express, PostgreSQL, Prisma, MongoDB, Redis, RabbitMQ, Docker, GitHub Actions, AWS.

Finalist, WebX Frontend Challenge. LeetCode rating 1,430.

I also lead project teams of first and second year students at GLA, taking their builds from an idea to something that actually runs.

Open to full-stack, backend, and platform engineering roles. Full-time or freelance-to-hire, in India or remote.
```

Why this works:
- The first two lines are what shows before "see more" in search results, so they carry identity and keywords.
- Every claim traces to your canonical profile. No "passionate learner" filler.
- Ends with a CTA. The current About just stops.

### 2.3 Experience (this is the priority fix)

Add two entries you are missing and fix the third. Company name is where the platform goes; if LinkedIn wants a company, create the text exactly as shown (LinkedIn quality matches "Self-Employed" fine for freelance work).

**Entry 1 (add):**

| Field | Value |
|---|---|
| Title | Freelance Full-Stack Developer |
| Company | Cashbackwallah |
| Dates | Jan 2026 to Aug 2026 |
| Location | Remote |
| Media | link cashbackwallah.com |

Description:

```
Built and shipped a production logistics platform end to end: courier rate comparison, shipment booking, order management, and a multi-level franchise commission system.

* Next.js, TypeScript, Express, Prisma, PostgreSQL; 1,000+ orders processed in production
* Razorpay payments with HMAC signature verification, duplicate-payment detection, transactional wallet ledger, security deposits, and payout lifecycle (pending to approved to completed)
* Shiprocket integration: courier booking, tracking webhooks, PDF shipping labels
* Firebase SMS OTP, KYC verification gating order flow (Aadhaar, PAN, GST), scheduled refund cron jobs
* Owned deployment and monitoring: NGINX, Sentry, GitHub Actions
```

**Entry 2 (add):**

| Field | Value |
|---|---|
| Title | Freelance Full-Stack Developer |
| Company | Lead Tracking System (panel5.logicpay.in) |
| Dates | May 2023 to Present |
| Location | Remote |
| Media | link panel5.logicpay.in |

Description:

```
Built an affiliate lead-tracking platform in 2024 and still maintain and extend it on demand: real-time dashboards, fraud detection, postback handling, payment processing, Telegram alerts, role-based access.

* Background processing scaled with RabbitMQ, Redis, and Node.js Cluster
* Monitoring with Prometheus, Grafana, Loki
* Three years of production ownership, which is where the real lessons came from: dependency drift, service separation, observability gaps
```

**Entry 3 (fix the Dream10 duplication):**

Delete both current Dream10 entries (DevOps Engineer and Full-stack Developer) and keep one:

| Field | Value |
|---|---|
| Title | Freelance Full-Stack Developer |
| Company | Dream10.in |
| Dates | Mar 2025 to Nov 2025 |
| Location | Remote |
| Media | link dream10.in |

Description:

```
Built a real-time quiz platform as a freelance engagement, end to end.

* Next.js, Node.js, TypeScript, Redis, RabbitMQ, WebSockets: live leaderboards, streak rewards, anti-cheat, automated prize payouts
* Razorpay payment and payout processing
* Docker, CI/CD pipelines, NGINX for deployment
```

Why one entry beats two:
- Two job cards with two titles over the same 11 months looks like padding at best, title inflation ("DevOps Engineer") at worst.
- The bullets cover both infra and product work, so nothing is lost.

### 2.4 Education

Fix the GLA entry: it currently shows school and dates but no degree name, plus an odd "Engineering and React.js" skill tag.

| Field | Value |
|---|---|
| School | GLA University |
| Degree | Bachelor of Technology - BTech |
| Field of study | Computer Science and Engineering |
| Dates | 2023 to 2027 |
| Activities/notes | B.Tech CSE subjects covered: DSA, OOP, DBMS, OS, Computer Networks |

Then open "Show all 4 educations" and keep exactly three: the B.Tech above, your 10th standard entry, and 12th (BSSVDPS High School Diploma, 2021 to 2022). Delete the duplicate fourth card. I still need your 10th standard school name and year to finish this one.

### 2.5 Featured (keep 3, drop the noise)

Featured currently: portfolio + a generic GitHub item described as "experiments and development work". Both descriptions say nothing.

Replace with, in this order:

**1) Live product: Cashbackwallah**

```
Production logistics platform I built and shipped solo. Live demo: cashbackwallah.com. Courier rate comparison, shipment booking, franchise commissions, Razorpay payments, 1,000+ orders processed.
```

**2) Portfolio: gauravmrjatt.vercel.app**

```
Selected projects, demos, and write-ups. Built with Next.js and TypeScript.
```

**3) Live product: Dream10.in**

```
Real-time quiz platform with live leaderboards and anti-cheat. Live demo: dream10.in.
```

Keep the GitHub link as item 4 only if you insist. A dead generic repo collection card is worth less than your two live URLs. Live demos of working products are your single strongest asset against other final-year candidates.

### 2.6 Projects

The current Projects section repeats Dream10 a third time with yet another title, "Full-Stack & DevOps Intern", which also contradicts the Experience section. The rule from the CV applies here: one truth, one entry.

Keep three projects, trimmed:

1. **Cashbackwallah** (short version of the experience bullets; the Experience entry already carries the detail, so in Projects link it and keep three lines max)
2. **Lead Tracking System** (same principle)
3. **TicketHub** (your event-booking build; keep it, it is a solid standalone product story)

Delete or trim the long Dream10 project card so it is a version of the experience entry, not a different story with a different title. Delete the "+7" hidden projects if they are restyled versions of the same three platforms.

### 2.7 Skills: pin the order that recruiters actually search

Top skills currently render as: Backend, Docker, Engineering, Frontend, Next.js. "Backend", "Frontend", and "Engineering" are vague tags that waste your three pinned slots.

Edit top skills (pinned) to, in order:

```
TypeScript, Next.js, Node.js, React, PostgreSQL, Docker
```

Then add any that are missing from your 51: Prisma, Express.js, Razorpay, RabbitMQ, WebSockets, System Design, REST APIs. Remove skills you cannot defend in an interview (50+ skills flagged at "51" reads like skill-farming anyway; anything you cannot back up, drop).

### 2.8 Licenses & certifications

Add the AWS course you already posted about (JOVAC, GLA University, Jun 10 to Jul 31, 2025) so it stops living only in a feed post:

| Field | Value |
|---|---|
| Name | AWS Cloud Computing (JOVAC) |
| Issuing org | GLA University (Dept. of CEA) with Technical Guftgu |
| Issue date | Jul 2025 |
| Skills | AWS, Cloud Computing |

Keep the JPMorganChase Forage simulation entry.

### 2.9 Honors & awards (new section)

Add an Honors & Awards section:

```
* Finalist, WebX Frontend Challenge
* 4th place, WebForge
* 4th place, Code Arambh
* LeetCode contest rating 1,430
```

These exist in your canonical record and nowhere on the profile. Awards are proof-of-competence signals that cost nothing.

### 2.10 Settings-level fixes

| Setting | Current | Change to | Why |
|---|---|---|---|
| Location (top card) | Greater Agra Area | Mathura, Uttar Pradesh | Match your CV; consistency is checked in screening |
| Open to work (jobs) | India, all types | Add job titles: Full-Stack Developer, Backend Developer, Software Engineer (SDE), Platform Engineer. Locations: Delhi/NCR, Bengaluru, Hyderabad, Pune, Remote | "All India + on-site anywhere" reads unfocused; recruiter matching needs titles |
| Services | Web Design, Database Development, Web Development | Turn Services off while targeting full-time roles | Shows freelance-for-hire pricing-section energy alongside an "open to work" flag; mixed signals |
| Banner | Stock desk photo with handwritten name | Replace with a text banner: "Full-Stack Developer - Next.js / Node.js / PostgreSQL - Payments & Real-Time Systems" or a simple diagram of your architecture style | The headline does the branding; the banner wastes its worst slot on your own name, which is already next to the photo |
| Connected apps | Gamma, IntelliJ, HubSpot, Replit Agent | Remove unless genuinely used in work you show | Pure clutter in a section recruiters rarely read |
| Public URL | gauravmrjatt | Keep, low priority | Works fine |

### 2.11 Activity strategy (small, high-leverage)

Your Cashbackwallah post (12 reactions, 282 impressions) is the best content on the profile. Two moves:

1. Pin it to Featured.
2. Repost each completed platform once, in the format your Apr 15 lead-tracking teardown used: problem, stack, what broke, what you fixed. That post format is your differentiator. The celebration posts ("excited to share") underperform it by volume and by content.

---

## 3. Cleanup checklist (do in this order)

1. Experience: add Cashbackwallah, add Lead Tracking, replace the two Dream10 entries with one. (Confirm Dream10 end date first.)
2. Headline: paste Option A.
3. About: paste the rewrite.
4. Education: fix GLA degree entry, prune to real ones.
5. Featured: rewrite as three items above, pin Cashbackwallah demo first.
6. Projects: trim to Cashbackwallah, Lead Tracking, TicketHub; delete the "Intern" duplicate.
7. Skills: re-pin top 6, prune indefensible tags.
8. Add Honors & Awards section; add AWS JOVAC certification.
9. Settings: location, open-to-work titles, turn off Services, remove connected apps.
10. Banner: swap for a text banner (I can generate one from your headline if you want).

---

## 4. Locked answers (final)

1. **Dream10 end date:** Nov 2025 (the CV record). The live profile's Jan 2026 was wrong; CV and LinkedIn now both say Mar to Nov 2025.
2. **Educations:** 10th, 12th, engineering only. Keep three entries, delete the duplicate. Pending: 10th standard school name and year.
3. **Mentoring:** real, but not headline material. Gaurav leads multiple project teams of friends and juniors, so one honest line lives in the About. The headline word is dropped.
4. **GitHub card:** deprioritized. Featured shows the two live demos plus the portfolio; GitHub returns as item 4 only after repos are pinned and READMEs exist.
5. **Relocation:** yes in practice. Open-to-work locations final: Delhi/NCR, Bengaluru, Hyderabad, Pune, Remote.
