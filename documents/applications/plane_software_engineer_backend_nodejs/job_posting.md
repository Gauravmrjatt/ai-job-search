# Job Posting - Plane Software, Inc. - Software Engineer, Backend (Node.js)

- Source URL: https://startup.jobs/software-engineer-backend-nodejs-plane-software-inc-8138354?utm_source=freehire.me
- Posted/listed: (scrape date 2026-10-17 per freehire table; exact posting date not shown on page)
- Location: India (remote)
- Employment type: Full-Time
- Company facts (page-verified 2026-10-23): Founded 2023; 11-50 employees; Funding stage Seed; Total raised $4M; open-source on GitHub since end of 2022; 55,000+ stars, 5,000+ forks; built across San Francisco, London, Hyderabad; #1 work infrastructure claim in aerospace, defense, financial services, regulated industries; Deployments: Plane Cloud, customer self-hosted, fully isolated (sovereign) clouds.

## Description (verbatim, rendered via browser 2026-10-23)

TLDR

Own integrations, data importers, queues, OAuth APIs, and agent apps that keep work systems synchronized and preserve accountable history.

About Plane

Plane's mission is to build the infrastructure the world's work runs on. Every organization runs on three things: the projects it's driving, the knowledge it keeps, and the requests it fields. Plane brings all three into one open, adaptable platform: simple enough for any team to adopt, dependable enough for organizations to build on. And we are building it for a future where humans and AI agents do that work together.

Plane began in public on GitHub at the end of 2022. Since then it has grown into a work management platform used by teams around the world: 55,000+ stars, 5,000+ forks, and a contributor community that reads our code and files our issues. Organizations run Plane as a managed Cloud service, on their own infrastructure, or inside fully isolated environments. Building in the open keeps us close to users and raises the standard for everything we ship.

Plane is the #1 work infrastructure in aerospace, defense, financial services, and other regulated industries: organizations whose requirements for control, auditability, and data residency rule most software out. When the strictest buyers pick a system of record, that choice means something. Adoption is growing fastest on Plane Cloud and in sovereign clouds, deployments that keep everything inside a country's own borders and rules.

Plane is backed by top investors and built across San Francisco, London, and Hyderabad. We work in tightly knit teams, stay close to users, and care about the visible product as much as the unglamorous details that make software dependable. People own problems end to end, and we add process only when it helps the work.

Humans and agents

We believe the next decade of work will be done by humans and AI agents together. Not agents replacing people, and not a chat window bolted onto software built for humans clicking around, but both working in one system of action, where an agent's work is as visible and as accountable as a person's.

Most software treats AI as a feature. We treat agents as a kind of worker, and that changes what the system underneath has to be. Agents are only as good as the context they can see and the state they are allowed to change, so shared context, explicit state, durable history, and accountable action are not items on our roadmap. They are the product. Plane is built so that when an agent acts, the humans responsible can see what happened, why, and on whose authority, and the record survives.

This is what the infrastructure is for: making the future where humans and agents work together useful, legible, and fully within the organization's control. Every role at Plane is some part of building that.

About the role

Work arrives at Plane from everywhere else first: Slack threads, GitHub pull requests, the Jira or Linear instance a company is leaving behind, and now from agents acting through OAuth apps that other developers wrote. You will own the Node and TypeScript services that carry all of it, which means the importers that move a company's history without losing a comment, the integrations that keep two systems agreeing about the same issue, and the queues and workers underneath both. You will also own the developer surface external builders use to write apps against Plane, so the quality of your API decisions shows up in other people's software. You will work with the Django engineers whose data model you write into, and with external developers who report their bugs in public GitHub issues rather than a support queue.

What you'll do

- Own the integrations that connect Plane to Slack, GitHub, and the other tools work arrives from, including what happens when the other side changes its API without telling anyone.
- Own the importers that migrate a customer's history out of Jira, Linear, and similar tools. An import that drops a comment or reassigns an issue is a bad first day for an entire company.
- Design the queue and worker architecture behind that work: retries, idempotency, backpressure, and the jobs that must never run twice.
- Build the OAuth and developer-facing surface that external builders write apps against, including the agent apps that act inside customer workspaces.
- Work daily with the Django engineers whose data model you write into, and answer external developers in public GitHub issues.
- Reconcile state after something failed halfway. Partial imports, expired tokens, and rate limits mean real time goes into repair paths rather than new features.

What you'll bring

- You have shipped Node.js and TypeScript to production. Point us to something you built, and tell us one decision in it you would make differently now.
- You have worked in Express, NestJS, or a comparable framework. Structure, middleware, and dependency wiring are familiar rather than new.
- You have built queue and worker systems. Retries, idempotency, and what happens when a job dies halfway are problems you have already solved once.
- You have integrated with third-party APIs you did not control. Rate limits, pagination, webhook delivery, and tokens that expire at the worst moment.
- You are comfortable in Postgres. You can read a query, add an index, and say why it helped.

Nice to haves

- You have contributed to Plane, run it self-hosted, or maintained another open project people rely on.
- You have built an importer or migration tool where losing data was not an acceptable outcome.
- You have worked on the provider side of OAuth, or on a developer platform other people built apps against.
- You have built systems where AI agents act on real data, and you have opinions about state, permissions, and audit trails.

Tech

- Backend: Node.js and TypeScript, [Express or NestJS, confirm with engineering], Python/Django, Postgres, Redis
- Messaging: RabbitMQ
- Infrastructure: AWS, Kubernetes
- Observability: Datadog, Sentry
- Everyday tools: GitHub, Postman, pgAdmin, Plane (yes, we run on it), Figma, Slack

Why Plane?

Every company says it is different. We will try evidence instead.

- The scope is real. We are a passion team serving companies of every size, including some of the largest in the world. Something you ship this month will run inside a Fortune 500 company and a 50-person startup in the same week, and you will hear from both.
- The constraints make you better. Plane runs in our cloud, in customers' clouds, and on machines that will never touch the internet. Much of the work happens in the open, where the issues, the fixes, and the roadmap conversations are public. Building software that survives all of that is harder than building an ordinary SaaS product, and it is a better education than most companies can offer.
- The people-and-agents future is being built here, in production. We think humans and AI agents will share one system of action for work. We are building that system now, for customers who already depend on it, and you will work on that problem directly whatever your role.
- Your name is on the work. The teams are deeply connected enough that credit and responsibility both find you fast. That is some pressure. Mostly it is the fun part.

If that sounds like your kind of place, we would like to meet you.

Plane is an equal opportunity employer. We do not discriminate based on race, color, religion, gender identity or expression, sexual orientation, national origin, age, disability, veteran status, or any other protected characteristic under applicable law.
