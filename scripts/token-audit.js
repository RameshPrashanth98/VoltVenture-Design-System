#!/usr/bin/env node
/**
 * scripts/token-audit.js — Token compliance auditor
 *
 * Scans project source files for hardcoded CSS values that should reference tokens.
 * Prints: file · line number · violation · suggested token.
 * Exit code 1 if any ERRORs found  →  CI-safe gate.
 *
 * Usage:
 *   node scripts/token-audit.js                # scan full project
 *   node scripts/token-audit.js stories/       # scan a subdirectory
 *   node scripts/token-audit.js --no-warnings  # errors only
 *   node scripts/token-audit.js --json         # machine-readable output
 */

import { readFileSync, readdirSync } from 'fs';
import { join, relative, resolve, extname } from 'path';
import { fileURLToPath }               from 'url';

const __dir = fileURLToPath(new URL('.', import.meta.url));
const ROOT  = resolve(__dir, '..');

// ─── CLI ────────────────────────────────────────────────────────────────────
const argv        = process.argv.slice(2);
const SHOW_WARN   = !argv.includes('--no-warnings');
const JSON_MODE   = argv.includes('--json');
const CUSTOM_PATH = argv.find(a => !a.startsWith('--')) ?? null;
const SCAN_ROOT   = CUSTOM_PATH ? resolve(ROOT, CUSTOM_PATH) : ROOT;

// ─── Skip lists ─────────────────────────────────────────────────────────────
const SKIP_DIRS  = new Set(['node_modules', '.claude', 'lib', 'images', '.planning', '.git', 'dist', 'storybook-static']);
const SKIP_FILES = new Set(['tokens.css', 'token-audit.js', 'validate-tokens.mjs']);
const SCAN_EXTS  = new Set(['.css', '.scss', '.js', '.ts', '.html']);

// ─── Token lookup maps ───────────────────────────────────────────────────────

/** Exact hex (6 or 8 chars, normalized lowercase) → suggested token(s) */
const HEX_MAP = {
  '#0f0f0f':   '--vv-color-text-primary | --vv-color-surface-inverse | --vv-color-action-secondary',
  '#ffffff':   '--vv-color-surface-base | --vv-color-action-secondary-fg | --vv-color-text-on-inverse',
  '#fafafa':   '--ds-color-grey-050',
  '#f5f5f5':   '--vv-color-surface-sunken',
  '#ebebeb':   '--vv-color-border-subtle',
  '#c9c9c9':   '--vv-color-text-disabled',
  '#808080':   '--vv-color-text-secondary',
  '#4a4a4a':   '--ds-color-grey-700',
  '#2f2f2f':   '--ds-color-grey-800',
  '#1a1a1a':   '--ds-color-grey-900',
  '#f4ffd9':   '--ds-color-green-100',
  '#ddff7a':   '--vv-color-action-primary-hover',
  '#c6ff2d':   '--vv-color-action-primary | --vv-color-border-focus | --vv-color-status-live',
  '#a8de1a':   '--vv-color-action-primary-pressed',
  '#7d9220':   '--vv-color-text-accent',
  // 8-char alpha variants
  '#0f0f0f0f': 'elevation-raised shadow color — use var(--vv-elevation-raised)',
  '#0f0f0f1a': 'elevation-floating shadow color — use var(--vv-elevation-floating)',
  '#0f0f0f29': 'elevation-overlay shadow color — use var(--vv-elevation-overlay)',
  '#0f0f0fdd': 'dark overlay (87%) — define --vv-color-scrim or use rgba(15,15,15,0.87)',
  '#00000088': 'generic black overlay — prefer rgba(15,15,15,α) for brand consistency',
  // shorthand 3-char
  '#111':      '--vv-color-text-primary  /* #111 ≈ #111111 ≈ Volt Black */',
  '#fff':      '--vv-color-surface-base',
  '#000':      '--vv-color-text-primary  /* #000000 — use Volt Black #0F0F0F instead */',
};

/** rgba(R,G,B,…) RGB-key "r,g,b" → suggestion */
const RGBA_MAP = {
  '15,15,15':   '--vv-color-text-primary + opacity, or define an alpha token',
  '198,255,45': '--vv-color-action-primary + opacity',
  '168,222,26': '--vv-color-action-primary-pressed + opacity',
  '0,0,0':      'Use rgba(15,15,15,α) — Volt Black, not pure black',
};

