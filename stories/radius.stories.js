import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Radius' };

function box(name, value) {
  const displayRadius = Math.min(value, 32);
  return `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <div style="
        width:64px;
        height:64px;
        background:#ebebeb;
        border-radius:${displayRadius}px;
        border:1px solid #c9c9c9;
        flex-shrink:0;
      "></div>
      <div style="margin-top:8px;text-align:center;">
        <div style="
          font-family:Inter,sans-serif;
          font-size:11px;
          font-weight:600;
          color:#0f0f0f;
        ">${name}</div>
        <div style="
          font-family:'JetBrains Mono',monospace;
          font-size:11px;
          color:#808080;
        ">${value}dp</div>
      </div>
    </div>
  `;
}

export const RadiusScale = () => `
  <div style="
    display:flex;
    flex-wrap:wrap;
    gap:24px;
    padding:32px;
    background:#ffffff;
    align-items:flex-start;
  ">
    ${box('radiusXs', tokens.radiusXs)}
    ${box('radiusSm', tokens.radiusSm)}
    ${box('radiusMd', tokens.radiusMd)}
    ${box('radiusLg', tokens.radiusLg)}
    ${box('radiusXl', tokens.radiusXl)}
    ${box('radius2xl', tokens.radius2xl)}
    ${box('radiusFull', tokens.radiusFull)}
  </div>
`;
