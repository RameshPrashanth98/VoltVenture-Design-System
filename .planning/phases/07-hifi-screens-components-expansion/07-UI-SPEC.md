---
phase: 7
slug: hifi-screens-components-expansion
status: approved
shadcn_initialized: false
preset: none
created: 2026-08-05
---

# Phase 7 — UI Design Contract

> Visual and interaction contract for Phase 7: Hi-Fi Screens & Components Expansion.
> Storybook HTML/CSS stories — not a React/shadcn app. Template sections adapted accordingly.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | VoltVenture Token System |
| Preset | not applicable |
| Component library | none (plain HTML/CSS, tokens from `generated/tokens.js`) |
| Icon library | Unicode symbols + emoji (no external icon library) |
| Heading font | Manjari (typeDisplayXl, typeDisplayLg, typeHeadingLg, typeHeadingMd, typeHeadingSm) |
| Body font | Inter (typeBodyLg, typeBodyMd, typeBodySm, typeLabelLg, typeLabelMd, typeLabelSm) |
| Code font | JetBrains Mono (SourceCode panels only) |

Import path (all story files): `import * as tokens from '../../generated/tokens.js'`

---

## Phone Frame Spec

Every `Interactive` export renders inside a phone frame. Copy `makePhoneFrame()` **inline per file** — never import from a shared module.

```
Outer frame:  402×874px
Background:   #0f0f0f  (Volt Black bezel)
Border-radius: 44px
Padding:      6px
Box-sizing:   border-box

Inner screen: width:100%; height:100%
Background:   #ffffff  (light) or  #0f0f0f  (dark — IdScan, FacialScan, Splash, QR)
Border-radius: 38px
Overflow:     hidden
Display:      flex; flex-direction:column

Status bar (inside screen):
  Height:     54px
  Background: #0f0f0f  (matches bezel — unified dark top)
  Content:    "9:41"  left  +  "▪ WiFi ▲"  right
  Font:       Inter 15px/600 for time; Inter 11px for indicators
  Color:      #ffffff

Content area below status bar:
  flex:1; overflow:hidden; position:relative
```

**Bottom safe area:** Add `padding-bottom:34px` to the last scrollable container or tab bar when screen has a home indicator row (all screens except map overlays).

---

## Screen Canvas (non-Interactive / Default export)

```
width: 393px
min-height: 852px
```

Default exports use HTML string returns (template literals). Interactive exports return DOM elements via `document.createElement`.

---

## Spacing Scale

VoltVenture 4pt token grid — use token constants, never raw px in Interactive exports.

| Token | Value | Primary usage in Phase 7 |
|-------|-------|--------------------------|
| `tokens.space050` | 2px | Icon-to-icon tight gap |
| `tokens.space100` | 4px | Label-to-value stacked, badge padding |
| `tokens.space200` | 8px | Icon-to-label gap, list divider offset |
| `tokens.space300` | 12px | Card internal compact padding, gap between sibling chips |
| `tokens.space400` | 16px | Screen horizontal margin, list row vertical padding |
| `tokens.space500` | 20px | Card internal padding, above-tab-bar clearance |
| `tokens.space600` | 24px | Button horizontal padding, section heading margin |
| `tokens.space800` | 32px | Gap between sections |
| `tokens.space1000` | 40px | Large section spacing |
| `tokens.space1200` | 48px | Minimum touch target height |
| `tokens.space1600` | 64px | Minimum two-line list row height |

Exceptions: Status bar (54px — inherited from Phase 6 phone frame spec, not a spacing token).

---

## Typography

All sizes in px. Composite tokens accessed as `tokens.typeXxx.fontSize`, `.fontWeight`, `.lineHeight`, `.fontFamily`.

| Role | Token | Size | Weight | Font | Usage |
|------|-------|------|--------|------|-------|
| Display XL | `typeDisplayXl` | 40px | 800 | Manjari | Hero headlines (Splash, Onboarding) |
| Display LG | `typeDisplayLg` | 32px | 700 | Manjari | Section heroes, large stat numbers |
| Heading LG | `typeHeadingLg` | 24px | 700 | Manjari | Screen titles (Registration, Login) |
| Heading MD | `typeHeadingMd` | 20px | 700 | Manjari | Card titles, panel headers |
| Heading SM | `typeHeadingSm` | 15px | 600 | Inter | Buttons, sub-headers, emphasized labels |
| Body LG | `typeBodyLg` | 17px | 400 | Inter | Primary body copy, legal text |
| Body MD | `typeBodyMd` | 15px | 400 | Inter | Default body copy, list items |
| Body SM | `typeBodySm` | 13px | 400 | Inter | Supporting copy, captions |
| Label LG | `typeLabelLg` | 15px | 500 | Inter | Form labels, nav labels (active) |
| Label MD | `typeLabelMd` | 13px | 500 | Inter | Status bar time, tag labels |
| Label SM | `typeLabelSm` | 11px | 500 | Inter | Badges, chips, tab bar labels |
| Code | JetBrains Mono | 12px | 400 | JetBrains Mono | SourceCode panel content |
| Code label | JetBrains Mono | 11px | 400 | JetBrains Mono | SourceCode section headings |

