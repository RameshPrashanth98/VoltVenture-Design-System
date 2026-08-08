import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/CafeDetail' };

// VIP gold — hardcoded, no token
const VIP_GOLD = '#F5C518';

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

// ── Default (static HTML) ─────────────────────────────────────────────────────

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
    font-family:Inter,sans-serif;
    position:relative;
  ">

    <!-- Hero Photo (320px, #e8e8e8 placeholder) -->
    <div style="
      position:relative;
      width:393px;
      height:320px;
      background:#e8e8e8;
      flex-shrink:0;
      overflow:hidden;
    ">
      <!-- Photo Gradient -->
      <div style="
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        height:100px;
        background:linear-gradient(to top, rgba(0,0,0,0.40), transparent);
        z-index:var(--vv-z-raised);
      "></div>

      <!-- Status Bar (overlaid on hero, white text) -->
      <div style="
        position:absolute;
        top:0;
        left:0;
        right:0;
        height:62px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 var(--vv-space-6);
        box-sizing:border-box;
        z-index:var(--vv-z-overlay);
      ">
        <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">9:41</span>
        <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-text-on-inverse);">&#9646; WiFi &#9650;</span>
      </div>

      <!-- Back Button -->
      <div style="
        position:absolute;
        top:62px;
        left:16px;
        width:36px;
        height:36px;
        border-radius:var(--vv-radius-full);
        background:rgba(255,255,255,0.87);
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        z-index:var(--vv-z-overlay);
      ">
        <span style="font-size:16px;color:var(--vv-color-text-primary);">&#8592;</span>
      </div>

      <!-- Share Button -->
      <div style="
        position:absolute;
        top:62px;
        right:16px;
        width:36px;
        height:36px;
        border-radius:var(--vv-radius-full);
        background:rgba(255,255,255,0.87);
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        z-index:var(--vv-z-overlay);
      ">
        <span style="font-size:16px;color:var(--vv-color-text-primary);">&#10548;</span>
      </div>

      <!-- Photo Dots (carousel indicator) -->
      <div style="
        position:absolute;
        bottom:16px;
        left:50%;
        transform:translateX(-50%);
        display:flex;
        gap:var(--vv-space-2);
        align-items:center;
        z-index:var(--vv-z-sticky);
      ">
        <div style="width:16px;height:5px;background:var(--vv-color-surface-base);border-radius:4px;"></div>
        <div style="width:5px;height:5px;background:rgba(255,255,255,0.50);border-radius:var(--vv-radius-full);"></div>
        <div style="width:5px;height:5px;background:rgba(255,255,255,0.50);border-radius:var(--vv-radius-full);"></div>
      </div>

      <!-- VIP Tag -->
      <div style="
        position:absolute;
        bottom:16px;
        right:16px;
        background:${tokens.colorSurfaceInverse};
        border-radius:${tokens.radiusFull}px;
        padding:var(--vv-space-2) 10px;
        display:flex;
        align-items:center;
        gap:var(--vv-space-2);
        z-index:var(--vv-z-sticky);
      ">
        <span style="font-size:14px;color:${VIP_GOLD};">&#9819;</span>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:var(--ds-font-weight-display);
          color:var(--vv-color-text-on-inverse);
        ">VIP</span>
      </div>
    </div>

    <!-- Content Area -->
    <div style="
      flex:1;
      padding:var(--vv-space-5) var(--vv-space-6);
      overflow-y:auto;
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
    ">
      <!-- Title Block -->
      <div style="margin-bottom:var(--vv-space-4);">
        <div style="
          font-family:Manjari,sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:${tokens.typeHeadingMd.fontWeight};
          color:${tokens.colorTextPrimary};
          margin-bottom:var(--vv-space-2);
        ">The Grind — VIP Hub</div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeBodyMd.fontSize}px;
          font-weight:${tokens.typeBodyMd.fontWeight};
          color:${tokens.colorTextSecondary};
          margin-bottom:var(--vv-space-2);
        ">Specialty coffee &amp; VoltVenture charging</div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGrey500};
        ">4.8 &#9733; &middot; Open Now &middot; 0.4 km away</div>
      </div>

      <!-- Battery Status Card -->
      <div style="
        background:${tokens.colorGreen100};
        border-radius:${tokens.radiusLg}px;
        padding:var(--vv-space-4) var(--vv-space-5);
        margin:0 0 var(--vv-space-4);
        display:flex;
        align-items:center;
        gap:var(--vv-space-4);
        box-sizing:border-box;
        flex-shrink:0;
      ">
        <!-- Battery Icon Chip -->
        <div style="
          width:44px;
          height:44px;
          border-radius:var(--vv-radius-full);
          background:${tokens.colorActionPrimary};
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        ">
          <span style="font-size:var(--vv-text-heading-lg-size);color:var(--vv-color-text-primary);">&#9889;</span>
        </div>

        <!-- Text Col -->
        <div style="display:flex;flex-direction:column;gap:var(--vv-space-1);">
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeBodyMd.fontSize}px;
            font-weight:${tokens.typeBodyMd.fontWeight};
            color:${tokens.colorTextPrimary};
          ">8 charging slots</span>
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeLabelSm.fontSize}px;
            font-weight:${tokens.typeLabelSm.fontWeight};
            color:${tokens.colorTextAccent};
          ">All available</span>
        </div>
      </div>

      <!-- About Text -->
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:${tokens.colorGrey700};
        margin-bottom:var(--vv-space-4);
        line-height:1.5;
      ">A specialty coffee shop and VoltVenture VIP Hub. Enjoy premium beverages while your bike charges.</div>

      <!-- Perks Row -->
      <div style="
        display:flex;
        gap:var(--vv-space-3);
        flex-wrap:wrap;
        margin-bottom:var(--vv-space-5);
      ">
          <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:6px var(--vv-space-4);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextPrimary};">&#9749; 20% off drinks</div>
        <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:6px var(--vv-space-4);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextPrimary};">&#128246; Free WiFi</div>
        <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:6px var(--vv-space-4);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextPrimary};">&#128336; 7am - 9pm</div>
      </div>

      <!-- Spacer -->
      <div style="flex:1;min-height:8px;"></div>

      <!-- Show VIP Barcode Button -->
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
        flex-shrink:0;
        margin-bottom:var(--vv-space-3);
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeHeadingSm.fontSize}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextPrimary};
        ">&#9644; Show VIP Barcode</span>
      </div>
    </div>

    <!-- Tab Bar -->
    <div style="
      flex-shrink:0;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-6);
      box-sizing:border-box;
    ">
      ${TABS.map(label => {
        const isActive = label === 'Discover';
        return `
          <div style="display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);flex:1;">
            <div style="
              width:48px;height:32px;border-radius:${tokens.radiusFull}px;
              background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};
              display:flex;align-items:center;justify-content:center;
            ">
              <span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#9679;</span>
            </div>
            <span style="
              font-family:Inter,sans-serif;
              font-size:${tokens.typeLabelSm.fontSize}px;
              font-weight:${tokens.typeLabelSm.fontWeight};
              color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};
            ">${label}</span>
          </div>
        `;
      }).join('')}
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

