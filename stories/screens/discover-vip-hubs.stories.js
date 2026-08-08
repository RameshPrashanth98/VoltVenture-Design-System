import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/DiscoverVipHubs' };

function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1,3),16);
  const g = parseInt(hex8.slice(3,5),16);
  const b = parseInt(hex8.slice(5,7),16);
  const a = (parseInt(hex8.slice(7,9),16)/255).toFixed(2);
  return 'rgba('+r+','+g+','+b+','+a+')';
}
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX+'px '+token.offsetY+'px '+token.blur+'px '+token.spread+'px '+hexToRgba(token.color);
}

const TABS = ['Ride','Discover','Wallet','Account'];

// Cafe pins: [top, left, name]
const CAFE_PINS = [
  [160, 60,  'The Grind'],
  [200, 200, 'Sunrise Cafe'],
  [120, 240, 'Urban Bean'],
  [260, 130, 'Lotus Coffee'],
  [80,  100, 'Riverside Hub'],
];

// Hub rows: [name, distance, slots]
const HUB_ROWS = [
  ['The Grind',    '0.4 km', '8 charging slots'],
  ['Sunrise Cafe', '0.8 km', '5 charging slots'],
  ['Urban Bean',   '1.2 km', '12 charging slots'],
  ['Lotus Coffee', '1.6 km', '3 charging slots'],
];

function cafePinsHtml() {
  return CAFE_PINS.map(([top, left, name]) =>
    `<div style="position:absolute;top:${top}px;left:${left}px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:5px 10px;box-shadow:${shadowFromToken(tokens.elevationRaised)};display:inline-flex;align-items:center;gap:5px;"><span style="font-size:var(--vv-text-body-sm-size);">&#x2615;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">${name}</span></div>`
  ).join('');
}

function hubRowsHtml() {
  return HUB_ROWS.map(([name, dist, slots]) =>
    `<div style="display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;border-bottom:1px solid ${tokens.colorGrey100};box-sizing:border-box;"><div style="width:72px;height:72px;background:#e8e8e8;border-radius:${tokens.radiusMd}px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-numeric-md-size);">&#x2615;</div><div style="flex:1;display:flex;flex-direction:column;gap:3px;"><div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">${name}</div><div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">&#x2615; VIP Hub &middot; ${dist}</div><div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">${slots}</div></div><span style="font-size:18px;color:${tokens.colorGrey300};">&#x203A;</span></div>`
  ).join('');
}

