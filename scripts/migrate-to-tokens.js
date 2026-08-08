// scripts/migrate-to-tokens.js
// Replaces hardcoded CSS values in story files with CSS custom property var() references.
// Run: node scripts/migrate-to-tokens.js [--dry-run]

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT        = path.resolve(__dirname, '..');
const STORIES_DIR = path.join(ROOT, 'stories');
const DRY_RUN     = process.argv.includes('--dry-run');

// ── Token maps ───────────────────────────────────────────────────────────────

const SPACING = {
  '2px':  'var(--vv-space-1)',
  '4px':  'var(--vv-space-2)',
  '8px':  'var(--vv-space-3)',
  '12px': 'var(--vv-space-4)',
  '16px': 'var(--vv-space-5)',
  '20px': 'var(--vv-space-6)',
  '24px': 'var(--vv-space-7)',
  '32px': 'var(--vv-space-8)',
  '40px': 'var(--vv-space-9)',
  '48px': 'var(--vv-space-10)',
  '64px': 'var(--vv-space-11)',
};

const RADIUS = {
  '8px':   'var(--vv-radius-xs)',
  '12px':  'var(--vv-radius-sm)',
  '16px':  'var(--vv-radius-md)',
  '20px':  'var(--vv-radius-lg)',
  '28px':  'var(--vv-radius-xl)',
  '36px':  'var(--vv-radius-2xl)',
  '999px': 'var(--vv-radius-full)',
  '50%':   'var(--vv-radius-full)',
};

const FONT_SIZE = {
  '40px': 'var(--vv-text-display-xl-size)',
  '32px': 'var(--vv-text-display-lg-size)',
  '28px': 'var(--vv-text-display-md-size)',
  '22px': 'var(--vv-text-numeric-md-size)',
  '20px': 'var(--vv-text-heading-lg-size)',
  '17px': 'var(--vv-text-heading-md-size)',
  '15px': 'var(--vv-text-body-md-size)',
  '13px': 'var(--vv-text-body-sm-size)',
  '11px': 'var(--vv-text-label-sm-size)',
  '10px': 'var(--vv-text-overline-size)',
};

const FONT_WEIGHT = {
  '700': 'var(--ds-font-weight-display)',
  '600': 'var(--ds-font-weight-heading)',
  '500': 'var(--ds-font-weight-label-sm)',
  '400': 'var(--ds-font-weight-body)',
};

const BOX_SHADOW = {
  'none':                                  'var(--vv-elevation-flat)',
  '0 2px 8px 0 rgba(15,15,15,0.06)':      'var(--vv-elevation-raised)',
  '0 8px 24px 0 rgba(15,15,15,0.10)':     'var(--vv-elevation-floating)',
  '0 16px 48px 0 rgba(15,15,15,0.16)':    'var(--vv-elevation-overlay)',
  '0 2px 8px 0 rgba(15, 15, 15, 0.06)':   'var(--vv-elevation-raised)',
  '0 8px 24px 0 rgba(15, 15, 15, 0.10)':  'var(--vv-elevation-floating)',
  '0 16px 48px 0 rgba(15, 15, 15, 0.16)': 'var(--vv-elevation-overlay)',
};

const Z_INDEX = {
  '0': 'var(--vv-z-base)',
  '1': 'var(--vv-z-raised)',
  '2': 'var(--vv-z-sticky)',
  '3': 'var(--vv-z-overlay)',
  '4': 'var(--vv-z-drawer)',
  '5': 'var(--vv-z-modal)',
  '6': 'var(--vv-z-toast)',
};

// Duration map — longer values first to prevent partial matches
const DURATION = [
  ['2000ms', 'var(--vv-duration-loop)'],
  ['300ms',  'var(--vv-duration-deliberate)'],
  ['200ms',  'var(--vv-duration-standard)'],
  ['150ms',  'var(--vv-duration-quick)'],
  ['100ms',  'var(--vv-duration-fast)'],
];

// Easing — most-specific first so ease-in-out isn't partially matched by ease-in or ease
const EASING = [
  ['ease-in-out', 'var(--vv-easing-loop)'],
  ['ease-out',    'var(--vv-easing-decelerate)'],
  ['ease-in',     'var(--vv-easing-accelerate)'],
  ['ease',        'var(--vv-easing-standard)'],
];

