import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/HomeMap' };

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

function pinHtml(top, left, label) {
  return `<div style="position:absolute;top:${top}px;left:${left}px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);"><span style="color:${tokens.colorActionPrimary};font-size:12px;">⚡</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">${label}</span></div>`;
}

function tabsHtml(activeLabel) {
  return TABS.map(label => {
    const isActive = label === activeLabel;
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">●</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

export const Default = () => `<div style="width:393px;min-height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
  <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
  <div style="position:absolute;top:180px;left:44px;width:305px;height:290px;background:rgba(198,255,45,0.08);border:2px solid ${tokens.colorGrey300};border-radius:4px;"></div>
  ${pinHtml(200,60,'300km')}${pinHtml(240,200,'200km')}${pinHtml(290,100,'100km')}${pinHtml(160,260,'300km')}${pinHtml(320,280,'200km')}${pinHtml(380,140,'100km')}
  <div style="position:absolute;top:350px;left:50%;transform:translateX(-50%);width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;"><div style="width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};"></div></div>
  <div style="position:absolute;top:200px;right:60px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};">&#x1F6E1; Safe Zone</div>
  <div style="position:absolute;top:0;left:0;right:0;height:130px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
  <div style="position:absolute;bottom:80px;left:0;right:0;height:282px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;"></div>
  <div style="position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;">
    <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
  </div>
  <div style="position:absolute;top:72px;left:20px;right:20px;height:44px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;box-shadow:${shadowFromToken(tokens.elevationRaised)};display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-3);box-sizing:border-box;">
    <span style="font-size:16px;">&#x1F4CD;</span>
    <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};flex:1;">Search for a destination</span>
    <span style="font-size:16px;color:${tokens.colorGrey300};">&#x2699;</span>
  </div>
  <div style="position:absolute;top:124px;left:20px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-4);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};">&#x26A1; 6 bikes nearby</div>
  <div style="position:absolute;bottom:270px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);">&#x1F4CD;</div>
  <div style="position:absolute;bottom:330px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);">&#x2699;</div>
  <div style="position:absolute;bottom:80px;left:20px;right:20px;height:100px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;">
    <div style="display:flex;align-items:center;gap:var(--vv-space-3);">
      <span style="color:${tokens.colorActionPrimary};font-size:16px;">&#x26A1;</span>
      <span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">VV-4829 ready to ride</span>
      <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-1) var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">Battery 87%</div>
    </div>
    <button style="height:40px;width:100%;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;">Scan QR to Unlock &#x2192;</button>
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

  const style = document.createElement('style');
  style.textContent = '@keyframes locationPulse{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.5);opacity:0}}';
  document.head.appendChild(style);

  const mapBg = document.createElement('div');
  mapBg.style.cssText = 'position:absolute;inset:0;background:#e8e8e8;';
  screen.appendChild(mapBg);

  const sz = document.createElement('div');
  sz.style.cssText = `position:absolute;top:180px;left:44px;width:305px;height:290px;background:rgba(198,255,45,0.08);border:2px solid ${tokens.colorGrey300};border-radius:4px;`;
  screen.appendChild(sz);

  [{t:200,l:60,v:'300km'},{t:240,l:200,v:'200km'},{t:290,l:100,v:'100km'},{t:160,l:260,v:'300km'},{t:320,l:280,v:'200km'},{t:380,l:140,v:'100km'}].forEach(p => {
    const pin = document.createElement('div');
    pin.style.cssText = `position:absolute;top:${p.t}px;left:${p.l}px;background:${tokens.colorGrey900};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-3);display:inline-flex;align-items:center;gap:var(--vv-space-2);`;
    pin.innerHTML = `<span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:var(--vv-color-text-on-inverse);">${p.v}</span>`;
    screen.appendChild(pin);
  });

  const pulse = document.createElement('div');
  pulse.style.cssText = 'position:absolute;top:350px;left:50%;transform:translateX(-50%);width:30px;height:30px;border-radius:var(--vv-radius-full);background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;animation:locationPulse 2s ease-in-out infinite;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:14px;height:14px;border-radius:var(--vv-radius-full);background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  screen.appendChild(pulse);

  const szLbl = document.createElement('div');
  szLbl.style.cssText = `position:absolute;top:200px;right:60px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};`;
  szLbl.textContent = 'Safe Zone';
  screen.appendChild(szLbl);

  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:130px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  screen.appendChild(topG);

  const botG = document.createElement('div');
  botG.style.cssText = 'position:absolute;bottom:80px;left:0;right:0;height:282px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;';
  screen.appendChild(botG);

  const sb = document.createElement('div');
  sb.style.cssText = `position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-5);box-sizing:border-box;`;
  sb.innerHTML = `<span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  screen.appendChild(sb);

  const searchBar = document.createElement('div');
  searchBar.style.cssText = `position:absolute;top:72px;left:20px;right:20px;height:44px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusFull}px;box-shadow:${shadowFromToken(tokens.elevationRaised)};display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-3);box-sizing:border-box;`;
  searchBar.innerHTML = `<span style="font-size:16px;">&#x1F4CD;</span><span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};flex:1;">Search for a destination</span><span style="font-size:16px;color:${tokens.colorGrey300};">&#x2699;</span>`;
  screen.appendChild(searchBar);

  const badge = document.createElement('div');
  badge.style.cssText = `position:absolute;top:124px;left:20px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) var(--vv-space-4);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextPrimary};`;
  badge.textContent = '6 bikes nearby';
  screen.appendChild(badge);

  [{b:270,ic:'📍'},{b:330,ic:'⚙'}].forEach(f => {
    const fab = document.createElement('div');
    fab.style.cssText = `position:absolute;bottom:${f.b}px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:var(--vv-radius-full);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-heading-lg-size);cursor:pointer;`;
    fab.textContent = f.ic;
    screen.appendChild(fab);
  });

  const scanCard = document.createElement('div');
  scanCard.style.cssText = `position:absolute;bottom:80px;left:20px;right:20px;height:100px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;`;
  const bikeRow = document.createElement('div');
  bikeRow.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-3);';
  bikeRow.innerHTML = `<span style="color:${tokens.colorActionPrimary};font-size:16px;">&#x26A1;</span><span style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-heading);">VV-4829 ready to ride</span><div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-1) var(--vv-space-3);font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">Battery 87%</div>`;
  const scanBtn = document.createElement('button');
  scanBtn.style.cssText = `height:40px;width:100%;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};cursor:pointer;transition:transform 0.1s;`;
  scanBtn.textContent = 'Scan QR to Unlock';
  scanBtn.addEventListener('pointerdown', () => { scanBtn.style.background = tokens.colorGreen600; scanBtn.style.transform = 'scale(0.97)'; });
  scanBtn.addEventListener('pointerup', () => { scanBtn.style.background = tokens.colorActionPrimary; scanBtn.style.transform = ''; });
  scanBtn.addEventListener('pointerleave', () => { scanBtn.style.background = tokens.colorActionPrimary; scanBtn.style.transform = ''; });
  scanCard.appendChild(bikeRow);
  scanCard.appendChild(scanBtn);
  screen.appendChild(scanCard);

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
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/HomeMap — Hi-Fi frame E9hST — battery range pins 300km/200km/100km</div>${_blk('Default',Default())}</div>`;
