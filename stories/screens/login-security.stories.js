import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/LoginSecurity' };

// ── Phone frame helper ─────────────────────────────────────────────────────────
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
    width:393px;min-height:852px;display:flex;flex-direction:column;
    background:${tokens.colorGrey050};box-sizing:border-box;font-family:Inter,sans-serif;
  ">
    <!-- Status Bar (62px) -->
    <div style="height:62px;background:${tokens.colorGrey050};display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-6);box-sizing:border-box;flex-shrink:0;">
      <span style="font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:var(--vv-text-label-sm-size);color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>
    <!-- Header Row -->
    <div style="height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);flex-shrink:0;">
      <div style="width:36px;height:36px;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;box-sizing:border-box;flex-shrink:0;">&#8592;</div>
      <span style="font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Login &amp; Security</span>
    </div>
    <!-- SECURITY Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">SECURITY</div>
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;">
        <!-- Change Password Row -->
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">&#128273;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Change Password</span>
          <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <!-- Biometric Login Row — toggle ON (46x27px) -->
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;">
          <div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">&#128070;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Biometric Login</span>
          <!-- Toggle 46x27px ON -->
          <div style="width:46px;height:27px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;">
            <div style="width:19px;height:19px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;right:4px;transition:right var(--vv-duration-quick) var(--vv-easing-standard);"></div>
          </div>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <!-- 2FA Row — toggle OFF (46x27px) -->
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;">
          <div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">&#128241;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Two-Factor Authentication</span>
          <!-- Toggle 46x27px OFF -->
          <div style="width:46px;height:27px;background:${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;">
            <div style="width:19px;height:19px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;left:4px;transition:left var(--vv-duration-quick) var(--vv-easing-standard);"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- ACTIVE SESSIONS Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">ACTIVE SESSIONS</div>
      <!-- Current Device Card (colorGreen100) -->
      <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);margin-bottom:var(--vv-space-3);box-sizing:border-box;">
        <div style="width:38px;height:38px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;">&#128241;</div>
        <div style="flex:1;">
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextAccent};">iPhone 16 Pro</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGreen700};margin-top:var(--vv-space-1);">Current device &middot; Online</div>
        </div>
        <!-- Live dot -->
        <div style="width:8px;height:8px;background:${tokens.colorActionPrimary};border-radius:var(--vv-radius-full);flex-shrink:0;"></div>
      </div>
      <!-- Other Device Row -->
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
        <div style="width:38px;height:38px;background:${tokens.colorGrey100};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;">&#128187;</div>
        <div style="flex:1;">
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">MacBook Pro</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};margin-top:var(--vv-space-1);">Last active 2 days ago</div>
        </div>
        <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
      </div>
    </div>
    <!-- Sign Out All Devices Button -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="height:48px;display:flex;align-items:center;justify-content:center;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;cursor:pointer;box-sizing:border-box;">
        <span style="font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextSecondary};">Sign Out All Devices</span>
      </div>
    </div>
    <!-- Spacer -->
    <div style="flex:1;"></div>
    <!-- Tab Bar — Account active -->
    <div style="display:flex;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};padding:var(--vv-space-3) 0 var(--vv-space-7);flex-shrink:0;">
      ${TABS.map((label, i) => {
        const isActive = i === 3;
        return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;">
          <div style="width:40px;height:26px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};"></div>
          <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span>
        </div>`;
      }).join('')}
    </div>
  </div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();
  screen.style.background = tokens.colorGrey050;

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:auto;';

  // Status bar space
  const sb = document.createElement('div');
  sb.style.cssText = `height:20px;background:${tokens.colorGrey050};flex-shrink:0;`;
  content.appendChild(sb);

  // Header
  const header = document.createElement('div');
  header.style.cssText = 'height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);flex-shrink:0;';
  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;box-sizing:border-box;flex-shrink:0;`;
  backBtn.textContent = '\u2190';
  const titleEl = document.createElement('span');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'Login & Security';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  // SECURITY section
  const secWrap = document.createElement('div');
  secWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const secLbl = document.createElement('div');
  secLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  secLbl.textContent = 'SECURITY';
  secWrap.appendChild(secLbl);

  const secCard = document.createElement('div');
  secCard.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;`;

  // Change Password row
  const pwRow = document.createElement('div');
  pwRow.style.cssText = `display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;`;
  pwRow.addEventListener('pointerdown', () => { pwRow.style.background = tokens.colorGrey050; });
  pwRow.addEventListener('pointerup', () => { pwRow.style.background = ''; });
  pwRow.addEventListener('pointerleave', () => { pwRow.style.background = ''; });
  const pwChip = document.createElement('div');
  pwChip.style.cssText = `width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
  pwChip.textContent = '\uD83D\uDD11';
  const pwText = document.createElement('span');
  pwText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  pwText.textContent = 'Change Password';
  const pwChev = document.createElement('span');
  pwChev.style.cssText = `color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;`;
  pwChev.textContent = '\u203a';
  pwRow.appendChild(pwChip);
  pwRow.appendChild(pwText);
  pwRow.appendChild(pwChev);
  secCard.appendChild(pwRow);

  // Divider
  const d1 = document.createElement('div');
  d1.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  secCard.appendChild(d1);

  // Helper: make toggle row (46x27px)
  function makeToggleRow(icon, label, initialOn) {
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;`;
    const chip = document.createElement('div');
    chip.style.cssText = `width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
    chip.textContent = icon;
    const text = document.createElement('span');
    text.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
    text.textContent = label;

    // Toggle 46x27px
    let isOn = initialOn;
    const pill = document.createElement('div');
    pill.style.cssText = `width:46px;height:27px;background:${isOn ? tokens.colorActionPrimary : tokens.colorGrey200};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;`;
    const knob = document.createElement('div');
    knob.style.cssText = `width:19px;height:19px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;${isOn ? 'right:4px;' : 'left:4px;'}transition:left var(--vv-duration-quick) var(--vv-easing-standard),right var(--vv-duration-quick) var(--vv-easing-standard);`;
    pill.appendChild(knob);

    pill.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      isOn = !isOn;
      if (isOn) {
        pill.style.background = tokens.colorActionPrimary;
        knob.style.left = '';
        knob.style.right = '4px';
      } else {
        pill.style.background = tokens.colorGrey200;
        knob.style.right = '';
        knob.style.left = '4px';
      }
    });

    row.appendChild(chip);
    row.appendChild(text);
    row.appendChild(pill);
    return row;
  }

  // Biometric Login — ON
  secCard.appendChild(makeToggleRow('\uD83D\uDC46', 'Biometric Login', true));

  const d2 = document.createElement('div');
  d2.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  secCard.appendChild(d2);

  // 2FA — OFF
  secCard.appendChild(makeToggleRow('\uD83D\uDCF1', 'Two-Factor Authentication', false));

  secWrap.appendChild(secCard);
  content.appendChild(secWrap);

  // ACTIVE SESSIONS section
  const sessWrap = document.createElement('div');
  sessWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const sessLbl = document.createElement('div');
  sessLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  sessLbl.textContent = 'ACTIVE SESSIONS';
  sessWrap.appendChild(sessLbl);

  // Current Device Card (colorGreen100)
  const currDevice = document.createElement('div');
  currDevice.style.cssText = `background:${tokens.colorGreen100};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);margin-bottom:var(--vv-space-3);box-sizing:border-box;`;
  const currChip = document.createElement('div');
  currChip.style.cssText = `width:38px;height:38px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;`;
  currChip.textContent = '\uD83D\uDCF1';
  const currCol = document.createElement('div');
  currCol.style.cssText = 'flex:1;';
  const currName = document.createElement('div');
  currName.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextAccent};`;
  currName.textContent = 'iPhone 16 Pro';
  const currSub = document.createElement('div');
  currSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGreen700};margin-top:var(--vv-space-1);`;
  currSub.textContent = 'Current device \u00B7 Online';
  currCol.appendChild(currName);
  currCol.appendChild(currSub);
  const liveDot = document.createElement('div');
  liveDot.style.cssText = `width:8px;height:8px;background:${tokens.colorActionPrimary};border-radius:var(--vv-radius-full);flex-shrink:0;`;
  currDevice.appendChild(currChip);
  currDevice.appendChild(currCol);
  currDevice.appendChild(liveDot);
  sessWrap.appendChild(currDevice);

  // Other Device Row
  const otherDevice = document.createElement('div');
  otherDevice.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;`;
  otherDevice.addEventListener('pointerdown', () => { otherDevice.style.background = tokens.colorGrey050; });
  otherDevice.addEventListener('pointerup', () => { otherDevice.style.background = tokens.colorSurfaceBase; });
  otherDevice.addEventListener('pointerleave', () => { otherDevice.style.background = tokens.colorSurfaceBase; });
  const otherChip = document.createElement('div');
  otherChip.style.cssText = `width:38px;height:38px;background:${tokens.colorGrey100};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);flex-shrink:0;`;
  otherChip.textContent = '\uD83D\uDCBB';
  const otherCol = document.createElement('div');
  otherCol.style.cssText = 'flex:1;';
  const otherName = document.createElement('div');
  otherName.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  otherName.textContent = 'MacBook Pro';
  const otherSub = document.createElement('div');
  otherSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};margin-top:var(--vv-space-1);`;
  otherSub.textContent = 'Last active 2 days ago';
  otherCol.appendChild(otherName);
  otherCol.appendChild(otherSub);
  const otherChev = document.createElement('span');
  otherChev.style.cssText = `color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;`;
  otherChev.textContent = '\u203a';
  otherDevice.appendChild(otherChip);
  otherDevice.appendChild(otherCol);
  otherDevice.appendChild(otherChev);
  sessWrap.appendChild(otherDevice);
  content.appendChild(sessWrap);

  // Sign Out All Devices button
  const signOutWrap = document.createElement('div');
  signOutWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const signOutBtn = document.createElement('div');
  signOutBtn.style.cssText = `height:48px;display:flex;align-items:center;justify-content:center;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;cursor:pointer;box-sizing:border-box;`;
  signOutBtn.addEventListener('pointerdown', () => { signOutBtn.style.background = tokens.colorGrey050; });
  signOutBtn.addEventListener('pointerup', () => { signOutBtn.style.background = tokens.colorSurfaceBase; });
  signOutBtn.addEventListener('pointerleave', () => { signOutBtn.style.background = tokens.colorSurfaceBase; });
  const signOutText = document.createElement('span');
  signOutText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextSecondary};`;
  signOutText.textContent = 'Sign Out All Devices';
  signOutBtn.appendChild(signOutText);
  signOutWrap.appendChild(signOutBtn);
  content.appendChild(signOutWrap);

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  screen.appendChild(content);

  // Tab Bar — Account active (index 3)
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `display:flex;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};padding:var(--vv-space-3) 0 var(--vv-space-7);flex-shrink:0;`;

  let activeTab = 3;
  const tabEls = [];
  TABS.forEach((label, i) => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;';
    const pill = document.createElement('div');
    pill.style.cssText = `width:40px;height:26px;border-radius:${tokens.radiusFull}px;background:${i === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200};`;
    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${i === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    lbl.textContent = label;
    tab.appendChild(pill);
    tab.appendChild(lbl);
    tabEls.push({ pill, lbl });
    tab.addEventListener('pointerdown', () => {
      activeTab = i;
      tabEls.forEach(({ pill: p, lbl: l }, idx) => {
        p.style.background = idx === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200;
        l.style.color = idx === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary;
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

const RN_JSX = `import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// colorGrey050: '#FAFAFA'   colorSurfaceBase: '#FFFFFF'
// colorGrey100: '#F5F5F5'   colorGrey200: '#EBEBEB'
// colorActionPrimary: '#C6FF2D'   colorGreen100: '#F4FFD9'
// colorGreen700/colorTextAccent: '#7D9220'

