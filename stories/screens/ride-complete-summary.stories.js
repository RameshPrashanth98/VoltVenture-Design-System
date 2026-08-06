import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/RideCompleteSummary' };

// ── Default (static HTML) ───────────────────────────────────────────────────

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">

    <!-- Status Bar (62px) — light surface -->
    <div style="
      height:62px;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-family:Inter,sans-serif;font-size:11px;color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>

    <!-- Header Wrap -->
    <div style="
      padding:24px 20px;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Check Circle Outer (72px, colorGreen100) -->
      <div style="
        position:relative;
        width:72px;
        height:72px;
        border-radius:50%;
        background:${tokens.colorGreen100};
        display:flex;
        align-items:center;
        justify-content:center;
      ">
        <!-- Inner Circle (52px, colorActionPrimary) -->
        <div style="
          position:absolute;
          width:52px;
          height:52px;
          border-radius:50%;
          background:${tokens.colorActionPrimary};
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          <span style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};">&#10003;</span>
        </div>
      </div>

      <!-- Header Title -->
      <div style="
        font-family:Manjari,sans-serif;
        font-size:${tokens.typeHeadingLg.fontSize}px;
        font-weight:${tokens.typeHeadingLg.fontWeight};
        color:${tokens.colorTextPrimary};
        margin-top:16px;
        line-height:1.3;
      ">Ride Complete!</div>

      <!-- Header Subtitle -->
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:6px;
        line-height:1.5;
      ">Thanks for riding with VoltVenture.</div>
    </div>

    <!-- Ride Stats Card (dark) -->
    <div style="
      margin:0 16px;
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusXl}px;
      padding:20px 0;
      display:flex;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Block 1: Distance -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
        <span style="font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:#ffffff;">3.2 km</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Distance</span>
      </div>

      <!-- Divider 1 -->
      <div style="width:1px;height:40px;background:rgba(255,255,255,0.13);align-self:center;"></div>

      <!-- Block 2: Duration -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
        <span style="font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:#ffffff;">00:12:34</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Duration</span>
      </div>

      <!-- Divider 2 -->
      <div style="width:1px;height:40px;background:rgba(255,255,255,0.13);align-self:center;"></div>

      <!-- Block 3: VoltCoins -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">
        <span style="font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorActionPrimary};">+12</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">VoltCoins</span>
      </div>
    </div>

    <!-- Billing Label -->
    <div style="
      margin:16px 16px 8px;
      font-family:Inter,sans-serif;
      font-size:${tokens.typeLabelMd.fontSize}px;
      font-weight:${tokens.typeLabelMd.fontWeight};
      color:${tokens.colorTextSecondary};
    ">Billing Summary</div>

    <!-- Billing Card -->
    <div style="
      margin:0 16px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusLg}px;
      border:1px solid ${tokens.colorGrey100};
      padding:16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Base Cost Row -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorGrey500};flex-shrink:0;"></div>
          <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Base Rental</span>
        </div>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">&#8377; 15.00</span>
      </div>

      <!-- Electricity Row -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorActionPrimary};flex-shrink:0;"></div>
          <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Electricity Charge</span>
        </div>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">&#8377; 3.20</span>
      </div>

      <!-- Divider -->
      <div style="height:1px;background:${tokens.colorGrey100};margin-bottom:12px;"></div>

      <!-- Total Row -->
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">Total</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">&#8377; 18.20</span>
      </div>
    </div>

    <!-- Deposit Note Row -->
    <div style="
      margin:8px 16px;
      background:${tokens.colorGreen100};
      border-radius:${tokens.radiusMd}px;
      padding:12px 16px;
      display:flex;
      align-items:center;
      gap:8px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="font-size:16px;color:${tokens.colorTextAccent};">&#128737;</span>
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextAccent};
        line-height:1.4;
      ">Security deposit of &#8377; 200 will be released within 24 hours</span>
    </div>

    <!-- VoltCoins Banner -->
    <div style="
      margin:8px 16px 0;
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusLg}px;
      padding:16px;
      display:flex;
      align-items:center;
      gap:12px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Coin Badge -->
      <div style="
        width:36px;
        height:36px;
        border-radius:50%;
        background:${tokens.colorActionPrimary};
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      ">
        <span style="font-size:18px;color:#0f0f0f;">&#9889;</span>
      </div>

      <!-- Coins Text -->
      <div style="flex:1;display:flex;flex-direction:column;gap:2px;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:${tokens.typeBodyMd.fontWeight};color:#ffffff;">You earned 12 VoltCoins!</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Redeem for rewards</span>
      </div>

      <!-- Chevron -->
      <span style="font-size:18px;color:#ffffff;font-weight:600;">&#8250;</span>
    </div>

    <!-- CTA Wrap -->
    <div style="
      padding:16px;
      margin-top:auto;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Done Button -->
      <div style="
        height:56px;
        width:100%;
        background:${tokens.colorActionPrimary};
        border-radius:${tokens.radiusFull}px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeHeadingSm.fontSize}px;
          font-weight:${tokens.typeHeadingSm.fontWeight};
          color:${tokens.colorTextPrimary};
        ">&#127968; Done</span>
      </div>

      <!-- View Receipt Link -->
      <div style="
        text-align:center;
        margin-top:12px;
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        color:${tokens.colorTextSecondary};
        cursor:pointer;
      ">View Receipt</div>
    </div>

  </div>
