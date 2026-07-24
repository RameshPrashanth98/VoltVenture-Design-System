/**
 * Unit tests for voltventure/color/flutter transform.
 * Uses Node.js built-in test runner (node:test) — no external test framework.
 *
 * RED phase: these tests must fail before the transform implementation exists.
 * GREEN phase: run again after color.flutter.mjs is written to confirm passing.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { colorFlutterTransform } from '../color.flutter.mjs';

// Helper: call the transform function with a minimal token object
function transform(value) {
  const token = { $type: 'color', $value: value };
  return colorFlutterTransform.transform(token);
}

test('transform name is voltventure/color/flutter', () => {
  assert.strictEqual(colorFlutterTransform.name, 'voltventure/color/flutter');
});

test('transform type is value', () => {
  assert.strictEqual(colorFlutterTransform.type, 'value');
});

test('filter accepts color tokens', () => {
  const token = { $type: 'color', $value: '#C6FF2D' };
  assert.strictEqual(colorFlutterTransform.filter(token), true);
});

test('filter rejects non-color tokens', () => {
  const token = { $type: 'dimension', $value: '16pt' };
  assert.strictEqual(colorFlutterTransform.filter(token), false);
});

test('converts #C6FF2D to Color(0xFFC6FF2D)', () => {
  assert.strictEqual(transform('#C6FF2D'), 'Color(0xFFC6FF2D)');
});

test('converts #0F0F0F to Color(0xFF0F0F0F)', () => {
  assert.strictEqual(transform('#0F0F0F'), 'Color(0xFF0F0F0F)');
});

test('converts #FFFFFF to Color(0xFFFFFFFF)', () => {
  assert.strictEqual(transform('#FFFFFF'), 'Color(0xFFFFFFFF)');
});

test('uppercases hex in output (Dart convention)', () => {
  assert.strictEqual(transform('#c6ff2d'), 'Color(0xFFC6FF2D)');
});

test('handles 8-char hex with alpha (no FF prepend)', () => {
  // #0F0F0F1F — 8 chars including alpha channel; must NOT prepend FF
  assert.strictEqual(transform('#0F0F0F1F'), 'Color(0x0F0F0F1F)');
});

test('handles 8-char hex with lowercase alpha', () => {
  // #0f0f0f1a — lowercase 8-char with alpha; uppercase and use as-is
  assert.strictEqual(transform('#0f0f0f1a'), 'Color(0x0F0F0F1A)');
});
