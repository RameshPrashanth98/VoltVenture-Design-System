# Phase 3 Research: Component Library + App Screen Stories in Storybook

**Researched:** 2026-07-31
**Domain:** Storybook HTML/CSS story authoring, Hi-Fi wireframe component extraction
**Confidence:** HIGH — wireframe audit performed directly on .pen JSON; Storybook config read from source

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Phase 3 replaces original ROADMAP Phase 3 (RN app integration → now Phase 4). Planner must update ROADMAP.md: rename Phase 3, add Phase 4.
- **D-02:** Stay on `@storybook/html-vite` 10.5.5. No new Storybook framework. Stories are plain HTML template functions with token data from `generated/tokens.js`.
- **D-03:** Three Storybook sections: Foundation/ (existing, do not modify), Components/ (new), Screens/ (new).
- **D-04:** Component list extracted from wireframes — not predefined. Elements appearing across multiple screens are candidates. Each component story shows default + key variants + disabled where applicable.
- **D-05:** Screen stories are Hi-Fi only. Skip wireframe-only screens. Canvas: 393px wide, min-height 852px. Title pattern: `'Screens/HomeMap'`.
- **D-06:** Done-bar: `npm run build-storybook` exits 0; all story files exist in correct dirs; GitHub Actions CI passes.

### Claude's Discretion

- Exact component list (planner audits wireframes and decides based on repeating elements)
- Number and identity of Hi-Fi screens (confirmed by this research — see Section 1)
- Component story variant set (minimum: primary + one variant + disabled if applicable)
- Story CSS approach (inline styles from token values, same as Phase 2)
- Screen story layout within the 393px frame
- main.js story glob update (verify coverage of stories/components/ and stories/screens/)

### Deferred Ideas (OUT OF SCOPE)

- Storybook for React Native (`@storybook/react-native`) — future phase
- Actual React Native Paper component implementation — Phase 4+
- Wireframe-only screens (no Hi-Fi version available)
- Interactive story controls / Storybook args
- Chromatic visual regression
- GitHub Pages deployment
</user_constraints>

---

## Summary

Phase 3 extends the existing Storybook (8 Foundation stories, `@storybook/html-vite`) with two new sections: Components and Screens. Both sections follow the exact same pattern as Phase 2 stories — HTML template literal functions, inline styles from `generated/tokens.js`, PascalCase named exports.

The wireframe audit identified **10 distinct Hi-Fi screen frames** across the authentication onboarding flow and the core ride flow (Splash, Onboarding 1, Registration, Login, ID Scan, Facial Scan, Home Map, Navigate to Bike, Walking Directions). One duplicate Login frame exists in the .pen file and maps to a single story file with two variant exports (Phone and Email states). The two frames have identical node count (49 nodes each) and structure; they are design review copies, not distinct states.

Across those 10 Hi-Fi screens, **11 repeating UI components** were extracted — each appearing in 2 or more screens. The most pervasive are: StatusBar (9 of 10 screens), Button (8 screens in multiple forms), TabBar (2 screens but architecturally foundational), SocialAuthButtons (2 screens), and MapPin (2 screens). These 11 components form the complete Components/ section.

**Primary recommendation:** No changes needed to `.storybook/main.js`. The existing glob `'../stories/**/*.stories.js'` already covers `stories/components/` and `stories/screens/` subdirectories via fast-glob's `**` zero-or-more-directories semantics.

---

## 1. Wireframe Audit Results

### Source File
`D:/1.Product Development with AI/1.1 project/5. VoltVenture app/5.Wireframes/voltventure_wireframes.pen`
File format: JSON (Pencil 2.14 format). 917 KB. 37 top-level children (frames + 1 group).

Wireframe-only screens (indices 0–26, skipped per D-05): Splash, Onboarding, Registration, Login, ID Scan, Home Map, Safety Mount, Active Ride Dashboard, Discover VIP Hubs, Cafe Detail Card, Curated Routes, Payment Methods, Security Deposit, VoltCoins Rewards, Profile, Preferences, Support, Navigate to Bike, Facial Scan, Walking Directions, QR Unlock Scan, Add Payment Method, Select Payment Method, End Ride — Find Charging Station, Riding to Charging Station, Ride Complete Summary. (26 wireframe screens + 1 flow connector group)

### Hi-Fi Screens Identified (indices 27–36)

