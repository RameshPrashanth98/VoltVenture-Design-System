# Phase 6: Interactive Components (iPhone 16 Pro) — Research

**Researched:** 2026-08-05
**Domain:** @storybook/html-vite interactive stories — DOM element pattern, CSS transitions, phone frame wrapper
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Every `Interactive` export wraps the component inside a 402×874px Volt Black phone bezel with 44px border-radius, a status bar showing "9:41" + battery icon, and the component placed at a context-appropriate vertical position within the frame.
- **D-02:** Reference dimensions: `width: 402px`, `height: 874px`. Static variant exports keep their existing width (393px).
- **D-03:** Component vertical position within frame is context-appropriate: TabBar/BottomCard → bottom; Button/PhoneInput/SegmentedToggle/ProgressStrip/TrustPanel → centered vertically with content padding; StatusBar → top; OrDivider/SocialAuthButtons → centered; MapPin → centered with mock map background (#e8e8e8).
- **D-04:** Stories return a DOM element (`document.createElement`), not an HTML string, to support `addEventListener`.
- **D-05:** State held as plain JS variables scoped to the story function. State changes via direct DOM manipulation (className or style updates). No external state library.
- **D-06:** No `<script>` tags injected via `innerHTML` — all logic lives in the story function's JS scope.
- **D-07:** Per-component interaction contracts (see Interaction Contracts section below for full table).
- **D-08:** `Interactive` export is placed first in each file (Storybook renders in declaration order).
- **D-09:** All existing static state exports and `SourceCode` exports are retained as-is.
- **D-10:** Each `Interactive` export opens with `/* @storybook/html-vite — returns DOM element */` comment.

### Claude's Discretion

- Exact DOM structure within the phone frame (inner screen layout, how `position:relative` vs `absolute` is applied)
- Whether to inject CSS `@keyframes` for MapPin pulse via a `<style>` tag appended to the document head (one-time, idempotent) vs inline `animation` using a class
- ProgressStrip: whether the 4-step strip visual is rendered with 4 segments (vs the 2-segment pattern in the static story)
- BottomCard: which of the two existing static variants (`BikeSelection` / `WalkProgress`) is shown in the Interactive card body

### Deferred Ideas (OUT OF SCOPE)

- Screen stories with phone frame + interactivity (separate phase)
- Dark mode token layer
- Status / error / warning color tokens
- npm registry publication
</user_constraints>

---

## Summary

Phase 6 modifies all 11 component story files in `stories/components/` by prepending one new named export, `Interactive`, to each file. The existing static exports and `SourceCode` exports remain untouched.

The key technical shift is that `Interactive` exports must return a **DOM element**, not the HTML string that all 11 current stories return. This is required to attach event listeners without using `innerHTML`-injected `<script>` tags. The `@storybook/html-vite` framework supports both patterns simultaneously — existing string-returning exports continue to work alongside the new DOM-returning exports.

Every `Interactive` story wraps its component in a shared phone frame structure: a 402×874px `div` with Volt Black bezel (`#0F0F0F`), 44px `border-radius`, 6px bezel padding, and a 54px status bar row at the top. The inner screen area is 38px `border-radius` white, with `overflow: hidden`. All interactive behavior is plain JS: state variables scoped to the story function, direct `.style` mutations for state changes, and `addEventListener` for events.

**Primary recommendation:** Build the shared phone frame as a JS helper function (`makePhoneFrame(innerEl)`) that each story can call. This avoids repeating 30+ lines of identical frame markup in 11 files and makes frame dimension changes trivial. Inline the helper at the top of each file (do not import) to preserve the existing inline-copy convention from Phase 3.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|---|---|---|---|
| Phone frame wrapper | Browser / Client (story function) | — | DOM structure created in JS, no server layer |
| Component state management | Browser / Client (story function scope) | — | Plain JS variables per D-05; no framework |
| Event handling | Browser / Client (story function) | — | `addEventListener` per D-04 |
| CSS transitions/animations | Browser / Client (inline style / injected keyframe) | — | CSS properties set via `.style`; MapPin keyframe injected once |
| Token values | Generated file (`generated/tokens.js`) | Story import | Build-time constants; no runtime pipeline |
| Story discovery | Storybook glob (`../stories/**/*.stories.js`) | — | `**` glob already covers `stories/components/` |

---

## Standard Stack

### Core (no new packages — pure HTML/CSS/JS in existing Storybook)

| Library | Version | Purpose | Why Standard |
|---|---|---|---|
| @storybook/html-vite | 10.5.5 (installed) | Story renderer | Already installed; supports DOM element return |
| generated/tokens.js | project-local | Token constants | Import path `../../generated/tokens.js` |

No new npm packages are required for Phase 6. All interactivity is implemented with native browser APIs (`document.createElement`, `addEventListener`, `.style`). The existing Storybook setup already handles HMR.

### Package Legitimacy Audit

> No external packages are installed in this phase. The implementation is pure vanilla JS using the existing Storybook 10.5.5 installation and project token output.

**Packages removed due to slopcheck [SLOP] verdict:** none — no packages installed
**Packages flagged as suspicious [SUS]:** none

---

## Architecture Patterns

### System Architecture Diagram

```
Story file (stories/components/X.stories.js)
  │
  ├── import tokens from '../../generated/tokens.js'  ← build-time constants
  │
  ├── export const Interactive = () => {              ← returns DOM element
  │     let state = ...                               ← plain JS state variables
  │     const frame = makePhoneFrame(innerEl)         ← inline helper
  │     innerEl.innerHTML = `...`                     ← static markup via innerHTML (no script tags)
  │     el.addEventListener('pointerdown', () => {    ← events wired in JS scope
  │       state = ...; el.style.X = ...              ← DOM mutation for state change
  │     })
  │     return frame                                  ← DOM element returned to Storybook
  │   }
  │
  ├── export const PhoneActive = () => `...`          ← existing static (HTML string, unchanged)
  └── export const SourceCode = () => `...`           ← existing SourceCode (HTML string, unchanged)
```

### Recommended Project Structure

No new directories needed. All edits are in-place modifications to existing files:

```
stories/
└── components/
    ├── status-bar.stories.js        (prepend Interactive export)
    ├── button.stories.js            (prepend Interactive export)
    ├── social-auth-buttons.stories.js (prepend Interactive export)
    ├── or-divider.stories.js        (prepend Interactive export)
    ├── phone-input.stories.js       (prepend Interactive export)
    ├── segmented-toggle.stories.js  (prepend Interactive export)
    ├── progress-strip.stories.js    (prepend Interactive export)
    ├── trust-panel.stories.js       (prepend Interactive export)
    ├── map-pin.stories.js           (prepend Interactive export)
    ├── tab-bar.stories.js           (prepend Interactive export)
    └── bottom-card.stories.js       (prepend Interactive export)
```

### Pattern 1: DOM Element Return (core technique for all 11 Interactive exports)

**What:** Story function creates a root DOM element, sets `innerHTML` for static markup, then attaches event listeners in JS. Returns the element.

**When to use:** Every `Interactive` export.

**Example (generalized):**
```javascript
/* @storybook/html-vite — returns DOM element */
export const Interactive = () => {
  // State variables
  let active = 'phone';

  // Create phone frame wrapper
  const frame = document.createElement('div');
  frame.style.cssText = `
    width:402px; height:874px;
    background:#0f0f0f;
    border-radius:44px;
    padding:6px;
    box-sizing:border-box;
    position:relative;
    overflow:hidden;
  `;

  // Inner screen
  const screen = document.createElement('div');
  screen.style.cssText = `
    width:100%; height:100%;
    background:#ffffff;
    border-radius:38px;
    overflow:hidden;
    position:relative;
  `;

  // Status bar (always present)
  screen.innerHTML = `
    <div style="height:54px;background:#0f0f0f;display:flex;align-items:center;
      justify-content:space-between;padding:0 20px;box-sizing:border-box;">
      <span style="font-family:'Inter',sans-serif;font-size:15px;font-weight:600;
        line-height:20px;color:#ffffff;">9:41</span>
      <span style="font-family:'Inter',sans-serif;font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>
    </div>
    <div id="component-area" style="/* component-specific positioning */"></div>
  `;

  // Wire events on elements within screen
  const componentArea = screen.querySelector('#component-area');
  componentArea.addEventListener('click', () => {
    active = active === 'phone' ? 'email' : 'phone';
    // update DOM based on new state
  });

  frame.appendChild(screen);
  return frame;
};
```

**Key constraints from D-04/D-05/D-06:**
- `innerHTML` is fine for the static markup skeleton
- Events must be attached via `addEventListener` in JS, never via `onclick=""` attributes in `innerHTML`
- No `<script>` tags inside any `innerHTML` string

### Pattern 2: Phone Frame Structure (shared across all 11)

The frame is identical for all 11 stories. Build as an inline helper (not imported):

```javascript
function makePhoneFrame() {
  const frame = document.createElement('div');
  frame.style.cssText = `
    width:402px; height:874px;
    background:#0f0f0f;
    border-radius:44px;
    padding:6px;
    box-sizing:border-box;
    position:relative;
    overflow:hidden;
    display:inline-block;
  `;
  const screen = document.createElement('div');
  screen.style.cssText = `
    width:100%; height:100%;
    background:#ffffff;
    border-radius:38px;
    overflow:hidden;
    position:relative;
    display:flex;
    flex-direction:column;
  `;
  // Status bar
  const bar = document.createElement('div');
  bar.style.cssText = `
    flex-shrink:0; height:54px; background:#0f0f0f;
    display:flex; align-items:center; justify-content:space-between;
    padding:0 20px; box-sizing:border-box;
  `;
  bar.innerHTML = `
    <span style="font-family:'Inter',sans-serif;font-size:15px;font-weight:600;
      line-height:20px;color:#ffffff;">9:41</span>
    <span style="font-family:'Inter',sans-serif;font-size:11px;color:#ffffff;">
      &#9646; WiFi &#9650;</span>
  `;
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}
```

Each story calls `makePhoneFrame()`, gets back `{frame, screen}`, appends its component content into `screen`, and returns `frame`.

### Pattern 3: MapPin Pulse via injected @keyframes

**What:** One-time injection of a CSS `@keyframes` rule into `document.head`. Uses a guard (`document.getElementById('vv-pulse-kf')`) to avoid duplicate injection across HMR cycles.

**When to use:** MapPin Interactive export only.

```javascript
if (!document.getElementById('vv-pulse-kf')) {
  const s = document.createElement('style');
  s.id = 'vv-pulse-kf';
  s.textContent = `@keyframes vv-pulse {
    0%   { transform: scale(1);   opacity: 1; }
    50%  { transform: scale(1.4); opacity: 0.6; }
    100% { transform: scale(1);   opacity: 0; }
  }`;
  document.head.appendChild(s);
}
```

Then apply via `.style.animation = 'vv-pulse 600ms ease forwards'` on click, and clear after 600ms.

### Pattern 4: BottomCard height transition

**What:** CSS `height` transition on a card element; collapsed = 120px, expanded = 320px.

```javascript
let expanded = false;
card.style.transition = 'height 300ms ease';
card.style.height = '120px';
card.style.overflow = 'hidden';

handle.addEventListener('click', () => {
  expanded = !expanded;
  card.style.height = expanded ? '320px' : '120px';
});
```

The card must be `position:absolute; bottom:0; width:100%` within the screen.

### Anti-Patterns to Avoid

- **Returning `innerHTML` string from Interactive:** The story must return a DOM element. If `return frame.outerHTML` is used instead of `return frame`, event listeners will be silently discarded — the HTML renders but clicks do nothing.
- **Injecting `<script>` tags via innerHTML:** Violates D-06. Storybook's preview iframe sanitizes or ignores them anyway.
- **Using `onclick="..."` string attributes in innerHTML:** Works for simple cases but breaks when closures need captured variables. Use `addEventListener` on elements retrieved via `querySelector`.
- **Re-creating the entire DOM on every state change:** Instead, mutate only the specific property (`.style.background`, `.style.height`). Rebuilding `innerHTML` removes all event listeners from child elements.
- **Hardcoding `#C6FF2D` instead of `tokens.colorActionPrimary`:** Tokens must be used for all token-covered values. Only the bezel and status bar background (`#0F0F0F` = `tokens.colorBlack`) and mock map (`#E8E8E8`) are non-token constants.
- **Forgetting `position:relative` on the screen div:** BottomCard and TabBar use `position:absolute; bottom:0` — they only work if the parent (`screen`) establishes a positioning context.

---

## Current Story Inventory — Complete Analysis

This section documents every existing story export and its exact structural characteristics. The planner uses this to assign migration effort correctly.

### All 11 stories: return HTML string (not DOM element)

Every current story export is a function that returns a template literal string. Zero stories currently use `document.createElement`. This means:
- **Migration pattern is uniform across all 11** — each gets the same DOM-element approach for `Interactive`
- **No existing interactive patterns exist** — zero `addEventListener` calls found anywhere in the components directory
- **No existing phone frame structure exists** — none of the stories use the 402×874 frame yet

### Per-File Export Inventory

| File | Existing Exports | Helpers | Returns |
|---|---|---|---|
| status-bar.stories.js | `LightSurface`, `DarkSurface`, `SourceCode` | none | HTML string |
| button.stories.js | `Primary`, `Secondary`, `Ghost`, `Disabled`, `SourceCode` | none | HTML string |
| social-auth-buttons.stories.js | `AppleButton`, `GoogleButton`, `SourceCode` | none | HTML string |
| or-divider.stories.js | `Default`, `SourceCode` | none | HTML string |
| phone-input.stories.js | `Default`, `Filled`, `SourceCode` | none | HTML string |
| segmented-toggle.stories.js | `PhoneActive`, `EmailActive`, `SourceCode` | `toggle(activeTab)` function | HTML string |
| progress-strip.stories.js | `Step1Active`, `Step2Active`, `SourceCode` | `strip(activeStep)` function | HTML string |
| trust-panel.stories.js | `IdScan`, `FacialScan`, `SourceCode` | `panel(ctaLabel)` function | HTML string |
| map-pin.stories.js | `RangePin`, `SelectedPin`, `SourceCode` | none | HTML string |
| tab-bar.stories.js | `RideActive`, `DiscoverActive`, `WalletActive`, `AccountActive`, `SourceCode` | `tabBar(activeTab)` + `hexToRgba` + `shadowFromToken` | HTML string |
| bottom-card.stories.js | `BikeSelection`, `WalkProgress`, `SourceCode` | `hexToRgba` + `shadowFromToken` | HTML string |

### Complexity Classification

**Low complexity (static `Interactive` — no state changes):**
- `status-bar.stories.js` — StatusBar IS the top chrome of the phone frame; its Interactive export is the frame itself with no interactive layer
- `or-divider.stories.js` — static per D-07
- `trust-panel.stories.js` — static per D-07

**Medium complexity (single binary state):**
- `social-auth-buttons.stories.js` — press effect (opacity) on two independent buttons
- `phone-input.stories.js` — focus border + blinking cursor on click; keydown updates displayed number
- `segmented-toggle.stories.js` — toggle between 'phone' and 'email'; existing `toggle()` function provides the rendering logic, just needs DOM wiring
- `map-pin.stories.js` — click triggers CSS pulse animation; idempotent keyframe injection

**High complexity (multi-step or positional):**
- `button.stories.js` — 4 button variants (Primary, Secondary, Ghost, Disabled) in one Interactive export; each needs correct press/release behaviour; frame must show all 4 with appropriate spacing
- `progress-strip.stories.js` — 4-step state machine (step 0–4); Next/Back buttons; disable logic at boundaries; existing strip() function only shows 2 segments — needs expansion to 4
- `tab-bar.stories.js` — 4-tab active state; existing `TABS` array + `tabBar()` function is the right rendering model; needs `hexToRgba`/`shadowFromToken` helpers; `position:absolute; bottom:0` within phone frame
- `bottom-card.stories.js` — expand/collapse with `height` transition; `position:absolute; bottom:0`; existing `hexToRgba`/`shadowFromToken` helpers; must decide which card variant to show (BikeSelection recommended — simpler content)

---

## Token Usage Map

Tokens confirmed in use across the 11 story files (all `[VERIFIED: codebase grep]`):

| Token | Value | Used In |
|---|---|---|
| `colorActionPrimary` | `#c6ff2d` | Button.Primary bg, SegmentedToggle active, SocialAuthButtons Apple bg, MapPin pulse |
| `colorActionSecondary` | `#0f0f0f` | Button.Secondary bg |
| `colorSurfaceBase` | `#ffffff` | Screen background, TabBar bg, BottomCard bg |
| `colorTextPrimary` | `#0f0f0f` | Most text labels |
| `colorTextSecondary` | `#808080` | Secondary text, inactive tab labels |
| `colorTextOnInverse` | `#ffffff` | Status bar text, secondary button text |
| `colorTextDisabled` | `#c9c9c9` | Disabled button text |
| `colorBorderSubtle` | `#ebebeb` | OrDivider lines, Google button border |
| `colorBorderFocus` | `#c6ff2d` | PhoneInput focus ring |
| `colorGrey050` | `#fafafa` | PhoneInput background |
| `colorGrey100` | `#f5f5f5` | SegmentedToggle container, BottomCard thumbnail bg |
| `colorGrey200` | `#ebebeb` | Button.Disabled bg, TabBar inactive indicator |
| `colorGrey800` | `#2f2f2f` | Button.Secondary pressed state |
| `colorGrey900` | `#1a1a1a` | ProgressStrip bg, TrustPanel bg, MapPin.RangePin bg |
| `colorGreen600` | `#a8de1a` | Button.Primary pressed state |
| `colorGreen100` | `#f4ffd9` | BottomCard "VV-042" badge bg |
| `colorGreen700` | `#7d9220` | BottomCard "VV-042" badge text |
| `colorBlack` | `#0f0f0f` | Phone bezel, status bar background |
| `elevationFloating` | object | TabBar box-shadow |
| `elevationRaised` | object | BottomCard box-shadow |
| `radiusFull` | 999 | Buttons, pills, toggle segments |
| `radiusSm` | 12 | PhoneInput border-radius |
| `radiusLg` | 20 | BottomCard border-top-radius |
| `radiusXs` | 8 | ProgressStrip segment tracks |
| `space400` | 16 | Horizontal padding throughout |
| `space600` | 24 | Button horizontal padding |
| `space1200` | 48 | Minimum touch target height |
| `typeHeadingSm` | object | Button labels, SegmentedToggle, ProgressStrip nav |
| `typeBodyLg` | object | PhoneInput text |
| `typeLabelSm` | object | Tab labels, MapPin distance |
| `typeLabelMd` | object | StatusBar time |

Non-token constants in use (hardcoded, intentional):
- `rgba(255,255,255,0.20)` in ProgressStrip — alpha fill with no token (documented with comment)
- `rgba(255,255,255,0.09)` in TrustPanel — alpha fill with no token (documented with comment)
- `rgba(198,255,45,0.20)` in MapPin.SelectedPin pulse ring — alpha fill with no token

---

## Component-Specific Implementation Notes

### StatusBar

The `Interactive` export is the phone frame itself. The component is the status bar at the top of the frame. The screen area below the status bar should show a minimal placeholder (white background with a brief label like "Screen content" in secondary text). No interactive elements — static per D-07.

### Button

Four button variants (Primary, Secondary, Ghost, Disabled) displayed as a vertical stack inside the phone frame, centered. Each variant needs independent press state. Event listener approach: get each button by `querySelector` and wire `pointerdown`/`pointerup`/`pointerleave`. The Disabled button must have `pointer-events: none` to prevent any interaction.

Interaction state table (from UI-SPEC.md):
- Primary `pointerdown`: bg → `#a8de1a` (`colorGreen600`), transform → `scale(0.97)`
- Primary `pointerup`/`pointerleave`: bg → `#c6ff2d` (`colorActionPrimary`), transform → `scale(1)`
- Secondary `pointerdown`: bg → `#2f2f2f` (`colorGrey800`), transform → `scale(0.97)`
- Ghost `pointerdown`: opacity → 0.6
- CSS transition: `transform 100ms ease, background-color 100ms ease`

### SocialAuthButtons

Both Apple and Google buttons with independent press states. `pointerdown` → opacity 0.7, `pointerup`/`pointerleave` → opacity 1. CSS transition: `opacity 100ms ease`.

### OrDivider

Static. Phone frame with the divider centered. No event listeners needed.

### PhoneInput

Click → focused=true → border `2px solid #c6ff2d` + blinking cursor CSS. Typing (keydown on the document or on the component) updates the displayed phone number. Implementation strategy: the input area is a `div`, not a real `<input>`. On click, set focus state styling. A real keyboard event listener can be attached to `document` to capture typed digits. The displayed value starts as "+1 (___) ___-____" and updates as digits are entered. Keep it simple — append digits, max 10 digits.

CSS for blinking cursor: inject a `<style>` tag once (with guard) containing `@keyframes vv-blink { 0%,100%{opacity:1} 50%{opacity:0} }` and apply `animation: vv-blink 1s infinite` to a cursor `span`.

### SegmentedToggle

The existing `toggle(activeTab)` function already contains the correct markup. In the `Interactive` export, instead of using that function (which returns a string), replicate its logic as DOM mutations: two `div` elements for "Phone" and "Email" tabs, clicking one updates both divs' background and color styles.

### ProgressStrip

The existing `strip(activeStep)` function only shows 2 segments. The Interactive version needs 4 segments (per UI-SPEC copy: "Step {N} of 4"). State: `let step = 1` (1–4). Next/Back buttons outside the strip (but inside the phone frame), centered below the strip. Each segment is active if `segmentIndex <= step`. Disable Next at step 4, disable Back at step 1.

The Interactive export should show: ProgressStrip at the top of the content area, a step label "Step {N} of 4", and Next/Back navigation buttons.

### TrustPanel

Static. Phone frame with the trust panel anchored to the bottom. The `panel('Scan My ID')` variant is the appropriate default to show. No event listeners.

### MapPin

Show both `RangePin` and `SelectedPin` variants over the mock map background (`#e8e8e8`). Clicking the SelectedPin triggers the pulse. Inject `@keyframes vv-pulse` once (with guard). On click: apply animation to the pulse ring div, reset after 600ms via `setTimeout`.

### TabBar

The existing `tabBar(activeTab)` function returns a string. In Interactive, replicate this as DOM: one container div with 4 tab divs. State: `let activeTab = 'Ride'`. On click of any tab: update the active state, mutate all 4 tabs' indicator circle background and text color. Tab bar is `position:absolute; bottom:0; width:100%` in the phone frame's screen div. `hexToRgba` and `shadowFromToken` helpers are already inline in `tab-bar.stories.js` — they are retained and used.

The tabs from the existing story are: `['Ride', 'Discover', 'Wallet', 'Account']`. UI-SPEC.md D-07 table says: "Home, Ride, Rewards, Profile". **Discrepancy noted** — the existing story uses Ride/Discover/Wallet/Account. The Interactive export should match the existing static exports (Ride/Discover/Wallet/Account) to stay consistent with established story content. This is flagged as an assumption below.

### BottomCard

Show `BikeSelection` variant (simpler content than WalkProgress). Card is `position:absolute; bottom:0; width:100%` in phone frame screen div. Drag handle: a 3px × 40px pill centered at the top of the card. State: `let expanded = false`. Collapsed height: 120px. Expanded height: 320px. CSS transition: `height 300ms ease`. `overflow: hidden` on the card. `hexToRgba` and `shadowFromToken` helpers already inline in `bottom-card.stories.js` — retained.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| CSS keyframe animations | Custom JS-based animation loop with `requestAnimationFrame` | CSS `@keyframes` injected once via `document.head` | Browser-optimized, runs off main thread, far simpler |
| State management | Redux, Zustand, or custom pub/sub | Plain JS `let` variable in story function scope | Story functions are isolated; no cross-story state needed |
| Event delegation | Complex bubbling/capturing logic | Direct `addEventListener` on each interactive element | Only ~4 elements per story; direct binding is simpler and debuggable |
| Token values | Hardcoded hex strings | `tokens.colorX` references | Tokens already imported; hardcoding makes them stale on token updates |
| Blinking cursor | Canvas-based text cursor simulation | CSS `@keyframes` on a simple `span` | Trivial to implement in CSS; no DOM measurement needed |

---

## Common Pitfalls

### Pitfall 1: Returning the wrong type from Interactive

**What goes wrong:** The story export returns `frame.outerHTML` (a string) or calls `return `${frame.outerHTML}`` instead of `return frame`. Storybook renders the HTML visually but event listeners are silently discarded — the component looks correct but is completely unresponsive.

**Why it happens:** All 11 existing stories return strings. The developer muscle memory is to return a template literal. The DOM element return is a departure from every existing story in the codebase.

**How to avoid:** The `/* @storybook/html-vite — returns DOM element */` comment mandated by D-10 serves as the reminder. Always end the `Interactive` function with `return frame` (a variable reference), never `return \`<div...\``.

**Warning signs:** Story appears in Storybook, displays correctly, but clicking does nothing.

### Pitfall 2: Wiring events via `innerHTML` onclick attributes

**What goes wrong:** Placing `onclick="someFunction()"` inside the `innerHTML` string. The function reference will be `undefined` in the iframe's scope at the time the HTML is parsed.

**Why it happens:** It looks like it should work. But story functions run in module scope — their inner functions are not on `window` and are not accessible from inline `onclick` string attributes.

**How to avoid:** Always use `el.querySelector('...')` after setting `innerHTML`, then `el.addEventListener(...)`. Never use `onclick=""` or `onpointerdown=""` attributes.

**Warning signs:** `TypeError: someFunction is not defined` in the browser console, or clicks silently fail.

### Pitfall 3: Event listeners lost after DOM rebuild

**What goes wrong:** A state change re-sets `screen.innerHTML = newMarkup` to update the view. All previously-attached event listeners on child elements are destroyed. Subsequent clicks do nothing.

**Why it happens:** `innerHTML` replacement creates new DOM nodes — the old nodes with listeners are discarded.

**How to avoid:** Mutate only the specific style properties that need to change (`.style.background`, `.style.height`, `.style.color`). Do not rebuild `innerHTML` for state updates. Set `innerHTML` once for the initial structure, then wire events, then only mutate styles.

**Warning signs:** Works on first click, second click does nothing.

### Pitfall 4: ProgressStrip — 2 segments vs 4 segments

**What goes wrong:** The existing `strip()` function has 2 segments. The Interactive export needs 4. Copying the existing function produces a 2-step strip that maxes out at step 2, making the "Next →" button disable at step 2 instead of step 4.

**Why it happens:** The existing static story was built for a simplified 2-step representation. The D-07 interaction spec says "advance/retreat through steps" with the step label "Step {N} of 4" (from UI-SPEC.md copywriting contract).

**How to avoid:** Build 4 segments in the Interactive export's DOM. The state variable `let step = 1` runs from 1 to 4. Disable Next at `step === 4`, disable Back at `step === 1`.

### Pitfall 5: BottomCard and TabBar positioning within phone frame

**What goes wrong:** BottomCard and TabBar are positioned with `position:absolute; bottom:0; width:100%` but the parent screen div is not a positioning context (`position` not set). Elements overflow the frame visibly or render at the wrong location.

**Why it happens:** `position:absolute` requires a positioned ancestor. If `screen` has no `position: relative`, the elements position against the viewport.

**How to avoid:** The phone frame's inner `screen` div must have `position: relative` explicitly set. The `makePhoneFrame()` helper must include this in its CSS.

**Warning signs:** TabBar or BottomCard renders outside the phone frame, or at the top of the Storybook canvas instead of the bottom.

### Pitfall 6: MapPin keyframe animation not resetting

**What goes wrong:** After the first click, the MapPin pulse animation plays. On second click, nothing happens because the animation property is still set to the same value — the browser does not restart a running animation when you assign the same value.

**Why it happens:** CSS animations only restart when the property value changes or the element is re-inserted.

**How to avoid:** Clear the animation, force a reflow, then re-apply:
```javascript
pulseRing.style.animation = 'none';
void pulseRing.offsetWidth; // force reflow
pulseRing.style.animation = 'vv-pulse 600ms ease forwards';
```
The `setTimeout` to clear after 600ms ensures subsequent clicks restart cleanly.

### Pitfall 7: Interactive export NOT first in the file

**What goes wrong:** `Interactive` is added at the end of the file (below the existing exports). Storybook renders exports in declaration order — the first export becomes the default view. If `Interactive` is last, Storybook shows the first static variant by default.

**Why it happens:** It is tempting to append to the end of the file rather than restructure.

**How to avoid:** D-08 explicitly requires `Interactive` to be the first named export in each file. After the `import` statement and `export default`, `Interactive` comes before `Primary`, `Default`, `PhoneActive`, etc.

---

## Wave Grouping Strategy

Based on complexity classification and implementation dependencies, the planner should organize into these waves:

**Wave 0 (setup) — optional, 1 plan:**
No setup tasks needed. The glob already covers the directory, and no new directories or packages are required. Wave 0 can be skipped.

**Wave 1 (parallel) — static + low complexity:**
These three stories have no interactive state. The `makePhoneFrame` helper pattern is established in this wave.
- `status-bar.stories.js` — frame IS the component; zero interaction
- `or-divider.stories.js` — centered, static
- `trust-panel.stories.js` — static, bottom-pinned panel

**Wave 2 (parallel) — medium complexity, independent:**
- `social-auth-buttons.stories.js` — press opacity on 2 independent buttons
- `phone-input.stories.js` — focus ring + keydown digit capture
- `segmented-toggle.stories.js` — binary toggle, references existing `toggle()` logic
- `map-pin.stories.js` — click pulse animation, requires keyframe injection

**Wave 3 (parallel) — high complexity:**
These are more involved but still independent of each other:
- `button.stories.js` — 4 variants × 3 event types, press transitions
- `progress-strip.stories.js` — 4-step state machine, must expand 2-segment static to 4-segment
- `tab-bar.stories.js` — 4-tab switching, absolute positioning, shadow helpers required
- `bottom-card.stories.js` — expand/collapse height transition, absolute positioning, shadow helpers required

**Wave 4 (sequential, done-bar):**
- Verify all 11 `Interactive` exports appear in Storybook
- Verify `npm run build-storybook` exits 0
- Verify all existing static exports are still present and correct

This yields: 1 plan (done-bar) + 3 parallel execution waves = approximately 7–8 plans total (1 per story file is an option; grouping 2–3 simpler files per plan is also viable).

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| @storybook/html returning string | @storybook/html returning DOM element | SB 6+ supported; SB 10 confirms | Enables native event handling |
| Inline `onclick` in HTML templates | `addEventListener` in story function scope | Best practice since ES6 closures | Event handlers capture story-scoped variables |

**No deprecated patterns introduced in Phase 6.** The DOM element return has been supported since Storybook 6 and is explicitly documented for `@storybook/html`.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|---|---|---|
| A1 | TabBar Interactive export uses existing tabs ['Ride','Discover','Wallet','Account'] matching the static exports, not ['Home','Ride','Rewards','Profile'] from UI-SPEC copywriting | Component-Specific Notes — TabBar | Low: if UI-SPEC copy is authoritative, the labels should match; static exports would remain inconsistent but it's cosmetic |
| A2 | BottomCard Interactive shows BikeSelection variant content (simpler) rather than WalkProgress | Component-Specific Notes — BottomCard | Low: WalkProgress would also work; choice is aesthetic |
| A3 | ProgressStrip Interactive shows 4 segments with step 1–4 state machine, not 2 segments as in the static story | Component-Specific Notes — ProgressStrip | Medium: if the user expects the 2-step static model promoted to interactive, the 4-step model adds unrequested scope; however UI-SPEC explicitly states "Step {N} of 4" |

---

## Open Questions (RESOLVED)

1. **TabBar label discrepancy** — RESOLVED: UI-SPEC.md is authoritative per plan 06-06 explicit OVERRIDE of this assumption. Use `['Home', 'Ride', 'Rewards', 'Profile']`. RESEARCH.md A1 is superseded.

2. **PhoneInput: focus on the div vs keyboard capture on document** — RESOLVED: Use a visually-hidden `<input type="tel">` per plan 06-04. Call `.focus()` on click; intercept `input` event to update the display div. Avoids global `document` keydown.

---

## Environment Availability

> Step 2.6: No new external dependencies. The phase uses the existing Storybook 10.5.5 installation and plain browser APIs (no new CLI tools, services, or runtimes).

| Dependency | Required By | Available | Version | Fallback |
|---|---|---|---|---|
| @storybook/html-vite | All Interactive exports | Yes (installed) | 10.5.5 | — |
| Node.js / npm | build-storybook done-bar | Yes (project dependency) | existing | — |
| generated/tokens.js | All stories (already present) | Yes | built | `npm run build:tokens` to regenerate |

**Missing dependencies with no fallback:** none

---

## Validation Architecture

> nyquist_validation: not explicitly set in config — treating as enabled.

### Test Framework

| Property | Value |
|---|---|
| Framework | Manual Storybook visual verification (no automated test runner configured for stories) |
| Config file | `.storybook/main.js` |
| Quick run command | `npm run storybook` (dev mode, check canvas) |
| Full suite command | `npm run build-storybook` (exits 0 = pass) |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | Notes |
|---|---|---|---|---|
| D-01/D-02 | Phone frame 402×874, Volt Black bezel | Visual / build | `npm run build-storybook` | Verify in canvas |
| D-04 | Interactive export returns DOM element | Build | `npm run build-storybook` | Build passes if export shape is correct |
| D-07 | Each component interaction fires correctly | Manual | open Storybook, click each `Interactive` story | No automated click test |
| D-08 | `Interactive` is first export in each file | Code review | grep for export order | Check declaration order in each file |
| D-09 | Static exports retained | Build | `npm run build-storybook` | All exports present in build |

### Wave 0 Gaps

None — no new test infrastructure required. The existing `npm run build-storybook` done-bar is sufficient as the phase gate. All 11 interactive stories will be manually verified in Storybook dev mode before the done-bar run.

---

## Security Domain

> This phase adds no authentication, data persistence, API calls, or user-provided data storage. The only user input is: (a) pointer events (clicks) handled entirely client-side, and (b) keydown events for PhoneInput which update a display string in memory within the story's iframe. No data leaves the Storybook preview iframe. ASVS categories V2, V3, V4, V6 do not apply.

| ASVS Category | Applies | Standard Control |
|---|---|---|
| V2 Authentication | No | — |
| V3 Session Management | No | — |
| V4 Access Control | No | — |
| V5 Input Validation | Minimal | PhoneInput only accepts digits (filter in keydown handler) |
| V6 Cryptography | No | — |

---

## Sources

### Primary (HIGH confidence)

- Codebase: all 11 `stories/components/*.stories.js` files — read directly, all findings are `[VERIFIED: codebase]`
- `generated/tokens.js` — read directly; all token names and values are `[VERIFIED: codebase]`
- `.storybook/main.js` — read directly; framework and glob confirmed `[VERIFIED: codebase]`
- `06-CONTEXT.md` — all decisions D-01 through D-10 are locked `[VERIFIED: CONTEXT.md]`
- `06-UI-SPEC.md` — interaction contracts, color values, typography confirmed `[VERIFIED: UI-SPEC.md]`

### Secondary (MEDIUM confidence)

- `@storybook/html-vite` DOM element return pattern — established in D-04 based on framework documentation; no Context7 lookup performed (framework already installed and decisions already locked)

### Tertiary (LOW confidence)

- None.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new packages; verified against installed project
- Architecture: HIGH — all patterns derived from verified codebase and locked CONTEXT.md decisions
- Per-component analysis: HIGH — all 11 files read directly
- Token names: HIGH — verified against `generated/tokens.js`
- Pitfalls: HIGH — derived from the code structure and the documented D-04/D-05/D-06 constraints

**Research date:** 2026-08-05
**Valid until:** Phase 6 execution complete (story files do not change outside this phase)
