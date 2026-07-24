/**
 * Unit tests for voltventure/lineHeight/multiplier transform.
 * Uses Node.js built-in test runner (node:test) — no external test framework.
 *
 * RED phase: these tests must fail before the transform implementation exists.
 * GREEN phase: run again after lineHeight.multiplier.mjs is written to confirm passing.
 *
 * Flutter TextStyle.height is a multiplier, not an absolute value.
 * Formula: height = lineHeight / fontSize
 * Example: 20pt line height on 16pt font → height: 1.25
 *
 * The pure helper function computeLineHeightMultiplier(lineHeight, fontSize)
 * is exported separately for testability. The SD transform wraps it.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  lineHeightMultiplierTransform,
  computeLineHeightMultiplier,
} from '../lineHeight.multiplier.mjs';

test('transform name is voltventure/lineHeight/multiplier', () => {
  assert.strictEqual(lineHeightMultiplierTransform.name, 'voltventure/lineHeight/multiplier');
});

test('transform type is value', () => {
  assert.strictEqual(lineHeightMultiplierTransform.type, 'value');
});

// computeLineHeightMultiplier pure helper tests
test('20 / 16 = 1.25', () => {
  assert.strictEqual(computeLineHeightMultiplier(20, 16), '1.25');
});

test('36 / 32 = 1.125', () => {
  assert.strictEqual(computeLineHeightMultiplier(36, 32), '1.125');
});

test('42 / 40 = 1.05', () => {
  assert.strictEqual(computeLineHeightMultiplier(42, 40), '1.05');
});

test('24 / 16 = 1.5', () => {
  assert.strictEqual(computeLineHeightMultiplier(24, 16), '1.5');
});

test('16 / 14 = 1.142857... truncates trailing zeros after rounding', () => {
  // 16/14 = 1.142857142857... → toFixed(4) = '1.1429', no trailing zeros to trim
  assert.strictEqual(computeLineHeightMultiplier(16, 14), '1.1429');
});

test('20 / 20 = 1 (no trailing zeros)', () => {
  assert.strictEqual(computeLineHeightMultiplier(20, 20), '1');
});

test('integer-exact result has no trailing decimal or zeros', () => {
  // 18/12 = 1.5 (not 1.5000)
  assert.strictEqual(computeLineHeightMultiplier(18, 12), '1.5');
});

// Test the SD transform function receives { lineHeight, fontSize } as $value
test('SD transform function receives composite value and returns multiplier string', () => {
  const token = { $type: 'lineHeight', $value: { lineHeight: 20, fontSize: 16 } };
  const result = lineHeightMultiplierTransform.transform(token);
  assert.strictEqual(result, '1.25');
});

test('SD transform: 42/40 via composite value', () => {
  const token = { $type: 'lineHeight', $value: { lineHeight: 42, fontSize: 40 } };
  const result = lineHeightMultiplierTransform.transform(token);
  assert.strictEqual(result, '1.05');
});
