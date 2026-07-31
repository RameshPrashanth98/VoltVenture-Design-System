# Phase 3: Component Library + App Screen Stories in Storybook — Pattern Map

**Mapped:** 2026-07-31
**Files analyzed:** 20 new story files (11 components + 9 screens)
**Analogs found:** 20 / 20

---

## File Classification

| New File | Role | Data Flow | Closest Analog | Match Quality |
|----------|------|-----------|----------------|---------------|
| `stories/components/status-bar.stories.js` | component-story | static-render | `stories/border.stories.js` | exact (single-variant doc story) |
| `stories/components/button.stories.js` | component-story | static-render | `stories/radius.stories.js` | exact (multi-export, named variants) |
| `stories/components/social-auth-buttons.stories.js` | component-story | static-render | `stories/radius.stories.js` | exact (multi-export, named variants) |
| `stories/components/or-divider.stories.js` | component-story | static-render | `stories/border.stories.js` | exact (single-variant, simple element) |
| `stories/components/phone-input.stories.js` | component-story | static-render | `stories/border.stories.js` | role-match (multi-export, simple element) |
| `stories/components/segmented-toggle.stories.js` | component-story | static-render | `stories/spacing.stories.js` | role-match (helper fn + multi-export) |
| `stories/components/progress-strip.stories.js` | component-story | static-render | `stories/elevation.stories.js` | role-match (dark-bg context + alpha fills) |
| `stories/components/trust-panel.stories.js` | component-story | static-render | `stories/elevation.stories.js` | role-match (dark surface, alpha fills) |
| `stories/components/tab-bar.stories.js` | component-story | static-render | `stories/elevation.stories.js` | exact (needs hexToRgba + shadowFromToken) |
| `stories/components/map-pin.stories.js` | component-story | static-render | `stories/radius.stories.js` | role-match (pill shapes, multi-export) |
| `stories/components/bottom-card.stories.js` | component-story | static-render | `stories/elevation.stories.js` | exact (needs hexToRgba + shadowFromToken) |
| `stories/screens/splash.stories.js` | screen-story | static-render | `stories/grid.stories.js` | exact (393px fixed-width canvas) |
| `stories/screens/onboarding-1.stories.js` | screen-story | static-render | `stories/grid.stories.js` | exact (393px canvas, flex column layout) |
| `stories/screens/registration.stories.js` | screen-story | static-render | `stories/grid.stories.js` | exact (393px canvas, flex column layout) |
| `stories/screens/login.stories.js` | screen-story | static-render | `stories/color.stories.js` | exact (multiple named exports per file) |
| `stories/screens/id-scan.stories.js` | screen-story | static-render | `stories/elevation.stories.js` | role-match (dark surface context) |
| `stories/screens/facial-scan.stories.js` | screen-story | static-render | `stories/elevation.stories.js` | role-match (dark surface context) |
| `stories/screens/home-map.stories.js` | screen-story | static-render | `stories/grid.stories.js` + `stories/elevation.stories.js` | role-match (393px canvas + hexToRgba) |
| `stories/screens/navigate-to-bike.stories.js` | screen-story | static-render | `stories/grid.stories.js` + `stories/elevation.stories.js` | role-match (393px canvas + hexToRgba) |
| `stories/screens/walking-directions.stories.js` | screen-story | static-render | `stories/grid.stories.js` + `stories/elevation.stories.js` | role-match (393px canvas + hexToRgba) |

---

## Shared Patterns

These four patterns apply to EVERY new story file. Read these before writing any file.

### 1. Import Pattern
**Source:** All 8 existing stories, line 1
**Apply to:** All 20 new files
```js
import * as tokens from '../../generated/tokens.js';
```
Note: Foundation stories use `'../generated/tokens.js'` (one level up). Component and screen stories live two levels deep under `stories/`, so the path is TWO levels up. The `.js` extension is mandatory (ESM).

### 2. Default Export Pattern
**Source:** `stories/border.stories.js` line 3 / `stories/elevation.stories.js` lines 3–5
**Apply to:** All 20 new files
```js
// Simple one-liner form (preferred for single-export files):
export default { title: 'Components/Button' };

// Object form (used when you need future-proofing):
export default {
  title: 'Components/Button',
};
```
Title prefix for component files: `'Components/...'`
Title prefix for screen files: `'Screens/...'`

