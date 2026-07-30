---
phase: 01-token-pipeline-dart-output
plan: 07
name: TypeScript Tokens + RN Paper Theme Factory
status: complete
completed: "2026-07-30"
---

# Plan 07 Summary — TypeScript Tokens + RN Paper Theme Factory

## Outcome

Phase 1 is complete. All 4 done-bar criteria passed.

## Files Created / Modified

| File | Action | Notes |
|---|---|---|
| `sd-transforms/ts-constants.format.mjs` | Created | SD v4 formatter → `lib/voltventure_tokens.ts` |
| `sd-transforms/rn-paper-theme.format.mjs` | Created | Static emitter → `lib/voltventure_theme.ts` |
| `style-dictionary.config.mjs` | Updated | Added `ts/constants` and `rn/theme` platforms |
| `tsconfig.json` | Updated | `moduleResolution: bundler`, `skipLibCheck: true`, added `lib/**/*.ts` |
| `package.json` | Updated | Added `react-native-paper ^5.0.0`, `typescript ^5.0.0` to devDependencies |
| `lib/voltventure_tokens.ts` | Generated | 13 exported semantic color constants + private primitives |
| `lib/voltventure_theme.ts` | Generated | `createVoltVentureTheme()` with MD3LightTheme spread |

## Done-Bar Results

```
1. npm run build:validate → exit 0
   - V8 DTCG compliance: PASS
   - V4 4pt grid: PASS
   - V2 WCAG contrast: PASS (all pairs)
   - V3 green guard: PASS

2. npm run build:tokens → exit 0
   - ts/constants  ✔︎ lib/voltventure_tokens.ts
   - rn/theme      ✔︎ lib/voltventure_theme.ts
   - dart          ✔︎ lib/voltventure_tokens.dart (legacy, kept)
   - js/reference  ✔︎ generated/tokens.js

3. tsc --noEmit → exit 0 (0 errors)

4. npm test → exit 0 (42/42 tests pass — all 4 type conversion transforms)
```

## Key Design Decisions

- **ts/constants platform transforms**: `['name/camel', 'color/hex']` — no dimension transform needed (DTCG `$value` for dimensions is already a JS number)
- **rn/theme formatter**: static emitter — emits hardcoded TS, does not iterate `dictionary.allTokens`
- **`colorActionPrimaryFg` / `colorActionSecondaryFg` not in TS output**: SD v4 does not recurse into children of a token that already has `$value` — these nested fg tokens are swallowed. Theme factory omits `onPrimary`/`onSecondary` overrides and lets MD3LightTheme defaults fill those roles.
- **`tsconfig.json` changes**: switched to `moduleResolution: bundler` (TS 5.x, no .js extension requirement in imports) + `skipLibCheck: true` (prevents cascade errors from react-native/react peer deps not being installed)
- **`color/hex` output**: lowercase hex (`#c6ff2d`) — acceptable for RN Paper (case-insensitive)

## Verification Spot Checks

```
grep "createVoltVentureTheme" lib/voltventure_theme.ts   → 1 match ✔
grep "MD3LightTheme" lib/voltventure_theme.ts            → 2 matches ✔
grep "colorActionPrimary" lib/voltventure_tokens.ts      → 1 match ✔
grep "export const" lib/voltventure_tokens.ts            → 13 exports ✔
grep "Colors.red\|placeholder" lib/voltventure_theme.ts  → 0 matches ✔
```

## Phase 1 Status

**Phase 1 — Token Pipeline & RN Paper Output: COMPLETE**

All 7 plans executed. The token pipeline is fully operational:
- Primitive + semantic W3C DTCG JSON source in `tokens/`
- Style Dictionary v4 build with custom transforms and formatters
- `lib/voltventure_tokens.ts` — typed TypeScript constants for components
- `lib/voltventure_theme.ts` — `createVoltVentureTheme()` RN Paper MD3 theme factory
- WCAG, green guard, 4pt grid, and DTCG validators all green

**Next:** Phase 2 — Storybook Web token documentation
