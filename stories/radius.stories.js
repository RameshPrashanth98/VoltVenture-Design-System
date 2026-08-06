import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Radius' };

const sans = "font-family:Inter,'Helvetica Neue',sans-serif";
const mono = "font-family:'JetBrains Mono','Courier New',monospace";

function pageHeader(title, sub) {
  return `
    <div style="background:#0f0f0f;padding:36px 44px 30px;">
      <div style="${mono};font-size:10px;color:#c6ff2d;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:12px;">
        Foundation · VoltVenture Design System
      </div>
      <h1 style="margin:0 0 8px;${sans};font-size:38px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;line-height:1;">
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
      gap:16px;
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
          background:#0f0f0f;
          padding:4px 10px;
          border-radius:5px;
          ${mono};font-size:10px;color:#c6ff2d;letter-spacing:0.03em;
          margin-bottom:6px;
        ">${name}</div>
        <div style="${mono};font-size:13px;font-weight:700;color:#0f0f0f;">${displayLabel}</div>
      </div>
    </div>
  `;
}

export const RadiusScale = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Radius', '7 corner radius steps — from subtle rounding to fully circular')}
    <div style="background:#ffffff;padding:48px 44px 56px;">
      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:40px 48px;
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