### 3. Named Export (PascalCase Arrow Function) Pattern
**Source:** `stories/border.stories.js` lines 5–91, `stories/spacing.stories.js` lines 32–53
**Apply to:** All 20 new files
```js
// Named exports MUST be PascalCase — Storybook 10 silently ignores lowercase exports.
export const Primary = () => `
  <button style="
    background: ${tokens.colorActionPrimary};
    color: ${tokens.colorTextPrimary};
  ">Book a Ride</button>
`;

export const Secondary = () => `...`;
export const Disabled = () => `...`;
```

### 4. Composite Token Access Pattern (typography)
**Source:** `stories/typography.stories.js` lines 8–16
**Apply to:** Any story using `type*` tokens
```js
// type* tokens are composite objects — access sub-properties with dot notation:
font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif
font-size:${tokens.typeBodyMd.fontSize}px
font-weight:${tokens.typeBodyMd.fontWeight}
line-height:${tokens.typeBodyMd.lineHeight}px
letter-spacing:${tokens.typeBodyMd.letterSpacing}em
```
All 14 `type*` tokens follow this structure: `.fontFamily`, `.fontSize`, `.fontWeight`, `.lineHeight`, `.letterSpacing`.

### 5. hexToRgba + shadowFromToken Helper Pattern
**Source:** `stories/elevation.stories.js` lines 7–30
**Apply to:** `tab-bar.stories.js`, `bottom-card.stories.js`, `home-map.stories.js`, `navigate-to-bike.stories.js`, `walking-directions.stories.js`

Copy this block verbatim into the top of every file that uses elevation tokens for CSS `box-shadow`. Do NOT import from elevation.stories.js — the helper is not exported.

```js
/**
 * Convert #RRGGBBAA (8-char hex) to CSS rgba().
 * @param {string} hex8 — e.g. "#0F0F0F1A"
 * @returns {string} — e.g. "rgba(15, 15, 15, 0.10)"
 */
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

/**
 * Build a CSS box-shadow string from an elevation token value.
 */
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}
```

Usage: `box-shadow:${shadowFromToken(tokens.elevationRaised)}`

---

## Pattern Assignments — Components

### `stories/components/status-bar.stories.js`

**Analog:** `stories/border.stories.js`
**Match:** Single-export documentation story; simple flex-row element

**Full file structure to follow** (from `stories/border.stories.js` lines 1–3):
```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/StatusBar' };

export const LightSurface = () => `
  <div style="
    width:393px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 ${tokens.space400}px;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
  ">
    <!-- time — left -->
    <span style="
      font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelMd.fontSize}px;
      font-weight:${tokens.typeLabelMd.fontWeight};
      color:${tokens.colorTextPrimary};
    ">9:41</span>
    <!-- status icons — right (unicode approximation) -->
    <span style="
      font-size:${tokens.typeLabelSm.fontSize}px;
      color:${tokens.colorTextPrimary};
      letter-spacing:2px;
    ">▲ WiFi ■</span>
  </div>
`;

export const DarkSurface = () => `...`;
```

**Key token references:**
- `tokens.typeLabelMd` — composite object; use `.fontSize`, `.fontWeight`, `.fontFamily`
- `tokens.colorSurfaceBase` — LightSurface bg
- `tokens.colorTextPrimary` — LightSurface text/icons
- `tokens.colorTextOnInverse` — DarkSurface text/icons (white)
- `tokens.space400` — horizontal padding

---

### `stories/components/button.stories.js`

**Analog:** `stories/radius.stories.js` (multi-export with named variants) + `stories/spacing.stories.js` (helper fn pattern)
**Match:** Multiple named exports, each returning a distinct styled element

**Import + default export** (from `stories/radius.stories.js` lines 1–3):
```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/Button' };
```

**Named export pattern** (from `stories/border.stories.js` lines 5–91 and CONTEXT.md Specifics section):
```js
export const Primary = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorActionPrimary};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    min-height:${tokens.space1200}px;
    border:none;
    cursor:pointer;
    width:100%;
    box-sizing:border-box;
  ">Book a Ride</button>
`;

export const Secondary = () => `
  <button style="
    ...
    background:${tokens.colorActionSecondary};
    color:${tokens.colorTextOnInverse};
    ...
  ">Continue</button>
`;

export const Ghost = () => `
  <button style="
    background:none;
    border:none;
    color:${tokens.colorTextAccent};
    text-decoration:underline;
    ...
  ">Sign in instead</button>
`;

