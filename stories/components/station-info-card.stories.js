import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/StationInfoCard' };

// ── helpers ────────────────────────────────────────────────────────────────────
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}
function shadowFromToken(t) {
  if (t === 'none') return 'none';
  return t.offsetX + 'px ' + t.offsetY + 'px ' + t.blur + 'px ' + t.spread + 'px ' + hexToRgba(t.color);
}

// ── makePhoneFrame ─────────────────────────────────────────────────────────────
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

// ── Default ────────────────────────────────────────────────────────────────────
export const Default = () => `
<div style="
  width:393px;
  min-height:852px;
  background:${tokens.colorSurfaceBase};
  display:flex;
  align-items:flex-start;
  justify-content:center;
  padding:var(--vv-space-7) var(--vv-space-5);
  box-sizing:border-box;
  font-family:Inter,sans-serif;
">
  <!-- Station Info Card — C-11 -->
  <div style="
    width:100%;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px;
    padding:var(--vv-space-5);
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    gap:var(--vv-space-4);
    box-shadow:var(--vv-elevation-raised);
  ">
    <!-- Card Top Row: icon chip + station info -->
    <div style="display:flex;align-items:center;gap:var(--vv-space-4);">
      <!-- Station Icon Chip -->
      <div style="
        width:34px;
        height:34px;
        background:${tokens.colorGrey100};
        border-radius:var(--vv-radius-full);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:16px;
        flex-shrink:0;
      ">&#9889;</div>
      <!-- Station Info -->
      <div style="display:flex;flex-direction:column;gap:var(--vv-space-2);">
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeBodyMd}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextPrimary};
          line-height:${tokens.fontLineHeightBodyMd}px;
        ">VoltHub Central</div>
        <span style="
          display:inline-block;
          background:${tokens.colorGrey100};
          border-radius:${tokens.radiusFull}px;
          padding:var(--vv-space-1) var(--vv-space-3);
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:${tokens.colorTextSecondary};
          line-height:${tokens.fontLineHeightLabelSm}px;
        ">Charging Station</span>
      </div>
    </div>

    <!-- Slots Badge -->
    <div style="
      display:inline-flex;
      align-items:center;
      background:${tokens.colorGreen100};
      border-radius:${tokens.radiusFull}px;
      padding:var(--vv-space-2) var(--vv-space-4);
      gap:var(--vv-space-2);
      align-self:flex-start;
    ">
      <span style="color:${tokens.colorTextAccent};font-size:12px;font-weight:var(--ds-font-weight-heading);">&#10003;</span>
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:${tokens.colorTextAccent};
        line-height:${tokens.fontLineHeightLabelSm}px;
      ">6 slots available</span>
    </div>

    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};"></div>

    <!-- Fee Note Row -->
    <div style="display:flex;align-items:center;gap:6px;">
      <span style="color:${tokens.colorGrey300};font-size:14px;">&#9432;</span>
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:${tokens.colorTextSecondary};
        line-height:${tokens.fontLineHeightLabelSm}px;
      ">Free charging while docked &middot; &#8377; 10 docking fee after 2 hrs</span>
    </div>

    <!-- Navigate Button -->
    <button style="
      height:48px;
      width:100%;
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
      gap:6px;
      box-sizing:border-box;
    ">&#129522; Navigate to Station</button>

    <!-- Resume Ride Link -->
    <div style="
      text-align:center;
      margin-top:var(--vv-space-2);
      font-family:Inter,sans-serif;
      font-size:${tokens.fontSizeBodyMd}px;
      font-weight:${tokens.fontWeightBodyMd};
      color:${tokens.colorTextSecondary};
      text-decoration:underline;
      cursor:pointer;
    ">Resume Ride</div>
  </div>
</div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = [
    'flex:1', 'overflow-y:auto', 'display:flex', 'flex-direction:column',
    'align-items:center', 'padding:var(--vv-space-7) var(--vv-space-5)', 'box-sizing:border-box',
    `background:${tokens.colorSurfaceBase}`
  ].join(';');

  // ── Card container ──
  const card = document.createElement('div');
  card.style.cssText = [
    'width:100%',
    `background:${tokens.colorSurfaceBase}`,
    `border-radius:${tokens.radiusLg}px`,
    'padding:var(--vv-space-5)',
    'box-sizing:border-box',
    'display:flex', 'flex-direction:column',
    'gap:var(--vv-space-4)',
    `box-shadow:${shadowFromToken(tokens.elevationRaised)}`,
    'cursor:pointer',
    'transition:background-color var(--vv-duration-fast) var(--vv-easing-standard)'
  ].join(';');

  // Card press feedback
  card.addEventListener('pointerdown', () => { card.style.backgroundColor = tokens.colorGrey050; });
  card.addEventListener('pointerup', () => { card.style.backgroundColor = tokens.colorSurfaceBase; });
  card.addEventListener('pointerleave', () => { card.style.backgroundColor = tokens.colorSurfaceBase; });

  // ── Top row: icon chip + station info ──
  const topRow = document.createElement('div');
  topRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-4);';

  const iconChip = document.createElement('div');
  iconChip.style.cssText = [
    'width:34px', 'height:34px',
    `background:${tokens.colorGrey100}`,
    'border-radius:var(--vv-radius-full)',
    'display:flex', 'align-items:center', 'justify-content:center',
    'font-size:16px', 'flex-shrink:0'
  ].join(';');
  iconChip.textContent = '⚡';

  const stationInfo = document.createElement('div');
  stationInfo.style.cssText = 'display:flex;flex-direction:column;gap:var(--vv-space-2);';

  const stationName = document.createElement('div');
  stationName.style.cssText = [
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeBodyMd}px`,
    'font-weight:var(--ds-font-weight-heading)',
    `color:${tokens.colorTextPrimary}`,
    `line-height:${tokens.fontLineHeightBodyMd}px`
  ].join(';');
  stationName.textContent = 'VoltHub Central';

  const typeChip = document.createElement('span');
  typeChip.style.cssText = [
    'display:inline-block',
    `background:${tokens.colorGrey100}`,
    `border-radius:${tokens.radiusFull}px`,
    'padding:var(--vv-space-1) var(--vv-space-3)',
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeLabelSm}px`,
    `font-weight:${tokens.fontWeightLabelSm}`,
    `color:${tokens.colorTextSecondary}`,
    `line-height:${tokens.fontLineHeightLabelSm}px`
  ].join(';');
  typeChip.textContent = 'Charging Station';

  stationInfo.appendChild(stationName);
  stationInfo.appendChild(typeChip);
  topRow.appendChild(iconChip);
  topRow.appendChild(stationInfo);

  // ── Slots Badge ──
  const slotsBadge = document.createElement('div');
  slotsBadge.style.cssText = [
    'display:inline-flex', 'align-items:center',
    `background:${tokens.colorGreen100}`,
    `border-radius:${tokens.radiusFull}px`,
    'padding:var(--vv-space-2) var(--vv-space-4)', 'gap:var(--vv-space-2)', 'align-self:flex-start'
  ].join(';');

  const checkIcon = document.createElement('span');
  checkIcon.style.cssText = `color:${tokens.colorTextAccent};font-size:12px;font-weight:var(--ds-font-weight-heading);`;
  checkIcon.textContent = '✓';

  const slotsText = document.createElement('span');
  slotsText.style.cssText = [
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeLabelSm}px`,
    `font-weight:${tokens.fontWeightLabelSm}`,
    `color:${tokens.colorTextAccent}`,
    `line-height:${tokens.fontLineHeightLabelSm}px`
  ].join(';');
  slotsText.textContent = '6 slots available';

  slotsBadge.appendChild(checkIcon);
  slotsBadge.appendChild(slotsText);

  // ── Divider ──
  const divider = document.createElement('div');
  divider.style.cssText = `height:1px;background:${tokens.colorGrey100};`;

  // ── Fee Note Row ──
  const feeRow = document.createElement('div');
  feeRow.style.cssText = 'display:flex;align-items:center;gap:6px;';

  const infoIcon = document.createElement('span');
  infoIcon.style.cssText = `color:${tokens.colorGrey300};font-size:14px;`;
  infoIcon.textContent = 'ℹ';

  const feeText = document.createElement('span');
  feeText.style.cssText = [
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeLabelSm}px`,
    `font-weight:${tokens.fontWeightLabelSm}`,
    `color:${tokens.colorTextSecondary}`,
    `line-height:${tokens.fontLineHeightLabelSm}px`
  ].join(';');
  feeText.textContent = 'Free charging while docked · ₹ 10 docking fee after 2 hrs';

  feeRow.appendChild(infoIcon);
  feeRow.appendChild(feeText);

  // ── Navigate Button ──
  const navBtn = document.createElement('button');
  navBtn.style.cssText = [
    'height:48px', 'width:100%',
    `background:${tokens.colorActionPrimary}`,
    `border-radius:${tokens.radiusFull}px`,
    'border:none', 'cursor:pointer',
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeHeadingSm}px`,
    'font-weight:var(--ds-font-weight-heading)',
    `color:${tokens.colorTextPrimary}`,
    'display:flex', 'align-items:center', 'justify-content:center',
    'gap:6px', 'box-sizing:border-box',
    'transition:background-color var(--vv-duration-fast) var(--vv-easing-standard),transform var(--vv-duration-fast) var(--vv-easing-standard)'
  ].join(';');
  navBtn.textContent = '🧭 Navigate to Station';

  // Navigate button press state
  navBtn.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    navBtn.style.backgroundColor = tokens.colorGreen600;
    navBtn.style.transform = 'scale(0.97)';
  });
  navBtn.addEventListener('pointerup', (e) => {
    e.stopPropagation();
    navBtn.style.backgroundColor = tokens.colorActionPrimary;
    navBtn.style.transform = 'scale(1)';
  });
  navBtn.addEventListener('pointerleave', () => {
    navBtn.style.backgroundColor = tokens.colorActionPrimary;
    navBtn.style.transform = 'scale(1)';
  });

  // ── Resume Ride Link ──
  const resumeLink = document.createElement('div');
  resumeLink.style.cssText = [
    'text-align:center',
    'margin-top:var(--vv-space-2)',
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeBodyMd}px`,
    `font-weight:${tokens.fontWeightBodyMd}`,
    `color:${tokens.colorTextSecondary}`,
    'text-decoration:underline',
    'cursor:pointer'
  ].join(';');
  resumeLink.textContent = 'Resume Ride';

  // Assemble card
  card.appendChild(topRow);
  card.appendChild(slotsBadge);
  card.appendChild(divider);
  card.appendChild(feeRow);
  card.appendChild(navBtn);
  card.appendChild(resumeLink);

  content.appendChild(card);
  screen.appendChild(content);
  return frame;
};

// ── SourceCode ─────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase    = '#FFFFFF'
// tokens.colorGrey100        = '#F5F5F5'  (icon chip, type chip, divider)
// tokens.colorGreen100       = '#F4FFD9'  (slots badge background)
// tokens.colorTextAccent     = '#7D9220'  (slots badge text + check icon)
// tokens.colorActionPrimary  = '#C6FF2D'  (Navigate button background)
// tokens.colorGreen600       = '#A8DE1A'  (Navigate button pressed)
// tokens.colorTextPrimary    = '#0F0F0F'  (Navigate button label)
// tokens.colorTextSecondary  = '#808080'  (fee note, resume link, type chip)

const StationInfoCard = ({
  name = 'VoltHub Central',
  type = 'Charging Station',
  slotsAvailable = 6,
  onNavigate,
  onResumeRide,
}) => (
  <Surface style={styles.card} elevation={1}>
    {/* Top row */}
    <View style={styles.topRow}>
      <View style={styles.iconChip}>
        <Text style={styles.iconText}>⚡</Text>
      </View>
      <View style={styles.stationInfo}>
        <Text style={styles.stationName}>{name}</Text>
        <View style={styles.typeChip}>
          <Text style={styles.typeChipText}>{type}</Text>
        </View>
      </View>
    </View>

    {/* Slots Badge */}
    <View style={styles.slotsBadge}>
      <Text style={styles.checkIcon}>✓</Text>
      <Text style={styles.slotsText}>{slotsAvailable} slots available</Text>
    </View>

    {/* Divider */}
    <View style={styles.divider} />

    {/* Fee Note */}
    <View style={styles.feeRow}>
      <Text style={styles.infoIcon}>ℹ</Text>
      <Text style={styles.feeText}>
        Free charging while docked · ₹ 10 docking fee after 2 hrs
      </Text>
    </View>

    {/* Navigate Button */}
    <TouchableOpacity
      style={styles.navButton}
      onPress={onNavigate}
      activeOpacity={0.85}
    >
      <Text style={styles.navButtonText}>🧭 Navigate to Station</Text>
    </TouchableOpacity>

    {/* Resume Ride Link */}
    <TouchableOpacity onPress={onResumeRide} style={styles.resumeLink}>
      <Text style={styles.resumeLinkText}>Resume Ride</Text>
    </TouchableOpacity>
  </Surface>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',   // tokens.colorSurfaceBase
    borderRadius: 20,              // tokens.radiusLg
    padding: 16,
    gap: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconChip: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F5F5F5',   // tokens.colorGrey100
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: { fontSize: 16 },
  stationInfo: { flexDirection: 'column', gap: 4 },
  stationName: {
    fontSize: 15,                  // tokens.fontSizeBodyMd
    fontWeight: '600',
    color: '#0F0F0F',              // tokens.colorTextPrimary
    fontFamily: 'Inter',
  },
  typeChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#F5F5F5',   // tokens.colorGrey100
    borderRadius: 999,             // tokens.radiusFull
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  typeChipText: {
    fontSize: 11,                  // tokens.fontSizeLabelSm
    fontWeight: '500',
    color: '#808080',              // tokens.colorTextSecondary
    fontFamily: 'Inter',
  },
  slotsBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4FFD9',   // tokens.colorGreen100
    borderRadius: 999,             // tokens.radiusFull
    paddingVertical: 4,
    paddingHorizontal: 12,
    gap: 4,
  },
  checkIcon: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7D9220',              // tokens.colorTextAccent
  },
  slotsText: {
    fontSize: 11,                  // tokens.fontSizeLabelSm
    fontWeight: '500',
    color: '#7D9220',              // tokens.colorTextAccent
    fontFamily: 'Inter',
  },
  divider: {
    height: 1,
    backgroundColor: '#F5F5F5',   // tokens.colorGrey100
  },
  feeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoIcon: {
    fontSize: 14,
    color: '#C9C9C9',              // tokens.colorGrey300
  },
  feeText: {
    fontSize: 11,                  // tokens.fontSizeLabelSm
    fontWeight: '500',
    color: '#808080',              // tokens.colorTextSecondary
    fontFamily: 'Inter',
    flex: 1,
  },
  navButton: {
    height: 48,
    backgroundColor: '#C6FF2D',   // tokens.colorActionPrimary
    borderRadius: 999,             // tokens.radiusFull
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    fontSize: 15,                  // tokens.fontSizeHeadingSm
    fontWeight: '600',
    color: '#0F0F0F',              // tokens.colorTextPrimary
    fontFamily: 'Inter',
  },
  resumeLink: {
    marginTop: 4,
    alignItems: 'center',
  },
  resumeLinkText: {
    fontSize: 15,                  // tokens.fontSizeBodyMd
    fontWeight: '400',
    color: '#808080',              // tokens.colorTextSecondary
    fontFamily: 'Inter',
    textDecorationLine: 'underline',
  },
});

export default StationInfoCard;`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// StationInfoCard — React Native Paper</div>${_blk('StationInfoCard.tsx', RN_JSX)}</div>`;
