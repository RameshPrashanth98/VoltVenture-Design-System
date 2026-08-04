# Phase 5: Design System Cleanup - Context

**Gathered:** 2026-08-04
**Status:** Ready for planning

<domain>
## Phase Boundary

Remove `apps/showcase/` from this repository so the repo is exclusively a design system package. Storybook token and component/screen documentation stays. Phase 4 is closed as abandoned. No new token categories are added in this phase.

This repo's ongoing focus: token pipeline (Style Dictionary), generated TypeScript constants, React Native Paper theme factory, and Storybook visual documentation. Frontend app development moves to a separate repository.

</domain>

<decisions>
## Implementation Decisions

### Showcase Removal
- **D-01:** Delete `apps/showcase/` directory and all its contents (Expo app, all Preview components, registry, metro config, tsconfig, package.json).
- **D-02:** Keep `apps/` directory itself — it may hold future non-frontend packages.
- **D-03:** Keep root `package.json` `workspaces: ["apps/*"]` — monorepo shape is retained for future flexibility.
- **D-04:** Regenerate `package-lock.json` after deletion (`npm install` from root) to remove showcase-specific deps from the lockfile.

### Storybook Retention
- **D-05:** Keep all Storybook stories — token docs (Phase 2: Color, Typography, Spacing, Radius, Elevation, Border, Grid, Iconography) AND component/screen stories (Phase 3: 11 components + 9 screens). These are design documentation, not frontend builds.

### Phase 4 Closure
- **D-06:** Mark Phase 4 as abandoned in ROADMAP.md (not COMPLETE). No SUMMARY.md needed. Reason: the showcase app is being removed as a direction change; the automated verification Task 1 passed but human device verification was never done before the decision to remove.

### Future Scope
- **D-07:** New token categories (dark mode, status colors, motion tokens) and npm publish are deferred — they are separate future phases, not part of this cleanup.
- **D-08:** Frontend build (React Native app consuming the design system) will live in a separate repository, not this one.

### Claude's Discretion
- Exact approach to clearing showcase from package-lock.json (npm install --workspaces or plain npm install from root — either is fine as long as lockfile is clean).
- Whether to update README.md to remove references to the showcase app (recommended: update to reflect the repo's current scope).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope
- `.planning/PROJECT.md` — defines what this repo is; update "What This Is" to remove showcase app mention after cleanup
- `.planning/ROADMAP.md` — Phase 4 status and Phase 5 plan; must be updated to reflect abandonment

### Phase 4 Files to Delete
- `apps/showcase/` — entire directory (Expo app built in Phase 4)
- `apps/showcase/package.json` — has workspace:* dep on voltventure-design-system
- `apps/showcase/src/data/registry.ts` — 20-entry registry (no longer needed)
- `apps/showcase/src/components/` — 11 component Preview files
- `apps/showcase/src/screens/` — 9 screen Preview files

### Files to Keep
- `package.json` (root) — keep workspaces: ["apps/*"], just remove showcase-only packages if any leaked to root
- `lib/` — all DS package outputs (tokens, theme, index)
- `stories/` — all Storybook stories (keep in full)
- `.storybook/` — Storybook config
- `tokens/` — DTCG JSON source files
- `generated/` — Style Dictionary output

### Prior Phase Summaries (for reference)
- `.planning/phases/04-rn-paper-showcase-app/04-07-SUMMARY.md` — last completed plan; registry merge

</canonical_refs>

<code_context>
## Existing Code Insights

### Monorepo Structure
- Root `package.json` has `workspaces: ["apps/*"]` and `name: "voltventure-design-system"`
- `apps/showcase/package.json` has `"voltventure-design-system": "workspace:*"` — this dep will disappear when the directory is deleted
- `package-lock.json` will have showcase entries that need to be cleaned up via `npm install`

### What Stays
- `lib/voltventure_tokens.ts`, `lib/voltventure_theme.ts`, `lib/index.ts` — DS package core
- `stories/components/*.stories.js` (11 files) + `stories/screens/*.stories.js` (9 files) — Phase 3 Storybook
- `stories/*.stories.js` (8 files) — Phase 2 token documentation
- `generated/tokens.js` — Style Dictionary output for Storybook
- `tokens/` — DTCG JSON source

### Integration Points
- After deleting `apps/showcase/`, run `npm install` from root to regenerate `package-lock.json`
- Verify `npm run build:tokens` still passes (unaffected by showcase removal)
- Verify `npm run build-storybook` still passes (unaffected by showcase removal)

</code_context>

<specifics>
## Specific Ideas

- README.md likely references the showcase app (Phase 4 work was highlighted) — update to focus on token pipeline + Storybook docs only
- The git status at session start showed `D apps/showcase/...` entries (staged deletions from prior session?) — check git status before deleting to avoid double-staging

</specifics>

<deferred>
## Deferred Ideas

- **Dark mode token layer** — semantic dark theme tokens + `createVoltVentureDarkTheme()` — future phase
- **Status / feedback colors** — error, warning, success, info — pending brand color decision — future phase
- **npm registry publication** — publish voltventure-design-system to npm — future phase
- **Component token layer (Tier 3)** — `button.primary.bg` → `action.primary` style component tokens — future phase
- **Motion tokens** — prototype video inaccessible; values speculative — future phase

</deferred>

---

*Phase: 05-design-system-cleanup*
*Context gathered: 2026-08-04*
