---
name: invirtual-development
description: Implement a single approved feature, bug fix, or focused refactor in the InviRtual repository. Use this skill for coding tasks that require a brief proposal, explicit approval, and minimal changes.
---

# InviRtual development workflow

Follow the repository's `AGENTS.md` as the source of truth for permanent rules. Keep this workflow lightweight.

## Before changing code

1. Inspect only the relevant source files, current patterns, and repository instructions. Read-only inspection is allowed.
2. Reduce the request to one concrete objective. If it combines independent features, propose a sequence and address only the first approved feature.
3. Give the user a brief proposal stating: what will change, likely files, whether dependencies are needed, and which checks would be relevant.
4. **Ask for explicit approval and wait before editing.** If a material decision or scope change appears later, pause and ask again.

## After approval

- Implement the smallest maintainable solution consistent with existing code. Reuse existing components, services, naming, and dependencies.
- Do not add speculative features, abstractions, extra layers, tooling, or documentation. Do not refactor unrelated areas.
- Preserve existing configuration contracts. Do not invent framework-prefixed shared environment variables or rename existing variables without approval; respect framework-required conventions within each application.
- Add tests only when the approved task involves critical or complex behavior, such as authentication, HTTP/business services, important transformations, or custom component/directive logic. Avoid tests for trivial presentation code.
- **Do not run** builds, compilers, tests, lint, type checks, formatters, installations, migrations, servers, or Git write operations unless the user explicitly authorizes the specific actions.
- If asked to configure automated quality gates, prefer the repository's existing tools and keep that work in its own approved task. Do not bypass configured hooks.

## Finish

Report concisely:

1. Files changed and what was implemented.
2. Checks performed with authorization, and checks still pending.
3. Any notable limitation, risk, or suggested next small task.

Do not claim unrun validation passed or perform a commit on the user's behalf without permission.
