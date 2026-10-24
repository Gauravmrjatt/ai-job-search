import {
  fetchAllJobs,
  matchesQuery,
  matchesLocation,
  matchesType,
  tokenize,
  withinDays,
  writeError,
  type JobRecord,
} from "../helpers.js"

export interface SearchOpts {
  query?: string
  location?: string
  jobage: number
  type?: string
  page: number
  limit?: number
  format: "json" | "table" | "plain"
}

export const PAGE_SIZE = 20

function renderTable(jobs: JobRecord[]): string {
  if (jobs.length === 0) return "No results."
  const rows = jobs.map((j) => {
    const title = (j.title || "").slice(0, 46).padEnd(46)
    const company = (j.company || "—").slice(0, 24).padEnd(24)
    const loc = (j.location || "—").slice(0, 26).padEnd(26)
    const date = j.date || "—"
    return `${j.id.padEnd(26)} ${title} ${company} ${loc} ${date}`
  })
  const header =
    "ID".padEnd(26) + " " + "TITLE".padEnd(46) + " " + "COMPANY".padEnd(24) + " " + "LOCATION".padEnd(26) + " DATE"
  return [header, "-".repeat(header.length), ...rows].join("\n")
}

export async function runSearch(opts: SearchOpts): Promise<number> {
  try {
    const all = await fetchAllJobs()
    const tokens = opts.query ? tokenize(opts.query) : []

    let matched = all.filter(
      (j) =>
        matchesQuery(j, tokens) &&
        (opts.location ? matchesLocation(j, opts.location) : true) &&
        (opts.type ? matchesType(j, opts.type) : true) &&
        (opts.jobage >= 9999 ? true : withinDays(j, opts.jobage)),
    )

    const totalMatched = matched.length
    const start = (opts.page - 1) * PAGE_SIZE
    let pageJobs = matched.slice(start, start + PAGE_SIZE)
    if (opts.limit !== undefined && opts.limit >= 0) pageJobs = pageJobs.slice(0, opts.limit)

    if (opts.format === "table") {
      process.stdout.write(renderTable(pageJobs) + "\n")
    } else if (opts.format === "plain") {
      process.stdout.write(
        pageJobs
          .map(
            (j) =>
              `${j.title}\n  ${j.company || "—"} · ${j.location || "—"} · ${j.date || "—"}\n  id: ${j.id}\n  ${j.url}` +
              (j.sourceUrl ? `\n  source: ${j.sourceUrl}` : ""),
          )
          .join("\n\n") + "\n",
      )
    } else {
      process.stdout.write(
        JSON.stringify(
          {
            meta: {
              count: pageJobs.length,
              page: opts.page,
              totalMatched,
              catalogueSize: all.length,
            },
            results: pageJobs.map((j) => ({
              id: j.id,
              title: j.title,
              company: j.company,
              location: j.location,
              date: j.date,
              url: j.url,
              sourceUrl: j.sourceUrl,
              type: j.type,
              experience: j.experience,
              salary: j.salary,
              descriptionExcerpt: j.descriptionExcerpt,
            })),
          },
          null,
          2,
        ) + "\n",
      )
    }
    return 0
  } catch (e) {
    writeError(e instanceof Error ? e.message : String(e), "SEARCH_FAILED")
    return 1
  }
}
