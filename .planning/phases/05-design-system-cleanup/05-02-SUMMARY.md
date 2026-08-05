# Plan 05-02 Summary — Regenerate lockfile after showcase removal

**Status:** COMPLETE
**Commit:** 06c9a88
**Date:** 2026-08-05

## What was done

Ran `npm install` which removed 589 extraneous packages. The `apps/showcase` workspace entry persisted in the lockfile with `"extraneous": true` (npm did not auto-clean it). Removed it surgically via node script (JSON parse, delete key, write back). Ran build:tokens and npm test (42 pass) to confirm design system health. Staged and committed only package-lock.json.

## Deviation

npm did not fully clean the `apps/showcase` lockfile entry after `npm install` — it left it with `"extraneous": true`. Removed programmatically. This is a known npm behavior when workspace directories are deleted from disk before the lockfile is regenerated.

## Incident — lib/ mutation after build:tokens

Running `npm run build:tokens` (health check) regenerated `lib/voltventure_theme.ts` and `lib/voltventure_tokens.ts`, dropping the manual `onPrimary` override and changing `export const` → `const`. These were reverted via `git restore` before staging. The committed lib/ files are correct. This matches the MEMORY.md researcher-agent warning pattern.

## Outcome

- `npm install` removed 589 packages (589 showcase/Expo/RN transitive deps)
- Lockfile clean: 0 entries starting with `apps/showcase`
- `npm run build:tokens` exits 0 (4 output files)
- `npm test` exits 0 (42 pass, 0 fail)
- Commit `06c9a88`: package-lock.json only (3064 insertions, 15361 deletions)
- lib/ files reverted to committed state after build:tokens mutation
