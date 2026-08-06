import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/DashboardPanel' };

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

// ── Helpers ────────────────────────────────────────────────────────────────────
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}

// ── Default (static HTML) ──────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusXl}px ${tokens.radiusXl}px 0 0;
    padding:0 0 16px;box-sizing:border-box;
    display:flex;flex-direction:column;
    font-family:Inter,sans-serif;
    box-shadow:${shadowFromToken(tokens.elevationOverlay)};
  ">
    <!-- Handle Row -->
    <div style="height:24px;display:flex;align-items:center;justify-content:center;">
      <div style="width:36px;height:4px;background:${tokens.colorGrey300};border-radius:4px;"></div>
    </div>
    <!-- Timer Row -->
    <div style="height:48px;display:flex;align-items:center;padding:0 16px;gap:8px;flex-shrink:0;">
      <span style="font-size:16px;color:${tokens.colorGrey500};">&#9201;</span>
      <span style="font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};">00:23:41</span>
      <div style="flex:1;"></div>
      <!-- Live Badge -->
      <div style="display:flex;align-items:center;gap:4px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;padding:4px 10px;">
        <div style="width:6px;height:6px;background:${tokens.colorTextPrimary};border-radius:50%;"></div>
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:700;color:${tokens.colorTextPrimary};">LIVE</span>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};"></div>
    <!-- Telemetry Row -->
    <div style="height:110px;display:flex;align-items:center;">
      <div style="flex:1;text-align:center;">
        <div style="font-size:40px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">24</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">km/h</div>
      </div>
      <div style="width:1px;height:80px;background:${tokens.colorGrey200};"></div>
      <div style="flex:1;text-align:center;">
        <div style="font-size:40px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">18.3</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">km left</div>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};"></div>
    <!-- Billing Section -->
    <div style="padding:12px 16px;display:flex;flex-direction:column;gap:6px;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Billing</div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">&#9679; Base Rental</span>
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">&#8377; 2.50/min</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorActionPrimary};">&#9679; Electricity Charge</span>
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">&#8377; 0.80</span>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:${tokens.fontSizeBodyMd}px;font-weight:700;color:${tokens.colorTextPrimary};">Total</span>
        <span style="font-size:${tokens.fontSizeBodyMd}px;font-weight:700;color:${tokens.colorTextPrimary};">&#8377; 18.20</span>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};"></div>
    <!-- Action Row -->
    <div style="padding:12px 16px;display:flex;gap:12px;">
      <!-- SOS: 80x56px, #EF4444 — SOS brand exception, no VV token -->
      <button style="width:80px;height:56px;background:#EF4444;border-radius:${tokens.radiusMd}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:700;color:#ffffff;">SOS</button>
      <!-- End Ride -->
      <button style="flex:1;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusMd}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};">End Ride</button>
    </div>
  </div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  // Map background (screen bg = grey placeholder)
  const mapBg = document.createElement('div');
  mapBg.style.cssText = 'flex:1;background:#e8e8e8;position:relative;';
  screen.appendChild(mapBg);

  // Dashboard panel pushed to bottom via margin-top:auto
  const panel = document.createElement('div');
  panel.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusXl}px ${tokens.radiusXl}px 0 0;padding:0 0 16px;box-sizing:border-box;display:flex;flex-direction:column;flex-shrink:0;`;

  // Handle
  const handleRow = document.createElement('div');
  handleRow.style.cssText = 'height:24px;display:flex;align-items:center;justify-content:center;';
  const handleBar = document.createElement('div');
  handleBar.style.cssText = `width:36px;height:4px;background:${tokens.colorGrey300};border-radius:4px;`;
  handleRow.appendChild(handleBar);
  panel.appendChild(handleRow);

  // Timer row
  const timerRow = document.createElement('div');
  timerRow.style.cssText = 'height:48px;display:flex;align-items:center;padding:0 16px;gap:8px;flex-shrink:0;';
  const timerIcon = document.createElement('span');
  timerIcon.style.cssText = `font-size:16px;color:${tokens.colorGrey500};`;
  timerIcon.textContent = '\u23F1';
  const timerText = document.createElement('span');
  timerText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};`;
  timerText.textContent = '00:23:41';
  const timerSpacer = document.createElement('div');
  timerSpacer.style.cssText = 'flex:1;';
  const liveBadge = document.createElement('div');
  liveBadge.style.cssText = `display:flex;align-items:center;gap:4px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;padding:4px 10px;`;
  const liveDot = document.createElement('div');
  liveDot.style.cssText = `width:6px;height:6px;background:${tokens.colorTextPrimary};border-radius:50%;`;
  const liveText = document.createElement('span');
  liveText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:700;color:${tokens.colorTextPrimary};`;
  liveText.textContent = 'LIVE';
  liveBadge.appendChild(liveDot);
  liveBadge.appendChild(liveText);
  timerRow.appendChild(timerIcon);
  timerRow.appendChild(timerText);
  timerRow.appendChild(timerSpacer);
  timerRow.appendChild(liveBadge);
  panel.appendChild(timerRow);

  // Divider
  const d1 = document.createElement('div');
  d1.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  panel.appendChild(d1);

  // Telemetry row
  const teleRow = document.createElement('div');
  teleRow.style.cssText = 'height:110px;display:flex;align-items:center;';
  const speedBlock = document.createElement('div');
  speedBlock.style.cssText = 'flex:1;text-align:center;';
  speedBlock.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:40px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">24</div><div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">km/h</div>`;
  const teleDivider = document.createElement('div');
  teleDivider.style.cssText = `width:1px;height:80px;background:${tokens.colorGrey200};`;
  const rangeBlock = document.createElement('div');
  rangeBlock.style.cssText = 'flex:1;text-align:center;';
  rangeBlock.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:40px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">18.3</div><div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">km left</div>`;
  teleRow.appendChild(speedBlock);
  teleRow.appendChild(teleDivider);
  teleRow.appendChild(rangeBlock);
  panel.appendChild(teleRow);

  const d2 = document.createElement('div');
  d2.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  panel.appendChild(d2);

  // Billing section
  const billing = document.createElement('div');
  billing.style.cssText = 'padding:12px 16px;display:flex;flex-direction:column;gap:6px;';
  billing.innerHTML = `
    <div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Billing</div>
    <div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorGrey500};">\u25CF Base Rental</span><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorTextSecondary};">\u20B9 2.50/min</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorActionPrimary};">\u25CF Electricity Charge</span><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;color:${tokens.colorTextSecondary};">\u20B9 0.80</span></div>
    <div style="height:1px;background:${tokens.colorGrey100};"></div>
    <div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:700;color:${tokens.colorTextPrimary};">Total</span><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:700;color:${tokens.colorTextPrimary};">\u20B9 18.20</span></div>
  `;
  panel.appendChild(billing);

  const d3 = document.createElement('div');
  d3.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  panel.appendChild(d3);

  // Action row
  const actionRow = document.createElement('div');
  actionRow.style.cssText = 'padding:12px 16px;display:flex;gap:12px;';

  // SOS button — #EF4444 brand exception, no VV token
  const sosBtn = document.createElement('button');
  sosBtn.style.cssText = `width:80px;height:56px;background:#EF4444;border-radius:${tokens.radiusMd}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:700;color:#ffffff;`;
  sosBtn.textContent = 'SOS';
  sosBtn.addEventListener('pointerdown', () => { sosBtn.style.background = '#c83a3a'; sosBtn.style.transform = 'scale(0.97)'; });
  sosBtn.addEventListener('pointerup', () => { sosBtn.style.background = '#EF4444'; sosBtn.style.transform = ''; });
  sosBtn.addEventListener('pointerleave', () => { sosBtn.style.background = '#EF4444'; sosBtn.style.transform = ''; });

  // End Ride button
  const endBtn = document.createElement('button');
  endBtn.style.cssText = `flex:1;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusMd}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};`;
  endBtn.textContent = 'End Ride';
  endBtn.addEventListener('pointerdown', () => { endBtn.style.background = tokens.colorGreen600; endBtn.style.transform = 'scale(0.97)'; });
  endBtn.addEventListener('pointerup', () => { endBtn.style.background = tokens.colorActionPrimary; endBtn.style.transform = ''; });
  endBtn.addEventListener('pointerleave', () => { endBtn.style.background = tokens.colorActionPrimary; endBtn.style.transform = ''; });

  actionRow.appendChild(sosBtn);
  actionRow.appendChild(endBtn);
  panel.appendChild(actionRow);

  screen.appendChild(panel);
  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// colorSurfaceBase: '#FFFFFF'   colorActionPrimary: '#C6FF2D'
