---
name: lets-code-search
version: 1.0.0
description: >
  Use this skill whenever the user wants to find jobs or internships in India
  from lets-code.co.in - startup and enterprise openings, off-campus drives,
  full-time roles and internships, mostly for students and early-career
  engineers. Trigger phrases: "lets code jobs", "lets-code.co.in", "jobs from
  lets code", "startup jobs in India", "off campus jobs", "internships in
  India", "naukri", "job khojo", "khuli naukri", "internship dhundho", "find
  jobs", "job search", "job openings", "vacancies", "hiring".
context: fork
enabled: true  # set to false to keep this portal installed but have /scrape skip it
allowed-tools: Bash(bun run .agents/skills/lets-code-search/cli/src/cli.ts *)
---

# Let's Code Search Skill

Search the public job catalogue behind **lets-code.co.in** - an India-focused
board for startup and enterprise roles, internships, and off-campus hiring.
No authentication, no API key, and **zero runtime dependencies** - it runs with
just `bun`.

The board is heavily India-skewed (Bengaluru, Gurgaon, Hyderabad, Pune, Chennai
and remote roles dominate) and mixes internships with 0-3 year full-time roles.

## ⚠️ Personal use only

The portal's `robots.txt` disallows `/api/`, which is where its listing
endpoint lives - there is no other way to enumerate the catalogue (the public
job pages are client-rendered and absent from the sitemaps). Use this for your
own job search, keep the volume low, do not redistribute the data, and run it
on your own responsibility.

## When to use this skill

- Find current openings in India for students, freshers, or early-career engineers
- Look for internships and off-campus drives alongside full-time roles
- Get the full description of one lets-code posting (with its original apply link)

## Commands

### Search job listings

```bash
bun run .agents/skills/lets-code-search/cli/src/cli.ts search [flags]
```

Key flags:
- `--query <text>` / `-q <text>` - keywords (title, skill, or role). Matches title, company, and description body.
- `--location <text>` / `-l <text>` - location filter, e.g. `"Bengaluru"`, `"Gurgaon"`, `"Remote"`.
- `--jobage <days>` - posted within N days: `1`, `7`, `14`, `30`. Omit for all postings.
- `--type <text>` - job type: `"Full-Time"`, `"Internship"`, `"Part-Time"`.
- `--page <n>` - 1-indexed page (20 results per page).
- `--limit <n>` / `-n <n>` - cap total results emitted (client-side).
- `--format json|table|plain` - default `json`.

### Fetch full job detail

```bash
bun run .agents/skills/lets-code-search/cli/src/cli.ts detail <id|url> [--format json|plain]
```

`id` is the `_id` from a search result (e.g. `6ad8b5f7baa9a2259ef059af`); a full
`https://www.lets-code.co.in/job/<id>/` URL also works. Returns the posting as
readable plain text plus the original source URL when the board embeds one.

## Usage examples

```bash
# React roles across India, newest first
bun run .agents/skills/lets-code-search/cli/src/cli.ts search -q "react developer" --limit 10 --format table

# MERN roles in Bengaluru posted in the last 30 days
bun run .agents/skills/lets-code-search/cli/src/cli.ts search -q "mern" -l "Bengaluru" --jobage 30 --format table

# Internships only
bun run .agents/skills/lets-code-search/cli/src/cli.ts search -q "developer" --type Internship --format table

# Remote backend work
bun run .agents/skills/lets-code-search/cli/src/cli.ts search -q "node" -l Remote --jobage 14 --format plain

# One posting in full
bun run .agents/skills/lets-code-search/cli/src/cli.ts detail 6ad8b5f7baa9a2259ef059af --format plain
```

## Output formats

| Format | Best for |
|--------|----------|
| `json` | Default - programmatic use, passing IDs to `detail` |
| `table` | Quick human-readable scanning |
| `plain` | Reading a single job's full detail (`detail` command) |

JSON shape: `{ "meta": { "count", "page", "totalMatched", "catalogueSize" }, "results": [...] }`
where each result carries `id`, `title`, `company`, `location`, `date`, `url`,
`sourceUrl`, `type`, `experience`, `salary`, and a short `descriptionExcerpt`.

All errors are written to **stderr** as `{ "error": "...", "code": "..." }` and the process exits with code `1`.

## Notes

- Data comes from one read-only catalogue request; filtering is client-side, so `--query`, `--location`, `--jobage`, and `--type` never change what the portal sends.
- Many records say `location: "Not specified"` or `salary: "Not specified"` - check the description body before judging fit.
- The `date` field is the board's own posting date (`createdAt`), which can run ahead of the real announcement date. Treat it as "listed on", not "posted on".
- The original employer link is embedded in the description; the CLI surfaces the first non-social external link as `sourceUrl` - use it for the real apply flow.
- `url-reference.md` records the endpoint, parameters, and response fields for whoever maintains this later.
