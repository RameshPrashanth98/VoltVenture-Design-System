# Phase 5: Discussion Log

**Date:** 2026-08-04
**Phase:** 05 — Design System Cleanup

---

## Areas Discussed

### 1. Phase Direction

**Question:** Phase number/direction?
**User decision:** Focus this repo on the design system only. Frontend development (React Native app) should be in a separate repo.

---

### 2. What "Finalized" Means

**Question:** What does finalizing the design system mean for Phase 5?
**Options presented:** Dark mode tokens, Status/feedback colors, npm publish, Component token layer (Tier 3)
**User decision:** Remove frontend development parts. Focus is cleanup, not adding new tokens.

---

### 3. Removal Scope

**Question:** Which frontend parts to remove?
**Options presented:** Remove apps/showcase only | Remove showcase + Phase 3 Storybook stories | Keep everything / just stop adding frontend work
**User decision:** Remove `apps/showcase/` only. Keep Storybook stories (they are design documentation).

---

### 4. Package Shape After Cleanup

**Question:** Root package.json workspaces field — keep or remove?
**Options presented:** Single package (no workspaces) | Keep monorepo shape
**User decision:** Keep monorepo shape (`workspaces: ["apps/*"]` stays).

---

### 5. New Token Categories

**Question:** Should Phase 5 also fill DS gaps (dark mode, status colors, etc.)?
**User decision:** Discuss that in next stages. Phase 5 is cleanup only.

---

### 6. Phase 4 Status

**Question:** Phase 4 awaits human device verification — how to handle?
**Options presented:** Mark complete as-is | Close as abandoned | Skip / jump to Phase 5
**User decision:** Close Phase 4 as abandoned (app is being removed anyway).

---

## Deferred Ideas

- Dark mode token layer — future phase
- Status/feedback colors — future phase (pending brand decision)
- npm registry publication — future phase
- Component token layer (Tier 3) — future phase
- Motion tokens — future phase

---

## Claude's Discretion

- How to clean up package-lock.json (npm install from root is standard)
- Whether to update README.md to remove showcase references (recommended)
