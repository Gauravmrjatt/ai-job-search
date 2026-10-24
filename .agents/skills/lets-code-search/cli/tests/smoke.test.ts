import { describe, expect, test } from "bun:test"
import { parseJSON, runCLI } from "./helpers.js"

interface SearchPayload {
  meta: { count: number; page: number; totalMatched: number; catalogueSize: number }
  results: Array<{
    id: string | null
    title: string | null
    company: string | null
    location: string | null
    date: string | null
    url: string | null
  }>
}

describe("lets-code-search CLI", () => {
  test("search returns real results with populated id, title and url", async () => {
    const result = await runCLI(["search", "-q", "react", "--limit", "5"])
    expect(result.exitCode).toBe(0)
    const payload = parseJSON<SearchPayload>(result)
    expect(payload.results.length).toBeGreaterThan(0)
    expect(payload.meta.catalogueSize).toBeGreaterThan(0)
    for (const job of payload.results) {
      expect(job.id).toBeTruthy()
      expect(job.title).toBeTruthy()
      expect(job.url).toBeTruthy()
      expect(job.url).toContain("lets-code.co.in")
    }
  })

  test("search honours --limit", async () => {
    const result = await runCLI(["search", "-q", "developer", "--limit", "3"])
    expect(result.exitCode).toBe(0)
    const payload = parseJSON<SearchPayload>(result)
    expect(payload.results.length).toBeLessThanOrEqual(3)
  })

  test("unknown flag exits 1 with a JSON error on stderr", async () => {
    const result = await runCLI(["search", "--bogus", "x"])
    expect(result.exitCode).toBe(1)
    const err = JSON.parse(result.stderr)
    expect(err.code).toBe("UNKNOWN_FLAG")
    expect(result.stdout).toBe("")
  })

  test("detail without an id exits 1 with a JSON error", async () => {
    const result = await runCLI(["detail"])
    expect(result.exitCode).toBe(1)
    const err = JSON.parse(result.stderr)
    expect(err.code).toBe("NO_ID")
  })
})
