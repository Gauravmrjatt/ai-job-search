import { fetchAllJobs, writeError, type JobRecord } from "../helpers.js"

export interface DetailOpts {
  id: string
  format: "json" | "plain"
}

/** Accept a bare mongo id or the canonical https://www.lets-code.co.in/job/<id>/ URL. */
export function extractId(input: string): string | null {
  const trimmed = input.trim()
  const fromUrl = trimmed.match(/\/job\/([a-zA-Z0-9]+)/)
  if (fromUrl) return fromUrl[1]
  if (/^[a-zA-Z0-9]{8,}$/.test(trimmed)) return trimmed
  return null
}

export async function runDetail(opts: DetailOpts): Promise<number> {
  try {
    const id = extractId(opts.id)
    if (!id) {
      writeError(`no job id found in "${opts.id}"`, "BAD_ID")
      return 1
    }
    const jobs: JobRecord[] = await fetchAllJobs()
    const job = jobs.find((j) => j.id === id)
    if (!job) {
      writeError(`job ${id} not found in the public catalogue`, "NOT_FOUND")
      return 1
    }

    if (opts.format === "plain") {
      const lines = [
        job.title ?? "(untitled)",
        `Company: ${job.company ?? "—"}`,
        `Location: ${job.location ?? "—"}`,
        `Type: ${job.type ?? "—"}`,
        `Experience: ${job.experience ?? "—"}`,
        `Salary: ${job.salary ?? "—"}`,
        `Posted: ${job.date ?? "—"}`,
        `URL: ${job.url}`,
      ]
      if (job.sourceUrl) lines.push(`Source: ${job.sourceUrl}`)
      lines.push("", job.description ?? "(no description)")
      process.stdout.write(lines.join("\n") + "\n")
    } else {
      process.stdout.write(
        JSON.stringify(
          {
            meta: { count: 1 },
            results: [
              {
                id: job.id,
                title: job.title,
                company: job.company,
                location: job.location,
                date: job.date,
                url: job.url,
                sourceUrl: job.sourceUrl,
                type: job.type,
                experience: job.experience,
                salary: job.salary,
                status: job.status,
                description: job.description,
              },
            ],
          },
          null,
          2,
        ) + "\n",
      )
    }
    return 0
  } catch (e) {
    writeError(e instanceof Error ? e.message : String(e), "DETAIL_FAILED")
    return 1
  }
}
