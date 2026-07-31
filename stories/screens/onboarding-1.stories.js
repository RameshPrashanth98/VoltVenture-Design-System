import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Onboarding1' };

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    overflow:hidden;
    box-sizing:border-box;
  ">
    <!-- StatusBar (light surface) -->
    <div style="
      width:393px;
      height:44px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 ${tokens.space400}px;
      background:${tokens.colorSurfaceBase};
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        color:${tokens.colorTextPrimary};
      ">9:41</span>
      <span style="
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorTextPrimary};
        letter-spacing:2px;
      ">▲ WiFi ■</span>
    </div>

    <!-- Skip link row (right-aligned) -->
    <div style="
      display:flex;
      justify-content:flex-end;
      padding:${tokens.space200}px ${tokens.space400}px;
    ">
      <span style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:${tokens.colorTextSecondary};
        cursor:pointer;
      ">Skip</span>
    </div>

    <!-- Illustration placeholder (top ~60% of screen, flex:1) -->
    <div style="
      flex:1;
      background:${tokens.colorGrey200};
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="
        font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
        font-size:${tokens.typeBodySm.fontSize}px;
        color:${tokens.colorTextSecondary};
      ">[ Illustration ]</span>
    </div>

    <!-- Pagination dots row (3 dots; first active) -->
    <div style="
      display:flex;
      justify-content:center;
      gap:${tokens.space200}px;
      padding:${tokens.space300}px;
    ">
      <!-- Active dot (elongated pill) -->
      <div style="
        width:24px;
        height:8px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorActionPrimary};
      "></div>
      <!-- Inactive dot 2 -->
      <div style="
        width:8px;
        height:8px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorGrey200};
      "></div>
      <!-- Inactive dot 3 -->
      <div style="
        width:8px;
        height:8px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorGrey200};
      "></div>
    </div>

    <!-- Headline in typeDisplayMd (Manjari 700) -->
    <div style="
      padding:0 ${tokens.space400}px;
      font-family:'${tokens.typeDisplayMd.fontFamily}',sans-serif;
      font-size:${tokens.typeDisplayMd.fontSize}px;
      font-weight:${tokens.typeDisplayMd.fontWeight};
      line-height:${tokens.typeDisplayMd.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">Ride green, explore more</div>

    <!-- Subtext in typeBodyMd -->
    <div style="
      padding:${tokens.space200}px ${tokens.space400}px;
      font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyMd.fontSize}px;
      font-weight:${tokens.typeBodyMd.fontWeight};
      line-height:${tokens.typeBodyMd.lineHeight}px;
      color:${tokens.colorTextSecondary};
    ">Unlock sustainable rides across your city.</div>

    <!-- Next button (Primary green pill) -->
    <button style="
      margin:${tokens.space400}px ${tokens.space400}px ${tokens.space800}px;
      background:${tokens.colorActionPrimary};
      color:${tokens.colorTextPrimary};
      border-radius:${tokens.radiusFull}px;
      min-height:${tokens.space1200}px;
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:${tokens.space200}px;
      font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
      font-size:${tokens.typeHeadingSm.fontSize}px;
      font-weight:${tokens.typeHeadingSm.fontWeight};
      box-sizing:border-box;
    ">Next →</button>
  </div>
`;
