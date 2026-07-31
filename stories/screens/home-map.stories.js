import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/HomeMap' };

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

    <!-- Search bar -->
    <div style="
      position:absolute;
      top:60px;
      left:${tokens.space400}px;
      right:${tokens.space400}px;
      height:48px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      box-shadow:${shadowFromToken(tokens.elevationRaised)};
      display:flex;
      align-items:center;
      padding:0 ${tokens.space400}px;
      gap:${tokens.space200}px;
      box-sizing:border-box;
    ">
      <span style="font-size:16px;">🔍</span>
      <span style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:${tokens.colorTextSecondary};
      ">Where to?</span>
    </div>

    <!-- Nearby badge -->
    <div style="
      position:absolute;
      top:120px;
      left:${tokens.space400}px;
      background:${tokens.colorActionPrimary};
      color:${tokens.colorTextPrimary};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space300}px;
      font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
      display:inline-block;
    ">6 bikes nearby</div>

    <!-- Bike RangePin 1 -->
    <div style="
      position:absolute;
      top:200px;
      left:80px;
      background:${tokens.colorGrey900};
      color:${tokens.colorTextOnInverse};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space200}px;
      display:inline-flex;
      align-items:center;
      gap:${tokens.space100}px;
    ">
      <span style="color:${tokens.colorActionPrimary};font-size:12px;">⚡</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
      ">0.3 km</span>
    </div>

    <!-- Bike RangePin 2 -->
    <div style="
      position:absolute;
      top:300px;
      left:220px;
      background:${tokens.colorGrey900};
      color:${tokens.colorTextOnInverse};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space200}px;
      display:inline-flex;
      align-items:center;
      gap:${tokens.space100}px;
    ">
      <span style="color:${tokens.colorActionPrimary};font-size:12px;">⚡</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
      ">0.5 km</span>
    </div>

    <!-- Bike RangePin 3 -->
    <div style="
      position:absolute;
      top:250px;
      left:150px;
      background:${tokens.colorGrey900};
      color:${tokens.colorTextOnInverse};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space200}px;
      display:inline-flex;
      align-items:center;
      gap:${tokens.space100}px;
    ">
      <span style="color:${tokens.colorActionPrimary};font-size:12px;">⚡</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
      ">0.8 km</span>
    </div>

    <!-- Location pulse -->
    <div style="
      position:absolute;
      top:350px;
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

    <!-- My Location FAB -->
    <div style="
      position:absolute;
      bottom:200px;
      right:${tokens.space400}px;
      width:48px;
      height:48px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="font-size:20px;">📍</span>
    </div>

    <!-- Filters FAB -->
    <div style="
      position:absolute;
      bottom:260px;
      right:${tokens.space400}px;
      width:48px;
      height:48px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="font-size:20px;">⚙</span>
    </div>

    <!-- Scan CTA card -->
    <div style="
      position:absolute;
      bottom:80px;
      left:${tokens.space400}px;
      right:${tokens.space400}px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusLg}px;
      padding:${tokens.space400}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      display:flex;
      align-items:center;
      justify-content:space-between;
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:${tokens.colorTextPrimary};
      ">3 bikes available</span>
      <button style="
        background:${tokens.colorActionPrimary};
        border:none;
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space200}px ${tokens.space400}px;
        cursor:pointer;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        color:${tokens.colorTextPrimary};
      ">Scan QR</button>
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
