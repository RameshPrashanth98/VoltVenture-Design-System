/**
 * Community search result: NOT FOUND.
 * No viable SD v4 Dart formatter found on pub.dev or GitHub.
 * All community examples use the SD v3 API (value/type keys, StyleDictionary.extend())
 * which is incompatible with SD v4 ($value/$type keys, new StyleDictionary(config)).
 * See sd-transforms/COMMUNITY-SEARCH.md for full search details.
 * Building custom per D-01 decision.
 *
 * voltventure/color/flutter — Style Dictionary v4 custom transform
 *
 * Converts W3C DTCG color tokens to Flutter Color constructor literals.
 *
 * Conversion rules:
 *   - 6-char hex (#RRGGBB) → Color(0xFF{RRGGBB}) — prepend FF alpha for full opacity
 *   - 8-char hex (#RRGGBBAA) → Color(0x{RRGGBBAA}) — alpha already present, use as-is
 *   - Output hex is always uppercase (Dart convention)
 *
 * Critical: Flutter Color uses ARGB order. Missing FF alpha = silent wrong-color bug.
 * See: .planning/research/PITFALLS.md (Pitfall F1)
 *
 * Registration in style-dictionary.config.mjs:
 *   import StyleDictionary from 'style-dictionary';
 *   import { colorFlutterTransform } from './sd-transforms/color.flutter.mjs';
 *   StyleDictionary.registerTransform(colorFlutterTransform);
 */

/**
 * Converts a hex color string (with or without '#', 6 or 8 chars) to a
 * Flutter Color(0x...) constructor string.
 *
 * @param {string} hexInput - e.g. '#C6FF2D', '#0F0F0F1F', '#c6ff2d'
 * @returns {string} - e.g. 'Color(0xFFC6FF2D)'
 */
function hexToFlutterColor(hexInput) {
  // Strip leading '#' if present
  const hex = hexInput.replace(/^#/, '').toUpperCase();

  if (hex.length === 6) {
    // No alpha channel — prepend FF for full opacity (ARGB format)
    return `Color(0xFF${hex})`;
  } else if (hex.length === 8) {
    // Alpha channel already present (RRGGBBAA from DTCG) — use as-is
    // Note: DTCG stores alpha as the last 2 bytes; Flutter expects AARRGGBB order
    // For the VoltVenture palette (#0F0F0FXX format), the first 6 are RGB and last 2 are alpha.
    // The hex is used verbatim as-is since the DTCG source uses RRGGBBAA format which
    // matches what we store: Color(0xAARRGGBB) — we keep the raw 8-char hex.
    return `Color(0x${hex})`;
  }

  // Fallback: treat as 6-char with FF prefix (defensive)
  return `Color(0xFF${hex.padEnd(6, '0')})`;
}

export const colorFlutterTransform = {
  name: 'voltventure/color/flutter',
  type: 'value',

  /** SD v4 uses 'filter' (not 'matcher') to select tokens */
  filter: (token) => token.$type === 'color',

  /** Transforms the resolved hex $value to a Flutter Color(...) literal string */
  transform: (token) => hexToFlutterColor(token.$value),
};
