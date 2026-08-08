import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Support' };

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

const FAQ_DATA = [
  { q: 'How is the price calculated?', a: 'Rides are billed per minute at the rate shown at ride start. Electricity surcharges may apply. Final bill on Ride Complete screen.', startExpanded: true },
  { q: "What if I can't find a charging hub?", a: 'Charging hubs are visible on the map. If all nearby hubs are full, the app shows the next available hub within 2 km. You can dock at any authorised zone.', startExpanded: false },
  { q: 'Is my deposit refundable?', a: 'Yes. The security deposit is fully refundable if the bike is returned in good condition. Releases typically take 24\u201372 hours.', startExpanded: false },
  { q: "What happens if I'm in an accident?", a: 'Your safety is our priority. In case of an accident, press the SOS button in the Active Ride screen. Report the incident through Support.', startExpanded: false },
];

// ── Default (static HTML) ──────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;min-height:852px;display:flex;flex-direction:column;
    background:${tokens.colorSurfaceBase};box-sizing:border-box;font-family:Inter,sans-serif;
  ">
    <!-- Status Bar (62px) -->
    <div style="height:62px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-6);box-sizing:border-box;flex-shrink:0;">
      <span style="font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:var(--vv-text-label-sm-size);color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>
    <!-- Header Row (44px) -->
    <div style="height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);flex-shrink:0;">
      <div style="width:36px;height:36px;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;box-sizing:border-box;flex-shrink:0;">&#8592;</div>
      <span style="font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Support</span>
    </div>
    <!-- Pricing Banner -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
      <div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">&#8505;</div>
      <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">View Pricing Policies</span>
      <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
    </div>
    <!-- WhatsApp CTA — #25D366 brand green, no VV token -->
    <div style="margin:var(--vv-space-3) var(--vv-space-5) 0;height:56px;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);background:#25D366;border-radius:${tokens.radiusFull}px;cursor:pointer;box-sizing:border-box;">
      <span style="font-size:${tokens.fontSizeHeadingSm}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">&#128172; Contact Support via WhatsApp</span>
    </div>
    <!-- Dropoff Card -->
    <div style="margin:var(--vv-space-3) var(--vv-space-5) 0;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey100};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);box-sizing:border-box;">
      <div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">&#128757;</div>
      <div style="flex:1;">
        <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Allow Dropoff Anywhere</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Rebalancing zone (&#8377;5 fee applies)</div>
      </div>
      <!-- Toggle OFF (50x29px) -->
      <div style="width:50px;height:29px;background:${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;">
        <div style="width:21px;height:21px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;left:4px;transition:left var(--vv-duration-quick) var(--vv-easing-standard);"></div>
      </div>
    </div>
    <!-- FAQ Section -->
    <div style="padding:var(--vv-space-5) var(--vv-space-5) var(--vv-space-3);font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">FAQ</div>
    <div style="margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey100};border-radius:${tokens.radiusLg}px;overflow:hidden;padding:0 var(--vv-space-5);box-sizing:border-box;">
      <!-- Row 1 — pre-expanded -->
      <div style="padding:var(--vv-space-5) 0;box-sizing:border-box;">
        <div style="display:flex;align-items:center;cursor:pointer;">
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">How is the price calculated?</span>
          <span style="font-size:var(--vv-text-heading-lg-size);line-height:1;display:inline-block;transform:rotate(90deg);color:${tokens.colorTextPrimary};flex-shrink:0;margin-left:var(--vv-space-3);">&#8250;</span>
        </div>
        <div style="margin-top:var(--vv-space-3);font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};color:${tokens.colorTextSecondary};line-height:1.5;">Rides are billed per minute at the rate shown at ride start. Electricity surcharges may apply. Final bill on Ride Complete screen.</div>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <!-- Row 2 — collapsed -->
      <div style="padding:var(--vv-space-5) 0;display:flex;align-items:center;cursor:pointer;">
        <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">What if I can't find a charging hub?</span>
        <span style="font-size:var(--vv-text-heading-lg-size);line-height:1;display:inline-block;transform:rotate(0deg);color:${tokens.colorGrey300};flex-shrink:0;margin-left:var(--vv-space-3);">&#8250;</span>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <!-- Row 3 — collapsed -->
      <div style="padding:var(--vv-space-5) 0;display:flex;align-items:center;cursor:pointer;">
        <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Is my deposit refundable?</span>
        <span style="font-size:var(--vv-text-heading-lg-size);line-height:1;display:inline-block;transform:rotate(0deg);color:${tokens.colorGrey300};flex-shrink:0;margin-left:var(--vv-space-3);">&#8250;</span>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <!-- Row 4 — collapsed -->
      <div style="padding:var(--vv-space-5) 0;display:flex;align-items:center;cursor:pointer;">
        <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">What happens if I'm in an accident?</span>
        <span style="font-size:var(--vv-text-heading-lg-size);line-height:1;display:inline-block;transform:rotate(0deg);color:${tokens.colorGrey300};flex-shrink:0;margin-left:var(--vv-space-3);">&#8250;</span>
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

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:auto;';

  // Status bar
  const sb = document.createElement('div');
  sb.style.cssText = `height:20px;background:${tokens.colorSurfaceBase};flex-shrink:0;`;
  content.appendChild(sb);

  // Header
  const header = document.createElement('div');
  header.style.cssText = 'height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);flex-shrink:0;';
  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;box-sizing:border-box;flex-shrink:0;`;
  backBtn.textContent = '\u2190';
  const titleEl = document.createElement('span');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'Support';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  // Pricing Banner
  const priceBanner = document.createElement('div');
  priceBanner.style.cssText = `margin:var(--vv-space-5) var(--vv-space-5) 0;background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;`;
  priceBanner.addEventListener('pointerdown', () => { priceBanner.style.background = tokens.colorGrey100; });
  priceBanner.addEventListener('pointerup', () => { priceBanner.style.background = tokens.colorGrey050; });
  priceBanner.addEventListener('pointerleave', () => { priceBanner.style.background = tokens.colorGrey050; });
  const priceChip = document.createElement('div');
  priceChip.style.cssText = `width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
  priceChip.textContent = '\u2139';
  const priceText = document.createElement('span');
  priceText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  priceText.textContent = 'View Pricing Policies';
  const priceChev = document.createElement('span');
  priceChev.style.cssText = `color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;`;
  priceChev.textContent = '\u203a';
  priceBanner.appendChild(priceChip);
  priceBanner.appendChild(priceText);
  priceBanner.appendChild(priceChev);
  content.appendChild(priceBanner);

  // WhatsApp CTA — #25D366 brand green, no VV token
  const waCta = document.createElement('div');
  waCta.style.cssText = 'margin:var(--vv-space-3) var(--vv-space-5) 0;height:56px;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);background:#25D366;border-radius:' + tokens.radiusFull + 'px;cursor:pointer;box-sizing:border-box;';
  waCta.addEventListener('pointerdown', () => { waCta.style.background = '#1eb858'; waCta.style.transform = 'scale(0.97)'; });
  waCta.addEventListener('pointerup', () => { waCta.style.background = '#25D366'; waCta.style.transform = ''; });
  waCta.addEventListener('pointerleave', () => { waCta.style.background = '#25D366'; waCta.style.transform = ''; });
  const waText = document.createElement('span');
  waText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);`;
  waText.textContent = '\uD83D\uDCAC Contact Support via WhatsApp';
  waCta.appendChild(waText);
  content.appendChild(waCta);

  // Dropoff Card with toggle
  const dropCard = document.createElement('div');
  dropCard.style.cssText = `margin:var(--vv-space-3) var(--vv-space-5) 0;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey100};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);box-sizing:border-box;`;
  const dropChip = document.createElement('div');
  dropChip.style.cssText = `width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
  dropChip.textContent = '\uD83D\uDEF5';
  const dropCol = document.createElement('div');
  dropCol.style.cssText = 'flex:1;';
  const dropTitle = document.createElement('div');
  dropTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  dropTitle.textContent = 'Allow Dropoff Anywhere';
  const dropSub = document.createElement('div');
  dropSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);`;
  dropSub.textContent = 'Rebalancing zone (\u20B95 fee applies)';
  dropCol.appendChild(dropTitle);
  dropCol.appendChild(dropSub);

  let dropoffOn = false;
  const dropPill = document.createElement('div');
  dropPill.style.cssText = `width:50px;height:29px;background:${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 var(--vv-space-2);box-sizing:border-box;flex-shrink:0;cursor:pointer;`;
  const dropKnob = document.createElement('div');
  dropKnob.style.cssText = 'width:21px;height:21px;background:var(--vv-color-surface-base);border-radius:var(--vv-radius-full);position:absolute;left:4px;transition:left var(--vv-duration-quick) var(--vv-easing-standard);';
  dropPill.appendChild(dropKnob);

  dropPill.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    dropoffOn = !dropoffOn;
    if (dropoffOn) {
      dropPill.style.background = tokens.colorActionPrimary;
      dropKnob.style.left = '';
      dropKnob.style.right = '4px';
    } else {
      dropPill.style.background = tokens.colorGrey200;
      dropKnob.style.right = '';
      dropKnob.style.left = '4px';
    }
  });

  dropCard.appendChild(dropChip);
  dropCard.appendChild(dropCol);
  dropCard.appendChild(dropPill);
  content.appendChild(dropCard);

  // FAQ Section label
  const faqLbl = document.createElement('div');
  faqLbl.style.cssText = `padding:var(--vv-space-5) var(--vv-space-5) var(--vv-space-3);font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;`;
  faqLbl.textContent = 'FAQ';
  content.appendChild(faqLbl);

  // FAQ Accordion Card
  const faqCard = document.createElement('div');
  faqCard.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-5);background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey100};border-radius:${tokens.radiusLg}px;overflow:hidden;padding:0 var(--vv-space-5);box-sizing:border-box;`;

  FAQ_DATA.forEach(({ q, a, startExpanded }, i) => {
    if (i > 0) {
      const div = document.createElement('div');
      div.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
      faqCard.appendChild(div);
    }

    let expanded = startExpanded;
    const rowWrap = document.createElement('div');
    rowWrap.style.cssText = 'padding:0;box-sizing:border-box;';

    const qRow = document.createElement('div');
    qRow.style.cssText = 'display:flex;align-items:center;padding:var(--vv-space-5) 0 0;cursor:pointer;user-select:none;';

    const qText = document.createElement('span');
    qText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);line-height:${tokens.fontLineHeightBodyMd}px;color:${tokens.colorTextPrimary};`;
    qText.textContent = q;

    const chevron = document.createElement('span');
    chevron.style.cssText = 'font-size:var(--vv-text-heading-lg-size);line-height:1;display:inline-block;flex-shrink:0;margin-left:var(--vv-space-3);transition:transform var(--vv-duration-standard) var(--vv-easing-standard);';
    chevron.textContent = '\u203a';

    const answerEl = document.createElement('div');
    answerEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};line-height:1.5;color:${tokens.colorTextSecondary};padding:var(--vv-space-3) 0 var(--vv-space-5);`;
    answerEl.textContent = a;

    if (expanded) {
      chevron.style.transform = 'rotate(90deg)';
      chevron.style.color = tokens.colorTextPrimary;
      answerEl.style.display = 'block';
    } else {
      chevron.style.transform = 'rotate(0deg)';
      chevron.style.color = tokens.colorGrey300;
      answerEl.style.display = 'none';
    }

    qRow.addEventListener('pointerdown', () => {
      expanded = !expanded;
      if (expanded) {
        answerEl.style.display = 'block';
        chevron.style.transform = 'rotate(90deg)';
        chevron.style.color = tokens.colorTextPrimary;
      } else {
        answerEl.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
        chevron.style.color = tokens.colorGrey300;
      }
    });

    qRow.appendChild(qText);
    qRow.appendChild(chevron);
    rowWrap.appendChild(qRow);
    rowWrap.appendChild(answerEl);
    faqCard.appendChild(rowWrap);
  });

  content.appendChild(faqCard);

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

