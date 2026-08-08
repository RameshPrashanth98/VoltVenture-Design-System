import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/RideSummaryCard' };

// ── Phone frame helper (402×874px, Volt Black bezel, 44px radius) ─────────────
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

// ── HTML helpers ────────────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}

// ── Default (HTML string) ──────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    background:${tokens.colorSurfaceInverse};
    border-radius:${tokens.radiusLg}px;
    padding:var(--vv-space-5) var(--vv-space-6);
    display:flex;
    align-items:center;
    gap:var(--vv-space-4);
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">
    <div style="
      width:40px;height:40px;
      background:rgba(198,255,45,0.13);
      border-radius:${tokens.radiusMd}px;
      display:flex;align-items:center;justify-content:center;
      flex-shrink:0;
    ">
      <span style="font-size:var(--vv-text-heading-lg-size);color:${tokens.colorActionPrimary};">&#x26A1;</span>
    </div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        font-weight:var(--ds-font-weight-heading);
        color:var(--vv-color-text-on-inverse);
      ">VoltVenture Ride</div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        line-height:${tokens.typeLabelSm.lineHeight}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:var(--vv-space-1);
      ">Electric e-bike rental</div>
    </div>
    <div style="text-align:right;flex-shrink:0;">
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        font-weight:var(--ds-font-weight-heading);
        color:var(--vv-color-text-on-inverse);
      ">&#x20B9; 2.50/min</div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        line-height:${tokens.typeLabelSm.lineHeight}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:var(--vv-space-1);
      ">+ &#x20B9; 200 deposit</div>
    </div>
  </div>
`;

// ── Interactive export (DOM element, phone-framed) ──────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;justify-content:center;padding:var(--vv-space-6);box-sizing:border-box;';

  // Context label
  const label = document.createElement('div');
  label.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};margin-bottom:var(--vv-space-5);`;
  label.textContent = 'Your Ride';
  content.appendChild(label);

  // Ride Summary Card (dark, interactive)
  const card = document.createElement('div');
  card.style.cssText = `
    background:${tokens.colorSurfaceInverse};
    border-radius:${tokens.radiusLg}px;
    padding:var(--vv-space-5) var(--vv-space-6);
    display:flex;
    align-items:center;
    gap:var(--vv-space-4);
    box-sizing:border-box;
    cursor:pointer;
    transition:background 120ms var(--vv-easing-standard);
  `;

  const chip = document.createElement('div');
  chip.style.cssText = `
    width:40px;height:40px;
    background:rgba(198,255,45,0.13);
    border-radius:${tokens.radiusMd}px;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  `;
  chip.innerHTML = `<span style="font-size:var(--vv-text-heading-lg-size);color:${tokens.colorActionPrimary};">&#x26A1;</span>`;

  const textCol = document.createElement('div');
  textCol.style.cssText = 'flex:1;min-width:0;';
  textCol.innerHTML = `
    <div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;line-height:${tokens.typeBodyMd.lineHeight}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">VoltVenture Ride</div>
    <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;line-height:${tokens.typeLabelSm.lineHeight}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Electric e-bike rental</div>
  `;

  const rateCol = document.createElement('div');
  rateCol.style.cssText = 'text-align:right;flex-shrink:0;';
  rateCol.innerHTML = `
    <div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;line-height:${tokens.typeBodyMd.lineHeight}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">&#x20B9; 2.50/min</div>
    <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;line-height:${tokens.typeLabelSm.lineHeight}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">+ &#x20B9; 200 deposit</div>
  `;

  card.appendChild(chip);
  card.appendChild(textCol);
  card.appendChild(rateCol);

  // Press state interaction
  card.addEventListener('pointerdown', () => {
    card.style.backgroundColor = 'rgba(255,255,255,0.05)';
  });
  card.addEventListener('pointerup', () => {
    card.style.backgroundColor = tokens.colorSurfaceInverse;
  });
  card.addEventListener('pointerleave', () => {
    card.style.backgroundColor = tokens.colorSurfaceInverse;
  });

  content.appendChild(card);
  screen.appendChild(content);
  return frame;
};

// ── SourceCode export ──────────────────────────────────────────────────────────
const _cardJSX = `
// RideSummaryCard — React Native Paper
import { TouchableRipple, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: '#0F0F0F', // colorSurfaceInverse
    borderRadius: 20,           // radiusLg
  },
  chip: {
    width: 40,
    height: 40,
    borderRadius: 16,               // radiusMd
    backgroundColor: 'rgba(198,255,45,0.13)', // #C6FF2D22 — semi-transparent green
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipIcon: {
    fontSize: 20,
    color: '#C6FF2D', // colorActionPrimary
  },
  textCol: { flex: 1 },
  title: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    color: '#FFFFFF',
  },
  sub: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 14,
    color: '#808080', // colorTextSecondary
    marginTop: 2,
  },
  rateCol: { alignItems: 'flex-end' },
  rate: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    color: '#FFFFFF',
  },
  rateSub: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 14,
    color: '#808080', // colorTextSecondary
    marginTop: 2,
  },
});

export function RideSummaryCard({ title, sub, rate, rateSub, onPress }) {
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(255,255,255,0.08)">
      <View style={styles.container}>
        <View style={styles.chip}>
          <Text style={styles.chipIcon}>⚡</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.sub}>{sub}</Text>
        </View>
        <View style={styles.rateCol}>
          <Text style={styles.rate}>{rate}</Text>
          <Text style={styles.rateSub}>{rateSub}</Text>
        </View>
      </View>
    </TouchableRipple>
  );
}
`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// RideSummaryCard — React Native Paper Source</div>${_blk('RideSummaryCard',_cardJSX)}</div>`;
