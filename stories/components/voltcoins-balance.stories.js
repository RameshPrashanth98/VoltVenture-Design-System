import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/VoltCoinsBalance' };

// ── makePhoneFrame ─────────────────────────────────────────────────────────────
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

// ── Default ────────────────────────────────────────────────────────────────────
export const Default = () => `
<div style="
  width:393px;
  min-height:852px;
  background:${tokens.colorSurfaceBase};
  display:flex;
  align-items:flex-start;
  justify-content:center;
  padding:24px 16px;
  box-sizing:border-box;
  font-family:Inter,sans-serif;
">
  <!-- VoltCoins Balance Card — C-09 -->
  <div style="
    width:100%;
    background:${tokens.colorSurfaceInverse};
    border-radius:${tokens.radiusXl}px;
    padding:24px 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:12px;
    box-sizing:border-box;
  ">
    <!-- Coin Badge + Balance row -->
    <div style="
      display:flex;
      align-items:center;
      gap:12px;
      width:100%;
      justify-content:center;
    ">
      <!-- Coin Badge -->
      <div style="
        width:48px;
        height:48px;
        background:${tokens.colorActionPrimary};
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:24px;
        color:${tokens.colorTextPrimary};
        flex-shrink:0;
      ">&#9889;</div>
      <!-- Balance text -->
      <div style="display:flex;flex-direction:column;gap:2px;">
        <div style="
          font-size:40px;
          font-weight:700;
          color:#ffffff;
          line-height:1;
          font-family:Inter,sans-serif;
        ">1,240</div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelMd}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:${tokens.colorGrey500};
          line-height:${tokens.fontLineHeightLabelMd}px;
        ">VoltCoins</div>
      </div>
    </div>

    <!-- Level Badge -->
    <div style="
      display:inline-flex;
      align-items:center;
      background:rgba(255,255,255,0.13);
      border-radius:${tokens.radiusFull}px;
      padding:6px 14px;
      gap:6px;
    ">
      <span style="font-size:14px;">&#127942;</span>
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:#ffffff;
        line-height:${tokens.fontLineHeightLabelSm}px;
      ">Level 3 &mdash; Explorer</span>
    </div>
  </div>
</div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = [
    'flex:1', 'overflow-y:auto', 'display:flex', 'flex-direction:column',
    'align-items:center', 'padding:24px 16px', 'box-sizing:border-box',
    'gap:16px', `background:${tokens.colorSurfaceBase}`
  ].join(';');

  // ── Card ──
  const card = document.createElement('div');
  card.style.cssText = [
    'width:100%',
    `background:${tokens.colorSurfaceInverse}`,
    `border-radius:${tokens.radiusXl}px`,
    'padding:24px 20px',
    'display:flex', 'flex-direction:column', 'align-items:center',
    'gap:12px', 'box-sizing:border-box'
  ].join(';');

  // Badge + balance row
  const badgeRow = document.createElement('div');
  badgeRow.style.cssText = 'display:flex;align-items:center;gap:12px;width:100%;justify-content:center;';

  const coinBadge = document.createElement('div');
  coinBadge.style.cssText = [
    'width:48px', 'height:48px',
    `background:${tokens.colorActionPrimary}`,
    'border-radius:50%',
    'display:flex', 'align-items:center', 'justify-content:center',
    'font-size:24px',
    `color:${tokens.colorTextPrimary}`,
    'flex-shrink:0'
  ].join(';');
  coinBadge.textContent = '⚡';

  const balanceText = document.createElement('div');
  balanceText.style.cssText = 'display:flex;flex-direction:column;gap:2px;';

  const balanceValue = document.createElement('div');
  balanceValue.style.cssText = [
    'font-size:40px', 'font-weight:700', 'color:#ffffff',
    'line-height:1', 'font-family:Inter,sans-serif'
  ].join(';');
  balanceValue.textContent = '1,240';

  const balanceLabel = document.createElement('div');
  balanceLabel.style.cssText = [
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeLabelMd}px`,
    `font-weight:${tokens.fontWeightLabelSm}`,
    `color:${tokens.colorGrey500}`,
    `line-height:${tokens.fontLineHeightLabelMd}px`
  ].join(';');
  balanceLabel.textContent = 'VoltCoins';

  balanceText.appendChild(balanceValue);
  balanceText.appendChild(balanceLabel);
  badgeRow.appendChild(coinBadge);
  badgeRow.appendChild(balanceText);

  // Level badge
  const levelBadge = document.createElement('div');
  levelBadge.style.cssText = [
    'display:inline-flex', 'align-items:center',
    'background:rgba(255,255,255,0.13)',
    `border-radius:${tokens.radiusFull}px`,
    'padding:6px 14px', 'gap:6px'
  ].join(';');

  const trophyIcon = document.createElement('span');
  trophyIcon.style.cssText = 'font-size:14px;';
  trophyIcon.textContent = '🏆';

  const levelText = document.createElement('span');
  levelText.style.cssText = [
    'font-family:Inter,sans-serif',
    `font-size:${tokens.fontSizeLabelSm}px`,
    `font-weight:${tokens.fontWeightLabelSm}`,
    'color:#ffffff',
    `line-height:${tokens.fontLineHeightLabelSm}px`
  ].join(';');
  levelText.textContent = 'Level 3 — Explorer';

  levelBadge.appendChild(trophyIcon);
  levelBadge.appendChild(levelText);

  card.appendChild(badgeRow);
  card.appendChild(levelBadge);
  content.appendChild(card);
  screen.appendChild(content);
  return frame;
};

