import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Preferences' };

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
      <span style="font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Preferences</span>
    </div>
    <!-- REGIONAL Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">REGIONAL</div>
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;">
        <!-- Language Row -->
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#127760;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Language</span>
          <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">English &#8250;</span>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <!-- Distance Units Row -->
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#128207;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Distance Units</span>
          <div style="display:inline-flex;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:3px;gap:3px;">
            <div style="background:${tokens.colorSurfaceInverse};color:var(--vv-color-text-on-inverse);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 14px;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};cursor:pointer;">km</div>
            <div style="background:transparent;color:${tokens.colorTextSecondary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 14px;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};cursor:pointer;">mi</div>
          </div>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <!-- Currency Row -->
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#128178;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Currency</span>
          <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">INR &#8377; &#8250;</span>
        </div>
      </div>
    </div>
    <!-- NOTIFICATIONS Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">NOTIFICATIONS</div>
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;">
        <div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#128276;</div>
          <div style="flex:1;">
            <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Push Notifications</div>
            <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Ride updates &amp; promotions</div>
          </div>
          <!-- Toggle pill (50x29px ON state) -->
          <div style="width:50px;height:29px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;">
            <div style="width:21px;height:21px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;right:4px;transition:right var(--vv-duration-quick) var(--vv-easing-standard);"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Spacer -->
    <div style="flex:1;"></div>
    <!-- Tab Bar — Account active (Preferences within Account flow) -->
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
  titleEl.textContent = 'Preferences';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  function makeDivider() {
    const d = document.createElement('div');
    d.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
    return d;
  }

  // REGIONAL section
  const regWrap = document.createElement('div');
  regWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const regLbl = document.createElement('div');
  regLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  regLbl.textContent = 'REGIONAL';
  regWrap.appendChild(regLbl);

  const regCard = document.createElement('div');
  regCard.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;`;

  // Language row
  const langRow = document.createElement('div');
  langRow.style.cssText = `display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;`;
  langRow.addEventListener('pointerdown', () => { langRow.style.background = tokens.colorGrey050; });
  langRow.addEventListener('pointerup', () => { langRow.style.background = ''; });
  langRow.addEventListener('pointerleave', () => { langRow.style.background = ''; });
  const langChip = document.createElement('div');
  langChip.style.cssText = `width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;`;
  langChip.textContent = '\uD83C\uDF10';
  const langText = document.createElement('span');
  langText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  langText.textContent = 'Language';
  const langVal = document.createElement('span');
  langVal.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};`;
  langVal.textContent = 'English \u203a';
  langRow.appendChild(langChip);
  langRow.appendChild(langText);
  langRow.appendChild(langVal);
  regCard.appendChild(langRow);
  regCard.appendChild(makeDivider());

  // Distance Units row with segmented control
  const distRow = document.createElement('div');
  distRow.style.cssText = `display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;`;
  const distChip = document.createElement('div');
  distChip.style.cssText = `width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;`;
  distChip.textContent = '\uD83D\uDCCF';
  const distText = document.createElement('span');
  distText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  distText.textContent = 'Distance Units';

  // Segmented control km/mi
  let activeUnit = 'km';
  const segCtrl = document.createElement('div');
  segCtrl.style.cssText = `display:inline-flex;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:3px;gap:3px;`;

  const kmBtn = document.createElement('div');
  kmBtn.style.cssText = `background:${tokens.colorSurfaceInverse};color:var(--vv-color-text-on-inverse);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 14px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};cursor:pointer;`;
  kmBtn.textContent = 'km';

  const miBtn = document.createElement('div');
  miBtn.style.cssText = `background:transparent;color:${tokens.colorTextSecondary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 14px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};cursor:pointer;`;
  miBtn.textContent = 'mi';

  function updateSegmented() {
    if (activeUnit === 'km') {
      kmBtn.style.background = tokens.colorSurfaceInverse;
      kmBtn.style.color = 'var(--vv-color-text-on-inverse)';
      miBtn.style.background = 'transparent';
      miBtn.style.color = tokens.colorTextSecondary;
    } else {
      miBtn.style.background = tokens.colorSurfaceInverse;
      miBtn.style.color = 'var(--vv-color-text-on-inverse)';
      kmBtn.style.background = 'transparent';
      kmBtn.style.color = tokens.colorTextSecondary;
    }
  }

  kmBtn.addEventListener('pointerdown', () => { activeUnit = 'km'; updateSegmented(); });
  miBtn.addEventListener('pointerdown', () => { activeUnit = 'mi'; updateSegmented(); });

  segCtrl.appendChild(kmBtn);
  segCtrl.appendChild(miBtn);
  distRow.appendChild(distChip);
  distRow.appendChild(distText);
  distRow.appendChild(segCtrl);
  regCard.appendChild(distRow);
  regCard.appendChild(makeDivider());

  // Currency row
  const currRow = document.createElement('div');
  currRow.style.cssText = `display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;`;
  currRow.addEventListener('pointerdown', () => { currRow.style.background = tokens.colorGrey050; });
  currRow.addEventListener('pointerup', () => { currRow.style.background = ''; });
  currRow.addEventListener('pointerleave', () => { currRow.style.background = ''; });
  const currChip = document.createElement('div');
  currChip.style.cssText = `width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;`;
  currChip.textContent = '\uD83D\uDCB2';
  const currText = document.createElement('span');
  currText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  currText.textContent = 'Currency';
  const currVal = document.createElement('span');
  currVal.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};`;
  currVal.textContent = 'INR \u20B9 \u203a';
  currRow.appendChild(currChip);
  currRow.appendChild(currText);
  currRow.appendChild(currVal);
  regCard.appendChild(currRow);
  regWrap.appendChild(regCard);
  content.appendChild(regWrap);

  // NOTIFICATIONS section
  const notifWrap = document.createElement('div');
  notifWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const notifLbl = document.createElement('div');
  notifLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  notifLbl.textContent = 'NOTIFICATIONS';
  notifWrap.appendChild(notifLbl);

  const notifCard = document.createElement('div');
  notifCard.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;`;

  const pushRow = document.createElement('div');
  pushRow.style.cssText = `display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);box-sizing:border-box;`;
  const pushChip = document.createElement('div');
  pushChip.style.cssText = `width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;`;
  pushChip.textContent = '\uD83D\uDD14';
  const pushTextCol = document.createElement('div');
  pushTextCol.style.cssText = 'flex:1;';
  const pushTitle = document.createElement('div');
  pushTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  pushTitle.textContent = 'Push Notifications';
  const pushSub = document.createElement('div');
  pushSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);`;
  pushSub.textContent = 'Ride updates & promotions';
  pushTextCol.appendChild(pushTitle);
  pushTextCol.appendChild(pushSub);

  // Push notifications toggle (50x29px)
  let notifOn = true;
  const notifPill = document.createElement('div');
  notifPill.style.cssText = `width:50px;height:29px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;`;
  const notifKnob = document.createElement('div');
  notifKnob.style.cssText = 'width:21px;height:21px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;right:4px;transition:right var(--vv-duration-quick) var(--vv-easing-standard);';
  notifPill.appendChild(notifKnob);

  notifPill.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    notifOn = !notifOn;
    if (notifOn) {
      notifPill.style.background = tokens.colorActionPrimary;
      notifKnob.style.right = '4px';
      notifKnob.style.left = '';
    } else {
      notifPill.style.background = tokens.colorGrey200;
      notifKnob.style.right = '';
      notifKnob.style.left = '4px';
    }
  });

  pushRow.appendChild(pushChip);
  pushRow.appendChild(pushTextCol);
  pushRow.appendChild(notifPill);
  notifCard.appendChild(pushRow);
  notifWrap.appendChild(notifCard);
  content.appendChild(notifWrap);

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
// colorActionPrimary: '#C6FF2D'   colorSurfaceInverse: '#0F0F0F'

const PreferencesScreen = () => {
  const [activeUnit, setActiveUnit] = useState('km');
  const [notifOn, setNotifOn] = useState(true);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
      {/* REGIONAL Section */}
      <Text style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', textTransform: 'uppercase' }}>REGIONAL</Text>
      <View style={{ marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 20, overflow: 'hidden' }}>
        {/* Distance Units row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', minHeight: 48, paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
          <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Distance Units</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#F5F5F5', borderRadius: 999, padding: 3, gap: 3 }}>
            <TouchableOpacity
              style={{ backgroundColor: activeUnit === 'km' ? '#0F0F0F' : 'transparent', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 4 }}
              onPress={() => setActiveUnit('km')}
            >
              <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: activeUnit === 'km' ? '#FFFFFF' : '#808080' }}>km</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: activeUnit === 'mi' ? '#0F0F0F' : 'transparent', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 4 }}
              onPress={() => setActiveUnit('mi')}
            >
              <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: activeUnit === 'mi' ? '#FFFFFF' : '#808080' }}>mi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* NOTIFICATIONS Section */}
      <Text style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', textTransform: 'uppercase' }}>NOTIFICATIONS</Text>
      <View style={{ marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 20 }}>
        {/* Push toggle (50x29px) */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Push Notifications</Text>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', marginTop: 2 }}>Ride updates &amp; promotions</Text>
          </View>
          <TouchableOpacity
            style={{ width: 50, height: 29, backgroundColor: notifOn ? '#C6FF2D' : '#EBEBEB', borderRadius: 999, justifyContent: 'center', alignItems: notifOn ? 'flex-end' : 'flex-start', paddingHorizontal: 4 }}
            onPress={() => setNotifOn(v => !v)}
          >
            <View style={{ width: 21, height: 21, borderRadius: 999, backgroundColor: '#FFFFFF' }} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PreferencesScreen;`;

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px">` +
  `<div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Preferences — React Native Paper</div>` +
  _blk('PreferencesScreen.tsx', RN_JSX) +
  `</div>`;