// colorSurfaceBase: '#FFFFFF'   colorGrey050: '#FAFAFA'
// colorGrey100: '#F5F5F5'   colorGrey200: '#EBEBEB'
// colorActionPrimary: '#C6FF2D'
// #25D366 — WhatsApp brand green (no VV token)
// #C6FF2D — colorActionPrimary for dropoff toggle ON

const SupportScreen = () => {
  const [dropoffOn, setDropoffOn] = useState(false);
  const [faqExpanded, setFaqExpanded] = useState([true, false, false, false]);

  const toggleFaq = (i) => {
    setFaqExpanded(prev => prev.map((v, idx) => idx === i ? !v : v));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* WhatsApp CTA */}
      <TouchableOpacity style={{ marginHorizontal: 16, marginTop: 8, height: 56, backgroundColor: '#25D366', borderRadius: 999, alignItems: 'center', justifyContent: 'center' }}>
        {/* #25D366 — WhatsApp brand green, no VV token */}
        <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#FFFFFF' }}>{'\uD83D\uDCAC'} Contact Support via WhatsApp</Text>
      </TouchableOpacity>

      {/* Dropoff Toggle */}
      <View style={{ marginHorizontal: 16, marginTop: 8, borderWidth: 1, borderColor: '#F5F5F5', borderRadius: 20, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Allow Dropoff Anywhere</Text>
          <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', marginTop: 2 }}>Rebalancing zone (\u20B95 fee applies)</Text>
        </View>
        <TouchableOpacity
          style={{ width: 50, height: 29, backgroundColor: dropoffOn ? '#C6FF2D' : '#EBEBEB', borderRadius: 999, justifyContent: 'center', alignItems: dropoffOn ? 'flex-end' : 'flex-start', paddingHorizontal: 4 }}
          onPress={() => setDropoffOn(v => !v)}
        >
          <View style={{ width: 21, height: 21, borderRadius: 999, backgroundColor: '#FFFFFF' }} />
        </TouchableOpacity>
      </View>

      {/* FAQ Accordion — first row pre-expanded */}
      <Text style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', textTransform: 'uppercase' }}>FAQ</Text>
      <View style={{ marginHorizontal: 16, borderWidth: 1, borderColor: '#F5F5F5', borderRadius: 20, overflow: 'hidden', paddingHorizontal: 16 }}>
        {['How is the price calculated?', "What if I can't find a charging hub?", 'Is my deposit refundable?', "What happens if I'm in an accident?"].map((q, i) => (
          <View key={i}>
            {i > 0 && <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }} onPress={() => toggleFaq(i)}>
              <Text style={{ flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>{q}</Text>
              <Text style={{ fontSize: 20, color: faqExpanded[i] ? '#0F0F0F' : '#C9C9C9', transform: [{ rotate: faqExpanded[i] ? '90deg' : '0deg' }] }}>{'\u203a'}</Text>
            </TouchableOpacity>
            {faqExpanded[i] && (
              <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '400', color: '#808080', paddingBottom: 16, lineHeight: 22 }}>Answer text here.</Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SupportScreen;`;

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px">` +
  `<div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Support — React Native Paper</div>` +
  _blk('SupportScreen.tsx', RN_JSX) +
  `</div>`;
