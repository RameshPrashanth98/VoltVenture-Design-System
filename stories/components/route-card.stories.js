import * as tokens from '../../generated/tokens.js';

// Hardcoded brand values — no token equivalent:
// '#e8e8e8'              — hero image placeholder (map/image placeholder color)
// 'rgba(255,255,255,0.93)' = '#FFFFFFEE' — range badge background
// 'rgba(15,15,15,0.87)'  = '#0F0F0FDD' — time badge background
// 'rgba(0,0,0,0.50)'     — hero gradient overlay

export default { title: 'Components/RouteCard' };

// ── Default (HTML string) ────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px;
    overflow:hidden;
    box-sizing:border-box;
    margin-bottom:var(--vv-space-5);
    width:393px;
    font-family:Inter,sans-serif;
  ">

    <!-- Hero Image -->
    <div style="
      position:relative;
      width:100%;
      height:180px;
      background:#e8e8e8;
      flex-shrink:0;
    ">
      <!-- Photo gradient overlay -->
      <div style="
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:80px;
        background:linear-gradient(to top, rgba(0,0,0,0.50), transparent);
      "></div>

      <!-- Range Badge (top-left) -->
      <div style="
        position:absolute;
        top:12px;
        left:12px;
        background:rgba(255,255,255,0.93);
        border-radius:${tokens.radiusFull}px;
        padding:var(--vv-space-2) 10px;
        display:inline-flex;
        align-items:center;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextPrimary};
        ">&#9889; 100 km range</span>
      </div>

      <!-- Time Badge (top-right) -->
      <div style="
        position:absolute;
        top:12px;
        right:12px;
        background:rgba(15,15,15,0.87);
        border-radius:${tokens.radiusFull}px;
        padding:var(--vv-space-2) 10px;
        display:inline-flex;
        align-items:center;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:var(--ds-font-weight-heading);
          color:var(--vv-color-text-on-inverse);
        ">&#9201; 45 min</span>
      </div>

      <!-- Title Overlay (bottom-left) -->
      <div style="
        position:absolute;
        bottom:12px;
        left:12px;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeBodyMd}px;
          font-weight:var(--ds-font-weight-display);
          color:var(--vv-color-text-on-inverse);
        ">Old Town Loop</span>
      </div>
    </div>

    <!-- Card Body -->
    <div style="padding:var(--vv-space-5);box-sizing:border-box;">

      <!-- Meta Row -->
      <div style="display:flex;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);flex-wrap:wrap;">
        <!-- Difficulty chip -->
        <div style="
          background:${tokens.colorGrey100};
          border-radius:${tokens.radiusFull}px;
          padding:var(--vv-space-2) 10px;
          display:inline-flex;
          align-items:center;
        ">
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeLabelSm}px;
            font-weight:${tokens.fontWeightLabelSm};
            color:${tokens.colorTextPrimary};
          ">&#129001; Easy</span>
        </div>
        <!-- Category chip -->
        <div style="
          background:${tokens.colorGrey100};
          border-radius:${tokens.radiusFull}px;
          padding:var(--vv-space-2) 10px;
          display:inline-flex;
          align-items:center;
        ">
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeLabelSm}px;
            font-weight:${tokens.fontWeightLabelSm};
            color:${tokens.colorTextPrimary};
          ">&#127961; City Tour</span>
        </div>
      </div>

      <!-- Stops Label -->
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:${tokens.colorTextSecondary};
        margin-bottom:6px;
      ">3 stops</div>

      <!-- Stops Row -->
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:var(--vv-space-4);">
        <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
          <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Town Hall</span>
        </div>
        <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
          <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Market</span>
        </div>
        <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
          <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">River Park</span>
        </div>
      </div>

      <!-- Start Route Button -->
      <button style="
        width:100%;
        height:48px;
        background:${tokens.colorActionPrimary};
        border-radius:${tokens.radiusFull}px;
        border:none;
        cursor:pointer;
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeHeadingSm}px;
        font-weight:var(--ds-font-weight-heading);
        color:${tokens.colorTextPrimary};
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;
      ">&#9654; Start Route</button>

    </div>
  </div>