export const Disabled = () => `
  <button style="
    background:${tokens.colorGrey200};
    color:${tokens.colorTextDisabled};
    ...
    cursor:not-allowed;
  " disabled>Book a Ride</button>
`;
```

**Key token references:**
- `tokens.colorActionPrimary` — Primary bg (#c6ff2d electric green)
- `tokens.colorActionSecondary` — Secondary bg (#0f0f0f volt black)
- `tokens.colorTextPrimary` — Primary text (black on green bg)
- `tokens.colorTextOnInverse` — Secondary text (white on black bg)
- `tokens.colorTextDisabled` — Disabled text
- `tokens.radiusFull` — pill shape (999px)
- `tokens.space400` / `tokens.space600` — vertical / horizontal padding
- `tokens.space1200` — min-height (touch target: 48px)
- `tokens.typeHeadingSm` — composite object (15px/Inter/600)

---

### `stories/components/social-auth-buttons.stories.js`

**Analog:** `stories/radius.stories.js` (multi-export pattern)
**Match:** Same multi-export structure as Button; each export is a distinct button variant

**Full file structure:**
```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SocialAuthButtons' };

export const AppleButton = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:${tokens.space200}px;
    background:${tokens.colorActionPrimary};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
    font-size:${tokens.typeBodyMd.fontSize}px;
    font-weight:${tokens.typeBodyMd.fontWeight};
    min-height:${tokens.space1200}px;
    border:none;
    cursor:pointer;
    width:100%;
    box-sizing:border-box;
  "> Continue with Apple</button>
`;

export const GoogleButton = () => `
  <button style="
    ...
    background:${tokens.colorSurfaceBase};
    color:${tokens.colorTextPrimary};
    border:${tokens.borderWidthHairline}px solid ${tokens.colorBorderSubtle};
    ...
  "> Continue with Google</button>
`;
```

---

### `stories/components/or-divider.stories.js`

**Analog:** `stories/border.stories.js` (single-export, simple inline element doc story)
**Match:** One named export, trivially simple HTML structure

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/OrDivider' };

export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    gap:${tokens.space300}px;
    padding:0 ${tokens.space400}px;
  ">
    <div style="flex:1;height:${tokens.borderWidthHairline}px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
      color:${tokens.colorTextSecondary};
    ">OR</span>
    <div style="flex:1;height:${tokens.borderWidthHairline}px;background:${tokens.colorBorderSubtle};"></div>
  </div>
`;
```

---

### `stories/components/phone-input.stories.js`

**Analog:** `stories/border.stories.js` (multi-export single-element stories)
**Match:** Two exports (Default / Filled), same flex-row structure per export

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/PhoneInput' };

export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <!-- Country code -->
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <!-- Divider -->
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <!-- Placeholder text -->
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      color:${tokens.colorTextSecondary};
    ">Mobile number</span>
  </div>
`;

export const Filled = () => `
  <div style="...">
    <!-- country code + divider + filled number text in colorTextPrimary -->
  </div>
`;
```

---

### `stories/components/segmented-toggle.stories.js`

**Analog:** `stories/spacing.stories.js` (helper function + single named export) / `stories/radius.stories.js` (multi-export)
**Match:** Two exports (PhoneActive / EmailActive); each is a pill with two inner segments

Helper function pattern (from `stories/spacing.stories.js` lines 5–30 and `stories/radius.stories.js` lines 5–32):
```js
// Optional: define a helper for the shared toggle structure
function toggle(activeTab) {
  const phoneStyle = activeTab === 'phone'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  const emailStyle = activeTab === 'email'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  return `
    <div style="
      display:inline-flex;
      background:${tokens.colorGrey100};
      border-radius:${tokens.radiusFull}px;
      padding:4px;
      gap:4px;
    ">
      <div style="
        padding:${tokens.space200}px ${tokens.space400}px;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        ${phoneStyle}
      ">Phone</div>
      <div style="
        padding:${tokens.space200}px ${tokens.space400}px;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        ${emailStyle}
      ">Email</div>
    </div>
  `;
}

export const PhoneActive = () => toggle('phone');
export const EmailActive = () => toggle('email');
```

---

### `stories/components/progress-strip.stories.js`

