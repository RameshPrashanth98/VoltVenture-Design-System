# Phase 7: Hi-Fi Screens & Components Expansion — Context

**Gathered:** 2026-08-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Expand the Storybook design system with:
1. **34 Hi-Fi screens** — update all 9 existing screen stories to their Hi-Fi wireframe designs, and add 25 brand-new screen stories sourced from `voltventure_wireframes.pen`
2. **12 new component stories** — extract recurring UI patterns identified across the new screens
3. **Interactive exports for all screens** — every screen story gets an `Interactive` named export rendered in a 402×874 iPhone 16 Pro phone frame with in-screen JS interactions
4. **React Native Paper SourceCode exports** — every screen story gets a `SourceCode` named export showing React Native Paper JSX as a static code string

This phase does NOT touch the token pipeline, lib/ outputs, CI configuration, or anything outside `stories/`.

</domain>

<decisions>
## Implementation Decisions

### Screen Scope
- **D-01:** All 34 unique Hi-Fi screens from `voltventure_wireframes.pen` are in scope. Authoritative frame names and IDs are listed in `<specifics>` below.
- **D-02:** Update all 9 existing screen stories (splash, onboarding-1, registration, login, id-scan, facial-scan, home-map, navigate-to-bike, walking-directions) to reflect the Hi-Fi designs — rebuild their HTML from the pen file Hi-Fi frames.
- **D-03:** Duplicate Login screen: use frame **TS9Td** ("Login Screen — Hi-Fi", the second frame) as the authoritative source. Discard yfZaz.

### Existing Screen Updates
- **D-04:** Existing 9 stories are updated in-place (same file paths). Existing named exports (static state variants, SourceCode) are replaced with Hi-Fi equivalents. The `Interactive` export is also updated.

### Interactive Exports for Screens
- **D-05:** Every screen story file exports an `Interactive` named export (PascalCase). It returns a DOM element (`document.createElement`) — never an HTML string.
- **D-06:** Phone frame: `makePhoneFrame()` helper copied inline per file (402×874px, Volt Black `#0F0F0F`, 44px corner radius, "9:41" status bar). Same pattern as Phase 6.
- **D-07:** In-screen interactions per screen type:
  - **Form screens** (Registration, Login, Edit Profile, Add Payment): inputs are focusable, typing works via hidden `<input>` capturing
  - **Toggle/tab screens** (Settings, Preferences, Segmented controls): toggles fire state changes, active tab highlights
  - **Map screens** (Home Map, Navigate to Bike, Walking Directions, Active Ride, End Ride, Riding to Charging, Discover VIP Hubs): static map background with animated overlays (pulse rings, etc.)
  - **List screens** (Payment Methods, Profile, Support, Settings, Ride History, VoltCoins, Curated Routes): tappable rows show press feedback
  - **Static/read-only screens** (Splash, Onboarding 1–3, ID Scan, Facial Scan, QR Unlock, Safety Mount, Security Deposit, Ride Complete, Cafe Detail, Terms, Privacy): minimal interaction — primary CTA button shows press state
- **D-08:** State held as plain JS variables; DOM mutations via `.style.*` only (never rebuild innerHTML on state change). Same constraint as Phase 6.

### Source Code Format
- **D-09:** `SourceCode` named export shows **React Native Paper JSX** as a static string — not runnable, displayed as a `<pre><code>` block in Storybook. This replaces the HTML/CSS SourceCode pattern from Phase 3 for all screens (new and updated).
- **D-10:** RN Paper JSX uses VoltVenture token constants from `lib/voltventure_tokens.ts` and `createVoltVentureTheme()` from `lib/voltventure_theme.ts` as reference — not imported in stories (stories only import `generated/tokens.js`).

### New Components (12)
- **D-11:** Add 12 new component story files to `stories/components/`. Each follows Phase 3/6 conventions (PascalCase exports, imports from `../../generated/tokens.js`).

