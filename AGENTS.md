# InviRtual — Agent Working Rules

Apply these rules to every task in this repository, alongside any more specific instructions for the affected application.

## Workflow and approval

- Work on **one small, well-defined functionality at a time**. Do not combine project setup, authentication, UI work, and other independent features into one task.
- **Before editing**, briefly explain the intended changes, likely files, any new dependencies, and the proposed validation. Ask for approval and wait. Once the user approves that scope, implement it without asking about trivial internal decisions.
- If new requirements, significant risks, or out-of-scope changes emerge, pause and ask before proceeding.
- Do not run builds, compilation, tests, linters, type checks, formatters, dependency installation, migrations, persistent servers, or Git write operations (including staging, commits, pushes, or merges) without explicit authorization. Read-only inspection is allowed.
- After implementation, report the files changed, a short summary, checks **not run**, and any outstanding risks or next steps. Never claim unexecuted checks passed.

## Scope and simplicity

- Prefer the smallest straightforward solution that meets the current requirements and fits existing project conventions.
- Do not add speculative features, unnecessary layers, interfaces, factories, adapters, configurations, documentation, or abstractions for hypothetical future needs.
- Reuse existing utilities and dependencies. Propose and justify new dependencies before installing them.
- Avoid unrelated refactors, renames, stylistic rewrites, or changes to files outside the approved task.
- Preserve existing architecture and public contracts unless a change is explicitly approved.
- The framework name may appear only in an application's folder name; keep internal project identifiers and package names framework-neutral.

## Configuration and security

- Use stable, framework-neutral names for configuration shared across applications. Do not invent framework-prefixed names such as `ANGULAR_PUBLIC_SUPABASE_URL`.
- Respect framework-required conventions (for example, Nuxt's `NUXT_PUBLIC_*`) within their own application. Do not silently rename existing environment variables; explicitly document any necessary mapping or migration.
- Never expose server secrets in client bundles or logs. Temporary token logging is permitted only when specifically requested for local development and must not remain enabled in production.

## Quality gates and tests

- Keep automated checks simple and aligned with the repository's current tooling. When separately authorized to configure them, prefer format/lint checks for changed files before commits and type checking before integration; run focused critical tests at the appropriate gate. Do not bypass configured checks.
- Write unit tests primarily for **critical or complex behavior**: HTTP/authentication/business services, complex components, meaningful data transformations, and custom directives. Do not require tests for trivial presentation code or chase arbitrary coverage targets.
- Installing or configuring checks does **not** grant permission for the agent to execute them. User-initiated commit/push hooks may run automatically once configured; all agent-initiated validation still requires approval.
