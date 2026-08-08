import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/NavigateToBike' };

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
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#x25CF;</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

const ROUTE_DOTS = [
  {top:380,left:195},{top:362,left:192},{top:348,left:196},
  {top:335,left:191},{top:322,left:194},{top:310,left:190},{top:298,left:193}
];

export const Default = () => `<div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
  <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
  <div style="position:absolute;top:260px;left:80px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);"><span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">VV-7731</span></div>
  <div style="position:absolute;top:200px;left:260px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);"><span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">VV-2214</span></div>
  <div style="position:absolute;top:400px;left:50%;transform:translateX(-50%);width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;"><div style="width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};"></div></div>
  ${ROUTE_DOTS.map(d => `<div style="position:absolute;top:${d.top}px;left:${d.left}px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey700};"></div>`).join('')}
  <div style="position:absolute;top:260px;left:170px;width:72px;height:72px;">
    <div style="position:absolute;top:0;left:0;width:72px;height:72px;border-radius:var(--vv-radius-full);border:2px solid ${tokens.colorGrey300};"></div>
    <div style="position:absolute;top:12px;left:12px;width:48px;height:48px;border-radius:var(--vv-radius-full);background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;"><span style="color:${tokens.colorActionPrimary};font-size:var(--vv-text-heading-lg-size);">&#x26A1;</span></div>
  </div>
  <div style="position:absolute;top:0;left:0;right:0;height:130px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
  <div style="position:absolute;bottom:100px;left:0;right:0;height:292px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;"></div>
  <div style="position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;">
    <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
  </div>
  <div style="position:absolute;top:72px;left:20px;width:40px;height:40px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:16px;color:${tokens.colorTextPrimary};">&#x2715;</div>
  <div style="position:absolute;bottom:278px;left:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:6px var(--vv-space-4);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;gap:6px;">
    <span style="font-size:14px;">&#x1F6B6;</span>
    <span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">8 min walk</span>
  </div>
  <div style="position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;">
    <div style="display:flex;align-items:center;gap:var(--vv-space-4);margin-bottom:var(--vv-space-4);">
      <div style="width:56px;height:56px;background:${tokens.colorGrey900};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:${tokens.colorActionPrimary};font-size:24px;">&#x26A1;</span></div>
      <div style="flex:1;">
        <div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">VV-4829</div>
        <div style="display:flex;align-items:center;gap:var(--vv-space-3);margin-top:var(--vv-space-2);">
          <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-1) var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">87%</div>
          <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-1) var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};">200m away</div>
        </div>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};"></div>
    <button style="margin-top:var(--vv-space-4);height:48px;width:100%;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;">Get Directions &#x2192;</button>
    <div style="text-align:center;margin-top:var(--vv-space-3);font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;">Choose a Different Bike</div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-6);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;height:80px;">${tabsHtml('Ride')}</div>
</div>`;

