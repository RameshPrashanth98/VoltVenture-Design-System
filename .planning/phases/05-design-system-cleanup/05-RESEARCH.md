# Phase 5: Design System Cleanup - Research

**Researched:** 2026-08-05
**Domain:** Git housekeeping, npm workspace lockfile regeneration, README pruning
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Delete `apps/showcase/` directory and all its contents.
- **D-02:** Keep `apps/` directory itself — may hold future non-frontend packages.
- **D-03:** Keep root `package.json` `workspaces: ["apps/*"]` — monorepo shape retained.
- **D-04:** Regenerate `package-lock.json` after deletion (`npm install` from root) to remove showcase-specific deps.
- **D-05:** Keep ALL Storybook stories — token docs (Phase 2) AND component/screen stories (Phase 3).
- **D-06:** Mark Phase 4 as ABANDONED in ROADMAP.md. No SUMMARY.md needed.

### Claude's Discretion

- Exact approach to clearing showcase from package-lock.json (npm install --workspaces or plain npm install from root — either is fine as long as lockfile is clean).
- Whether to update README.md to remove references to the showcase app (recommended: update to reflect the repo's current scope).

### Deferred Ideas (OUT OF SCOPE)

- Dark mode token layer
- Status / feedback colors (error, warning, success, info)
- npm registry publication
- Component token layer (Tier 3)
- Motion tokens
</user_constraints>

---

## Summary

Phase 5 is primarily a git/housekeeping operation with no new code authoring. The `apps/showcase/` files are already deleted from the working tree — 29 files show as `D` (unstaged deletions) in `git status`. The `package-lock.json` is also already modified: `npm install` was run previously and reduced the lockfile from ~900+ node_modules entries to ~893 (the file still contains two showcase-referencing entries: `"apps/showcase"` and `"apps/showcase/node_modules/react-native-safe-area-context"`). Running `npm install` again from the root (with the apps/showcase/ directory absent from disk) will cleanly remove the remaining 589 extraneous packages and the two showcase package entries, leaving only the 5 dev dependencies the root package.json declares.

The design system's core pipelines are confirmed healthy right now, before any further changes: `npm run build:tokens` exits 0 (4 output files produced), `npm run test` exits 0 (42 pass, 0 fail), and `npm run build-storybook` exits 0 ("Storybook build completed successfully"). These serve as the done-bar for the phase.

The plan has three substantive tasks: (1) stage and commit the 29 file deletions, (2) run `npm install` and commit the regenerated lockfile, (3) update README.md and planning documents to reflect Phase 4 ABANDONED and the repo's new scope. No packages need to be installed. No new files need to be written.

**Primary recommendation:** Stage specific paths (`git add apps/showcase/`) to commit the 29 deletions, then run `npm install` from root to regenerate the lockfile, then prune README.md of all showcase-app content.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| File deletion (29 showcase files) | Git working tree | — | Already deleted on disk; only staging + commit remain |
| Lockfile regeneration | npm workspace root | — | `npm install` at root reads workspace glob and removes absent workspace |
| README update | Documentation | — | Static markdown edit; no tooling |
| Planning doc updates (ROADMAP, STATE) | Project metadata | — | Mark Phase 4 ABANDONED, Phase 5 COMPLETE |
| Done-bar verification | CI scripts | Local | `build:tokens`, `test`, `build-storybook` all pass before phase commit |

---

## Standard Stack

No new packages are introduced in this phase. The existing root devDependencies remain unchanged.

### Existing Root Dependencies (retained)

| Library | Current Version | Purpose |
|---------|----------------|---------|
| style-dictionary | ^5.5.0 | Token pipeline — unaffected |
| @storybook/html-vite | ^10.5.5 | Storybook docs — unaffected |
| storybook | ^10.5.5 | Storybook CLI — unaffected |
| vite | ^8.1.5 | Storybook bundler — unaffected |
| wcag-contrast | ^3.0.0 | Build validator — unaffected |

### Installation

No `npm install` of new packages needed. The `npm install` in this phase is a **lockfile cleanup run** — it removes extraneous showcase packages, not adds anything.

```bash
npm install
# Removes 589 extraneous packages (all React Native / Expo / showcase deps)
# Regenerates package-lock.json with only 5 root devDeps
```

---

## Package Legitimacy Audit

No new packages are being installed in this phase. Audit is not applicable.

---

## Architecture Patterns

### System Architecture Diagram

```
Working Tree (current state)
├── 29 files staged D (apps/showcase/**) — unstaged deletions
├── package-lock.json — modified (still has 2 showcase entries + 589 extraneous)
└── node_modules/ — has 589 extraneous packages

After Phase 5
├── apps/           — empty directory (kept per D-02)
├── package-lock.json — clean (only 5 root devDeps entries)
└── node_modules/ — only root devDeps installed
```

### Git Staging Safety Map

The working tree has three categories of uncommitted changes:

| Category | git status marker | Action |
|----------|-----------------|--------|
| 29 apps/showcase/** deletions | ` D` (unstaged) | Stage with `git add apps/showcase/` |
| package-lock.json modification | ` M` (unstaged) | Do NOT stage this now — re-run `npm install` first, then stage the fresh lockfile |
| .claire/, voltventure-foundations (1).html, voltventure_wireframes.pen | `??` (untracked) | NEVER stage — must not be committed |

**Critical:** Staging `apps/showcase/` (the specific path) is safe. Using `git add -A` or `git add .` would pull in the three untracked files. Never do that.

### Recommended Project Structure After Cleanup

```
voltventure-design-system/
├── tokens/           # DTCG JSON source — unchanged
├── lib/              # Generated TS + Dart outputs — unchanged
├── generated/        # tokens.js for Storybook — unchanged
├── stories/          # All 20 Storybook stories — unchanged
├── .storybook/       # Storybook config — unchanged
├── scripts/          # Validators — unchanged
├── sd-transforms/    # Custom SD v4 transforms — unchanged
├── apps/             # Empty directory (kept for future use)
├── style-dictionary.config.mjs
├── package.json      # workspaces: ["apps/*"] retained
├── package-lock.json # Regenerated — only 5 devDeps
└── README.md         # Updated — showcase section removed
```

---

## Key Findings Per Research Question

### Q1: What does `npm install` do to package-lock.json after `apps/showcase/` is removed?

[VERIFIED: npm --dry-run output, 2026-08-05]

`npm install --dry-run` confirms: running `npm install` from root with `apps/showcase/` absent from disk removes exactly **589 packages** (all React Native, Expo, and showcase-related transitive deps). The two showcase-specific lockfile entries (`"apps/showcase"` and `"apps/showcase/node_modules/react-native-safe-area-context"`) are also removed. The result is a clean lockfile with only the 5 root `devDependencies`.

**No manual lockfile editing is required.** `npm install` handles it entirely.

**Order matters:** Run `npm install` AFTER committing (or at least staging) the file deletions, so npm detects the workspace is gone. If `npm install` is run while the deletions are only on disk but not committed, it still works — npm reads the filesystem, not git history.

### Q2: What sections of README.md reference the showcase app and need updating?

[VERIFIED: direct file read, 2026-08-05]

The following README.md sections reference the showcase app and need to be removed or rewritten:

| Section | Line range | Content to remove |
|---------|-----------|------------------|
| Badges row | Line 13 | `[![Expo SDK](https://img.shields.io/badge/Expo_SDK-57-C6FF2D...)](https://expo.dev)` badge |
| Nav links | Line 16 | `[App Screens](#app-screens)` link |
| App Screens section | Lines 46–111 | Entire "App Screens" section (Gateway / Core Experience tables + two images) |
| Component Showcase App section | Lines 184–196 | "Component Showcase App" heading + 11 components list + 9 screens list |
| Quick Start — Showcase App | Lines 227–234 | "Showcase App (React Native)" subsection (cd apps/showcase; npx expo start) |
| Run Tests — TypeScript check | Lines 242–244 | `cd apps/showcase && npx tsc --noEmit` block |
| Project Structure — apps/showcase | Lines 268–275 | `apps/showcase/` subtree in the structure listing |
| Design Decisions table | Line 291 | `workspace:* protocol` row (showcase-specific rationale) |
| Roadmap table | Line 313 | `React Native Paper showcase app (20 items) | Complete` row |

**What to keep:** The "Design System Architecture", "Token Pipeline", "Token Categories", "Built-in Validators", "Accessibility", and remaining "Roadmap" rows — all design-system-core content stays.

**What to add:** A brief paragraph clarifying that Storybook (20 stories: 8 token categories + 11 components + 9 screens) is the visual documentation layer, and that the React Native app is in a separate repository. Update the `description` under `## Overview` to remove any reference to `apps/showcase`.

### Q3: Are there any references to apps/showcase in root package.json, .github/workflows, or other config files?

[VERIFIED: direct file inspection + grep, 2026-08-05]

| File | Contains showcase ref? | Action needed |
|------|----------------------|---------------|
| `package.json` (root) | No direct showcase ref; `workspaces: ["apps/*"]` is correct and KEPT per D-03 | None |
| `.github/workflows/storybook.yml` | No showcase refs — runs `npm ci`, `build:tokens`, `build-storybook` only | None |
| `.storybook/` config | No showcase refs (verified by grep — zero results) | None |
| `stories/` | No showcase refs (verified by grep — zero results) | None |
| `lib/` | No showcase refs | None |
| `tokens/` | No showcase refs | None |
| `.gitignore` | No showcase refs | None |
| `tsconfig.json` | No showcase refs | None |
| `style-dictionary.config.mjs` | No showcase refs | None |
| `.planning/PROJECT.md` | Describes repo without mentioning showcase by name | Consider minor update to "What This Is" (optional) |
| `.planning/ROADMAP.md` | Phase 4 status needs updating to ABANDONED | Update in planning docs task |
| `.planning/STATE.md` | Describes Phase 4 state | Update to reflect Phase 5 |

**The GitHub Actions CI workflow is clean.** It will continue to work correctly after showcase removal — `npm ci` will install only the 5 root devDeps (fast), and both build steps are unaffected.

**Important note on `npm ci` in CI:** After the lockfile is regenerated and committed, `npm ci` in GitHub Actions will install from the clean lockfile. It will no longer attempt to install Expo/React Native packages. CI build time will improve significantly.

### Q4: Does workspaces: ["apps/*"] cause issues if apps/ is empty?

[VERIFIED: npm behavior knowledge, confirmed by npm install dry-run output, 2026-08-05]

No issues. The `apps/*` glob simply matches no workspace packages when `apps/` is empty or contains no directories with a `package.json`. npm silently handles this — no error, no warning. The workspace shape is retained per D-03 for future flexibility. [ASSUMED: official npm docs on empty workspace glob behavior — consistent with observed dry-run output showing clean removal with no errors]

### Q5: Verification steps confirming design system is still healthy

[VERIFIED: live execution, 2026-08-05]

All three verification commands were run against the current state and pass:

| Command | Result | Notes |
|---------|--------|-------|
| `npm run build:tokens` | Exit 0 | 4 outputs: voltventure_tokens.dart, voltventure_tokens.ts, tokens.js, voltventure_theme.ts |
| `npm run test` | Exit 0 | 42 pass, 0 fail, 0 skip |
| `npm run build-storybook` | Exit 0 | "Storybook build completed successfully" |

These same commands should be run as the done-bar AFTER the showcase deletion and lockfile regeneration to confirm nothing regressed.

### Q6: Edge cases with git staging of 29 deletions

[VERIFIED: direct git inspection, 2026-08-05]

**Current git status:** All 29 deletions are **unstaged** (` D` marker — space before D means unstaged). They are NOT yet staged or committed.

**Safe staging command:**
```bash
git add "apps/showcase/"
```
This stages the entire `apps/showcase/` subtree (all 29 deletions) without touching the untracked files.

**Why not `git rm -r apps/showcase/`:** The files are already deleted from disk. `git rm -r` would fail or produce errors since the files don't exist on the filesystem. `git add apps/showcase/` correctly stages the deletions of already-removed files.

**Alternative approach (equivalent):**
```bash
git add apps/showcase/app.json
git add "apps/showcase/app/[item].tsx"
# ... (tedious for 29 files)
```
The path-based `git add apps/showcase/` is cleaner and stages all 29 at once.

**Bracket filename edge case:** `apps/showcase/app/[item].tsx` contains a bracket character. On Windows bash, bracket expansion can interpret `[item]` as a glob pattern. Use quotes:
```bash
git add "apps/showcase/"
```
Quoting the entire path avoids any shell glob expansion on the bracket filename.

**Lockfile staging order:** Stage and commit the 29 file deletions first (or together with the lockfile). The lockfile currently in the working tree still has `apps/showcase` entries. After running `npm install`, the lockfile will be fully clean. Stage the lockfile AFTER `npm install` completes:
```bash
# Option A: Two commits (cleaner history)
git add "apps/showcase/"
git commit -m "chore(cleanup): remove apps/showcase — showcase moves to separate repo"
npm install
git add package-lock.json
git commit -m "chore(deps): regenerate lockfile after showcase removal"

# Option B: One commit (acceptable — lockfile and deletions are causally linked)
git add "apps/showcase/"
npm install
git add package-lock.json
git commit -m "chore(cleanup): remove apps/showcase and regenerate lockfile"
```

Either approach is correct. One commit is simpler for this phase.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Lockfile cleanup after workspace removal | Manual deletion of lockfile entries | `npm install` from root | npm recalculates the full dependency graph; manual editing risks inconsistency |
| Staging multiple deleted files | `git rm` file-by-file | `git add apps/showcase/` (path-based) | Stages all 29 deletions in one command; git recognizes deletions via `git add` on missing files |

---

## Common Pitfalls

### Pitfall 1: git add -A or git add . accidentally commits untracked files

**What goes wrong:** The three untracked files (`.claire/`, `voltventure-foundations (1).html`, `voltventure_wireframes.pen`) enter git history permanently.
**Why it happens:** Developer uses shorthand staging instead of explicit paths.
**How to avoid:** Always use `git add apps/showcase/` (specific path), then `git add package-lock.json` (specific file). Never `git add -A` or `git add .` in this repo during this phase.
**Warning signs:** `git status` shows `?? .claire/` or `?? voltventure_wireframes.pen` — if these appear in `git diff --cached`, abort with `git reset HEAD <file>`.

### Pitfall 2: Running npm install before staging the deletions

**What goes wrong:** npm sees the workspace glob still resolves to the (now-missing) apps/showcase/ directory reference in the lockfile, but the directory is absent. npm might warn but will still regenerate correctly. Not a hard failure, but creates a confusing intermediate state.
**How to avoid:** Run `npm install` with `apps/showcase/` already deleted from disk (which it is). Order: delete (already done) → npm install → stage lockfile. Staging order relative to npm install does not matter as long as the directory is gone.
**Warning signs:** npm install completes with warnings like "could not resolve workspace" — these are benign in this case.

### Pitfall 3: Bracket filename causes git staging to silently miss [item].tsx

**What goes wrong:** On some shells, `git add apps/showcase/app/[item].tsx` without quotes triggers glob expansion. If no files match the expanded pattern, git silently does nothing.
**How to avoid:** Stage the whole directory (`git add "apps/showcase/"`) rather than file-by-file. Verify all 29 files are staged with `git diff --cached --stat` before committing.
**Warning signs:** `git diff --cached --stat` shows fewer than 29 files.

### Pitfall 4: README update leaves broken internal anchor links

**What goes wrong:** The nav bar (`[App Screens](#app-screens)`) points to a removed section. GitHub renders broken anchors silently — the link just doesn't scroll anywhere.
**How to avoid:** Remove the `[App Screens](#app-screens)` nav link when removing the "App Screens" section body. Verify the nav bar after edits.
**Warning signs:** Nav links that don't have a corresponding `## Heading` in the document.

### Pitfall 5: apps/ directory not committed as an empty directory

**What goes wrong:** Git does not track empty directories. After removing `apps/showcase/`, the `apps/` directory itself disappears from git's perspective (git only tracks files, not directories). If the intent is to keep `apps/` per D-02, a `.gitkeep` placeholder is needed.
**How to avoid:** Add a `.gitkeep` file to `apps/` before committing the deletions. This is the standard git idiom for retaining an otherwise-empty directory.
**Warning signs:** After staging the 29 deletions and committing, `ls apps/` shows "No such file or directory" after a fresh `git checkout`.

---

## Runtime State Inventory

> This is a cleanup/deletion phase, not a rename/refactor. No strings are being renamed. Omitted.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | npm install, build scripts | Yes | v24.14.0 | — |
| npm | Lockfile regeneration | Yes | 11.9.0 | — |
| git | Staging and committing deletions | Yes | (in PATH) | — |

No missing dependencies. All required tools confirmed available.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Node.js built-in test runner (`node --test`) |
| Config file | None — tests located in `sd-transforms/**/*.test.mjs` |
| Quick run command | `npm test` |
| Full suite command | `npm test` (same — 42 tests, ~800ms) |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| D-01 | apps/showcase deleted | smoke | `git diff --cached --stat \| grep "apps/showcase"` | N/A — verification step |
| D-04 | Lockfile regenerated | smoke | `node -e "const l=JSON.parse(require('fs').readFileSync('package-lock.json','utf8')); const keys=Object.keys(l.packages).filter(k=>k.startsWith('apps/showcase')); if(keys.length) throw new Error('showcase entries remain'); console.log('lockfile clean')"` | N/A — inline check |
| D-05 | All stories still build | integration | `npm run build-storybook` | Yes |
| — | Token pipeline healthy | integration | `npm run build:tokens` | Yes |
| — | All 42 SD transform tests pass | unit | `npm test` | Yes |

### Sampling Rate

- **Per task commit:** `npm run build:tokens && npm test` (< 5 seconds)
- **Phase gate:** `npm run build:tokens && npm test && npm run build-storybook` all exit 0

### Wave 0 Gaps

None — existing test infrastructure covers all phase requirements. No new test files needed.

---

## Security Domain

This phase makes no changes to authentication, data handling, cryptography, or input validation. No ASVS categories apply. Phase is purely file deletion + documentation update.

---

## Code Examples

### Stage 29 Deletions (Safe — Specific Path)

```bash
# From repo root
git add "apps/showcase/"
# Verify: should show exactly 29 files staged as deleted
git diff --cached --stat
```

### Add .gitkeep to Preserve apps/ Directory

```bash
touch "apps/.gitkeep"
git add "apps/.gitkeep"
```

### Regenerate Lockfile

```bash
# From repo root — removes 589 extraneous packages
npm install
# Verify lockfile is clean (no showcase entries)
node -e "
const lock = JSON.parse(require('fs').readFileSync('package-lock.json','utf8'));
const keys = Object.keys(lock.packages).filter(k => k.startsWith('apps/showcase'));
if (keys.length) { console.error('ERROR: showcase entries remain:', keys); process.exit(1); }
console.log('Lockfile clean — no showcase entries.');
"
```

### Verify Design System Health (Done-Bar)

```bash
npm run build:tokens && npm test && npm run build-storybook
echo "All checks passed"
```

### README Sections to Remove (exact headings)

```
## App Screens                    ← Remove entire section
## Component Showcase App         ← Remove entire section
### Showcase App (React Native)   ← Remove this Quick Start subsection
```

And remove from the nav bar:
```
[App Screens](#app-screens) ·    ← Remove this link
```

And from the badges row:
```
[![Expo SDK](https://img.shields.io/badge/Expo_SDK-57...)](https://expo.dev)  ← Remove
```

---

## State of the Art

No new technology patterns introduced in this phase. This is purely operational.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Empty workspace glob (`apps/*` with empty `apps/`) causes no npm errors | Q4 finding | npm might warn; not a blocking issue — easily discovered by running `npm install` |

**Only one assumed claim.** Everything else was verified directly against the working tree, live command output, or file inspection.

---

## Open Questions

1. **Should the Roadmap table entry for Phase 4 say "Abandoned" or be removed entirely?**
   - What we know: CONTEXT.md D-06 says "Mark Phase 4 as abandoned in ROADMAP.md"
   - What's unclear: Whether to keep the row with status "ABANDONED" or delete it from the table
   - Recommendation: Keep the row with `Status: ABANDONED` + reason — preserves project history without claiming it shipped

2. **Should .planning/PROJECT.md "What This Is" be updated?**
   - What we know: PROJECT.md currently describes the repo correctly as a design system package; it does not explicitly mention apps/showcase
   - What's unclear: Whether the "Components (Button, Card, Input, etc.) are a separate future phase" line should be updated to note they live in a separate repo
   - Recommendation: Minor update is worthwhile but not blocking; can be included in the documentation task or deferred

---

## Sources

### Primary (HIGH confidence)

- Direct git status inspection — working tree state, 2026-08-05
- `npm install --dry-run` output — 589 packages to be removed, 2026-08-05
- `npm run build:tokens` live execution — exit 0, 4 outputs confirmed
- `npm run test` live execution — 42 pass, 0 fail
- `npm run build-storybook` live execution — "Storybook build completed successfully"
- `package-lock.json` direct read — 2 showcase entries confirmed (`apps/showcase`, `apps/showcase/node_modules/react-native-safe-area-context`)
- `package.json` (root) direct read — 5 devDeps, `workspaces: ["apps/*"]`
- `README.md` direct read — identified all showcase-referencing sections
- `.github/workflows/storybook.yml` direct read — no showcase references

### Secondary (MEDIUM confidence)

- `npm ls --depth=0` output — confirms 5 non-extraneous root packages, all others extraneous
- Grep of stories/, .storybook/, lib/, tokens/ for "showcase" — zero results

---

## Metadata

**Confidence breakdown:**
- Git staging approach: HIGH — directly observed from git status and verified ordering
- npm install behavior: HIGH — confirmed via `--dry-run` showing exactly 589 removals
- README update scope: HIGH — all sections identified via direct file read
- Empty workspace glob behavior: MEDIUM — consistent with observed npm behavior (one assumed claim)

**Research date:** 2026-08-05
**Valid until:** Indefinite — this is a one-time cleanup with no external dependencies