const LoginSecurityScreen = () => {
  const [bioOn, setBioOn] = useState(true);    // Biometric ON
  const [twoFaOn, setTwoFaOn] = useState(false); // 2FA OFF

  const Toggle = ({ value, onToggle, size46 }) => (
    <TouchableOpacity
      style={{ width: size46 ? 46 : 50, height: size46 ? 27 : 29, backgroundColor: value ? '#C6FF2D' : '#EBEBEB', borderRadius: 999, justifyContent: 'center', alignItems: value ? 'flex-end' : 'flex-start', paddingHorizontal: 4 }}
      onPress={onToggle}
    >
      <View style={{ width: size46 ? 19 : 21, height: size46 ? 19 : 21, borderRadius: 999, backgroundColor: '#FFFFFF' }} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
      {/* SECURITY Section */}
      <Text style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', textTransform: 'uppercase' }}>SECURITY</Text>
      <View style={{ marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 20, overflow: 'hidden' }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', minHeight: 48, paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
          <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Change Password</Text>
          <Text style={{ color: '#C9C9C9', fontSize: 20 }}>{'\u203a'}</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', minHeight: 48, paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
          <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Biometric Login</Text>
          <Toggle value={bioOn} onToggle={() => setBioOn(v => !v)} size46={true} />
        </View>
        <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', minHeight: 48, paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
          <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Two-Factor Authentication</Text>
          <Toggle value={twoFaOn} onToggle={() => setTwoFaOn(v => !v)} size46={true} />
        </View>
      </View>

      {/* Current Device Card (colorGreen100) */}
      <View style={{ marginHorizontal: 16, marginTop: 16, backgroundColor: '#F4FFD9', borderRadius: 20, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ width: 38, height: 38, backgroundColor: '#C6FF2D', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20 }}>{'\uD83D\uDCF1'}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#7D9220' }}>iPhone 16 Pro</Text>
          <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#7D9220', marginTop: 2 }}>Current device \u00B7 Online</Text>
        </View>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#C6FF2D' }} />
      </View>
    </ScrollView>
  );
};

export default LoginSecurityScreen;`;

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px">` +
  `<div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Login &amp; Security — React Native Paper</div>` +
  _blk('LoginSecurityScreen.tsx', RN_JSX) +
  `</div>`;
