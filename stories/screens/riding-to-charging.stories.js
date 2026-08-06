import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/RidingToCharging' };

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
    return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:48px;height:32px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;"><span style="font-size:14px;color:${isActive ? '#ffffff' : tokens.colorTextSecondary};">&#x25CF;</span></div><span style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span></div>`;
  }).join('');
}

// ── Default (static HTML) ───────────────────────────────────────────────────────
export const Default = () => `<div style="width:393px;height:852px;position:relative;overflow:hidden;background:#e8e8e8;box-sizing:border-box;">
  <div style="position:absolute;inset:0;background:#e8e8e8;"></div>
  <!-- Location Pulse -->
  <div style="position:absolute;top:380px;left:182px;width:30px;height:30px;border-radius:50%;background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;">
    <div style="width:14px;height:14px;border-radius:50%;background:${tokens.colorActionPrimary};"></div>
  </div>
  <!-- Route Ridden V: 5x150px, colorGrey300 (completed) -->
  <div style="position:absolute;top:200px;left:190px;width:5px;height:150px;background:${tokens.colorGrey300};border-radius:4px;"></div>
  <!-- Route Remaining V: 5x86px, colorActionPrimary -->
  <div style="position:absolute;top:165px;left:190px;width:5px;height:86px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
  <!-- Route Remaining H: 76x5px, colorActionPrimary -->
  <div style="position:absolute;top:165px;left:190px;width:76px;height:5px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
  <!-- Charging Station Pin: 80x80px -->
  <div style="position:absolute;top:100px;left:220px;width:80px;height:80px;">
    <div style="position:absolute;top:0;left:0;width:80px;height:80px;border-radius:50%;border:2px solid ${tokens.colorActionPrimary};"></div>
    <div style="position:absolute;top:12px;left:12px;width:56px;height:56px;background:${tokens.colorActionPrimary};border-radius:50%;display:flex;align-items:center;justify-content:center;">
      <span style="font-size:24px;color:${tokens.colorTextPrimary};">&#x26A1;</span>
    </div>
  </div>
  <!-- Cancel Button -->
  <div style="position:absolute;top:72px;right:20px;width:40px;height:40px;background:${tokens.colorSurfaceBase};border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:${shadowFromToken(tokens.elevationFloating)};cursor:pointer;font-size:16px;">&#x2715;</div>
  <!-- Turn Instruction Card: 264x52px -->
  <div style="position:absolute;top:80px;left:20px;width:264px;height:52px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusMd}px;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;padding:0 10px;gap:8px;box-sizing:border-box;">
    <div style="width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x27B6;</div>
    <div>
      <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Head towards</div>
      <div style="font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:600;">VoltHub Central</div>
    </div>
  </div>
  <!-- Recenter FAB -->
  <div style="position:absolute;bottom:198px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:50%;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;">&#x29BF;</div>
  <!-- Top Gradient -->
  <div style="position:absolute;top:0;left:0;right:0;height:130px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;"></div>
  <!-- Bottom Gradient -->
  <div style="position:absolute;bottom:100px;left:0;right:0;height:250px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;"></div>
  <!-- Status Bar -->
  <div style="position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;">
    <span style="font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>
  </div>
  <!-- Riding Progress Card -->
  <div style="position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:16px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;">
    <!-- Progress Row -->
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
      <div style="flex:1;">
        <div style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">1.2 km</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">left</div>
      </div>
      <div style="width:1px;height:32px;background:${tokens.colorGrey200};flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">8 min</div>
        <div style="font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">ETA</div>
      </div>
      <div style="flex:1;display:flex;justify-content:flex-end;">
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">&#x26A1; VV-4829</div>
      </div>
    </div>
    <div style="height:1px;background:${tokens.colorGrey100};margin-bottom:12px;"></div>
    <button style="width:100%;height:48px;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;">I&#x2019;ve Docked &#x2192;</button>
    <div style="text-align:center;margin-top:8px;font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;">Resume Ride</div>
  </div>
  <!-- Tab Bar -->
  <div style="position:absolute;bottom:0;left:0;right:0;height:80px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:8px 16px 20px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;">${tabsHtml('Ride')}</div>
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

  const frame = document.createElement('div');
  frame.style.cssText = 'width:402px;height:874px;background:#0f0f0f;border-radius:44px;padding:11px;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;';
  const screen = document.createElement('div');
  screen.style.cssText = 'flex:1;background:#ffffff;border-radius:34px;overflow:hidden;position:relative;';
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
  pulse.style.cssText = 'position:absolute;top:380px;left:182px;width:30px;height:30px;border-radius:50%;background:rgba(198,255,45,0.20);display:flex;align-items:center;justify-content:center;';
  const dot = document.createElement('div');
  dot.style.cssText = `width:14px;height:14px;border-radius:50%;background:${tokens.colorActionPrimary};`;
  pulse.appendChild(dot);
  screen.appendChild(pulse);

  // Routes
  [{t:200,l:190,w:5,h:150,c:tokens.colorGrey300},{t:165,l:190,w:5,h:86,c:tokens.colorActionPrimary},{t:165,l:190,w:76,h:5,c:tokens.colorActionPrimary}].forEach(r => {
    const seg = document.createElement('div');
    seg.style.cssText = `position:absolute;top:${r.t}px;left:${r.l}px;width:${r.w}px;height:${r.h}px;background:${r.c};border-radius:4px;`;
    screen.appendChild(seg);
  });

  // Charging Station Pin with stationPulse
  const stationPin = document.createElement('div');
  stationPin.style.cssText = 'position:absolute;top:100px;left:220px;width:80px;height:80px;';
  const stationRing = document.createElement('div');
  stationRing.style.cssText = `position:absolute;top:0;left:0;width:80px;height:80px;border-radius:50%;border:2px solid ${tokens.colorActionPrimary};animation:stationPulse 2s ease-in-out infinite;`;
  const stationBadge = document.createElement('div');
  stationBadge.style.cssText = `position:absolute;top:12px;left:12px;width:56px;height:56px;background:${tokens.colorActionPrimary};border-radius:50%;display:flex;align-items:center;justify-content:center;`;
  stationBadge.innerHTML = `<span style="font-size:24px;color:${tokens.colorTextPrimary};">&#x26A1;</span>`;
  stationPin.appendChild(stationRing);
  stationPin.appendChild(stationBadge);
  screen.appendChild(stationPin);

  // Cancel button
  const cancelBtn = document.createElement('div');
  cancelBtn.style.cssText = `position:absolute;top:72px;right:20px;width:40px;height:40px;background:${tokens.colorSurfaceBase};border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:${shadowFromToken(tokens.elevationFloating)};cursor:pointer;font-size:16px;`;
  cancelBtn.textContent = '\u2715';
  screen.appendChild(cancelBtn);

  // Turn Instruction Card
  const turnCard = document.createElement('div');
  turnCard.style.cssText = `position:absolute;top:80px;left:20px;width:264px;height:52px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusMd}px;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;padding:0 10px;gap:8px;box-sizing:border-box;`;
  turnCard.innerHTML = `<div style="width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:16px;">&#x27B6;</div><div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">Head towards</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};font-weight:600;">VoltHub Central</div></div>`;
  screen.appendChild(turnCard);

  // Recenter FAB
  const recenter = document.createElement('div');
  recenter.style.cssText = `position:absolute;bottom:198px;right:20px;width:48px;height:48px;background:${tokens.colorSurfaceBase};border-radius:50%;box-shadow:${shadowFromToken(tokens.elevationFloating)};display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;`;
  recenter.textContent = '\u29BF';
  screen.appendChild(recenter);

  // Top Gradient
  const topG = document.createElement('div');
  topG.style.cssText = 'position:absolute;top:0;left:0;right:0;height:130px;background:linear-gradient(to bottom,rgba(255,255,255,0.90),transparent);pointer-events:none;';
  screen.appendChild(topG);

  // Bottom Gradient
  const botG = document.createElement('div');
  botG.style.cssText = 'position:absolute;bottom:100px;left:0;right:0;height:250px;background:linear-gradient(to top,rgba(255,255,255,0.95),transparent);pointer-events:none;';
  screen.appendChild(botG);

  // Status Bar
  const sb = document.createElement('div');
  sb.style.cssText = 'position:absolute;top:0;left:0;right:0;height:62px;background:rgba(255,255,255,0.90);display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;';
  sb.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelMd.fontSize}px;font-weight:${tokens.typeLabelMd.fontWeight};color:${tokens.colorTextPrimary};">9:41</span><span style="font-size:12px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#x25B2; WiFi &#x25A0;</span>`;
  screen.appendChild(sb);

  // Riding Progress Card
  const card = document.createElement('div');
  card.style.cssText = `position:absolute;bottom:88px;left:20px;right:20px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:16px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;`;

  const progRow = document.createElement('div');
  progRow.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:12px;';
  progRow.innerHTML = `<div style="flex:1;"><div style="font-family:Inter,sans-serif;font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">1.2 km</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">left</div></div><div style="width:1px;height:32px;background:${tokens.colorGrey200};flex-shrink:0;"></div><div style="flex:1;"><div style="font-family:Inter,sans-serif;font-size:24px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;">8 min</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};">ETA</div></div><div style="flex:1;display:flex;justify-content:flex-end;"><div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextAccent};">&#x26A1; VV-4829</div></div>`;
  card.appendChild(progRow);

  const divProg = document.createElement('div');
  divProg.style.cssText = `height:1px;background:${tokens.colorGrey100};margin-bottom:12px;`;
  card.appendChild(divProg);

  const dockedBtn = document.createElement('button');
  dockedBtn.style.cssText = `width:100%;height:48px;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;`;
  dockedBtn.textContent = "I\u2019ve Docked \u2192";
  dockedBtn.addEventListener('pointerdown', () => { dockedBtn.style.background = tokens.colorGreen600; dockedBtn.style.transform = 'scale(0.97)'; });
  dockedBtn.addEventListener('pointerup', () => { dockedBtn.style.background = tokens.colorActionPrimary; dockedBtn.style.transform = ''; });
  dockedBtn.addEventListener('pointerleave', () => { dockedBtn.style.background = tokens.colorActionPrimary; dockedBtn.style.transform = ''; });
  card.appendChild(dockedBtn);

  const resumeLink = document.createElement('div');
  resumeLink.style.cssText = `text-align:center;margin-top:8px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};cursor:pointer;`;
  resumeLink.textContent = 'Resume Ride';
  card.appendChild(resumeLink);

  screen.appendChild(card);

  // Tab Bar
  let activeTab = 'Ride';
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `position:absolute;bottom:0;left:0;right:0;height:80px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;padding:8px 16px 20px;box-shadow:${shadowFromToken(tokens.elevationFloating)};box-sizing:border-box;`;
  const tabEls = [];
  TABS.forEach(label => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;';
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
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Screens/RidingToCharging — Hi-Fi frame gqQ8M — ridden+remaining route, 80px station pin</div>${_blk('Default',Default())}</div>`;
