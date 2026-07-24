/**
 * Do not edit directly, this file was auto-generated.
 */

export const borderWidthNone = 0; // Default for filled surfaces — no visible border
export const borderWidthHairline = 1; // Dividers, outlined chips, input rest state. Paired with color.border.subtle.
export const borderWidthStrong = 1.5; // Input focus, selected card. Paired with color.border.strong.
export const borderWidthFocus = 2; // Keyboard / switch-control focus ring, 2pt offset. Always green (color.action.primary). Visible on both light and dark surfaces.
export const colorBlack = "#0f0f0f"; // Volt Black — canvas color and primary foreground. All text, icons, and UI on light surfaces.
export const colorWhite = "#ffffff"; // Pure White — primary light surface. Base background for all light-mode screens.
export const colorGrey100 = "#f5f5f5"; // List row fill, settings surface
export const colorGrey200 = "#ebebeb"; // Inactive nav circle, dividers on light surfaces
export const colorGrey300 = "#c9c9c9"; // Interpolated — disabled text and decorative elements
export const colorGrey500 = "#808080"; // Brand board Mid Gray — secondary text. 3.9:1 on white; passes AA for large text only.
export const colorGrey700 = "#4a4a4a"; // Interpolated — dark-surface borders and secondary elements
export const colorGrey800 = "#2f2f2f"; // Brand board Charcoal — progress tracks, elevated dark surfaces
export const colorGrey900 = "#1a1a1a"; // Interpolated — raised dark surface (elevation model B)
export const colorGrey950 = "#0f0f0f"; // Brand board Volt Black alias in grey ramp
export const colorGrey050 = "#fafafa"; // List row fill, resting state
export const colorGreen100 = "#f4ffd9"; // Tint background — subtle success wash, hover state fill on light surfaces
export const colorGreen300 = "#ddff7a"; // Hover / focus wash on interactive elements
export const colorGreen500 = "#c6ff2d"; // Electric Green — primary brand accent. Background only on light surfaces. Foreground must always be color.black. Against white: 1.36:1 (unusable as text). Against black: 15.4:1 (AAA).
export const colorGreen600 = "#a8de1a"; // Pressed state on primary action elements
export const colorGreen700 = "#7d9220"; // Dark green — the only accessible green for text on white surfaces (4.6:1, passes WCAG AA)
export const colorSurfaceBase = "#ffffff"; // Primary light surface. Default background for all light-mode screens.
export const colorSurfaceSunken = "#f5f5f5"; // Recessed surface. Used for input fields, code blocks, and content wells that sit below the base.
export const colorSurfaceRaised = "#ffffff"; // Elevated card surface. Semantically distinct from base — conveys elevation even when the hex value matches.
export const colorSurfaceInverse = "#0f0f0f"; // Dark surface. Used for tooltips, toasts, and elements that need to contrast sharply against light surfaces.
export const colorTextPrimary = "#0f0f0f"; // Primary text. Headlines, body copy, row labels. 19.6:1 on white — AAA.
export const colorTextSecondary = "#808080"; // Secondary / supporting text. Subtitles, metadata, captions. 3.9:1 on white — passes AA for large text only.
export const colorTextDisabled = "#c9c9c9"; // Disabled-state text. Non-interactive labels and placeholders. Below AA threshold by design.
export const colorTextAccent = "#7d9220"; // Accent text. Links, highlights, active tab labels. MUST use green.700 (#7D9220) not green.500 (#C6FF2D) — green.700 achieves 4.6:1 on white (WCAG AA). green.500 achieves only 1.36:1 (fails).
export const colorTextOnInverse = "#ffffff"; // Text on inverse (dark) surfaces. Tooltips, toasts, dark cards.
export const colorActionPrimary = "#c6ff2d"; // Primary CTA background. Electric Green (#C6FF2D). Background-only on light surfaces — never use as text color. Always pair with action.primary.fg.
export const colorActionSecondary = "#0f0f0f"; // Secondary CTA background. Volt Black. Used for non-primary actions that need high contrast.
export const colorBorderSubtle = "#ebebeb"; // Subtle dividers and non-interactive borders. Row separators, section edges.
export const colorBorderStrong = "#0f0f0f"; // Prominent borders. Selected states, focused inputs with dark outline, card stroke on light backgrounds.
export const colorBorderFocus = "#c6ff2d"; // Focus ring color. Electric Green outline on focused interactive elements. Used as a stroke, not a fill.
export const colorStatusLive = "#c6ff2d"; // Live-status indicator. Electric Green dot or badge. Always paired with a text label — never used as sole state indicator.
export const elevationFlat = "none"; // No shadow — list rows, inline chips, anything inside a card. On dark surfaces use surface lightness steps instead.
export const elevationRaised = {
  color: "#0F0F0F0F",
  offsetX: 0,
  offsetY: 2,
  blur: 8,
  spread: 0,
}; // Cards resting on screen — rgba(15,15,15,.06) shadow. Hex alpha: 0.06 × 255 = 15.3 ≈ 0F.
export const elevationFloating = {
  color: "#0F0F0F1A",
  offsetX: 0,
  offsetY: 8,
  blur: 24,
  spread: 0,
}; // Tab bar, FAB, sticky CTA — rgba(15,15,15,.10) shadow. Hex alpha: 0.10 × 255 = 25.5 ≈ 1A.
export const elevationOverlay = {
  color: "#0F0F0F29",
  offsetX: 0,
  offsetY: 16,
  blur: 48,
  spread: 0,
}; // Sheets, modals, dropped panels — rgba(15,15,15,.16) shadow. Hex alpha: 0.16 × 255 = 40.8 ≈ 29.
export const gridColumns = 4; // 4-column phone grid. On larger phones margin is fixed and columns are fluid.
export const gridMargin = 16; // Fixed horizontal margin — stays 16pt at all phone sizes. Measured from profile screen: 361pt content in 393pt frame.
export const gridGutter = 16; // Column gutter — 16pt between columns
export const gridContentWidth = 361; // Content width at 393pt reference device (393 - 2 × 16pt margin = 361pt). Reference: iPhone 15/16 logical size.
export const gridTouchTarget = 48; // Minimum interactive touch target — 48pt above the 44pt iOS / 48dp Android floor. Set higher for in-vehicle one-handed use.
export const iconCanvas = 24; // 24pt icon canvas — bounding box for all icons. Icons render at 1× vector.
export const iconLiveArea = 20; // 20pt live area (2pt padding all sides within 24pt canvas). Glyph artwork must fit within this area.
export const iconPadding = 2; // 2pt padding all sides between canvas edge and live area
export const iconSizeXs = 16; // 16pt icon size — small inline icons, metadata
export const iconSizeSm = 20; // 20pt icon size — secondary navigation, list row icons
export const iconSizeMd = 24; // 24pt icon size — default (matches canvas). Tab bar, buttons, standard UI icons.
export const iconSizeLg = 32; // 32pt icon size — feature callouts, empty states, large icon moments
export const radiusXs = 8; // Badges, small chips, progress tracks
export const radiusSm = 12; // Inline tags, thumbnails, inputs
export const radiusMd = 16; // List rows, secondary cards
export const radiusLg = 20; // Standard content card
export const radiusXl = 28; // Feature cards, the black stat block, map container
export const radius2xl = 36; // Bottom sheets, full-width hero surfaces
export const radiusFull = 999; // Buttons, pills, avatars, tab bar circles, status dots — fully rounded
export const radiusIcon = 22.37; // App icon only — iOS squircle continuous corner mask (22.37% proportional). Do not use as absolute dp; multiply by container size (e.g. 1024 * 0.2237 = 229pt for 1024pt canvas).
export const space100 = 4; // 4pt — label-to-value stacked, fine-grain adjustments
export const space200 = 8; // 8pt — icon to label gap
export const space300 = 12; // 12pt — gap between sibling cards
export const space400 = 16; // 16pt — screen horizontal margin, list row vertical padding
export const space500 = 20; // 20pt — card internal padding, above tab bar clearance
export const space600 = 24; // 24pt — button horizontal padding
export const space800 = 32; // 32pt — gap between sections
export const space1000 = 40; // 40pt — large section spacing
export const space1200 = 48; // 48pt — minimum touch target dimension (above 44pt iOS / 48dp Android floor)
export const space1600 = 64; // 64pt — minimum list row height (two-line rows grow from here)
export const space050 = 2; // 2pt — minimum spacing unit. Used for icon-to-icon gaps and tight inline spacing.
export const fontFamilyDisplay = "Manjari"; // Display / brand font. Use GoogleFonts.manjari() in Flutter. Headlines, hero statements, wordmark (as text — not the custom-drawn logo), large numerals. Weights: 100, 400, 700.
export const fontFamilyBody = "Inter"; // Body / interface font. Use GoogleFonts.inter() in Flutter. Everything functional: labels, rows, buttons, captions, data. Weights: 400, 500, 600, 700.
export const fontFamilyMono = "JetBrains Mono"; // Monospace font. Use GoogleFonts.jetBrainsMono() in Flutter. Code, token names, technical display.
export const fontSizeDisplayXl = 40; // display.xl — 40pt. Manjari 700. Used for greetings, hero headlines.
export const fontSizeDisplayLg = 32; // display.lg — 32pt. Manjari 700. Used for names, section heroes.
export const fontSizeDisplayMd = 28; // display.md — 28pt. Manjari 700. Used for primary actions, booking CTAs.
export const fontSizeNumericLg = 28; // numeric.lg — 28pt. Inter 700. Used for large data values (points, distances).
export const fontSizeNumericMd = 22; // numeric.md — 22pt. Inter 700. Used for medium data values.
export const fontSizeHeadingLg = 20; // heading.lg — 20pt. Inter 600. Used for section headings (rewards, trips).
export const fontSizeHeadingMd = 17; // heading.md — 17pt. Inter 600. Used for screen titles (Settings).
export const fontSizeHeadingSm = 15; // heading.sm — 15pt. Inter 600. Used for subsection headings (Payment Methods).
export const fontSizeBodyLg = 17; // body.lg — 17pt. Inter 400. Used for primary body copy.
export const fontSizeBodyMd = 15; // body.md — 15pt. Inter 400. Used for standard body copy.
export const fontSizeBodySm = 13; // body.sm — 13pt. Inter 400. Used for secondary / supplemental copy.
export const fontSizeLabelMd = 13; // label.md — 13pt. Inter 600. Used for tags, status labels, member badges.
export const fontSizeLabelSm = 11; // label.sm — 11pt. Inter 500. Used for metadata, counts.
export const fontSizeOverline = 10; // overline — 10pt. Inter 500. Uppercase, 0.12em tracking. Used for section meta labels (e.g. SAFETY STATUS).
export const fontLineHeightDisplayXl = 42; // display.xl line height — 42pt (Flutter height multiplier: 42/40 = 1.05)
export const fontLineHeightDisplayLg = 36; // display.lg line height — 36pt (Flutter height multiplier: 36/32 = 1.125)
export const fontLineHeightDisplayMd = 32; // display.md line height — 32pt (Flutter height multiplier: 32/28 ≈ 1.143)
export const fontLineHeightNumericLg = 30; // numeric.lg line height — 30pt (Flutter height multiplier: 30/28 ≈ 1.071)
export const fontLineHeightNumericMd = 26; // numeric.md line height — 26pt (Flutter height multiplier: 26/22 ≈ 1.182)
export const fontLineHeightHeadingLg = 26; // heading.lg line height — 26pt (Flutter height multiplier: 26/20 = 1.3)
export const fontLineHeightHeadingMd = 24; // heading.md line height — 24pt (Flutter height multiplier: 24/17 ≈ 1.412)
export const fontLineHeightHeadingSm = 20; // heading.sm line height — 20pt (Flutter height multiplier: 20/15 ≈ 1.333)
export const fontLineHeightBodyLg = 26; // body.lg line height — 26pt (Flutter height multiplier: 26/17 ≈ 1.529)
export const fontLineHeightBodyMd = 22; // body.md line height — 22pt (Flutter height multiplier: 22/15 ≈ 1.467)
export const fontLineHeightBodySm = 18; // body.sm line height — 18pt (Flutter height multiplier: 18/13 ≈ 1.385)
export const fontLineHeightLabelMd = 16; // label.md line height — 16pt (Flutter height multiplier: 16/13 ≈ 1.231)
export const fontLineHeightLabelSm = 14; // label.sm line height — 14pt (Flutter height multiplier: 14/11 ≈ 1.273)
export const fontLineHeightOverline = 14; // overline line height — 14pt (Flutter height multiplier: 14/10 = 1.4)
export const fontWeightDisplayXl = 700; // display.xl font weight — bold
export const fontWeightDisplayLg = 700; // display.lg font weight — bold
export const fontWeightDisplayMd = 700; // display.md font weight — bold
export const fontWeightNumericLg = 700; // numeric.lg font weight — bold
export const fontWeightNumericMd = 700; // numeric.md font weight — bold
export const fontWeightHeadingLg = 600; // heading.lg font weight — semibold
export const fontWeightHeadingMd = 600; // heading.md font weight — semibold
export const fontWeightHeadingSm = 600; // heading.sm font weight — semibold
export const fontWeightBodyLg = 400; // body.lg font weight — regular
export const fontWeightBodyMd = 400; // body.md font weight — regular
export const fontWeightBodySm = 400; // body.sm font weight — regular
export const fontWeightLabelMd = 600; // label.md font weight — semibold
export const fontWeightLabelSm = 500; // label.sm font weight — medium
export const fontWeightOverline = 500; // overline font weight — medium
export const fontTrackingDisplayXl = 0; // display.xl letter spacing — 0em
export const fontTrackingDisplayLg = 0; // display.lg letter spacing — 0em
export const fontTrackingDisplayMd = 0; // display.md letter spacing — 0em
export const fontTrackingNumericLg = -0.02; // numeric.lg letter spacing — -0.02em (negative tracking on large numeric sizes)
export const fontTrackingNumericMd = -0.02; // numeric.md letter spacing — -0.02em (negative tracking on large numeric sizes)
export const fontTrackingHeadingLg = -0.01; // heading.lg letter spacing — -0.01em
export const fontTrackingHeadingMd = 0; // heading.md letter spacing — 0em
export const fontTrackingHeadingSm = 0; // heading.sm letter spacing — 0em
export const fontTrackingBodyLg = 0; // body.lg letter spacing — 0em
export const fontTrackingBodyMd = 0; // body.md letter spacing — 0em
export const fontTrackingBodySm = 0; // body.sm letter spacing — 0em
export const fontTrackingLabelMd = 0; // label.md letter spacing — 0em
export const fontTrackingLabelSm = 0; // label.sm letter spacing — 0em
export const fontTrackingOverline = 0.12; // overline letter spacing — 0.12em (positive tracking, uppercase). Unit is em; multiply by font size to get pt value.
export const typeDisplayXl = {
  fontFamily: "Manjari",
  fontSize: 40,
  fontWeight: 700,
  lineHeight: 42,
  letterSpacing: 0,
}; // display.xl — 40pt/42pt LH/700 weight. Manjari. Greetings, hero headlines.
export const typeDisplayLg = {
  fontFamily: "Manjari",
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 36,
  letterSpacing: 0,
}; // display.lg — 32pt/36pt LH/700 weight. Manjari. Names, section heroes.
export const typeDisplayMd = {
  fontFamily: "Manjari",
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 32,
  letterSpacing: 0,
}; // display.md — 28pt/32pt LH/700 weight. Manjari. Primary actions, booking CTAs.
export const typeNumericLg = {
  fontFamily: "Inter",
  fontSize: 28,
  fontWeight: 700,
  lineHeight: 30,
  letterSpacing: -0.02,
}; // numeric.lg — 28pt/30pt LH/700 weight. Inter. Large data values (points, distances).
export const typeNumericMd = {
  fontFamily: "Inter",
  fontSize: 22,
  fontWeight: 700,
  lineHeight: 26,
  letterSpacing: -0.02,
}; // numeric.md — 22pt/26pt LH/700 weight. Inter. Medium data values.
export const typeHeadingLg = {
  fontFamily: "Inter",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 26,
  letterSpacing: -0.01,
}; // heading.lg — 20pt/26pt LH/600 weight. Inter. Section headings (rewards, trips).
export const typeHeadingMd = {
  fontFamily: "Inter",
  fontSize: 17,
  fontWeight: 600,
  lineHeight: 24,
  letterSpacing: 0,
}; // heading.md — 17pt/24pt LH/600 weight. Inter. Screen titles (Settings).
export const typeHeadingSm = {
  fontFamily: "Inter",
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 20,
  letterSpacing: 0,
}; // heading.sm — 15pt/20pt LH/600 weight. Inter. Subsection headings (Payment Methods).
export const typeBodyLg = {
  fontFamily: "Inter",
  fontSize: 17,
  fontWeight: 400,
  lineHeight: 26,
  letterSpacing: 0,
}; // body.lg — 17pt/26pt LH/400 weight. Inter. Primary body copy.
export const typeBodyMd = {
  fontFamily: "Inter",
  fontSize: 15,
  fontWeight: 400,
  lineHeight: 22,
  letterSpacing: 0,
}; // body.md — 15pt/22pt LH/400 weight. Inter. Standard body copy.
export const typeBodySm = {
  fontFamily: "Inter",
  fontSize: 13,
  fontWeight: 400,
  lineHeight: 18,
  letterSpacing: 0,
}; // body.sm — 13pt/18pt LH/400 weight. Inter. Secondary / supplemental copy.
export const typeLabelMd = {
  fontFamily: "Inter",
  fontSize: 13,
  fontWeight: 600,
  lineHeight: 16,
  letterSpacing: 0,
}; // label.md — 13pt/16pt LH/600 weight. Inter. Tags, status labels, member badges.
export const typeLabelSm = {
  fontFamily: "Inter",
  fontSize: 11,
  fontWeight: 500,
  lineHeight: 14,
  letterSpacing: 0,
}; // label.sm — 11pt/14pt LH/500 weight. Inter. Metadata, counts.
export const typeOverline = {
  fontFamily: "Inter",
  fontSize: 10,
  fontWeight: 500,
  lineHeight: 14,
  letterSpacing: 0.12,
}; // overline — 10pt/14pt LH/500 weight. Inter. Uppercase. 0.12em tracking. Section meta labels (e.g. SAFETY STATUS).