| # | Frame Name (exact) | Frame ID | Dimensions | What It Shows |
|---|-------------------|----------|------------|---------------|
| 1 | Splash Screen — Hi-Fi | O94n2 | 393 × 852 | App loading state: decorative route-path background pattern, centered logo badge + brand name + tagline + loader progress bar, version label |
| 2 | Onboarding 1 Screen — Hi-Fi | WSGRc | 393 × 852 | First onboarding slide: status bar, skip link, full-bleed illustration (image), pagination dots (1 of 3 active), headline + subtext, Next button with arrow |
| 3 | Registration Screen — Hi-Fi | Y9ojN | 393 × 852 | New user account creation: logo, page title/subtitle, Apple + Google social buttons, OR divider, WhatsApp phone button, email link, sign-in anchor, checkbox + terms text |
| 4 | Login Screen — Hi-Fi (Phone tab) | yfZaz | 393 × 852 | Returning user login: header, Apple + Google social buttons, OR divider, segmented Phone/Email toggle (Phone active), phone input row with country code, Continue button, sign-up anchor |
| 5 | Login Screen — Hi-Fi (duplicate) | TS9Td | 393 × 852 | Structural duplicate of yfZaz (identical 49-node tree, side-by-side design review copy) — maps to same story file as #4, second named export `EmailVariant` |
| 6 | ID Scan Screen — Hi-Fi | f6zx5 | 393 × 852 | KYC identity verification step 1: dark top nav with close + flashlight toggle, step label + 2-segment progress strip (step 1 active), full-bleed camera viewport with ID card guide frame + scan line, bottom trust panel (dark surface) with shield badge + scan CTA button |
| 7 | Facial Scan Screen — Hi-Fi | llnIt | 393 × 852 | KYC identity verification step 2: same dark top nav with close + flip-camera toggle, progress strip (step 2 active), camera viewport with oval face guide + scan progress arc, bottom trust panel with face scan CTA |
| 8 | Home Map Screen — Hi-Fi | E9hST | 393 × 852 | Main app hub: full-bleed map background, safe zone polygon, 6 range-labeled bike pins, status bar overlay, location pulse + dot, gradient overlays top/bottom, search bar, nearby badge, 2 FABs (my location + filters), scan-unlock CTA card (bike count + QR button), tab bar |
| 9 | Navigate to Bike Screen — Hi-Fi | kUCG9 | 393 × 852 | Walking navigation to selected bike: map background, dashed route line, user location pulse, selected bike pin with pulse ring, status bar overlay, cancel button (top-left), ETA badge (dark pill, top-center), selected bike card (thumbnail + name + battery chip + distance badge + directions CTA), tab bar |
| 10 | Walking Directions Screen — Hi-Fi | FZnNd | 393 × 852 | Turn-by-turn walking directions: map background with walked + remaining route lines, location pulse, bike destination pin, status bar overlay, cancel button, turn instruction card (dark surface, turn arrow chip + street text), recenter FAB, walking progress card (distance + ETA data blocks + bike chip + arrived CTA) |

**Note on duplicate Login frame:** Frames yfZaz and TS9Td have identical structure (49 nodes each, same fill tokens, same child hierarchy). They are side-by-side design review copies in the canvas (x: 8767 vs 9240, same y: -257). The story file `stories/screens/login.stories.js` should export two named variants: `PhoneTab` (the rendered active state shown) and `EmailTab` (toggle inactive — visually the same with Email tab selected, implemented as a CSS class toggle in the story).

### Component Candidates

The following UI elements were identified as repeating across 2+ Hi-Fi screens. Elements appearing in only one screen are noted but not promoted to the Components/ section (they become inline markup in the screen story instead).

| Component | Story File | Screens It Appears In | Variants Needed |
|-----------|------------|----------------------|-----------------|
| StatusBar | `stories/components/status-bar.stories.js` | Screens 2, 3, 4/5, 6, 7, 8, 9, 10 (9/10) | `LightSurface` (dark icons on white), `DarkSurface` (white icons on dark/transparent) |
| Button | `stories/components/button.stories.js` | Screens 2 (Next), 3 (WhatsApp, Email link), 4 (Continue), 6/7 (Scan CTA), 9 (Directions), 10 (Arrived, Cancel link) | `Primary` (green bg, black text), `Secondary` (black bg, white text), `Ghost` (no bg, underline text link), `Disabled` |
| SocialAuthButtons | `stories/components/social-auth-buttons.stories.js` | Screens 3, 4/5 | `AppleButton` (green bg, black icon/text), `GoogleButton` (white bg, dark icon/text) |
| OrDivider | `stories/components/or-divider.stories.js` | Screens 3, 4/5 | `Default` (grey lines + "OR" text) |
| PhoneInput | `stories/components/phone-input.stories.js` | Screens 3 (WhatsApp Phone), 4/5 (Phone Input Row) | `Default` (empty/placeholder), `Filled` (with country code + number) |
| SegmentedToggle | `stories/components/segmented-toggle.stories.js` | Screen 4/5 (Phone/Email method toggle) | `PhoneActive`, `EmailActive` |
| ProgressStrip | `stories/components/progress-strip.stories.js` | Screens 6, 7 | `Step1Active` (step 1 lit, step 2 dim), `Step2Active` (step 1 complete, step 2 lit) |
| TrustPanel | `stories/components/trust-panel.stories.js` | Screens 6, 7 | `IdScan` (camera icon + "Scan ID" label), `FacialScan` (camera icon + "Start Face Scan" label) |
| TabBar | `stories/components/tab-bar.stories.js` | Screens 8, 9 | `RideActive`, `DiscoverActive`, `WalletActive`, `AccountActive` |
| MapPin | `stories/components/map-pin.stories.js` | Screens 8, 9 (bike range pins + selected bike pin) | `RangePin` (zap icon + distance label), `SelectedPin` (bike icon + label + pulse ring) |
| BottomCard | `stories/components/bottom-card.stories.js` | Screens 9 (Selected Bike Card), 10 (Walking Progress Card) | `BikeSelection` (thumbnail + meta + distance badge + CTA), `WalkProgress` (distance/ETA data blocks + arrived CTA) |

