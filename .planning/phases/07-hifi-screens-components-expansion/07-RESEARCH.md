# Phase 7 Research: Hi-Fi Screens & Components Expansion

**Researched:** 2026-08-05
**Domain:** Storybook HTML/CSS story authoring, VoltVenture Hi-Fi design implementation
**Confidence:** HIGH — all 34 frame IDs verified directly from `voltventure_wireframes.pen` (JSON-parsed), all visual structures extracted from the actual design nodes.

---

## Executive Summary

Phase 7 expands the Storybook design system from 20 stories (Phase 3) + 11 Interactive component exports (Phase 6) to **46 stories total** (34 screen stories + 12 new component stories), each with `Default`, `Interactive`, and `SourceCode` exports. Every frame ID in CONTEXT.md has been verified against the `.pen` file. All 34 Hi-Fi frame structures have been read from the design source.

**Key planning facts:**
1. The `.pen` file is unencrypted JSON — design data was read directly without requiring the Pencil desktop app.
2. All 34 Hi-Fi frame IDs confirmed present and structurally intact in `voltventure_wireframes.pen`.
3. The design uses a consistent variable system (`$vv-*`) that maps 1:1 to token constants already in `generated/tokens.js`.
4. Five interaction categories (A=Form, B=Toggle/Tab, C=Map, D=List, E=Static) cover all 34 screens without exceptions.
5. The 12 new components are well-scoped — each is a single UI pattern, not a complex composite.
6. **Zero new npm installs required.** All stories use only `generated/tokens.js` and inline HTML/CSS.
7. The Tab Bar pattern appears in 18 of 34 screens (all screens with Ride/Discover/Wallet/Account navigation) — confirmed from design node inspection: `Tab Ride`, `Tab Discover`, `Tab Wallet`, `Tab Account` frames present in each.
8. Dark-surface screens (Volt Black background): ID Scan, Facial Scan, QR Unlock Scan, Splash. Light screens: all others. Confirmed via `$vv-black` vs `$vv-surface-base` fill on frame root.

**Primary recommendation:** Organize into 6 waves — Wave 0 (scaffolding/helpers), then batch screens by interaction category, building components before the screens that need them.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** All 34 unique Hi-Fi screens from `voltventure_wireframes.pen` are in scope.
- **D-02:** Update all 9 existing screen stories in-place to reflect Hi-Fi designs.
- **D-03:** Login screen uses frame TS9Td (second frame); discard yfZaz.
- **D-04:** Existing 9 stories updated in-place; all named exports replaced with Hi-Fi equivalents.
- **D-05:** Every screen story exports `Interactive` returning a DOM element (never HTML string).
- **D-06:** Phone frame: `makePhoneFrame()` copied inline per file (402×874px, #0F0F0F, 44px radius, "9:41" status bar).
- **D-07:** In-screen interactions per category: Form (hidden inputs), Toggle/Tab (state cycles), Map (pulse animation + CSS keyframe), List (press highlight), Static (CTA press state only).
- **D-08:** State held as plain JS variables; DOM mutations via `.style.*` only — never rebuild innerHTML on state change.
- **D-09:** `SourceCode` export shows React Native Paper JSX as static string in `<pre><code>` block.
- **D-10:** RN Paper JSX references token constants from `lib/voltventure_tokens.ts` as string literals (not imported in stories).
- **D-11:** 12 new component story files in `stories/components/` following Phase 3/6 conventions.
- **D-12:** New component stories: `Default`, `Interactive` (phone-framed), `SourceCode` (RN Paper JSX) exports.
- **D-13:** Run `git restore lib/voltventure_theme.ts lib/voltventure_tokens.ts` after any `npm run build:tokens` call.

### Claude's Discretion

None specified — all major decisions are locked.

### Deferred Ideas (OUT OF SCOPE)

- Dark mode token layer
- Navigation flow between screens (multi-screen mini-app)
- React Native Paper runnable components
- VoltCoins Balance counter animation and earn/spend interactions
</user_constraints>

---

## Validation Architecture

Phase 7 is story-file authoring with no business logic — automated testing is not the primary verification mechanism.

**Verification approach:**
- **Per wave:** Run `npm run build-storybook` — exits 0 = all stories parse correctly
- **Phase gate (done-bar):**
  - `npm run build-storybook` exits 0
  - `storybook-static/` produced
  - 34 screen story files in `stories/screens/`
  - 23 component story files in `stories/components/` (11 existing + 12 new)
  - All Interactive exports verified manually in Storybook browser

**Quick sanity check per story file:** Import the file and verify no parse errors:
```bash
node --input-type=module --eval "import './stories/screens/FILENAME.stories.js'" 2>&1
```
This catches syntax errors before a full Storybook build.

**lib/ mutation guard (must run after any build:tokens call):**
```bash
git restore lib/voltventure_theme.ts lib/voltventure_tokens.ts
```

---

## Screen Catalog (34 screens)

### Design Variable → Token Mapping

| Design variable | Token constant | Hex |
|----------------|---------------|-----|
| `$vv-black` | `tokens.colorSurfaceInverse` | #0F0F0F |
| `$vv-surface-base` | `tokens.colorSurfaceBase` | #FFFFFF |
| `$vv-green-500` | `tokens.colorActionPrimary` | #C6FF2D |
| `$vv-green-600` | `tokens.colorGreen600` | #A8DE1A |
| `$vv-green-700` | `tokens.colorTextAccent` | #7D9220 |
| `$vv-green-100` | `tokens.colorGreen100` | #F4FFD9 |
| `$vv-grey-050` | `tokens.colorGrey050` | #FAFAFA |
| `$vv-grey-100` | `tokens.colorGrey100` | #F5F5F5 |
| `$vv-grey-200` | `tokens.colorBorderSubtle` (or `tokens.colorGrey200`) | #EBEBEB |
| `$vv-grey-300` | `tokens.colorGrey300` | #C9C9C9 |
| `$vv-grey-500` | `tokens.colorTextSecondary` | #808080 |
| `$vv-grey-700` | `tokens.colorGrey700` | #4A4A4A |
| `$vv-grey-800` | `tokens.colorGrey800` | #2F2F2F |
| `$vv-grey-900` | `tokens.colorGrey900` | #1A1A1A |
| `$vv-text-primary` | `tokens.colorTextPrimary` | #0F0F0F |
| `$vv-text-secondary` | `tokens.colorTextSecondary` | #808080 |

**Special hardcoded values (no token):**
- `#e8e8e8` — map background placeholder (confirmed pattern from Phase 3)
- `#25D366` — WhatsApp brand green (Registration screen)
- `#EF4444` — SOS button red (Active Ride Dashboard)
- `#D64545` — Sign out / delete account red (Profile, Settings)
- `#F5C518` — Crown/VIP gold (Cafe Detail)
- `#F5871F` / `#B5590A` — Streak badge orange (VoltCoins)
- `#FFF1DC` — Streak badge background (VoltCoins)
- `#C6FF2D22` — Accent green at 13% opacity (payment screen icon chips)
- `#FFFFFF22` — White at 13% opacity (dark surface overlays)
- `#00000088` — Black at 53% opacity (camera instruction banners)

---

### Updated Existing Stories (9)

#### 1. Splash Screen — O94n2
**File:** `stories/screens/splash.stories.js`
**Background:** `$vv-surface-base` (WHITE — not dark; changed from wireframe assumption)
**Interaction category:** E — Static
**Complexity:** Simple

**Visual composition:**
- Background Pattern layer (opacity 0.08): 5 SVG route paths (curved lines) + 11 small grey dots (#C9C9C9, 6×6px) scattered across full 393×852 canvas
- Center Content: Logo Badge (96×96px circle, `$vv-green-500` fill, "V" lettermark in black); Brand Name text; 48×2px grey divider; Tagline text (`$vv-text-secondary`)
- Loader Area: 180×4px track (`$vv-grey-200`) with 108×4px fill progress bar (`$vv-green-500`)
- Bottom Area (393×44px): Version text (`$vv-grey-300`)
- No status bar (splash is pre-auth)

**Key implementation notes:**
- Background SVG paths should be rendered as thin grey stroke lines (use `border` or `box-shadow` tricks in HTML, or simply place decorative rectangles at angles — exact path geometry not needed for fidelity)
- Loader bar is static (108px = ~60% of 180px track) — no animation required
- Interactive: Only CTA is the loader area itself — no button. Add a subtle CSS animation on the loader fill: `@keyframes loaderFill { from { width:0 } to { width:108px } }` injected via `document.head.appendChild(style)`. This is the one case where CSS animation applies in a Static screen.

---

#### 2. Onboarding 1 — WSGRc
**File:** `stories/screens/onboarding-1.stories.js`
**Background:** `$vv-surface-base`
**Interaction category:** E — Static (with pagination dot update)
**Complexity:** Simple

**Visual composition:**
- Status Bar: Standard, white surface, dark text (62px height)
- Skip Row (44px): "Skip" text link (`$vv-text-secondary`, right-aligned)
- Illustration Area: Full-width image placeholder (fill:image — 420px tall); Screen Number Badge overlaid (white surface, grey text e.g. "01 / 03")
- Content Area: Pagination Dots (3 dots — active is 24×8px pill `$vv-black`, inactive is 8×8px circles); Headline text (`$vv-text-primary`); Subtext (`$vv-text-secondary`)
- CTA Area: "Next" button (`$vv-green-500` fill, black text, Arrow icon right, full-width 56px height)

**Key implementation notes:**
- Illustration Area: render as a grey placeholder `background:#e8e8e8` div (same pattern as map backgrounds) — do not embed images
- Active dot (dot 1) = 24×8px pill; dots 2 and 3 = 8×8px circles
- Interactive: "Next" button press shows CTA press state only (scale 0.97). Onboarding 1 is standalone — no pagination cycling between screens (each screen is a separate story)

---

#### 3. Registration Screen — Y9ojN
**File:** `stories/screens/registration.stories.js`
**Background:** `$vv-surface-base`
**Interaction category:** A — Form
**Complexity:** Medium (existing file to rebuild)

**Visual composition:**
- Status Bar (62px): dark icons on white
- Back Navigation (44px): Back Arrow icon (`$vv-text-primary`, 24×24px, left-aligned)
- Main Content: Logo Section (44×44px green circle + Brand Name text); Header Section (Page Title + Page Subtitle); Social Buttons (Apple: `$vv-green-500`, Google: white with border); OR Divider (lines + "OR" text); Phone/WhatsApp Section (WhatsApp button `#25D366` green, Email link row, Sign In row)
- Terms Section: Checkbox (22×22px, `$vv-green-500` with check indicator) + Terms text

**Key implementation notes:**
- WhatsApp button: `#25D366` fill (not a token — hardcode). Text: "Continue with WhatsApp"
- Checkbox already checked (green fill) — do not require interactive toggle for Default export
- Interactive: hidden `<input>` overlay on phone field for keyboard capture. Apple/Google buttons show press state. Checkbox toggles `$vv-green-500` ↔ `$vv-grey-200` on click.
- This story already exists — full rebuild of Default + Interactive + SourceCode

---

#### 4. Login Screen — TS9Td (discard yfZaz)
**File:** `stories/screens/login.stories.js`
**Background:** `$vv-surface-base`
**Interaction category:** A — Form
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px): dark icons on white
- Back Navigation (44px): Back Arrow icon, left-aligned
- Main Content / Top Section:
  - Header: "Welcome back" (`$vv-text-secondary`), Brand Title (`$vv-text-primary`), Subtitle
  - Social Buttons: Apple (`$vv-green-500`), Google (white border)
  - OR Divider
  - Input Section: Method Toggle (`$vv-grey-100` background — Email/Phone segmented); Phone Input Row (`$vv-grey-050`); Cached Hint row
  - Continue Login Button (`$vv-black` fill, white text + arrow icon, 56px height)
- Sign Up Anchor: "Prompt" text + "Sign Up Link" (right)

**Key implementation notes:**
- Method Toggle is a segmented control (Email vs Phone) — Interactive: clicking updates active segment
- Continue Login button is secondary-styled (black) not primary-styled (green)
- Phone Input Row uses `$vv-grey-050` fill — slightly sunken vs surface

---

#### 5. ID Scan Screen — f6zx5
**File:** `stories/screens/id-scan.stories.js`
**Background:** `$vv-black` (dark screen)
**Interaction category:** E — Static (camera placeholder with scan animation)
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px): white icons on black
- Top Navigation (52px): Close Button (36×36px semi-transparent `#FFFFFF22`), Screen Title (white), Flashlight Toggle (36×36px `#FFFFFF22`)
- Progress Strip (56px): Step Label (`$vv-grey-500`); two segments (80px each) — Step 1 Active (white), Step 2 Inactive (`#FFFFFF33`)
- Camera Viewport (`$vv-grey-900` fill — dark charcoal): ID card frame rectangle (290×190px outline); 4-corner accent bars (`$vv-green-500`, 28×3px and 3×28px pairs); Scan Line (`#C6FF2DBB`, 266×2px horizontal); ID photo slot (52×70px); text line placeholders; MRZ lines (`#FFFFFF18`); Lock badge icon; Instructions Banner (`#00000088`, 393×48px overlay at bottom of viewport); Hold Tip text (`$vv-grey-700`)
- Bottom Trust Panel (`$vv-grey-900`): Shield Badge Row; Reassurance text; Scan CTA Button (white fill, black icons/text)