| # | Story file | Component | Primary screen(s) |
|---|-----------|-----------|-------------------|
| 1 | `settings-row.stories.js` | Settings Row | Settings, Profile, Login & Security, Preferences |
| 2 | `dashboard-panel.stories.js` | Dashboard Panel | Active Ride Dashboard |
| 3 | `payment-card-row.stories.js` | Payment Card Row | Add/Select/Manage Payment |
| 4 | `qr-viewfinder.stories.js` | QR Viewfinder | QR Unlock Scan |
| 5 | `nav-turn-card.stories.js` | Nav Turn Card | Active Ride, Riding to Charging |
| 6 | `riding-progress-card.stories.js` | Riding Progress Card | Riding to Charging |
| 7 | `hub-card.stories.js` | Hub Card | Discover VIP Hubs (bottom sheet) |
| 8 | `route-card.stories.js` | Route Card | Curated Routes |
| 9 | `voltcoins-balance.stories.js` | VoltCoins Balance | VoltCoins Rewards |
| 10 | `ride-summary-card.stories.js` | Ride Summary Card | Add/Select Payment flows |
| 11 | `station-info-card.stories.js` | Station Info Card | End Ride - Find Charging |
| 12 | `faq-row.stories.js` | FAQ Row | Support |

- **D-12:** New component stories follow Phase 6 patterns: each has `Default`, `Interactive` (phone-framed), and `SourceCode` (RN Paper JSX) exports.

### lib/ Mutation Warning (carried forward)
- **D-13:** Run `git restore lib/voltventure_theme.ts lib/voltventure_tokens.ts` after any `npm run build:tokens` call before staging. Verified pattern from Phase 5.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design Source
- `voltventure_wireframes.pen` — authoritative Hi-Fi design source for all screens and components. Access only via Pencil MCP tools (never Read/Grep on .pen files).

### Existing Story Patterns
- `stories/components/button.stories.js` — reference for Phase 6 Interactive export pattern (makePhoneFrame, DOM element returns, event listeners)
- `stories/components/tab-bar.stories.js` — reference for Phase 6 TabBar Interactive (bottom-pinned, active tab state)
- `stories/components/bottom-card.stories.js` — reference for Phase 6 BottomCard Interactive (expand/collapse, margin-top:auto positioning)
- `stories/screens/home-map.stories.js` — reference for map screen pattern (hexToRgba, static bg, absolute overlays)
- `stories/screens/registration.stories.js` — reference for form screen pattern (phone input, divider, social auth composition)

### Planning Context
- `.planning/phases/06-interactive-components/06-CONTEXT.md` — Phase 6 decisions (makePhoneFrame spec, DOM-element rule, state mutation rule)
- `.planning/phases/03-component-library-storybook/03-CONTEXT.md` — Phase 3 story conventions (PascalCase exports, token import path, hexToRgba inline)

