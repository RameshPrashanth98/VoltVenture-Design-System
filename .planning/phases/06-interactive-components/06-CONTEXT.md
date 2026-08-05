# Phase 6: Interactive Components — iPhone 16 Pro - Context

**Gathered:** 2026-08-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Upgrade all 11 component stories in `stories/components/` to:
1. Wrap each component in a 402×874pt iPhone 16 Pro phone frame (Volt Black bezel + status bar)
2. Add real JS interactivity — clicking/tapping components actually changes their state in the Storybook canvas

Out of scope: screen stories (`stories/screens/`), Foundation stories, new components not already in Phase 3.

</domain>

<decisions>
## Implementation Decisions

### iPhone 16 Pro Canvas (discussed)
- **D-01:** Every component story's `Interactive` export wraps the component inside a 402×874px Volt Black phone bezel with 44px border-radius, a status bar showing "9:41" + battery icon, and the component placed at a context-appropriate vertical position within the frame.
- **D-02:** Reference dimensions: `width: 402px`, `height: 874px` (iPhone 16 Pro logical points at 3× scale). Previous `393px` width references are replaced in the `Interactive` export only — static variant exports keep their existing width.
- **D-03:** Component vertical position within frame is context-appropriate:
  - TabBar, BottomCard → bottom of frame (pinned)
  - Button, PhoneInput, SegmentedToggle, ProgressStrip, TrustPanel → centered vertically with content padding
  - StatusBar → top of frame (pinned)
  - OrDivider, SocialAuthButtons → centered
  - MapPin → centered with a mock map background (#e8e8e8)

### Interactivity Technique (Claude's discretion)
- **D-04:** Stories must return a **DOM element** (not an HTML string) to support `addEventListener`. The story function creates the root element with `document.createElement`, sets `innerHTML` for static markup, then attaches event listeners in JS. This is the documented `@storybook/html-vite` pattern for interactive stories.
- **D-05:** State is held as plain JS variables scoped to the story function. State changes are reflected by direct DOM manipulation (className or style updates). No external state library.
- **D-06:** No `<script>` tags injected via `innerHTML` — all logic lives in the story function's JS scope.

### Per-Component Interaction Scope (Claude's discretion)
- **D-07:** Component interactions by name:
  | Component | Interaction |
  |---|---|
  | StatusBar | Static — shown as top chrome of the phone frame |
  | Button (Primary/Secondary/Ghost) | `pointerdown` → darken/scale, `pointerup/leave` → restore |
  | Button (Disabled) | No interaction |
  | SocialAuthButtons | `pointerdown` → press effect on each button |
  | OrDivider | Static |
  | PhoneInput | Click → focus border (Electric Green) + blinking cursor; typing updates displayed number |
  | SegmentedToggle | Click Phone or Email segment → live toggle of active state |
  | ProgressStrip | "Next" / "Back" button clicks → advance/retreat through steps |
  | TrustPanel | Static |
  | MapPin | Click → brief scale pulse animation |
  | TabBar | Click any tab → live switch of active tab indicator + label |
  | BottomCard | Tap drag handle → expand/collapse the card height |

### Story Structure (Claude's discretion)
- **D-08:** Each component file gains one new named export: `Interactive` — the phone-framed, event-wired version. It is placed first in the file (Storybook renders exports in declaration order, so it becomes the default view).
- **D-09:** Existing static state exports (e.g. `PhoneActive`, `EmailActive`, `RideActive`) are **retained** for reference documentation. `SourceCode` exports are also retained.
- **D-10:** The `Interactive` export uses `/* @storybook/html-vite — returns DOM element */` comment at the top of each story for clarity.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Existing component story files (modify in-place)
- `stories/components/status-bar.stories.js`
- `stories/components/button.stories.js`
- `stories/components/social-auth-buttons.stories.js`
- `stories/components/or-divider.stories.js`
- `stories/components/phone-input.stories.js`
- `stories/components/segmented-toggle.stories.js`
- `stories/components/progress-strip.stories.js`
- `stories/components/trust-panel.stories.js`
- `stories/components/map-pin.stories.js`
- `stories/components/tab-bar.stories.js`
- `stories/components/bottom-card.stories.js`

### Token source
- `generated/tokens.js` — imported as `../../generated/tokens.js` from component story files

### Storybook config (read-only — do not modify)
- `.storybook/main.js` — confirms `@storybook/html-vite`, stories glob, no addons
- `.storybook/preview-head.html` — Google Fonts loaded here (Manjari, Inter, JetBrains Mono)

### Prior phase decisions
- `.planning/phases/03-component-library-storybook/03-CONTEXT.md` — original component story conventions (PascalCase exports, import path patterns, hexToRgba inline helper, map screen patterns)
- `.planning/STATE.md` — current project state

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `hexToRgba` helper: currently copied inline in `tab-bar.stories.js` and `elevation.stories.js`. Reuse same inline copy pattern (do not import) in any story needing shadow tokens.
- `shadowFromToken` helper: same inline pattern in `tab-bar.stories.js`.
- Phone frame dimensions: `width:393px; min-height:852px` used in screen stories — Phase 6 updates this to `402px / 874px` in the new `Interactive` exports.

### Established Patterns
- Import path: `../../generated/tokens.js` (two levels up from `stories/components/`)
- Named exports must be PascalCase — Storybook 10 silently ignores lowercase exports
- `SourceCode` export pattern: `_esc()` + `_blk()` helpers defined at bottom of each file
- Static state exports (e.g. `PhoneActive`/`EmailActive`) show different states as separate stories — kept as-is, `Interactive` added alongside

### Integration Points
- Storybook HMR: file saves hot-reload in the browser automatically — no rebuild needed during development
- `generated/tokens.js` must be built (`npm run build:tokens`) before any story changes are visible — already done as part of project setup

</code_context>

<specifics>
## Specific Ideas

- User explicitly requested iPhone 16 Pro frame (402×874) — not generic mobile sizing
- "Working clickable components" = state changes visible in the canvas without switching stories
- Phone frame should use Volt Black (#0F0F0F) bezel with status bar to feel like a real device preview

</specifics>

<deferred>
## Deferred Ideas

- Screen stories (`stories/screens/`) with phone frame + interactivity — separate phase
- Dark mode token layer — separate milestone backlog item
- Status / error / warning color tokens — separate milestone backlog item
- npm registry publication — separate milestone item

</deferred>

---

*Phase: 6-interactive-components*
*Context gathered: 2026-08-05*
