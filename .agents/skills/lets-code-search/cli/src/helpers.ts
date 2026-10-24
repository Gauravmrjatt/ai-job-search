// Data source: lets-code.co.in public job listing API (tRPC, read-only GET).
// One call returns the whole public catalogue with full descriptions, so the
// CLI fetches once and filters client-side. No authentication, no API key,
// zero runtime dependencies.

export const API_URL = "https://www.lets-code.co.in/api/trpc/job.getAllJobs"
export const SITE_BASE = "https://www.lets-code.co.in"
export const JOBS_PAGE = `${SITE_BASE}/jobs/`

const UA = "Mozilla/5.0 (compatible; lets-code-search-cli/1.0)"

export function writeError(error: string, code: string): void {
  process.stderr.write(JSON.stringify({ error, code }) + "\n")
}

/**
 * Fetch JSON with exponential backoff on 429/5xx and on network timeouts
 * (max 6 retries, jittered). The catalogue payload is 345 records of full
 * HTML descriptions, so the timeout is generous (45s) and a timeout is
 * retried rather than surfaced - the endpoint is slow, not down.
 */
export async function jsonFetch(url: string): Promise<unknown> {
  const maxRetries = 6
  let delay = 500
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    let response: Response
    try {
      response = await fetch(url, {
        headers: {
          "User-Agent": UA,
          Accept: "application/json",
          "Accept-Language": "en-US,en;q=0.9",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(45000),
      })
    } catch (e) {
      // Network error or timeout: back off and retry.
      if (attempt === maxRetries) {
        throw new Error(`Request failed after ${maxRetries + 1} attempts: ${e instanceof Error ? e.message : String(e)}`)
      }
      const jitter = Math.floor(Math.random() * 500)
      await new Promise((r) => setTimeout(r, delay + jitter))
      delay = Math.min(delay * 2, 8000)
      continue
    }
    if (response.status === 429 || response.status >= 500) {
      if (attempt === maxRetries) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`)
      }
      const jitter = Math.floor(Math.random() * 500)
      await new Promise((r) => setTimeout(r, delay + jitter))
      delay = Math.min(delay * 2, 8000)
      continue
    }
    if (response.status === 404) return null
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status} ${response.statusText}`)
    }
    return await response.json()
  }
  throw new Error("Request failed after max retries")
}

function numericEntity(cp: number): string {
  return cp >= 0 && cp <= 0x10ffff ? String.fromCodePoint(cp) : ""
}

export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, dec) => numericEntity(parseInt(dec, 10)))
    .replace(/&#[xX]([0-9a-fA-F]+);/g, (_, hex) => numericEntity(parseInt(hex, 16)))
}

/** HTML -> readable plain text: paragraph and list breaks preserved. */
export function htmlToText(html: string): string {
  return decodeHtmlEntities(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|li|h[1-6]|tr|section|article)>/gi, "\n")
      .replace(/<li[^>]*>/gi, "- ")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

// Social, platform and boilerplate links that should not be mistaken for the
// original posting link when we pull an apply URL out of a description.
const LINK_NOISE =
  /(facebook|instagram|twitter|x\.com|youtube|linkedin\.com|discord|telegram|whatsapp|t\.me|topmate|media\.genpact|privacy-policy|terms)/i

// Paths that look like an actual posting or application destination.
const LINK_JOBISH = /(job|career|vacanc|opening|position|opening|apply|role|hiring|recruit)/i

/**
 * Pull the original posting/apply URL out of a description, when present.
 * Prefers a link whose path reads like a job destination, then falls back to
 * the first non-noise external link.
 */
export function extractSourceUrl(html: string): string | null {
  const links = html.match(/https?:\/\/[^\s"'<>)]+/g) ?? []
  const cleaned = links
    .map((l) => l.replace(/[.,;:]+$/, ""))
    .filter((l) => /^https?:\/\//i.test(l))
    .filter((l) => !l.includes("lets-code.co.in"))
    .filter((l) => !LINK_NOISE.test(l))
  const jobish = cleaned.find((l) => {
    try {
      return LINK_JOBISH.test(new URL(l).pathname)
    } catch {
      return false
    }
  })
  return jobish ?? cleaned[0] ?? null
}

export interface JobRecord {
  id: string
  title: string | null
  company: string | null
  location: string | null
  type: string | null
  experience: string | null
  salary: string | null
  date: string | null
  url: string
  sourceUrl: string | null
  description: string | null
  descriptionExcerpt: string | null
  status: string | null
}

interface RawJob {
  _id?: string
  title?: string
  company?: string
  location?: string
  type?: string
  experience?: string
  salary?: string
  createdAt?: string
  updatedAt?: string
  status?: string
  description?: string
}

function isoDate(value: string | undefined): string | null {
  if (!value) return null
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return null
  return d.toISOString().slice(0, 10)
}

function mapJob(raw: RawJob): JobRecord | null {
  const id = raw._id
  if (!id) return null
  const html = raw.description ?? ""
  const text = html ? htmlToText(html) : null
  return {
    id,
    title: raw.title ?? null,
    company: raw.company ?? null,
    location: raw.location ?? null,
    type: raw.type ?? null,
    experience: raw.experience ?? null,
    salary: raw.salary ?? null,
    date: isoDate(raw.createdAt),
    url: `${SITE_BASE}/job/${id}/`,
    sourceUrl: html ? extractSourceUrl(html) : null,
    description: text,
    descriptionExcerpt: text ? text.slice(0, 400) : null,
    status: raw.status ?? null,
  }
}

/** Fetch the whole public catalogue (one request) and normalise it. */
export async function fetchAllJobs(): Promise<JobRecord[]> {
  const url = `${API_URL}?input=${encodeURIComponent(JSON.stringify({ json: {} }))}`
  const payload = await jsonFetch(url)
  const data = (payload as { result?: { data?: RawJob[] } })?.result?.data
  if (!Array.isArray(data)) {
    throw new Error("Unexpected API shape: no result.data array")
  }
  return data
    .map(mapJob)
    .filter((j): j is JobRecord => j !== null)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
}

export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^a-z0-9+#./]+/i)
    .map((t) => t.trim())
    .filter((t) => t.length > 1)
}

/** Every token must appear somewhere in the posting (title, company or body). */
export function matchesQuery(job: JobRecord, tokens: string[]): boolean {
  if (tokens.length === 0) return true
  const haystack = `${job.title ?? ""} ${job.company ?? ""} ${job.description ?? ""}`.toLowerCase()
  return tokens.every((t) => haystack.includes(t))
}

export function matchesLocation(job: JobRecord, location: string): boolean {
  const loc = (job.location ?? "").toLowerCase()
  const want = location.toLowerCase().trim()
  if (!want) return true
  if (want === "remote") {
    return loc.includes("remote") || (job.description ?? "").toLowerCase().includes("remote")
  }
  if (loc.includes(want)) return true
  return (job.description ?? "").toLowerCase().includes(want)
}

export function matchesType(job: JobRecord, type: string): boolean {
  const want = type.toLowerCase().trim()
  if (!want) return true
  return (job.type ?? "").toLowerCase().includes(want)
}

export function withinDays(job: JobRecord, days: number, now = Date.now()): boolean {
  if (!job.date) return false
  const posted = new Date(job.date + "T00:00:00Z").getTime()
  const cutoff = now - days * 24 * 60 * 60 * 1000
  return posted >= cutoff
}
