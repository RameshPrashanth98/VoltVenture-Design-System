import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Radius' };

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

function radiusCard(name, rawValue) {
  // Cap display radius so pill doesn't collapse the shape below 120px
  const displayR = Math.min(rawValue, 60);
  const isFull = rawValue >= 999;
  const displayLabel = isFull ? '∞' : `${rawValue}dp`;

  return `
    <div style="
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:var(--vv-space-5);
    ">
      <div style="
        width:120px;
        height:120px;
        background:linear-gradient(135deg,#c6ff2d 0%,#a8e022 100%);
        border-radius:${displayR}px;
        box-shadow:0 8px 24px rgba(198,255,45,0.28);
        flex-shrink:0;
      "></div>
      <div style="text-align:center;">
        <div style="
          display:inline-block;
          background:var(--vv-color-surface-inverse);
          padding:var(--vv-space-2) 10px;
          border-radius:5px;
          ${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.03em;
          margin-bottom:6px;
        ">${name}</div>
        <div style="${mono};font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);">${displayLabel}</div>
      </div>
    </div>
  `;
}

export const RadiusScale = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Radius', '7 corner radius steps — from subtle rounding to fully circular')}
    <div style="background:var(--vv-color-surface-base);padding:var(--vv-space-10) 44px 56px;">
      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:var(--vv-space-9) var(--vv-space-10);
        align-items:flex-end;
        justify-content:flex-start;
      ">
        ${radiusCard('radiusXs',   tokens.radiusXs)}
        ${radiusCard('radiusSm',   tokens.radiusSm)}
        ${radiusCard('radiusMd',   tokens.radiusMd)}
        ${radiusCard('radiusLg',   tokens.radiusLg)}
        ${radiusCard('radiusXl',   tokens.radiusXl)}
        ${radiusCard('radius2xl',  tokens.radius2xl)}
        ${radiusCard('radiusFull', tokens.radiusFull)}
      </div>
    </div>
  </div>
`;