`;

// ── makePhoneFrame helper (inline, per-file) ─────────────────────────────────
function makePhoneFrame() {
  const frame = document.createElement('div');
  frame.style.cssText = [
    'width:402px', 'height:874px', 'background:var(--vv-color-surface-inverse)',
    'border-radius:44px', 'padding:6px', 'box-sizing:border-box',
    'position:relative', 'overflow:hidden', 'display:inline-block',
    'font-family:Inter,sans-serif'
  ].join(';');
  const screen = document.createElement('div');
  screen.style.cssText = [
    'width:100%', 'height:100%', 'background:var(--vv-color-surface-base)',
    'border-radius:38px', 'overflow:hidden', 'position:relative',
    'display:flex', 'flex-direction:column'
  ].join(';');
  const bar = document.createElement('div');
  bar.style.cssText = [
    'flex-shrink:0', 'height:54px', 'background:var(--vv-color-surface-inverse)',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'padding:0 var(--vv-space-6)', 'box-sizing:border-box'
  ].join(';');
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;color:var(--vv-color-text-on-inverse);">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-text-on-inverse);">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

// Route data for Interactive export
const ROUTES_DATA = [
  {
    title: 'Old Town Loop',
    range: '\u26A1 100 km range',
    time: '\u23F1 45 min',
    difficulty: '\uD83D\uDFE2 Easy',
    category: '\uD83C\uDFD9 City Tour',
    stops: ['Town Hall', 'Market', 'River Park'],
  },
  {
    title: 'Waterfront Trail',
    range: '\u26A1 80 km range',
    time: '\u23F1 35 min',
    difficulty: '\uD83D\uDFE1 Moderate',
    category: '\uD83C\uDF0A Scenic',
    stops: ['Marina', 'Lighthouse', 'Beach Promenade'],
  },
];

function buildRouteCard(route) {
  const card = document.createElement('div');
  card.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;box-sizing:border-box;margin-bottom:var(--vv-space-5);flex-shrink:0;`;

  // Hero image
  const hero = document.createElement('div');
  hero.style.cssText = 'position:relative;width:100%;height:180px;background:#e8e8e8;flex-shrink:0;';

  // Gradient overlay
  const gradient = document.createElement('div');
  gradient.style.cssText = 'position:absolute;bottom:0;left:0;width:100%;height:80px;background:linear-gradient(to top, rgba(0,0,0,0.50), transparent);pointer-events:none;';
  hero.appendChild(gradient);

  // Range badge
  const rangeBadge = document.createElement('div');
  rangeBadge.style.cssText = `position:absolute;top:12px;left:12px;background:rgba(255,255,255,0.93);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
  const rangeText = document.createElement('span');
  rangeText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  rangeText.textContent = route.range;
  rangeBadge.appendChild(rangeText);
  hero.appendChild(rangeBadge);

  // Time badge
  const timeBadge = document.createElement('div');
  timeBadge.style.cssText = `position:absolute;top:12px;right:12px;background:rgba(15,15,15,0.87);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
  const timeText = document.createElement('span');
  timeText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);`;
  timeText.textContent = route.time;
  timeBadge.appendChild(timeText);
  hero.appendChild(timeBadge);

  // Title overlay
  const titleOverlay = document.createElement('div');
  titleOverlay.style.cssText = 'position:absolute;bottom:12px;left:12px;';
  const titleText = document.createElement('span');
  titleText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-on-inverse);`;
  titleText.textContent = route.title;
  titleOverlay.appendChild(titleText);
  hero.appendChild(titleOverlay);

  card.appendChild(hero);

  // Card body
  const body = document.createElement('div');
  body.style.cssText = 'padding:var(--vv-space-5);box-sizing:border-box;';

  // Meta row
  const metaRow = document.createElement('div');
  metaRow.style.cssText = 'display:flex;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);flex-wrap:wrap;';

  [route.difficulty, route.category].forEach(label => {
    const chip = document.createElement('div');
    chip.style.cssText = `background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
    const chipText = document.createElement('span');
    chipText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};`;
    chipText.textContent = label;
    chip.appendChild(chipText);
    metaRow.appendChild(chip);
  });
  body.appendChild(metaRow);

  // Stops label
  const stopsLabel = document.createElement('div');
  stopsLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-bottom:6px;`;
  stopsLabel.textContent = `${route.stops.length} stops`;
  body.appendChild(stopsLabel);

  // Stops row
  const stopsRow = document.createElement('div');
  stopsRow.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;margin-bottom:var(--vv-space-4);';
  route.stops.forEach(stop => {
    const chip = document.createElement('div');
    chip.style.cssText = `background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
    const chipText = document.createElement('span');
    chipText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};`;
    chipText.textContent = stop;
    chip.appendChild(chipText);
    stopsRow.appendChild(chip);
  });
  body.appendChild(stopsRow);

  // Start Route button
  const startBtn = document.createElement('button');
  startBtn.style.cssText = `width:100%;height:48px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};display:flex;align-items:center;justify-content:center;box-sizing:border-box;transition:background-color var(--vv-duration-fast) var(--vv-easing-standard),transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  startBtn.textContent = '\u25B6 Start Route';

  startBtn.addEventListener('pointerdown', () => {
    startBtn.style.backgroundColor = tokens.colorGreen600;
    startBtn.style.transform = 'scale(0.97)';
  });
  startBtn.addEventListener('pointerup', () => {
    startBtn.style.backgroundColor = tokens.colorActionPrimary;
    startBtn.style.transform = 'scale(1)';
  });
  startBtn.addEventListener('pointerleave', () => {
    startBtn.style.backgroundColor = tokens.colorActionPrimary;
    startBtn.style.transform = 'scale(1)';
  });

  body.appendChild(startBtn);
  card.appendChild(body);

  return card;
}