// ── SourceCode ─────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceInverse = '#0F0F0F'
// tokens.colorActionPrimary  = '#C6FF2D'
// tokens.colorTextPrimary    = '#0F0F0F'
// tokens.colorGrey500        = '#808080'
// Level badge bg             = 'rgba(255,255,255,0.13)'

const VoltCoinsBalance = ({ balance = 1240, level = 3, tier = 'Explorer' }) => (
  <Surface style={styles.card} elevation={0}>
    {/* Coin badge + balance row */}
    <View style={styles.row}>
      <View style={styles.coinBadge}>
        <Text style={styles.coinIcon}>⚡</Text>
      </View>
      <View style={styles.balanceBlock}>
        <Text style={styles.balanceValue}>{balance.toLocaleString()}</Text>
        <Text style={styles.balanceLabel}>VoltCoins</Text>
      </View>
    </View>

    {/* Level badge */}
    <View style={styles.levelBadge}>
      <Text style={styles.trophyIcon}>🏆</Text>
      <Text style={styles.levelText}>Level {level} — {tier}</Text>
    </View>
  </Surface>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0F0F0F',  // tokens.colorSurfaceInverse
    borderRadius: 28,             // tokens.radiusXl
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
  },
  coinBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C6FF2D',  // tokens.colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinIcon: {
    fontSize: 24,
    color: '#0F0F0F',            // tokens.colorTextPrimary
  },
  balanceBlock: {
    flexDirection: 'column',
    gap: 2,
  },
  balanceValue: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    lineHeight: 40,
  },
  balanceLabel: {
    fontSize: 13,                // tokens.fontSizeLabelMd
    fontWeight: '500',           // tokens.fontWeightLabelSm
    color: '#808080',            // tokens.colorGrey500
    fontFamily: 'Inter',
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.13)',
    borderRadius: 999,           // tokens.radiusFull
    paddingVertical: 6,
    paddingHorizontal: 14,
    gap: 6,
  },
  trophyIcon: {
    fontSize: 14,
  },
  levelText: {
    fontSize: 11,                // tokens.fontSizeLabelSm
    fontWeight: '500',           // tokens.fontWeightLabelSm
    color: '#FFFFFF',
    fontFamily: 'Inter',
  },
});

export default VoltCoinsBalance;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// VoltCoinsBalance — React Native Paper</div>${_blk('VoltCoinsBalance.tsx', RN_JSX)}</div>`;
