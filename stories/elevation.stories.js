import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Elevation' };

const sans = "font-family:Inter,'Helvetica Neue',sans-serif";
const mono = "font-family:'JetBrains Mono','Courier New',monospace";

function pageHeader(title, sub) {
  return `
    <div style="background:var(--vv-color-surface-inverse);padding:36px 44px 30px;">
      <div style="${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.14em;text-transform:uppercase;margin-bottom:var(--vv-space-4);">
        Foundation · VoltVenture Design System
      </div>
      <h1 style="margin:0 0 var(--vv-space-3);${sans};font-size:38px;font-weight:800;color:var(--vv-color-text-on-inverse);letter-spacing:-0.02em;line-height:1;">
        ${title}
      </h1>
      <p style="margin:0;${sans};font-size:14px;color:#666;line-height:1.5;">${sub}</p>
    </div>
  `;
}

function hexToRgba(hex8) {
  if (!hex8 || hex8 === 'none') return 'none';
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return `${token.offsetX}px ${token.offsetY}px ${token.blur}px ${token.spread}px ${hexToRgba(token.color)}`;
}

const ELEVATIONS = [
  { name: 'elevationFlat',     token: tokens.elevationFlat,     desc: 'No shadow — base surface' },
  { name: 'elevationRaised',   token: tokens.elevationRaised,   desc: 'Card, list item' },
  { name: 'elevationFloating', token: tokens.elevationFloating, desc: 'FAB, picker, dropdown' },
  { name: 'elevationOverlay',  token: tokens.elevationOverlay,  desc: 'Bottom sheet, dialog' },
];

export const ElevationScale = () => {
  const cards = ELEVATIONS.map(({ name, token, desc }) => {
    const shadowValue = shadowFromToken(token);
    const isFlat = shadowValue === 'none';

    return `
      <div style="
        background:var(--vv-color-surface-base);
        border-radius:var(--vv-radius-md);
        padding:var(--vv-space-7) 22px var(--vv-space-6);
        box-shadow:${shadowValue};
        display:flex;
        flex-direction:column;
        gap:var(--vv-space-4);
        width:200px;
        box-sizing:border-box;
        ${isFlat ? 'border:1px solid #e8e8e8;' : ''}
      ">
        <div style="
          width:40px;height:40px;
          background:#f4f4f4;
          border-radius:10px;
        "></div>
        <div>
          <div style="
            display:inline-block;
            background:var(--vv-color-surface-inverse);
            padding:3px var(--vv-space-3);
            border-radius:4px;
            ${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.03em;
            margin-bottom:6px;
          ">${name}</div>
          <div style="${sans};font-size:12px;color:#888;line-height:1.4;">${desc}</div>
        </div>
        <div style="
          ${mono};font-size:9px;color:#ccc;
          word-break:break-all;
          line-height:1.5;
          margin-top:auto;
          padding-top:var(--vv-space-4);
          border-top:1px solid #f0f0f0;
        ">${shadowValue}</div>
      </div>
    `;
  }).join('');

  return `
    <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
      ${pageHeader('Elevation', '4 shadow levels — use to communicate surface hierarchy to users')}
      <div style="
        background:var(--ds-color-grey-900);
        padding:56px 44px var(--vv-space-11);
      ">
        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:var(--vv-space-8);
          align-items:flex-start;
        ">
          ${cards}
        </div>
        <div style="
          margin-top:36px;
          padding:var(--vv-space-5) var(--vv-space-6);
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:10px;
          ${sans};font-size:12px;color:#666;line-height:1.6;
        ">
          Shadows are most visible on dark surfaces — this is why overlays and bottom sheets feel layered in the VoltVenture UI.
        </div>
      </div>
    </div>
  `;
};