// ── Interactive export ────────────────────────────────────────────────────────

export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Hero Photo section (relative container for overlays)
  const heroSection = document.createElement('div');
  heroSection.style.cssText = 'position:relative;width:100%;height:266px;background:#e8e8e8;flex-shrink:0;overflow:hidden;';
  // 266 = 320 - 54 (frame status bar height)

  // Photo Gradient
  const photoGradient = document.createElement('div');
  photoGradient.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(to top, rgba(0,0,0,0.40), transparent);z-index:var(--vv-z-raised);pointer-events:none;';

  // Back Button
  const backBtn = document.createElement('div');
  backBtn.style.cssText = 'position:absolute;top:8px;left:16px;width:36px;height:36px;border-radius:var(--vv-radius-full);background:rgba(255,255,255,0.87);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:var(--vv-z-overlay);';
  backBtn.innerHTML = '<span style="font-size:16px;color:var(--vv-color-text-primary);">&#8592;</span>';
  backBtn.addEventListener('pointerdown', () => { backBtn.style.opacity = '0.7'; });
  backBtn.addEventListener('pointerup', () => { backBtn.style.opacity = '1'; });
  backBtn.addEventListener('pointerleave', () => { backBtn.style.opacity = '1'; });

  // Share Button
  const shareBtn = document.createElement('div');
  shareBtn.style.cssText = 'position:absolute;top:8px;right:16px;width:36px;height:36px;border-radius:var(--vv-radius-full);background:rgba(255,255,255,0.87);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:var(--vv-z-overlay);';
  shareBtn.innerHTML = '<span style="font-size:16px;color:var(--vv-color-text-primary);">&#10548;</span>';
  shareBtn.addEventListener('pointerdown', () => { shareBtn.style.opacity = '0.7'; });
  shareBtn.addEventListener('pointerup', () => { shareBtn.style.opacity = '1'; });
  shareBtn.addEventListener('pointerleave', () => { shareBtn.style.opacity = '1'; });

  // Photo Dots
  const photoDots = document.createElement('div');
  photoDots.style.cssText = 'position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:var(--vv-space-2);align-items:center;z-index:var(--vv-z-sticky);';
  const activeDot = document.createElement('div');
  activeDot.style.cssText = 'width:16px;height:5px;background:var(--vv-color-surface-base);border-radius:4px;';
  const inactiveDot1 = document.createElement('div');
  inactiveDot1.style.cssText = 'width:5px;height:5px;background:rgba(255,255,255,0.50);border-radius:var(--vv-radius-full);';
  const inactiveDot2 = document.createElement('div');
  inactiveDot2.style.cssText = 'width:5px;height:5px;background:rgba(255,255,255,0.50);border-radius:var(--vv-radius-full);';
  photoDots.appendChild(activeDot);
  photoDots.appendChild(inactiveDot1);
  photoDots.appendChild(inactiveDot2);

  // VIP Tag
  const vipTag = document.createElement('div');
  vipTag.style.cssText = `position:absolute;bottom:16px;right:16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:flex;align-items:center;gap:var(--vv-space-2);z-index:var(--vv-z-sticky);`;
  vipTag.innerHTML = `<span style="font-size:14px;color:${VIP_GOLD};">&#9819;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-on-inverse);">VIP</span>`;

  heroSection.appendChild(photoGradient);
  heroSection.appendChild(backBtn);
  heroSection.appendChild(shareBtn);
  heroSection.appendChild(photoDots);
  heroSection.appendChild(vipTag);

  // Content Area (scrollable)
  const contentArea = document.createElement('div');
  contentArea.style.cssText = 'flex:1;padding:var(--vv-space-5) var(--vv-space-6);overflow-y:auto;box-sizing:border-box;display:flex;flex-direction:column;';

  // Title Block
  const titleBlock = document.createElement('div');
  titleBlock.style.cssText = 'margin-bottom:var(--vv-space-4);flex-shrink:0;';

  const cafeName = document.createElement('div');
  cafeName.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorTextPrimary};margin-bottom:var(--vv-space-2);`;
  cafeName.textContent = 'The Grind \u2014 VIP Hub';

  const cafeDesc = document.createElement('div');
  cafeDesc.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:${tokens.typeBodyMd.fontWeight};color:${tokens.colorTextSecondary};margin-bottom:var(--vv-space-2);`;
  cafeDesc.textContent = 'Specialty coffee & VoltVenture charging';

  const cafeMeta = document.createElement('div');
  cafeMeta.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};`;
  cafeMeta.innerHTML = '4.8 &#9733; &middot; Open Now &middot; 0.4 km away';

  titleBlock.appendChild(cafeName);
  titleBlock.appendChild(cafeDesc);
  titleBlock.appendChild(cafeMeta);

  // Battery Status Card
  const batteryCard = document.createElement('div');
  batteryCard.style.cssText = `background:${tokens.colorGreen100};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);margin-bottom:var(--vv-space-4);display:flex;align-items:center;gap:var(--vv-space-4);box-sizing:border-box;flex-shrink:0;`;

  const batteryIcon = document.createElement('div');
  batteryIcon.style.cssText = `width:44px;height:44px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
  batteryIcon.innerHTML = '<span style="font-size:var(--vv-text-heading-lg-size);color:var(--vv-color-text-primary);">&#9889;</span>';

  const batteryText = document.createElement('div');
  batteryText.style.cssText = 'display:flex;flex-direction:column;gap:var(--vv-space-1);';
  batteryText.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:${tokens.typeBodyMd.fontWeight};color:${tokens.colorTextPrimary};">8 charging slots</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextAccent};">All available</span>`;

  batteryCard.appendChild(batteryIcon);
  batteryCard.appendChild(batteryText);

  // About Text
  const aboutText = document.createElement('div');
  aboutText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorGrey700};margin-bottom:var(--vv-space-4);line-height:1.5;flex-shrink:0;`;
  aboutText.textContent = 'A specialty coffee shop and VoltVenture VIP Hub. Enjoy premium beverages while your bike charges.';

  // Perks Row
  const perksRow = document.createElement('div');
  perksRow.style.cssText = 'display:flex;gap:var(--vv-space-3);flex-wrap:wrap;margin-bottom:var(--vv-space-5);flex-shrink:0;';

  const perks = ['\u2615 20% off drinks', '\uD83D\uDCF6 Free WiFi', '\u23F0 7am - 9pm'];
  perks.forEach(perk => {
    const chip = document.createElement('div');
    chip.style.cssText = `background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:6px var(--vv-space-4);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextPrimary};`;
    chip.textContent = perk;
    perksRow.appendChild(chip);
  });

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;min-height:8px;';

  // Show VIP Barcode Button
  const barcodeBtn = document.createElement('div');
  barcodeBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;flex-shrink:0;margin-bottom:var(--vv-space-3);transition:transform var(--vv-duration-fast) var(--vv-easing-standard),background-color var(--vv-duration-fast) var(--vv-easing-standard);`;
  const barcodeBtnText = document.createElement('span');
  barcodeBtnText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  barcodeBtnText.innerHTML = '&#9644; Show VIP Barcode';
  barcodeBtn.appendChild(barcodeBtnText);

  barcodeBtn.addEventListener('pointerdown', () => {
    barcodeBtn.style.backgroundColor = tokens.colorGreen600;
    barcodeBtn.style.transform = 'scale(0.97)';
  });
  barcodeBtn.addEventListener('pointerup', () => {
    barcodeBtn.style.backgroundColor = tokens.colorActionPrimary;
    barcodeBtn.style.transform = 'scale(1)';
  });
  barcodeBtn.addEventListener('pointerleave', () => {
    barcodeBtn.style.backgroundColor = tokens.colorActionPrimary;
    barcodeBtn.style.transform = 'scale(1)';
  });

  contentArea.appendChild(titleBlock);
  contentArea.appendChild(batteryCard);
  contentArea.appendChild(aboutText);
  contentArea.appendChild(perksRow);
  contentArea.appendChild(spacer);
  contentArea.appendChild(barcodeBtn);

  // Tab Bar
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `flex-shrink:0;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-6);box-sizing:border-box;`;

  TABS.forEach(label => {
    const isActive = label === 'Discover';
    const tabItem = document.createElement('div');
    tabItem.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);flex:1;';

    const pill = document.createElement('div');
    pill.style.cssText = `width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;`;
    pill.innerHTML = `<span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#9679;</span>`;

    const tabLabel = document.createElement('span');
    tabLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    tabLabel.textContent = label;

    tabItem.appendChild(pill);
    tabItem.appendChild(tabLabel);
    tabBar.appendChild(tabItem);
  });

  screen.appendChild(heroSection);
  screen.appendChild(contentArea);
  screen.appendChild(tabBar);

  return frame;
};