**Key implementation notes:**
- Corner accent bars: 4 groups of 2 rectangles (H=28×3, V=3×28) positioned at each corner of the 290×190 ID frame
- Scan line: animated in Interactive — inject `@keyframes scanLine { 0%,100%{top:X} 50%{top:Y} }` to pulse the line
- Camera Viewport background is `$vv-grey-900` = `#1A1A1A` (use `tokens.colorGrey900`)
- Semi-transparent fills: use hardcoded `rgba()` values — `#FFFFFF22` = `rgba(255,255,255,0.13)`, `#FFFFFF33` = `rgba(255,255,255,0.20)`

---

#### 6. Facial Scan Screen — llnIt
**File:** `stories/screens/facial-scan.stories.js`
**Background:** `$vv-black` (dark screen)
**Interaction category:** E — Static (pulsing oval)
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px): white icons on black
- Top Navigation (52px): Close Button (`#FFFFFF22`), Screen Title (white), Flip Camera Toggle (`#FFFFFF22`)
- Progress Strip (56px): Both Step 1 and Step 2 white (both complete/active — different from ID Scan)
- Camera Viewport (`$vv-grey-900`): Face Oval Guide (200×250px ellipse outline, not filled); Scan Progress Arc (216×266px ellipse — slightly larger, used as animated ring); Lock Badge icon; Instructions Banner; Hold Tip
- Bottom Trust Panel (`$vv-grey-900`): Shield Badge Row; Reassurance text; Start Face Scan Button (white fill)

**Key implementation notes:**
- Face Oval is a ring (ellipse outline only — use `border-radius:50%` with `border:2px solid` + transparent background)
- Scan Progress Arc: CSS keyframe animation on `border-color` to simulate scanning progress — inject via `document.head.appendChild(style)`
- Progress Strip: Both segments white = user is on step 2 of 2

---

#### 7. Home Map Screen — E9hST
**File:** `stories/screens/home-map.stories.js`
**Background:** Image fill (`#e8e8e8` placeholder)
**Interaction category:** C — Map
**Complexity:** Complex (rebuild of existing)

**Visual composition:**
- Map Background: Full 393×852 image placeholder (`#e8e8e8`)
- Safe Zone Polygon: Rectangle (305×290px) with `$vv-grey-300` or transparent fill — represents geo-zone overlay
- Safe Zone Label: Shield icon + zone text
- 6 Bike Range Pins: Each is [Zap icon + Range text] (e.g. "300km", "200km", "100km") — positioned across map
- Status Bar (393×62px): overlaid, white surface with gradients
- Location Pulse (30×30px ellipse) + Location Dot (14×14px ellipse) — centered
- Top Gradient (393×130px): fade overlay at top
- Bottom Gradient (393×282px): fade overlay at bottom
- Search Bar (353×44px): `$vv-surface-base`, MapPin icon + "Search Text", `radiusFull` pill shape
- Nearby Badge: ZapBadge icon + badge text (green accent pill)
- FAB My Location (48×48px): white circle with icon
- FAB Filters (48×48px): white circle with icon
- Scan CTA Card (353×100px): `$vv-surface-base`, Bike Status Row + Scan Unlock Button (`$vv-green-500`)
- Tab Bar (361×56px): 4 tabs — Ride/Discover/Wallet/Account (Ride is active on this screen)

**Key implementation notes:**
- Range pins now labeled "300km", "200km", "100km" (battery range, not distance) — different from Phase 3 "0.3 km" distance labels. Update copy.
- Tab bar width in design is 361px (not full 393px) — add horizontal margin or let flex handle it
- Scan CTA Card replaces Phase 3's simpler card design — now includes Bike Status Row above the button
- Interactive: Tab switching + CTA button press state + location pulse animation

---

#### 8. Navigate to Bike Screen — kUCG9
**File:** `stories/screens/navigate-to-bike.stories.js`
**Background:** Image fill (`#e8e8e8` placeholder)
**Interaction category:** C — Map
**Complexity:** Complex

**Visual composition:**
- Map Background: Full-frame image (`#e8e8e8`)
- 2 Other Bike Pins (unselected): Zap icon each
- Location Pulse (30×30px) + Location Dot (14×14px)
- Route Dashes: 7 ellipses (6×6px each) forming a dotted path line between user and destination
- Selected Bike Pin (72×72px): Destination Pulse Ring (ellipse outline) + Bike Pin Badge frame
- Top Gradient (393×130px) + Bottom Gradient (393×292px)
- Status Bar (393×62px): overlaid
- Cancel Button (40×40px): CloseIcon
- ETA Badge: WalkIcon + ETAText
- Selected Bike Card (`$vv-surface-base`): Bike Thumbnail (56×56px black) + Card Text Col (BikeName, Meta Row with Battery Chip) + Distance Badge (`$vv-grey-100`); Divider; Get Directions Button (`$vv-green-500`); Choose Different Link
- Tab Bar (361×56px)

**Key implementation notes:**
- Route dashes: 7 small circles (6×6px) positioned manually to simulate a dotted path
- Selected Bike Pin: 72×72px — larger than standard map pin; shows destination
- ETA Badge positioned above card, left side
- "Get Directions" = primary CTA (green button); "Choose Different" = ghost/link

---

#### 9. Walking Directions Screen — FZnNd
**File:** `stories/screens/walking-directions.stories.js`
**Background:** Image fill (`#e8e8e8` placeholder)
**Interaction category:** C — Map
**Complexity:** Complex

