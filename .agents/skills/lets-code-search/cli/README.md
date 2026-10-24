# lets-code-cli

CLI for searching jobs on **lets-code.co.in**'s public listing catalogue (India:
startup and enterprise roles, internships, off-campus drives).

No authentication, no API key, **zero runtime dependencies** - it runs with just
`bun` plus the repo clone.

## Usage

```bash
# from the repo root
bun run .agents/skills/lets-code-search/cli/src/cli.ts search -q "react developer" --limit 10 --format table
bun run .agents/skills/lets-code-search/cli/src/cli.ts detail <id> --format plain
```

## Commands

| Command | Purpose |
|---------|---------|
| `search [--query] [--location] [--jobage] [--type] [--page] [--limit] [--format]` | Search the catalogue |
| `detail <id\|url>` | Full posting text for one job |

`--format` is `json` (default), `table`, or `plain`. Errors go to stderr as
`{"error": "...", "code": "..."}` with exit code `1`; stdout stays clean.

## Data source

One read-only GET against the portal's tRPC endpoint returns the whole public
catalogue with full descriptions, so the CLI filters client-side. See
`../url-reference.md` for the endpoint, parameters, and response shape.

## Development

```bash
cd .agents/skills/lets-code-search/cli
bun install     # dev-only types
bun run typecheck
bun run test    # live smoke tests (hits the network)
```

The test suite makes live calls; keep it running when the portal is reachable.

## Personal use only

The portal's `robots.txt` disallows `/api/`, which is where the listing
endpoint lives. Use this for your own job search, keep the volume low, do not
redistribute the data, and run it on your own responsibility.
