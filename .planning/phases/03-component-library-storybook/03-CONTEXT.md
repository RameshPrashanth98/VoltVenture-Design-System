# Phase 3: Component Library + App Screen Stories in Storybook — Context

**Gathered:** 2026-07-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Extend the existing Storybook (`@storybook/html-vite`) with two new sections:

1. **Components** — Extract repeating UI elements from the `voltventure_wireframes.pen` Hi-Fi designs and build HTML/CSS Storybook stories for each component, styled with VoltVenture tokens.
2. **Screens** — Build HTML/CSS Storybook stories for every screen that has a Hi-Fi version in the wireframe file. Skip wireframe-only screens.

Stories use the existing pattern: plain HTML template functions, tokens imported from `generated/tokens.js`, named exports in PascalCase. No new Storybook framework — stays with `@storybook/html-vite`.

Phase 3 is complete when:
- `npm run build-storybook` exits 0
- All component stories exist in `stories/components/`
- All hi-fi screen stories exist in `stories/screens/`

NOT in Phase 3 scope:
- Storybook for React Native (`@storybook/react-native`) — deferred to a later phase
- Actual React Native Paper component implementation (RN code, not stories)
- React Native app integration (moved to Phase 4)
- Wireframe-only screens (no hi-fi version available)

</domain>

<decisions>
## Implementation Decisions

### D-01: Phase Scope Change
This phase replaces the original ROADMAP Phase 3 ("React Native Paper App Integration").
- Original Phase 3 (RN app integration) is now **Phase 4** — added to ROADMAP
- Storybook RN (`@storybook/react-native`) is a separate future phase, not Phase 3 or 4
- The planner must update ROADMAP.md: rename Phase 3 and add Phase 4

### D-02: Storybook Approach — HTML/CSS in Existing Setup
Continue with `@storybook/html-vite` 10.5.5 (the Phase 2 setup). No new Storybook framework.
- Stories are plain HTML template functions returning template literal strings
- Token data from `generated/tokens.js` (same pattern as Phase 2 Foundation stories)
- Storybook RN is a future consideration (after components are built in Phase 4+)

### D-03: Story Section Structure
Three Storybook sections total:
```
Foundation/   ← Phase 2 (existing — do not modify)
  Color
  Typography
  Spacing
  Radius
  Elevation
  Border
  Grid
  Iconography

Components/   ← Phase 3 NEW
  [extracted from wireframes]

Screens/      ← Phase 3 NEW
  [hi-fi screens only]
```

### D-04: Component Extraction Strategy
Components are **extracted from the wireframes** — not a pre-defined list.
- The planner must audit `voltventure_wireframes.pen` (using Pencil MCP tools) to identify repeating UI elements
- Priority: elements that appear across multiple screens (buttons, cards, inputs, navigation, etc.)
- Each component story shows: default state + key variants (e.g., Button: Primary, Secondary, Disabled)
- Story file location: `stories/components/{component-name}.stories.js`
- Title pattern: `'Components/Button'`, `'Components/Card'`, etc.

### D-05: Screen Stories — Hi-Fi Only
Screen stories are built from Hi-Fi versions only.
- Source: `voltventure_wireframes.pen` — use Pencil MCP tools to read Hi-Fi screens
- Skip any screen that only has a wireframe (no Hi-Fi version)
- The planner must identify all Hi-Fi screens from the .pen file (confirmed: ID Scan Hi-Fi, Facial Scan Hi-Fi, Home Map Hi-Fi — check for more)
- Each screen story is a full-viewport HTML composition (393px wide, matching mobile canvas)
- Story file location: `stories/screens/{screen-name}.stories.js`
- Title pattern: `'Screens/HomeMap'`, `'Screens/ActiveRide'`, etc.

### D-06: Done-Bar
Phase 3 is complete when:
1. `npm run build-storybook` exits 0 (storybook-static/ produced)
2. All component story files exist in `stories/components/`
3. All hi-fi screen story files exist in `stories/screens/`
4. CI (existing GitHub Actions storybook.yml) passes on push

NOT required for Phase 3:
- Visual design sign-off by user (build pass is the bar)
- RN code or device smoke test
- Storybook deployment

### Claude's Discretion
- Exact component list (planner audits wireframes and decides based on repeating elements)
- Number and identity of hi-fi screens (planner reads .pen file to discover all Hi-Fi frames)
- Component story variant set (reasonable defaults: at minimum primary + one variant + disabled if applicable)
- Story CSS approach (inline styles from token values, same as Phase 2)
- Screen story layout within the 393px frame (match hi-fi as closely as possible in HTML/CSS)
- Main.js story glob update (must cover stories/components/ and stories/screens/ in addition to existing stories/)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Primary Design Reference (Hi-Fi screens and components)
- `../5.Wireframes/voltventure_wireframes.pen` — ALL wireframes and Hi-Fi screens. Use Pencil MCP tools ONLY (file is encrypted). The planner MUST audit this file to: (1) identify all Hi-Fi screen frames, (2) extract repeating component patterns across screens.