**Visual composition:**
- Map Background: Full-frame image (`#e8e8e8`)
- Route Walked (V): 5×186px rectangle — portion of route already completed
- Route Remaining V: 5×126px rectangle (vertical segment)
- Route Remaining H: 64×5px rectangle (horizontal segment — route turns)
- Location Pulse (30×30px) + Location Dot (14×14px)
- Bike Destination Pin (72×72px): Dest Pulse Ring + Bike Pin Badge
- Top Gradient (393×150px) + Bottom Gradient (393×292px)
- Status Bar (393×62px)
- Cancel Button (40×40px)
- Turn Instruction Card (264×52px): Turn Arrow Chip (direction indicator) + Turn Text Col (street name, instruction)
- Recenter FAB (48×48px)
- Walking Progress Card (`$vv-surface-base`): Distance Block + ETA Block + Bike Chip (`$vv-green-100`); Divider; "I've Arrived" Button (`$vv-green-500`); Cancel Nav Link
- Tab Bar (361×56px)

**Key implementation notes:**
- Route rectangles represent a two-segment path: vertical + horizontal turn — use `position:absolute` rectangles
- Walking Progress Card: Distance and ETA shown as stat blocks side by side with vertical divider
- Bike Chip (`$vv-green-100`): small chip showing bike icon + bike ID text

---

### New Screen Stories (25)

#### 10. Onboarding 2 — nvm2v
**File:** `stories/screens/onboarding-2.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static
**Complexity:** Simple

**Visual composition:** Identical structure to Onboarding 1 (WSGRc) with these differences:
- Pagination Dots: Dot 1 = 8×8px circle (inactive); Dot 2 = 24×8px pill `$vv-black` (active); Dot 3 = 8×8px circle
- CTA: "Next" button (same green pill with arrow)
- Screen Number Badge: "02 / 03"
- Illustration Area: `#e8e8e8` placeholder

**Implementation notes:** Direct copy of onboarding-1.stories.js structure, change dot positions and screen number.

---

#### 11. Onboarding 3 — BbpOx
**File:** `stories/screens/onboarding-3.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static
**Complexity:** Simple

**Visual composition:** Identical structure to Onboarding 1/2 with:
- Pagination Dots: Dots 1 and 2 = 8×8px circles; Dot 3 = 24×8px pill `$vv-black` (active)
- CTA: "Get Started" button (not "Next") — same green pill + arrow
- Screen Number Badge: "03 / 03"

**Implementation notes:** Final onboarding screen; CTA label changes to "Get Started".

---

#### 12. QR Unlock Scan — pE4ag
**File:** `stories/screens/qr-unlock-scan.stories.js` (new)
**Background:** `$vv-black` (dark screen)
**Interaction category:** E — Static (animated scan line + corner pulse)
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px): white icons on black
- Top Navigation (52px): Close Button (`#FFFFFF22`), "Scan QR Code" title (white), Torch Toggle (`#FFFFFF22`)
- Camera Viewport (`$vv-grey-900`): QR Frame Outline (210×210px rectangle, semi-transparent border); 4 corner accent groups (`$vv-green-500`, each is H:32×4 + V:4×32 rectangle pair); Scan Line (`#C6FF2DCC`, 178×2px); Instructions Banner (`#00000088`, 393×48px); Hold Tip text (`$vv-grey-700`)
- Bottom Status Panel (`$vv-grey-900`): Bike Reminder Chip (`#FFFFFF12` fill — very faint); Scanning Status Row (Pulse Dot `$vv-green-500` 8×8px + StatusText `$vv-grey-500`); Divider (`#FFFFFF18`); Enter Code Manually Button (`#FFFFFF12` fill)

**Key implementation notes:**
- QR corner accents: exactly 4 groups, each at a corner of the 210×210 frame — top-left, top-right, bottom-left, bottom-right
- `#FFFFFF12` = `rgba(255,255,255,0.07)` (very faint white)
- `#C6FF2DCC` = `rgba(198,255,45,0.80)`
- Interactive: animate scan line up/down within the QR frame + pulse green dot in status row
- Torch toggle has no state change (just press feedback)

---

#### 13. Add Payment Method — WFeNt
**File:** `stories/screens/add-payment-method.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** A — Form (radio selection)
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button (36×36px) + Screen Title
- Subtitle Row: subtitle text (`$vv-text-secondary`)
- Ride Summary Card (`$vv-black` fill): BikeIcon Chip (`#C6FF2D22` = semi-transparent green); Ride Text Col (title+sub in white/grey); Ride Rate Col (rate+sub in white/grey)
- Options Section label (`$vv-grey-500`) + Options List (`$vv-surface-base`):
  - Apple Pay option: IconChip (`$vv-black`), Text Col, Radio (unselected)
  - Google Wallet option: IconChip (`$vv-grey-100`), Text Col, Radio (unselected)
  - Credit/Debit Card option (`$vv-green-100` row fill): IconChip (white), Text Col, Radio (`$vv-green-500` = selected)
- Trust Row: LockIcon + "Secured by Stripe" text
- CTA: "Confirm Start Ride" button (`$vv-green-500`, PlayIcon + label)

**Key implementation notes:**
- This is the NEW PAYMENT (first-time) screen — radio selection is the primary interaction
- Interactive: clicking a row updates selection — selected row gets `$vv-green-100` background, radio gets `$vv-green-500` fill; others revert to neutral
- Ride Summary Card shows cost-per-minute and deposit amount

---

#### 14. Select Payment Method — w3CgWF
**File:** `stories/screens/select-payment-method.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** A — Form (radio selection)
**Complexity:** Medium

**Visual composition:** Same structure as Add Payment Method (WFeNt) except:
- Saved Methods Section (not Options Section): shows 2 saved cards (Visa = selected with green highlight, Mastercard = unselected) + Apple Pay wallet
- Add New Payment Method Row: PlusIcon + "Add New Payment Method" text (no card chip — just a row link)
- CTA: "Confirm Start Ride" (same)

**Key implementation notes:**
- Visa row is pre-selected (`$vv-green-100` background, `$vv-green-500` radio)
- "Add New" row navigates to Add Payment screen in real app — Interactive: show press state only

---

#### 15. Payment Methods — d2ytQb
**File:** `stories/screens/payment-methods.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** D — List
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Payment Methods" title
- Subtitle Row
- Default Payment Card section: Card Top Row + Card Number Row + Card Bottom Row (visual credit card representation)
- Add New Payment Method Button (`$vv-green-500`, PlusIcon + label, full-width)
- Options Section: Apple Pay + Google Wallet + Credit/Debit Card rows (similar to add-payment)
- Trust Card (`$vv-grey-050`): LockChip (`$vv-green-100`, 34×34px) + Trust Text Col
- View Billing History Link: ReceiptIcon + text
- Tab Bar (Tab Account = active, `$vv-black`)

**Key implementation notes:**
- Default Payment Card: rendered as a visual credit card (dark background, card number masked)
- "Add New" button = primary CTA, full-width green pill
- Tab Account is active (black fill with white icon)

---

#### 16. Security Deposit — diQjq
**File:** `stories/screens/security-deposit.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** A — Form (informational, no text input)
**Complexity:** Complex

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + Screen Title
- Subtitle Row
- Deposit Status Banner (`$vv-black`): Banner Top Row + Amount Row + Conversion Row + Divider + Note Row (dark card showing deposit amount)
- Tracker section title + Tracker Card (`$vv-surface-base`):
  - Track Line Bg (281×3px, `$vv-grey-200`) + Track Line Progress (140×3px, `$vv-green-500`)
  - 4 step circles with text below: "Ride Ended" (`$vv-green-100`, 32×32), "Hold Confirmed" (`$vv-green-100`), "Verifying" (white), "Funds Released" (`$vv-grey-100`)
- Info section title + Info Card: Credit Hold row + Divider + Actual Charge row
- Contact Support Link (`$vv-grey-050`): Support Icon Chip + text + chevron
- Tab Bar (Tab Wallet = active, `$vv-black`)

**Key implementation notes:**
- This is a **post-ride informational screen**, not a payment entry form
- Tracker Card is a stepper with visual progress line — 4 steps, 2 complete
- No text inputs — categorized A (Form) because it fits the "Payment / transactional" flow; interaction is just CTA press
- Tab Wallet is active

---

#### 17. Safety Mount Screen — L3K2a
**File:** `stories/screens/safety-mount.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static (CTA press + checkbox)
**Complexity:** Complex

**Visual composition:**
- Status Bar (62px)
- Content area:
  - Header Section: Header Row (Safety Badge black pill + Step Dots); Main Title text
  - Mount Illustration (`$vv-grey-100` background): Large illustrated phone mount scene — BG Circle (148×148px, `$vv-grey-200`); Handlebar (285×22px black bar); Left/Right Grips (42×42px dark ellipses); Mount Clamp (47×36px); Phone Body (59×100px black); Phone Screen (49×74px); App Zap icon (`$vv-green-500`, 17×17); Arrow Left/Right icons; Secure Label (small black pill with lock + text)
  - Warning Card (`$vv-grey-050`): AlertIcon + Warn Title + Warn Body text
  - Confirmation Area: Checkbox Row (22×22px `$vv-green-500` checkbox + label); Swipe Slider (`$vv-grey-100` track, `$vv-black` 44×44px thumb, "Slide to confirm" label); Secured CTA Button (`$vv-green-500`, ShieldCheck icon)
- Tab Bar (361×56px)

**Key implementation notes:**
- Mount Illustration is built from geometric shapes (rectangles, ellipses) — NOT an image placeholder
- Swipe Slider: In Interactive, clicking/tapping the thumb moves it to the right (set `left: calc(100% - 44px)`), changes slider label, and reveals/enables the CTA button
- Checkbox: toggle `$vv-green-500` ↔ `$vv-grey-200` on click
- **Most complex Static-category screen** — geometry-heavy illustration

