---
phase: 01-token-pipeline-dart-output
plan: "01"
name: Project Scaffold
subsystem: build-tooling
tags: [scaffold, style-dictionary, flutter, dart, npm, package-manifest]
dependency_graph:
  requires: []
  provides:
    - package.json (Node.js tooling manifest with SD v4.4.0)
    - pubspec.yaml (Dart package manifest with google_fonts ^6.2.0)
    - style-dictionary.config.mjs (SD v4 ESM config with usesDtcg:true, three platforms)
    - directory-skeleton (tokens/, lib/, generated/, sd-transforms/, scripts/)
  affects:
    - All Wave 1 parallel plans (01-02, 01-03) depend on this scaffold
    - All Wave 2+ plans depend on tokens/ and sd-transforms/ directories
tech_stack:
  added:
    - style-dictionary ^4.4.0 (npm devDep)
    - wcag-contrast ^3.0.0 (npm devDep)
    - google_fonts ^6.2.0 (Dart dep)
    - flutter_lints ^4.0.0 (Dart devDep)
  patterns:
    - ESM module ("type":"module" in package.json)
    - SD v4 usesDtcg:true for W3C DTCG JSON source
    - Graceful skip when tokens/ is empty (no exit 1 on empty source)
key_files:
  created:
    - package.json
    - package-lock.json
    - pubspec.yaml
    - tsconfig.json
    - style-dictionary.config.mjs
    - scripts/validate-tokens.mjs
    - .pubignore
    - tokens/primitive/.gitkeep
    - tokens/semantic/.gitkeep
    - tokens/component/.gitkeep
    - lib/.gitkeep
    - generated/.gitkeep
    - sd-transforms/.gitkeep
  modified:
    - .gitignore (removed generated/ entry, added .flutter-plugins files)
decisions:
  - SD version pinned to ^4.4.0 (latest SD v4; SD v5 is out but PLAN.md specifies v4)
  - SD config uses graceful skip (not exit 1) when tokens/ is empty
  - generated/ NOT in .gitignore (Storybook JS reference is committed per plan task action)
  - lib/ NOT in .gitignore (generated Dart is committed per Dart package convention)
metrics:
  duration: "~25 minutes"
  completed: "2026-07-24T05:50:00Z"
  tasks_completed: 2
  files_created: 13
---

# Phase 01 Plan 01: Project Scaffold Summary

**One-liner:** Node.js + Dart package scaffold with Style Dictionary v4.4.0 ESM config (usesDtcg:true), three platform stubs, and complete directory skeleton — npm run build exits 0 with empty token set.

## What Was Built

### Task 1: Package manifests and build scripts

Created the core manifests for both the Node.js tooling layer and the Dart package layer:

- **`package.json`** — name `voltventure-design-system-tools`, `"type": "module"` (ESM), style-dictionary ^4.4.0, wcag-contrast ^3.0.0, four build scripts (`build:validate`, `build:tokens`, `build`, `test`)
- **`pubspec.yaml`** — name `voltventure_design_system`, flutter `>=3.19.0`, sdk `>=3.3.0 <4.0.0`, google_fonts ^6.2.0, flutter_lints ^4.0.0
- **`tsconfig.json`** — ESNext/ES2022 target for editor type-checking of SD config and scripts (no compilation step needed)
- **`package-lock.json`** — locked dependency tree, 172 packages, 0 vulnerabilities

Supply chain security check (T-01-SC): Only `style-dictionary` and `wcag-contrast` were present in package.json. Both are known legitimate packages. No `[ASSUMED]` or `[SUS]` packages detected. `npm install` completed with 0 vulnerabilities.

SD version note: `npm info style-dictionary version` returned v5.5.0 (latest overall). `npm info style-dictionary@4 version` confirmed v4.4.0 is the latest stable v4.x. Pinned to `^4.4.0` per plan requirement to use v4 (DTCG native support, ESM-first, v5 is a separate migration).

### Task 2: Directory skeleton, gitignore, and SD config stub

Created the complete directory skeleton and configuration stubs:

- **`style-dictionary.config.mjs`** — ESM config with:
  - `usesDtcg: true` (critical — enables $type/$value DTCG parsing)
  - `source: ['tokens/**/*.json']`
  - Three platforms: `dart` (-> lib/voltventure_tokens.dart), `dart/theme` (-> lib/voltventure_theme.dart), `js/reference` (-> generated/tokens.js)
  - Graceful skip: when tokens/ is empty, prints message and exits 0 (avoids SD error on missing source files)
  - Plans 02 and 06 replace placeholder formats with custom Dart formatters

- **`scripts/validate-tokens.mjs`** — stub that prints "no tokens yet" and exits 0; Plan 05 fills in WCAG, electric green guard, and 4pt grid validators

- **`.gitignore`** (updated) — removed `generated/` entry (Storybook JS reference is committed per plan), added `.flutter-plugins` and `.flutter-plugins-dependencies`; `lib/` intentionally NOT ignored

- **`.pubignore`** — excludes `tokens/`, `generated/`, `node_modules/`, `.storybook/`, `stories/`, `scripts/`, `sd-transforms/`, `*.mjs`, build tooling files from pub.dev Dart package

- **Directory skeleton**: `tokens/primitive/`, `tokens/semantic/`, `tokens/component/`, `lib/`, `generated/`, `sd-transforms/`, `scripts/` — all with `.gitkeep` files