**Rule:** Never use green (#c6ff2d) as text — use `tokens.colorTextAccent` (#7d9220) for accent text on light surfaces.

---

## Color

60-30-10 rule applied across all 34 screens.

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Dominant (60%) | `colorSurfaceBase` | #ffffff | Primary light surface; form screen backgrounds |
| Dark dominant | `colorSurfaceInverse` | #0f0f0f | Splash, FacialScan, IdScan, QR Unlock backgrounds |
| Secondary (30%) | `colorGrey100` | #f5f5f5 | List row fills, settings rows, sunken fields |
| Card surface | `colorSurfaceRaised` | #ffffff | Card/sheet backgrounds on top of map/surface |
| Accent (10%) | `colorActionPrimary` | #c6ff2d | Primary CTA button BG, status dots, key highlights |
| Accent pressed | `colorGreen600` | #a8de1a | Primary button pressed state |
| Secondary action | `colorActionSecondary` | #0f0f0f | Secondary CTA background |
| Primary text | `colorTextPrimary` | #0f0f0f | All body + heading text on light surfaces |
| Secondary text | `colorTextSecondary` | #808080 | Metadata, captions, placeholder text |
| Disabled text | `colorTextDisabled` | #c9c9c9 | Non-interactive labels |
| Accent text | `colorTextAccent` | #7d9220 | Links, active states, badge text on light |
| On-inverse text | `colorTextOnInverse` | #ffffff | Text on dark surfaces |
| Border subtle | `colorBorderSubtle` | #ebebeb | Row dividers, input rest state, card outlines |
| Border strong | `colorBorderStrong` | #0f0f0f | Input focus (dark), selected card stroke |
| Focus ring | `colorBorderFocus` | #c6ff2d | Electric green focus ring (stroke, never fill) |
| Map placeholder | (hardcoded) | #e8e8e8 | Static map background — no token |

Accent reserved for: primary CTA button background, active tab indicator dot, live status dot, QR viewfinder corner accents, VoltCoins balance highlight. Never as text color.

---

## Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radiusXs` | 8px | Badges, small chips, progress tracks |
| `radiusSm` | 12px | Input fields, thumbnails, inline tags |
| `radiusMd` | 16px | List rows, secondary cards |
| `radiusLg` | 20px | Standard content cards, scan CTA card |
| `radiusXl` | 28px | Feature cards, stat blocks, bottom sheets light |
| `radius2xl` | 36px | Bottom sheets full-width, hero surfaces |
| `radiusFull` | 999px | Buttons, pills, avatars, tab circles, status dots |

---

## Elevation

Use `shadowFromToken()` helper copied inline per file when elevation tokens are needed (map screens, floating FABs, sheets).

```js
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1,3),16);
  const g = parseInt(hex8.slice(3,5),16);
  const b = parseInt(hex8.slice(5,7),16);
  const a = (parseInt(hex8.slice(7,9),16)/255).toFixed(2);
  return 'rgba('+r+','+g+','+b+','+a+')';
}
function shadowFromToken(t) {
  if(t==='none') return 'none';
  return t.offsetX+'px '+t.offsetY+'px '+t.blur+'px '+t.spread+'px '+hexToRgba(t.color);
}
```

| Token | Usage |
|-------|-------|
| `elevationFlat` | List rows, chips, inline elements |
| `elevationRaised` | Search bars, input surfaces |
| `elevationFloating` | FABs, bottom cards, nav cards |
| `elevationOverlay` | Modal sheets, overlapping panels |

---

## Interaction Patterns by Screen Category

### Category A: Form Screens
Screens: Registration, Login, Edit Profile, Add Payment Method, Security Deposit

- All text input fields use hidden `<input type="text">` (or `type="tel"`, `type="email"`) for keyboard capture
- Field focus: border changes from `colorBorderSubtle` to `colorBorderStrong`; label rises or highlights
- Primary CTA button: press state → `backgroundColor = '#a8de1a'` + `transform: scale(0.97)` on `pointerdown`; restore on `pointerup`/`pointerleave`
- State held in plain JS variables (no innerHTML rebuild)
- Pattern: `document.createElement('input')` with `opacity:0;position:absolute;` positioned over the visible styled field div

### Category B: Toggle / Tab Screens
Screens: Settings, Preferences, Login & Security, Profile

- Toggle switches: click cycles `on ↔ off`; pill background changes `#c6ff2d → #ebebeb`; knob translates 20px
- Active tab: `backgroundColor` updates to `colorTextPrimary`; label becomes `colorTextAccent`
- Settings rows (expandable): `click` toggles expanded state; `max-height` transition (CSS or inline `.style.maxHeight`)
- FAQ rows: same expand/collapse pattern

### Category C: Map Screens
Screens: Home Map, Navigate to Bike, Walking Directions, Active Ride Dashboard, End Ride - Find Charging, Riding to Charging, Discover VIP Hubs

- Map background: static `<div style="background:#e8e8e8">` — no token, hardcoded
- Animated overlays: pulse ring on user location dot using CSS keyframe injection via `document.head.appendChild(style)`
- All map overlays use `position:absolute` inside the screen container
- FABs and cards: press feedback via `pointerdown/pointerup` opacity or transform
- Tab bar (Home Map, Discover VIP Hubs): active tab switching with `backgroundColor` update

### Category D: List Screens
Screens: Payment Methods, Profile, Support, Ride History & Stats, VoltCoins Rewards, Curated Routes

- List rows: `pointerdown` → `backgroundColor = tokens.colorGrey100` (press highlight); `pointerup/pointerleave` → restore `colorSurfaceBase`
- Scrollable areas (if content overflows): `overflow-y:auto` on content container inside screen
- VoltCoins balance: number display only; no animation in this phase

### Category E: Static / Read-Only Screens
Screens: Splash, Onboarding 1–3, ID Scan, Facial Scan, QR Unlock Scan, Safety Mount, Ride Complete Summary, Cafe Detail, Terms of Service, Privacy Policy

- Minimal interaction: primary CTA button shows press state only
- Onboarding: page indicator dots update on "Next" button press (active dot changes color)
- Splash: no interaction required (static brand display)
- FacialScan / IdScan: camera placeholder with pulsing overlay ring

---

## New Component Interaction Contracts

| Component | Story file | Interactive behavior |
|-----------|-----------|---------------------|
| Settings Row | `settings-row.stories.js` | Press feedback (grey fill on pointerdown); optional expand/collapse |
| Dashboard Panel | `dashboard-panel.stories.js` | Static display (stat numbers); no live update in this phase |
| Payment Card Row | `payment-card-row.stories.js` | Press feedback; selection state (checkmark or border highlight) |
| QR Viewfinder | `qr-viewfinder.stories.js` | Animated corner accents pulse (CSS keyframe); static camera fill |
| Nav Turn Card | `nav-turn-card.stories.js` | Dismiss on tap (opacity 0 → remove from DOM) |
| Riding Progress Card | `riding-progress-card.stories.js` | Progress bar fill; tap to cycle demo states |
| Hub Card | `hub-card.stories.js` | Press feedback; "View Details" CTA press state |
| Route Card | `route-card.stories.js` | Press feedback; difficulty badge color per level |
| VoltCoins Balance | `voltcoins-balance.stories.js` | Static balance display with accent color; no counter animation |
| Ride Summary Card | `ride-summary-card.stories.js` | Static metric display; "Pay" CTA press state |
| Station Info Card | `station-info-card.stories.js` | "Navigate" CTA press state; press feedback on card |
| FAQ Row | `faq-row.stories.js` | Expand/collapse on tap; chevron rotation 0° → 90° |

---

## SourceCode Export Convention

Every screen and new component file gets a `SourceCode` named export showing React Native Paper JSX.

```js
function _esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label,code){ return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`; }
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// ScreenName — React Native Paper</div>${_blk('ScreenName', RN_JSX_STRING)}</div>`;
```

RN Paper JSX rules:
- Use VoltVenture token values as **string literals** in the JSX string (not imported from lib/ — stories only import `generated/tokens.js`)
- Token constant names referenced for documentation: e.g. `// tokens.colorActionPrimary`
- Import structure shown: `import { Surface, Button, Text } from 'react-native-paper'` + `import { createVoltVentureTheme } from 'voltventure-design-system'`
- Dark background for the code panel: `background:#0f0f0f`
- Code content color: `#d4d4d4` (default) with `#c6ff2d` for headings/labels

