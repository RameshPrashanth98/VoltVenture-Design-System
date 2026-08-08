import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/SelectPaymentMethod' };

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

// ── Default export (static HTML) ────────────────────────────────────────────────
export const Default = () => `
<div style="
  width:393px;
  min-height:852px;
  background:${tokens.colorSurfaceBase};
  font-family:Inter,sans-serif;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
">
  <!-- Status Bar -->
  <div style="height:62px;background:var(--vv-color-surface-inverse);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-6);box-sizing:border-box;">
    <span style="font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">9:41</span>
    <span style="font-size:var(--vv-text-label-sm-size);color:var(--vv-color-text-on-inverse);">&#9646; WiFi &#9650;</span>
  </div>

  <!-- Header Row -->
  <div style="height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;">
    <div style="width:36px;height:36px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">&#8592;</div>
    <div style="font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Select Payment</div>
  </div>

  <!-- Subtitle -->
  <div style="padding:var(--vv-space-2) var(--vv-space-5) var(--vv-space-5);font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};">Choose how to pay for this ride.</div>

  <!-- Ride Summary Card -->
  <div style="margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);box-sizing:border-box;">
    <div style="width:40px;height:40px;background:rgba(198,255,45,0.13);border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;">&#9889;</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:${tokens.typeBodyMd.fontSize}px;color:var(--vv-color-text-on-inverse);font-weight:var(--ds-font-weight-label-sm);">VoltVenture Ride</div>
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:var(--vv-space-1);">Electric e-bike</div>
    </div>
    <div style="text-align:right;flex-shrink:0;">
      <div style="font-size:${tokens.typeBodyMd.fontSize}px;color:var(--vv-color-text-on-inverse);font-weight:var(--ds-font-weight-label-sm);">&#8377; 2.50/min</div>
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:var(--vv-space-1);">+ &#8377; 200 deposit</div>
    </div>
  </div>

  <!-- Saved Methods Label -->
  <div style="padding:0 var(--vv-space-5) var(--vv-space-3);font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Saved Methods</div>

  <!-- Saved Methods List -->
  <div style="margin:0 var(--vv-space-5);background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};box-sizing:border-box;">
    <!-- Row A — Visa (PRE-SELECTED) -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorGreen100};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:var(--vv-text-heading-lg-size);color:var(--vv-color-text-on-inverse);">&#x1F4B3;</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Visa</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">&#8226;&#8226;&#8226;&#8226; 4829</div>
      </div>
      <div style="width:24px;height:24px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-display);">&#10003;</span>
      </div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);"></div>
    <!-- Row B — Mastercard (unselected) -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:var(--vv-text-heading-lg-size);">&#x1F4B3;</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Mastercard</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">&#8226;&#8226;&#8226;&#8226; 7261</div>
      </div>
      <div style="width:24px;height:24px;border-radius:var(--vv-radius-full);background:var(--vv-color-surface-base);border:2px solid ${tokens.colorGrey200};box-sizing:border-box;flex-shrink:0;"></div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);"></div>
    <!-- Row C — Apple Pay (unselected) -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:16px;color:var(--vv-color-text-on-inverse);">&#63743;</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Apple Pay</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Touch ID</div>
      </div>
      <div style="width:24px;height:24px;border-radius:var(--vv-radius-full);background:var(--vv-color-surface-base);border:2px solid ${tokens.colorGrey200};box-sizing:border-box;flex-shrink:0;"></div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);"></div>
    <!-- Row D — Add New Payment Method -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGreen100};display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-numeric-md-size);flex-shrink:0;color:${tokens.colorTextAccent};">+</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Add New Payment Method</div>
      </div>
      <div style="font-size:18px;color:${tokens.colorGrey300};">&#8250;</div>
    </div>
  </div>

  <!-- Trust Row -->
  <div style="display:flex;align-items:center;gap:var(--vv-space-3);padding:var(--vv-space-4) var(--vv-space-5);">
    <span style="font-size:14px;color:${tokens.colorGrey300};">&#128274;</span>
    <span style="font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Secured by Stripe</span>
  </div>

  <!-- Spacer -->
  <div style="flex:1;"></div>

  <!-- Confirm CTA -->
  <div style="padding:var(--vv-space-5);box-sizing:border-box;">
    <button style="
      width:100%;height:56px;background:${tokens.colorActionPrimary};
      border-radius:${tokens.radiusFull}px;border:none;
      font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;
      font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;
      box-sizing:border-box;
    ">&#9658; Confirm Payment</button>
  </div>
</div>
`;