export const Interactive = () => {
  function makePhoneFrame() {
    const frame = document.createElement('div');
    frame.style.cssText = 'width:402px;height:874px;background:var(--vv-color-surface-inverse);border-radius:44px;padding:11px;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;';
    const screen = document.createElement('div');
    screen.style.cssText = 'flex:1;background:var(--vv-color-surface-base);border-radius:34px;overflow:hidden;position:relative;';
    frame.appendChild(screen);
    return { frame, screen };
  }
  const { frame, screen } = makePhoneFrame();

  const mapBg = document.createElement('div');
  mapBg.style.cssText = 'position:absolute;inset:0;background:#e8e8e8;';
  screen.appendChild(mapBg);

  // Unselected pins
  [{t:260,l:80,name:'VV-7731'},{t:200,l:260,name:'VV-2214'}].forEach(p => {
    const pin = document.createElement('div');
    pin.style.cssText = `position:absolute;top:${p.t}px;left:${p.l}px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);`;
    pin.innerHTML = `<span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">${p.name}</span>`;
    screen.appendChild(pin);
  });

  // Location Pulse
  const pulse = document.createElement('div');
  pulse.style.cssText = 'position:absolute;top:400px;left:50%;transform:translateX(-50%);width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  screen.appendChild(pulse);

  // Route Dots (7x 6px circles)
  ROUTE_DOTS.forEach(d => {
    const rd = document.createElement('div');
    rd.style.cssText = `position:absolute;top:${d.top}px;left:${d.left}px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey700};`;
    screen.appendChild(rd);
  });

  // Selected Bike Pin (72×72px)
  const pinWrap = document.createElement('div');
  pinWrap.style.cssText = 'position:absolute;top:260px;left:170px;width:72px;height:72px;';
  const pinRing = document.createElement('div');
  pinRing.style.cssText = `position:absolute;top:0;left:0;width:72px;height:72px;border-radius:var(--vv-radius-full);border:2px solid ${tokens.colorGrey300};`;
  const pinBadge = document.createElement('div');
  pinBadge.style.cssText = `position:absolute;top:12px;left:12px;width:48px;height:48px;border-radius:var(--vv-radius-full);background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;`;
  pinBadge.innerHTML = `<span style="color:${tokens.colorActionPrimary};font-size:var(--vv-text-heading-lg-size);">&#x26A1;</span>`;
  pinWrap.appendChild(pinRing);
  pinWrap.appendChild(pinBadge);
  screen.appendChild(pinWrap);

  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:130px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  screen.appendChild(topG);
  const botG = document.createElement('div');
  botG.style.cssText = 'position:absolute;bottom:100px;left:0;right:0;height:292px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;';
  screen.appendChild(botG);

  const sb = document.createElement('div');
  sb.style.cssText = `position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;`;
  sb.innerHTML = `<span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  screen.appendChild(sb);

  const cancelBtn = document.createElement('div');
  cancelBtn.style.cssText = `position:absolute;top:72px;left:20px;width:40px;height:40px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;`;
  cancelBtn.textContent = '✕';
  cancelBtn.addEventListener('pointerdown', () => { cancelBtn.style.background = tokens.colorGrey050; });
  cancelBtn.addEventListener('pointerup', () => { cancelBtn.style.background = tokens.colorSurfaceBase; });
  cancelBtn.addEventListener('pointerleave', () => { cancelBtn.style.background = tokens.colorSurfaceBase; });
  screen.appendChild(cancelBtn);

  const etaBadge = document.createElement('div');
  etaBadge.style.cssText = `position:absolute;bottom:278px;left:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:6px var(--vv-space-4);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;gap:6px;`;
  etaBadge.innerHTML = `<span style="font-size:14px;">&#x1F6B6;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">8 min walk</span>`;
  screen.appendChild(etaBadge);

  const bikeCard = document.createElement('div');
  bikeCard.style.cssText = `position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-5);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;`;
  const topRow = document.createElement('div');
  topRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-4);margin-bottom:var(--vv-space-4);';
  topRow.innerHTML = `<div style="width:56px;height:56px;background:${tokens.colorGrey900};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:${tokens.colorActionPrimary};font-size:24px;">&#x26A1;</span></div><div style="flex:1;"><div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">VV-4829</div><div style="display:flex;align-items:center;gap:var(--vv-space-3);margin-top:var(--vv-space-2);"><div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-1) var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">87%</div><div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-1) var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};">200m away</div></div></div>`;
  const divider = document.createElement('div');
  divider.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
  const getDirBtn = document.createElement('button');
  getDirBtn.style.cssText = `margin-top:var(--vv-space-4);height:48px;width:100%;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;transition:transform 0.1s;`;
  getDirBtn.textContent = 'Get Directions';
  getDirBtn.addEventListener('pointerdown', () => { getDirBtn.style.background = tokens.colorGreen600; getDirBtn.style.transform = 'scale(0.97)'; });
  getDirBtn.addEventListener('pointerup', () => { getDirBtn.style.background = tokens.colorActionPrimary; getDirBtn.style.transform = ''; });
  getDirBtn.addEventListener('pointerleave', () => { getDirBtn.style.background = tokens.colorActionPrimary; getDirBtn.style.transform = ''; });
  const chooseLink = document.createElement('div');
  chooseLink.style.cssText = `text-align:center;margin-top:var(--vv-space-3);font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;`;
  chooseLink.textContent = 'Choose a Different Bike';
  bikeCard.appendChild(topRow);
  bikeCard.appendChild(divider);
  bikeCard.appendChild(getDirBtn);
  bikeCard.appendChild(chooseLink);
  screen.appendChild(bikeCard);

  let activeTab = 'Ride';
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `position:absolute;bottom:0;left:0;right:0;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-6);box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;height:80px;`;
  const tabEls = [];
  TABS.forEach(label => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer;';
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
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/NavigateToBike — Hi-Fi frame kUCG9 — 72px selected pin, 7 route dots</div>${_blk('Default',Default())}</div>`;