**Analog:** `stories/elevation.stories.js` (dark-bg context; local array pattern)
**Match:** Alpha fills on dark background; two named exports showing step state

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/ProgressStrip' };

// Alpha fills not in token system — hardcode with comment
// Step inactive: rgba(255,255,255,0.20) from design value #FFFFFF33

function strip(activeStep) {
  const seg1 = activeStep >= 1
    ? `background:${tokens.colorSurfaceBase};`          // white — active/complete
    : `background:rgba(255,255,255,0.20);`;              /* #FFFFFF33 — design alpha fill, no token */
  const seg2 = activeStep >= 2
    ? `background:${tokens.colorSurfaceBase};`
    : `background:rgba(255,255,255,0.20);`;              /* #FFFFFF33 */
  return `
    <div style="
      background:${tokens.colorGrey900};
      padding:${tokens.space300}px ${tokens.space400}px;
    ">
      <div style="display:flex;gap:${tokens.space200}px;">
        <div style="flex:1;height:4px;border-radius:${tokens.radiusXs}px;${seg1}"></div>
        <div style="flex:1;height:4px;border-radius:${tokens.radiusXs}px;${seg2}"></div>
      </div>
    </div>
  `;
}

export const Step1Active = () => strip(1);
export const Step2Active = () => strip(2);
```

---

### `stories/components/trust-panel.stories.js`

**Analog:** `stories/elevation.stories.js` (dark surface; local constant data)
**Match:** Dark-surface bottom-sheet panel; two exports differentiated by CTA label

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/TrustPanel' };

// Alpha fills not in token system — hardcode with comment
// Shield badge bg: rgba(255,255,255,0.09) from design value #FFFFFF18

function panel(ctaLabel) {
  return `
    <div style="
      background:${tokens.colorGrey900};
      border-radius:${tokens.radiusXl}px ${tokens.radiusXl}px 0 0;
      padding:${tokens.space600}px ${tokens.space400}px ${tokens.space800}px;
    ">
      <!-- Shield badge -->
      <div style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:56px;
        height:56px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.09); /* #FFFFFF18 — design alpha, no token */
        margin-bottom:${tokens.space400}px;
      ">🛡</div>
      <!-- Trust label -->
      <div style="
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        color:${tokens.colorTextOnInverse};
        margin-bottom:${tokens.space200}px;
      ">Secure Identity Scan</div>
      <!-- Reassurance text -->
      <div style="
        font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
        font-size:${tokens.typeBodySm.fontSize}px;
        color:${tokens.colorTextSecondary};
        margin-bottom:${tokens.space600}px;
      ">Your data is encrypted and never shared.</div>
      <!-- CTA button -->
      <button style="
        width:100%;
        min-height:${tokens.space1200}px;
        background:${tokens.colorSurfaceBase};
        color:${tokens.colorTextPrimary};
        border:none;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        cursor:pointer;
      ">${ctaLabel}</button>
    </div>
  `;
}

export const IdScan = () => panel('Scan My ID');
export const FacialScan = () => panel('Start Face Scan');
```

---

### `stories/components/tab-bar.stories.js`

**Analog:** `stories/elevation.stories.js` (uses hexToRgba + shadowFromToken; local array/map pattern)
**Match:** Elevation shadow required; multiple named exports (one per active tab)

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/TabBar' };

// Copy hexToRgba + shadowFromToken helpers verbatim from elevation.stories.js (lines 12-30)
function hexToRgba(hex8) { /* ... */ }
function shadowFromToken(token) { /* ... */ }

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

function tabBar(activeTab) {
  const tabs = TABS.map(label => {
    const isActive = label === activeTab;
    return `
      <div style="
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:${tokens.space100}px;
        flex:1;
      ">
        <div style="
          width:48px;
          height:32px;
          border-radius:${tokens.radiusFull}px;
          background:${isActive ? tokens.colorTextPrimary : tokens.colorGrey200};
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          <!-- icon placeholder -->
          <span style="font-size:14px;color:${isActive ? tokens.colorTextOnInverse : tokens.colorTextSecondary};">●</span>
        </div>
        <span style="
          font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};
        ">${label}</span>
      </div>
    `;
  }).join('');

  return `
    <div style="
      width:393px;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      padding:${tokens.space200}px ${tokens.space400}px ${tokens.space500}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      box-sizing:border-box;
    ">
      ${tabs}
    </div>
  `;
}

