/**
 * Unit tests for voltventure/dimension/double transform.
 * Uses Node.js built-in test runner (node:test) — no external test framework.
 *
 * RED phase: these tests must fail before the transform implementation exists.
 * GREEN phase: run again after dimension.double.mjs is written to confirm passing.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dimensionDoubleTransform } from '../dimension.double.mjs';

// Helper: call the transform function with a minimal token object
function transform(value) {
  const token = { $type: 'dimension', $value: value };
  return dimensionDoubleTransform.transform(token);
}

test('transform name is voltventure/dimension/double', () => {
  assert.strictEqual(dimensionDoubleTransform.name, 'voltventure/dimension/double');
});

test('transform type is value', () => {
  assert.strictEqual(dimensionDoubleTransform.type, 'value');
});

test('filter accepts dimension tokens', () => {
  const token = { $type: 'dimension', $value: 16 };
  assert.strictEqual(dimensionDoubleTransform.filter(token), true);
});

test('filter rejects non-dimension tokens', () => {
  const token = { $type: 'color', $value: '#C6FF2D' };
  assert.strictEqual(dimensionDoubleTransform.filter(token), false);
});

test('numeric value 16 emits 16.0', () => {
  assert.strictEqual(transform(16), '16.0');
});

test('string value "16pt" emits 16.0', () => {
  assert.strictEqual(transform('16pt'), '16.0');
});

test('numeric value 2 emits 2.0', () => {
  assert.strictEqual(transform(2), '2.0');
});

test('numeric value 999 emits 999.0', () => {
  assert.strictEqual(transform(999), '999.0');
});

test('string value "999pt" emits 999.0', () => {
  assert.strictEqual(transform('999pt'), '999.0');
});

test('numeric value 4 emits 4.0', () => {
  assert.strictEqual(transform(4), '4.0');
});

test('numeric value 0 emits 0.0', () => {
  assert.strictEqual(transform(0), '0.0');
});

test('string value "0" emits 0.0', () => {
  assert.strictEqual(transform('0'), '0.0');
});
