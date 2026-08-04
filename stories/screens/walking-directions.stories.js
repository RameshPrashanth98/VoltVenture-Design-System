import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/WalkingDirections' };

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
 * If the token is the string "none" (elevationFlat), returns "none".
 * @param {string|{color:string, offsetX:number, offsetY:number, blur:number, spread:number}} token
 * @returns {string}
 */
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    position:relative;
    overflow:hidden;
    background:#e8e8e8;
    box-sizing:border-box;
  ">

    <!-- Map background placeholder -->
    <div style="position:absolute;inset:0;background:#e8e8e8;"></div>

    <!-- Walked route line (colorActionPrimary — completed portion) -->
    <div style="
      position:absolute;
      top:200px;
      left:50%;
      transform:translateX(-50%);
      width:3px;
      height:120px;
      background:${tokens.colorActionPrimary};
    "></div>

    <!-- Remaining route line (dashed, colorGrey300) -->
    <div style="
      position:absolute;
      top:120px;
      left:50%;
      transform:translateX(-50%);
      width:3px;
      height:80px;
      border-left:2px dashed ${tokens.colorGrey300};
    "></div>

    <!-- User location pulse -->
    <div style="
      position:absolute;
      bottom:260px;
      left:50%;
      transform:translateX(-50%);
      width:32px;
      height:32px;
      border-radius:${tokens.radiusFull}px;
      background:rgba(198,255,45,0.20);
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <div style="
        width:12px;
        height:12px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorActionPrimary};
      "></div>
    </div>

    <!-- Bike destination pin -->
    <div style="
      position:absolute;
      top:80px;
      left:50%;
      transform:translateX(-50%);
      width:32px;
      height:32px;
      border-radius:${tokens.radiusFull}px;
      background:${tokens.colorActionPrimary};
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:16px;
    ">🚲</div>

    <!-- StatusBar overlay -->
    <div style="
      position:absolute;
      top:0;
      left:0;
      right:0;
      height:44px;
      background:rgba(255,255,255,0.90);
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 ${tokens.space400}px;
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        color:${tokens.colorTextPrimary};
      ">9:41</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorTextPrimary};
        letter-spacing:2px;
      ">▲ WiFi ■</span>
    </div>

    <!-- Cancel button (top-left) -->
    <div style="
      position:absolute;
      top:60px;
      left:${tokens.space400}px;
      width:40px;
      height:40px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      box-shadow:${shadowFromToken(tokens.elevationRaised)};
      display:inline-flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        color:${tokens.colorTextPrimary};
      ">✕</span>
    </div>

    <!-- Turn instruction card (dark surface) -->
    <div style="
      position:absolute;
      top:60px;
      left:${tokens.space400}px;
      right:${tokens.space400}px;
      background:${tokens.colorGrey900};
      border-radius:${tokens.radiusLg}px;
      padding:${tokens.space300}px ${tokens.space400}px;
      display:flex;
      align-items:center;
      gap:${tokens.space300}px;
      box-sizing:border-box;
    ">
      <!-- Turn arrow chip: rgba(255,255,255,0.09) bg /* #FFFFFF18 — design alpha, no token */ -->
      <div style="
        width:32px;
        height:32px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.09); /* #FFFFFF18 — design alpha, no token */
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      ">
        <span style="
          font-size:16px;
          color:${tokens.colorTextOnInverse};
        ">↑</span>
      </div>
      <!-- Street name -->
      <span style="
        font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:${tokens.typeHeadingMd.fontWeight};
        color:${tokens.colorTextOnInverse};
      ">Continue on MG Road</span>
    </div>

    <!-- Recenter FAB -->
    <div style="
      position:absolute;
      bottom:180px;
      right:${tokens.space400}px;
      width:48px;
      height:48px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:20px;
    ">◎</div>

    <!-- WalkProgress card (bottom sheet) -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;
      padding:${tokens.space400}px;
      box-shadow:${shadowFromToken(tokens.elevationRaised)};
      box-sizing:border-box;
    ">
      <!-- Distance + ETA + bike chip row -->
      <div style="display:flex;gap:${tokens.space400}px;margin-bottom:${tokens.space400}px;align-items:center;">
        <div>
          <div style="
            font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
            font-size:${tokens.typeBodySm.fontSize}px;
            font-weight:${tokens.typeBodySm.fontWeight};
            color:${tokens.colorTextSecondary};
          ">Distance</div>
          <div style="
            font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
            font-size:${tokens.typeHeadingMd.fontSize}px;
            font-weight:${tokens.typeHeadingMd.fontWeight};
            color:${tokens.colorTextPrimary};
          ">350m</div>
        </div>
        <div>
          <div style="
            font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
            font-size:${tokens.typeBodySm.fontSize}px;
            font-weight:${tokens.typeBodySm.fontWeight};
            color:${tokens.colorTextSecondary};
          ">ETA</div>
          <div style="
            font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
            font-size:${tokens.typeHeadingMd.fontSize}px;
            font-weight:${tokens.typeHeadingMd.fontWeight};
            color:${tokens.colorTextPrimary};
          ">4 min</div>
        </div>
        <!-- Bike chip -->
        <div style="
          display:inline-flex;
          align-items:center;
          gap:4px;
          background:${tokens.colorGreen100};
          padding:4px ${tokens.space200}px;
          border-radius:${tokens.radiusXs}px;
          margin-left:auto;
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
      <!-- I've Arrived CTA -->
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

  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Screens/WalkingDirections — Full Screen HTML</div>${_blk('Default',Default())}</div>`;