export const RideActive = () => tabBar('Ride');
export const DiscoverActive = () => tabBar('Discover');
export const WalletActive = () => tabBar('Wallet');
export const AccountActive = () => tabBar('Account');
```

---

### `stories/components/map-pin.stories.js`

**Analog:** `stories/radius.stories.js` (multi-export; pill shapes; helper fn pattern)
**Match:** Two structurally distinct pin types as separate exports

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/MapPin' };

export const RangePin = () => `
  <div style="display:inline-flex;align-items:center;gap:${tokens.space100}px;
    background:${tokens.colorGrey900};
    color:${tokens.colorTextOnInverse};
    padding:${tokens.space100}px ${tokens.space200}px;
    border-radius:${tokens.radiusFull}px;
  ">
    <span style="color:${tokens.colorActionPrimary};font-size:12px;">⚡</span>
    <span style="
      font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
    ">0.3 km</span>
  </div>
`;

export const SelectedPin = () => `
  <div style="position:relative;display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;">
    <!-- pulse ring -->
    <div style="
      position:absolute;
      width:56px;height:56px;
      border-radius:${tokens.radiusFull}px;
      background:rgba(198,255,45,0.20);
    "></div>
    <!-- pin badge -->
    <div style="
      position:relative;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space200}px;
      display:inline-flex;gap:${tokens.space100}px;align-items:center;
    ">
      <span style="font-size:12px;">🚲</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextPrimary};
      ">VV-042</span>
    </div>
  </div>
`;
```

---

### `stories/components/bottom-card.stories.js`

**Analog:** `stories/elevation.stories.js` (hexToRgba + shadowFromToken; structural complexity)
**Match:** Requires elevation shadow; two structurally different exports

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/BottomCard' };

// Copy hexToRgba + shadowFromToken helpers verbatim from elevation.stories.js (lines 12-30)
function hexToRgba(hex8) { /* ... */ }
function shadowFromToken(token) { /* ... */ }

export const BikeSelection = () => `
  <div style="
    width:393px;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;
    padding:${tokens.space400}px;
    box-shadow:${shadowFromToken(tokens.elevationRaised)};
    box-sizing:border-box;
  ">
    <!-- Thumbnail + name + distance badge + CTA -->
    <div style="display:flex;align-items:center;gap:${tokens.space300}px;margin-bottom:${tokens.space400}px;">
      <!-- Bike image placeholder -->
      <div style="width:64px;height:64px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorTextPrimary};">VoltBike VV-042</div>
        <!-- Distance badge -->
        <div style="display:inline-block;background:${tokens.colorGrey100};color:${tokens.colorGrey700};padding:2px ${tokens.space200}px;border-radius:${tokens.radiusXs}px;font-size:${tokens.typeLabelSm.fontSize}px;margin-top:4px;">120m away</div>
      </div>
    </div>
    <!-- CTA button -->
    <button style="width:100%;min-height:${tokens.space1200}px;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:${tokens.typeHeadingSm.fontWeight};cursor:pointer;">Get Directions</button>
  </div>
`;

export const WalkProgress = () => `
  <div style="
    width:393px;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;
    padding:${tokens.space400}px;
    box-shadow:${shadowFromToken(tokens.elevationRaised)};
    box-sizing:border-box;
  ">
    <!-- Distance + ETA data blocks -->
    <div style="display:flex;gap:${tokens.space400}px;margin-bottom:${tokens.space400}px;">
      <div>
        <div style="font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;font-size:${tokens.typeBodySm.fontSize}px;color:${tokens.colorTextSecondary};">Distance</div>
        <div style="font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorTextPrimary};">350m</div>
      </div>
      <div>
        <div style="font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;font-size:${tokens.typeBodySm.fontSize}px;color:${tokens.colorTextSecondary};">ETA</div>
        <div style="font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorTextPrimary};">4 min</div>
      </div>
      <!-- Bike chip -->
      <div style="display:inline-flex;align-items:center;gap:4px;background:${tokens.colorGreen100};padding:4px ${tokens.space200}px;border-radius:${tokens.radiusXs}px;margin-left:auto;">
        <span style="color:${tokens.colorGreen700};font-size:12px;">🚲</span>
        <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGreen700};">VV-042</span>
      </div>
    </div>
    <!-- CTA button -->
    <button style="width:100%;min-height:${tokens.space1200}px;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:${tokens.typeHeadingSm.fontWeight};cursor:pointer;">I've Arrived</button>
  </div>
`;
```

---

## Pattern Assignments — Screens

All screen stories share the same root element pattern. Derive it from `stories/grid.stories.js` which already uses a 393px fixed-width canvas (lines 17–26).

### Root Element Pattern — Non-Map Screens (Splash, Onboarding 1, Registration, Login, ID Scan, Facial Scan)

**Analog:** `stories/grid.stories.js` lines 17–26 (393px fixed width + flex column)

```js
export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    position:relative;
    overflow:hidden;
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">
    <!-- StatusBar (44px) -->
    <!-- Main content stack -->
  </div>