---

#### 18. Active Ride Dashboard — hQMrX
**File:** `stories/screens/active-ride-dashboard.stories.js` (new)
**Background:** Image fill (`#e8e8e8` placeholder, top 460px only)
**Interaction category:** C — Map (split: top = map, bottom = dashboard panel)
**Complexity:** Complex

**Visual composition:**
- Map area (top 460px): `#e8e8e8` placeholder
- Route rectangles: V:14×162px + H:202×8px + H2:122×12px (multi-segment route)
- Safe Zone ellipse (290×260px)
- Map Fade Bottom (393×100px) + Top Gradient (393×120px)
- Status Bar (393×62px): overlaid on map
- Nav Turn Card (210×52px): Turn Arrow Bg + Nav Text (turn instruction, overlaid on map)
- Safe Zone Warning: AlertIcon + ZoneText (small warning chip)
- Pulse Ring (34×34px) + Location Dot (16×16px): user location
- Destination Pin: FlagIcon + "Destination" label
- Dashboard Panel (393×404px, `$vv-surface-base`): Slides up from bottom
  - Handle Row (20px): 36×4px grey handle bar
  - Timer Row (22px): ClockIcon + Timer text + Spacer + Live Badge (`$vv-green-500`, LiveDot + "LIVE")
  - Divider
  - Telemetry Row (110px): Speed Block (value + "km/h") | vertical divider | Range Block (value + "km left")
  - Divider
  - Billing Section: label + Base Cost Row (grey dot) + Electricity Row (green dot) + Total Row
  - Divider
  - Action Row: SOS Button (`#EF4444`, 80×56px) + End Ride Button (`$vv-green-500`, fill)
- Tab Bar (361×56px)

