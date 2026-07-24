---
phase: 1
slug: token-pipeline-dart-output
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-07-24
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node.js built-in test runner (`node --test`) for SD transforms; `dart test` for generated Dart |
| **Config file** | `package.json` (Node test scripts); `pubspec.yaml` (Dart dev_dependencies) |
| **Quick run command** | `npm test` (SD transform unit tests only) |
| **Full suite command** | `npm run build && dart analyze lib/ && npm test` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm test`
- **After every plan wave:** Run `npm run build && dart analyze lib/ && npm test`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| Community formatter search | 01 | 1 | D-01 | — | N/A | manual | — | N/A | ⬜ pending |
| Color transform | 01 | 1 | D-02 | — | `#C6FF2D` → `Color(0xFFC6FF2D)` | unit | `npm test -- --grep color` | ❌ W0 | ⬜ pending |
| Dimension transform | 01 | 1 | D-02 | — | `16` → `16.0` double | unit | `npm test -- --grep dimension` | ❌ W0 | ⬜ pending |
| Shadow transform | 01 | 1 | D-02 | — | DTCG shadow obj → `BoxShadow(...)` | unit | `npm test -- --grep shadow` | ❌ W0 | ⬜ pending |
| LineHeight transform | 01 | 1 | D-02 | — | `lineHeight/fontSize` ratio | unit | `npm test -- --grep lineHeight` | ❌ W0 | ⬜ pending |
| SD build exits 0 | 02 | 1 | D-08 | — | `npm run build` exits 0 | integration | `npm run build` | ❌ W0 | ⬜ pending |
| Dart analyzer clean | 02 | 1 | D-08 | — | `dart analyze lib/` → 0 issues | integration | `dart analyze lib/` | ❌ W0 | ⬜ pending |
| WCAG contrast check | 02 | 1 | V2 | — | AA pairs pass; build fails on violation | integration | `npm run build:validate` | ❌ W0 | ⬜ pending |
| Electric green guard | 02 | 2 | V3 | — | Build fails if green used as text fg | integration | `npm run build:validate` | ❌ W0 | ⬜ pending |
| 4pt grid validator | 02 | 2 | V4 | — | Build fails on off-grid spacing/radius | integration | `npm run build:validate` | ❌ W0 | ⬜ pending |
| Primitive tokens private | 03 | 2 | D-06 | — | `dart analyze` finds no public `_color*` | unit | `dart analyze lib/` | ❌ W0 | ⬜ pending |
| Doc comments present | 03 | 2 | D-05 | — | Generated file contains `///` doc comments | unit | `grep -c "///" lib/voltventure_tokens.dart` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `sd-transforms/__tests__/color.test.mjs` — unit test for `voltventure/color/flutter` transform
- [ ] `sd-transforms/__tests__/dimension.test.mjs` — unit test for `voltventure/dimension/double` transform
- [ ] `sd-transforms/__tests__/shadow.test.mjs` — unit test for `voltventure/shadow/boxShadow` transform
- [ ] `sd-transforms/__tests__/lineHeight.test.mjs` — unit test for `voltventure/lineHeight/multiplier` transform
- [ ] `scripts/validate-tokens.mjs` — stub for build:validate (WCAG, green guard, 4pt grid)
- [ ] `package.json` with `test`, `build:validate`, `build:tokens`, `build` scripts

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Community SD Dart formatter exists or not | D-01 | Requires live web search (pub.dev + GitHub) | Search `pub.dev` for "style-dictionary dart"; search GitHub for `style-dictionary dart flutter formatter`. Document finding in RESEARCH.md. |
| `GoogleFonts.manjari()` resolves | STACK.md | Requires live Flutter environment | Create a minimal Flutter project, add `google_fonts` dep, call `GoogleFonts.manjari()`. If it fails, fall back to `.ttf` bundling. |
| `voltventure-foundations (1).html` token values | PROJECT.md | Source-of-truth verification | Open `voltventure-foundations (1).html` before authoring each token category. Values in JSON must match spec exactly. |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