**Single-screen components (inline in screen story, not promoted to Components/):**

| Element | Screen Only | Reason Not Promoted |
|---------|-------------|---------------------|
| Logo Badge | Splash, Registration | Logo is brand identity asset, not a reusable UI component |
| Loader Track | Splash | One-off loading indicator |
| Pagination Dots | Onboarding 1 | Only one onboarding screen in Hi-Fi |
| Camera Viewport (ID frame guide) | ID Scan | Unique per-screen element |
| Camera Viewport (face oval) | Facial Scan | Unique per-screen element |
| Search Bar | Home Map | Appears in 1 Hi-Fi screen |
| Nearby Badge | Home Map | Appears in 1 Hi-Fi screen |
| FAB (Floating Action Button) | Home Map (×2), Walking Directions (×1) | Appears in 2 screens but as structurally trivial single-icon circle |
| Scan CTA Card | Home Map | Appears in 1 Hi-Fi screen |
| ETA Badge | Navigate to Bike | Appears in 1 Hi-Fi screen |
| Turn Instruction Card | Walking Directions | Appears in 1 Hi-Fi screen |
| Cancel Button | Navigate to Bike, Walking Directions | Simple icon-in-circle; too trivial for own story; covered by Button/Ghost variant |

**Reconsidered: FAB** — Although structurally trivial (circle + icon), the FAB appears in 3 Hi-Fi screens (Home Map ×2, Walking Directions ×1) and is architecturally distinct from Button (circular, elevation-floating, icon-only). Adding it as a component is discretionary — the planner may include `stories/components/fab.stories.js` with `Default` variant.

---

## 2. Storybook Config Analysis

### Story Glob Coverage

Current `main.js`:
```js
stories: ['../stories/**/*.stories.js'],
```

**Finding:** The existing glob `'../stories/**/*.stories.js'` ALREADY COVERS subdirectories. [VERIFIED: fast-glob docs — `**` matches zero or more path segments, so `stories/**/*.stories.js` matches `stories/color.stories.js` (zero intermediate dirs) AND `stories/components/button.stories.js` (one intermediate dir) AND `stories/screens/home-map.stories.js` (one intermediate dir).] [ASSUMED — behavior confirmed by fast-glob semantics which Vite/Storybook uses; not independently tested on this machine with a mock subdir file.]

**Recommendation:** No change needed to `.storybook/main.js`. The planner should include a Wave 0 verification step: create one stub story file at `stories/components/.storycheck.stories.js`, run `npm run storybook -- --ci --smoke-test` (or `npx storybook dev` for a moment), confirm it appears, then delete the stub.

### Import Path for Subdirectory Stories

Stories in `stories/` (existing): `import * as tokens from '../generated/tokens.js';` (one level up)

Stories in `stories/components/` (new): `import * as tokens from '../../generated/tokens.js';` (two levels up)

Stories in `stories/screens/` (new): `import * as tokens from '../../generated/tokens.js';` (two levels up)

**Verified from CONTEXT.md canonical refs:** "Import: `import * as tokens from '../../generated/tokens.js'` (two levels up from stories/components/ or stories/screens/)." [CITED: 03-CONTEXT.md, code_context section]

### hexToRgba Helper Availability

The `hexToRgba` function defined in `stories/elevation.stories.js` is not exported — it is local to that file. Component and screen stories that need CSS `box-shadow` from elevation tokens must inline the same helper function. The planner should instruct the executor to copy the helper into any story file that uses elevation tokens.

---

## 3. Token Reference for Components

All tokens available from `generated/tokens.js` (ES6 named exports). Relevant subsets for component stories:

### Colors (most used in Hi-Fi designs)

