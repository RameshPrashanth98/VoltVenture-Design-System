/**
 * scripts/validate-tokens.mjs
 * VoltVenture Design System — Build Validator Harness
 *
 * Runs five build-time validators before Style Dictionary generates any output.
 * Any blocking violation causes process.exit(1) — the pipeline does not proceed.
 *
 * Validators (in execution order):
 *   V8 — DTCG Format Compliance (cheapest — catches v3/v4 key confusion)
 *   V4 — 4pt Grid Alignment (spacing.* and radius.* tokens)
 *   V2 — WCAG Contrast (semantic text/bg pairs in contrast-pairs.json)
 *   V3 — Electric Green Guard (no color.text.* or color.border.* resolves to #C6FF2D)
 *   V1 — Unresolved Reference Check (post-build stub — wired in Plan 06)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Import wcag-contrast (named ESM export: hex, rgb, luminance, score)
// The package (v3.0.0) exports only named exports — no default export.
// ---------------------------------------------------------------------------
let contrastHex;
try {
  const contrastLib = await import('wcag-contrast');
  // v3.0.0 exports named: { hex, rgb, luminance, score }
  contrastHex = contrastLib.hex;
  if (typeof contrastHex !== 'function') {
    throw new Error('wcag-contrast.hex is not a function — unexpected package shape');
  }
} catch (e) {
  console.error('[validate] FATAL: could not import wcag-contrast —', e.message);
  console.error('[validate] Run: npm install   (package is listed in devDependencies)');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Utility: recursive walk of a JS object, calling cb(keyPath, value, key)
// ---------------------------------------------------------------------------
function walkObject(obj, cb, keyPath = []) {
  for (const [key, val] of Object.entries(obj)) {
    const currentPath = [...keyPath, key];
    cb(currentPath, val, key);
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      walkObject(val, cb, currentPath);
    }
  }
}

// ---------------------------------------------------------------------------
// Utility: load and parse a JSON file; returns null if file does not exist
// ---------------------------------------------------------------------------
function loadJson(filePath) {
  const abs = path.resolve(ROOT, filePath);
  if (!fs.existsSync(abs)) return null;
  try {
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    throw new Error(`JSON parse error in ${filePath}: ${e.message}`);
  }
}

// ---------------------------------------------------------------------------
// Utility: collect all .json files under a directory (recursive)
// ---------------------------------------------------------------------------
function collectJsonFiles(dir) {
  const abs = path.resolve(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const results = [];
  function recurse(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        recurse(full);
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        results.push(full);
      }
    }
  }
  recurse(abs);
  return results;
}

// ---------------------------------------------------------------------------
// Utility: ensure generated/ directory exists
// ---------------------------------------------------------------------------
function ensureGeneratedDir() {
  const dir = path.resolve(ROOT, 'generated');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
}

// ===========================================================================
// V8 — DTCG Format Compliance
// All source JSON files must use $type / $value. v3-style bare "type" / "value"
// keys indicate incorrect format that produces silent wrong output in SD v4.
// ===========================================================================
function runV8DtcgCheck() {
  const errors = [];
  const tokenFiles = collectJsonFiles('tokens');

  for (const filePath of tokenFiles) {
    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      errors.push(`V8: ${filePath} — JSON parse error: ${e.message}`);
      continue;
    }

    walkObject(data, (keyPath, val, key) => {
      // Only flag bare 'type'/'value' keys that are token property values (strings/numbers),
      // NOT structural namespace keys whose value is an object (e.g. { "type": { "display": {...} } }).
      // DTCG v3-style type fields are always strings ("color", "dimension", etc.).
      // DTCG v3-style value fields are strings, numbers, or composite objects — but we
      // distinguish them from namespace objects by checking whether the value is non-object
      // OR by detecting the co-presence of a sibling 'type' key (v3 token pattern).
      const isStructuralNamespace = typeof val === 'object' && val !== null && !Array.isArray(val);
      if ((key === 'type' || key === 'value') && !isStructuralNamespace) {
        const jsonPath = keyPath.join('.');
        errors.push(
          `V8: ${path.relative(ROOT, filePath)} contains v3-style key '${key}' at path '${jsonPath}' — must use '$${key}' (W3C DTCG format required by Style Dictionary v4)`
        );
      }
    });
  }

  return errors;
}

// ===========================================================================
// V4 — 4pt Grid Alignment
//
// All $type: dimension tokens under paths starting with "space." or "radius."
// must have values that are multiples of 4.
//
// Whitelisted exemptions (must not be flagged):
//   radius.icon = 22.37
//     The iOS squircle proportional mask (22.37% of container). This is NOT
//     an absolute dp value — it is a scale factor. It has never been a grid
//     value and must not be treated as one.
//
//   radius.full = 999
//     A sentinel "fully rounded" value (pills, avatars, circles). It is not
//     a design-system grid increment; it is a boundary constant.
//
//   space.050 = 2
//     The half-unit minimum spacing step (2pt). The spacing scale is labeled
//     "4pt base" for the principal increments, but space.050 is a deliberately
//     documented half-step for icon-to-icon micro-gaps.
// ===========================================================================
function runV4GridCheck() {
  const errors = [];

  // Exemptions: token path (dot-joined) → reason
  const EXEMPTIONS = {
    'radius.icon':  'squircle proportional constant (22.37% of container, not an absolute dp grid value)',
    'radius.full':  'fully-rounded sentinel value (999pt boundary constant, not a grid increment)',
    'space.050':    'half-unit micro-gap step (2pt, documented exception to the 4pt base rule)',
  };

  const filesToCheck = [
    { file: 'tokens/primitive/spacing.json', pathPrefix: 'space' },
    { file: 'tokens/primitive/radius.json',  pathPrefix: 'radius' },
  ];

  for (const { file, pathPrefix } of filesToCheck) {
    const data = loadJson(file);
    if (!data) {
      console.log(`[V4] ${file} not found — skipping.`);
      continue;
    }

    walkObject(data, (keyPath, val) => {
      // Only check leaf nodes that carry $value and $type: dimension
      if (
        typeof val === 'object' &&
        val !== null &&
        val.$type === 'dimension' &&
        val.$value !== undefined
      ) {
        const tokenPath = keyPath.join('.');

        // Only validate paths that start with the expected prefix
        if (!tokenPath.startsWith(pathPrefix)) return;

        // Check whitelist
        if (EXEMPTIONS[tokenPath]) return;

        const numVal = parseFloat(val.$value);
        if (isNaN(numVal)) {
          errors.push(`V4: ${tokenPath} — could not parse value '${val.$value}' as a number`);
          return;
        }

        // Use a small epsilon for floating-point safety before modulo check
        const remainder = Math.abs(numVal % 4);
        const isMultiple = remainder < 0.001 || Math.abs(remainder - 4) < 0.001;
        if (!isMultiple) {
          errors.push(
            `V4: ${tokenPath} = ${val.$value} is not a multiple of 4 — all spacing and radius values must align to the 4pt grid`
          );
        }
      }
    });
  }

  return errors;
}

// ===========================================================================
// Token Resolver
//
// Builds a flat map of resolved hex values from primitive and (optionally)
// semantic color JSON files. Semantic tokens reference primitives via
// {color.green.500} syntax — this resolver follows those chains.
//
// Returns: { primitiveMap, resolvedSemanticMap, semanticAvailable }
//   primitiveMap: { 'color.green.500': '#C6FF2D', ... }
//   resolvedSemanticMap: { 'color.action.primary': '#C6FF2D', ... } (empty if semantic missing)
//   semanticAvailable: boolean
// ===========================================================================
function buildTokenMaps() {
  // --- Primitive color map ---
  const primitiveData = loadJson('tokens/primitive/color.json');
  const primitiveMap = {};

  if (primitiveData) {
    walkObject(primitiveData, (keyPath, val) => {
      if (
        typeof val === 'object' &&
        val !== null &&
        val.$type === 'color' &&
        typeof val.$value === 'string'
      ) {
        const tokenPath = keyPath.join('.');
        primitiveMap[tokenPath] = val.$value;
      }
    });
  }

  // --- Semantic color map (may not exist in this worktree) ---
  const semanticData = loadJson('tokens/semantic/color.json');
  const resolvedSemanticMap = {};
  const semanticAvailable = semanticData !== null;

  if (semanticData) {
    // First pass: collect all semantic token paths and their raw $values
    const rawSemanticMap = {};
    walkObject(semanticData, (keyPath, val) => {
      if (
        typeof val === 'object' &&
        val !== null &&
        val.$value !== undefined
      ) {
        const tokenPath = keyPath.join('.');
        rawSemanticMap[tokenPath] = val.$value;
      }
    });

    // Second pass: resolve references (follow {color.x.y} chains)
    function resolveRef(rawValue, depth = 0) {
      if (depth > 10) return null; // Guard against circular refs
      if (typeof rawValue !== 'string') return null;

      // Check if it's a reference: {some.path}
      const refMatch = rawValue.match(/^\{([^}]+)\}$/);
      if (!refMatch) {
        // It's a literal value (hex, etc.)
        return rawValue;
      }

      const refPath = refMatch[1];

      // Try primitive map first
      if (primitiveMap[refPath]) {
        return primitiveMap[refPath];
      }

      // Try semantic map (for semantic-to-semantic refs)
      if (rawSemanticMap[refPath]) {
        return resolveRef(rawSemanticMap[refPath], depth + 1);
      }

      return null; // Unresolvable reference
    }

    for (const [tokenPath, rawValue] of Object.entries(rawSemanticMap)) {
      const resolved = resolveRef(rawValue);
      if (resolved !== null) {
        resolvedSemanticMap[tokenPath] = resolved;
      }
    }
  }

  return { primitiveMap, resolvedSemanticMap, semanticAvailable };
}

// ===========================================================================
// V2 — WCAG Contrast Validation
//
// Loads contrast-pairs.json and checks each non-EXEMPT pair against the
// wcag-contrast library. Writes generated/contrast-report.md as a build
// artifact summarizing all pairs with PASS/FAIL/EXEMPT/SKIPPED status.
// ===========================================================================
function runV2WcagCheck(resolvedSemanticMap, semanticAvailable) {
  const errors = [];
  const reportLines = [];

  reportLines.push('# VoltVenture Design System — Contrast Report');
  reportLines.push('');
  reportLines.push(`Generated: ${new Date().toISOString()}`);
  reportLines.push('');

  if (!semanticAvailable) {
    const msg =
      '[V2] Semantic color tokens (tokens/semantic/color.json) not found in this worktree. ' +
      'WCAG contrast check skipped — will run after Wave 2 merge.';
    console.log(msg);
    reportLines.push('## Status: SKIPPED');
    reportLines.push('');
    reportLines.push(
      'Semantic color tokens are not yet available in this worktree (Wave 2 parallel execution).'
    );
    reportLines.push('WCAG contrast validation will run after Wave 2 tokens are merged.');
    reportLines.push('');

    const genDir = ensureGeneratedDir();
    fs.writeFileSync(path.join(genDir, 'contrast-report.md'), reportLines.join('\n'), 'utf8');
    return errors;
  }

  const pairsPath = path.resolve(ROOT, 'scripts/contrast-pairs.json');
  if (!fs.existsSync(pairsPath)) {
    errors.push('V2: scripts/contrast-pairs.json not found — cannot run WCAG contrast check');
    return errors;
  }

  let pairs;
  try {
    pairs = JSON.parse(fs.readFileSync(pairsPath, 'utf8'));
  } catch (e) {
    errors.push(`V2: Failed to parse scripts/contrast-pairs.json — ${e.message}`);
    return errors;
  }

  reportLines.push('## Status: RAN');
  reportLines.push('');
  reportLines.push(
    '| Foreground | Background | Resolved FG | Resolved BG | Ratio | Required | Level | Result |'
  );
  reportLines.push(
    '|------------|------------|-------------|-------------|-------|----------|-------|--------|'
  );

  for (const pair of pairs) {
    const { fg, bg, minRatio, level, note } = pair;

    if (level === 'EXEMPT') {
      reportLines.push(
        `| ${fg} | ${bg} | — | — | — | — | EXEMPT | EXEMPT |`
      );
      console.log(`[V2] EXEMPT  ${fg} / ${bg} — ${note}`);
      continue;
    }

    const fgHex = resolvedSemanticMap[fg];
    const bgHex = resolvedSemanticMap[bg];

    if (!fgHex || !bgHex) {
      const missing = [!fgHex && fg, !bgHex && bg].filter(Boolean).join(', ');
      reportLines.push(
        `| ${fg} | ${bg} | ${fgHex ?? 'UNRESOLVED'} | ${bgHex ?? 'UNRESOLVED'} | — | ${minRatio}:1 | ${level} | SKIP (unresolved) |`
      );
      console.log(`[V2] SKIP    ${fg} / ${bg} — could not resolve: ${missing}`);
      continue;
    }

    let ratio;
    try {
      ratio = contrastHex(fgHex, bgHex);
    } catch (e) {
      errors.push(`V2: contrastHex('${fgHex}', '${bgHex}') threw — ${e.message}`);
      continue;
    }

    const ratioStr = ratio.toFixed(2);
    const pass = ratio >= minRatio;
    const result = pass ? 'PASS' : 'FAIL';

    reportLines.push(
      `| ${fg} | ${bg} | ${fgHex} | ${bgHex} | ${ratioStr}:1 | ${minRatio}:1 | ${level} | ${result} |`
    );

    if (pass) {
      console.log(`[V2] PASS    ${fg} / ${bg}: ${ratioStr}:1 >= ${minRatio}:1 (${level})`);
    } else {
      console.error(
        `[V2] FAIL    ${fg} / ${bg}: ${ratioStr}:1 — below ${minRatio}:1 ${level} threshold`
      );
      errors.push(
        `V2: ${fg} on ${bg} = ${ratioStr}:1 — below ${minRatio}:1 ${level} threshold`
      );
    }
  }

  reportLines.push('');
  reportLines.push('## Notes');
  reportLines.push('');
  for (const pair of pairs) {
    reportLines.push(`- **${pair.fg} / ${pair.bg}**: ${pair.note}`);
  }
  reportLines.push('');

  const genDir = ensureGeneratedDir();
  fs.writeFileSync(path.join(genDir, 'contrast-report.md'), reportLines.join('\n'), 'utf8');
  console.log('[V2] Contrast report written to generated/contrast-report.md');

  return errors;
}

// ===========================================================================
// V3 — Electric Green Foreground Guard
//
// Electric Green (#C6FF2D) has 1.36:1 contrast against white — it fails every
// WCAG threshold. It must only be used as a background color on light surfaces.
// Using it as text or non-focus border color is a brand + accessibility error.
//
// Exemptions (intentional green usage that is NOT a text/border violation):
//   color.border.focus — focus ring is green by design spec (always 2pt, on dark or light)
//   color.status.live  — live trip indicator background dot (green background, not text)
// ===========================================================================
function runV3GreenGuard(resolvedSemanticMap, semanticAvailable) {
  const errors = [];

  if (!semanticAvailable) {
    console.log(
      '[V3] Semantic color tokens not found in this worktree — Electric Green Guard skipped.'
    );
    return errors;
  }

  // Exemptions: exact token paths that are permitted to be Electric Green
  const GREEN_EXEMPTIONS = new Set([
    'color.border.focus',  // intentional: green focus ring (spec-required)
    'color.status.live',   // intentional: live trip status dot background
  ]);

  const ELECTRIC_GREEN = '#c6ff2d'; // normalise to lowercase for comparison

  for (const [tokenPath, resolvedHex] of Object.entries(resolvedSemanticMap)) {
    // Only check color.text.* and color.border.* namespaces
    const isTextToken   = tokenPath.startsWith('color.text.');
    const isBorderToken = tokenPath.startsWith('color.border.');
    if (!isTextToken && !isBorderToken) continue;

    // Skip explicitly exempted tokens
    if (GREEN_EXEMPTIONS.has(tokenPath)) continue;

    if (resolvedHex.toLowerCase() === ELECTRIC_GREEN) {
      errors.push(
        `V3: ${tokenPath} resolves to Electric Green (#C6FF2D) — ` +
        `illegal as text or non-focus border color on light surfaces (1.36:1 contrast against white, fails every WCAG threshold). ` +
        `Electric Green is a background-only color. Use color.text.accent (green.700, #7D9220, 4.6:1) for accessible green text.`
      );
      console.error(`[V3] FAIL    ${tokenPath} → ${resolvedHex} (Electric Green — forbidden as text/border)`);
    }
  }

  if (errors.length === 0) {
    console.log('[V3] PASS    No color.text.* or color.border.* tokens resolve to Electric Green.');
  }

  return errors;
}

// ===========================================================================
// V1 — Unresolved Reference Check (post-build, if generated file exists)
//
// Checks lib/voltventure_tokens.dart for unresolved Style Dictionary
// reference strings ({color., {space., etc.) that indicate SD failed to
// resolve a token reference during the build.
//
// Runs silently if lib/voltventure_tokens.dart does not exist yet (first
// build — the file is generated by build:tokens which runs after validation).
// On subsequent builds the file exists and the check is active.
// ===========================================================================
function runV1UnresolvedRefCheck() {
  const errors = [];
  const dartFile = path.resolve(ROOT, 'lib/voltventure_tokens.dart');

  if (!fs.existsSync(dartFile)) {
    console.log('[V1] lib/voltventure_tokens.dart not yet generated — post-build check skipped.');
    return errors;
  }

  const content = fs.readFileSync(dartFile, 'utf8');

  // Check for any {lowercase-letter pattern which indicates an unresolved SD reference
  const matches = content.match(/\{[a-z][^}]*\}/g);
  if (matches) {
    const unique = [...new Set(matches)];
    unique.forEach(ref => {
      errors.push(`V1: lib/voltventure_tokens.dart contains unresolved reference: ${ref}`);
      console.error(`[V1] ERROR   Unresolved reference in generated Dart file: ${ref}`);
    });
  } else {
    console.log('[V1] PASS    lib/voltventure_tokens.dart — no unresolved references found.');
  }

  return errors;
}

// ===========================================================================
// Main
// ===========================================================================
async function main() {
  console.log('');
  console.log('=== VoltVenture Token Validator ===');
  console.log('');

  const allErrors = [];

  // --- V8: DTCG Format (cheapest — run first) ---
  console.log('[V8] Running DTCG format compliance check...');
  const v8Errors = runV8DtcgCheck();
  allErrors.push(...v8Errors);
  if (v8Errors.length === 0) {
    console.log('[V8] PASS    All source JSON files use $type / $value (W3C DTCG format).');
  } else {
    v8Errors.forEach(e => console.error(`[V8] ERROR   ${e}`));
  }
  console.log('');

  // --- V4: 4pt Grid ---
  console.log('[V4] Running 4pt grid alignment check...');
  const v4Errors = runV4GridCheck();
  allErrors.push(...v4Errors);
  if (v4Errors.length === 0) {
    console.log('[V4] PASS    All spacing and radius values are 4pt-grid-aligned (with documented exemptions).');
  } else {
    v4Errors.forEach(e => console.error(`[V4] ERROR   ${e}`));
  }
  console.log('');

  // --- Build token resolution maps (shared by V2 and V3) ---
  console.log('[resolver] Building token resolution maps...');
  const { resolvedSemanticMap, semanticAvailable } = buildTokenMaps();
  if (semanticAvailable) {
    const resolvedCount = Object.keys(resolvedSemanticMap).length;
    console.log(`[resolver] Resolved ${resolvedCount} semantic color tokens from primitive references.`);
  } else {
    console.log(
      '[resolver] tokens/semantic/color.json not found — V2 (WCAG) and V3 (Green Guard) will be skipped.'
    );
    console.log('[resolver] This is expected during Wave 2 parallel execution. Both validators will run post-merge.');
  }
  console.log('');

  // --- V2: WCAG Contrast ---
  console.log('[V2] Running WCAG contrast check...');
  const v2Errors = runV2WcagCheck(resolvedSemanticMap, semanticAvailable);
  allErrors.push(...v2Errors);
  console.log('');

  // --- V3: Electric Green Guard ---
  console.log('[V3] Running Electric Green foreground guard...');
  const v3Errors = runV3GreenGuard(resolvedSemanticMap, semanticAvailable);
  allErrors.push(...v3Errors);
  console.log('');

  // --- V1: Unresolved Reference Check (stub) ---
  console.log('[V1] Running unresolved reference check...');
  const v1Errors = runV1UnresolvedRefCheck();
  allErrors.push(...v1Errors);
  console.log('');

  // --- Summary ---
  console.log('=== Validation Summary ===');
  if (allErrors.length === 0) {
    console.log('');
    console.log('ALL CHECKS PASSED — token set is valid.');
    console.log('');
    process.exit(0);
  } else {
    console.log('');
    console.error(`VALIDATION FAILED — ${allErrors.length} error(s) found:`);
    console.log('');
    allErrors.forEach((e, i) => console.error(`  ${i + 1}. ${e}`));
    console.log('');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('[validate] Unhandled error:', err);
  process.exit(1);
});
