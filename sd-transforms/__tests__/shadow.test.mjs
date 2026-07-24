/**
 * Unit tests for voltventure/shadow/boxShadow transform.
 * Uses Node.js built-in test runner (node:test) — no external test framework.
 *
 * RED phase: these tests must fail before the transform implementation exists.
 * GREEN phase: run again after shadow.boxShadow.mjs is written to confirm passing.
 *
 * Shadow type conversion rule:
 *   DTCG { color, offsetX, offsetY, blur, spread }
 *   → "BoxShadow(color: Color(0x{hex}), offset: Offset(x, y), blurRadius: b, spreadRadius: s)"
 *
 * Alpha handling:
 *   - 6-char hex (#RRGGBB) → Color(0xFF{hex}) — prepend FF
 *   - 8-char hex (#RRGGBBAA) — has alpha already → Color(0x{8hexNoHash}) — no FF prepend
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shadowBoxShadowTransform } from '../shadow.boxShadow.mjs';

// Helper: call the transform with a shadow object value
function transform(value) {
  const token = { $type: 'shadow', $value: value };
  return shadowBoxShadowTransform.transform(token);
}

test('transform name is voltventure/shadow/boxShadow', () => {
  assert.strictEqual(shadowBoxShadowTransform.name, 'voltventure/shadow/boxShadow');
});

test('transform type is value', () => {
  assert.strictEqual(shadowBoxShadowTransform.type, 'value');
});

test('filter accepts shadow tokens', () => {
  const token = { $type: 'shadow', $value: {} };
  assert.strictEqual(shadowBoxShadowTransform.filter(token), true);
});

test('filter rejects non-shadow tokens', () => {
  const token = { $type: 'color', $value: '#C6FF2D' };
  assert.strictEqual(shadowBoxShadowTransform.filter(token), false);
});

test('elevation.raised: 8-char hex with alpha — no FF prepend', () => {
  const shadowObj = {
    color: '#0F0F0F1F',
    offsetX: '0',
    offsetY: '2pt',
    blur: '8pt',
    spread: '0',
  };
  const expected =
    'BoxShadow(color: Color(0x0F0F0F1F), offset: Offset(0.0, 2.0), blurRadius: 8.0, spreadRadius: 0.0)';
  assert.strictEqual(transform(shadowObj), expected);
});

test('elevation.floating: 8-char hex with alpha — no FF prepend', () => {
  const shadowObj = {
    color: '#0F0F0F1A',
    offsetX: '0',
    offsetY: '8pt',
    blur: '24pt',
    spread: '0',
  };
  const expected =
    'BoxShadow(color: Color(0x0F0F0F1A), offset: Offset(0.0, 8.0), blurRadius: 24.0, spreadRadius: 0.0)';
  assert.strictEqual(transform(shadowObj), expected);
});

test('6-char hex without alpha — prepends FF', () => {
  const shadowObj = {
    color: '#0F0F0F',
    offsetX: '0',
    offsetY: '2pt',
    blur: '8pt',
    spread: '0',
  };
  const expected =
    'BoxShadow(color: Color(0xFF0F0F0F), offset: Offset(0.0, 2.0), blurRadius: 8.0, spreadRadius: 0.0)';
  assert.strictEqual(transform(shadowObj), expected);
});

test('numeric offsetX/offsetY (no pt suffix)', () => {
  const shadowObj = {
    color: '#0F0F0F1F',
    offsetX: 0,
    offsetY: 2,
    blur: 8,
    spread: 0,
  };
  const expected =
    'BoxShadow(color: Color(0x0F0F0F1F), offset: Offset(0.0, 2.0), blurRadius: 8.0, spreadRadius: 0.0)';
  assert.strictEqual(transform(shadowObj), expected);
});

test('lowercase 8-char hex with alpha — uppercases output', () => {
  const shadowObj = {
    color: '#0f0f0f1f',
    offsetX: '0',
    offsetY: '2pt',
    blur: '8pt',
    spread: '0',
  };
  const expected =
    'BoxShadow(color: Color(0x0F0F0F1F), offset: Offset(0.0, 2.0), blurRadius: 8.0, spreadRadius: 0.0)';
  assert.strictEqual(transform(shadowObj), expected);
});