---

## Copywriting Contract

| Screen / Element | Primary CTA | Supporting copy pattern |
|-----------------|-------------|-------------------------|
| Splash | (none — auto-advance) | "VoltVenture" wordmark only |
| Onboarding 1 | "Get Started" | Benefit headline + 1-line descriptor |
| Onboarding 2–3 | "Next" / "Get Started" | Feature benefit + 1-line descriptor |
| Registration | "Create Account" | "Already have an account? Sign in" |
| Login | "Sign In" | "Don't have an account? Register" |
| ID Scan | "Take Photo" | "Hold still while we scan your ID" |
| Facial Scan | "Scan Face" | "Look into the camera" |
| QR Unlock | (automatic on scan) | "Point camera at the QR code on the bike" |
| Security Deposit | "Pay Deposit" | Refund policy summary (1 line) |
| Safety Mount | "I'm Ready" | Helmet/mount reminder |
| Home Map | "Scan QR" | "N bikes nearby" badge |
| Navigate to Bike | "Start Navigation" | Distance + ETA |
| Walking Directions | "I'm at the Bike" | Turn-by-turn instruction |
| Active Ride | "End Ride" | Live duration + distance |
| End Ride | "Find Charging Station" | "Deposit your bike at a hub" |
| Riding to Charging | "I've Docked" | ETA to hub |
| Ride Complete | "Done" | Cost summary |
| Discover VIP Hubs | "Explore" | Hub distance + amenity summary |
| Cafe Detail | "Get Directions" | Cafe name + brief description |
| Curated Routes | "Start Route" | Route name + distance + difficulty |
| VoltCoins Rewards | "Redeem" | Balance + next reward threshold |
| Profile | "Edit Profile" | Member since + tier badge |
| Edit Profile | "Save Changes" | "Changes saved" inline confirmation |
| Ride History | (list view — no primary CTA) | Duration + date per row |
| Settings | (list view — no primary CTA) | Toggle labels |
| Preferences | "Save" | Preference category + toggle |
| Login & Security | (list view) | "Last changed N days ago" |
| Add Payment | "Add Card" | "Secured by Stripe" |
| Select Payment | "Confirm Payment" | Payment summary |
| Payment Methods | "Add New" | Masked card last 4 |
| Support | (list view — FAQ rows) | Category + chevron |
| Terms of Service | "I Agree" | Last updated date |
| Privacy Policy | "I Agree" | Last updated date |