`;

// ── makePhoneFrame helper (inline, per-file) ─────────────────────────────────

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

// ── Interactive export ────────────────────────────────────────────────────────

export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Scroll container
  const scrollArea = document.createElement('div');
  scrollArea.style.cssText = 'flex:1;overflow-y:auto;display:flex;flex-direction:column;';

  // Header Wrap
  const headerWrap = document.createElement('div');
  headerWrap.style.cssText = 'padding:24px 20px;display:flex;flex-direction:column;align-items:center;text-align:center;box-sizing:border-box;flex-shrink:0;';

  // Check Circle Outer
  const outerCircle = document.createElement('div');
  outerCircle.style.cssText = `position:relative;width:72px;height:72px;border-radius:50%;background:${tokens.colorGreen100};display:flex;align-items:center;justify-content:center;`;

  // Inner Circle
  const innerCircle = document.createElement('div');
  innerCircle.style.cssText = `position:absolute;width:52px;height:52px;border-radius:50%;background:${tokens.colorActionPrimary};display:flex;align-items:center;justify-content:center;`;
  const checkmark = document.createElement('span');
  checkmark.style.cssText = `font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};`;
  checkmark.innerHTML = '&#10003;';
  innerCircle.appendChild(checkmark);
  outerCircle.appendChild(innerCircle);

  const headerTitle = document.createElement('div');
  headerTitle.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingLg.fontSize}px;font-weight:${tokens.typeHeadingLg.fontWeight};color:${tokens.colorTextPrimary};margin-top:16px;line-height:1.3;`;
  headerTitle.textContent = 'Ride Complete!';

  const headerSubtitle = document.createElement('div');
  headerSubtitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:${tokens.typeBodyMd.fontWeight};color:${tokens.colorTextSecondary};margin-top:6px;line-height:1.5;`;
  headerSubtitle.textContent = 'Thanks for riding with VoltVenture.';

  headerWrap.appendChild(outerCircle);
  headerWrap.appendChild(headerTitle);
  headerWrap.appendChild(headerSubtitle);

  // Ride Stats Card
  const statsCard = document.createElement('div');
  statsCard.style.cssText = `margin:0 16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusXl}px;padding:20px 0;display:flex;flex-shrink:0;box-sizing:border-box;`;

  const statBlocks = [
    { value: '3.2 km', label: 'Distance', color: '#ffffff' },
    { value: '00:12:34', label: 'Duration', color: '#ffffff' },
    { value: '+12', label: 'VoltCoins', color: tokens.colorActionPrimary },
  ];

  statBlocks.forEach((stat, i) => {
    const block = document.createElement('div');
    block.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;';

    const val = document.createElement('span');
    val.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${stat.color};`;
    val.textContent = stat.value;

    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};`;
    lbl.textContent = stat.label;

    block.appendChild(val);
    block.appendChild(lbl);
    statsCard.appendChild(block);

    if (i < statBlocks.length - 1) {
      const divider = document.createElement('div');
      divider.style.cssText = 'width:1px;height:40px;background:rgba(255,255,255,0.13);align-self:center;flex-shrink:0;';
      statsCard.appendChild(divider);
    }
  });

  // Billing Label
  const billingLabel = document.createElement('div');
  billingLabel.style.cssText = `margin:16px 16px 8px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextSecondary};flex-shrink:0;`;
  billingLabel.textContent = 'Billing Summary';

  // Billing Card
  const billingCard = document.createElement('div');
  billingCard.style.cssText = `margin:0 16px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:16px;box-sizing:border-box;flex-shrink:0;`;

  // Base Cost Row
  const baseRow = document.createElement('div');
  baseRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;';
  baseRow.innerHTML = `<div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorGrey500};"></div><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Base Rental</span></div><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">&#8377; 15.00</span>`;

  // Electricity Row
  const electricRow = document.createElement('div');
  electricRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;';
  electricRow.innerHTML = `<div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorActionPrimary};"></div><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Electricity Charge</span></div><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">&#8377; 3.20</span>`;

  // Divider
  const billingDivider = document.createElement('div');
  billingDivider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin-bottom:12px;`;

  // Total Row
  const totalRow = document.createElement('div');
  totalRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;';
  totalRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">Total</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">&#8377; 18.20</span>`;

  billingCard.appendChild(baseRow);
  billingCard.appendChild(electricRow);
  billingCard.appendChild(billingDivider);
  billingCard.appendChild(totalRow);

  // Deposit Note Row
  const depositNote = document.createElement('div');
  depositNote.style.cssText = `margin:8px 16px;background:${tokens.colorGreen100};border-radius:${tokens.radiusMd}px;padding:12px 16px;display:flex;align-items:center;gap:8px;box-sizing:border-box;flex-shrink:0;`;
  const depositIcon = document.createElement('span');
  depositIcon.style.cssText = `font-size:16px;color:${tokens.colorTextAccent};`;
  depositIcon.innerHTML = '&#128737;';
  const depositText = document.createElement('span');
  depositText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextAccent};line-height:1.4;`;
  depositText.textContent = 'Security deposit of \u20B9 200 will be released within 24 hours';
  depositNote.appendChild(depositIcon);
  depositNote.appendChild(depositText);

  // VoltCoins Banner
  const voltcoinsBanner = document.createElement('div');
  voltcoinsBanner.style.cssText = `margin:8px 16px 0;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:16px;display:flex;align-items:center;gap:12px;box-sizing:border-box;flex-shrink:0;`;

  const coinBadge = document.createElement('div');
  coinBadge.style.cssText = `width:36px;height:36px;border-radius:50%;background:${tokens.colorActionPrimary};display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
  coinBadge.innerHTML = '<span style="font-size:18px;color:#0f0f0f;">&#9889;</span>';

  const coinsText = document.createElement('div');
  coinsText.style.cssText = 'flex:1;display:flex;flex-direction:column;gap:2px;';
  coinsText.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:#ffffff;">You earned 12 VoltCoins!</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Redeem for rewards</span>`;

  const chevron = document.createElement('span');
  chevron.style.cssText = 'font-size:18px;color:#ffffff;font-weight:600;';
  chevron.innerHTML = '&#8250;';

  voltcoinsBanner.appendChild(coinBadge);
  voltcoinsBanner.appendChild(coinsText);
  voltcoinsBanner.appendChild(chevron);

  // CTA Wrap
  const ctaWrap = document.createElement('div');
  ctaWrap.style.cssText = 'padding:16px;margin-top:auto;box-sizing:border-box;flex-shrink:0;';

  // Done Button
  const doneBtn = document.createElement('div');
  doneBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;transition:transform 100ms ease,background-color 100ms ease;`;
  const doneBtnText = document.createElement('span');
  doneBtnText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:${tokens.typeHeadingSm.fontWeight};color:${tokens.colorTextPrimary};`;
  doneBtnText.innerHTML = '&#127968; Done';
  doneBtn.appendChild(doneBtnText);

  doneBtn.addEventListener('pointerdown', () => {
    doneBtn.style.backgroundColor = tokens.colorGreen600;
    doneBtn.style.transform = 'scale(0.97)';
  });
  doneBtn.addEventListener('pointerup', () => {
    doneBtn.style.backgroundColor = tokens.colorActionPrimary;
    doneBtn.style.transform = 'scale(1)';
  });
  doneBtn.addEventListener('pointerleave', () => {
    doneBtn.style.backgroundColor = tokens.colorActionPrimary;
    doneBtn.style.transform = 'scale(1)';
  });

  // View Receipt Link
  const receiptLink = document.createElement('div');
  receiptLink.style.cssText = `text-align:center;margin-top:12px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextSecondary};cursor:pointer;`;
  receiptLink.textContent = 'View Receipt';

  ctaWrap.appendChild(doneBtn);
  ctaWrap.appendChild(receiptLink);

  // Assemble scroll area
  scrollArea.appendChild(headerWrap);
  scrollArea.appendChild(statsCard);
  scrollArea.appendChild(billingLabel);
  scrollArea.appendChild(billingCard);
  scrollArea.appendChild(depositNote);
  scrollArea.appendChild(voltcoinsBanner);
  scrollArea.appendChild(ctaWrap);

  screen.appendChild(scrollArea);
  return frame;
};

