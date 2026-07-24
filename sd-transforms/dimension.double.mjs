/**
 * voltventure/dimension/double — Style Dictionary v4 custom transform
 *
 * Converts W3C DTCG dimension tokens to Dart double literals.
 *
 * Conversion rules:
 *   - Numeric value 16 → '16.0'
 *   - String value '16pt' → '16.0' (strips 'pt' suffix)
 *   - String value '0' → '0.0'
 *   - Always emits a string with at least one decimal place (Dart double, not int)
 *
 * Note: Flutter uses density-independent logical pixels (dp). Token values in the
 * W3C JSON source use unitless numbers or 'pt' suffix. The 'pt' suffix is stripped
 * here — Flutter does not use unit strings; the double is the raw pixel value.
 * See: .planning/PROJECT.md (Constraints — Platform: Flutter)
 *
 * Registration in style-dictionary.config.mjs:
 *   import StyleDictionary from 'style-dictionary';
 *   import { dimensionDoubleTransform } from './sd-transforms/dimension.double.mjs';
 *   StyleDictionary.registerTransform(dimensionDoubleTransform);
 */

/**
 * Converts a dimension value (number or 'Npt' string) to a Dart double string.
 *
 * @param {number|string} value - e.g. 16, '16pt', '999pt', 0, '0'
 * @returns {string} - e.g. '16.0', '999.0', '0.0'
 */
function toDartDouble(value) {
  let num;

  if (typeof value === 'number') {
    num = value;
  } else {
    // String — strip 'pt' suffix (or any trailing non-numeric chars) and parse
    num = parseFloat(String(value));
  }

  // toFixed(1) ensures exactly one decimal place: 16 → '16.0', 999 → '999.0'
  return num.toFixed(1);
}

export const dimensionDoubleTransform = {
  name: 'voltventure/dimension/double',
  type: 'value',

  /** SD v4 uses 'filter' (not 'matcher') to select tokens */
  filter: (token) => token.$type === 'dimension',

  /** Transforms the resolved dimension $value to a Dart double string */
  transform: (token) => toDartDouble(token.$value),
};