// colorGrey100: '#F5F5F5'   colorGrey200: '#EBEBEB'
// colorGrey300: '#C9C9C9'   colorGrey500: '#808080'
// colorGreen600 (pressed): '#A8DE1A'
// #EF4444 — SOS brand exception, no VV token

const DashboardPanel = () => (
  <View style={styles.panel}>
    {/* Handle */}
    <View style={styles.handleRow}>
      <View style={styles.handle} />
    </View>

    {/* Timer Row */}
    <View style={styles.timerRow}>
      <Text style={styles.timerIcon}>{'\u23F1'}</Text>
      <Text style={styles.timerText}>00:23:41</Text>
      <View style={{ flex: 1 }} />
      <View style={styles.liveBadge}>
        <View style={styles.liveDot} />
        <Text style={styles.liveText}>LIVE</Text>
      </View>
    </View>

    {/* Telemetry Row */}
    <View style={styles.teleRow}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.teleValue}>24</Text>
        <Text style={styles.teleUnit}>km/h</Text>
      </View>
      <View style={styles.teleDivider} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.teleValue}>18.3</Text>
        <Text style={styles.teleUnit}>km left</Text>
      </View>
    </View>

    {/* Action Row */}
    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.sosBtn}>
        {/* #EF4444 — SOS brand exception, no VV token */}
        <Text style={styles.sosBtnText}>SOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.endBtn}>
        <Text style={styles.endBtnText}>End Ride</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  panel: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 28, borderTopRightRadius: 28, paddingBottom: 16 },
  handleRow: { height: 24, alignItems: 'center', justifyContent: 'center' },
  handle: { width: 36, height: 4, backgroundColor: '#C9C9C9', borderRadius: 4 },
  timerRow: { height: 48, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 8 },
  timerIcon: { fontSize: 16, color: '#808080' },
  timerText: { fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' },
  liveBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#C6FF2D', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, gap: 4 },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#0F0F0F' },
  liveText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '700', color: '#0F0F0F' },
  teleRow: { height: 110, flexDirection: 'row', alignItems: 'center' },
  teleValue: { fontFamily: 'Inter', fontSize: 40, fontWeight: '700', color: '#0F0F0F', lineHeight: 40 },
  teleUnit: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
  teleDivider: { width: 1, height: 80, backgroundColor: '#EBEBEB' },
  actionRow: { paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', gap: 12 },
  sosBtn: { width: 80, height: 56, backgroundColor: '#EF4444', borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  sosBtnText: { fontFamily: 'Inter', fontSize: 15, fontWeight: '700', color: '#FFFFFF' },
  endBtn: { flex: 1, height: 56, backgroundColor: '#C6FF2D', borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  endBtnText: { fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' },
});

export default DashboardPanel;`;

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px">` +
  `<div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// DashboardPanel — React Native Paper (C-02)</div>` +
  _blk('DashboardPanel.tsx', RN_JSX) +
  `</div>`;
