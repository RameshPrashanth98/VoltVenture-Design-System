# Phase 3: Component Library + App Screen Stories in Storybook — Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-07-30
**Phase:** 03-component-library-storybook
**Areas discussed:** Phase scope, Storybook approach, Interfaces/source, Component scope, Screen coverage, Story structure, Reference fidelity, Done-bar, Old Phase 3 disposition

---

## Phase Scope (Initial Redirect)

| Option | Description | Selected |
|--------|-------------|----------|
| Original ROADMAP Phase 3 | Wire tokens into VoltVenture RN app as local path dep | |
| Component library + screen stories in Storybook | Build HTML/CSS Storybook stories for components + app screens | ✓ |

**User's choice:** Develop component library in Storybook for given interfaces using VoltVenture branding, and develop app screens in Storybook.
**Notes:** User redirected Phase 3 from "RN app integration" to "Storybook component library + screen stories." Original Phase 3 becomes Phase 4.

---

## Storybook Approach

| Option | Description | Selected |
|--------|-------------|----------|
| HTML/CSS in existing SB | Extend @storybook/html-vite with component + screen stories | |
| Storybook for React Native | @storybook/react-native with actual RN Paper components on device | |
| Both: HTML SB now, SB-RN later | HTML Storybook this phase; Storybook RN as a future phase | ✓ |

**User's choice:** Both — HTML Storybook now, Storybook RN later.
**Notes:** Phase 3 stays with existing @storybook/html-vite. Storybook RN is a separate future phase.

---

## Interfaces / Source Designs

| Option | Description | Selected |
|--------|-------------|----------|
| Wireframes in project folder | Use 5.Wireframes/voltventure_wireframes.pen as reference | |
| I'll describe the screens | No file reference — user describes components and screens verbally | |
| Wireframes + I'll describe gaps | Start from .pen file, user fills in decisions not covered by wireframes | ✓ |

**User's choice:** Wireframes + I'll describe gaps.
**Notes:** Primary reference is `voltventure_wireframes.pen` (Pencil MCP tools). User will fill gaps.

---

## Component Library Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Extract from wireframes | Identify repeating UI elements from .pen file | ✓ |
| Standard RN Paper set | Cover the standard Paper component palette regardless of wireframes | |
| Both: wireframe-extracted + Paper standards | Comprehensive but broader scope | |

**User's choice:** Extract from wireframes.
**Notes:** Planner audits voltventure_wireframes.pen to identify components that appear in 3+ screens.

---

## Screen Coverage

| Option | Description | Selected |
|--------|-------------|----------|
| Core flow only (6-8 screens) | Splash, Onboarding, Login, Home Map, Active Ride + 2-3 more | |
| All wireframed screens | Build stories for all 35 screens | ✓ |
| Claude decides | Planner selects screens demonstrating design system best | |

**User's choice:** All wireframed screens.
**Notes:** 35 screens in the wireframe file. However, next question changed this to hi-fi only.

---

## Story Structure

| Option | Description | Selected |
|--------|-------------|----------|
| Foundation / Components / Screens | Two new sections alongside existing Foundation | ✓ |
| Foundation / App (flat) | Single App section mixing components and screens | |
| Claude decides | Claude picks organization | |

**User's choice:** Foundation / Components / Screens.
**Notes:** Existing Foundation stories untouched. Two new sections added.

---

## Reference Fidelity (Screen Stories)

| Option | Description | Selected |
|--------|-------------|----------|
| Hi-Fi where available, wireframe otherwise | Use hi-fi for screens that have it, wireframe as fallback | |
| Wireframe for all | Consistent fidelity, all wireframe-level | |
| Hi-Fi for all (skip wireframe-only screens) | Only build stories for hi-fi screens; skip wireframe-only | ✓ |

**User's choice:** Hi-Fi for all (skip wireframe-only screens).
**Notes:** Confirmed Hi-Fi screens in .pen file: ID Scan Hi-Fi, Facial Scan Hi-Fi, Home Map Hi-Fi. Planner must audit for others.

---

## Done-Bar

| Option | Description | Selected |
|--------|-------------|----------|
| build-storybook passes + all stories exist | build exits 0 + stories/components/ + stories/screens/ populated | ✓ |
| build + visual review | Build pass AND user visual walkthrough sign-off | |
| Claude decides | Claude sets appropriate bar | |

**User's choice:** build-storybook passes + all stories exist.
**Notes:** Same verification model as Phase 2.

---

## Old Phase 3 Disposition

| Option | Description | Selected |
|--------|-------------|----------|
| Add it as Phase 4 | Rename current Phase 3; add Phase 4: React Native Paper App Integration | ✓ |
| Move it to backlog | Remove from active phases entirely | |

**User's choice:** Add it as Phase 4.
**Notes:** ROADMAP.md must be updated — Phase 3 renamed to "Component Library + App Screen Stories", Phase 4 added as "React Native Paper App Integration".

---

## Claude's Discretion

- Exact component list (planner audits wireframes — no pre-defined list)
- Number and identity of hi-fi screens (planner reads .pen file)
- Component story variant set per component
- Screen story CSS layout approach
- Main.js story glob update strategy

## Deferred Ideas

- Storybook RN (`@storybook/react-native`) — future phase after Phase 4 RN app integration
- Actual React Native Paper component code — Phase 4+ scope
- Wireframe-only screens — can be added when hi-fi designs become available
- Storybook controls/args for interactive component stories — future enhancement
- Chromatic visual regression testing — noted in Phase 2 deferred
- GitHub Pages deployment — noted in Phase 2 deferred
