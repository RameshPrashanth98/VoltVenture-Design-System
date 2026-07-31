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
          padding:2px ${tokens.space200}px;
          border-radius:${tokens.radiusXs}px;
          font-size:${tokens.typeLabelSm.fontSize}px;
          margin-top:4px;
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
        gap:4px;
        background:${tokens.colorGreen100};
        padding:4px ${tokens.space200}px;
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
