/**
 * voltventure/shadow/boxShadow — Style Dictionary v4 custom transform
 *
 * Converts W3C DTCG shadow tokens to Flutter BoxShadow constructor literal strings.
 *
 * Conversion rules for each shadow object:
 *   { color, offsetX, offsetY, blur, spread }
 *   →  "BoxShadow(color: Color(0x{hex}), offset: Offset(x.0, y.0), blurRadius: b.0, spreadRadius: s.0)"
 *
 * Color alpha handling (CRITICAL):
 *   - 6-char hex (#RRGGBB) → Color(0xFF{RRGGBB}) — prepend FF for full opacity
 *   - 8-char hex (#RRGGBBAA) → Color(0x{RRGGBBAA}) — alpha already present, use as-is
 *   - Output hex is always uppercase
 *
 * Dimension values (offsetX, offsetY, blur, spread):
 *   - Strip 'pt' suffix if present; parse as float; emit as N.0
 *
 * See: .planning/research/PITFALLS.md (shadow → BoxShadow mapping)
 *
 * Registration in style-dictionary.config.mjs:
 *   import StyleDictionary from 'style-dictionary';
 *   import { shadowBoxShadowTransform } from './sd-transforms/shadow.boxShadow.mjs';
 *   StyleDictionary.registerTransform(shadowBoxShadowTransform);
 */

/**
 * Converts a hex color string (with or without '#', 6 or 8 chars) to a
 * Flutter Color(0x...) constructor string.
 *
 * @param {string} hexInput - e.g. '#0F0F0F1F', '#0F0F0F'
 * @returns {string} - e.g. 'Color(0x0F0F0F1F)', 'Color(0xFF0F0F0F)'
 */
function hexToFlutterColor(hexInput) {
  const hex = hexInput.replace(/^#/, '').toUpperCase();
  if (hex.length === 8) {
    // Alpha already present — use as-is
    return `Color(0x${hex})`;
  }
  // 6-char hex — prepend FF for full opacity
  return `Color(0xFF${hex})`;
}

/**
 * Converts a dimension value (number or 'Npt' string) to a Dart double string.
 *
 * @param {number|string} value - e.g. '2pt', 0, '8pt', 0
 * @returns {string} - e.g. '2.0', '0.0'
 */
function toDimDouble(value) {
  const num = parseFloat(String(value));
  return num.toFixed(1);
}

/**
 * Converts a single DTCG shadow object to a Flutter BoxShadow constructor string.
 *
 * @param {{ color: string, offsetX: string|number, offsetY: string|number, blur: string|number, spread: string|number }} shadow
 * @returns {string}
 */
function shadowToBoxShadow(shadow) {
  const colorStr = hexToFlutterColor(shadow.color);
  const x = toDimDouble(shadow.offsetX);
  const y = toDimDouble(shadow.offsetY);
  const blur = toDimDouble(shadow.blur);
  const spread = toDimDouble(shadow.spread);

  return `BoxShadow(color: ${colorStr}, offset: Offset(${x}, ${y}), blurRadius: ${blur}, spreadRadius: ${spread})`;
}

export const shadowBoxShadowTransform = {
  name: 'voltventure/shadow/boxShadow',
  type: 'value',

  /** SD v4 uses 'filter' (not 'matcher') to select tokens */
  filter: (token) => token.$type === 'shadow',

  /**
   * Transforms the resolved shadow $value to a BoxShadow literal string.
   * Handles both single shadow object and array of shadow objects.
   */
  transform: (token) => {
    const value = token.$value;

    // DTCG allows "none" as a valid shadow value meaning no shadow
    if (value === 'none' || value === '' || value == null) {
      return 'none';
    }

    if (Array.isArray(value)) {
      // Multiple shadows — return comma-joined list (caller wraps in List<BoxShadow>[...])
      return value.map(shadowToBoxShadow).join(', ');
    }

    // Single shadow object
    return shadowToBoxShadow(value);
  },
};