// ── Interactive export (DOM element, phone-framed) ──────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow-y:auto;background:var(--vv-color-surface-base);';

  // Header Row
  const header = document.createElement('div');
  header.style.cssText = `height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;flex-shrink:0;`;
  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;cursor:pointer;`;
  backBtn.innerHTML = '&#8592;';
  const titleEl = document.createElement('div');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'Select Payment';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  // Subtitle
  const subtitle = document.createElement('div');
  subtitle.style.cssText = `padding:var(--vv-space-2) var(--vv-space-5) var(--vv-space-5);font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};flex-shrink:0;`;
  subtitle.textContent = 'Choose how to pay for this ride.';
  content.appendChild(subtitle);

  // Ride Summary Card
  const summaryCard = document.createElement('div');
  summaryCard.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);box-sizing:border-box;flex-shrink:0;`;
  summaryCard.innerHTML = `
    <div style="width:40px;height:40px;background:rgba(198,255,45,0.13);border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;">&#9889;</div>
    <div style="flex:1;min-width:0;">
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:var(--vv-color-text-on-inverse);font-weight:var(--ds-font-weight-label-sm);">VoltVenture Ride</div>
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:var(--vv-space-1);">Electric e-bike</div>
    </div>
    <div style="text-align:right;flex-shrink:0;">
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:var(--vv-color-text-on-inverse);font-weight:var(--ds-font-weight-label-sm);">&#8377; 2.50/min</div>
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:var(--vv-space-1);">+ &#8377; 200 deposit</div>
    </div>
  `;
  content.appendChild(summaryCard);

  // Saved Methods Label
  const methodsLabel = document.createElement('div');
  methodsLabel.style.cssText = `padding:0 var(--vv-space-5) var(--vv-space-3);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0;`;
  methodsLabel.textContent = 'Saved Methods';
  content.appendChild(methodsLabel);

  // Saved Methods List
  const methodsList = document.createElement('div');
  methodsList.style.cssText = `margin:0 var(--vv-space-5);background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};box-sizing:border-box;flex-shrink:0;`;

  const savedRows = [
    { id: 'visa', iconBg: tokens.colorSurfaceInverse, iconColor: '#ffffff', icon: '&#x1F4B3;', title: 'Visa', sub: '\u2022\u2022\u2022\u2022 4829', selectable: true, selected: true },
    { id: 'mc', iconBg: tokens.colorGrey100, iconColor: '', icon: '&#x1F4B3;', title: 'Mastercard', sub: '\u2022\u2022\u2022\u2022 7261', selectable: true, selected: false },
    { id: 'apple', iconBg: tokens.colorSurfaceInverse, iconColor: '#ffffff', icon: '&#63743;', title: 'Apple Pay', sub: 'Touch ID', selectable: true, selected: false },
  ];

  const rowEls = [];

  function applyRowState(el, isSelected) {
    el.style.background = isSelected ? tokens.colorGreen100 : tokens.colorSurfaceBase;
    el._radio.style.background = isSelected ? tokens.colorActionPrimary : '#ffffff';
    el._radio.style.border = isSelected ? 'none' : '2px solid ' + tokens.colorGrey200;
    el._radio.innerHTML = isSelected
      ? `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-display);">&#10003;</span>`
      : '';
  }

  savedRows.forEach((data, idx) => {
    if (idx > 0) {
      const divider = document.createElement('div');
      divider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);`;
      methodsList.appendChild(divider);
    }

    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);min-height:56px;box-sizing:border-box;cursor:pointer;background:${data.selected ? tokens.colorGreen100 : tokens.colorSurfaceBase};`;

    const chip = document.createElement('div');
    chip.style.cssText = `width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${data.iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
    if (data.iconColor) {
      chip.innerHTML = `<span style="font-size:16px;color:${data.iconColor};">${data.icon}</span>`;
    } else {
      chip.innerHTML = `<span style="font-size:var(--vv-text-heading-lg-size);">${data.icon}</span>`;
    }

    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;min-width:0;';
    textCol.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">${data.title}</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">${data.sub}</div>`;

    const radio = document.createElement('div');
    radio.style.cssText = `width:24px;height:24px;border-radius:var(--vv-radius-full);flex-shrink:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box;background:${data.selected ? tokens.colorActionPrimary : '#ffffff'};${data.selected ? '' : 'border:2px solid ' + tokens.colorGrey200 + ';'}`;
    if (data.selected) {
      radio.innerHTML = `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-display);">&#10003;</span>`;
    }

    row._radio = radio;

    row.appendChild(chip);
    row.appendChild(textCol);
    row.appendChild(radio);
    methodsList.appendChild(row);
    rowEls.push(row);

    row.addEventListener('pointerdown', () => {
      rowEls.forEach((r, i) => applyRowState(r, i === idx));
    });
  });

  // Divider before Add New row
  const addDivider = document.createElement('div');
  addDivider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);`;
  methodsList.appendChild(addDivider);

  // Row D — Add New Payment Method (no radio, press feedback only)
  const addRow = document.createElement('div');
  addRow.style.cssText = `display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);min-height:56px;box-sizing:border-box;cursor:pointer;background:${tokens.colorSurfaceBase};transition:background var(--vv-duration-fast) var(--vv-easing-standard);`;
  addRow.innerHTML = `
    <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGreen100};display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-numeric-md-size);color:${tokens.colorTextAccent};flex-shrink:0;">+</div>
    <div style="flex:1;min-width:0;font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Add New Payment Method</div>
    <div style="font-size:18px;color:${tokens.colorGrey300};">&#8250;</div>
  `;
  addRow.addEventListener('pointerdown', () => { addRow.style.background = tokens.colorGrey100; });
  addRow.addEventListener('pointerup', () => { addRow.style.background = tokens.colorSurfaceBase; });
  addRow.addEventListener('pointerleave', () => { addRow.style.background = tokens.colorSurfaceBase; });
  methodsList.appendChild(addRow);

  content.appendChild(methodsList);

  // Trust Row
  const trustRow = document.createElement('div');
  trustRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);padding:var(--vv-space-4) var(--vv-space-5);flex-shrink:0;';
  trustRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:14px;color:${tokens.colorGrey300};">&#128274;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Secured by Stripe</span>`;
  content.appendChild(trustRow);

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  // Confirm CTA
  const ctaWrapper = document.createElement('div');
  ctaWrapper.style.cssText = 'padding:var(--vv-space-5);box-sizing:border-box;flex-shrink:0;';
  const confirmBtn = document.createElement('button');
  confirmBtn.style.cssText = `width:100%;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;box-sizing:border-box;transition:background 120ms var(--vv-easing-standard),transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  confirmBtn.innerHTML = '&#9658; Confirm Payment';
  confirmBtn.addEventListener('pointerdown', () => {
    confirmBtn.style.background = tokens.colorGreen600;
    confirmBtn.style.transform = 'scale(0.97)';
  });
  confirmBtn.addEventListener('pointerup', () => {
    confirmBtn.style.background = tokens.colorActionPrimary;
    confirmBtn.style.transform = 'scale(1)';
  });
  confirmBtn.addEventListener('pointerleave', () => {
    confirmBtn.style.background = tokens.colorActionPrimary;
    confirmBtn.style.transform = 'scale(1)';
  });
  ctaWrapper.appendChild(confirmBtn);
  content.appendChild(ctaWrapper);

  screen.appendChild(content);
  return frame;
};

// ── SourceCode export ──────────────────────────────────────────────────────────
const _rnJSX = `
// SelectPaymentMethod — React Native Paper
import { Surface, Text } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { createVoltVentureTheme } from 'voltventure-design-system';

