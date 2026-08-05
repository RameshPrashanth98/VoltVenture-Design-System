import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/MapPin' };

function makePhoneFrame() {
  const frame = document.createElement('div');
  frame.style.cssText = [
    'width:402px', 'height:874px', 'background:#0f0f0f',
    'border-radius:44px', 'padding:6px', 'box-sizing:border-box',
    'position:relative', 'overflow:hidden', 'display:inline-block',
    'font-family:Inter,sans-serif'
  ].join(';');
  const screen = document.createElement('div');
  screen.style.cssText = [
    'width:100%', 'height:100%', 'background:#ffffff',
    'border-radius:38px', 'overflow:hidden', 'position:relative',
    'display:flex', 'flex-direction:column'
  ].join(';');
  const bar = document.createElement('div');
  bar.style.cssText = [
    'flex-shrink:0', 'height:54px', 'background:#0f0f0f',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'padding:0 20px', 'box-sizing:border-box'
  ].join(';');
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;color:#ffffff;">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */

  // Inject @keyframes vv-pulse once (idempotency guard)
  if (!document.getElementById('vv-pulse-kf')) {
    const s = document.createElement('style');
    s.id = 'vv-pulse-kf';
    s.textContent = '@keyframes vv-pulse { 0% { transform:scale(1); opacity:1; } 50% { transform:scale(1.4); opacity:0.6; } 100% { transform:scale(1); opacity:0; } }';
    document.head.appendChild(s);
  }

  const { frame, screen } = makePhoneFrame();

  // Map background
  const mapBg = document.createElement('div');
  mapBg.style.cssText = 'flex:1;background:#e8e8e8;position:relative'; /* mock map bg — no token */

  // Pins container (centered)
  const pinsContainer = document.createElement('div');
  pinsContainer.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;gap:24px;align-items:center';

  // RangePin — static
  const rangePin = document.createElement('div');
  rangePin.style.cssText = `width:48px;height:48px;border-radius:50%;background:${tokens.colorGrey900};display:flex;align-items:center;justify-content:center`;

  // SelectedPin wrapper
  const selectedPinWrapper = document.createElement('div');
  selectedPinWrapper.style.cssText = 'position:relative;width:48px;height:48px';

  // Pulse ring
  const pulseRing = document.createElement('div');
  pulseRing.style.cssText = 'position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;background:rgba(198,255,45,0.20)'; /* colorActionPrimary at 20% — no token */

  // Selected pin (clickable)
  const selectedPin = document.createElement('div');
  selectedPin.style.cssText = `position:absolute;top:0;right:0;bottom:0;left:0;border-radius:50%;background:${tokens.colorActionPrimary};cursor:pointer`;

  // Animation restart on click
  selectedPin.addEventListener('click', () => {
    pulseRing.style.animation = 'none';
    void pulseRing.offsetWidth; // force reflow to restart animation
    pulseRing.style.animation = 'vv-pulse 600ms ease forwards';
    setTimeout(() => { pulseRing.style.animation = 'none'; }, 620);
  });

  selectedPinWrapper.appendChild(pulseRing);
  selectedPinWrapper.appendChild(selectedPin);
  pinsContainer.appendChild(rangePin);
  pinsContainer.appendChild(selectedPinWrapper);
  mapBg.appendChild(pinsContainer);
  screen.appendChild(mapBg);
  return frame;
};

export const RangePin = () => `
  <div style="
    display:inline-flex;
    align-items:center;
    gap:${tokens.space100}px;
    background:${tokens.colorGrey900};
    color:${tokens.colorTextOnInverse};
    padding:${tokens.space100}px ${tokens.space200}px;
    border-radius:${tokens.radiusFull}px;
  ">
    <span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span>
    <span style="
      font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
    ">0.3 km</span>
  </div>
`;

export const SelectedPin = () => `
  <div style="
    position:relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:64px;
    height:64px;
  ">
    <!-- pulse ring -->
    <div style="
      position:absolute;
      width:56px;
      height:56px;
      border-radius:${tokens.radiusFull}px;
      background:rgba(198,255,45,0.20);
    "></div>
    <!-- pin badge -->
    <div style="
      position:relative;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space200}px;
      display:inline-flex;
      gap:${tokens.space100}px;
      align-items:center;
    ">
      <span style="font-size:12px;">&#x1F6B2;</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextPrimary};
      ">VV-042</span>
    </div>
  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// MapPin — HTML Source</div>${_blk('RangePin',RangePin())}${_blk('SelectedPin',SelectedPin())}</div>`;