// Color maps are property-aware: same hex can mean different things on color vs background
const COLOR_BY_PROP = {
  'color': {
    '#0f0f0f': 'var(--vv-color-text-primary)',
    '#ffffff': 'var(--vv-color-text-on-inverse)',
    '#808080': 'var(--vv-color-text-secondary)',
    '#c9c9c9': 'var(--vv-color-text-disabled)',
    '#7d9220': 'var(--vv-color-text-accent)',
    '#c6ff2d': 'var(--vv-color-action-primary)',
    '#a8de1a': 'var(--vv-color-action-primary-pressed)',
    '#ddff7a': 'var(--vv-color-action-primary-hover)',
    '#ebebeb': 'var(--vv-color-border-subtle)',
    '#f5f5f5': 'var(--vv-color-surface-sunken)',
    '#4a4a4a': 'var(--ds-color-grey-700)',
    '#2f2f2f': 'var(--ds-color-grey-800)',
    '#1a1a1a': 'var(--ds-color-grey-900)',
    '#fafafa': 'var(--ds-color-grey-050)',
  },
  'background': {
    '#0f0f0f': 'var(--vv-color-surface-inverse)',
    '#ffffff': 'var(--vv-color-surface-base)',
    '#f5f5f5': 'var(--vv-color-surface-sunken)',
    '#fafafa': 'var(--ds-color-grey-050)',
    '#c6ff2d': 'var(--vv-color-action-primary)',
    '#ddff7a': 'var(--vv-color-action-primary-hover)',
    '#a8de1a': 'var(--vv-color-action-primary-pressed)',
    '#ebebeb': 'var(--vv-color-border-subtle)',
    '#f4ffd9': 'var(--ds-color-green-100)',
    '#4a4a4a': 'var(--ds-color-grey-700)',
    '#2f2f2f': 'var(--ds-color-grey-800)',
    '#1a1a1a': 'var(--ds-color-grey-900)',
    '#808080': 'var(--vv-color-text-secondary)',
    '#7d9220': 'var(--vv-color-text-accent)',
    '#c9c9c9': 'var(--vv-color-text-disabled)',
    // Map tile placeholders — no token, intentionally omitted
  },
};
COLOR_BY_PROP['background-color'] = COLOR_BY_PROP['background'];

// ── Helpers ──────────────────────────────────────────────────────────────────

