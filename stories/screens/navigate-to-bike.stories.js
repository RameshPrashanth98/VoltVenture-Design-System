import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/NavigateToBike' };

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

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

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

    <!-- Dashed route line (user → bike) -->
    <div style="
      position:absolute;
      top:200px;
      left:50%;
      transform:translateX(-50%);
      width:2px;
      height:200px;
      border-left:2px dashed ${tokens.colorGrey700};
    "></div>

    <!-- User location pulse -->
    <div style="
      position:absolute;
      bottom:240px;
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

    <!-- Selected bike pin with pulse ring -->
    <div style="
      position:absolute;
      top:150px;
      left:50%;
      transform:translateX(-50%);
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:64px;
      height:64px;
    ">
      <!-- Pulse ring -->
      <div style="
        position:absolute;
        width:56px;
        height:56px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(198,255,45,0.20);
      "></div>
      <!-- Pin badge -->
      <div style="
        position:relative;
        background:${tokens.colorSurfaceBase};
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space100}px ${tokens.space200}px;
        display:inline-flex;
        align-items:center;
        gap:${tokens.space100}px;
      ">
        <span style="font-size:12px;">🚲</span>
        <span style="
          font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorTextPrimary};
        ">VV-042</span>
      </div>
    </div>

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

    <!-- ETA badge (top-center, dark pill) -->
    <div style="
      position:absolute;
      top:60px;
      left:50%;
      transform:translateX(-50%);
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space200}px ${tokens.space400}px;
      display:inline-flex;
      align-items:center;
      gap:${tokens.space200}px;
      white-space:nowrap;
    ">
      <span style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:${tokens.colorTextOnInverse};
      ">4 min</span>
      <span style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        color:${tokens.colorTextOnInverse};
      ">· 350m</span>
    </div>

    <!-- BikeSelection card (above tab bar) -->
    <div style="
      position:absolute;
      bottom:80px;
      left:0;
      right:0;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusLg}px ${tokens.radiusLg}px 0 0;
      padding:${tokens.space400}px;
      box-shadow:${shadowFromToken(tokens.elevationRaised)};
      box-sizing:border-box;
    ">
      <!-- Thumbnail + name + distance badge -->
      <div style="display:flex;align-items:center;gap:${tokens.space300}px;margin-bottom:${tokens.space400}px;">
        <!-- Bike image placeholder -->
        <div style="
          width:64px;
          height:64px;
          background:${tokens.colorGrey100};
          border-radius:${tokens.radiusSm}px;
          flex-shrink:0;
        "></div>
        <div style="flex:1;">
          <div style="
            font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
            font-size:${tokens.typeHeadingMd.fontSize}px;
            font-weight:${tokens.typeHeadingMd.fontWeight};
            color:${tokens.colorTextPrimary};
          ">VoltBike VV-042</div>
          <!-- Distance badge -->
          <div style="
            display:inline-block;
            background:${tokens.colorGrey100};
            color:${tokens.colorGrey700};
            padding:2px ${tokens.space200}px;
            border-radius:${tokens.radiusXs}px;
            font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
            font-size:${tokens.typeLabelSm.fontSize}px;
            margin-top:4px;
          ">120m away</div>
        </div>
      </div>
      <!-- Get Directions CTA -->
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

    <!-- TabBar -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      right:0;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      padding:${tokens.space200}px ${tokens.space400}px ${tokens.space500}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      box-sizing:border-box;
    ">
      ${TABS.map(label => {
        const isActive = label === 'Ride';
        return `
          <div style="
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:${tokens.space100}px;
            flex:1;
          ">
            <div style="
              width:48px;
              height:32px;
              border-radius:${tokens.radiusFull}px;
              background:${isActive ? tokens.colorTextPrimary : tokens.colorGrey200};
              display:flex;
              align-items:center;
              justify-content:center;
            ">
              <span style="font-size:14px;color:${isActive ? tokens.colorTextOnInverse : tokens.colorTextSecondary};">●</span>
            </div>
            <span style="
              font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
              font-size:${tokens.typeLabelSm.fontSize}px;
              font-weight:${tokens.typeLabelSm.fontWeight};
              color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};
            ">${label}</span>
          </div>
        `;
      }).join('')}
    </div>

  </div>
`;