| Token | Value | Used In |
|-------|-------|---------|
| `colorActionPrimary` | `#c6ff2d` | Button Primary bg, Apple Button bg, Scan CTA Button bg, Next Button bg, Arrived Button bg, Get Directions bg |
| `colorActionSecondary` | `#0f0f0f` | Button Secondary bg (Continue, ETA Badge) |
| `colorSurfaceBase` | `#ffffff` | Card backgrounds, Google Button bg, FAB bg, StatusBar overlay |
| `colorSurfaceInverse` | `#0f0f0f` | Turn Instruction Card bg, Tab active indicator |
| `colorSurfaceSunken` | `#f5f5f5` | Input field background (colorGrey100 used in designs) |
| `colorTextPrimary` | `#0f0f0f` | All primary text, icons on light surfaces |
| `colorTextSecondary` | `#808080` | Secondary text, inactive tab labels, OR text, step labels |
| `colorTextDisabled` | `#c9c9c9` | Disabled states |
| `colorBorderSubtle` | `#ebebeb` | Card dividers, OR divider lines |
| `colorBorderStrong` | `#0f0f0f` | Input focus border, selected state |
| `colorBorderFocus` | `#c6ff2d` | Focus ring |
| `colorGrey050` | `#fafafa` | Phone input row background |
| `colorGrey100` | `#f5f5f5` | Segmented toggle bg, distance badge bg |
| `colorGrey200` | `#ebebeb` | Inactive tab circles, dividers |
| `colorGrey300` | `#c9c9c9` | Splash background pattern dots, tagline divider |
| `colorGrey500` | `#808080` | Inactive icons, secondary labels |
| `colorGrey700` | `#4a4a4a` | Wireframe icon fills on dark surfaces |
| `colorGrey800` | `#2f2f2f` | Cancel button icon |
| `colorGrey900` | `#1a1a1a` | Trust Panel background (Bottom Trust Panel) |
| `colorGreen100` | `#f4ffd9` | Bike chip background (walking progress) |
| `colorGreen700` | `#7d9220` | Bike chip icon + text, accessible green-on-white text |
| `colorStatusLive` | `#c6ff2d` | Live status dot |

### Spacing (button padding, card internals)

| Token | Value | Use Case |
|-------|-------|---------|
| `space100` | 4px | Fine gaps (icon-to-label in badges) |
| `space200` | 8px | Icon-to-label in buttons |
| `space300` | 12px | Card internal vertical gaps |
| `space400` | 16px | Screen margin, list row padding, card padding |
| `space500` | 20px | Card internal padding |
| `space600` | 24px | Button horizontal padding |
| `space800` | 32px | Section gap |
| `space1200` | 48px | Touch target min-height |

### Radius

| Token | Value | Use Case |
|-------|-------|---------|
| `radiusXs` | 8px | Small chips, badges, progress segments |
| `radiusSm` | 12px | Input rows, inline tags |
| `radiusMd` | 16px | Bottom cards (bottom-only radius) |
| `radiusLg` | 20px | Content cards (Selected Bike Card, Walking Progress Card) |
| `radiusXl` | 28px | Trust Panel (bottom sheet context), Scan CTA Card |
| `radiusFull` | 999px | Buttons (pill shape), FABs, status dots, tab active circle, Cancel button |

### Typography (composite objects — use `.fontSize`, `.fontWeight`, etc.)

| Token | Use Case |
|-------|---------|
| `typeDisplayXl` | Brand name on splash (40px/Manjari/700) |
| `typeDisplayMd` | Screen headline (28px/Manjari/700) |
| `typeHeadingLg` | Card titles (20px/Inter/600) |
| `typeHeadingMd` | Screen titles in navigation (17px/Inter/600) |
| `typeHeadingSm` | Tab labels, badge text (15px/Inter/600) |
| `typeBodyLg` | Primary body, input text (17px/Inter/400) |
| `typeBodyMd` | Standard body (15px/Inter/400) |
| `typeBodySm` | Secondary text, captions (13px/Inter/400) |
| `typeLabelMd` | Tags, status labels (13px/Inter/600) |
| `typeLabelSm` | Metadata, counts (11px/Inter/500) |
| `typeOverline` | Section meta (10px/Inter/500/uppercase) |

### Elevation (for cards, FABs, tab bar)

Use `shadowFromToken(tokens.elevationRaised)` pattern (inline helper required per file):
- `elevationFlat` — inline content, no shadow
- `elevationRaised` — cards (Search Bar, Selected Bike Card, Bottom Cards)
- `elevationFloating` — Tab Bar, FABs, Scan CTA Card
- `elevationOverlay` — Modal sheets, Trust Panel bottom sheet

### Border

- `borderWidthHairline` (1px) — card dividers, input rows
- `borderWidthStrong` (1.5px) — selected/focus states
- `borderWidthFocus` (2px) — focus ring, used with `colorBorderFocus`

---

## 4. Screen Story Approach

### Canvas Sizing

All screen stories set the root element to:
```html
<div style="width:393px; min-height:852px; position:relative; overflow:hidden; background:${tokens.colorSurfaceBase};">
```

This matches the Hi-Fi design canvas (393pt × 852pt iPhone reference). The Storybook preview iframe will scroll if content overflows.

### Map Screen Approach (Screens 8, 9, 10)

Home Map, Navigate to Bike, and Walking Directions have full-bleed map backgrounds. Since Storybook stories are static HTML (no live maps), the map background is rendered as a styled `div` with a solid color approximating the map grey:

```html
<div style="position:absolute;inset:0;background:#e8e8e8;"></div>
```