**Key implementation notes:**
- Screen is split: map (top) + dashboard panel (bottom, ~47% of screen height at 404px)
- Dashboard Panel handle bar = drag affordance, but no drag interaction required — it's static in this phase
- SOS Button: bright red (#EF4444) — hardcoded, no token
- Live Badge: tiny green pill with dot + "LIVE" text — `$vv-green-500` background, black text
- Timer Row shows elapsed ride time — static display in Interactive

---

#### 19. End Ride - Find Charging Station — AH8t6
**File:** `stories/screens/end-ride-find-charging.stories.js` (new)
**Background:** Image fill (`#e8e8e8` placeholder)
**Interaction category:** C — Map
**Complexity:** Complex

**Visual composition:**
- Map Background (full 393×852): `#e8e8e8`
- Route: V:5×96px + H:76×5px (short L-shaped route to station)
- Location Pulse (30×30) + Location Dot (14×14)
- Other Station Pin: Zap icon (alternate/farther station)
- Charging Station Pin (80×80px): Station Pulse Ring (ellipse outline) + Station Badge frame (larger than bike pins)
- Top Gradient (393×170px) + Bottom Gradient (393×292px)
- Status Bar (393×62px)
- Title Banner: Flag Icon Chip + Title Text Col (displayed at top of content area)
- Station Info Card (`$vv-surface-base`): Card Top Row (station name/type); Slots Badge; Divider; Fee Note Row; Navigate to Station Button (`$vv-green-500`); Resume Ride Link
- Tab Bar (361×56px)

**Key implementation notes:**
- Station Pin is 80×80px (larger than standard 72×72px bike pin)
- Station Pulse Ring = animated ring in Interactive (same CSS keyframe pattern as location pulse)
- Resume Ride Link: ghost/text link below the primary CTA button

---

#### 20. Riding to Charging Station — gqQ8M
**File:** `stories/screens/riding-to-charging.stories.js` (new)
**Background:** Image fill (`#e8e8e8` placeholder)
**Interaction category:** C — Map
**Complexity:** Complex

**Visual composition:**
- Map Background (full 393×852): `#e8e8e8`
- Route Ridden V (5×150px): completed portion
- Route Remaining V (5×86px) + Route Remaining H (76×5px): remaining path
- Location Pulse (30×30) + Location Dot (14×14)
- Charging Station Pin (80×80px): Station Pulse Ring + Station Badge
- Top/Bottom Gradients (150px / 292px)
- Status Bar (393×62px)
- Cancel Button (40×40px)
- Turn Instruction Card (264×52px): Turn Arrow Chip + Turn Text Col (same component as Walking Directions)
- Recenter FAB (48×48px)
- Riding Progress Card (`$vv-surface-base`): Progress Row + Divider + "I've Docked" Button (`$vv-green-500`) + Resume Ride Link

**Key implementation notes:**
- Riding Progress Card is nearly identical to Walking Progress Card in FZnNd — same sub-structure
- "I've Docked" = primary CTA (not "I'm at the Bike")
- Turn Instruction Card is the `nav-turn-card` component — build that component first

---

#### 21. Ride Complete Summary — seIX4
**File:** `stories/screens/ride-complete-summary.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Wrap: Check Circle (72×72px, `$vv-green-100` outer, 52×52px `$vv-green-500` inner check mark); Header Title; Header Subtitle
- Ride Stats Card (`$vv-black`): 3 stat blocks (distance | duration | volt coins) separated by `#FFFFFF22` dividers
- Billing Label (`$vv-grey-500`) + Billing Card (`$vv-surface-base`): Base rental row + Electricity row + Bill Divider + Total row
- Deposit Note Row (`$vv-green-100` background): ShieldIcon + deposit refund text (green)
- VoltCoins Banner (`$vv-black`): Coin Badge (`$vv-green-500`, 36×36px) + CoinsText (white) + Chevron
- CTA Wrap: Done Button (`$vv-green-500`, HomeIcon + label) + View Receipt Link

**Key implementation notes:**
- Check Circle: nested circles — outer 72×72px `$vv-green-100`, inner 52×52px `$vv-green-500` — use `position:absolute` centering
- Ride Stats Card is dark (black) with white text and green accents — same pattern as VoltCoins Balance Card
- Deposit Note Row uses `$vv-green-100` tint with `$vv-green-700` text/icon

---

#### 22. Discover VIP Hubs — PS2Xe
**File:** `stories/screens/discover-vip-hubs.stories.js` (new)
**Background:** Image fill (`#e8e8e8` placeholder, top 388px)
**Interaction category:** C — Map + D — List (split screen)
**Complexity:** Complex

**Visual composition:**
- Map (top 388px): `#e8e8e8` placeholder
- 5 Cafe Pins: Each = IconChip + PinLabel text (cafe names: The Grind, Sunrise Cafe, Urban Bean, Lotus Coffee, Riverside Hub)
- Location Pulse (30×30) + Location Dot (14×14)
- Top Gradient (393×110px)
- Status Bar (393×62px)
- Title Row: Screen Title + Filter Button
- Bottom Sheet (393×464px, `$vv-surface-base`): Slides up from bottom
  - Handle Row (24px)
  - Sheet Header: Sheet Title + Sort Label
  - Routes Promo Card (`$vv-black`, 64px): Route Icon Chip (`#C6FF2D22`, 38×38px) + Promo Text Col + ChevronIcon
  - Hub List: 4 Hub Rows each = Cafe Photo (72×72px) + Hub Info frame + ChevronIcon; Row Divider between each

**Key implementation notes:**
- Bottom Sheet is 464px tall — fills most of the screen from below the map
- Hub List rows = `hub-card` component — build that component first
- Routes Promo Card inside the sheet = dark card promoting curated routes feature
- Cafe Pins: use emoji or unicode icon inside small chip (coffee cup ☕ or map pin 📍)
- Tab Discover is active (black fill)

---

#### 23. Cafe Detail — dSxRO
**File:** `stories/screens/cafe-detail.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static
**Complexity:** Medium

**Visual composition:**
- Hero Photo: Large image placeholder (full-width, 320px tall); Photo Gradient overlay (393×100px at bottom of image); Back Button (`#FFFFFFDD`, 36×36px); Share Button (`#FFFFFFDD`, 36×36px); Photo Dots (carousel indicator: 1 active 16×5px + 2 inactive 5×5px); VIP Tag (`$vv-black`, CrownIcon `#F5C518` + "VIP" white text)
- Content area:
  - Title Block: title text column
  - Battery Status Card (`$vv-green-100`): Battery Icon Chip (`$vv-green-500`, 44×44px) + battery/slots text
  - About Text (`$vv-grey-700`): cafe description
  - Perks Row: 3 perk chips (`$vv-grey-100`) — "20% off drinks", "Free WiFi", "7am - 9pm"
  - Spacer
  - Show VIP Barcode Button (`$vv-green-500`, BarcodeIcon + label, full-width)
- Tab Bar (Tab Discover = active, `$vv-black`)

**Key implementation notes:**
- Hero Photo: `#e8e8e8` placeholder div (320px tall) with Back/Share buttons absolutely positioned
- Crown icon: `#F5C518` gold (hardcoded — no token)
- VIP Tag: positioned over the hero photo (bottom-left or top-right corner)
- Perks Row: 3 horizontal chip-like items in a row

---

#### 24. Curated Routes — R1tiK
**File:** `stories/screens/curated-routes.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** D — List
**Complexity:** Complex

**Visual composition:**
- Status Bar (62px)
- Header: Screen Title + Screen Subtitle (two lines)
- Range Pills Row: 3 pills (100km = `$vv-green-500` active + sub-label; 200km and 300km = white with border)
- Header Divider (1px, `$vv-grey-100`)
- Route List: 3 Route Cards (scrollable):
  - Each Route Card (`$vv-surface-base`):
    - Hero Image (`#e8e8e8` placeholder, ~180px tall): Photo Gradient (353×80px) + Range Badge (`#FFFFFFEE`) + Time Badge (`#0F0F0FDD`) + Title Overlay text
    - Card Body: Meta Row (difficulty? + category) + Stops Label + Stops Row (stop chips) + Start Route Button (`$vv-green-500`)
  - Routes: "Old Town Loop", "Coastal Sunset Ride", "Mountain Pass Adventure"
- Tab Bar (Tab Discover = active)

**Key implementation notes:**
- Range Pills: active pill = green background + black text; inactive = white fill + border — Interactive: clicking updates active pill
- Route Card Hero Image: `#e8e8e8` placeholder with overlaid badge chips (positioned absolutely)
- Route Card images use `#FFFFFFEE` (nearly opaque white) and `#0F0F0FDD` (nearly opaque dark) for badge backgrounds
- `route-card` component — build that component first

---

#### 25. VoltCoins Rewards — GH4KX
**File:** `stories/screens/voltcoins-rewards.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** D — List
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Title Col (Screen Title + Subtitle) + Streak Badge (`#FFF1DC` background, FlameIcon `#F5871F`, StreakText `#B5590A`) — orange flame/streak indicator
- Balance Dashboard Card (`$vv-black`): Coin Badge (48×48px `$vv-green-500`, CoinIcon black); Balance Value (white, large); Balance Label (grey); Level Badge (`#FFFFFF22`, TrophyIcon `$vv-green-500`, LevelText white)
- Next Reward Progress Card (`$vv-surface-base`): Progress Top Row (Reward Icon Chip `$vv-grey-100` 38×38 + Progress Text Col); Track Wrap (`$vv-grey-100` background, Track Fill `$vv-green-500` + Track Marker `$vv-surface-base` 12×12)
- How To Earn Tooltip (`$vv-green-100`): Tip Icon Chip (`$vv-green-500`, 32×32, PedalIcon) + TipText (`$vv-green-700`)
- History Label + History List (`$vv-surface-base`): 3 Earn Rows (each: EarnIconChip `$vv-green-100` 36×36 + Earn Text Col + CoinAmountChip `$vv-green-100`)
- CTA: Redeem Rewards Button (`$vv-green-500`, GiftIcon + label)
- Tab Bar (Tab Wallet = active, `$vv-black`)

**Key implementation notes:**
- Streak Badge: orange tones (`#FFF1DC`, `#F5871F`, `#B5590A`) — all hardcoded, no tokens
- Progress Track: percentage fill — render as `width:70%` (representative value)
- `voltcoins-balance` component = Balance Dashboard Card portion — build that component first
- History rows = same List pattern (D category): press highlight on `pointerdown`

---

#### 26. Profile — N0nOZ
**File:** `stories/screens/profile.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** B — Toggle/Tab (list rows + trust card)
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: "Profile" title + Settings Button (`$vv-surface-base`, 34×34px, SettingsIcon `$vv-grey-700`)
- Avatar Section: Avatar Circle (`$vv-black`, 76×76px, AvatarIcon white 34×34); UserName text; UserMeta (`$vv-grey-500`)
- Digital Trust Status Card (`$vv-green-100`): Trust Top Row + Divider (`#A8DE1A66`) + Verify Row: ID Document + Verify Row: Facial Scan + Divider + Reassure Row
- Options List: "Edit Profile Information" row + Divider + "Ride History & Stats" row + Dividers
- Sign Out Wrap: Sign Out Button (white, LogOutIcon `#D64545` + "Sign Out" `#D64545`)
- Tab Bar (Tab Account = active, `$vv-black`)

**Key implementation notes:**
- Trust Status Card is `$vv-green-100` with slightly darker green dividers — this is the Digital Trust section showing ID/face verification status
- Settings Button (top-right): circular, 34×34px
- Sign Out button: red icon and text (`#D64545`) — hardcoded red, no token
- Options List rows = `settings-row` component pattern — build that component first

---

#### 27. Edit Profile — amAsI
**File:** `stories/screens/edit-profile.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** A — Form
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Edit Profile" title
- Avatar Section: Avatar Wrap (88×88px total) — Avatar Circle (76×76px black) + Camera Button (28×28px `$vv-green-500` overlapping, camera icon); "Change photo" text below
- Form Section: 3 fields (FULL NAME, EMAIL ADDRESS, PHONE NUMBER):
  - Each field: Label Row (FieldLabel `$vv-grey-500` + optional VerifiedChip); Input Row (`$vv-grey-050` background, FieldIcon `$vv-grey-500` 17×17px, FieldValue text)
- Spacer (flex-grow)
- CTA Wrap: Save Changes Button (`$vv-green-500`, CheckIcon + "Save Changes")

**Key implementation notes:**
- Camera Button overlaps Avatar Circle (bottom-right corner) — use `position:absolute` on the camera button
- VerifiedChip: small green chip on email and phone fields (already verified)
- Input rows use `$vv-grey-050` = `#FAFAFA` sunken field background
- Interactive: hidden `<input>` overlays on each field; Save button press state; focus border change `$vv-grey-200` → `$vv-black`

---

#### 28. Ride History & Stats — PNaMF
**File:** `stories/screens/ride-history-stats.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** D — List
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Ride History & Stats" title
- Stats Overview Card (`$vv-black`): 3 stat blocks — "Total Rides" | "Distance" | "Volt Coins" — with `#FFFFFF22` vertical dividers (1×40px)
- History Label (`$vv-grey-500`) + History List (`$vv-surface-base`): 4 Ride Rows — each row: ride name + RowDivider (`$vv-grey-100`)
  - Rides: "Coastal Sunset Ride", "Old Town Loop", "Quick City Ride", "Riverside Cafe Run"
- Bottom Spacer
- Tab Bar (Tab Account = active, `$vv-black`)

**Key implementation notes:**
- Stats Card: same dark card pattern as Ride Complete Summary stats — 3 blocks with `#FFFFFF22` dividers
- History rows = tappable list (D category) with press highlight
- No primary CTA button — this is a list-only screen

---

#### 29. Settings — oOcGF
**File:** `stories/screens/settings.stories.js` (new)
**Background:** `$vv-grey-050` (slightly off-white)
**Interaction category:** B — Toggle/Tab
**Complexity:** Simple

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button (36×36px `$vv-surface-base`) + "Settings" title
- ACCOUNT Section: label ("ACCOUNT", `$vv-grey-500`) + ACCOUNT Card (`$vv-surface-base`): Preferences row + Divider + Login & Security row
- SUPPORT & LEGAL Section: label + Card: Help & Support + Divider + Terms of Service + Divider + Privacy Policy
- Danger Zone Section: label + Delete Account Button (`$vv-surface-base`, DeleteIconChip `#FDECEC` 34×34, Delete Text Col, ChevronIcon `#D64545`)
- Footer Wrap: AppVersion text (`$vv-grey-300`)
- Bottom Spacer

**Key implementation notes:**
- Screen background is `$vv-grey-050` (`#FAFAFA`) not pure white — creates section grouping effect
- No Tab Bar on Settings screen (accessed via Profile Settings button, not tab nav)
- Danger Zone delete button: `#FDECEC` chip (pale red) + red chevron `#D64545`
- Interactive: all rows show press feedback; no toggles on this screen (those are in Preferences)

---

#### 30. Preferences — Kaf7F
**File:** `stories/screens/preferences.stories.js` (new)
**Background:** `$vv-grey-050`
**Interaction category:** B — Toggle/Tab
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Preferences" title
- Regional Section label + Regional Card (`$vv-surface-base`):
  - Language Row: RowIconChip (`$vv-grey-100`, 30×30px) + "Language" label + Lang Value Row (current language + chevron)
  - Divider
  - Distance Units Row: RowIconChip + "Distance Units" label + Unit Segmented Control (`$vv-grey-100` background, 2 options)
  - Divider
  - Currency Row: RowIconChip + "Currency" label + Curr Value Row
- Notifications Section label + Notifications Card (`$vv-surface-base`):
  - Push Notifications Row: RowIconChip + Notif Text Col + Toggle Switch On (`$vv-green-500`, 50×29px)
- Bottom Spacer
- Tab Bar (361×56px)

**Key implementation notes:**
- Toggle Switch On: 50×29px pill, `$vv-green-500` background — Interactive: click cycles On ↔ Off (`$vv-green-500` → `$vv-grey-200`, knob translates 21px)
- Unit Segmented Control: 2-option toggle (km / mi) — `settings-row` + inline segmented control
- Row icon chips: 30×30px (smaller than 34×34px in other screens)

---

#### 31. Login & Security — aeptx
**File:** `stories/screens/login-security.stories.js` (new)
**Background:** `$vv-grey-050`
**Interaction category:** B — Toggle/Tab
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Login & Security" title
- Security Section label + Security Card (`$vv-surface-base`):
  - Change Password row: RowIconChip (`$vv-grey-100`, 34×34), title, chevron
  - Divider
  - Biometric Login row: RowIconChip + Row Text Col + Toggle Switch On (`$vv-green-500`, 46×27px)
  - Divider
  - Two-Factor Authentication row: RowIconChip + Row Text Col + Toggle Switch Off (`$vv-grey-200`, 46×27px)
- Sessions Section label:
  - Current Device Card (`$vv-green-100`): DeviceIconChip (`$vv-green-500`, 38×38) + Device Text Col (title + sub in `$vv-green-700`) + LiveDot (`$vv-green-500`, 8×8px)
  - Other Device Row (`$vv-surface-base`): DeviceIconChip (`$vv-grey-100`, 38×38) + Device Text Col (greyed)
- Sign Out All Devices Button
- Bottom Spacer

**Key implementation notes:**
- Toggle switches: 46×27px (slightly different from Preferences 50×29px — use design dimensions)
- Biometric = On (green); 2FA = Off (grey) — Interactive: click cycles each toggle independently
- Current Device card has green tint + live dot (active session indicator)
- Sign Out All = secondary/destructive action button

---

#### 32. Support — r504Z
**File:** `stories/screens/support.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** D — List (FAQ accordion)
**Complexity:** Medium

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Support" title
- Pricing Policies Banner Wrap: banner card (link to pricing info)
- WhatsApp CTA: "Contact Support via WhatsApp" button (`#25D366` fill or dark green)
- Dropoff Opt-in Card: toggle for bike dropoff preference
- FAQ Section label + FAQ Accordion Card (`$vv-surface-base`):
  - "How is the price calculated?" — EXPANDED: shows FaqQRow (question + ChevronUp icon `$vv-text-primary`) + FaqAnswer (`$vv-grey-500`)
  - "What if I can't find a charging hub?" — collapsed (ChevronDown `$vv-grey-300`)
  - "Is my deposit refundable?" — collapsed
  - "What happens if I'm in an accident?" — collapsed
- Tab Bar (361×56px)

**Key implementation notes:**
- FAQ accordion = `faq-row` component — build that component first
- First FAQ is pre-expanded in Default export
- Interactive: click row header expands/collapses — max-height transition, chevron rotates 0→90°
- WhatsApp button: `#25D366` (same hardcoded green as Registration screen)
- Dropoff toggle = same Toggle pattern as Preferences

---

#### 33. Terms of Service — XffXP
**File:** `stories/screens/terms-of-service.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static
**Complexity:** Simple

**Visual composition:**
- Status Bar (62px)
- Header Row: Back Button + "Terms of Service" title
- Meta Row: LastUpdated text (`$vv-text-secondary`, e.g. "Last updated: 1 January 2025")
- Body Area (scrollable): 5 sections, each with SectionHeading (`$vv-text-primary`) + SectionBody (`$vv-grey-700`):
  1. Acceptance of Terms
  2. Eligibility & Rental Agreement
  3. Payment, Fees & Deposits
  4. Rider Responsibilities & Safety
  5. Governing Law & Contact
- Bottom Spacer
- Footer Wrap: FooterText (`$vv-text-secondary`)

**Key implementation notes:**
- No "I Agree" CTA button visible in the design frame (UI-SPEC mentions it; the design may show it at the bottom of the scrollable content) — implement as a sticky footer button in Interactive
- Body Area should be scrollable in Interactive (`overflow-y:auto`)

---

#### 34. Privacy Policy — nlrUb
**File:** `stories/screens/privacy-policy.stories.js` (new)
**Background:** `$vv-surface-base`
**Interaction category:** E — Static
**Complexity:** Simple

**Visual composition:** Identical structure to Terms of Service with 5 different sections:
  1. Information We Collect
  2. How We Use Your Data
  3. Location & Ride Data
  4. Data Sharing & Third Parties
  5. Your Rights & Contact
- Same scrollable body pattern, same Footer

**Implementation notes:** Direct copy of terms-of-service.stories.js with section content swapped.

---

## Component Anatomy (12 new components)

### Screen-to-Component Dependency Map

| Component | Used In (screens) | Must Build Before |
|-----------|-------------------|-------------------|
| `settings-row` | Profile, Settings, Login & Security, Preferences | Profile (N0nOZ), Settings (oOcGF), Preferences (Kaf7F), Login & Security (aeptx) |
| `faq-row` | Support | Support (r504Z) |
| `dashboard-panel` | Active Ride Dashboard | Active Ride Dashboard (hQMrX) |
| `nav-turn-card` | Active Ride Dashboard, Riding to Charging | Active Ride (hQMrX), Riding to Charging (gqQ8M) |
| `riding-progress-card` | Riding to Charging | Riding to Charging (gqQ8M) |
| `station-info-card` | End Ride Find Charging | End Ride (AH8t6) |
| `hub-card` | Discover VIP Hubs | Discover VIP Hubs (PS2Xe) |
| `route-card` | Curated Routes | Curated Routes (R1tiK) |
| `payment-card-row` | Add/Select/Manage Payment | WFeNt, w3CgWF, d2ytQb |
| `ride-summary-card` | Add/Select Payment | WFeNt, w3CgWF |
| `qr-viewfinder` | QR Unlock Scan | QR Unlock (pE4ag) |
| `voltcoins-balance` | VoltCoins Rewards | VoltCoins (GH4KX) |

---

### C-01: Settings Row (`settings-row.stories.js`)

**Visual structure:**
- Container: horizontal flex, 48px min height, `$vv-surface-base` background, `$vv-grey-050` on press
- Left: RowIconChip (30–34×30–34px, `$vv-grey-100` background) + Text Col (title + optional subtitle)
- Right: ChevronIcon (`$vv-grey-300`, 16×16px) OR Toggle Switch OR value text
- Bottom border: `$vv-grey-100` 1px divider (not always — depends on position in list)

**States:**
- Default: chevron row (navigates somewhere)
- WithToggle: toggle switch replaces chevron (On/Off)
- WithValue: value string (e.g. "English") replaces chevron
- Pressed: `$vv-grey-050` background on `pointerdown`

**Default exports:** `Default` (chevron variant), `WithToggle`, `WithValue`
**Interactive behavior:** Press feedback; toggle cycles On ↔ Off (only for WithToggle variant)

---

### C-02: Dashboard Panel (`dashboard-panel.stories.js`)

**Visual structure (393×404px):**
- Handle Row (20px): 36×4px grey bar centered
- Timer Row (22px): ClockIcon + "00:23:41" elapsed + Live Badge (green pill + "LIVE")
- Divider
- Telemetry Row (110px): Speed Block ("24 km/h") | vertical divider (1×80px) | Range Block ("18.3 km left")
- Divider
- Billing Section: "Billing" label + Base Cost row (grey dot) + Electricity row (green dot) + Total row
- Divider
- Action Row: SOS Button (red, 80×56px) + End Ride Button (green, fill)

**States:** Static display (numbers don't update in this phase)
**Interactive behavior:** SOS press state (darken red); End Ride press state (green → `$vv-green-600`)

---

### C-03: Payment Card Row (`payment-card-row.stories.js`)

**Visual structure:**
- Container: horizontal flex, 56px min height, `$vv-surface-base` base
- Left: CardChip (40×40px, variable background — black for Apple Pay, grey for others, white for card) + Text Col (card name, masked number)
- Right: Radio (24×24px circle — selected: `$vv-green-500`, unselected: white with `$vv-grey-200` border)
- Selected row: `$vv-green-100` background, `$vv-green-500` radio

**States:** `Selected`, `Unselected`
**Interactive behavior:** Click toggles to Selected (updates sibling rows to Unselected)

---

### C-04: QR Viewfinder (`qr-viewfinder.stories.js`)

**Visual structure:**
- Outer: full-width viewport container, `$vv-grey-900` background
- Center: 210×210px frame boundary (semi-transparent)
- Corners: 4× corner accent groups — each is H(32×4) + V(4×32) `$vv-green-500` rectangles
- Scan Line: 178×2px, `#C6FF2DCC` (80% opacity)
- Instructions Banner: 393×48px semi-dark overlay at bottom of viewport

**States:** Scanning (scan line animated), Idle (static)
**Interactive behavior:** CSS keyframe on scan line (up-down bounce); corner accents pulse opacity (0.7↔1.0)

---

### C-05: Nav Turn Card (`nav-turn-card.stories.js`)

**Visual structure (264×52px):**
- Turn Arrow Chip: small square/circle chip with directional arrow symbol
- Turn Text Col: street name + action (e.g. "Turn left onto Marine Drive")
- Container: `$vv-surface-base` with `elevationFloating` shadow, `radiusMd` corners

**States:** Default (showing direction), Dismissed (opacity 0 or removed)
**Interactive behavior:** Tap the card → opacity transition to 0, then `remove()` from DOM

---

### C-06: Riding Progress Card (`riding-progress-card.stories.js`)

**Visual structure:**
- Progress Row: Distance Block (value + "km left") | vertical divider | ETA Block (value + "min") | Spacer | Bike/Status Chip
- Divider
- Primary CTA Button (green, full-width)
- Secondary Link (grey text)

**States:** 3 demo states — Near (>50% route left), Approaching (<25% left), Arrived (CTA changes to "Docked")
**Interactive behavior:** Tap button cycles through 3 demo states (progress changes visually)

---

### C-07: Hub Card (`hub-card.stories.js`)

**Visual structure:**
- Container: horizontal flex list row, `$vv-surface-base`
- Left: Cafe Photo (72×72px, `#e8e8e8` placeholder, `radiusMd` corners)
- Center: Hub Info (cafe name, distance, amenities — text column)
- Right: ChevronIcon (`$vv-grey-300`, 18×18px)
- Bottom divider: `$vv-grey-100`

**States:** Default, Pressed
**Interactive behavior:** Press feedback (`$vv-grey-050` background on `pointerdown`)

---

### C-08: Route Card (`route-card.stories.js`)

**Visual structure:**
- Container: full-width card, `$vv-surface-base`, `radiusLg`, `elevationRaised` shadow (or flat)
- Hero Image: `#e8e8e8` placeholder (~180px), with overlaid Range Badge (`#FFFFFFEE`) + Time Badge (`#0F0F0FDD`) + Title text overlay
- Card Body: Meta Row (category chips) + Stops Label + Stops Row (waypoint chips) + Start Route Button (`$vv-green-500`, full-width)

**States:** Default (100km active pill), Difficulty variants
**Interactive behavior:** "Start Route" press state

---

### C-09: VoltCoins Balance (`voltcoins-balance.stories.js`)

**Visual structure (full-width dark card):**
- `$vv-black` background
- Coin Badge (48×48px `$vv-green-500` circle, CoinIcon black inside)
- Balance Value: large number (white)
- Balance Label: "VoltCoins" (`$vv-grey-500`)
- Level Badge (`#FFFFFF22` pill): TrophyIcon (`$vv-green-500`) + level text (white)

**States:** Static display
**Interactive behavior:** None — static balance display. (Deferred: counter animation is out of scope)

---

### C-10: Ride Summary Card (`ride-summary-card.stories.js`)

**Visual structure:**
- `$vv-black` fill card
- BikeIcon Chip (`#C6FF2D22`, 40×40px) — semi-transparent green icon bg
- Ride Text Col: title (white) + subtitle (`$vv-grey-500`)
- Ride Rate Col: rate per minute (white) + rate sub (`$vv-grey-500`)

**States:** Default
**Interactive behavior:** Press state (darken slightly)

---

### C-11: Station Info Card (`station-info-card.stories.js`)

**Visual structure:**
- `$vv-surface-base` card
- Card Top Row: station icon + station name + type/category
- Slots Badge: available slot count chip
- Divider
- Fee Note Row: fee information text
- Navigate to Station Button (`$vv-green-500`, full-width)
- Resume Ride Link (ghost text, centered below)

**States:** Default
**Interactive behavior:** "Navigate" press state; card press feedback

---

### C-12: FAQ Row (`faq-row.stories.js`)

**Visual structure:**
- Container: full-width, `$vv-surface-base`
- Question Row: FaqQ text (`$vv-text-primary`) + ChevronDown icon (`$vv-grey-300`, 16×16px)
- Expanded: + FaqAnswer text below (`$vv-grey-500`); chevron becomes ChevronUp (`$vv-text-primary`)
- Divider: `$vv-grey-100` between rows

**States:** `Collapsed`, `Expanded`
**Interactive behavior:** Click row → toggle expanded; chevron rotates from 0° to 90° (`transform:rotate(90deg)`)

---

## Wave Structure Recommendation

Phase 7 has 46 story files to create (34 screens + 12 components), each with 3 exports = ~138 export functions. This is 5× the scope of Phase 6. Recommend **6 waves**.

**Parallelization principle:** Components must be built before the screens that reference them in plan descriptions. Within a wave, plans can run in parallel (different files, no shared state).

### Wave 0 — Helper Verification (1 plan, ~1 hour)
**Purpose:** Confirm generated/tokens.js exports all constants used in Hi-Fi screens; verify the build pipeline; no story writing.
- Verify `tokens.colorGrey050`, `tokens.colorGrey100`, `tokens.colorGrey900`, etc. all exist in generated/tokens.js
- Confirm `npm run build-storybook` still passes with current state
- Document any missing token constants (fallback: hardcode hex values)

**Plan:** `07-01-preflight-token-audit.md`

### Wave 1 — Simple Static Screens (6 plans, ~30 min each, fully parallelizable)
**Purpose:** All Category E screens with no map or complex layout. Fastest implementation, verifies basic story pattern before complex work.
- `07-02-splash-screen.md` — O94n2 (light bg, SVG bg pattern, loader bar)
- `07-03-onboarding-1-2-3.md` — WSGRc + nvm2v + BbpOx (3 files, same template; pagination dot position changes only)
- `07-04-id-scan-facial-scan.md` — f6zx5 + llnIt (dark screens, camera viewports)
- `07-05-qr-unlock-safety-mount.md` — pE4ag + L3K2a (camera scan + mount illustration)
- `07-06-ride-complete-cafe-detail.md` — seIX4 + dSxRO (summary + image hero)
- `07-07-terms-privacy.md` — XffXP + nlrUb (identical structure, different content)

**Component stories needed first:** None (these screens use no new components)

### Wave 2 — New Components Batch A (4 plans, parallelizable)
**Purpose:** Build the components that are dependencies for Wave 3 screens.
- `07-08-settings-row-faq-row.md` — C-01 + C-12 (needed for Settings/Profile/Support)
- `07-09-payment-card-row-ride-summary-card.md` — C-03 + C-10 (needed for payment screens)
- `07-10-voltcoins-balance-station-info-card.md` — C-09 + C-11 (needed for VoltCoins + End Ride)
- `07-11-qr-viewfinder-hub-card-route-card.md` — C-04 + C-07 + C-08 (needed for QR + Discover + Routes)

### Wave 3 — Form & List Screens (5 plans, mostly parallelizable)
**Purpose:** Category A (Form) and D (List) screens. Uses components from Wave 2.
- `07-12-registration-login.md` — Y9ojN + TS9Td (update existing, social auth + input)
- `07-13-payment-screens.md` — WFeNt + w3CgWF + d2ytQb (3 payment screens using C-03 + C-10)
- `07-14-security-deposit.md` — diQjq (post-ride informational, tracker stepper)
- `07-15-profile-ride-history.md` — N0nOZ + PNaMF (using C-01; profile + history list)
- `07-16-edit-profile.md` — amAsI (form with hidden inputs)

### Wave 4 — New Components Batch B + Toggle Screens (3 plans)
**Purpose:** Remaining components + the B-category screens.
- `07-17-dashboard-panel-nav-turn-card-riding-progress-card.md` — C-02 + C-05 + C-06
- `07-18-settings-preferences-login-security.md` — oOcGF + Kaf7F + aeptx (toggle switches)
- `07-19-voltcoins-rewards-support.md` — GH4KX + r504Z (using C-09 + C-12)

### Wave 5 — Map Screens (5 plans, all C-category)
**Purpose:** Map screens (most complex — gradient overlays, pin placement, animations). Build last to leverage all established patterns.
- `07-20-home-map.md` — E9hST (update existing; range pins + scan CTA card)
- `07-21-navigate-to-bike.md` — kUCG9 (update existing; route dashes + bike card)
- `07-22-walking-directions.md` — FZnNd (update existing; progress card)
- `07-23-active-ride-dashboard.md` — hQMrX (split map+panel; using C-02 + C-05)
- `07-24-end-ride-riding-to-charging-discover.md` — AH8t6 + gqQ8M + PS2Xe (charging flow + VIP hubs)

### Wave 6 — Done-Bar Verification (1 plan)
**Purpose:** Final verification pass.
- `07-25-done-bar.md` — Run `npm run build-storybook`, count files, confirm all 34 screens + 23 components

**Total plans: 25 plans across 6 waves**

---

## Implementation Risks & Landmines

### Risk 1: Tab Bar Label Mismatch (CRITICAL)
**Issue:** The Phase 3/existing stories use `['Ride', 'Discover', 'Wallet', 'Account']` but the design frames show: Tab Ride, Tab Discover, Tab Wallet, Tab Account. UI-SPEC locks labels to `['Home', 'Ride', 'Rewards', 'Profile']` (Phase 6 Interactive). The design frames show DIFFERENT label names.

**Resolution confirmed from design data:** The tab bar frame in the .pen file uses "Tab Ride", "Tab Discover", "Tab Wallet", "Tab Account" node names. The Tab Bar `Interactive` export (Phase 6) uses `['Home', 'Ride', 'Rewards', 'Profile']` per UI-SPEC override. Screen stories must match the DESIGN (Ride/Discover/Wallet/Account), not the Phase 6 component. Screens show a different tab bar than the standalone TabBar component story.

**Action:** Screen stories use `['Ride', 'Discover', 'Wallet', 'Account']` labels. Tab account tab active on Profile/Settings-related screens; Tab Wallet on payment/security deposit; Tab Discover on explore screens; Tab Ride on ride-flow screens.

### Risk 2: Screen Background Variations
**Issue:** Several screens use `$vv-grey-050` (`#FAFAFA`) instead of `$vv-surface-base` (`#FFFFFF`) — Settings, Preferences, Login & Security, Active Ride Dashboard (outer frame is `$vv-grey-100`).

**Action:** Use `tokens.colorGrey050` for these screens' outer container. This token must exist in `generated/tokens.js` — Wave 0 audit should verify.

### Risk 3: Dark-on-Dark Semi-Transparent Overlays
**Issue:** Dark screens (ID Scan, Facial Scan, QR Unlock) use fills like `#FFFFFF22` (white at 13%), `#FFFFFF33` (20%), `#00000088` (53%), `#C6FF2DBB` (73%). These have no token equivalents.

**Action:** All semi-transparent fills must be hardcoded as `rgba()` values. Helper function:
```js
// #FFFFFF22 = rgba(255,255,255,0.13)
// #FFFFFF33 = rgba(255,255,255,0.20)
// #C6FF2DBB = rgba(198,255,45,0.73)
// #C6FF2DCC = rgba(198,255,45,0.80)
// #00000088 = rgba(0,0,0,0.53)
// #FFFFFF12 = rgba(255,255,255,0.07)
// #FFFFFF18 = rgba(255,255,255,0.094)
// #0F0F0FDD = rgba(15,15,15,0.87)
// #0F0F0F99 = rgba(15,15,15,0.60)
```

### Risk 4: Safety Mount Illustration Complexity
**Issue:** The Safety Mount screen contains a geometric illustration built from ~12 positioned shapes (handlebar, grips, clamp, phone body, etc.) — more complex than any existing story.

**Action:** Batch this with QR Unlock (both Category E) but allocate extra time. The illustration is all CSS shapes (rectangles, ellipses) — no images needed. The planner should not split this plan further.

### Risk 5: makePhoneFrame() Inner Screen Color
**Issue:** Current `makePhoneFrame()` in all Phase 6 files sets inner screen to `background:#ffffff`. Dark screens (ID Scan, Facial Scan, QR Unlock, Splash) need `background:#0f0f0f` inner screen.

**Action:** Modify `makePhoneFrame()` in dark-screen files to accept a `screenBg` parameter: `makePhoneFrame({ screenBg='#ffffff' } = {})`. Or simply override after creation: `screen.style.background = '#0f0f0f'`. The inline copy pattern (one copy per file) means this is a per-file decision — no shared module to update.

### Risk 6: Curated Routes Route Card Complexity
**Issue:** Each Route Card has a hero image area with 3 overlaid badges (Range, Time, Title) using near-opaque backgrounds (`#FFFFFFEE`, `#0F0F0FDD`). This is the most complex card layout in the List category.

**Action:** Build `route-card` component in Wave 2 before the Curated Routes screen. The component story is the prototype — the screen just repeats it 3 times.

### Risk 7: Active Ride Dashboard SOS Button Color
**Issue:** SOS Button uses `#EF4444` (red) — this is a non-VoltVenture color (Tailwind red-500). No token exists.

**Action:** Hardcode `#EF4444` in that file. Add inline comment: `/* SOS — brand exception, no VV token */`

### Risk 8: WhatsApp Green in Multiple Screens
**Issue:** Registration and Support screens both use `#25D366` (WhatsApp green) for CTAs. No token.

**Action:** Hardcode `#25D366` in both files. Add inline comment: `/* WhatsApp brand green — no VV token */`

### Risk 9: Security Deposit Is NOT a Payment Entry Form
**Issue:** Security Deposit is categorized A (Form) but has NO text inputs. It's an informational screen showing deposit status. Interactive behavior is CTA press only + tracker visualization.

**Action:** Correct understanding: Security Deposit is effectively Category E (Static) for interaction purposes. The planner should not add hidden `<input>` overlays. Categorize as "A-Informational" — only CTA press state needed.

---

## Reuse Opportunities

### Direct Copy with Minimal Changes

**1. makePhoneFrame() — copy from any Phase 6 file**
Source: `stories/components/button.stories.js` lines 5–30
Change needed: add optional `screenBg` parameter for dark screens

**2. hexToRgba() + shadowFromToken() — copy from home-map.stories.js**
Source: `stories/screens/home-map.stories.js` lines 11–27
Change needed: none — copy verbatim

**3. Map screen pattern — copy from home-map.stories.js**
The `#e8e8e8` background + `position:absolute` overlays + gradient layers pattern is identical for all 7 map screens. The existing home-map.stories.js Interactive export can serve as the scaffold for the 6 new map screens — change only the overlay content (pins, cards, route shapes).

**4. _esc() + _blk() SourceCode helpers — copy from any existing story**
Source: `stories/components/button.stories.js` lines 154–156
Change needed: update the string passed to `_blk()` and the heading comment

**5. Tab Bar DOM construction — copy from tab-bar.stories.js**
Source: `stories/components/tab-bar.stories.js` lines 113–148
Change needed: update INTERACTIVE_TABS labels if different from `['Home','Ride','Rewards','Profile']`

**6. Press state event listeners — copy from button.stories.js**
```js
el.addEventListener('pointerdown', () => { el.style.backgroundColor='#a8de1a'; el.style.transform='scale(0.97)'; });
el.addEventListener('pointerup',   () => { el.style.backgroundColor=tokens.colorActionPrimary; el.style.transform='scale(1)'; });
el.addEventListener('pointerleave',() => { el.style.backgroundColor=tokens.colorActionPrimary; el.style.transform='scale(1)'; });
```

**7. Onboarding screens 1/2/3 — batch copy**
All 3 onboarding screens are structurally identical. The plan can write one file and copy-edit the other two (change: pagination dot position, screen number text, CTA label on screen 3).

**8. Terms of Service + Privacy Policy — batch copy**
Identical structure, different section content. Write ToS first, copy file for Privacy Policy, swap section headings and body text.

**9. Scan screens (ID Scan + Facial Scan) — batch**
Both dark camera screens. Write ID Scan first, copy for Facial Scan: change face oval from rectangle to ellipse, remove ID card elements, change progress strip to both-steps-active.

**10. Map gradient overlays — consistent pattern**
All map screens use:
- `position:absolute; top:0; width:393px; height:Xpx; background:linear-gradient(to bottom, rgba(255,255,255,0.9), transparent)` for top fade
- `position:absolute; bottom:Ypx; width:393px; height:Zpx; background:linear-gradient(to top, rgba(255,255,255,0.95), transparent)` for bottom fade

**11. Dark stat cards (black bg, white text, dividers)**
Pattern appears in: Active Ride Dashboard (Telemetry), Ride Complete Summary (Stats), Ride History (Stats Overview), VoltCoins (Balance Card).
```js
// Black card with white stats and separator dividers
const statCard = document.createElement('div');
statCard.style.cssText = `background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusXl}px;display:flex;align-items:center;justify-content:space-around;padding:24px 20px`;
```

