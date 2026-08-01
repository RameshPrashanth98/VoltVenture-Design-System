---
phase: 4
plan: 1
title: "Design System Package Fixes — onPrimary, token exports, lib/index.ts, package.json"
subsystem: design-system-package
tags: [tokens, theme, monorepo, workspace, barrel-export]
dependency_graph:
  requires: []
  provides: [voltventure-design-system importable package, exported primitive tokens, onPrimary brand fix]
  affects: [apps/showcase — workspace resolution, all components using space/radius tokens]
tech_stack:
  added: []
  patterns: [npm workspaces, barrel export pattern, MD3 color role override]
key_files:
  created:
    - lib/index.ts
  modified:
    - lib/voltventure_theme.ts
    - lib/voltventure_tokens.ts
    - package.json
decisions:
  - "onPrimary: tokens.colorTextPrimary (Volt Black #0F0F0F) added as manual override to prevent white-on-electric-green brand violation"
  - "All 52 primitive token constants exported from voltventure_tokens.ts for component-level consumption"
  - "lib/index.ts created as single barrel re-export entry point"
  - "package.json renamed voltventure-design-system with main/exports/workspaces fields"
metrics:
  duration: "4 minutes"
  completed: "2026-08-02"
  tasks_completed: 2
  files_changed: 4
---

# Phase 4 Plan 1: Design System Package Fixes Summary

**One-liner:** Barrel export entry point, all primitive token exports, onPrimary Volt Black override, and npm workspace monorepo configuration for the voltventure-design-system package.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Add onPrimary override and export all primitive token constants | d82f88a | lib/voltventure_theme.ts, lib/voltventure_tokens.ts |
| 2 | Create lib/index.ts barrel export and update root package.json | bcd52c1 | lib/index.ts, package.json |

## What Was Built

### lib/voltventure_theme.ts
Added `onPrimary: tokens.colorTextPrimary` to the `createVoltVentureTheme()` colors block. This ensures React Native Paper's `Button mode="contained"` uses Volt Black (`#0F0F0F`) as label color on the Electric Green (`#C6FF2D`) primary background — preventing the white-on-green brand violation that would occur with MD3's default onPrimary.

### lib/voltventure_tokens.ts
Added `export` keyword to all 52 primitive const declarations in the primitive section (lines 9–109). Previously these were module-private; now `space400`, `radiusFull`, `borderWidthFocus`, `iconSizeMd`, grid constants, etc. are all importable by showcase component implementations via `import * as tokens from 'voltventure-design-system'`. Semantic token exports (colorSurfaceBase through colorStatusLive) were already exported and left unchanged.

### lib/index.ts (new file)
Single barrel re-export file:
```typescript
// Public entry point for voltventure-design-system package
export * from './voltventure_tokens';
export { createVoltVentureTheme } from './voltventure_theme';
```
This is the `main` entry that allows `import { createVoltVentureTheme } from 'voltventure-design-system'` to resolve via Metro's workspace symlink.

### package.json
- `"name"`: changed from `"voltventure-design-system-tools"` to `"voltventure-design-system"`
- Added `"main": "./lib/index.ts"`
- Added `"exports": { ".": "./lib/index.ts" }`
- Added `"workspaces": ["apps/*"]`
- All existing scripts and devDependencies preserved unchanged
- No React/React Native/RN Paper added (correct — those belong in apps/showcase/)

## Verification Results

```
grep "export const space400" lib/voltventure_tokens.ts  → 1 match (PASS)
grep "export const radiusFull" lib/voltventure_tokens.ts → 1 match (PASS)
grep "onPrimary:" lib/voltventure_theme.ts → 1 match (PASS)
node -e package.json check → voltventure-design-system ./lib/index.ts ["apps/*"] (PASS)
cat lib/index.ts → two export lines present (PASS)
```

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — no stubs. All four files have complete, production-ready content.

## Threat Flags

None — no new network endpoints, auth paths, or trust boundary changes. The package.json name change is local-only (workspace, not published to npm registry).

## Self-Check: PASSED

- [x] lib/index.ts exists: `[ -f lib/index.ts ]` → FOUND
- [x] lib/voltventure_theme.ts has onPrimary: grep confirms line 29
- [x] lib/voltventure_tokens.ts exports space400 and radiusFull: grep confirms 1 match each
- [x] package.json: name=voltventure-design-system, main=./lib/index.ts, workspaces=["apps/*"]
- [x] Commit d82f88a exists: git log confirms
- [x] Commit bcd52c1 exists: git log confirms