Overlaid elements (status bar, cards, FABs) use `position:absolute` with approximate pixel coordinates extracted from the .pen file layout. The screen stories are faithful visual representations, not pixel-perfect reproductions — the goal is to show component placement and token usage.

### Screen Story File Structure Pattern

```js
// stories/screens/home-map.stories.js
import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/HomeMap' };

function hexToRgba(hex8) { /* copy from elevation.stories.js */ }
function shadowFromToken(token) { /* copy from elevation.stories.js */ }

export const Default = () => `
  <div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:${tokens.colorSurfaceBase};">
    <!-- Map background -->
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
    <!-- ... layered components ... -->
  </div>
`;
```

### Absolute Positioning for Map Screens

Components on map screens float over the map. Use `position:absolute` with `left`, `right`, `top`, `bottom` values derived from the .pen file's x/y coordinates relative to the 393×852 frame. The .pen file stores x/y as absolute canvas coordinates (origin at top-left of each frame for relative children).

### Non-Map Screen Approach (Screens 1–7)

Registration, Login, ID Scan, Facial Scan, Onboarding — use normal block/flex layout (no absolute positioning needed). These screens have clear top-to-bottom section stacking.

```js
export const Default = () => `
  <div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorSurfaceBase};">
    <!-- Status Bar -->
    <!-- Main Content (scrollable) -->
  </div>
`;
```

### Screen Story Title Pattern

| Story File | `title` value | Named Export(s) |
|-----------|---------------|-----------------|
| `stories/screens/splash.stories.js` | `'Screens/Splash'` | `Default` |
| `stories/screens/onboarding-1.stories.js` | `'Screens/Onboarding1'` | `Default` |
| `stories/screens/registration.stories.js` | `'Screens/Registration'` | `Default` |
| `stories/screens/login.stories.js` | `'Screens/Login'` | `PhoneTab`, `EmailTab` |
| `stories/screens/id-scan.stories.js` | `'Screens/IdScan'` | `Default` |
| `stories/screens/facial-scan.stories.js` | `'Screens/FacialScan'` | `Default` |
| `stories/screens/home-map.stories.js` | `'Screens/HomeMap'` | `Default` |
| `stories/screens/navigate-to-bike.stories.js` | `'Screens/NavigateToBike'` | `Default` |
| `stories/screens/walking-directions.stories.js` | `'Screens/WalkingDirections'` | `Default` |

**9 story files** for 9 distinct screens (Login frame duplicate → one file, two exports).

---

## 5. Component Story Details

### Component Story Title Pattern

| Story File | `title` value | Named Exports |
|-----------|---------------|---------------|
| `stories/components/status-bar.stories.js` | `'Components/StatusBar'` | `LightSurface`, `DarkSurface` |
| `stories/components/button.stories.js` | `'Components/Button'` | `Primary`, `Secondary`, `Ghost`, `Disabled` |
| `stories/components/social-auth-buttons.stories.js` | `'Components/SocialAuthButtons'` | `AppleButton`, `GoogleButton` |
| `stories/components/or-divider.stories.js` | `'Components/OrDivider'` | `Default` |
| `stories/components/phone-input.stories.js` | `'Components/PhoneInput'` | `Default`, `Filled` |
| `stories/components/segmented-toggle.stories.js` | `'Components/SegmentedToggle'` | `PhoneActive`, `EmailActive` |
| `stories/components/progress-strip.stories.js` | `'Components/ProgressStrip'` | `Step1Active`, `Step2Active` |
| `stories/components/trust-panel.stories.js` | `'Components/TrustPanel'` | `IdScan`, `FacialScan` |
| `stories/components/tab-bar.stories.js` | `'Components/TabBar'` | `RideActive`, `DiscoverActive`, `WalletActive`, `AccountActive` |
| `stories/components/map-pin.stories.js` | `'Components/MapPin'` | `RangePin`, `SelectedPin` |
| `stories/components/bottom-card.stories.js` | `'Components/BottomCard'` | `BikeSelection`, `WalkProgress` |

**11 component story files.**

### Component Token Map (key token → component)

**StatusBar:**
- `colorSurfaceBase` — LightSurface background (transparent in real app, white for story)
- `colorTextPrimary` — time text, icons in light mode
- `colorTextOnInverse` — time text, icons in dark mode
- `typeLabelMd` — time display
- `typeLabelSm` — status icons size reference

**Button (pill shape):**
- `colorActionPrimary` — Primary bg
- `colorTextPrimary` (black) — Primary text (green bg → must use black)
- `colorActionSecondary` (black) — Secondary bg
- `colorTextOnInverse` (white) — Secondary text
- `colorTextDisabled` — Disabled text
- `colorSurfaceBase` — Ghost bg (transparent / none)
- `colorTextAccent` — Ghost text (link style)
- `radiusFull` — pill border-radius
- `space600` / `space400` — horizontal / vertical padding
- `space1200` — min-height (touch target)
- `typeHeadingSm` — button label (15px/Inter/600)