`;
```

### Root Element Pattern — Map Screens (Home Map, Navigate to Bike, Walking Directions)

**Analog:** `stories/grid.stories.js` (393px canvas) + `stories/elevation.stories.js` (absolute positioning + hexToRgba)

```js
// hexToRgba + shadowFromToken helpers copied at top of file (see Shared Patterns §5)

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    position:relative;
    overflow:hidden;
    background:#e8e8e8;
    box-sizing:border-box;
  ">
    <!-- Map background placeholder -->
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
    <!-- Overlaid components use position:absolute with left/top/right/bottom values -->
  </div>
`;
```

---

### `stories/screens/splash.stories.js`

**Analog:** `stories/grid.stories.js` (single export; 393px fixed canvas; centered content)
**Match:** Single named export `Default`; full-screen centered layout

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Splash' };

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:${tokens.colorSurfaceBase};
    position:relative;
    overflow:hidden;
    box-sizing:border-box;
  ">
    <!-- Background pattern: dots in colorGrey300 -->
    <!-- Logo badge -->
    <!-- Brand name in typeDisplayXl (Manjari/700) -->
    <!-- Tagline in typeBodyMd -->
    <!-- Loader progress bar -->
    <!-- Version label in typeLabelSm -->
  </div>
`;
```

Token highlights:
- `tokens.typeDisplayXl` — composite; brand name (40px/Manjari/700)
- `tokens.colorGrey300` — background dot pattern
- `tokens.colorActionPrimary` — loader progress fill

---

### `stories/screens/onboarding-1.stories.js`

**Analog:** `stories/grid.stories.js` (single export, flex column, 393px)
**Match:** Block/flex layout; single `Default` export

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Onboarding1' };

export const Default = () => `
  <div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorSurfaceBase};overflow:hidden;box-sizing:border-box;">
    <!-- StatusBar -->
    <!-- Skip link row (right-aligned, typeBodyMd, colorTextSecondary) -->
    <!-- Full-bleed illustration placeholder (flex:1 area, background:colorGrey100) -->
    <!-- Pagination dots (3 dots; first active in colorActionPrimary, rest in colorGrey200) -->
    <!-- Headline in typeDisplayMd (Manjari/700) -->
    <!-- Subtext in typeBodyMd -->
    <!-- Next button (Primary, full width) -->
  </div>
`;
```

---

### `stories/screens/registration.stories.js`

**Analog:** `stories/grid.stories.js` (single export, flex column, 393px)

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Registration' };

export const Default = () => `
  <div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorSurfaceBase};box-sizing:border-box;padding:${tokens.space400}px;">
    <!-- Logo (centered) -->
    <!-- Page title in typeHeadingLg -->
    <!-- Subtitle in typeBodyMd, colorTextSecondary -->
    <!-- AppleButton -->
    <!-- GoogleButton -->
    <!-- OrDivider -->
    <!-- WhatsApp phone button (Primary style, green bg, phone icon) -->
    <!-- Email link (Ghost button style) -->
    <!-- Sign-in anchor (typeBodySm, colorTextSecondary + underline) -->
    <!-- Checkbox row + terms text (typeBodySm) -->
  </div>
`;
```

---

### `stories/screens/login.stories.js`

**Analog:** `stories/color.stories.js` lines 18–58 (multiple named exports per file; same structure reused with variation)
**Match:** Two named exports (`PhoneTab`, `EmailTab`) in one file; each export is a full 393px screen with the toggle in different active state

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Login' };

// PhoneTab and EmailTab share identical markup except which toggle segment is "active".
// Use a helper function — same pattern as spacing.stories.js and radius.stories.js.
function loginScreen(activeTab) {
  return `
    <div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorSurfaceBase};box-sizing:border-box;padding:${tokens.space400}px;">
      <!-- StatusBar -->
      <!-- Header (back arrow + "Sign in" title) -->
      <!-- AppleButton -->
      <!-- GoogleButton -->
      <!-- OrDivider -->
      <!-- SegmentedToggle (Phone/Email) — activeTab controls which is highlighted -->
      <!-- PhoneInput row (shown when activeTab === 'phone') -->
      <!-- Continue button (Primary, full width) -->
      <!-- Sign-up anchor -->
    </div>
  `;
}

export const PhoneTab = () => loginScreen('phone');
export const EmailTab = () => loginScreen('email');
```

