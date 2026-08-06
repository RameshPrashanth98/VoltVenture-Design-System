import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/WalkingDirections' };

function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1,3),16);
  const g = parseInt(hex8.slice(3,5),16);
  const b = parseInt(hex8.slice(5,7),16);
  const a = (parseInt(hex8.slice(7,9),16)/255).toFixed(2);
  return 'rgba('+r+', '+g+', '+b+', '+a+')';
}
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX+'px '+token.offsetY+'px '+token.blur+'px '+token.spread+'px '+hexToRgba(token.color);
}

const TABS = ['Ride','Discover','Wallet','Account'];

function tabsHtml(activeLabel) {
  return TABS.map(label => {
    const isActive = label === activeLabel;
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#x25CF;</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

export const Default = () => `<div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
  <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
  <div style="position:absolute;top:260px;left:192px;width:5px;height:186px;background:${tokens.colorGrey300};border-radius:4px;"></div>
  <div style="position:absolute;top:135px;left:192px;width:5px;height:126px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
  <div style="position:absolute;top:135px;left:192px;width:64px;height:5px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
  <div style="position:absolute;top:432px;left:182px;width:30px;height:30px;border-radius:50%;background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;"><div style="width:14px;height:14px;border-radius:50%;background:${tokens.colorActionPrimary};"></div></div>
  <div style="position:absolute;top:82px;left:170px;width:72px;height:72px;">
    <div style="position:absolute;top:0;left:0;width:72px;height:72px;border-radius:50%;border:2px solid ${tokens.colorGrey300};"></div>
    <div style="position:absolute;top:12px;left:12px;width:48px;height:48px;border-radius:50%;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;"><span style="color:${tokens.colorActionPrimary};font-size:20px;">&#x26A1;</span></div>
  </div>
  <div style="position:absolute;top:0;left:0;right:0;height:150px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
  <div style="position:absolute;bottom:100px;left:0;right:0;height:292px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;"></div>
  <div style="position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;">
    <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
  </div>
  <div style="position:absolute;top:72px;right:20px;width:40px;height:40px;background:${tokens.colorSurfaceBase};border-radius:50%;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:16px;color:${tokens.colorTextPrimary};">&#x2715;</div>
  <div style="position:absolute;top:80px;left:20px;width:264px;height:52px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusMd}px;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;padding:0 12px;gap:10px;box-sizing:border-box;">
    <div style="width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px;color:${tokens.colorTextPrimary};">&#x27F5;</div>
    <div style="flex:1;">
      <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Turn left onto</div>
      <div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:600;">Marine Drive</div>
    </div>
  </div>
  <div style="position:absolute;bottom:198px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:50%;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:20px;color:${tokens.colorTextPrimary};">&#x2299;</div>
  <div style="position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:16px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <div style="flex:1;text-align:center;">
        <div style="font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">0.3 km</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">left</div>
      </div>
      <div style="width:1px;height:32px;background:${tokens.colorGrey200};"></div>
      <div style="flex:1;text-align:center;">
        <div style="font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">4 min</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">ETA</div>
      </div>
      <div style="flex:1;display:flex;justify-content:flex-end;">
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 8px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">&#x1F6B2; VV-4829</div>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};"></div>
    <button style="margin-top:12px;height:48px;width:100%;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;">I&#x27;ve Arrived &#x2192;</button>
    <div style="text-align:center;margin-top:8px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;">Cancel Navigation</div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:8px 16px 20px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;height:80px;">${tabsHtml('Ride')}</div>
</div>`;

export const Interactive = () => {
  function makePhoneFrame() {
    const frame = document.createElement('div');
    frame.style.cssText = 'width:402px;height:874px;background:#0f0f0f;border-radius:44px;padding:11px;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;';
    const screen = document.createElement('div');
    screen.style.cssText = 'flex:1;background:#ffffff;border-radius:34px;overflow:hidden;position:relative;';
    frame.appendChild(screen);
    return { frame, screen };
  }
  const { frame, screen } = makePhoneFrame();

  const style = document.createElement('style');
  style.textContent = '@keyframes locationPulse{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.5);opacity:0}}';
  document.head.appendChild(style);

  const mapBg = document.createElement('div');
  mapBg.style.cssText = 'position:absolute;inset:0;background:#e8e8e8;';
  screen.appendChild(mapBg);

  // Route segments
  const routeWalkedV = document.createElement('div');
  routeWalkedV.style.cssText = `position:absolute;top:260px;left:192px;width:5px;height:186px;background:${tokens.colorGrey300};border-radius:4px;`;
  screen.appendChild(routeWalkedV);
  const routeRemV = document.createElement('div');
  routeRemV.style.cssText = `position:absolute;top:135px;left:192px;width:5px;height:126px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  screen.appendChild(routeRemV);
  const routeRemH = document.createElement('div');
  routeRemH.style.cssText = `position:absolute;top:135px;left:192px;width:64px;height:5px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  screen.appendChild(routeRemH);

  // Location Pulse (animated)
  const pulse = document.createElement('div');
  pulse.style.cssText = 'position:absolute;top:432px;left:182px;width:30px;height:30px;border-radius:50%;background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;animation:locationPulse 2s ease-in-out infinite;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:14px;height:14px;border-radius:50%;background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  screen.appendChild(pulse);

  // Bike Destination Pin
  const pinWrap = document.createElement('div');
  pinWrap.style.cssText = 'position:absolute;top:82px;left:170px;width:72px;height:72px;';
  const pinRing = document.createElement('div');
  pinRing.style.cssText = `position:absolute;top:0;left:0;width:72px;height:72px;border-radius:50%;border:2px solid ${tokens.colorGrey300};`;
  const pinBadge = document.createElement('div');
  pinBadge.style.cssText = `position:absolute;top:12px;left:12px;width:48px;height:48px;border-radius:50%;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;`;
  pinBadge.innerHTML = `<span style="color:${tokens.colorActionPrimary};font-size:20px;">&#x26A1;</span>`;
  pinWrap.appendChild(pinRing);
  pinWrap.appendChild(pinBadge);
  screen.appendChild(pinWrap);

  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:150px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  screen.appendChild(topG);
  const botG = document.createElement('div');
  botG.style.cssText = 'position:absolute;bottom:100px;left:0;right:0;height:292px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;';
  screen.appendChild(botG);

  const sb = document.createElement('div');
  sb.style.cssText = `position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;`;
  sb.innerHTML = `<span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  screen.appendChild(sb);

  const cancelBtn = document.createElement('div');
  cancelBtn.style.cssText = `position:absolute;top:72px;right:20px;width:40px;height:40px;background:${tokens.colorSurfaceBase};border-radius:50%;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;`;
  cancelBtn.textContent = '✕';
  screen.appendChild(cancelBtn);

  // Turn Instruction Card (264×52px)
  const turnCard = document.createElement('div');
  turnCard.style.cssText = `position:absolute;top:80px;left:20px;width:264px;height:52px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusMd}px;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;padding:0 12px;gap:10px;box-sizing:border-box;`;
  turnCard.innerHTML = `<div style="width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px;">&#x27F5;</div><div style="flex:1;"><div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Turn left onto</div><div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:600;">Marine Drive</div></div>`;
  screen.appendChild(turnCard);

  const recenterFab = document.createElement('div');
  recenterFab.style.cssText = `position:absolute;bottom:198px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:50%;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;`;
  recenterFab.textContent = '⊙';
  recenterFab.addEventListener('pointerdown', () => { recenterFab.style.background = tokens.colorGrey050; });
  recenterFab.addEventListener('pointerup', () => { recenterFab.style.background = tokens.colorSurfaceBase; });
  recenterFab.addEventListener('pointerleave', () => { recenterFab.style.background = tokens.colorSurfaceBase; });
  screen.appendChild(recenterFab);

  // Walking Progress Card
  const progressCard = document.createElement('div');
  progressCard.style.cssText = `position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:16px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;`;
  const progressRow = document.createElement('div');
  progressRow.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:12px;';
  progressRow.innerHTML = `<div style="flex:1;text-align:center;"><div style="font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">0.3 km</div><div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">left</div></div><div style="width:1px;height:32px;background:${tokens.colorGrey200};"></div><div style="flex:1;text-align:center;"><div style="font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">4 min</div><div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">ETA</div></div><div style="flex:1;display:flex;justify-content:flex-end;"><div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 8px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">&#x1F6B2; VV-4829</div></div>`;
  const divider2 = document.createElement('div');
  divider2.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  const arrivedBtn = document.createElement('button');
  arrivedBtn.style.cssText = `margin-top:12px;height:48px;width:100%;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;transition:transform 0.1s;`;
  arrivedBtn.textContent = "I've Arrived";
  arrivedBtn.addEventListener('pointerdown', () => { arrivedBtn.style.background = tokens.colorGreen600; arrivedBtn.style.transform = 'scale(0.97)'; });
  arrivedBtn.addEventListener('pointerup', () => { arrivedBtn.style.background = tokens.colorActionPrimary; arrivedBtn.style.transform = ''; });
  arrivedBtn.addEventListener('pointerleave', () => { arrivedBtn.style.background = tokens.colorActionPrimary; arrivedBtn.style.transform = ''; });
  const cancelNavLink = document.createElement('div');
  cancelNavLink.style.cssText = `text-align:center;margin-top:8px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;`;
  cancelNavLink.textContent = 'Cancel Navigation';
  progressCard.appendChild(progressRow);
  progressCard.appendChild(divider2);
  progressCard.appendChild(arrivedBtn);
  progressCard.appendChild(cancelNavLink);
  screen.appendChild(progressCard);

  let activeTab = 'Ride';
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `position:absolute;bottom:0;left:0;right:0;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:8px 16px 20px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;height:80px;`;
  const tabEls = [];
  TABS.forEach(label => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;';
    const isActive = label === 'Ride';
    const pill = document.createElement('div');
    pill.style.cssText = `width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;`;
    const icon = document.createElement('span');
    icon.style.cssText = `font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};`;
    icon.textContent = '●';
    pill.appendChild(icon);
    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
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

function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Screens/WalkingDirections — Hi-Fi frame FZnNd — L-shaped route 186+126+64px</div>${_blk('Default',Default())}</div>`;