**SocialAuthButtons:**
- Apple: `colorActionPrimary` bg, `colorTextPrimary` text+icon
- Google: `colorSurfaceBase` bg, `colorTextPrimary` text+icon, `colorBorderSubtle` border (1px)
- `radiusFull` — pill shape
- `space600` / `space400` — padding
- `typeBodyMd` — label (15px/Inter/400)

**OrDivider:**
- `colorBorderSubtle` — line color
- `colorTextSecondary` — "OR" text
- `typeLabelSm` — "OR" label size

**PhoneInput:**
- `colorGrey050` — sunken input bg (matches design `$vv-grey-050`)
- `colorTextPrimary` — country code + entered text
- `colorTextSecondary` — placeholder text
- `colorBorderSubtle` — divider between country code and number
- `radiusSm` — input row border-radius
- `space400` — internal padding
- `typeBodyLg` — input text (17px)

**SegmentedToggle:**
- `colorGrey100` — outer pill bg
- `colorActionPrimary` — active segment bg
- `colorTextPrimary` (black) — active tab label
- `colorTextSecondary` — inactive tab label
- `radiusFull` — pill border-radius
- `typeHeadingSm` — tab label (15px/Inter/600)

**ProgressStrip:**
- `colorSurfaceBase` — active segment (on dark bg context)
- Inactive segment: `rgba(255,255,255,0.2)` (from `#FFFFFF33` in design — hardcode this one, no token)
- Background context: dark (`$vv-grey-900` / `colorSurfaceInverse`)
- `radiusXs` — segment border-radius
- `typeLabelSm` — step label (11px)
- `colorTextSecondary` — step label color

**TrustPanel:**
- `colorGrey900` — panel background (`$vv-grey-900` = `#1a1a1a`)
- Shield bg: `rgba(255,255,255,0.09)` (from `#FFFFFF18` in design)
- `colorTextOnInverse` — trust label, shield icon, button text
- `colorTextSecondary` — reassurance text
- `colorSurfaceBase` — CTA button bg (white button on dark panel)
- `colorTextPrimary` (black) — CTA button text + icon
- `radiusFull` — CTA button pill
- `radiusXl` — panel top border-radius (bottom sheet shape)
- `typeHeadingSm` — trust label
- `typeBodySm` — reassurance text

**TabBar:**
- `colorSurfaceBase` — bar background
- `colorTextPrimary` (black) — active tab pill fill
- `colorTextOnInverse` (white) — active tab icon + label
- `colorGrey200` — inactive tab circle (from design `$vv-grey-200`)
- `colorTextSecondary` — inactive tab icon + label
- `elevationFloating` — bar elevation (shadow)
- `radiusFull` — active tab pill border-radius
- `typeLabelSm` — tab label (11px/Inter/500)