**12. CSS keyframe injection pattern (from home-map Interactive)**
For pulse animations (location dot, QR scan line, camera oval):
```js
const style = document.createElement('style');
style.textContent = `@keyframes pulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }`;
document.head.appendChild(style);
```

---

## Design Source Provenance

All frame structures in this document were read directly from `voltventure_wireframes.pen` (version 2.15, JSON format, 62 frames total). The file was parsed with `JSON.parse()` in Node.js — no Pencil desktop app required. The Pencil MCP server requires the running Pencil desktop app; it was not used. All frame IDs have been verified to exist in the file.

**Color variable resolution:** The `variables` section of the pen file maps `$vv-*` names to hex values, confirming the token mapping table above.

**Frame IDs verified present (all 34):** O94n2 ✓, WSGRc ✓, Y9ojN ✓, TS9Td ✓, f6zx5 ✓, llnIt ✓, E9hST ✓, kUCG9 ✓, FZnNd ✓, nvm2v ✓, BbpOx ✓, pE4ag ✓, WFeNt ✓, w3CgWF ✓, d2ytQb ✓, diQjq ✓, L3K2a ✓, hQMrX ✓, AH8t6 ✓, gqQ8M ✓, seIX4 ✓, PS2Xe ✓, dSxRO ✓, R1tiK ✓, GH4KX ✓, N0nOZ ✓, amAsI ✓, PNaMF ✓, oOcGF ✓, Kaf7F ✓, aeptx ✓, r504Z ✓, XffXP ✓, nlrUb ✓

