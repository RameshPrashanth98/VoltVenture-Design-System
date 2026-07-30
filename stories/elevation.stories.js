import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Elevation',
};

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
 * If the token is the string "none" (elevationFlat), returns "none".
 * Otherwise builds the full CSS box-shadow value.
 * @param {string|{color:string, offsetX:number, offsetY:number, blur:number, spread:number}} token
 * @returns {string}
 */
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}

const ELEVATIONS = [
  { name: 'elevationFlat', token: tokens.elevationFlat },
  { name: 'elevationRaised', token: tokens.elevationRaised },
  { name: 'elevationFloating', token: tokens.elevationFloating },
  { name: 'elevationOverlay', token: tokens.elevationOverlay },
];

export const ElevationScale = () => {
  const cards = ELEVATIONS.map(({ name, token }) => {
    const shadowValue = shadowFromToken(token);
    return `
      <div style="
        width:160px;
        height:120px;
        background:#ffffff;
        border-radius:12px;
        padding:16px;
        box-sizing:border-box;
        box-shadow:${shadowValue};
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
        gap:6px;
      ">
        <div style="
          font-family:Inter,sans-serif;
          font-size:13px;
          font-weight:600;
          color:#0f0f0f;
          margin:0;
        ">${name}</div>
        <div style="
          font-family:'JetBrains Mono',monospace;
          font-size:10px;
          color:#808080;
          word-break:break-all;
          margin:0;
        ">${shadowValue}</div>
      </div>
    `;
  }).join('');

  return `
    <div style="
      background:#f5f5f5;
      padding:48px;
      display:flex;
      flex-wrap:wrap;
      gap:32px;
      font-family:Inter,sans-serif;
    ">
      ${cards}
    </div>
  `;
};
