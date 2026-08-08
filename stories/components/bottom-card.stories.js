import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/BottomCard' };

// Copied from stories/elevation.stories.js — helper not exported from that file
/**
 * Convert #RRGGBBAA (8-char hex) to CSS rgba().
 * @param {string} hex8 — e.g. "#0F0F0F1A"
 * @returns {string} — e.g. "rgba(15, 15, 15, 0.10)"
 */
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

/**
 * Build a CSS box-shadow string from an elevation token value.
 */
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}

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

export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  let expanded = false;

  const { frame, screen } = makePhoneFrame();
  // screen has position:relative — required for position:absolute bottom:0 card

  // Card element — margin-top:auto pushes card to bottom of flex column (avoids absolute positioning overflow issues)
  const card = document.createElement('div');
  card.style.cssText = `margin-top:auto;width:100%;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;box-shadow:${shadowFromToken(tokens.elevationRaised)};overflow:hidden;transition:height var(--vv-duration-deliberate) var(--vv-easing-standard);height:120px;box-sizing:border-box;flex-shrink:0`;

  // Drag handle — 23px total (margin-top:12 + height:3 + margin-bottom:8)
  const handle = document.createElement('div');
  handle.style.cssText = `width:40px;height:3px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey200};margin:var(--vv-space-4) auto var(--vv-space-3);cursor:pointer`;

  // Card header — fixed height 97px so body content starts exactly at 120px (23px handle + 97px = 120px)
  const cardHeader = document.createElement('div');
  cardHeader.style.cssText = 'height:97px;padding:0 var(--vv-space-5);display:flex;flex-direction:column;justify-content:center;gap:var(--vv-space-3);box-sizing:border-box';
  cardHeader.innerHTML = `
    <div style="font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorTextPrimary};">Nearby Bikes</div>
    <div style="display:inline-block;background:${tokens.colorGreen100};color:${tokens.colorGreen700};padding:var(--vv-space-1) ${tokens.space200}px;border-radius:${tokens.radiusXs}px;font-size:${tokens.typeLabelSm.fontSize}px;align-self:flex-start;">VV-042 · 120m away</div>
  `;

  // Card body — below the fold at 120px, fully visible at 320px (safe innerHTML — no listeners needed here)
  const cardBody = document.createElement('div');
  cardBody.style.cssText = `padding:0 ${tokens.space400}px ${tokens.space400}px`;
  cardBody.innerHTML = `
    <div style="display:flex;align-items:center;gap:${tokens.space300}px;margin-bottom:${tokens.space400}px;">
      <div style="width:64px;height:64px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};color:${tokens.colorTextPrimary};">VoltBike VV-042</div>
        <div style="display:inline-block;background:${tokens.colorGrey100};color:${tokens.colorGrey700};padding:var(--vv-space-1) ${tokens.space200}px;border-radius:${tokens.radiusXs}px;font-size:${tokens.typeLabelSm.fontSize}px;margin-top:var(--vv-space-2);">120m away</div>
      </div>
    </div>
    <button style="width:100%;min-height:${tokens.space1200}px;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:${tokens.typeHeadingSm.fontWeight};cursor:pointer;">Get Directions</button>
  `;

  // Drag handle click → toggle height
  handle.addEventListener('click', () => {
    expanded = !expanded;
    card.style.height = expanded ? '320px' : '120px';
  });

  card.appendChild(handle);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  screen.appendChild(card);
  return frame;
};

export const BikeSelection = () => `
  <div style="
    width:393px;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;
    padding:${tokens.space400}px;
    box-shadow:${shadowFromToken(tokens.elevationRaised)};
    box-sizing:border-box;
  ">
    <div style="display:flex;align-items:center;gap:${tokens.space300}px;margin-bottom:${tokens.space400}px;">
      <div style="width:64px;height:64px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="
          font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:${tokens.typeHeadingMd.fontWeight};
          color:${tokens.colorTextPrimary};
        ">VoltBike VV-042</div>
        <div style="
          display:inline-block;
          background:${tokens.colorGrey100};
          color:${tokens.colorGrey700};
          padding:var(--vv-space-1) ${tokens.space200}px;
          border-radius:${tokens.radiusXs}px;
          font-size:${tokens.typeLabelSm.fontSize}px;
          margin-top:var(--vv-space-2);
        ">120m away</div>
      </div>
    </div>
    <button style="
      width:100%;
      min-height:${tokens.space1200}px;
      background:${tokens.colorActionPrimary};
      color:${tokens.colorTextPrimary};
      border:none;
      border-radius:${tokens.radiusFull}px;
      font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
      font-size:${tokens.typeHeadingSm.fontSize}px;
      font-weight:${tokens.typeHeadingSm.fontWeight};
      cursor:pointer;
    ">Get Directions</button>
  </div>
`;

export const WalkProgress = () => `
  <div style="
    width:393px;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;
    padding:${tokens.space400}px;
    box-shadow:${shadowFromToken(tokens.elevationRaised)};
    box-sizing:border-box;
  ">
    <div style="display:flex;gap:${tokens.space400}px;align-items:flex-start;margin-bottom:${tokens.space400}px;">
      <div>
        <span style="
          font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
          font-size:${tokens.typeBodySm.fontSize}px;
          font-weight:${tokens.typeBodySm.fontWeight};
          color:${tokens.colorTextSecondary};
        ">Distance</span>
        <div style="
          font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:${tokens.typeHeadingMd.fontWeight};
          color:${tokens.colorTextPrimary};
        ">350m</div>
      </div>
      <div>
        <span style="
          font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
          font-size:${tokens.typeBodySm.fontSize}px;
          font-weight:${tokens.typeBodySm.fontWeight};
          color:${tokens.colorTextSecondary};
        ">ETA</span>
        <div style="
          font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:${tokens.typeHeadingMd.fontWeight};
          color:${tokens.colorTextPrimary};
        ">4 min</div>
      </div>
      <div style="
        margin-left:auto;
        display:inline-flex;
        align-items:center;
        gap:var(--vv-space-2);
        background:${tokens.colorGreen100};
        padding:var(--vv-space-2) ${tokens.space200}px;
        border-radius:${tokens.radiusXs}px;
      ">
        <span style="color:${tokens.colorGreen700};font-size:12px;">🚲</span>
        <span style="
          font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGreen700};
        ">VV-042</span>
      </div>
    </div>
    <button style="
      width:100%;
      min-height:${tokens.space1200}px;
      background:${tokens.colorActionPrimary};
      color:${tokens.colorTextPrimary};
      border:none;
      border-radius:${tokens.radiusFull}px;
      font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
      font-size:${tokens.typeHeadingSm.fontSize}px;
      font-weight:${tokens.typeHeadingSm.fontWeight};
      cursor:pointer;
    ">I've Arrived</button>
  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// BottomCard — HTML Source</div>${_blk('BikeSelection',BikeSelection())}${_blk('WalkProgress',WalkProgress())}</div>`;