// ── Interactive (returns DOM element) ────────────────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();
  screen.style.background = 'var(--vv-color-surface-base)';

  // Scrollable content area
  const scrollArea = document.createElement('div');
  scrollArea.style.cssText = 'flex:1;overflow-y:auto;padding:var(--vv-space-5);box-sizing:border-box;';

  ROUTES_DATA.forEach(route => {
    scrollArea.appendChild(buildRouteCard(route));
  });

  screen.appendChild(scrollArea);

  return frame;
};

// ── Source code panel ────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_ROUTECARD_JSX = `// RouteCard Component — React Native Paper
import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase   = '#ffffff'
// tokens.colorGrey100       = '#f5f5f5'  — chip background
// tokens.colorGrey050       = '#fafafa'  — stop chip background
// tokens.colorTextPrimary   = '#0f0f0f'
// tokens.colorTextSecondary = '#808080'
// tokens.colorActionPrimary = '#c6ff2d'  — Start Route button BG
// tokens.colorGreen600      = '#a8de1a'  — Start Route pressed state
// tokens.radiusLg           = 20         — card border-radius
// tokens.radiusFull         = 999        — pill / badge border-radius
// '#e8e8e8'                 — hero image placeholder (no token)
// '#FFFFFFEE' = rgba(255,255,255,0.93)   — range badge background
// '#0F0F0FDD' = rgba(15,15,15,0.87)     — time badge background
// '#C6FF2D'   = tokens.colorActionPrimary used as Start Route bg