// ── Source code panel ─────────────────────────────────────────────────────────

function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_RIDECOMPLETE_JSX = `// RideCompleteSummary Screen — React Native Paper
import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase      = '#FFFFFF'
// tokens.colorSurfaceInverse   = '#0F0F0F'
// tokens.colorActionPrimary    = '#C6FF2D'  — '#C6FF2D'
// tokens.colorGreen100         = '#F4FFD9'
// tokens.colorGreen600         = '#A8DE1A'
// tokens.colorGrey500          = '#808080'
// tokens.colorGrey100          = '#F5F5F5'
// tokens.colorTextPrimary      = '#0F0F0F'
// tokens.colorTextSecondary    = '#808080'
// tokens.colorTextAccent       = '#7D9220'
// tokens.radiusXl              = 28
// tokens.radiusLg              = 20
// tokens.radiusMd              = 16
// tokens.radiusFull            = 999

const RideCompleteSummaryScreen = () => {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.headerWrap}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.checkmark}>\\u2713</Text>
          </View>
        </View>
        <Text style={styles.headerTitle}>Ride Complete!</Text>
        <Text style={styles.headerSubtitle}>Thanks for riding with VoltVenture.</Text>
      </View>

      {/* Ride Stats Card */}
      <View style={styles.statsCard}>
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>3.2 km</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>00:12:34</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}>
          <Text style={[styles.statValue, { color: '#c6ff2d' }]}>+12</Text>
          <Text style={styles.statLabel}>VoltCoins</Text>
        </View>
      </View>

      {/* Billing Label */}
      <Text style={styles.billingLabel}>Billing Summary</Text>

      {/* Billing Card */}
      <View style={styles.billingCard}>
        <View style={styles.billingRow}>
          <View style={styles.dotRow}>
            <View style={[styles.dot, { backgroundColor: '#808080' }]} />
            <Text style={styles.billingItem}>Base Rental</Text>
          </View>
          <Text style={styles.billingItem}>\\u20B9 15.00</Text>
        </View>
        <View style={styles.billingRow}>
          <View style={styles.dotRow}>
            <View style={[styles.dot, { backgroundColor: '#c6ff2d' }]} />
            <Text style={styles.billingItem}>Electricity Charge</Text>
          </View>
          <Text style={styles.billingItem}>\\u20B9 3.20</Text>
        </View>
        <View style={styles.billingDivider} />
        <View style={styles.billingRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalLabel}>\\u20B9 18.20</Text>
        </View>
      </View>

      {/* Deposit Note */}
      <View style={styles.depositNote}>
        <Text style={styles.depositText}>
          \\u{1F6E1} Security deposit of \\u20B9 200 will be released within 24 hours
        </Text>
      </View>

      {/* VoltCoins Banner */}
      <View style={styles.voltcoinsBanner}>
        <View style={styles.coinBadge}>
          <Text style={{ fontSize: 18, color: '#0f0f0f' }}>\\u26A1</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.coinsEarned}>You earned 12 VoltCoins!</Text>
          <Text style={styles.coinsRedeem}>Redeem for rewards</Text>
        </View>
        <Text style={styles.chevron}>\\u203A</Text>
      </View>

      {/* CTA */}
      <View style={styles.ctaWrap}>
        <TouchableOpacity style={styles.doneBtn} activeOpacity={0.8}>
          <Text style={styles.doneBtnText}>\\u{1F3E0} Done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.receiptLink}>View Receipt</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  content: { flexGrow: 1 },
  headerWrap: { paddingVertical: 24, paddingHorizontal: 20, alignItems: 'center' },
  outerCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#f4ffd9', alignItems: 'center', justifyContent: 'center' },
  innerCircle: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#c6ff2d', alignItems: 'center', justifyContent: 'center' },
  checkmark: { fontSize: 24, fontWeight: '700', color: '#0f0f0f' },
  headerTitle: { fontSize: 24, fontWeight: '700', color: '#0f0f0f', marginTop: 16, fontFamily: 'Manjari' },
  headerSubtitle: { fontSize: 15, color: '#808080', marginTop: 6, fontFamily: 'Inter' },
  statsCard: { marginHorizontal: 16, backgroundColor: '#0f0f0f', borderRadius: 28, paddingVertical: 20, flexDirection: 'row' },
  statBlock: { flex: 1, alignItems: 'center', gap: 4 },
  statValue: { fontSize: 20, fontWeight: '700', color: '#ffffff', fontFamily: 'Manjari' },
  statLabel: { fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  statDivider: { width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.13)', alignSelf: 'center' },
  billingLabel: { marginLeft: 16, marginTop: 16, marginBottom: 8, fontSize: 13, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  billingCard: { marginHorizontal: 16, backgroundColor: '#ffffff', borderRadius: 20, borderWidth: 1, borderColor: '#f5f5f5', padding: 16 },
  billingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  dotRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  billingItem: { fontSize: 15, color: '#0f0f0f', fontFamily: 'Inter' },
  billingDivider: { height: 1, backgroundColor: '#f5f5f5', marginBottom: 12 },
  totalLabel: { fontSize: 15, fontWeight: '700', color: '#0f0f0f', fontFamily: 'Inter' },
  depositNote: { marginHorizontal: 16, marginTop: 8, backgroundColor: '#f4ffd9', borderRadius: 16, padding: 12, paddingHorizontal: 16 },
  depositText: { fontSize: 11, fontWeight: '500', color: '#7d9220', fontFamily: 'Inter', lineHeight: 16 },
  voltcoinsBanner: { marginHorizontal: 16, marginTop: 8, backgroundColor: '#0f0f0f', borderRadius: 20, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  coinBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#c6ff2d', alignItems: 'center', justifyContent: 'center' },
  coinsEarned: { fontSize: 15, color: '#ffffff', fontFamily: 'Inter' },
  coinsRedeem: { fontSize: 11, color: '#808080', fontFamily: 'Inter' },
  chevron: { fontSize: 18, color: '#ffffff', fontWeight: '600' },
  ctaWrap: { padding: 16, marginTop: 'auto' },
  doneBtn: { height: 56, width: '100%', backgroundColor: '#c6ff2d', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  doneBtnText: { fontSize: 15, fontWeight: '600', color: '#0f0f0f', fontFamily: 'Inter' },
  receiptLink: { textAlign: 'center', marginTop: 12, fontSize: 13, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
});

export default RideCompleteSummaryScreen;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// RideCompleteSummary — React Native Paper</div>${_blk('RideCompleteSummaryScreen', RN_RIDECOMPLETE_JSX)}</div>`;