Empty state heading: "Nothing here yet" / Empty state body: "Come back after your first ride."
Error state: "[Action] failed — [reason]. Try again or contact support."
Destructive confirmation: "End Ride: This will lock the bike and calculate your fare."

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| none | — | not applicable |

No external component registries. All stories use plain HTML/CSS with `generated/tokens.js`. No npm package installs required for Phase 7 story files.

---

## File Naming Convention

| Category | Directory | Export pattern |
|----------|-----------|----------------|
| Screen stories | `stories/screens/` | `export default { title: 'Screens/[Name]' }` |
| Component stories | `stories/components/` | `export default { title: 'Components/[Name]' }` |
| All named exports | PascalCase | `Default`, `Interactive`, `SourceCode` (+ optional state variants) |

Glob `'../stories/**/*.stories.js'` in `.storybook/main.js` already covers all new files — no config change needed.

---

## Done-Bar

```
npm run build-storybook exits 0
storybook-static/ produced
34 screen story files exist in stories/screens/
23 component story files exist in stories/components/ (11 existing + 12 new)
All Interactive exports verified manually in Storybook browser
```

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS — screen-by-screen CTA and copy contract defined
- [x] Dimension 2 Visuals: PASS — phone frame spec, screen layout, elevation, radius all specified
- [x] Dimension 3 Color: PASS — 60-30-10 rule applied; accent usage restricted; token names locked
- [x] Dimension 4 Typography: PASS — full type scale mapped to tokens; font families declared
- [x] Dimension 5 Spacing: PASS — 4pt token grid; all spacing via tokens.spaceXXX constants
- [x] Dimension 6 Registry Safety: PASS — no external registries; tokens.js only

**Approval:** approved 2026-08-05
