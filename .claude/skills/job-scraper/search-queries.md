# Search Queries for Job Scraper

<!-- SETUP: Populated by /setup for Gaurav Chaudhary - Full-Stack / Backend / DevOps, India -->

## Installed portal CLIs (primary for `/scrape`)

`/scrape` discovers every portal skill under `.agents/skills/*/SKILL.md` and runs its CLI first. Shipped country-agnostic CLIs include `linkedin-search` and `freehire-search`; Danish demos and any skill you add with `/add-portal` are included the same way. You do **not** need a matching `site:` line below for those CLIs to run.

The `site:` query templates in this file are the **WebSearch fallback** — for portals without a CLI, company career pages, or when a CLI fails.

**Language scope:** every query category is written in both languages from the Languages table — **English** (primary) and **Hindi** (secondary, for domestic boards where Hindi postings appear). A posting requiring a language you have *not* declared, as a job condition, is excluded before scoring; a posting requiring a *higher level* than you declared in a language you *do* work in is flagged for your own judgment, not excluded — see `04-job-evaluation.md`'s Language Gate.

## Search Sites

Primary (your market's job boards - scaffold one with `/add-portal`):
- **naukri.com** - India's largest general job board
- **linkedin.com/jobs** (filter: India / Delhi NCR / Remote); also covered by `linkedin-search` CLI
- **lets-code.co.in/jobs** - India startup + enterprise roles and internships; also covered by `lets-code-search` CLI
- **wellfound.com** - startup/tech roles in India (remote-friendly)
- **indeed.co.in** - general aggregator

Secondary (company career pages via Google):
- Direct Google searches with `site:` filters for known target companies
- `freehire-search` CLI for aggregated tech roles across ATS platforms

## Query Categories

Queries are grouped by priority. Each category is written in English and Hindi. Combine each query with your location terms (Remote India, Delhi NCR, Mathura) where the site supports it.

**Organize by function, not job title.** The same underlying work carries different titles across companies - "Full Stack Developer", "Software Engineer", "SDE", and "Product Engineer" can describe the same job.

### Priority 1: Full-Stack / Frontend / Backend Engineering

These match your strongest and most desired career direction.

```
site:naukri.com "Full Stack Developer" Node.js React Delhi NCR
site:naukri.com "Full Stack Developer" Remote India
site:naukri.com "Backend Developer" Node.js India
site:naukri.com "Frontend Developer" Next.js React India
site:linkedin.com/jobs "Full Stack Developer" Node.js India
site:linkedin.com/jobs "Software Engineer" React Node.js Remote India
site:wellfound.com "Full Stack Engineer" India
site:indeed.co.in "SDE" Node.js Delhi
site:naukri.com "फुल स्टैक डेवलपर" Node.js
site:naukri.com "सॉफ्टवेयर इंजीनियर" दिल्ली
```

### Priority 2: Domain - production platforms, payments, real-time

These match your domain expertise: production web platforms, payments, and real-time systems.

```
site:naukri.com "payments" developer Node.js India
site:naukri.com "real-time" WebSocket developer India
site:naukri.com "fintech" "full stack" India
site:linkedin.com/jobs "payments engineer" India
site:linkedin.com/jobs "Node.js" "microservices" India
site:naukri.com "production" platform developer Remote
```

### Priority 3: Adjacent - DevOps/Cloud, Solutions, Technical roles

Adjacent roles you could pivot into.

```
site:naukri.com "DevOps Engineer" Docker AWS India
site:naukri.com "Cloud Engineer" AWS India
site:linkedin.com/jobs "Solutions Engineer" India
site:linkedin.com/jobs "Technical Consultant" India
site:naukri.com "Software Development Engineer in Test" OR "SDE 1" India
```

### Priority 4: Broader Technical

Wider net for general technical roles.

```
site:naukri.com "Software Developer" Delhi NCR
site:naukri.com "React Developer" Remote India
site:linkedin.com/jobs "Web Developer" India
site:indeed.co.in "developer" Node.js Mathura OR Agra OR Delhi
site:naukri.com "प्रोग्रामर" OR "डेवलपर" भारत
```

## Location Filter

When evaluating results, verify the job location is within reasonable commute distance from your home. **Open to relocation** for the right role, so tiers reflect preference, not hard limits:

- **Ideal:** Remote (India-wide); Mathura; Delhi NCR (Delhi, Gurugram, Noida, Ghaziabad, Faridabad)
- **Acceptable (relocation open):** Bangalore, Pune, Hyderabad, Mumbai, Chennai, Jaipur, Agra, Chandigarh
- **Borderline:** Kochi, Lucknow, Indore, Ahmedabad (relocation possible but lower preference)
- **Too far / not targeted:** onsite roles outside India (no work-permit basis recorded); remote international roles acceptable

## Language Filter

Your working languages and levels are in CLAUDE.md's Languages table (Hindi - native, English - professional working proficiency). When filtering scraped results, apply `04-job-evaluation.md`'s Language Gate: a posting requiring a language you haven't declared at all is excluded; a posting requiring a higher level than you declared in a language you do work in is not excluded, flag it clearly instead (see `job-scraper/SKILL.md`'s Step 3 "Quick Fit Assessment" for how the flag surfaces in `/scrape` output). Postings simply *written* in a language you don't work in, that don't require it on the job, are fine.

## Date Filter

Only include jobs posted within the last 14 days, or with an application deadline that has not yet passed. If a posting date cannot be determined, include it but flag as "date unknown".

## Adapting Queries

If the user specifies a focus area, select queries from the matching category and also generate 2-3 custom queries for that focus. For example:
- "/scrape nodejs" -> Priority 1 + 2 Node.js queries + custom focus-specific queries