const RouteCard = ({ title, range, time, difficulty, category, stops, onStartRoute }) => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <View style={styles.card}>
      {/* Hero Image */}
      <View style={styles.hero}>
        {/* Gradient overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.50)']}
          style={styles.heroGradient}
        />
        {/* Range Badge */}
        <View style={styles.rangeBadge}>
          <Text style={styles.rangeBadgeText}>{range}</Text>
        </View>
        {/* Time Badge */}
        <View style={styles.timeBadge}>
          <Text style={styles.timeBadgeText}>{time}</Text>
        </View>
        {/* Title Overlay */}
        <Text style={styles.heroTitle}>{title}</Text>
      </View>

      {/* Card Body */}
      <View style={styles.body}>
        {/* Meta chips */}
        <View style={styles.metaRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{difficulty}</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{category}</Text>
          </View>
        </View>

        {/* Stops */}
        <Text style={styles.stopsLabel}>{stops.length} stops</Text>
        <View style={styles.stopsRow}>
          {stops.map((stop, i) => (
            <View key={i} style={styles.stopChip}>
              <Text style={styles.stopChipText}>{stop}</Text>
            </View>
          ))}
        </View>

        {/* Start Route Button */}
        <TouchableOpacity
          style={[styles.startBtn, pressed && styles.startBtnPressed]}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={onStartRoute}
          activeOpacity={1}
        >
          <Text style={styles.startBtnText}>&#9654; Start Route</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff', // tokens.colorSurfaceBase
    borderRadius: 20,            // tokens.radiusLg
    overflow: 'hidden',
    marginBottom: 16,
  },
  hero: {
    width: '100%',
    height: 180,
    backgroundColor: '#e8e8e8', // placeholder — no token
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  rangeBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.93)', // '#FFFFFFEE'
    borderRadius: 999,                          // tokens.radiusFull
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  rangeBadgeText: {
    fontFamily: 'Inter',
    fontSize: 11,  // tokens.fontSizeLabelSm
    fontWeight: '600',
    color: '#0f0f0f', // tokens.colorTextPrimary
  },
  timeBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(15,15,15,0.87)', // '#0F0F0FDD'
    borderRadius: 999,                       // tokens.radiusFull
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  timeBadgeText: {
    fontFamily: 'Inter',
    fontSize: 11, // tokens.fontSizeLabelSm
    fontWeight: '600',
    color: '#ffffff',
  },
  heroTitle: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    fontFamily: 'Inter',
    fontSize: 15, // tokens.fontSizeBodyMd
    fontWeight: '700',
    color: '#ffffff',
  },
  body: {
    padding: 16,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: '#f5f5f5', // tokens.colorGrey100
    borderRadius: 999,           // tokens.radiusFull
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  chipText: {
    fontFamily: 'Inter',
    fontSize: 11,  // tokens.fontSizeLabelSm
    fontWeight: '500',
    color: '#0f0f0f', // tokens.colorTextPrimary
  },
  stopsLabel: {
    fontFamily: 'Inter',
    fontSize: 11, // tokens.fontSizeLabelSm
    fontWeight: '500',
    color: '#808080', // tokens.colorTextSecondary
    marginBottom: 6,
  },
  stopsRow: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  stopChip: {
    backgroundColor: '#fafafa', // tokens.colorGrey050
    borderRadius: 999,           // tokens.radiusFull
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  stopChipText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#0f0f0f',
  },
  startBtn: {
    height: 48, // tokens.space1200
    backgroundColor: '#c6ff2d', // tokens.colorActionPrimary
    borderRadius: 999,           // tokens.radiusFull
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnPressed: {
    backgroundColor: '#a8de1a', // tokens.colorGreen600
    transform: [{ scale: 0.97 }],
  },
  startBtnText: {
    fontFamily: 'Inter',
    fontSize: 15,  // tokens.fontSizeHeadingSm
    fontWeight: '600',
    color: '#0f0f0f', // tokens.colorTextPrimary
  },
});

export default RouteCard;`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// RouteCard — React Native Paper</div>${_blk('RouteCard', RN_ROUTECARD_JSX)}</div>`;
