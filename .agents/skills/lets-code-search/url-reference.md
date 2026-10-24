# lets-code.co.in endpoints

Everything below was verified live on **2026-10-22**.

## Catalogue (search + detail source)

| | |
|---|---|
| Method | `GET` (read-only) |
| Endpoint | `https://www.lets-code.co.in/api/trpc/job.getAllJobs` |
| Query | `input={"json":{}}` (URL-encoded) |
| Auth | none |
| Response | `{"result":{"data":[ ...jobs... ]}}` |

The site is a Next.js app; the jobs page renders client-side through a tRPC
`httpBatchLink` client pointed at `/api/trpc`. The catalogue procedure
`job.getAllJobs` ignores any input arguments and returns the **entire public
catalogue** (345 records when last checked), newest first by `createdAt`.

Procedure discovery notes (if the endpoint ever changes):
- The tRPC client is created in a shared chunk with `httpBatchLink({url:"/api/trpc"})`.
- Procedure names are plain paths; unknown paths return
  `{"error":{"message":"No \"query\"-procedure on path \"<name>\"","code":-32004}}`.
- `job.getAllJobs` is the only listing procedure found; `job.list`, `jobs.list`,
  `job.getAll`, `jobs.getAll` etc. all 404.

## Response record fields

| Field | Notes |
|-------|-------|
| `_id` | Mongo ObjectId hex string; the job's primary identifier |
| `title` | Job title |
| `company` | Company name (sometimes "Not specified") |
| `location` | Free-text location, e.g. "Bangalore, India"; sometimes "Not specified" |
| `type` | "Full-Time", "Internship", "Part-Time" |
| `experience` | e.g. "0+ years", "1+ years" |
| `salary` | e.g. "Not specified", "12-18 LPA" |
| `createdAt` / `updatedAt` | ISO timestamps; the CLI exposes `createdAt` as `date` (YYYY-MM-DD) |
| `status` | Publication status string |
| `description` | **HTML** body (h1/h2/p/ul/li) with the full posting text |
| `interviewExperience` | Free-text interview-experience notes, when present |
| `linkedinEmployeesLink` | Employee-count link, when present |

## Detail page

`https://www.lets-code.co.in/job/<_id>/` returns HTTP 200 and renders the job
in the browser. The page is client-rendered, so the CLI serves `detail` from
the catalogue payload instead of scraping the page.

## Filtering (client-side)

The endpoint takes no filter arguments, so the CLI filters in-process:

- `--query` - every token must appear in title, company, or description
- `--location` - substring match on `location` (and description); `Remote` also
  matches postings whose text mentions remote work
- `--jobage` - `createdAt` within N days
- `--type` - substring match on `type`
- `--page` / `--limit` - 20 results per page, client-side cap

## Apply / source URL

The original posting link (amazon.jobs, careers pages, jobfound.org, ...) is
embedded in the description body. The CLI extracts the first non-social
external link as `sourceUrl`; social/media links (facebook, instagram, linkedin
company pages, youtube, telegram, whatsapp) are skipped.

## Access rules (checked 2026-10-22)

```
User-Agent: *
Allow: /
Disallow: /dashboard/
Disallow: /api/
```

- The **only** enumeration path is under `/api/` (the tRPC endpoint), which
  robots.txt disallows. The public job pages under `/job/<id>/` are allowed but
  are client-rendered and are not listed in the sitemaps, so they cannot be
  discovered without the API.
- `sitemap.xml` lists static pages (including `/jobs` and `/startups-list/*`)
  but **no job detail URLs**; `sitemappost.xml` lists blog posts only.
- There is no authentication wall: the endpoint answers anonymous requests.
- Consequence: use for personal job search only, keep volume low, do not
  redistribute. If the portal changes its API, update this file first.