// ── Source code panel ─────────────────────────────────────────────────────────

function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_CAFEDETAIL_JSX = `// CafeDetail Screen — React Native Paper
import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase      = '#FFFFFF'
// tokens.colorSurfaceInverse   = '#0F0F0F'
// tokens.colorActionPrimary    = '#C6FF2D'  — '#C6FF2D'
// tokens.colorGreen100         = '#F4FFD9'
// tokens.colorGreen600         = '#A8DE1A'
// tokens.colorGrey100          = '#F5F5F5'
// tokens.colorGrey200          = '#EBEBEB'
// tokens.colorGrey500          = '#808080'
// tokens.colorGrey700          = '#4A4A4A'
// tokens.colorTextPrimary      = '#0F0F0F'
// tokens.colorTextSecondary    = '#808080'
// tokens.colorTextAccent       = '#7D9220'
// tokens.radiusFull            = 999
// tokens.radiusLg              = 20
// VIP_GOLD (hardcoded)         = '#F5C518'

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

const CafeDetailScreen = () => {
  return (
    <View style={styles.screen}>
      {/* Hero Photo */}
      <View style={styles.heroSection}>
        {/* Photo placeholder */}
        <View style={styles.photoPlaceholder} />

        {/* Gradient overlay */}
        <View style={styles.photoGradient} />

        {/* Back + Share */}
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.navBtnText}>\\u2190</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.navBtnText}>\\u2934</Text>
        </TouchableOpacity>

        {/* Carousel dots */}
        <View style={styles.photoDots}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>

        {/* VIP Tag */}
        <View style={styles.vipTag}>
          <Text style={styles.vipCrown}>\\u265B</Text>
          <Text style={styles.vipText}>VIP</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.contentArea} contentContainerStyle={styles.contentPad}>
        {/* Title Block */}
        <View style={styles.titleBlock}>
          <Text style={styles.cafeName}>The Grind \\u2014 VIP Hub</Text>
          <Text style={styles.cafeDesc}>Specialty coffee & VoltVenture charging</Text>
          <Text style={styles.cafeMeta}>4.8 \\u2605 · Open Now · 0.4 km away</Text>
        </View>

        {/* Battery Status Card */}
        <View style={styles.batteryCard}>
          <View style={styles.batteryIcon}>
            <Text style={{ fontSize: 20, color: '#0f0f0f' }}>\\u26A1</Text>
          </View>
          <View>
            <Text style={styles.batterySlots}>8 charging slots</Text>
            <Text style={styles.batteryAvail}>All available</Text>
          </View>
        </View>

        {/* About Text */}
        <Text style={styles.aboutText}>
          A specialty coffee shop and VoltVenture VIP Hub. Enjoy premium beverages while your bike charges.
        </Text>

        {/* Perks Row */}
        <View style={styles.perksRow}>
          {['\\u2615 20% off drinks', '\\uD83D\\uDCF6 Free WiFi', '\\u23F0 7am - 9pm'].map(perk => (
            <View key={perk} style={styles.perkChip}>
              <Text style={styles.perkText}>{perk}</Text>
            </View>
          ))}
        </View>

        {/* Show VIP Barcode CTA */}
        <TouchableOpacity style={styles.barcodeBtn} activeOpacity={0.8}>
          <Text style={styles.barcodeBtnText}>\\u2584 Show VIP Barcode</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {TABS.map(label => {
          const isActive = label === 'Discover';
          return (
            <View key={label} style={styles.tabItem}>
              <View style={[styles.tabPill, { backgroundColor: isActive ? '#0f0f0f' : '#ebebeb' }]}>
                <Text style={{ fontSize: 14, color: isActive ? '#ffffff' : '#808080' }}>\\u25CF</Text>
              </View>
              <Text style={[styles.tabLabel, { color: isActive ? '#0f0f0f' : '#808080' }]}>{label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff', flexDirection: 'column' },
  heroSection: { position: 'relative', width: '100%', height: 320, backgroundColor: '#e8e8e8', overflow: 'hidden' },
  photoPlaceholder: { position: 'absolute', inset: 0, backgroundColor: '#e8e8e8' },
  photoGradient: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, backgroundColor: 'rgba(0,0,0,0.4)' },
  backBtn: { position: 'absolute', top: 62, left: 16, width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.87)', alignItems: 'center', justifyContent: 'center' },
  shareBtn: { position: 'absolute', top: 62, right: 16, width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.87)', alignItems: 'center', justifyContent: 'center' },
  navBtnText: { fontSize: 16, color: '#0f0f0f' },
  photoDots: { position: 'absolute', bottom: 16, alignSelf: 'center', flexDirection: 'row', gap: 4, alignItems: 'center' },
  activeDot: { width: 16, height: 5, backgroundColor: '#ffffff', borderRadius: 4 },
  inactiveDot: { width: 5, height: 5, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 3 },
  vipTag: { position: 'absolute', bottom: 16, right: 16, backgroundColor: '#0f0f0f', borderRadius: 999, paddingVertical: 4, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', gap: 4 },
  vipCrown: { fontSize: 14, color: '#F5C518' },
  vipText: { fontSize: 11, fontWeight: '700', color: '#ffffff', fontFamily: 'Inter' },
  contentArea: { flex: 1 },
  contentPad: { padding: 16, paddingHorizontal: 20, flexGrow: 1 },
  titleBlock: { marginBottom: 12 },
  cafeName: { fontSize: 20, fontWeight: '700', color: '#0f0f0f', fontFamily: 'Manjari', marginBottom: 4 },
  cafeDesc: { fontSize: 15, color: '#808080', fontFamily: 'Inter', marginBottom: 4 },
  cafeMeta: { fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  batteryCard: { backgroundColor: '#f4ffd9', borderRadius: 20, padding: 12, paddingHorizontal: 16, marginBottom: 12, flexDirection: 'row', alignItems: 'center', gap: 12 },
  batteryIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#c6ff2d', alignItems: 'center', justifyContent: 'center' },
  batterySlots: { fontSize: 15, color: '#0f0f0f', fontFamily: 'Inter' },
  batteryAvail: { fontSize: 11, color: '#7d9220', fontFamily: 'Inter', fontWeight: '500' },
  aboutText: { fontSize: 15, color: '#4a4a4a', fontFamily: 'Inter', lineHeight: 22, marginBottom: 12 },
  perksRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 16 },
  perkChip: { backgroundColor: '#f5f5f5', borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12 },
  perkText: { fontSize: 11, fontWeight: '500', color: '#0f0f0f', fontFamily: 'Inter' },
  barcodeBtn: { height: 56, width: '100%', backgroundColor: '#c6ff2d', borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  barcodeBtnText: { fontSize: 15, fontWeight: '600', color: '#0f0f0f', fontFamily: 'Inter' },
  tabBar: { backgroundColor: '#ffffff', flexDirection: 'row', paddingTop: 8, paddingBottom: 20, paddingHorizontal: 16 },
  tabItem: { flex: 1, alignItems: 'center', gap: 4 },
  tabPill: { width: 48, height: 32, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  tabLabel: { fontSize: 11, fontWeight: '500', fontFamily: 'Inter' },
});

export default CafeDetailScreen;`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// CafeDetail — React Native Paper</div>${_blk('CafeDetailScreen', RN_CAFEDETAIL_JSX)}</div>`;