function escapeRE(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Build a regex matching: propName : <value-not-yet-tokenised>
 * Value terminates at ; " ' ` newline.
 * Skips values that already start with var( or ${.
 */
function propRegex(propName) {
  return new RegExp(
    `(\\b${escapeRE(propName)}\\s*:\\s*)` +
    `((?!var\\()(?!\\$\\{)[^;}"'\`\\n\\r]*)`,
    'gi'
  );
}

/**
 * Replace space-separated parts of a CSS value using a lookup map.
 * Parts already using var() or ${ are preserved unchanged.
 * Returns null if nothing changed.
 */
function replaceMultiValue(raw, map) {
  const parts  = raw.trim().split(/\s+/);
  let changed  = false;
  const result = parts.map(p => {
    if (p.startsWith('var(') || p.startsWith('${')) return p;
    const t = map[p] ?? map[p.toLowerCase()];
    if (t != null) { changed = true; return t; }
    return p;
  });
  return changed ? result.join(' ') : null;
}

/**
 * Exact (trimmed) value lookup; case-insensitive hex.
 * Returns null if the value is in the map but maps to null (intentional skip),
 * or undefined if not in the map at all (same effect: leave unchanged).
 */
function replaceExact(val, map) {
  const t = map[val] ?? map[val.toLowerCase()];
  return t != null ? t : null;
}

// ── Transformer ───────────────────────────────────────────────────────────────

function transformFile(content) {
  // 1. Colors (property-aware, exact match)
  for (const [prop, map] of Object.entries(COLOR_BY_PROP)) {
    content = content.replace(propRegex(prop), (match, propPart, rawVal) => {
      const val = rawVal.trim();
      if (!val) return match;
      const r = replaceExact(val, map);
      return r !== null ? propPart + r : match;
    });
  }

  // 2. Spacing (padding / margin / gap) — multi-value
  for (const prop of [
    'padding', 'margin', 'gap', 'row-gap', 'column-gap',
    'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
    'margin-top',  'margin-right',  'margin-bottom',  'margin-left',
  ]) {
    content = content.replace(propRegex(prop), (match, propPart, rawVal) => {
      if (!rawVal.trim()) return match;
      const r = replaceMultiValue(rawVal, SPACING);
      return r !== null ? propPart + r : match;
    });
  }

  // 3. Border-radius — multi-value
  content = content.replace(propRegex('border-radius'), (match, propPart, rawVal) => {
    if (!rawVal.trim()) return match;
    const r = replaceMultiValue(rawVal, RADIUS);
    return r !== null ? propPart + r : match;
  });

  // 4. Font-size — exact
  content = content.replace(propRegex('font-size'), (match, propPart, rawVal) => {
    const val = rawVal.trim();
    if (!val) return match;
    const r = replaceExact(val, FONT_SIZE);
    return r !== null ? propPart + r : match;
  });

  // 5. Font-weight — exact
  content = content.replace(propRegex('font-weight'), (match, propPart, rawVal) => {
    const val = rawVal.trim();
    if (!val) return match;
    const r = replaceExact(val, FONT_WEIGHT);
    return r !== null ? propPart + r : match;
  });

  // 6. Box-shadow — exact
  content = content.replace(propRegex('box-shadow'), (match, propPart, rawVal) => {
    const val = rawVal.trim();
    if (!val) return match;
    const r = replaceExact(val, BOX_SHADOW);
    return r !== null ? propPart + r : match;
  });

  // 7. Z-index — exact
  content = content.replace(propRegex('z-index'), (match, propPart, rawVal) => {
    const val = rawVal.trim();
    if (!val) return match;
    const r = replaceExact(val, Z_INDEX);
    return r !== null ? propPart + r : match;
  });

  // 8. Transition — replace duration + easing keywords within the value
  content = content.replace(propRegex('transition'), (match, propPart, rawVal) => {
    if (!rawVal.trim()) return match;
    let val = rawVal;

    for (const [raw, token] of DURATION) {
      val = val.split(raw).join(token);
    }
    for (const [raw, token] of EASING) {
      val = val.replace(
        new RegExp(`(?<![\\w-])${escapeRE(raw)}(?![\\w-])`, 'g'),
        token
      );
    }

    return val !== rawVal ? propPart + val : match;
  });

  // 9. JS style property assignments: el.style.backgroundColor = '#hex'
  const JS_COLOR_PROPS = {
    'backgroundColor': COLOR_BY_PROP['background'],
    'background':      COLOR_BY_PROP['background'],
    'color':           COLOR_BY_PROP['color'],
  };
  for (const [jsProp, map] of Object.entries(JS_COLOR_PROPS)) {
    const re = new RegExp(
      `(\\.style\\.${escapeRE(jsProp)}\\s*=\\s*["'\`])` +
      `(#[0-9a-fA-F]{3,8})` +
      `(["'\`])`,
      'g'
    );
    content = content.replace(re, (match, before, hex, after) => {
      const r = replaceExact(hex, map);
      return r !== null ? before + r + after : match;
    });
  }

  return content;
}

// ── Main ─────────────────────────────────────────────────────────────────────

function walkDir(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkDir(full));
    else if (entry.name.endsWith('.stories.js')) results.push(full);
  }
  return results;
}

const files    = walkDir(STORIES_DIR);
let   modified = 0;

for (const file of files) {
  const original  = fs.readFileSync(file, 'utf8');
  const transform = transformFile(original);

  if (transform !== original) {
    modified++;
    const rel = path.relative(ROOT, file);
    if (DRY_RUN) {
      console.log(`[dry-run] would modify: ${rel}`);
    } else {
      fs.writeFileSync(file, transform, 'utf8');
      console.log(`modified: ${rel}`);
    }
  }
}

const label = DRY_RUN ? '[dry-run] ' : '';
console.log(`\n${label}Done: ${modified}/${files.length} files ${DRY_RUN ? 'would be ' : ''}modified.`);
