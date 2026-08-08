import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/EndRideFindCharging' };

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

function tabsHtml(activeLabel) {
  return TABS.map(label => {
    const isActive = label === activeLabel;
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#x25CF;</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

// ── Default (static HTML) ───────────────────────────────────────────────────────
export const Default = () => `<div style="width:393px;height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
  <!-- Map background -->
  <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
  <!-- Location Pulse: 30x30px ring + 14x14px dot -->
  <div style="position:absolute;top:420px;left:182px;width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;">
    <div style="width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};"></div>
  </div>
  <!-- Route V: 5x96px -->
  <div style="position:absolute;top:324px;left:190px;width:5px;height:96px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
  <!-- Route H: 76x5px -->
  <div style="position:absolute;top:324px;left:190px;width:76px;height:5px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
  <!-- Other Station Pin label -->
  <div style="position:absolute;top:200px;left:60px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);">
    <span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span>
    <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">VoltHub East</span>
  </div>
  <!-- Charging Station Pin: 80x80px -->
  <div style="position:absolute;top:240px;left:220px;width:80px;height:80px;">
    <!-- Pulse Ring -->
    <div style="position:absolute;top:0;left:0;width:80px;height:80px;border-radius:var(--vv-radius-full);border:2px solid ${tokens.colorActionPrimary};"></div>
    <!-- Station Badge: 56x56px -->
    <div style="position:absolute;top:12px;left:12px;width:56px;height:56px;background:${tokens.colorActionPrimary};border-radius:var(--vv-radius-full);display:flex;align-items:center;justify-content:center;">
      <span style="font-size:24px;color:${tokens.colorTextPrimary};">&#x26A1;</span>
    </div>
  </div>
  <!-- Top Gradient -->
  <div style="position:absolute;top:0;left:0;right:0;height:170px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
  <!-- Bottom Gradient -->
  <div style="position:absolute;bottom:100px;left:0;right:0;height:292px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;"></div>
  <!-- Status Bar -->
  <div style="position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;">
    <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
  </div>
  <!-- Title Banner -->
  <div style="position:absolute;top:72px;left:20px;display:flex;align-items:center;gap:var(--vv-space-4);">
    <div style="width:36px;height:36px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x1F3C1;</div>
    <div>
      <div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Find a Charging Hub</div>
      <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Dock your bike to end ride</div>
    </div>
  </div>
  <!-- Station Info Card -->
  <div style="position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;">
    <!-- Card Top Row -->
    <div style="display:flex;align-items:center;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);">
      <div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x26A1;</div>
      <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};flex:1;">VoltHub Central</span>
      <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:3px 10px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Charging Station</div>
    </div>
    <!-- Slots Badge -->
    <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:3px 10px;display:inline-flex;margin-bottom:var(--vv-space-3);">
      <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">6 slots available</span>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};margin-bottom:var(--vv-space-3);"></div>
    <!-- Fee Note -->
    <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-bottom:var(--vv-space-4);">Free charging &middot; &#x20B9; 10 docking fee after 2 hrs</div>
    <!-- Navigate Button -->
    <button style="width:100%;height:48px;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;">&#x1F9ED; Navigate to Station</button>
    <!-- Resume Ride Link -->
    <div style="text-align:center;margin-top:var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};text-decoration:underline;cursor:pointer;">Resume Ride</div>
  </div>
  <!-- Tab Bar -->
  <div style="position:absolute;bottom:0;left:0;right:0;height:80px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-6);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;">${tabsHtml('Ride')}</div>
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

  // Phone frame — position:relative screen
  const frame = document.createElement('div');
  frame.style.cssText = 'width:402px;height:874px;background:var(--vv-color-surface-inverse);border-radius:44px;padding:11px;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;';
  const screen = document.createElement('div');
  screen.style.cssText = 'flex:1;background:var(--vv-color-surface-base);border-radius:34px;overflow:hidden;position:relative;';
  frame.appendChild(screen);

  // Inject stationPulse keyframe
  const kf = document.createElement('style');
  kf.textContent = '@keyframes stationPulse{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.3);opacity:0}}';
  document.head.appendChild(kf);

  const mapBg = document.createElement('div');
  mapBg.style.cssText = 'position:absolute;inset:0;background:#e8e8e8;';
  screen.appendChild(mapBg);

  // Location Pulse
  const pulse = document.createElement('div');
  pulse.style.cssText = 'position:absolute;top:420px;left:182px;width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  screen.appendChild(pulse);

  // Route V
  const routeV = document.createElement('div');
  routeV.style.cssText = `position:absolute;top:324px;left:190px;width:5px;height:96px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  screen.appendChild(routeV);

  // Route H
  const routeH = document.createElement('div');
  routeH.style.cssText = `position:absolute;top:324px;left:190px;width:76px;height:5px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  screen.appendChild(routeH);

  // Other station pin
  const otherPin = document.createElement('div');
  otherPin.style.cssText = `position:absolute;top:200px;left:60px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);`;
  otherPin.innerHTML = `<span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">VoltHub East</span>`;
  screen.appendChild(otherPin);

  // Charging Station Pin: 80x80px with stationPulse on ring
  const stationPin = document.createElement('div');
  stationPin.style.cssText = 'position:absolute;top:240px;left:220px;width:80px;height:80px;';
  const stationRing = document.createElement('div');
  stationRing.style.cssText = `position:absolute;top:0;left:0;width:80px;height:80px;border-radius:var(--vv-radius-full);border:2px solid ${tokens.colorActionPrimary};animation:stationPulse 2s ease-in-out infinite;`;
  const stationBadge = document.createElement('div');
  stationBadge.style.cssText = `position:absolute;top:12px;left:12px;width:56px;height:56px;background:${tokens.colorActionPrimary};border-radius:var(--vv-radius-full);display:flex;align-items:center;justify-content:center;`;
  stationBadge.innerHTML = `<span style="font-size:24px;color:${tokens.colorTextPrimary};">&#x26A1;</span>`;
  stationPin.appendChild(stationRing);
  stationPin.appendChild(stationBadge);
  screen.appendChild(stationPin);

  // Top Gradient
  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:170px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  screen.appendChild(topG);

  // Bottom Gradient
  const botG = document.createElement('div');
  botG.style.cssText = 'position:absolute;bottom:100px;left:0;right:0;height:292px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;';
  screen.appendChild(botG);

  // Status Bar
  const sb = document.createElement('div');
  sb.style.cssText = 'position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;';
  sb.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  screen.appendChild(sb);

  // Title Banner
  const title = document.createElement('div');
  title.style.cssText = 'position:absolute;top:72px;left:20px;display:flex;align-items:center;gap:var(--vv-space-4);';
  title.innerHTML = `<div style="width:36px;height:36px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x1F3C1;</div><div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Find a Charging Hub</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Dock your bike to end ride</div></div>`;
  screen.appendChild(title);

  // Station Info Card
  const card = document.createElement('div');
  card.style.cssText = `position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;`;

  const cardTopRow = document.createElement('div');
  cardTopRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);';
  cardTopRow.innerHTML = `<div style="width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x26A1;</div><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};flex:1;">VoltHub Central</span><div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:3px 10px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Charging Station</div>`;
  card.appendChild(cardTopRow);

  const slotsBadge = document.createElement('div');
  slotsBadge.style.cssText = `background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:3px 10px;display:inline-flex;margin-bottom:var(--vv-space-3);`;
  slotsBadge.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">6 slots available</span>`;
  card.appendChild(slotsBadge);

  const divCard = document.createElement('div');
  divCard.style.cssText = `height:1px;background:${tokens.colorGrey100};margin-bottom:var(--vv-space-3);`;
  card.appendChild(divCard);

  const feeNote = document.createElement('div');
  feeNote.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-bottom:var(--vv-space-4);`;
  feeNote.textContent = 'Free charging \u00B7 \u20B9 10 docking fee after 2 hrs';
  card.appendChild(feeNote);

  const navBtn = document.createElement('button');
  navBtn.style.cssText = `width:100%;height:48px;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;`;
  navBtn.textContent = '\uD83E\uDDED Navigate to Station';
  navBtn.addEventListener('pointerdown', () => { navBtn.style.background = tokens.colorGreen600; });
  navBtn.addEventListener('pointerup', () => { navBtn.style.background = tokens.colorActionPrimary; });
  navBtn.addEventListener('pointerleave', () => { navBtn.style.background = tokens.colorActionPrimary; });
  card.appendChild(navBtn);

  const resumeLink = document.createElement('div');
  resumeLink.style.cssText = `text-align:center;margin-top:var(--vv-space-3);font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};text-decoration:underline;cursor:pointer;`;
  resumeLink.textContent = 'Resume Ride';
  card.appendChild(resumeLink);

  screen.appendChild(card);

  // Tab Bar
  let activeTab = 'Ride';
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `position:absolute;bottom:0;left:0;right:0;height:80px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-6);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;`;
  const tabEls = [];
  TABS.forEach(label => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;';
    const isActive = label === 'Ride';
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
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/EndRideFindCharging — Hi-Fi frame AH8t6 — L-route, 80px station pin, stationPulse</div>${_blk('Default',Default())}</div>`;
