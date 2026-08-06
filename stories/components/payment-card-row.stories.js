import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/PaymentCardRow' };

// ── Phone frame helper (402×874px, Volt Black bezel, 44px radius) ─────────────
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

// ── HTML helpers ────────────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}

// ── Selected state ─────────────────────────────────────────────────────────────
export const Selected = () => `
  <div style="
    display:flex;
    align-items:center;
    padding:12px 16px;
    gap:12px;
    background:${tokens.colorGreen100};
    box-sizing:border-box;
    min-height:56px;
    font-family:Inter,sans-serif;
  ">
    <div style="
      width:40px;height:40px;
      border-radius:${tokens.radiusMd}px;
      background:#ffffff;
      display:flex;align-items:center;justify-content:center;
      flex-shrink:0;
    ">
      <span style="font-size:20px;">&#x1F4B3;</span>
    </div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        font-weight:600;
        color:${tokens.colorTextPrimary};
      ">Credit / Debit Card</div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        line-height:${tokens.typeLabelSm.lineHeight}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:2px;
      ">Visa ending in 4829</div>
    </div>
    <div style="
      width:24px;height:24px;
      border-radius:50%;
      background:${tokens.colorActionPrimary};
      display:flex;align-items:center;justify-content:center;
      flex-shrink:0;
    ">
      <span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:700;">&#10003;</span>
    </div>
  </div>
`;

// ── Unselected state ───────────────────────────────────────────────────────────
export const Unselected = () => `
  <div style="
    display:flex;
    align-items:center;
    padding:12px 16px;
    gap:12px;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
    min-height:56px;
    font-family:Inter,sans-serif;
  ">
    <div style="
      width:40px;height:40px;
      border-radius:${tokens.radiusMd}px;
      background:${tokens.colorGrey100};
      display:flex;align-items:center;justify-content:center;
      flex-shrink:0;
    ">
      <span style="font-size:20px;">&#x1F4B3;</span>
    </div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        font-weight:600;
        color:${tokens.colorTextPrimary};
      ">Credit / Debit Card</div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        line-height:${tokens.typeLabelSm.lineHeight}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:2px;
      ">Visa ending in 4829</div>
    </div>
    <div style="
      width:24px;height:24px;
      border-radius:50%;
      background:#ffffff;
      border:2px solid ${tokens.colorGrey200};
      box-sizing:border-box;
      flex-shrink:0;
    "></div>
  </div>
`;

// ── Interactive export (DOM element, phone-framed) ──────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow-y:auto;';

  // Section label
  const label = document.createElement('div');
  label.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};margin-bottom:16px;`;
  label.textContent = 'Select Payment Method';
  content.appendChild(label);

  // Row data
  const rows = [
    { icon: '&#x1F4B3;', title: 'Credit / Debit Card', sub: 'Visa ending in 4829', selected: true },
    { icon: '&#xF8FF;',   title: 'Apple Pay',           sub: 'Tap to pay',           selected: false },
    { icon: '&#x1F4F1;', title: 'Google Wallet',        sub: 'Connected',             selected: false },
  ];

  // Track row DOM references
  const rowEls = [];

  function applySelected(el, isSelected) {
    const chip = el._chip;
    const radio = el._radio;
    if (isSelected) {
      el.style.background = tokens.colorGreen100;
      chip.style.background = '#ffffff';
      radio.style.background = tokens.colorActionPrimary;
      radio.style.border = 'none';
      radio.innerHTML = '<span style="font-size:12px;color:' + tokens.colorTextPrimary + ';font-weight:700;">&#10003;</span>';
    } else {
      el.style.background = tokens.colorSurfaceBase;
      chip.style.background = tokens.colorGrey100;
      radio.style.background = '#ffffff';
      radio.style.border = '2px solid ' + tokens.colorGrey200;
      radio.innerHTML = '';
    }
  }

  rows.forEach((data, idx) => {
    const row = document.createElement('div');
    row.style.cssText = `
      display:flex;align-items:center;padding:12px 16px;gap:12px;
      box-sizing:border-box;min-height:56px;cursor:pointer;
      border-radius:${tokens.radiusMd}px;margin-bottom:4px;
      background:${data.selected ? tokens.colorGreen100 : tokens.colorSurfaceBase};
      transition:background 120ms ease;
    `;

    const chip = document.createElement('div');
    chip.style.cssText = `
      width:40px;height:40px;border-radius:${tokens.radiusMd}px;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      background:${data.selected ? '#ffffff' : tokens.colorGrey100};
    `;
    chip.innerHTML = `<span style="font-size:20px;">${data.icon}</span>`;

    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;min-width:0;';
    textCol.innerHTML = `
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;line-height:${tokens.typeBodyMd.lineHeight}px;font-weight:600;color:${tokens.colorTextPrimary};">${data.title}</div>
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;line-height:${tokens.typeLabelSm.lineHeight}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};margin-top:2px;">${data.sub}</div>
    `;

    const radio = document.createElement('div');
    radio.style.cssText = `
      width:24px;height:24px;border-radius:50%;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;box-sizing:border-box;
      background:${data.selected ? tokens.colorActionPrimary : '#ffffff'};
      ${data.selected ? '' : 'border:2px solid ' + tokens.colorGrey200 + ';'}
    `;
    if (data.selected) {
      radio.innerHTML = `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:700;">&#10003;</span>`;
    }

    row._chip = chip;
    row._radio = radio;

    row.appendChild(chip);
    row.appendChild(textCol);
    row.appendChild(radio);
    content.appendChild(row);
    rowEls.push(row);

    row.addEventListener('pointerdown', () => {
      rowEls.forEach((r, i) => applySelected(r, i === idx));
    });
  });

  screen.appendChild(content);
  return frame;
};

// ── SourceCode export ──────────────────────────────────────────────────────────
const _selectedJSX = `
// PaymentCardRow — Selected variant (React Native Paper)
import { Surface, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    minHeight: 56,
    backgroundColor: '#F4FFD9', // colorGreen100
  },
  chip: {
    width: 40,
    height: 40,
    borderRadius: 16, // radiusMd
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: { flex: 1 },
  title: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
    color: '#0F0F0F', // colorTextPrimary
  },
  sub: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 14,
    color: '#808080', // colorTextSecondary
    marginTop: 2,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#C6FF2D', // colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCheck: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F0F0F', // colorTextPrimary
  },
});

export function PaymentCardRow({ selected = false, title, sub }) {
  return (
    <View style={[styles.container, !selected && { backgroundColor: '#FFFFFF' }]}>
      <View style={[styles.chip, !selected && { backgroundColor: '#F5F5F5' }]}>
        {/* card icon */}
      </View>
      <View style={styles.textCol}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.sub}>{sub}</Text>
      </View>
      <View style={[
        styles.radio,
        !selected && { backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#EBEBEB' },
      ]}>
        {selected && <Text style={styles.radioCheck}>✓</Text>}
      </View>
    </View>
  );
}
`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// PaymentCardRow — React Native Paper Source</div>${_blk('PaymentCardRow (Selected / Unselected)',_selectedJSX)}</div>`;
