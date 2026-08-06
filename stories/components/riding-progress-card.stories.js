import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/RidingProgressCard' };

// ── Phone frame helper ─────────────────────────────────────────────────────────
function makePhoneFrame() {
  const frame = document.createElement('div');
  frame.style.cssText = [
    'width:402px', 'height:874px', 'background:#0f0f0f',
    'border-radius:44px', 'padding:6px', 'box-sizing:border-box',
    'position:relative', 'overflow:hidden', 'display:inline-block',
    'font-family:Inter,sans-serif'
  ].join(';');
  const screen = document.createElement('div');
  screen.style.cssText = [
    'width:100%', 'height:100%', 'background:#ffffff',
    'border-radius:38px', 'overflow:hidden', 'position:relative',
    'display:flex', 'flex-direction:column'
  ].join(';');
  const bar = document.createElement('div');
  bar.style.cssText = [
    'flex-shrink:0', 'height:54px', 'background:#0f0f0f',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'padding:0 20px', 'box-sizing:border-box'
  ].join(';');
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;color:#ffffff;">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

// 3 demo states for cycling
const DEMO_STATES = [
  { distance: '2.1 km', eta: '12 min', cta: "I've Arrived" },
  { distance: '0.4 km', eta: '2 min', cta: "I'm Almost There" },
  { distance: '0 m',    eta: '0 min', cta: "I'm Here! Dock Bike" },
];

// ── Default (static HTML) — "Near" state ──────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px;
    padding:16px;box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">
    <!-- Progress Row -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
      <!-- Distance Block -->
      <div style="flex:1;">
        <div style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">2.1 km</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">left</div>
      </div>
      <!-- Divider -->
      <div style="width:1px;height:32px;background:${tokens.colorGrey200};flex-shrink:0;"></div>
      <!-- ETA Block -->
      <div style="flex:1;">
        <div style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">12 min</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">ETA</div>
      </div>
      <div style="flex:1;display:flex;justify-content:flex-end;">
        <!-- Bike Chip (colorGreen100) -->
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextAccent};">&#128690; VV-4829</div>
      </div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};margin-bottom:12px;"></div>
    <!-- Primary CTA -->
    <button style="width:100%;height:48px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};">I've Arrived</button>
    <!-- Secondary Link -->
    <div style="text-align:center;margin-top:8px;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};cursor:pointer;">Cancel Navigation</div>
  </div>
`;

// ── Interactive — 3 demo states cycle via CTA ──────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  // Map background
  const mapArea = document.createElement('div');
  mapArea.style.cssText = 'flex:1;background:#e8e8e8;';
  screen.appendChild(mapArea);

  // Card pinned to bottom
  const card = document.createElement('div');
  card.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;padding:16px;box-sizing:border-box;flex-shrink:0;`;

  // Progress Row
  const progRow = document.createElement('div');
  progRow.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:12px;';

  // Distance block
  const distBlock = document.createElement('div');
  distBlock.style.cssText = 'flex:1;';
  const distValue = document.createElement('div');
  distValue.style.cssText = `font-family:Inter,sans-serif;font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;`;
  distValue.textContent = DEMO_STATES[0].distance;
  const distLabel = document.createElement('div');
  distLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  distLabel.textContent = 'left';
  distBlock.appendChild(distValue);
  distBlock.appendChild(distLabel);

  // Divider
  const midDivider = document.createElement('div');
  midDivider.style.cssText = `width:1px;height:32px;background:${tokens.colorGrey200};flex-shrink:0;`;

  // ETA block
  const etaBlock = document.createElement('div');
  etaBlock.style.cssText = 'flex:1;';
  const etaValue = document.createElement('div');
  etaValue.style.cssText = `font-family:Inter,sans-serif;font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;`;
  etaValue.textContent = DEMO_STATES[0].eta;
  const etaLabel = document.createElement('div');
  etaLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  etaLabel.textContent = 'ETA';
  etaBlock.appendChild(etaValue);
  etaBlock.appendChild(etaLabel);

  // Spacer + Bike Chip (colorGreen100)
  const chipWrap = document.createElement('div');
  chipWrap.style.cssText = 'flex:1;display:flex;justify-content:flex-end;';
  const bikeChip = document.createElement('div');
  bikeChip.style.cssText = `background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextAccent};`;
  bikeChip.textContent = '\uD83D\uDEB2 VV-4829';
  chipWrap.appendChild(bikeChip);

  progRow.appendChild(distBlock);
  progRow.appendChild(midDivider);
  progRow.appendChild(etaBlock);
  progRow.appendChild(chipWrap);
  card.appendChild(progRow);

  // Horizontal divider
  const rowDivider = document.createElement('div');
  rowDivider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin-bottom:12px;`;
  card.appendChild(rowDivider);

  // Primary CTA
  let demoState = 0;
  const ctaBtn = document.createElement('button');
  ctaBtn.style.cssText = `width:100%;height:48px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};`;
  ctaBtn.textContent = DEMO_STATES[0].cta;

  ctaBtn.addEventListener('pointerdown', () => {
    demoState = (demoState + 1) % 3;
    const state = DEMO_STATES[demoState];
    distValue.textContent = state.distance;
    etaValue.textContent = state.eta;
    ctaBtn.textContent = state.cta;
  });

  card.appendChild(ctaBtn);

  // Secondary link
  const cancelLink = document.createElement('div');
  cancelLink.style.cssText = `text-align:center;margin-top:8px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};cursor:pointer;`;
  cancelLink.textContent = 'Cancel Navigation';
  card.appendChild(cancelLink);

  screen.appendChild(card);
  return frame;
};

// ── WithApproaching — "Approaching" state ──────────────────────────────────────
export const WithApproaching = () => `
  <div style="
    width:393px;background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px;
    padding:16px;box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
      <div style="flex:1;">
        <div style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">0.4 km</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorGrey500};">left</div>
      </div>
      <div style="width:1px;height:32px;background:${tokens.colorGrey200};flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">2 min</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorGrey500};">ETA</div>
      </div>
      <div style="flex:1;display:flex;justify-content:flex-end;">
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorTextAccent};">&#128690; VV-4829</div>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};margin-bottom:12px;"></div>
    <button style="width:100%;height:48px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};">I'm Almost There</button>
    <div style="text-align:center;margin-top:8px;font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorTextSecondary};cursor:pointer;">Cancel Navigation</div>
  </div>