const theme = createVoltVentureTheme();

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF', // colorSurfaceBase
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 16,
    gap: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5', // colorGrey100
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Manjari',
    fontSize: 20, // typeHeadingMd
    fontWeight: '700',
    color: '#0F0F0F', // colorTextPrimary
  },
  summaryCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#0F0F0F', // colorSurfaceInverse
    borderRadius: 20, // radiusLg
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bikeChip: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(198,255,45,0.13)',
    borderRadius: 16, // radiusMd
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodsList: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20, // radiusLg
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F5F5F5', // colorGrey100
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    minHeight: 56,
  },
  rowSelected: {
    backgroundColor: '#F4FFD9', // colorGreen100
  },
  radioSelected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#C6FF2D', // colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioUnselected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#EBEBEB', // colorGrey200
  },
  addNewChip: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: '#F4FFD9', // colorGreen100
    alignItems: 'center',
    justifyContent: 'center',
  },
  cta: {
    marginHorizontal: 16,
    marginVertical: 16,
    height: 56,
    borderRadius: 999, // radiusFull
    backgroundColor: '#C6FF2D', // colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaLabel: {
    fontFamily: 'Inter',
    fontSize: 15, // typeHeadingSm
    fontWeight: '600',
    color: '#0F0F0F', // colorTextPrimary
  },
});

