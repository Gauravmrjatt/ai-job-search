---
framework_version: 1.0.0
---

# Interview Preparation Guide

## STAR Format

Structure answers as: **Situation** (context), **Task** (your responsibility), **Action** (what you did), **Result** (outcome).

Keep answers to 1-2 minutes. Be specific. End with what you learned or would do differently.

## Ready-Made STAR Examples

### 1. Cashbackwallah - production logistics platform (End-to-end ownership)
**S:** A client needed a logistics platform built from nothing: courier rate comparison, shipment booking, order management, and a multi-level franchise commission system - with real money moving through it.
**T:** Own the entire build solo - architecture, database schema, frontend, payments, third-party integrations, and deployment.
**A:** Built with Next.js, TypeScript, Express.js, Prisma, and PostgreSQL; integrated Shiprocket for shipping, Razorpay for payments (with signature verification), Firebase OTP for auth, Redis for caching/queues, and Sentry for error tracking; set up CI/CD and deployed end-to-end.
**R:** Platform went live and processed 1,000+ orders, with wallet/ledger, KYC-gated orders, automated payouts, webhook processing, and scheduled refund workflows running in production. Demo: cashbackwallah.com
**Use for:** "Tell me about a project you're proud of", "ownership", "full-stack capability", "shipping under pressure"

### 2. Cashbackwallah - payments, ledger, and payout reliability (Payments & correctness)
**S:** The platform handled real customer payments, franchise commissions, and payouts - errors would mean lost money and broken trust.
**T:** Make money movement correct and auditable: payments in, commissions split, payouts out, refunds handled.
**A:** Implemented Razorpay payment signature verification, a wallet and transaction ledger, KYC-gated order flow, automated payout processing, webhook handling with retry semantics, and scheduled refund workflows - all instrumented through Sentry.
**R:** A fully automated, auditable money pipeline running in production with no manual payment reconciliation. 
**Use for:** "How do you handle correctness/reliability?", "experience with payments", "attention to detail"

### 3. Dream10 - real-time quiz platform (High concurrency / real-time)
**S:** A real-time quiz platform had to serve partners live: hundreds of concurrent players, live leaderboards, anti-cheat, and instant payment/payout settlement - all with no visible lag or cheating.
**T:** Build the real-time layer and the background processing so the system stays correct under load.
**A:** Used WebSockets for live state, Redis for leaderboards and ephemeral state, RabbitMQ for durable event processing, and Node.js for fault-tolerant services handling high-concurrency events; implemented anti-cheat mechanisms and automated payment/payout processing; managed CI/CD.
**R:** Shipped a production platform to partners handling live concurrent play with automated payouts. Demo: dream10.in
**Use for:** "Experience with scale/real-time?", "system design", "how do you handle concurrency?"

### 4. Lead Tracking System - scaling and monitoring (Reliability & DevOps)
**S:** An affiliate lead-tracking platform built in 2024 kept growing; background processing and visibility into production health became the bottleneck, and the client still needed occasional updates.
**T:** Keep it reliable and observable while extending it on demand as an ongoing maintenance engagement.
**A:** Scaled background processing with RabbitMQ, Redis, and Node.js Cluster; implemented Prometheus, Grafana, and Loki monitoring; maintained real-time dashboards, fraud detection, webhook/postback handling, Telegram alerts, and role-based access control.
**R:** Platform has run in production since 2024, still actively maintained and extended - a multi-year client relationship. Demo: panel5.logicpay.in
**Use for:** "How do you handle production monitoring?", "maintaining legacy systems", "reliability"

## Common Tough Questions

### "Why did you leave [previous company]?"
> Freelance/contract model - projects end when delivered. Frame positively: each engagement was a complete build handed off or transitioned to maintenance; now looking for a team and longer-term ownership.

### "You don't have [specific skill/experience]."
> Acknowledge the gap honestly, bridge to adjacent experience (e.g. no Kubernetes -> Docker + CI/CD on AWS EC2), show a concrete example of learning fast on the job.

### "Where do you see yourself in 5 years?"
> Growing from full-stack delivery into system design / tech-lead scope on production platforms, with deeper cloud and DevOps ownership.

### "What's your biggest weakness?"
> Prepare a genuine one with mitigation - e.g. breadth-first tendencies; mitigation: goes deep on payments/reliability areas where correctness matters.

### "Why this company specifically?"
> Customize per company. Must reference: specific projects, company values, market position, or team structure. Never give a generic answer.

## Questions You Should Ask Interviewers

### About the Role
- "What does a typical week look like in this role?"
- "What would success look like in the first 6 months?"
- "What's the biggest challenge the team is facing right now?"

### About the Team
- "How big is the team, and how do you divide work?"
- "What does the development/project lifecycle look like, from idea to production?"
- "How do you onboard new team members?"

### About Tech & Growth
- "What's your current tech stack for [relevant area]?"
- "Is there room to grow into more architectural or strategic decisions?"
- "How does the team stay current with new tools and methods?"

### About Culture (use these to prevent disappointment)
- "How would you describe the team culture?"
- "What does professional development look like here?"
- "Is there flexibility for remote/hybrid work?"
- "What's the balance between development/new projects and maintenance work?"
- "How would you describe the leadership style in this team?"
- "What do people who thrive here have in common?"

## Phone/Video Interview Tips
- Have STAR examples written out (use this file)
- Keep a glass of water nearby
- Smile when speaking (it changes your tone)
- Ask for clarification if a question is vague
- It's OK to take 5 seconds to think before answering
- End with: "Is there anything else you'd like to know about my background?"

## After the Application (Best Practice)

### Follow-Up Etiquette
- **Don't call to "stand out"** or to learn more about the role post-submission - this risks a negative impression
- If the employer specified a timeline, respect it and wait
- If no timeline was given and significant time has passed (2+ weeks), a brief call to ask about status is acceptable
- If you have genuinely new, relevant information to share, a short follow-up is fine

### Thank-You Notes
- When you receive any update (interview invitation, rejection, or status update), send a brief thank-you message
- Express appreciation for their time and the process
- Keep it short (2-3 sentences)

## Roleplay Guidelines
When the user asks for interview practice:
1. Ask which role/company to simulate
2. Start with easy warm-up questions ("Tell me about yourself")
3. Progress to role-specific technical questions
4. Include 1-2 behavioral questions using the competencies from the job posting
5. End with a tough question or curveball
6. After each answer, give brief feedback: what worked, what to sharpen
7. Suggest which STAR example would work best for each question