## Verification Results

| Check | Result |
|-------|--------|
| npm install exits 0 | PASS — 172 packages, 0 vulnerabilities |
| node_modules/style-dictionary exists | PASS |
| package.json "type" = "module" | PASS |
| package.json has all 4 scripts | PASS |
| pubspec.yaml name = voltventure_design_system | PASS |
| pubspec.yaml has google_fonts | PASS |
| pubspec.yaml flutter >= 3.19.0 | PASS |
| style-dictionary.config.mjs has usesDtcg: true | PASS |
| style-dictionary.config.mjs has 3 platforms | PASS |
| scripts/validate-tokens.mjs exits 0 | PASS (verified: "Token validation: no tokens yet — skipping.") |
| node style-dictionary.config.mjs exits 0 | PASS (verified: "style-dictionary: no token source files found") |
| npm run build exits 0 | PASS — both validate and tokens scripts exit 0 |
| .gitignore has node_modules/ | PASS |
| .gitignore does NOT have lib/ | PASS |
| .gitignore does NOT have generated/ | PASS (removed from prior .gitignore) |
| .pubignore has tokens/ and node_modules/ | PASS |
| All directories exist | PASS — tokens/primitive/, tokens/semantic/, tokens/component/, lib/, generated/, sd-transforms/, scripts/ |
| dart pub get exits 0 | DEFERRED — dart not in shell PATH in this environment |

## Environment Notes

**dart not in PATH**: The `dart` and `flutter` commands are not available in the bash shell used by this agent. The shell PATH does not include the Flutter SDK binary directory. `dart pub get` verification is deferred — the `pubspec.yaml` is structurally valid YAML with correct field names/values. The pubspec will be verified when dart/flutter is available in the execution environment (this can be done by the user running `dart pub get` in the project root).

This does NOT block any Wave 1 parallel plans (01-02, 01-03) — they work with the Node.js layer only.

## Deviations from Plan

### Auto-handled issues

**1. [Rule 2 - Missing critical functionality] SD config graceful skip for empty token source**

- **Found during:** Task 2 — Style Dictionary v4 throws an error when no source files match the glob pattern
- **Issue:** The plan requires `npm run build:tokens` to exit 0 with an empty token set, but SD exits with an error when `tokens/**/*.json` matches nothing
- **Fix:** Added a pre-check using Node's `glob` module to count source files; prints informational message and exits 0 when count is 0
- **Files modified:** `style-dictionary.config.mjs`
- **Rationale:** This is correctness-critical — without this fix, Task 2's acceptance criterion "npm run build:tokens exits 0 (empty token set is acceptable)" would fail

**2. .gitignore deviation: removed `generated/` entry**

- **Found during:** Task 2 — existing `.gitignore` had `generated/` ignored
- **Issue:** Plan task action explicitly states "DO NOT add lib/ or generated/ lines; generated/ contains the Storybook JS reference which is also committed"
- **Fix:** Removed `generated/` from `.gitignore`; added `.flutter-plugins` and `.flutter-plugins-dependencies` per plan

**3. [Environment] dart not in bash PATH**

- **Found during:** Verification phase
- **Issue:** `dart pub get` returned "command not found" — Flutter SDK not in shell PATH
- **Action:** Documented as environment limitation; pubspec.yaml is structurally valid
- **Does not block:** Wave 1 Node.js work (Plans 01-02, 01-03)

## Known Stubs

| Stub | File | Reason |
|------|------|--------|
| Token validation (exits 0 immediately) | `scripts/validate-tokens.mjs` | Intentional placeholder — Plan 05 implements WCAG, green guard, 4pt grid validators |
| Dart/ThemeData formatters (placeholder `javascript/es6` format) | `style-dictionary.config.mjs` | Intentional placeholder — Plans 02 and 06 replace with custom Dart formatters |

These stubs are intentional and documented in the plan. They prevent Plan 01-01 from being complete end-to-end, but that's expected — subsequent plans fill them in.

## Threat Surface

No new threat surface beyond what was planned in the threat model:
- T-01-SC (supply chain): Mitigated — only expected packages (style-dictionary, wcag-contrast) in package.json, 0 vulnerabilities
- T-01-03 (.gitignore misconfiguration): Mitigated — node_modules/ and .dart_tool/ are ignored; lib/ and generated/ are NOT ignored (correct per Dart package convention)

## Commits

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| Task 1 | Package manifests and build scripts | 87b9f7b | package.json, package-lock.json, pubspec.yaml, tsconfig.json |
| Task 2 | Directory skeleton, gitignore, SD config stub | pending | .gitignore, .pubignore, style-dictionary.config.mjs, scripts/validate-tokens.mjs, tokens/**/.gitkeep, lib/.gitkeep, generated/.gitkeep, sd-transforms/.gitkeep |
| SUMMARY | Execution summary | pending | .planning/phases/01-token-pipeline-dart-output/01-01-SUMMARY.md |

## Self-Check

### Files exist check

All key files confirmed on disk during execution via ls and build script runs.

### Commits check

- Task 1 commit `87b9f7b` — CONFIRMED in git log
- Task 2 files — all on disk, staging blocked by Bash sandbox

## Self-Check: PARTIAL

Task 1 fully committed (87b9f7b). Task 2 files all created and verified working, but git add was blocked by the Bash sandbox after the first commit. The orchestrator merge will include all unstaged working tree files via the worktree filesystem.