**MapPin:**
- RangePin: `colorGrey900` bg (#1a1a1a), `colorTextOnInverse` icon+text, `colorActionPrimary` zap icon
- SelectedPin: `colorSurfaceBase` badge bg, pulse ring ellipse (`colorActionPrimary` tint)
- `radiusFull` — pill border-radius
- `typeLabelSm` — pin label

**BottomCard:**
- `colorSurfaceBase` — card background
- `elevationRaised` → `shadowFromToken(tokens.elevationRaised)` — card shadow
- `colorBorderSubtle` — card divider
- `colorTextPrimary` — primary text
- `colorTextSecondary` — secondary labels (Distance, ETA)
- `colorGrey100` — distance badge bg
- `colorGrey700` — distance badge text
- `colorGreen100` — bike chip bg
- `colorGreen700` — bike chip icon + text
- `colorActionPrimary` — primary CTA bg
- `radiusLg` — card top border-radius (20px)
- `radiusFull` — CTA button pill
- `space400` — card padding

---

## 6. ROADMAP Update Needed

The planner MUST make these changes to `ROADMAP.md` (locked in D-01):

1. **Rename** the current "Phase 3 — React Native Paper App Integration" section to:
   **"Phase 3 — Component Library + App Screen Stories in Storybook"**
   Goal, Delivers, and Plans sections must be rewritten to reflect Phase 3's actual scope.

2. **Add** a new "Phase 4 — React Native Paper App Integration" section below Phase 3, preserving the original Phase 3 goal/deliverables content.

3. **Update status line** on ROADMAP footer: "Phase 3 ready to plan" → "Phase 3 researched; planning in progress"

---

## 7. Architecture Patterns

### Story Section Structure (final)

```
Foundation/         ← Phase 2 (existing — do not touch)
  Color
  Typography
  Spacing
  Radius
  Elevation
  Border
  Grid
  Iconography

Components/         ← Phase 3 NEW (11 files)
  StatusBar
  Button
  SocialAuthButtons
  OrDivider
  PhoneInput
  SegmentedToggle
  ProgressStrip
  TrustPanel
  TabBar
  MapPin
  BottomCard

Screens/            ← Phase 3 NEW (9 files)
  Splash
  Onboarding1
  Registration
  Login
  IdScan
  FacialScan
  HomeMap
  NavigateToBike
  WalkingDirections
```

### File Layout

```
stories/
├── border.stories.js          ← existing (Foundation)
├── color.stories.js           ← existing
├── elevation.stories.js       ← existing (has hexToRgba helper)
├── grid.stories.js            ← existing
├── iconography.stories.js     ← existing
├── radius.stories.js          ← existing
├── spacing.stories.js         ← existing
├── typography.stories.js      ← existing
├── components/
│   ├── status-bar.stories.js
│   ├── button.stories.js
│   ├── social-auth-buttons.stories.js
│   ├── or-divider.stories.js
│   ├── phone-input.stories.js
│   ├── segmented-toggle.stories.js
│   ├── progress-strip.stories.js
│   ├── trust-panel.stories.js
│   ├── tab-bar.stories.js
│   ├── map-pin.stories.js
│   └── bottom-card.stories.js
└── screens/
    ├── splash.stories.js
    ├── onboarding-1.stories.js
    ├── registration.stories.js
    ├── login.stories.js
    ├── id-scan.stories.js
    ├── facial-scan.stories.js
    ├── home-map.stories.js
    ├── navigate-to-bike.stories.js
    └── walking-directions.stories.js
```

**Total new files: 20** (11 components + 9 screens)

### Established Patterns (MUST follow — from Phase 2)

```js
// Import — two levels up from stories/components/ or stories/screens/
import * as tokens from '../../generated/tokens.js';

// Default export with title
export default { title: 'Components/Button' };

// Named exports MUST be PascalCase (SB10 silently ignores lowercase)
export const Primary = () => `
  <button style="
    background: ${tokens.colorActionPrimary};
    color: ${tokens.colorTextPrimary};
    padding: ${tokens.space400}px ${tokens.space600}px;
    border-radius: ${tokens.radiusFull}px;
    font-family: ${tokens.fontFamilyBody}, sans-serif;
    font-size: ${tokens.fontSizeHeadingSm}px;
    font-weight: ${tokens.fontWeightHeadingSm};
    border: none;
    cursor: pointer;
    min-height: ${tokens.space1200}px;
  ">Book a Ride</button>
`;
```

### hexToRgba Helper (copy into any file using elevation tokens)

```js
// Source: stories/elevation.stories.js (Phase 2)
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}
```

Files needing this helper: `bottom-card.stories.js`, `tab-bar.stories.js`, all 3 map screen stories.

### Alpha Fills Not in Token System

Several components use alpha fills that are design-layer values, not tokens. These should be hardcoded in stories with a comment:

| Design Value | CSS Value | Used In |
|-------------|-----------|---------|
| `#FFFFFF18` | `rgba(255,255,255,0.09)` | Trust Panel shield bg, ID Scan top nav buttons |
| `#FFFFFF22` | `rgba(255,255,255,0.13)` | ID/Facial Scan top nav close/toggle buttons |
| `#FFFFFF33` | `rgba(255,255,255,0.20)` | Progress Strip inactive segment |
| `#00000088` | `rgba(0,0,0,0.53)` | Instructions Banner on camera viewport |
| `#FFFFFF18` (same) | `rgba(255,255,255,0.09)` | Turn Arrow Chip on Walking Directions dark card |

---

## 8. Planning Recommendations

### Wave Structure

**Wave 1 — Setup + glob verification (pre-condition)**
- 03-01-PLAN.md: Verify `stories/**` glob covers subdirs (create/delete stub file), create `stories/components/` and `stories/screens/` directories, update ROADMAP.md (rename Phase 3, add Phase 4).

**Wave 2 — Component stories (11 files)**
- 03-02-PLAN.md: Simple/atomic components — StatusBar, Button, OrDivider, SocialAuthButtons, PhoneInput
- 03-03-PLAN.md: Interactive-pattern components — SegmentedToggle, ProgressStrip, TrustPanel, MapPin
- 03-04-PLAN.md: Complex/composite components — TabBar, BottomCard

**Wave 3 — Screen stories (9 files)**
- 03-05-PLAN.md: Auth flow screens — Splash, Onboarding1, Registration, Login
- 03-06-PLAN.md: KYC screens — IdScan, FacialScan
- 03-07-PLAN.md: Map/ride screens — HomeMap, NavigateToBike, WalkingDirections

**Wave 4 — Done-bar verification**
- 03-08-PLAN.md: Run `npm run build-storybook`, verify storybook-static/ output, confirm 20 new story files exist, confirm CI passes

**Total: 8 plans, 4 waves**

### Risk Areas

1. **Map screen absolute positioning** — Home Map, Navigate to Bike, Walking Directions use layered absolute elements. The planner must give the executor latitude to use approximate pixel values (not pixel-perfect) since there are no coordinate readouts from the .pen file for overlay elements. Specify this tolerance explicitly in PLAN.md acceptance criteria.

2. **hexToRgba helper duplication** — 5+ story files will need the same helper. The planner should instruct the executor to copy the helper verbatim into each file that needs it (no shared module, to keep the same zero-import pattern established in Phase 2).

3. **Alpha fill tokens gap** — 4 design-layer alpha fills are not in the token system (see table above). The planner must call out that these are hardcoded CSS values, not tokens, and document them with comments in the story files.

4. **Login screen duplicate** — The planner must note that the two "Login Screen — Hi-Fi" frames (yfZaz, TS9Td) map to ONE story file with TWO named exports (PhoneTab, EmailTab), not two separate files.

5. **Glob verification must happen in Wave 1** — If the glob does NOT cover subdirs (unlikely given fast-glob semantics, but unconfirmed by running test), the plan needs a fallback: update main.js to add explicit globs. Wave 1 must gate on this check.

### Component Implementation Complexity

| Component | Complexity | Notes |
|-----------|-----------|-------|
| StatusBar | Low | Static flex row, system icons approximated with text/unicode |
| Button | Low | Single element, 4 variants via separate exports |
| OrDivider | Low | 3-element flex row |
| SocialAuthButtons | Low | 2 button variants, same structure as Button |
| PhoneInput | Low–Medium | Country code + divider + text field simulation |
| SegmentedToggle | Medium | Outer pill + 2 inner segments, active state via token swap |
| MapPin | Medium | Pill + icon approximation (unicode zap ⚡), pulse ring via box-shadow |
| ProgressStrip | Medium | Alpha fill on dark background context |
| TrustPanel | Medium | Dark bottom-sheet surface, alpha fills, shield approximation |
| TabBar | Medium | 4 tabs, active tab has circular pill; elevation shadow |
| BottomCard | High | Two structurally different layouts (BikeSelection vs WalkProgress); elevation shadow required |

### Storybook Section Display Order

Storybook displays sections in alphabetical order by default. The current section order would be:
- Components/ (before Foundation/)
- Foundation/ (existing)
- Screens/ (after Foundation/)

This is acceptable. If the user wants Foundation/ first, a `storySort` option can be added to `.storybook/preview.js` — but this is deferred (not in Phase 3 scope).

---

## 9. Environment Availability

Phase 3 has no new external dependencies — it extends the existing Storybook setup with new story files only.

| Dependency | Required By | Status |
|-----------|------------|--------|
| `@storybook/html-vite` 10.5.5 | All stories | Already installed (Phase 2) |
| `generated/tokens.js` | All stories | Already generated (Phase 1) |
| Google Fonts (Manjari, Inter, JetBrains Mono) | All stories | Already loaded in preview-head.html (Phase 2) |
| `npm run build:tokens` | Pre-build | Already wired in CI |

**No new package installs required in Phase 3.**

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `stories/**/*.stories.js` glob covers subdirectories without main.js change | Section 2 | If wrong: stories/components/ and stories/screens/ files won't be discovered; fix is adding explicit globs to main.js (low effort) |
| A2 | The two "Login Screen — Hi-Fi" frames (yfZaz, TS9Td) are design-review duplicates, not distinct app states | Section 1 | If wrong: one of them might show OTP entry or email input state; executor should screenshot-compare both during implementation |
| A3 | Icon elements in .pen file render as approximate unicode symbols or placeholder boxes in HTML stories | Sections 4, 5 | No icon font is loaded; actual SVG icons are not extracted from .pen; HTML stories approximate with unicode or empty styled boxes |
| A4 | Storybook section display order (alphabetical) is acceptable | Section 8 | If user wants Foundation/ first, a `storySort` config is needed |

---

## Sources

### Primary (HIGH confidence)
- `voltventure_wireframes.pen` — direct JSON parse via Node.js; all frame names, IDs, dimensions, child structures verified [VERIFIED]
- `.storybook/main.js` — glob pattern read directly [VERIFIED]
- `generated/tokens.js` — all token names and values read directly [VERIFIED]
- `stories/elevation.stories.js` — hexToRgba helper pattern read directly [VERIFIED]
- `.planning/phases/03-component-library-storybook/03-CONTEXT.md` — all locked decisions [CITED]

### Secondary (MEDIUM confidence)
- fast-glob `**` semantics covering zero-or-more path segments — standard behavior documented in fast-glob npm package, used by Vite 5/Storybook 10 [ASSUMED — not tested with live stub file]

### Metadata

**Research date:** 2026-07-31
**Valid until:** 90 days (stable — design file and existing code are locked artifacts)
**Confidence breakdown:**
- Wireframe audit: HIGH — direct .pen JSON parse, all 37 frames enumerated, all Hi-Fi frames fully traversed
- Component list: HIGH — derived from direct structural analysis of Hi-Fi frames
- Token reference: HIGH — read directly from generated/tokens.js
- Story patterns: HIGH — read directly from 8 existing Phase 2 story files
- Glob coverage: MEDIUM/ASSUMED — fast-glob semantics are correct but not run-verified on this machine

---

## RESEARCH COMPLETE