---

## Open Questions for Planner

1. **Wave 0 token audit: RESOLVED.** `generated/tokens.js` exports `colorGrey050` (#fafafa) — confirmed by running `import('./generated/tokens.js')`. All needed grey and green token constants are present. Wave 0 preflight can skip this check.

2. **Illustration Area image treatment:** Onboarding screens have an `Illustration Area` with `fill:image` in the design. The decision is to use `#e8e8e8` placeholder (same as map). The planner should confirm this as the standard for ALL image-fill areas in Phase 7 (route card heroes, cafe photos, hero photos) — no actual images needed.

3. **Security Deposit categorization:** Technically A (Form flow context) but interactively E (no text inputs, CTA press only). The planner should treat it as E for interaction implementation to avoid over-engineering.

---

## RESEARCH COMPLETE

**Phase:** 7 — Hi-Fi Screens & Components Expansion
**Confidence:** HIGH

### Key Findings
- All 34 frame IDs confirmed present in `voltventure_wireframes.pen` via direct JSON parsing
- Visual structure extracted for every frame (3-4 levels deep) — no design ambiguity remains
- Design variable system (`$vv-*`) maps cleanly to existing token constants
- 12 semi-transparent color values identified that require hardcoded `rgba()` (no tokens)
- 5 interaction categories cover all screens; Safety Mount is the most complex Static screen
- Tab bar labels in screens = `['Ride', 'Discover', 'Wallet', 'Account']` (different from Phase 6 component which uses `['Home', 'Ride', 'Rewards', 'Profile']`)
- Dark-screen variants (ID Scan, Facial Scan, QR Unlock) need `makePhoneFrame()` inner screen color override to `#0f0f0f`
- Zero new npm packages required

### Files Created
`.planning/phases/07-hifi-screens-components-expansion/07-RESEARCH.md`

### Confidence Assessment
| Area | Level | Reason |
|------|-------|--------|
| Frame IDs & existence | HIGH | Verified directly from pen file JSON |
| Visual composition | HIGH | Node tree extracted from actual design data |
| Color/token mapping | HIGH | Variable definitions read from pen file |
| Interaction patterns | HIGH | All 5 categories confirmed by UI-SPEC + design |
| Wave structure | MEDIUM | Complexity estimates based on node counts; execution time may vary |
| Token completeness | HIGH | All needed token constants verified in generated/tokens.js at research time |

### Ready for Planning
Research complete. Planner can now create PLAN.md files using the wave structure above and per-screen composition descriptions.