---

### `stories/screens/id-scan.stories.js`

**Analog:** `stories/elevation.stories.js` (dark surface context; single named export with complex layout)
**Match:** Dark top nav + camera viewport + Trust Panel; single `Default` export

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/IdScan' };

// Alpha fills — hardcode with comment (not in token system):
// Top nav button bg: rgba(255,255,255,0.13)  /* #FFFFFF22 */
// Instructions banner bg: rgba(0,0,0,0.53)   /* #00000088 */

export const Default = () => `
  <div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorGrey900};overflow:hidden;box-sizing:border-box;">
    <!-- Dark top nav: close button (left) + flashlight toggle (right), both rgba(255,255,255,0.13) bg circles -->
    <!-- Step label "Step 1 of 2" in typeLabelSm, colorTextSecondary -->
    <!-- ProgressStrip (Step1Active) -->
    <!-- Camera viewport (flex:1, simulated with dark grey bg #1a1a1a) -->
      <!-- ID card guide frame: dashed white border rectangle, centered -->
      <!-- Instructions banner: rgba(0,0,0,0.53) pill with scan instruction text -->
    <!-- TrustPanel (IdScan variant) pinned to bottom -->
  </div>
`;
```

---

### `stories/screens/facial-scan.stories.js`

**Analog:** `stories/elevation.stories.js` (same dark-surface pattern as id-scan)
**Match:** Same structure as IdScan with oval face guide instead of ID card frame

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/FacialScan' };

export const Default = () => `
  <div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorGrey900};overflow:hidden;box-sizing:border-box;">
    <!-- Dark top nav: close button (left) + flip-camera toggle (right) -->
    <!-- Step label "Step 2 of 2" -->
    <!-- ProgressStrip (Step2Active) -->
    <!-- Camera viewport -->
      <!-- Oval face guide: border-radius:50% oval with white/green dashed border -->
      <!-- Scan progress arc approximation -->
    <!-- TrustPanel (FacialScan variant) -->
  </div>
`;
```

---

### `stories/screens/home-map.stories.js`

**Analog:** `stories/grid.stories.js` (393px canvas root) + `stories/elevation.stories.js` (hexToRgba needed; absolute positioning)
**Match:** Full-bleed map bg; all UI elements use `position:absolute`; single `Default` export

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/HomeMap' };

// Copy hexToRgba + shadowFromToken helpers verbatim from elevation.stories.js (lines 12-30)
function hexToRgba(hex8) { /* ... */ }
function shadowFromToken(token) { /* ... */ }

export const Default = () => `
  <div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
    <!-- Map background -->
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>

    <!-- StatusBar (position:absolute, top:0, full width, colorSurfaceBase bg with low opacity) -->
    <!-- Top gradient overlay -->
    <!-- Search bar (position:absolute, top:~60px, colorSurfaceBase bg, box-shadow from elevationRaised) -->
    <!-- Nearby badge (position:absolute, colorActionPrimary bg pill) -->
    <!-- 6 bike RangePins (position:absolute, approximate coordinates) -->
    <!-- Location pulse + dot (position:absolute, center of map) -->
    <!-- Bottom gradient overlay -->
    <!-- My Location FAB (position:absolute, bottom-right area, elevationFloating shadow) -->
    <!-- Filters FAB (position:absolute, above tab bar) -->
    <!-- Scan CTA Card (position:absolute, bottom area, colorSurfaceBase, elevationFloating) -->
    <!-- TabBar (position:absolute, bottom:0, full width) -->
  </div>
`;
```

Token highlights:
- `shadowFromToken(tokens.elevationRaised)` — search bar shadow
- `shadowFromToken(tokens.elevationFloating)` — FABs, scan CTA card, tab bar

---

### `stories/screens/navigate-to-bike.stories.js`

**Analog:** `stories/grid.stories.js` + `stories/elevation.stories.js` (same map screen pattern as HomeMap)
**Match:** Map bg; absolute-positioned overlays; single `Default` export

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/NavigateToBike' };

// Copy hexToRgba + shadowFromToken helpers verbatim from elevation.stories.js (lines 12-30)
function hexToRgba(hex8) { /* ... */ }
function shadowFromToken(token) { /* ... */ }

export const Default = () => `
  <div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
    <!-- Map background -->
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>

    <!-- Dashed route line (SVG or border approximation) -->
    <!-- User location pulse (colorActionPrimary tint) -->
    <!-- SelectedPin (bike destination) -->
    <!-- StatusBar (position:absolute, top:0) -->
    <!-- Cancel button (top-left: circle with × icon) -->
    <!-- ETA badge (top-center: dark pill, colorSurfaceInverse bg, white text) -->
    <!-- BottomCard BikeSelection variant (position:absolute, bottom:tab-bar-height) -->
    <!-- TabBar (position:absolute, bottom:0) -->
  </div>
