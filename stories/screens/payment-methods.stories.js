import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/PaymentMethods' };

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
    <div style="font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Payment Methods</div>
  </div>

  <!-- Subtitle -->
  <div style="padding:var(--vv-space-2) var(--vv-space-5) var(--vv-space-5);font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};">Manage your saved payment methods.</div>

  <!-- Default Payment Card (visual credit card) -->
  <div style="margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-6);box-sizing:border-box;">
    <!-- Card Top Row -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--vv-space-6);">
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Default Card</div>
      <div style="background:var(--vv-color-surface-base);border-radius:6px;padding:var(--vv-space-1) var(--vv-space-3);font-size:${tokens.typeLabelSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Visa</div>
    </div>
    <!-- Card Number -->
    <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-label-sm);color:var(--vv-color-text-on-inverse);letter-spacing:4px;margin-bottom:var(--vv-space-6);">&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; 4829</div>
    <!-- Card Bottom Row -->
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Expires 12/27</div>
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">John Doe</div>
    </div>
  </div>

  <!-- Add New Button -->
  <div style="margin:0 var(--vv-space-5) var(--vv-space-5);box-sizing:border-box;">
    <button style="
      width:100%;height:56px;background:${tokens.colorActionPrimary};
      border-radius:${tokens.radiusFull}px;border:none;
      font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;
      font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;
      box-sizing:border-box;
    ">+ Add New Payment Method</button>
  </div>

  <!-- Options Label -->
  <div style="padding:0 var(--vv-space-5) var(--vv-space-3);font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Payment Options</div>

  <!-- Options List (reference, all unselected) -->
  <div style="margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};box-sizing:border-box;">
    <!-- Apple Pay -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--vv-color-text-on-inverse);flex-shrink:0;">&#63743;</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Apple Pay</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Touch ID</div>
      </div>
      <div style="font-size:18px;color:${tokens.colorGrey300};">&#8250;</div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);"></div>
    <!-- Google Wallet -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};flex-shrink:0;">G</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Google Wallet</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Pay with Google</div>
      </div>
      <div style="font-size:18px;color:${tokens.colorGrey300};">&#8250;</div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);"></div>
    <!-- Credit/Debit Card -->
    <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;">&#x1F4B3;</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Credit / Debit Card</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Visa &#8226;&#8226;&#8226;&#8226; 4829</div>
      </div>
      <div style="font-size:18px;color:${tokens.colorGrey300};">&#8250;</div>
    </div>
  </div>

  <!-- Trust Card (colorGrey050) -->
  <div style="margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);display:flex;gap:var(--vv-space-4);box-sizing:border-box;">
    <div style="width:34px;height:34px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGreen100};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">&#128274;</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Bank-grade security</div>
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Payments secured by Stripe</div>
    </div>
  </div>

  <!-- View Billing History Link -->
  <div style="text-align:center;margin-bottom:var(--vv-space-5);font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;">&#129534; View Billing History</div>

  <!-- Spacer -->
  <div style="flex:1;"></div>

  <!-- Tab Bar (Wallet = third tab, active) -->
  <div style="display:flex;align-items:center;background:var(--vv-color-surface-base);border-top:1px solid ${tokens.colorGrey100};height:64px;padding-bottom:var(--vv-space-3);box-sizing:border-box;">
    ${['Ride','Discover','Wallet','Account'].map((label, i) => `
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;">
      <div style="width:36px;height:36px;border-radius:var(--vv-radius-full);${i===2 ? 'background:'+tokens.colorSurfaceInverse+';' : ''}display:flex;align-items:center;justify-content:center;">
        <span style="font-size:16px;${i===2 ? 'color:var(--vv-color-text-on-inverse);' : 'color:'+tokens.colorGrey300+';'}">${['&#128663;','&#128269;','&#128179;','&#128100;'][i]}</span>
      </div>
      <span style="font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};${i===2 ? 'color:'+tokens.colorTextAccent+';' : 'color:'+tokens.colorGrey300+';'}">${label}</span>
    </div>`).join('')}
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
  titleEl.textContent = 'Payment Methods';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  // Subtitle
  const subtitle = document.createElement('div');
  subtitle.style.cssText = `padding:var(--vv-space-2) var(--vv-space-5) var(--vv-space-5);font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};flex-shrink:0;`;
  subtitle.textContent = 'Manage your saved payment methods.';
  content.appendChild(subtitle);

  // Default Payment Card (visual dark credit card)
  const cardSection = document.createElement('div');
  cardSection.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-6);box-sizing:border-box;flex-shrink:0;`;
  cardSection.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--vv-space-6);">
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Default Card</div>
      <div style="background:var(--vv-color-surface-base);border-radius:6px;padding:var(--vv-space-1) var(--vv-space-3);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Visa</div>
    </div>
    <div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-label-sm);color:var(--vv-color-text-on-inverse);letter-spacing:4px;margin-bottom:var(--vv-space-6);">&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; 4829</div>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">Expires 12/27</div>
      <div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};">John Doe</div>
    </div>
  `;
  content.appendChild(cardSection);

  // Add New Button
  const addNewWrapper = document.createElement('div');
  addNewWrapper.style.cssText = 'margin:0 var(--vv-space-5) var(--vv-space-5);box-sizing:border-box;flex-shrink:0;';
  const addNewBtn = document.createElement('button');
  addNewBtn.style.cssText = `width:100%;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;box-sizing:border-box;transition:background 120ms var(--vv-easing-standard),transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  addNewBtn.textContent = '+ Add New Payment Method';
  addNewBtn.addEventListener('pointerdown', () => {
    addNewBtn.style.background = tokens.colorGreen600;
    addNewBtn.style.transform = 'scale(0.97)';
  });
  addNewBtn.addEventListener('pointerup', () => {
    addNewBtn.style.background = tokens.colorActionPrimary;
    addNewBtn.style.transform = 'scale(1)';
  });
  addNewBtn.addEventListener('pointerleave', () => {
    addNewBtn.style.background = tokens.colorActionPrimary;
    addNewBtn.style.transform = 'scale(1)';
  });
  addNewWrapper.appendChild(addNewBtn);
  content.appendChild(addNewWrapper);

  // Options Label
  const optLabel = document.createElement('div');
  optLabel.style.cssText = `padding:0 var(--vv-space-5) var(--vv-space-3);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0;`;
  optLabel.textContent = 'Payment Options';
  content.appendChild(optLabel);

  // Options List (reference rows, press feedback)
  const optList = document.createElement('div');
  optList.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};box-sizing:border-box;flex-shrink:0;`;

  const optionItems = [
    { icon: '&#63743;', iconBg: tokens.colorSurfaceInverse, iconColor: '#ffffff', title: 'Apple Pay', sub: 'Touch ID' },
    { icon: 'G', iconBg: tokens.colorGrey100, iconColor: tokens.colorTextPrimary, title: 'Google Wallet', sub: 'Pay with Google' },
    { icon: '&#x1F4B3;', iconBg: tokens.colorGrey100, iconColor: '', title: 'Credit / Debit Card', sub: 'Visa \u2022\u2022\u2022\u2022 4829' },
  ];

  optionItems.forEach((item, idx) => {
    if (idx > 0) {
      const div = document.createElement('div');
      div.style.cssText = `height:1px;background:${tokens.colorGrey100};margin:0 var(--vv-space-5);`;
      optList.appendChild(div);
    }
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);min-height:56px;box-sizing:border-box;cursor:pointer;background:${tokens.colorSurfaceBase};transition:background var(--vv-duration-fast) var(--vv-easing-standard);`;
    const chip = document.createElement('div');
    chip.style.cssText = `width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${item.iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
    if (item.iconColor) {
      chip.innerHTML = `<span style="font-size:${item.icon.length > 3 ? '20' : '16'}px;color:${item.iconColor};font-weight:var(--ds-font-weight-display);">${item.icon}</span>`;
    } else {
      chip.innerHTML = `<span style="font-size:var(--vv-text-heading-lg-size);">${item.icon}</span>`;
    }
    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;min-width:0;';
    textCol.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">${item.title}</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">${item.sub}</div>`;
    const chevron = document.createElement('div');
    chevron.style.cssText = `font-family:Inter,sans-serif;font-size:18px;color:${tokens.colorGrey300};`;
    chevron.innerHTML = '&#8250;';
    row.appendChild(chip);
    row.appendChild(textCol);
    row.appendChild(chevron);
    optList.appendChild(row);
    row.addEventListener('pointerdown', () => { row.style.background = tokens.colorGrey100; });
    row.addEventListener('pointerup', () => { row.style.background = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.background = tokens.colorSurfaceBase; });
  });

  content.appendChild(optList);

  // Trust Card (colorGrey050)
  const trustCard = document.createElement('div');
  trustCard.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);display:flex;gap:var(--vv-space-4);box-sizing:border-box;flex-shrink:0;`;
  const lockChip = document.createElement('div');
  lockChip.style.cssText = `width:34px;height:34px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGreen100};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
  lockChip.innerHTML = '&#128274;';
  const trustText = document.createElement('div');
  trustText.style.cssText = 'flex:1;min-width:0;';
  trustText.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Bank-grade security</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Payments secured by Stripe</div>`;
  trustCard.appendChild(lockChip);
  trustCard.appendChild(trustText);
  content.appendChild(trustCard);

  // Billing History Link
  const billingLink = document.createElement('div');
  billingLink.style.cssText = `text-align:center;margin-bottom:var(--vv-space-5);font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;flex-shrink:0;`;
  billingLink.innerHTML = '&#129534; View Billing History';
  billingLink.addEventListener('pointerdown', () => { billingLink.style.opacity = '0.6'; });
  billingLink.addEventListener('pointerup', () => { billingLink.style.opacity = '1'; });
  billingLink.addEventListener('pointerleave', () => { billingLink.style.opacity = '1'; });
  content.appendChild(billingLink);

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  screen.appendChild(content);

  // Tab Bar (Wallet = third tab, index 2, active)
  const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];
  const TAB_ICONS = ['&#128663;', '&#128269;', '&#128179;', '&#128100;'];
  let activeTab = 2; // Wallet

  const tabBar = document.createElement('div');
  tabBar.style.cssText = `flex-shrink:0;display:flex;align-items:center;background:var(--vv-color-surface-base);border-top:1px solid ${tokens.colorGrey100};height:64px;padding-bottom:var(--vv-space-3);box-sizing:border-box;`;

  const tabEls = [];

  function applyTabState(tabEl, isActive) {
    const circle = tabEl._circle;
    const icon = tabEl._icon;
    const lbl = tabEl._label;
    circle.style.background = isActive ? tokens.colorSurfaceInverse : 'transparent';
    icon.style.color = isActive ? '#ffffff' : tokens.colorGrey300;
    lbl.style.color = isActive ? tokens.colorTextAccent : tokens.colorGrey300;
  }

  TABS.forEach((label, i) => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;';

    const circle = document.createElement('div');
    circle.style.cssText = `width:36px;height:36px;border-radius:var(--vv-radius-full);display:flex;align-items:center;justify-content:center;background:${i === activeTab ? tokens.colorSurfaceInverse : 'transparent'};`;

    const icon = document.createElement('span');
    icon.style.cssText = `font-size:16px;color:${i === activeTab ? '#ffffff' : tokens.colorGrey300};`;
    icon.innerHTML = TAB_ICONS[i];

    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${i === activeTab ? tokens.colorTextAccent : tokens.colorGrey300};`;
    lbl.textContent = label;

    tab._circle = circle;
    tab._icon = icon;
    tab._label = lbl;

    circle.appendChild(icon);
    tab.appendChild(circle);
    tab.appendChild(lbl);
    tabBar.appendChild(tab);
    tabEls.push(tab);

    tab.addEventListener('pointerdown', () => {
      activeTab = i;
      tabEls.forEach((t, j) => applyTabState(t, j === i));
    });
  });

  screen.appendChild(tabBar);

  return frame;
};

// ── SourceCode export ──────────────────────────────────────────────────────────
const _rnJSX = `
// PaymentMethods — React Native Paper
import { Surface, Text } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { createVoltVentureTheme } from 'voltventure-design-system';

const theme = createVoltVentureTheme();

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];
const TAB_ICONS = ['&#128663;', '&#128269;', '&#128179;', '&#128100;'];

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
  title: {
    fontFamily: 'Manjari',
    fontSize: 20, // typeHeadingMd
    fontWeight: '700',
    color: '#0F0F0F', // colorTextPrimary
  },
  creditCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#0F0F0F', // colorSurfaceInverse
    borderRadius: 20, // radiusLg
    padding: 20,
  },
  cardNumber: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 4,
    marginBottom: 20,
  },
  addNewBtn: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 56,
    borderRadius: 999, // radiusFull
    backgroundColor: '#C6FF2D', // colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsList: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20, // radiusLg
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F5F5F5', // colorGrey100
  },
  optRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    minHeight: 56,
  },
  trustCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FAFAFA', // colorGrey050
    borderRadius: 20, // radiusLg
    padding: 16,
    flexDirection: 'row',
    gap: 12,
  },
  lockChip: {
    width: 34,
    height: 34,
    borderRadius: 16, // radiusMd
    backgroundColor: '#F4FFD9', // colorGreen100
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5', // colorGrey100
    height: 64,
    paddingBottom: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  tabCircleActive: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0F0F0F', // colorSurfaceInverse
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabelActive: {
    fontFamily: 'Inter',
    fontSize: 11, // typeLabelSm
    fontWeight: '500',
    color: '#7D9220', // colorTextAccent
  },
  tabLabelInactive: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#C9C9C9', // colorGrey300
  },
});