`;

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// colorSurfaceBase: '#FFFFFF'   colorGreen100: '#F4FFD9' (bike chip)
// colorTextAccent: '#7D9220'   colorActionPrimary: '#C6FF2D'
// colorGrey100: '#F5F5F5'   colorGrey200: '#EBEBEB'
// colorGrey500: '#808080'   colorTextPrimary: '#0F0F0F'

const DEMO_STATES = [
  { distance: '2.1 km', eta: '12 min', cta: "I've Arrived" },
  { distance: '0.4 km', eta: '2 min',  cta: "I'm Almost There" },
  { distance: '0 m',    eta: '0 min',  cta: "I'm Here! Dock Bike" },
];

const RidingProgressCard = () => {
  const [stateIdx, setStateIdx] = useState(0);
  const state = DEMO_STATES[stateIdx];

  return (
    <View style={styles.card}>
      {/* Progress Row */}
      <View style={styles.progRow}>
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>{state.distance}</Text>
          <Text style={styles.statLabel}>left</Text>
        </View>
        <View style={styles.progDivider} />
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>{state.eta}</Text>
          <Text style={styles.statLabel}>ETA</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          {/* Bike Chip (colorGreen100) */}
          <View style={styles.bikeChip}>
            <Text style={styles.bikeChipText}>{'\uD83D\uDEB2'} VV-4829</Text>
          </View>
        </View>
      </View>

      <View style={styles.rowDivider} />

      {/* Primary CTA — cycles through 3 states */}
      <TouchableOpacity style={styles.ctaBtn} onPress={() => setStateIdx(i => (i + 1) % 3)}>
        <Text style={styles.ctaBtnText}>{state.cta}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: 'center', marginTop: 8 }}>
        <Text style={styles.cancelText}>Cancel Navigation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 16 },
  progRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
  statBlock: { flex: 1 },
  statValue: { fontFamily: 'Inter', fontSize: 24, fontWeight: '700', color: '#0F0F0F', lineHeight: 24 },
  statLabel: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
  progDivider: { width: 1, height: 32, backgroundColor: '#EBEBEB' },
  bikeChip: { backgroundColor: '#F4FFD9', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  bikeChipText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#7D9220' },
  rowDivider: { height: 1, backgroundColor: '#F5F5F5', marginBottom: 12 },
  ctaBtn: { height: 48, backgroundColor: '#C6FF2D', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  ctaBtnText: { fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' },
  cancelText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
});

export default RidingProgressCard;`;

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px">` +
  `<div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// RidingProgressCard — React Native Paper (C-06)</div>` +
  _blk('RidingProgressCard.tsx', RN_JSX) +
  `</div>`;
