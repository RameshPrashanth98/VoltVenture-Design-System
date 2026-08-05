# Phase 7: Hi-Fi Screens & Components Expansion — Discussion Log

**Date:** 2026-08-05
**Duration:** Single session
**Areas covered:** 5

---

## Area 1: Screen Scope

**Question:** Which screens should Phase 7 cover?

**Options presented:**
- All 34 Hi-Fi screens (update existing 9 + add 25 new)
- New screens only (25)
- Core ride flow only

**Selection:** All 34 Hi-Fi screens

**Notes:** User confirmed they want full coverage of all Hi-Fi frames currently in `voltventure_wireframes.pen`.

---

## Area 2: Existing Screen Treatment

**Question:** Should the existing 9 screen stories be updated to the new Hi-Fi designs?

**Options presented:**
- Yes — update to Hi-Fi
- No — leave them as-is

**Selection:** Yes — update to Hi-Fi

**Notes:** Rebuild each existing story from the Hi-Fi wireframe for visual consistency across all screens.

---

## Area 3: Interactive Behavior for Screens

**Question:** What does "working" mean for screen Interactive exports?

**Options presented:**
- iPhone frame + in-screen interactions
- iPhone frame only (visual)
- Full navigation flow

**Selection:** iPhone frame + in-screen interactions

**Notes:** Same approach as Phase 6 components. Form inputs work, toggles fire, buttons show press states. No cross-screen navigation in this phase.

---

## Area 4: Source Code Format

**Question:** Source code format for SourceCode exports?

**Options presented:**
- Continue HTML/CSS
- React Native Paper code

**Selection:** React Native Paper code

**Notes:** SourceCode is a static string shown as `<pre><code>` in Storybook. RN Paper JSX references token values from voltventure_tokens.ts (as literals in the string — not imported in stories).

---

## Area 5: New Components

**Question:** Which new components to add?

**Options presented:**
- Settings Row
- Dashboard Panel
- Payment Card Row
- QR Viewfinder
- (+ any others identified from screen analysis)

**Selection:** All 4 presented + all additionally identified components

**User note:** "Add all new identified components as well"

**Final component list (12):** Settings Row, Dashboard Panel, Payment Card Row, QR Viewfinder, Nav Turn Card, Riding Progress Card, Hub Card, Route Card, VoltCoins Balance, Ride Summary Card, Station Info Card, FAQ Row

---

## Duplicate Screen Resolution

**Issue:** Two frames named "Login Screen — Hi-Fi" found in pen file (yfZaz and TS9Td).

**Resolution:** Use TS9Td (second frame) as authoritative. yfZaz discarded.

---

## Claude's Discretion

- Interaction specifics per screen type (which elements respond to events) — Claude to implement based on Hi-Fi design reading and Phase 6 patterns
- RN Paper JSX structure for SourceCode — Claude to generate based on screen composition
- Component state variants (Default, pressed, etc.) — Claude to determine per component

---

## Deferred Ideas

- Navigation flow between screens (cross-screen mini-app) — own phase
- Dark mode token layer — backlog
- Runnable RN Paper components — separate RN app repo
