---
slug: platform-switch-rn-paper
date: 2026-07-25
status: in_progress
---

# Platform Switch: Flutter → React Native Paper

## Task

Update all planning documents and Plan 07 to reflect the decision to use React Native Paper (instead of Flutter) for component building in future phases.

## Scope

- PROJECT.md — "What This Is", Constraints, Key Decisions
- STACK.md — replace Flutter Runtime section with RN Paper section; update package shape
- ARCHITECTURE.md — update migration note and platform outputs
- PITFALLS.md — update platform markers ([RN OBSOLETE] items are now relevant; [FLUTTER] items become [FLUTTER OBSOLETE])
- STATE.md — add new decision
- 01-07-PLAN.md — replace ThemeData factory task with TS/RN Paper theme factory task
- HANDOFF.json — update remaining tasks
- MEMORY.md — update platform decision

## Decision Captured

Component platform: React Native Paper (not Flutter)
- Token output: TypeScript constants (not Dart)
- Theme factory: RN Paper MD3 theme (not Flutter ThemeData)
- Done-bar: `tsc --noEmit` replaces `dart analyze lib/`
- Token pipeline (Style Dictionary v4, W3C DTCG JSON, Storybook Web) unchanged