/** px → spacing token */
const SPACE_MAP = {
  '2px':  'var(--vv-space-1)',
  '4px':  'var(--vv-space-2)',
  '8px':  'var(--vv-space-3)',
  '12px': 'var(--vv-space-4)',
  '16px': 'var(--vv-space-5)  /* or --vv-space-screen-margin */',
  '20px': 'var(--vv-space-6)  /* or --vv-space-card-padding */',
  '24px': 'var(--vv-space-7)  /* or --vv-space-button-h */',
  '32px': 'var(--vv-space-8)  /* or --vv-space-section-gap */',
  '40px': 'var(--vv-space-9)',
  '48px': 'var(--vv-space-10) /* or --vv-space-touch-target */',
  '64px': 'var(--vv-space-11)',
};

/** font-size px → token(s) */
const FSIZE_MAP = {
  '10px': 'var(--vv-text-overline-size)',
  '11px': 'var(--vv-text-label-sm-size)',
  '13px': 'var(--vv-text-body-sm-size) | var(--vv-text-label-md-size)',
  '15px': 'var(--vv-text-heading-sm-size) | var(--vv-text-body-md-size)',
  '17px': 'var(--vv-text-heading-md-size) | var(--vv-text-body-lg-size)',
  '20px': 'var(--vv-text-heading-lg-size)',
  '22px': 'var(--vv-text-numeric-md-size)',
  '28px': 'var(--vv-text-display-md-size) | var(--vv-text-numeric-lg-size)',
  '32px': 'var(--vv-text-display-lg-size)',
  '40px': 'var(--vv-text-display-xl-size)',
};

/** font-weight → token */
const WEIGHT_MAP = {
  '400': 'var(--ds-font-weight-body)',
  '500': 'var(--ds-font-weight-label-sm)  /* overline weight */',
  '600': 'var(--ds-font-weight-heading)   /* also --ds-font-weight-label-md */',
  '700': 'var(--ds-font-weight-display)   /* also --ds-font-weight-numeric */',
};

/** border-radius px → token */
const RADIUS_MAP = {
  '8px':   'var(--vv-radius-xs)',
  '12px':  'var(--vv-radius-sm)',
  '16px':  'var(--vv-radius-md)',
  '20px':  'var(--vv-radius-lg)',
  '28px':  'var(--vv-radius-xl)',
  '36px':  'var(--vv-radius-2xl)',
  '999px': 'var(--vv-radius-full)',
};

/** z-index numeric → token */
const Z_MAP = {
  '0': 'var(--vv-z-base)',
  '1': 'var(--vv-z-raised)',
  '2': 'var(--vv-z-sticky)',
  '3': 'var(--vv-z-overlay)',
  '4': 'var(--vv-z-drawer)',
  '5': 'var(--vv-z-modal)',
  '6': 'var(--vv-z-toast)',
};

/** transition/animation duration → token */
const DURATION_MAP = {
  '0ms':    'var(--vv-duration-instant)',
  '100ms':  'var(--vv-duration-fast)',
  '150ms':  'var(--vv-duration-quick)',
  '200ms':  'var(--vv-duration-standard)',
  '300ms':  'var(--vv-duration-deliberate)',
  '2000ms': 'var(--vv-duration-loop)',
  '0.1s':   'var(--vv-duration-fast)',
  '0.2s':   'var(--vv-duration-standard)',
  '0.3s':   'var(--vv-duration-deliberate)',
  '1.5s':   'var(--vv-duration-loop)  /* or define --vv-duration-pulse */',
  '2s':     'var(--vv-duration-loop)',
};

// ─── Rule engine ─────────────────────────────────────────────────────────────
//
// Each rule returns an array of hit objects:
//   { value, suggestion, known, severityOverride? }
//
// severityOverride lets a rule demote a hit to 'warning' even if the rule
// default is 'error' (e.g. off-grid spacing where no token exists).

const COLOR_PROPS = 'background(?:-color)?|color|border(?:-(?:top|right|bottom|left))?(?:-color)?|fill|stroke|outline(?:-color)?|text-decoration-color';

