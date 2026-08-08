import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Profile' };

// ── Phone frame helper (inline per file — 402×874px, Volt Black #0f0f0f, 44px radius) ──
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

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

// ── Default (static HTML) ──────────────────────────────────────────────────────
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
      padding:0 var(--vv-space-6);
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>

    <!-- Header Row -->
    <div style="
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:var(--vv-space-4) var(--vv-space-5);
      flex-shrink:0;
    ">
      <span style="
        font-family:Manjari,sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:var(--ds-font-weight-display);
        color:${tokens.colorTextPrimary};
      ">Profile</span>
      <div style="
        width:34px;
        height:34px;
        border-radius:var(--vv-radius-full);
        background:${tokens.colorSurfaceBase};
        border:1px solid ${tokens.colorGrey200};
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:16px;
        color:${tokens.colorGrey700};
        cursor:pointer;
        box-sizing:border-box;
      ">&#9881;</div>
    </div>

    <!-- Avatar Section -->
    <div style="
      padding:var(--vv-space-7) var(--vv-space-6);
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
      flex-shrink:0;
    ">
      <div style="
        width:76px;
        height:76px;
        border-radius:var(--vv-radius-full);
        background:${tokens.colorSurfaceInverse};
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:34px;
        color:var(--vv-color-text-on-inverse);
      ">&#128100;</div>
      <div style="
        font-family:Manjari,sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:var(--ds-font-weight-display);
        color:${tokens.colorTextPrimary};
        margin-top:var(--vv-space-4);
      ">Alex Johnson</div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:var(--vv-space-2);
      ">Member since Jan 2025 &middot; Level 3</div>
    </div>

    <!-- Digital Trust Status Card -->
    <div style="
      margin:0 var(--vv-space-5) var(--vv-space-5);
      background:${tokens.colorGreen100};
      border-radius:${tokens.radiusLg}px;
      padding:var(--vv-space-5);
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <div style="display:flex;align-items:center;gap:var(--vv-space-3);">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeBodyMd.fontSize}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextAccent};
        ">&#10003; Verified Account</span>
      </div>
      <div style="height:1px;background:rgba(168,222,26,0.40);margin:var(--vv-space-4) 0;"></div>
      <!-- #A8DE1A66 — translucent green divider -->
      <div style="display:flex;align-items:center;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);">
        <span style="font-size:16px;">&#128100;</span>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorTextAccent};
        ">ID Document Verified</span>
      </div>
      <div style="display:flex;align-items:center;gap:var(--vv-space-3);">
        <span style="font-size:16px;">&#128522;</span>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorTextAccent};
        ">Facial Scan Verified</span>
      </div>
      <div style="height:1px;background:rgba(168,222,26,0.40);margin:var(--vv-space-4) 0;"></div>
      <!-- #A8DE1A66 — translucent green divider -->
      <div style="display:flex;align-items:center;gap:var(--vv-space-3);">
        <span style="font-size:14px;">&#128274;</span>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorTextAccent};
        ">Your data is encrypted and secure</span>
      </div>
    </div>

    <!-- Options List -->
    <div style="
      margin:0 var(--vv-space-5) var(--vv-space-5);
      border-radius:${tokens.radiusLg}px;
      overflow:hidden;
      border:1px solid ${tokens.colorGrey100};
      flex-shrink:0;
    ">
      <!-- Row 1 — Edit Profile -->
      <div style="
        min-height:48px;
        display:flex;
        align-items:center;
        padding:var(--vv-space-4) var(--vv-space-5);
        gap:var(--vv-space-4);
        cursor:pointer;
        box-sizing:border-box;
      ">
        <div style="
          width:34px;height:34px;
          background:${tokens.colorGrey100};
          border-radius:${tokens.radiusSm}px;
          display:flex;align-items:center;justify-content:center;
          font-size:18px;flex-shrink:0;
        ">&#9999;</div>
        <div style="flex:1;">
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeBodyMd.fontSize}px;
            color:${tokens.colorTextPrimary};
          ">Edit Profile Information</span>
        </div>
        <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
      </div>
      <!-- Divider -->
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <!-- Row 2 — Ride History -->
      <div style="
        min-height:48px;
        display:flex;
        align-items:center;
        padding:var(--vv-space-4) var(--vv-space-5);
        gap:var(--vv-space-4);
        cursor:pointer;
        box-sizing:border-box;
      ">
        <div style="
          width:34px;height:34px;
          background:${tokens.colorGrey100};
          border-radius:${tokens.radiusSm}px;
          display:flex;align-items:center;justify-content:center;
          font-size:18px;flex-shrink:0;
        ">&#128692;</div>
        <div style="flex:1;">
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeBodyMd.fontSize}px;
            color:${tokens.colorTextPrimary};
          ">Ride History &amp; Stats</span>
        </div>
        <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
      </div>
    </div>

    <!-- Sign Out -->
    <div style="margin:0 var(--vv-space-5) var(--vv-space-7);flex-shrink:0;">
      <div style="
        display:flex;
        align-items:center;
        gap:var(--vv-space-4);
        padding:var(--vv-space-4) var(--vv-space-5);
        background:${tokens.colorSurfaceBase};
        border:1px solid ${tokens.colorGrey100};
        border-radius:${tokens.radiusLg}px;
        cursor:pointer;
        box-sizing:border-box;
      ">
        <span style="color:#D64545;font-size:18px;">&#8617;</span>
        <!-- Sign out red — #D64545, no VV token -->
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeBodyMd.fontSize}px;
          font-weight:var(--ds-font-weight-heading);
          color:#D64545;
        ">Sign Out</span>
      </div>
    </div>

    <!-- Spacer -->
    <div style="flex:1;"></div>

    <!-- Tab Bar -->
    <div style="
      display:flex;
      background:${tokens.colorSurfaceBase};
      border-top:1px solid ${tokens.colorGrey100};
      padding:var(--vv-space-3) 0 var(--vv-space-7);
      flex-shrink:0;
    ">
      ${TABS.map((label, i) => {
        const isActive = i === 3; // Account tab active
        return `<div style="
          flex:1;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:var(--vv-space-2);
          cursor:pointer;
        ">
          <div style="
            width:40px;height:26px;
            border-radius:${tokens.radiusFull}px;
            background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};
            display:flex;align-items:center;justify-content:center;
          "></div>
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeLabelSm.fontSize}px;
            font-weight:${tokens.typeLabelSm.fontWeight};
            color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};
          ">${label}</span>
        </div>`;
      }).join('')}
    </div>
  </div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:auto;background:var(--vv-color-surface-base);';

  // Header Row
  const header = document.createElement('div');
  header.style.cssText = `display:flex;align-items:center;justify-content:space-between;padding:var(--vv-space-4) var(--vv-space-5);flex-shrink:0;`;

  const titleEl = document.createElement('span');
  titleEl.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'Profile';

  const settingsBtn = document.createElement('div');
  settingsBtn.style.cssText = `width:34px;height:34px;border-radius:var(--vv-radius-full);background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};display:flex;align-items:center;justify-content:center;font-size:16px;color:${tokens.colorGrey700};cursor:pointer;box-sizing:border-box;`;
  settingsBtn.textContent = '\u2699';
  settingsBtn.addEventListener('pointerdown', () => { settingsBtn.style.backgroundColor = tokens.colorGrey050; });
  settingsBtn.addEventListener('pointerup', () => { settingsBtn.style.backgroundColor = tokens.colorSurfaceBase; });
  settingsBtn.addEventListener('pointerleave', () => { settingsBtn.style.backgroundColor = tokens.colorSurfaceBase; });

  header.appendChild(titleEl);
  header.appendChild(settingsBtn);
  content.appendChild(header);

  // Avatar Section
  const avatarSection = document.createElement('div');
  avatarSection.style.cssText = 'padding:var(--vv-space-7) var(--vv-space-6);display:flex;flex-direction:column;align-items:center;text-align:center;flex-shrink:0;';

  const avatarCircle = document.createElement('div');
  avatarCircle.style.cssText = `width:76px;height:76px;border-radius:var(--vv-radius-full);background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;font-size:34px;color:var(--vv-color-text-on-inverse);`;
  avatarCircle.textContent = '\uD83D\uDC64';

  const userName = document.createElement('div');
  userName.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};margin-top:var(--vv-space-4);`;
  userName.textContent = 'Alex Johnson';

  const userMeta = document.createElement('div');
  userMeta.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-2);`;
  userMeta.textContent = 'Member since Jan 2025 \u00B7 Level 3';

  avatarSection.appendChild(avatarCircle);
  avatarSection.appendChild(userName);
  avatarSection.appendChild(userMeta);
  content.appendChild(avatarSection);

  // Digital Trust Status Card
  const trustCard = document.createElement('div');
  trustCard.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorGreen100};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);box-sizing:border-box;flex-shrink:0;`;

  const trustTopRow = document.createElement('div');
  trustTopRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);';
  const trustLabel = document.createElement('span');
  trustLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextAccent};`;
  trustLabel.textContent = '\u2713 Verified Account';
  trustTopRow.appendChild(trustLabel);
  trustCard.appendChild(trustTopRow);

  const makeTrustDivider = () => {
    const d = document.createElement('div');
    d.style.cssText = 'height:1px;background:rgba(168,222,26,0.40);margin:var(--vv-space-4) 0;'; /* #A8DE1A66 — translucent green */
    return d;
  };

  trustCard.appendChild(makeTrustDivider());

  const verifyRow1 = document.createElement('div');
  verifyRow1.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);';
  const v1Icon = document.createElement('span');
  v1Icon.style.cssText = 'font-size:16px;';
  v1Icon.textContent = '\uD83E\uDEAA'; // ID card
  const v1Text = document.createElement('span');
  v1Text.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextAccent};`;
  v1Text.textContent = 'ID Document Verified';
  verifyRow1.appendChild(v1Icon);
  verifyRow1.appendChild(v1Text);
  trustCard.appendChild(verifyRow1);

  const verifyRow2 = document.createElement('div');
  verifyRow2.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);';
  const v2Icon = document.createElement('span');
  v2Icon.style.cssText = 'font-size:16px;';
  v2Icon.textContent = '\uD83D\uDE0A'; // Smiling face
  const v2Text = document.createElement('span');
  v2Text.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextAccent};`;
  v2Text.textContent = 'Facial Scan Verified';
  verifyRow2.appendChild(v2Icon);
  verifyRow2.appendChild(v2Text);
  trustCard.appendChild(verifyRow2);

  trustCard.appendChild(makeTrustDivider());

  const reassureRow = document.createElement('div');
  reassureRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);';
  const lockIcon = document.createElement('span');
  lockIcon.style.cssText = 'font-size:14px;';
  lockIcon.textContent = '\uD83D\uDD12'; // Lock
  const reassureText = document.createElement('span');
  reassureText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextAccent};`;
  reassureText.textContent = 'Your data is encrypted and secure';
  reassureRow.appendChild(lockIcon);
  reassureRow.appendChild(reassureText);
  trustCard.appendChild(reassureRow);

  content.appendChild(trustCard);

  // Options List
  const optionsList = document.createElement('div');
  optionsList.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};flex-shrink:0;`;

  function makeOptionRow(icon, label) {
    const row = document.createElement('div');
    row.style.cssText = `min-height:48px;display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;background:${tokens.colorSurfaceBase};`;
    row.addEventListener('pointerdown', () => { row.style.backgroundColor = tokens.colorGrey100; });
    row.addEventListener('pointerup', () => { row.style.backgroundColor = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.backgroundColor = tokens.colorSurfaceBase; });

    const chip = document.createElement('div');
    chip.style.cssText = `width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;`;
    chip.textContent = icon;

    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;';
    const textEl = document.createElement('span');
    textEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};`;
    textEl.textContent = label;
    textCol.appendChild(textEl);

    const chevron = document.createElement('span');
    chevron.style.cssText = `color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;`;
    chevron.textContent = '\u203A';

    row.appendChild(chip);
    row.appendChild(textCol);
    row.appendChild(chevron);
    return row;
  }

  const row1 = makeOptionRow('\u270F', 'Edit Profile Information');
  const dividerEl = document.createElement('div');
  dividerEl.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  const row2 = makeOptionRow('\uD83D\uDEB4', 'Ride History & Stats');

  optionsList.appendChild(row1);
  optionsList.appendChild(dividerEl);
  optionsList.appendChild(row2);
  content.appendChild(optionsList);

  // Sign Out
  const signOutWrap = document.createElement('div');
  signOutWrap.style.cssText = 'margin:0 var(--vv-space-5) var(--vv-space-7);flex-shrink:0;';

  const signOutBtn = document.createElement('div');
  signOutBtn.style.cssText = `display:flex;align-items:center;gap:var(--vv-space-4);padding:var(--vv-space-4) var(--vv-space-5);background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey100};border-radius:${tokens.radiusLg}px;cursor:pointer;box-sizing:border-box;`;
  signOutBtn.addEventListener('pointerdown', () => { signOutBtn.style.backgroundColor = '#FEF2F2'; });
  signOutBtn.addEventListener('pointerup', () => { signOutBtn.style.backgroundColor = tokens.colorSurfaceBase; });
  signOutBtn.addEventListener('pointerleave', () => { signOutBtn.style.backgroundColor = tokens.colorSurfaceBase; });

  const signOutIcon = document.createElement('span');
  signOutIcon.style.cssText = 'color:#D64545;font-size:18px;'; /* Sign out red — #D64545, no VV token */
  signOutIcon.textContent = '\u21A9';

  const signOutText = document.createElement('span');
  signOutText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:#D64545;`;
  signOutText.textContent = 'Sign Out';

  signOutBtn.appendChild(signOutIcon);
  signOutBtn.appendChild(signOutText);
  signOutWrap.appendChild(signOutBtn);
  content.appendChild(signOutWrap);

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  screen.appendChild(content);

  // Tab Bar
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `display:flex;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};padding:var(--vv-space-3) 0 var(--vv-space-7);flex-shrink:0;`;

  let activeTab = 3; // Account
  const tabEls = [];

  TABS.forEach((label, i) => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;';

    const pill = document.createElement('div');
    pill.style.cssText = `width:40px;height:26px;border-radius:${tokens.radiusFull}px;background:${i === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;`;

    const tabLabel = document.createElement('span');
    tabLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${i === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    tabLabel.textContent = label;

    tab.appendChild(pill);
    tab.appendChild(tabLabel);
    tabEls.push({ pill, tabLabel });

    tab.addEventListener('pointerdown', () => {
      activeTab = i;
      tabEls.forEach(({ pill: p, tabLabel: tl }, idx) => {
        p.style.background = idx === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200;
        tl.style.color = idx === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary;
      });
    });

    tabBar.appendChild(tab);
  });

  screen.appendChild(tabBar);

  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const _profileSnippet = `import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Surface, Divider } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// Key tokens:
// colorSurfaceBase: '#FFFFFF'    colorSurfaceInverse: '#0F0F0F'
// colorGreen100: '#F4FFD9'       colorTextAccent: '#7D9220'
// colorGrey100: '#F5F5F5'        colorGrey200: '#EBEBEB'
// colorGrey300: '#C9C9C9'        Sign Out red: '#D64545' (hardcoded — no VV token)
// Trust card divider: rgba(168,222,26,0.40)  // #A8DE1A66 — translucent green

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', padding: 16 }}>
        <Text style={{ fontFamily: 'Manjari', fontSize: 20, fontWeight: '700',
          color: '#0F0F0F' }}>Profile</Text>
        <TouchableOpacity style={{ width: 34, height: 34, borderRadius: 17,
          borderWidth: 1, borderColor: '#EBEBEB',
          alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, color: '#4A4A4A' }}>\u2699</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Avatar */}
        <View style={{ alignItems: 'center', paddingVertical: 24 }}>
          <View style={{ width: 76, height: 76, borderRadius: 38,
            backgroundColor: '#0F0F0F',
            alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 34 }}>\uD83D\uDC64</Text>
          </View>
          <Text style={{ fontFamily: 'Manjari', fontSize: 15, fontWeight: '700',
            color: '#0F0F0F', marginTop: 12 }}>Alex Johnson</Text>
          <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
            color: '#808080', marginTop: 4 }}>Member since Jan 2025 \u00B7 Level 3</Text>
        </View>

        {/* Digital Trust Card — colorGreen100 background */}
        <Surface style={{ margin: 16, backgroundColor: '#F4FFD9',
          borderRadius: 20, padding: 16 }}>
          <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600',
            color: '#7D9220' }}>\u2713 Verified Account</Text>
          <Divider style={{ backgroundColor: 'rgba(168,222,26,0.40)', marginVertical: 12 }} />
          {/* Trust items */}
        </Surface>

        {/* Options List */}
        <Surface style={{ margin: 16, borderRadius: 20, overflow: 'hidden',
          borderWidth: 1, borderColor: '#F5F5F5' }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',
            padding: 16, gap: 12 }}>
            <View style={{ width: 34, height: 34, borderRadius: 12,
              backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18 }}>\u270F</Text>
            </View>
            <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15,
              color: '#0F0F0F' }}>Edit Profile Information</Text>
            <Text style={{ color: '#C9C9C9', fontSize: 20 }}>\u203A</Text>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: '#F5F5F5' }} />
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',
            padding: 16, gap: 12 }}>
            <View style={{ width: 34, height: 34, borderRadius: 12,
              backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18 }}>\uD83D\uDEB4</Text>
            </View>
            <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15,
              color: '#0F0F0F' }}>Ride History &amp; Stats</Text>
            <Text style={{ color: '#C9C9C9', fontSize: 20 }}>\u203A</Text>
          </TouchableOpacity>
        </Surface>

        {/* Sign Out — #D64545 (hardcoded, no VV token) */}
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',
          gap: 12, margin: 16, padding: 16, borderRadius: 20,
          borderWidth: 1, borderColor: '#F5F5F5' }}>
          <Text style={{ color: '#D64545', fontSize: 18 }}>\u21A9</Text>
          <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600',
            color: '#D64545' }}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}`;

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px">` +
  `<div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Profile Screen — React Native Paper</div>` +
  _blk('Profile Screen (frame N0nOZ)', _profileSnippet) +
  `</div>`;
