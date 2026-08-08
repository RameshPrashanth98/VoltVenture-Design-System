import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/ActiveRideDashboard' };

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
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#x25CF;</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

// ── Default (static HTML) ───────────────────────────────────────────────────────
export const Default = () => `<div style="width:393px;min-height:852px;display:flex;flex-direction:column;background:${tokens.colorSurfaceBase};box-sizing:border-box;">
  <!-- Map Area: 460px, position:relative with absolute overlays -->
  <div style="flex-shrink:0;height:460px;position:relative;background:#e8e8e8;overflow:hidden;">
    <!-- Safe Zone Ellipse: 290x260px -->
    <div style="position:absolute;top:120px;left:50px;width:290px;height:260px;border-radius:var(--vv-radius-full);border:2px solid ${tokens.colorGrey300};background:transparent;"></div>
    <!-- Route V: 14x162px ridden vertical, colorActionPrimary -->
    <div style="position:absolute;top:200px;left:190px;width:14px;height:162px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
    <!-- Route H: 202x8px ridden horizontal, colorActionPrimary -->
    <div style="position:absolute;top:280px;left:190px;width:202px;height:8px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
    <!-- Route H2: 122x12px remaining route, colorGrey300 -->
    <div style="position:absolute;top:200px;left:190px;width:122px;height:12px;background:${tokens.colorGrey300};border-radius:4px;"></div>
    <!-- Destination Flag -->
    <div style="position:absolute;top:188px;left:302px;font-size:var(--vv-text-heading-lg-size);">&#x1F3C1;</div>
    <!-- Location Pulse: 34x34px ring + 16x16px dot -->
    <div style="position:absolute;top:352px;left:180px;width:34px;height:34px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;">
      <div style="width:16px;height:16px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};"></div>
    </div>
    <!-- Map Fade Bottom -->
    <div style="position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(to bottom,transparent,${tokens.colorSurfaceBase});pointer-events:none;"></div>
    <!-- Top Gradient -->
    <div style="position:absolute;top:0;left:0;right:0;height:120px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
    <!-- Status Bar -->
    <div style="position:absolute;top:0;width:393px;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;">
      <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
    </div>
    <!-- Nav Turn Card: 210x52px -->
    <div style="position:absolute;top:72px;left:20px;width:210px;height:52px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusMd}px;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;padding:0 10px;gap:var(--vv-space-3);box-sizing:border-box;">
      <div style="width:32px;height:32px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:14px;color:${tokens.colorTextPrimary};">&#x2192;</div>
      <div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Continue on</div>
        <div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">Victoria Embankment</div>
      </div>
    </div>
    <!-- Safe Zone Warning Chip -->
    <div style="position:absolute;top:133px;left:20px;display:flex;align-items:center;gap:6px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;box-shadow:${shadowFromToken(tokens.elevationRaised)};">
      <span style="color:${tokens.colorTextSecondary};font-size:12px;">&#x26A0;</span>
      <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Safe zone edge</span>
    </div>
  </div>
  <!-- Dashboard Panel: flex:1 -->
  <div style="flex:1;background:${tokens.colorSurfaceBase};display:flex;flex-direction:column;">
    <!-- Handle Row -->
    <div style="height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <div style="width:36px;height:4px;background:${tokens.colorGrey300};border-radius:4px;"></div>
    </div>
    <!-- Timer Row -->
    <div style="height:48px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-3);flex-shrink:0;box-sizing:border-box;">
      <span style="font-size:16px;color:${tokens.colorGrey500};">&#x23F1;</span>
      <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">00:23:41</span>
      <div style="flex:1;"></div>
      <!-- Live Badge -->
      <div style="display:flex;align-items:center;gap:var(--vv-space-2);background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;">
        <div style="width:6px;height:6px;background:${tokens.colorTextPrimary};border-radius:var(--vv-radius-full);"></div>
        <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">LIVE</span>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};flex-shrink:0;"></div>
    <!-- Telemetry Row -->
    <div style="height:110px;display:flex;align-items:center;flex-shrink:0;">
      <div style="flex:1;text-align:center;">
        <div style="font-size:var(--vv-text-display-xl-size);font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1;">18</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">km/h</div>
      </div>
      <div style="width:1px;height:80px;background:${tokens.colorGrey200};"></div>
      <div style="flex:1;text-align:center;">
        <div style="font-size:var(--vv-text-display-xl-size);font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1;">12.4</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">km left</div>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};flex-shrink:0;"></div>
    <!-- Billing Section -->
    <div style="padding:var(--vv-space-4) var(--vv-space-5);display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
      <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Billing</div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">&#x25CF; Base Rental</span>
        <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">&#x20B9; 2.50/min</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorActionPrimary};">&#x25CF; Electricity</span>
        <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">&#x20B9; 0.80</span>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Total</span>
        <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">&#x20B9; 58.75</span>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};flex-shrink:0;"></div>
    <!-- Action Row: SOS #EF4444 brand exception / End Ride colorActionPrimary -->
    <div style="padding:var(--vv-space-4) var(--vv-space-5);display:flex;gap:var(--vv-space-4);flex-shrink:0;">
      <button style="width:80px;height:56px;background:#EF4444;border-radius:${tokens.radiusMd}px;border:none;color:var(--vv-color-text-on-inverse);font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-display);cursor:pointer;">SOS</button>
      <button style="flex:1;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusMd}px;border:none;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;">End Ride</button>
    </div>
  </div>
  <!-- Tab Bar: Ride active -->
  <div style="flex-shrink:0;background:${tokens.colorSurfaceBase};height:56px;display:flex;align-items:center;padding:0 var(--vv-space-5);box-sizing:border-box;box-shadow:${shadowFromToken(tokens.elevationFloating)};">${tabsHtml('Ride')}</div>
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

  // Phone frame — screen is flex-column for split layout
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
  mapArea.style.cssText = 'flex-shrink:0;height:460px;position:relative;background:#e8e8e8;overflow:hidden;';

  const sz = document.createElement('div');
  sz.style.cssText = `position:absolute;top:120px;left:50px;width:290px;height:260px;border-radius:var(--vv-radius-full);border:2px solid ${tokens.colorGrey300};background:transparent;`;
  mapArea.appendChild(sz);

  const routeV = document.createElement('div');
  routeV.style.cssText = `position:absolute;top:200px;left:190px;width:14px;height:162px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  mapArea.appendChild(routeV);

  const routeH = document.createElement('div');
  routeH.style.cssText = `position:absolute;top:280px;left:190px;width:202px;height:8px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  mapArea.appendChild(routeH);

  const routeH2 = document.createElement('div');
  routeH2.style.cssText = `position:absolute;top:200px;left:190px;width:122px;height:12px;background:${tokens.colorGrey300};border-radius:4px;`;
  mapArea.appendChild(routeH2);

  const flagPin = document.createElement('div');
  flagPin.style.cssText = 'position:absolute;top:188px;left:302px;font-size:var(--vv-text-heading-lg-size);';
  flagPin.textContent = '\uD83C\uDFC1';
  mapArea.appendChild(flagPin);

  const pulse = document.createElement('div');
  pulse.style.cssText = 'position:absolute;top:352px;left:180px;width:34px;height:34px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;animation:locationPulse 2s ease-in-out infinite;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:16px;height:16px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  mapArea.appendChild(pulse);

  const fadeBot = document.createElement('div');
  fadeBot.style.cssText = `position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(to bottom,transparent,${tokens.colorSurfaceBase});pointer-events:none;`;
  mapArea.appendChild(fadeBot);

  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:120px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  mapArea.appendChild(topG);

  const sb = document.createElement('div');
  sb.style.cssText = 'position:absolute;top:0;width:393px;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;';
  sb.innerHTML = `<span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  mapArea.appendChild(sb);

  // Nav Turn Card — tap fades out and removes
  const navCard = document.createElement('div');
  navCard.style.cssText = `position:absolute;top:72px;left:20px;width:210px;height:52px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusMd}px;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;padding:0 10px;gap:var(--vv-space-3);box-sizing:border-box;cursor:pointer;transition:opacity 0.3s;`;
  navCard.innerHTML = `<div style="width:32px;height:32px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:14px;">&#x2192;</div><div><div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Continue on</div><div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">Victoria Embankment</div></div>`;
  navCard.addEventListener('pointerdown', () => {
    navCard.style.opacity = '0';
    setTimeout(() => { if (navCard.parentNode) navCard.parentNode.removeChild(navCard); }, 300);
  });
  mapArea.appendChild(navCard);

  const szWarn = document.createElement('div');
  szWarn.style.cssText = `position:absolute;top:133px;left:20px;display:flex;align-items:center;gap:6px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;box-shadow:${shadowFromToken(tokens.elevationRaised)};`;
  szWarn.innerHTML = `<span style="color:${tokens.colorTextSecondary};font-size:12px;">&#x26A0;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">Safe zone edge</span>`;
  mapArea.appendChild(szWarn);

  screen.appendChild(mapArea);

  // ── Dashboard Panel ──
  const panel = document.createElement('div');
  panel.style.cssText = `flex:1;background:${tokens.colorSurfaceBase};display:flex;flex-direction:column;`;

  const handleRow = document.createElement('div');
  handleRow.style.cssText = 'height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;';
  const handle = document.createElement('div');
  handle.style.cssText = `width:36px;height:4px;background:${tokens.colorGrey300};border-radius:4px;`;
  handleRow.appendChild(handle);
  panel.appendChild(handleRow);

  const timerRow = document.createElement('div');
  timerRow.style.cssText = 'height:48px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-3);flex-shrink:0;';
  timerRow.innerHTML = `<span style="font-size:16px;color:${tokens.colorGrey500};">&#x23F1;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">00:23:41</span><div style="flex:1;"></div><div style="display:flex;align-items:center;gap:var(--vv-space-2);background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;"><div style="width:6px;height:6px;background:${tokens.colorTextPrimary};border-radius:var(--vv-radius-full);"></div><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">LIVE</span></div>`;
  panel.appendChild(timerRow);

  const d1 = document.createElement('div');
  d1.style.cssText = `height:1px;background:${tokens.colorGrey100};flex-shrink:0;`;
  panel.appendChild(d1);

  const teleRow = document.createElement('div');
  teleRow.style.cssText = 'height:110px;display:flex;align-items:center;flex-shrink:0;';
  teleRow.innerHTML = `<div style="flex:1;text-align:center;"><div style="font-family:Inter,sans-serif;font-size:var(--vv-text-display-xl-size);font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1;">18</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">km/h</div></div><div style="width:1px;height:80px;background:${tokens.colorGrey200};"></div><div style="flex:1;text-align:center;"><div style="font-family:Inter,sans-serif;font-size:var(--vv-text-display-xl-size);font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1;">12.4</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">km left</div></div>`;
  panel.appendChild(teleRow);

  const d2 = document.createElement('div');
  d2.style.cssText = `height:1px;background:${tokens.colorGrey100};flex-shrink:0;`;
  panel.appendChild(d2);

  const billing = document.createElement('div');
  billing.style.cssText = 'padding:var(--vv-space-4) var(--vv-space-5);display:flex;flex-direction:column;gap:6px;flex-shrink:0;';
  billing.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Billing</div><div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">&#x25CF; Base Rental</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">&#x20B9; 2.50/min</span></div><div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorActionPrimary};">&#x25CF; Electricity</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};">&#x20B9; 0.80</span></div><div style="height:1px;background:${tokens.colorGrey100};"></div><div style="display:flex;align-items:center;justify-content:space-between;"><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Total</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">&#x20B9; 58.75</span></div>`;
  panel.appendChild(billing);

  const d3 = document.createElement('div');
  d3.style.cssText = `height:1px;background:${tokens.colorGrey100};flex-shrink:0;`;
  panel.appendChild(d3);

  const actionRow = document.createElement('div');
  actionRow.style.cssText = 'padding:var(--vv-space-4) var(--vv-space-5);display:flex;gap:var(--vv-space-4);flex-shrink:0;';

  // SOS: #EF4444 — brand exception, no VV token
  const sosBtn = document.createElement('button');
  sosBtn.style.cssText = `width:80px;height:56px;background:#EF4444;border-radius:${tokens.radiusMd}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-on-inverse);`;
  sosBtn.textContent = 'SOS';
  sosBtn.addEventListener('pointerdown', () => { sosBtn.style.background = '#c83a3a'; sosBtn.style.transform = 'scale(0.97)'; });
  sosBtn.addEventListener('pointerup', () => { sosBtn.style.background = '#EF4444'; sosBtn.style.transform = ''; });
  sosBtn.addEventListener('pointerleave', () => { sosBtn.style.background = '#EF4444'; sosBtn.style.transform = ''; });

  const endBtn = document.createElement('button');
  endBtn.style.cssText = `flex:1;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusMd}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  endBtn.textContent = 'End Ride';
  endBtn.addEventListener('pointerdown', () => { endBtn.style.background = tokens.colorGreen600; endBtn.style.transform = 'scale(0.97)'; });
  endBtn.addEventListener('pointerup', () => { endBtn.style.background = tokens.colorActionPrimary; endBtn.style.transform = ''; });
  endBtn.addEventListener('pointerleave', () => { endBtn.style.background = tokens.colorActionPrimary; endBtn.style.transform = ''; });

  actionRow.appendChild(sosBtn);
  actionRow.appendChild(endBtn);
  panel.appendChild(actionRow);
  screen.appendChild(panel);

  // ── Tab Bar (flex child) ──
  let activeTab = 'Ride';
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `flex-shrink:0;background:${tokens.colorSurfaceBase};height:56px;display:flex;align-items:center;padding:0 var(--vv-space-5);box-sizing:border-box;box-shadow:${shadowFromToken(tokens.elevationFloating)};`;
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
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/ActiveRideDashboard — Hi-Fi frame hQMrX — 460px map + dashboard panel<br>// #EF4444 SOS (brand exception) / #C6FF2D End Ride / rgba(198,255,45,0.20) pulse</div>${_blk('Default',Default())}</div>`;