### Generated Tokens
- `generated/tokens.js` — token data source for all stories (import path: `../../generated/tokens.js` from stories/screens/ or stories/components/)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `makePhoneFrame()` helper — copy inline per story file (402×874px, Volt Black #0F0F0F, 44px radius, "9:41" status bar); NOT imported from a shared module
- `hexToRgba(hex, alpha)` helper — copy inline per story file where alpha fills are needed (map screens)
- `shadowFromToken(token)` helper — copy inline if elevation shadows needed
- Existing component exports (Button, TabBar, BottomCard, etc.) — can be composed inside screen Interactive exports via DOM creation

### Established Patterns
- All named exports must be **PascalCase** — Storybook 10 silently ignores lowercase exports
- Story files use `export default { title: 'Screens/[Name]' }` or `export default { title: 'Components/[Name]' }`
- Token imports use explicit `.js` extension: `import tokens from '../../generated/tokens.js'`
- `Interactive` export returns a DOM element via `document.createElement` (never an HTML string)
- State held in plain JS variables; DOM mutations via `.style.*` only
- Screen canvas reference: `width:393px; min-height:852px`
- Phone frame: 402×874px outer, Volt Black #0F0F0F bezel, 44px corner radius, clipped inner viewport

### Integration Points
- `stories/screens/` — 9 existing files to update + 25 new files to create
- `stories/components/` — 11 existing files unchanged + 12 new files to create
- `.storybook/main.js` glob `'../stories/**/*.stories.js'` already covers all new files — no config changes needed
- `npm run build-storybook` is the done-bar verification command

</code_context>

<specifics>
## Specific Ideas

### Authoritative Hi-Fi Screen Inventory (34 screens)

**Updated existing stories (9):**
| Story file | Pen frame ID | Pen frame name |
|-----------|-------------|----------------|
| splash.stories.js | O94n2 | Splash Screen — Hi-Fi |
| onboarding-1.stories.js | WSGRc | Onboarding 1 Screen — Hi-Fi |
| registration.stories.js | Y9ojN | Registration Screen — Hi-Fi |
| login.stories.js | TS9Td | Login Screen — Hi-Fi (use 2nd frame; discard yfZaz) |
| id-scan.stories.js | f6zx5 | ID Scan Screen — Hi-Fi |
| facial-scan.stories.js | llnIt | Facial Scan Screen — Hi-Fi |
| home-map.stories.js | E9hST | Home Map Screen — Hi-Fi |
| navigate-to-bike.stories.js | kUCG9 | Navigate to Bike Screen — Hi-Fi |
| walking-directions.stories.js | FZnNd | Walking Directions Screen — Hi-Fi |

**New screen stories (25):**
| New story file | Pen frame ID | Pen frame name |
|---------------|-------------|----------------|
| onboarding-2.stories.js | nvm2v | Onboarding 2 Screen — Hi-Fi |
| onboarding-3.stories.js | BbpOx | Onboarding 3 Screen — Hi-Fi |
| qr-unlock-scan.stories.js | pE4ag | QR Unlock Scan Screen — Hi-Fi |
| add-payment-method.stories.js | WFeNt | Add Payment Method Screen — Hi-Fi |
| select-payment-method.stories.js | w3CgWF | Select Payment Method Screen — Hi-Fi |
| payment-methods.stories.js | d2ytQb | Payment Methods Screen — Hi-Fi |
| security-deposit.stories.js | diQjq | Security Deposit Screen — Hi-Fi |
| safety-mount.stories.js | L3K2a | Safety Mount Screen — Hi-Fi |
| active-ride-dashboard.stories.js | hQMrX | Active Ride Dashboard — Hi-Fi |
| end-ride-find-charging.stories.js | AH8t6 | End Ride - Find Charging Station — Hi-Fi |
| riding-to-charging.stories.js | gqQ8M | Riding to Charging Station Screen — Hi-Fi |
| ride-complete-summary.stories.js | seIX4 | Ride Complete Summary Screen — Hi-Fi |
| discover-vip-hubs.stories.js | PS2Xe | Discover VIP Hubs Screen — Hi-Fi |
| cafe-detail.stories.js | dSxRO | Cafe Detail Card — Hi-Fi |
| curated-routes.stories.js | R1tiK | Curated Routes Screen — Hi-Fi |
| voltcoins-rewards.stories.js | GH4KX | VoltCoins Rewards Screen — Hi-Fi |
| profile.stories.js | N0nOZ | Profile Screen — Hi-Fi |
| edit-profile.stories.js | amAsI | Edit Profile Information Screen — Hi-Fi |
| ride-history-stats.stories.js | PNaMF | Ride History & Stats Screen — Hi-Fi |
| settings.stories.js | oOcGF | Settings Screen — Hi-Fi |
| preferences.stories.js | Kaf7F | Preferences Screen — Hi-Fi |
| login-security.stories.js | aeptx | Login & Security Screen — Hi-Fi |
| support.stories.js | r504Z | Support Screen — Hi-Fi |
| terms-of-service.stories.js | XffXP | Terms of Service Screen — Hi-Fi |
| privacy-policy.stories.js | nlrUb | Privacy Policy Screen — Hi-Fi |

### Storybook Titles
- Screens: `export default { title: 'Screens/[Name]' }`
- Components: `export default { title: 'Components/[Name]' }`

### React Native Paper SourceCode Convention
SourceCode export is a named export returning a `<pre><code>` HTML element with RN Paper JSX as plain text. Token values referenced from `voltventure_tokens.ts` constants (e.g. `tokens.colorActionPrimary`, `tokens.spacingMd`). Do not import lib/ in stories — use the token values directly as string literals in the code snippet.

</specifics>

<deferred>
## Deferred Ideas

- **Dark mode token layer** — semantic dark variants; needs validated dark screen designs first (backlog)
- **Navigation flow between screens** — multi-screen mini-app within a single Storybook story; significant complexity, own phase
- **React Native Paper runnable components** — interactive RN components that actually execute; requires separate RN app (backlog)
- **VoltCoins Balance Interactive** — VoltCoins counter animation and earn/spend interactions could be extended; deferred to a dedicated rewards phase

None — discussion stayed within phase scope for remaining items.

</deferred>

---

*Phase: 7-Hi-Fi Screens & Components Expansion*
*Context gathered: 2026-08-05*
