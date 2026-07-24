/**
 * voltventure/lineHeight/multiplier — Style Dictionary v4 custom transform
 *
 * Converts absolute lineHeight values (in pt) to Flutter TextStyle.height multipliers.
 *
 * Flutter TextStyle.height is a multiplier (not absolute):
 *   height = lineHeight_pt / fontSize_pt
 *
 * Example: 20pt line height on 16pt font → height: 1.25
 *
 * The transform receives a composite token $value with both lineHeight and fontSize.
 * The pure helper function computeLineHeightMultiplier(lineHeight, fontSize) is
 * exported separately for unit-testability without SD infrastructure.
 *
 * Output format: Dart double string with trailing zeros stripped:
 *   - 1.2500 → '1.25'
 *   - 1.0000 → '1'
 *   - 1.1429 → '1.1429' (4 significant decimal places max)
 *
 * See: .planning/research/PITFALLS.md (Flutter line-height multiplier)
 *
 * Registration in style-dictionary.config.mjs:
 *   import StyleDictionary from 'style-dictionary';
 *   import { lineHeightMultiplierTransform } from './sd-transforms/lineHeight.multiplier.mjs';
 *   StyleDictionary.registerTransform(lineHeightMultiplierTransform);
 */

/**
 * Pure helper: computes Flutter TextStyle.height multiplier from absolute values.
 *
 * @param {number} lineHeight - absolute line height in pt (e.g. 20)
 * @param {number} fontSize - font size in pt (e.g. 16)
 * @returns {string} - Dart double string with trailing zeros stripped (e.g. '1.25')
 */
export function computeLineHeightMultiplier(lineHeight, fontSize) {
  const multiplier = lineHeight / fontSize;

  // toFixed(4) for up to 4 decimal places, then strip trailing zeros and trailing dot
  const fixed = multiplier.toFixed(4);

  // Remove trailing zeros after decimal point, then trailing dot if nothing after it
  return fixed.replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

export const lineHeightMultiplierTransform = {
  name: 'voltventure/lineHeight/multiplier',
  type: 'value',

  /**
   * Transforms the composite { lineHeight, fontSize } $value to a Flutter height multiplier.
   * The token $value must be a composite object: { lineHeight: number, fontSize: number }.
   */
  transform: (token) => {
    const { lineHeight, fontSize } = token.$value;
    return computeLineHeightMultiplier(lineHeight, fontSize);
  },
};