`;
```

---

### `stories/screens/walking-directions.stories.js`

**Analog:** `stories/grid.stories.js` + `stories/elevation.stories.js` (same map screen pattern)
**Match:** Map bg; absolute overlays; single `Default` export

```js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/WalkingDirections' };

// Copy hexToRgba + shadowFromToken helpers verbatim from elevation.stories.js (lines 12-30)
function hexToRgba(hex8) { /* ... */ }
function shadowFromToken(token) { /* ... */ }

export const Default = () => `
  <div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
    <!-- Map background -->
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>

    <!-- Walked route line (colorActionPrimary) -->
    <!-- Remaining route line (colorGrey300) -->
    <!-- User location pulse -->
    <!-- Bike destination pin -->
    <!-- StatusBar (position:absolute, top:0) -->
    <!-- Cancel button (top-left circle) -->
    <!-- Turn instruction card (dark surface: colorGrey900, position:absolute near top) -->
      <!-- Turn arrow chip: rgba(255,255,255,0.09) bg circle /* #FFFFFF18 */ -->
      <!-- Street name text in typeHeadingMd, colorTextOnInverse -->
    <!-- Recenter FAB (position:absolute, bottom-right, elevationFloating shadow) -->
    <!-- BottomCard WalkProgress variant (position:absolute, bottom:0) -->
  </div>
`;
```

---

## Alpha Fill Reference (Non-Token Hardcodes)

Any file using these values must include an inline comment. Do NOT use token variable names — these are design-layer values with no token mapping.

| Design Value | CSS Value | Files Using It |
|-------------|-----------|----------------|
| `#FFFFFF18` | `rgba(255,255,255,0.09)` | `trust-panel.stories.js`, `id-scan.stories.js`, `walking-directions.stories.js` |
| `#FFFFFF22` | `rgba(255,255,255,0.13)` | `id-scan.stories.js`, `facial-scan.stories.js` (top nav button bg) |
| `#FFFFFF33` | `rgba(255,255,255,0.20)` | `progress-strip.stories.js` (inactive segment) |
| `#00000088` | `rgba(0,0,0,0.53)` | `id-scan.stories.js`, `facial-scan.stories.js` (instructions banner) |

---

## No Analog Found

No files fall into this category. All 20 new story files have close analogs in the 8 existing Foundation stories. The patterns are fully covered.

---

## Metadata

**Analog search scope:** `stories/` (8 files read in full)
**Files scanned:** 8 existing story files
**Pattern extraction date:** 2026-07-31

### Quick Analog Lookup

| Situation | Use This Analog |
|-----------|----------------|
| Single-export, simple element | `stories/border.stories.js` |
| Multi-export, named variants | `stories/radius.stories.js` |
| Helper fn + multi-export | `stories/spacing.stories.js` |
| Dark surface / alpha fills | `stories/elevation.stories.js` |
| Elevation shadow (box-shadow) | `stories/elevation.stories.js` (copy hexToRgba + shadowFromToken) |
| Composite token (`.fontSize` etc.) | `stories/typography.stories.js` |
| 393px canvas, flex column | `stories/grid.stories.js` |
| Multiple named exports per file | `stories/color.stories.js` |
| Array/map pattern (dynamic list) | `stories/iconography.stories.js` |