export function PaymentMethodsScreen() {
  const [activeTab, setActiveTab] = React.useState(2); // Wallet
  return (
    <Surface style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Payment Methods</Text>
        </View>
        <Text style={{ paddingHorizontal: 16, paddingTop: 4, paddingBottom: 16, fontFamily: 'Inter', fontSize: 15, color: '#808080' }}>
          Manage your saved payment methods.
        </Text>
        <View style={styles.creditCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, color: '#808080' }}>Default Card</Text>
            <View style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 }}>
              <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '600', color: '#0F0F0F' }}>Visa</Text>
            </View>
          </View>
          <Text style={styles.cardNumber}>\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4829</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, color: '#808080' }}>Expires 12/27</Text>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, color: '#808080' }}>John Doe</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addNewBtn}>
          <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>+ Add New Payment Method</Text>
        </TouchableOpacity>
        <View style={styles.trustCard}>
          <View style={styles.lockChip}><Text style={{ fontSize: 16 }}>&#128274;</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Bank-grade security</Text>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, color: '#808080', marginTop: 2 }}>Payments secured by Stripe</Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </ScrollView>
      <View style={styles.tabBar}>
        {TABS.map((label, i) => (
          <TouchableOpacity key={label} style={styles.tab} onPress={() => setActiveTab(i)}>
            {i === activeTab
              ? <View style={styles.tabCircleActive}><Text style={{ fontSize: 16, color: '#FFFFFF' }}>{TAB_ICONS[i]}</Text></View>
              : <Text style={{ fontSize: 16, color: '#C9C9C9' }}>{TAB_ICONS[i]}</Text>}
            <Text style={i === activeTab ? styles.tabLabelActive : styles.tabLabelInactive}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Surface>
  );
}
`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// PaymentMethods — React Native Paper</div>${_blk('PaymentMethodsScreen',_rnJSX)}</div>`;