function tabsHtml(activeLabel) {
  return TABS.map(label => {
    const isActive = label === activeLabel;
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#x25CF;</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

// ── Default (static HTML) ───────────────────────────────────────────────────────
export const Default = () => `<div style="width:393px;height:852px;display:flex;flex-direction:column;background:${tokens.colorSurfaceBase};box-sizing:border-box;">
  <!-- Map Area: 388px -->
  <div style="flex-shrink:0;height:388px;position:relative;background:#e8e8e8;overflow:hidden;">
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
    <!-- 5 Cafe Pins -->
    ${cafePinsHtml()}
    <!-- Location Pulse -->
    <div style="position:absolute;top:290px;left:182px;width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;">
      <div style="width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};"></div>
    </div>
    <!-- Top Gradient -->
    <div style="position:absolute;top:0;left:0;right:0;height:110px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
    <!-- Status Bar -->
    <div style="position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;">
      <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
    </div>
    <!-- Title Row -->
    <div style="position:absolute;top:72px;left:16px;right:16px;display:flex;align-items:center;justify-content:space-between;">
      <span style="font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Discover VIP Hubs</span>
      <div style="width:36px;height:36px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);display:flex;align-items:center;justify-content:center;box-shadow:${shadowFromToken(tokens.elevationRaised)};cursor:pointer;">&#x2699;</div>
    </div>
  </div>
  <!-- Bottom Sheet: flex:1 -->
  <div style="flex:1;background:${tokens.colorSurfaceBase};display:flex;flex-direction:column;box-shadow:${shadowFromToken(tokens.elevationFloating)};">
    <!-- Handle Row -->
    <div style="height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <div style="width:36px;height:4px;background:${tokens.colorGrey300};border-radius:4px;"></div>
    </div>
    <!-- Sheet Header -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:var(--vv-space-4) var(--vv-space-5);flex-shrink:0;">
      <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">VIP Hubs Nearby</span>
      <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Sort by: Nearest &#x203A;</span>
    </div>
    <!-- Routes Promo Card: colorSurfaceInverse (black) -->
    <div style="margin:0 var(--vv-space-5) var(--vv-space-4);background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;flex-shrink:0;">
      <div style="width:38px;height:38px;background:rgba(198,255,45,0.13);border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:18px;">&#x1F5FA;</div>
      <div style="flex:1;">
        <div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">Curated Routes</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Explore hand-picked bike routes</div>
      </div>
      <span style="font-size:18px;color:${tokens.colorGrey300};">&#x203A;</span>
    </div>
    <!-- Hub List -->
    <div style="flex:1;overflow-y:auto;">
      ${hubRowsHtml()}
    </div>
  </div>
  <!-- Tab Bar: Discover active -->
  <div style="flex-shrink:0;background:${tokens.colorSurfaceBase};height:56px;display:flex;align-items:center;padding:0 var(--vv-space-5);box-sizing:border-box;box-shadow:${shadowFromToken(tokens.elevationFloating)};">${tabsHtml('Discover')}</div>
</div>`;

// ── Interactive ─────────────────────────────────────────────────────────────────
export const Interactive = () => {
  function hexToRgba(hex8) {
    const r = parseInt(hex8.slice(1,3),16);
    const g = parseInt(hex8.slice(3,5),16);
    const b = parseInt(hex8.slice(5,7),16);
    const a = (parseInt(hex8.slice(7,9),16)/255).toFixed(2);
    return 'rgba('+r+','+g+','+b+','+a+')';
  }
  function shadowFromToken(token) {
    if (token === 'none') return 'none';
    return token.offsetX+'px '+token.offsetY+'px '+token.blur+'px '+token.spread+'px '+hexToRgba(token.color);
  }

  // Phone frame — screen is flex-column
  const frame = document.createElement('div');
  frame.style.cssText = 'width:402px;height:874px;background:var(--vv-color-surface-inverse);border-radius:44px;padding:11px;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;';
  const screen = document.createElement('div');
  screen.style.cssText = 'flex:1;background:var(--vv-color-surface-base);border-radius:34px;overflow:hidden;display:flex;flex-direction:column;';
  frame.appendChild(screen);

  // Inject locationPulse keyframe
  const kf = document.createElement('style');
  kf.textContent = '@keyframes locationPulse{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.5);opacity:0}}';
  document.head.appendChild(kf);

  // ── Map Area ──
  const mapArea = document.createElement('div');
  mapArea.style.cssText = 'flex-shrink:0;height:388px;position:relative;background:#e8e8e8;overflow:hidden;';

  // 5 Cafe Pins
  CAFE_PINS.forEach(([top, left, name]) => {
    const pin = document.createElement('div');
    pin.style.cssText = `position:absolute;top:${top}px;left:${left}px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:5px 10px;box-shadow:${shadowFromToken(tokens.elevationRaised)};display:inline-flex;align-items:center;gap:5px;cursor:pointer;`;
    pin.innerHTML = `<span style="font-size:var(--vv-text-body-sm-size);">&#x2615;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">${name}</span>`;
    mapArea.appendChild(pin);
  });

  // Location Pulse
  const pulse = document.createElement('div');
  pulse.style.cssText = 'position:absolute;top:290px;left:182px;width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;animation:locationPulse 2s ease-in-out infinite;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  mapArea.appendChild(pulse);

  // Top Gradient
  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:110px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  mapArea.appendChild(topG);

  // Status Bar
  const sb = document.createElement('div');
  sb.style.cssText = 'position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;';
  sb.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  mapArea.appendChild(sb);

  // Title Row
  const titleRow = document.createElement('div');
  titleRow.style.cssText = 'position:absolute;top:72px;left:16px;right:16px;display:flex;align-items:center;justify-content:space-between;';
  const titleText = document.createElement('span');
  titleText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};`;
  titleText.textContent = 'Discover VIP Hubs';
  const filterBtn = document.createElement('div');
  filterBtn.style.cssText = `width:36px;height:36px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);display:flex;align-items:center;justify-content:center;box-shadow:${shadowFromToken(tokens.elevationRaised)};cursor:pointer;`;
  filterBtn.textContent = '\u2699';
  titleRow.appendChild(titleText);
  titleRow.appendChild(filterBtn);
  mapArea.appendChild(titleRow);

  screen.appendChild(mapArea);

  // ── Bottom Sheet ──
  const sheet = document.createElement('div');
  sheet.style.cssText = `flex:1;background:${tokens.colorSurfaceBase};display:flex;flex-direction:column;box-shadow:${shadowFromToken(tokens.elevationFloating)};overflow:hidden;`;

  const handleRow = document.createElement('div');
  handleRow.style.cssText = 'height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;';
  const handle = document.createElement('div');
  handle.style.cssText = `width:36px;height:4px;background:${tokens.colorGrey300};border-radius:4px;`;
  handleRow.appendChild(handle);
  sheet.appendChild(handleRow);

  const sheetHeader = document.createElement('div');
  sheetHeader.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:var(--vv-space-4) var(--vv-space-5);flex-shrink:0;';
  sheetHeader.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">VIP Hubs Nearby</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Sort by: Nearest &#x203A;</span>`;
  sheet.appendChild(sheetHeader);

  // Routes Promo Card (colorSurfaceInverse)
  const promoCard = document.createElement('div');
  promoCard.style.cssText = `margin:0 var(--vv-space-5) var(--vv-space-4);background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;flex-shrink:0;`;
  promoCard.innerHTML = `<div style="width:38px;height:38px;background:rgba(198,255,45,0.13);border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:18px;">&#x1F5FA;</div><div style="flex:1;"><div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">Curated Routes</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Explore hand-picked bike routes</div></div><span style="font-size:18px;color:${tokens.colorGrey300};">&#x203A;</span>`;
  promoCard.addEventListener('pointerdown', () => { promoCard.style.background = 'rgba(255,255,255,0.05)'; });
  promoCard.addEventListener('pointerup', () => { promoCard.style.background = tokens.colorSurfaceInverse; });
  promoCard.addEventListener('pointerleave', () => { promoCard.style.background = tokens.colorSurfaceInverse; });
  sheet.appendChild(promoCard);

  // Hub List
  const hubList = document.createElement('div');
  hubList.style.cssText = 'flex:1;overflow-y:auto;';
  HUB_ROWS.forEach(([name, dist, slots]) => {
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;border-bottom:1px solid ${tokens.colorGrey100};box-sizing:border-box;background:${tokens.colorSurfaceBase};`;
    row.innerHTML = `<div style="width:72px;height:72px;background:#e8e8e8;border-radius:${tokens.radiusMd}px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-numeric-md-size);">&#x2615;</div><div style="flex:1;display:flex;flex-direction:column;gap:3px;"><div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">${name}</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">&#x2615; VIP Hub &middot; ${dist}</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">${slots}</div></div><span style="font-size:18px;color:${tokens.colorGrey300};">&#x203A;</span>`;
    row.addEventListener('pointerdown', () => { row.style.background = tokens.colorGrey050 || '#FAFAFA'; });
    row.addEventListener('pointerup', () => { row.style.background = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.background = tokens.colorSurfaceBase; });
    hubList.appendChild(row);
  });
  sheet.appendChild(hubList);

  screen.appendChild(sheet);

  // ── Tab Bar (flex child, Discover active) ──
  let activeTab = 'Discover';
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `flex-shrink:0;background:${tokens.colorSurfaceBase};height:56px;display:flex;align-items:center;padding:0 var(--vv-space-5);box-sizing:border-box;box-shadow:${shadowFromToken(tokens.elevationFloating)};`;
  const tabEls = [];
  TABS.forEach(label => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;';
    const isActive = label === 'Discover';
    const pill = document.createElement('div');
    pill.style.cssText = `width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;`;
    const icon = document.createElement('span');
    icon.style.cssText = `font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};`;
    icon.textContent = '\u25CF';
    pill.appendChild(icon);
    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    lbl.textContent = label;
    tab.appendChild(pill);
    tab.appendChild(lbl);
    tabEls.push({ pill, icon, lbl, label });
    tab.addEventListener('pointerdown', () => {
      activeTab = label;
      tabEls.forEach(t => {
        const a = t.label === activeTab;
        t.pill.style.background = a ? tokens.colorSurfaceInverse : tokens.colorGrey200;
        t.icon.style.color = a ? '#ffffff' : tokens.colorTextSecondary;
        t.lbl.style.color = a ? tokens.colorTextPrimary : tokens.colorTextSecondary;
      });
    });
    tabBar.appendChild(tab);
  });
  screen.appendChild(tabBar);

  return frame;
};

// ── Source Code ─────────────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/DiscoverVipHubs — Hi-Fi frame PS2Xe — 388px map + bottom sheet<br>// rgba(198,255,45,0.13) promo icon chip / #0F0F0F surface inverse</div>${_blk('Default',Default())}</div>`;