const SAVED_METHODS = [
  { id: 'visa', label: 'Visa', sub: '\u2022\u2022\u2022\u2022 4829' },
  { id: 'mc', label: 'Mastercard', sub: '\u2022\u2022\u2022\u2022 7261' },
  { id: 'apple', label: 'Apple Pay', sub: 'Touch ID' },
];

export function SelectPaymentMethodScreen({ onConfirm }) {
  const [selected, setSelected] = React.useState('visa');
  return (
    <Surface style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}><Text>&#8592;</Text></TouchableOpacity>
          <Text style={styles.title}>Select Payment</Text>
        </View>
        <Text style={{ paddingHorizontal: 16, paddingTop: 4, paddingBottom: 16, fontFamily: 'Inter', fontSize: 15, color: '#808080' }}>
          Choose how to pay for this ride.
        </Text>
        <View style={styles.summaryCard}>
          <View style={styles.bikeChip}><Text style={{ fontSize: 20 }}>&#9889;</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: 15 }}>VoltVenture Ride</Text>
            <Text style={{ color: '#808080', fontFamily: 'Inter', fontSize: 11, marginTop: 2 }}>Electric e-bike</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: 15 }}>&#8377; 2.50/min</Text>
            <Text style={{ color: '#808080', fontFamily: 'Inter', fontSize: 11, marginTop: 2 }}>+ &#8377; 200 deposit</Text>
          </View>
        </View>
        <View style={styles.methodsList}>
          {SAVED_METHODS.map((m, i) => (
            <TouchableOpacity
              key={m.id}
              style={[styles.row, selected === m.id && styles.rowSelected]}
              onPress={() => setSelected(m.id)}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>{m.label}</Text>
                <Text style={{ fontFamily: 'Inter', fontSize: 11, color: '#808080', marginTop: 2 }}>{m.sub}</Text>
              </View>
              {selected === m.id
                ? <View style={styles.radioSelected}><Text style={{ fontSize: 12, fontWeight: '700', color: '#0F0F0F' }}>&#10003;</Text></View>
                : <View style={styles.radioUnselected} />}
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.row}>
            <View style={styles.addNewChip}><Text style={{ fontSize: 22, color: '#7D9220' }}>+</Text></View>
            <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Add New Payment Method</Text>
            <Text style={{ fontSize: 18, color: '#C9C9C9' }}>&#8250;</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.cta} onPress={onConfirm}>
          <Text style={styles.ctaLabel}>&#9658; Confirm Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </Surface>
  );
}
`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// SelectPaymentMethod — React Native Paper</div>${_blk('SelectPaymentMethodScreen',_rnJSX)}</div>`;