const RULES = [

  // ── Hex colors in CSS color-property context ─────────────────────────────
  {
    id: 'hex-color', category: 'COLOR', severity: 'error',
    scan(line) {
      const hits = [];
      // Match: <color-prop>: ... #RRGGBB[AA]
      const re = new RegExp(
        `(?:${COLOR_PROPS})\\s*:[^;\\n"'\`{]*?(#[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?|#[0-9a-fA-F]{3}(?![0-9a-fA-F]))`,
        'gi'
      );
      let m;
      while ((m = re.exec(line)) !== null) {
        const raw = m[1];
        const key = raw.toLowerCase();
        const sug = HEX_MAP[key];
        hits.push({ value: raw, suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── rgba/rgb in CSS color-property context ────────────────────────────────
  {
    id: 'rgba-color', category: 'COLOR', severity: 'warning',
    scan(line) {
      const hits = [];
      const re = new RegExp(
        `(?:${COLOR_PROPS})\\s*:[^;\\n"'\`{]*?(rgba?\\([^)]+\\))`,
        'gi'
      );
      let m;
      while ((m = re.exec(line)) !== null) {
        const raw  = m[1];
        const nums = raw.match(/[\d.]+/g) ?? [];
        const key  = nums.slice(0, 3).map(n => Math.round(parseFloat(n))).join(',');
        const sug  = RGBA_MAP[key];
        hits.push({ value: raw, suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── Hardcoded spacing (padding/margin/gap) ────────────────────────────────
  {
    id: 'spacing', category: 'SPACING', severity: 'error',
    scan(line) {
      const hits = [];
      const re   = /(?:padding(?:-(?:top|right|bottom|left))?|margin(?:-(?:top|right|bottom|left))?|gap|column-gap|row-gap|inset(?:-(?:top|right|bottom|left))?)\s*:[^;"\n`{]*?(\b(\d+)px)\b/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const px  = m[1];
        const num = parseInt(m[2], 10);
        if (num === 0) continue; // 0 is always valid
        const sug = SPACE_MAP[px];
        if (sug) {
          hits.push({ value: px, suggestion: sug, known: true });
        } else if (num % 4 !== 0) {
          const nearest = Math.round(num / 4) * 4;
          hits.push({
            value: px,
            suggestion: `Off 4px grid — nearest on-grid: ${nearest}px`,
            known: false,
            severityOverride: 'warning',
          });
        }
        // on-grid unknown values (e.g. 28px in spacing) → skip (not a design system spacing token)
      }
      return hits;
    },
  },

  // ── Hardcoded font-size ───────────────────────────────────────────────────
  {
    id: 'font-size', category: 'FONT_SIZE', severity: 'error',
    scan(line) {
      const hits = [];
      const re   = /font-size\s*:\s*([0-9.]+(?:px|pt))/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const val = m[1].toLowerCase();
        const sug = FSIZE_MAP[val];
        hits.push({ value: m[1], suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── Hardcoded font-weight ─────────────────────────────────────────────────
  {
    id: 'font-weight', category: 'FONT_WEIGHT', severity: 'error',
    scan(line) {
      const hits = [];
      const re   = /font-weight\s*:\s*([0-9]{3})\b/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const val = m[1];
        const sug = WEIGHT_MAP[val];
        hits.push({ value: val, suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── Hardcoded border-radius ───────────────────────────────────────────────
  {
    id: 'border-radius', category: 'RADIUS', severity: 'error',
    scan(line) {
      const hits = [];
      // multi-value border-radius: can have 1-4 px values
      const re = /border-radius\s*:[^;"\n`{]*?(\b\d+px)\b/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const val = m[1];
        if (val === '0px') continue;
        const sug = RADIUS_MAP[val];
        hits.push({ value: val, suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── Hardcoded box-shadow ──────────────────────────────────────────────────
  {
    id: 'box-shadow', category: 'ELEVATION', severity: 'error',
    scan(line) {
      const hits = [];
      const re   = /box-shadow\s*:\s*([^;"\n`{]+)/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const raw = m[1].trim();
        if (/var\s*\(\s*--/.test(raw)) continue; // already tokenized

        let sug = null;
        if      (/0\s+2px\s+8px/.test(raw))   sug = 'var(--vv-elevation-raised)';
        else if (/0\s+8px\s+24px/.test(raw))  sug = 'var(--vv-elevation-floating)';
        else if (/0\s+16px\s+48px/.test(raw)) sug = 'var(--vv-elevation-overlay)';
        else if (/rgba\(198,255,45/.test(raw)) sug = 'Electric Green glow — no token yet; candidate for --vv-elevation-glow';

        const display = raw.length > 60 ? raw.slice(0, 60) + '…' : raw;
        hits.push({ value: display, suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── Hardcoded z-index  (warning) ─────────────────────────────────────────
  {
    id: 'z-index', category: 'Z_INDEX', severity: 'warning',
    scan(line) {
      const hits = [];
      const re   = /z-index\s*:\s*([0-9]+)/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const val = m[1];
        const sug = Z_MAP[val];
        hits.push({ value: val, suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

  // ── Raw duration in transition/animation  (warning) ───────────────────────
  {
    id: 'duration', category: 'MOTION', severity: 'warning',
    scan(line) {
      const hits = [];
      const re   = /(?:transition|animation)[^:;\n"'`]*:\s*[^;"\n`{]*?(\b\d+(?:\.\d+)?(?:ms|s)\b)/gi;
      let m;
      while ((m = re.exec(line)) !== null) {
        const val = m[1].toLowerCase();
        const sug = DURATION_MAP[val];
        hits.push({ value: m[1], suggestion: sug ?? null, known: !!sug });
      }
      return hits;
    },
  },

];

// ─── Line-level skip heuristics ──────────────────────────────────────────────

function shouldSkipLine(line) {
  const t = line.trim();
  if (!t) return true;
  // Pure comment lines
  if (t.startsWith('//') || t.startsWith('*') || t.startsWith('/*') || t.startsWith('#!')) return true;
  // CSS variable definition (the var being declared, not consumed)
  if (/^\s*--[\w-]+\s*:/.test(line)) return true;
  // Source map or data URL noise
  if (t.startsWith('//# source') || t.includes('data:image/')) return true;
  return false;
}

// ─── File walker ─────────────────────────────────────────────────────────────

function* walkFiles(dir) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); }
  catch { return; }

  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) yield* walkFiles(full);
    } else if (e.isFile()) {
      if (SKIP_FILES.has(e.name)) continue;
      if (SCAN_EXTS.has(extname(e.name))) yield full;
    }
  }
}

// ─── Per-file scanner ────────────────────────────────────────────────────────

function scanFile(filePath) {
  let src;
  try { src = readFileSync(filePath, 'utf8'); }
  catch { return []; }

  const lines      = src.split('\n');
  const violations = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (shouldSkipLine(line)) continue;

    for (const rule of RULES) {
      const sev = rule.severity;
      if (sev === 'warning' && !SHOW_WARN) continue;

      const hits = rule.scan(line);
      for (const hit of hits) {
        const effectiveSev = hit.severityOverride ?? sev;
        if (effectiveSev === 'warning' && !SHOW_WARN) continue;

        violations.push({
          line:       i + 1,
          ruleId:     rule.id,
          category:   rule.category,
          severity:   effectiveSev,
          value:      hit.value,
          suggestion: hit.suggestion,
          known:      hit.known,
          context:    line.trim().slice(0, 100),
        });
      }
    }
  }

  // Deduplicate: same line + same value within one file can be flagged by multiple rules
  const seen = new Set();
  return violations.filter(v => {
    const key = `${v.line}:${v.value}:${v.ruleId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ─── Output helpers ───────────────────────────────────────────────────────────

const IS_TTY  = process.stdout.isTTY && !process.env.NO_COLOR;
const C = IS_TTY ? {
  reset:  '\x1b[0m',  bold:   '\x1b[1m',  dim:    '\x1b[2m',
  red:    '\x1b[31m', yellow: '\x1b[33m', green:  '\x1b[32m',
  cyan:   '\x1b[36m', grey:   '\x1b[90m', white:  '\x1b[97m',
} : Object.fromEntries(['reset','bold','dim','red','yellow','green','cyan','grey','white'].map(k=>[k,'']));

const ERR_BADGE = `${C.red}${C.bold}✕ ERR${C.reset}`;
const WRN_BADGE = `${C.yellow}⚠ WRN${C.reset}`;

function badge(sev) { return sev === 'error' ? ERR_BADGE : WRN_BADGE; }
function catTag(cat) { return `${C.cyan}[${cat}]${C.reset}`; }

// ─── Main ─────────────────────────────────────────────────────────────────────

let totalFiles   = 0;
let totalErrors  = 0;
let totalWarnings = 0;
const allResults  = [];

// Supports both a directory and a single file as the scan target
function* scanTargets(target) {
  try {
    readdirSync(target);       // succeeds → target is a directory
    yield* walkFiles(target);
  } catch {
    // target is a single file
    const base = target.split(/[/\\]/).pop();
    if (!SKIP_FILES.has(base) && SCAN_EXTS.has(extname(base))) yield target;
  }
}

for (const file of scanTargets(SCAN_ROOT)) {
  totalFiles++;
  const violations = scanFile(file);
  if (!violations.length) continue;

  // Sort: errors first, then by line number
  violations.sort((a, b) =>
    a.severity !== b.severity ? (a.severity === 'error' ? -1 : 1) : a.line - b.line
  );

  totalErrors   += violations.filter(v => v.severity === 'error').length;
  totalWarnings += violations.filter(v => v.severity === 'warning').length;
  allResults.push({ file, violations });
}

// Sort files: most errors first
allResults.sort((a, b) => {
  const ae = a.violations.filter(v => v.severity === 'error').length;
  const be = b.violations.filter(v => v.severity === 'error').length;
  return be - ae || b.violations.length - a.violations.length;
});

// ── JSON output ───────────────────────────────────────────────────────────────

if (JSON_MODE) {
  console.log(JSON.stringify({
    summary: { totalFiles, filesWithViolations: allResults.length, totalErrors, totalWarnings },
    files: allResults.map(({ file, violations }) => ({
      file: relative(ROOT, file),
      errors:   violations.filter(v => v.severity === 'error').length,
      warnings: violations.filter(v => v.severity === 'warning').length,
      violations: violations.map(v => ({
        line:       v.line,
        severity:   v.severity,
        category:   v.category,
        value:      v.value,
        suggestion: v.suggestion,
        context:    v.context,
      })),
    })),
  }, null, 2));
  process.exit(totalErrors > 0 ? 1 : 0);
}

// ── Human-readable output ─────────────────────────────────────────────────────

const SEP  = '═'.repeat(68);
const SEP2 = '─'.repeat(68);

console.log(`\n${C.bold}${SEP}${C.reset}`);
console.log(`${C.bold}  TOKEN AUDIT — VoltVenture Design System${C.reset}`);
console.log(`${C.bold}${SEP}${C.reset}\n`);

if (allResults.length === 0) {
  console.log(`${C.green}${C.bold}  ✓ All clean — no token violations found.${C.reset}\n`);
} else {
  for (const { file, violations } of allResults) {
    const rel  = relative(ROOT, file);
    const errs = violations.filter(v => v.severity === 'error').length;
    const wrns = violations.filter(v => v.severity === 'warning').length;
    const counts = [
      errs  ? `${C.red}${errs}e${C.reset}`    : null,
      wrns  ? `${C.yellow}${wrns}w${C.reset}` : null,
    ].filter(Boolean).join('  ');

    console.log(`${C.bold}● ${rel}${C.reset}  ${counts}`);

    for (const v of violations) {
      const lineStr = `${C.grey}line ${String(v.line).padStart(4)}${C.reset}`;
      const cat     = catTag(v.category).padEnd(14 + (IS_TTY ? 19 : 0));
      const val     = `${C.bold}${v.value}${C.reset}`;

      console.log(`  ${badge(v.severity)}  ${lineStr}  ${cat}  ${val}`);

      if (v.suggestion) {
        const label = v.known ? 'Token:' : 'Hint: ';
        console.log(`           ${C.grey}${label}${C.reset} ${v.suggestion}`);
      } else {
        console.log(`           ${C.grey}No matching token — add one or verify intent${C.reset}`);
      }
    }
    console.log();
  }
}

console.log(SEP2);
console.log(`${C.bold}  SUMMARY${C.reset}`);
console.log(SEP2);

const errClr = totalErrors   > 0 ? C.red    : C.green;
const wrnClr = totalWarnings > 0 ? C.yellow : C.green;
console.log(`  ${errClr}${C.bold}Errors:${C.reset}   ${errClr}${String(totalErrors).padStart(5)}${C.reset}   ${C.grey}hardcoded color, spacing, size, radius, elevation  →  CI gate${C.reset}`);
if (SHOW_WARN) {
  console.log(`  ${wrnClr}Warnings:${C.reset} ${wrnClr}${String(totalWarnings).padStart(5)}${C.reset}   ${C.grey}rgba, duration, z-index, off-grid spacing  →  no CI block${C.reset}`);
}
console.log(`  Files:    ${String(allResults.length).padStart(5)}   of ${totalFiles} scanned  (${SCAN_ROOT === ROOT ? 'full project' : relative(ROOT, SCAN_ROOT)})`);
console.log(SEP2);

if (totalErrors > 0) {
  console.log(`\n${C.red}${C.bold}  ✕ ${totalErrors} error(s) found — exiting 1.${C.reset}\n`);
} else if (totalWarnings > 0 && SHOW_WARN) {
  console.log(`\n${C.yellow}  ⚠ No errors. ${totalWarnings} warning(s) to review.${C.reset}\n`);
} else {
  console.log(`\n${C.green}${C.bold}  ✓ No errors found.${C.reset}\n`);
}

process.exit(totalErrors > 0 ? 1 : 0);