### Token Data
- `generated/tokens.js` — Primary token data source for all stories. Run `npm run build:tokens` to regenerate.
- `tokens/semantic/color.json` — Semantic color token source.
- `tokens/semantic/typography.json` — 14 semantic typography composites.

### Existing Storybook Setup (understand before modifying)
- `.storybook/main.js` — ESM-only Storybook 10 config. Must add new story globs for `stories/components/` and `stories/screens/`. Do NOT break existing Foundation story glob.
- `.storybook/preview-head.html` — Google Fonts CDN links (Manjari, Inter, JetBrains Mono). Already loaded — screen and component stories can use these fonts.
- `stories/` — Existing 8 Foundation stories. Read these to understand patterns before writing new stories.

### Phase 2 Decisions (story patterns to follow)
- `.planning/phases/02-storybook-documentation/02-CONTEXT.md` — Story structure patterns, token import syntax, PascalCase export rule, elevation RRGGBBAA→rgba() helper pattern.

### Project Context
- `.planning/PROJECT.md` — VoltVenture brand rules, constraints, three-tier architecture.
- `.planning/ROADMAP.md` — Phase 3 deliverables (update this: rename Phase 3, add Phase 4 for RN app integration).

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `generated/tokens.js` — All semantic and primitive tokens as camelCase ES6 exports. Import pattern: `import * as tokens from '../../generated/tokens.js'` (two levels up from stories/components/ or stories/screens/).
- `.storybook/preview-head.html` — Google Fonts already loaded; font-family names are `'Manjari'`, `'Inter'`, `'JetBrains Mono'`.
- `stories/*.stories.js` — 8 existing stories as pattern reference. The elevation story has the RRGGBBAA→rgba() helper.

### Established Patterns (from Phase 2 — MUST FOLLOW)
- **Named exports must be PascalCase** — Storybook 10 silently ignores lowercase exports. `export const ButtonPrimary = () => ...` not `export const buttonPrimary`.
- **ESM imports with .js extension** — `import * as tokens from '../../generated/tokens.js'` (explicit extension required).
- **Story default export** — `export default { title: 'Components/Button' }`.
- **HTML template functions** — stories export functions that return HTML template literal strings.
- **Inline styles from token values** — use `style="background: ${tokens.colorActionPrimary}"` not hardcoded hex.
- **No addons/controls needed** — static documentation, not interactive.

### Integration Points
- `.storybook/main.js` `stories:` array must be expanded — currently `['stories/**/*.stories.js']`. Either this already covers subdirs (verify) or add explicit globs for `stories/components/**/*.stories.js` and `stories/screens/**/*.stories.js`.
- `package.json` `build:tokens` must run before `build-storybook` — existing CI already enforces this order.
- VoltVenture brand colors in tokens: `colorActionPrimary` (#c6ff2d electric green), `colorSurfaceBase` (#ffffff), `colorTextPrimary` (#0f0f0f volt black), `colorTextSecondary` (#808080).

</code_context>

<specifics>
## Specific Ideas

**Screen canvas width:** All screen stories should render in a 393px-wide frame (the VoltVenture reference canvas from the grid spec). Use `style="width:393px; min-height:852px"` as the story root, or let the preview iframe handle width via `.storybook/preview-head.html` viewport meta.

**Component story structure pattern:**
```js
export default { title: 'Components/Button' };

export const Primary = () => `
  <button style="
    background: ${tokens.colorActionPrimary};
    color: ${tokens.colorTextPrimary};
    padding: ${tokens.space400}px ${tokens.space600}px;
    border-radius: ${tokens.radiusMd}px;
    font-family: Inter;
    font-size: ${tokens.typeBodyMd.fontSize}px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  ">Book a Ride</button>
`;

export const Secondary = () => `...`;
export const Disabled = () => `...`;
```

**Wireframe audit instruction for planner:** Open `voltventure_wireframes.pen` via `get_editor_state` to list all 35 top-level frames. Identify frames with "Hi-Fi" in their name. For each Hi-Fi frame, use `get_screenshot` or `snapshot_layout` to understand its visual composition. Extract repeating UI patterns (elements appearing in 3+ screens) as component candidates.

</specifics>

<deferred>
## Deferred Ideas

- **Storybook for React Native (`@storybook/react-native`)** — requires actual RN component code, Expo, and device/simulator. Future phase after Phase 4 (RN app integration).
- **React Native Paper component implementation** — actual RN code for Button, Card, Input, etc. Phase 4+ scope.
- **Wireframe-only screens** — screens without a Hi-Fi version in the .pen file. Can be added in a future iteration once Hi-Fi designs are available.
- **Interactive story controls** — Storybook controls/args for component stories. Phase 2+ enhancement.
- **Chromatic visual regression** — screenshot diffing. Future enhancement (noted in Phase 2 deferred).
- **GitHub Pages deployment** — deploy Storybook to live URL. Future enhancement.

</deferred>

---

*Phase: 03-component-library-storybook*
*Context gathered: 2026-07-30 (discuss-phase, all areas)*
