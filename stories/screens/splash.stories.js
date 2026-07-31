import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Splash' };

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:${tokens.colorSurfaceBase};
    position:relative;
    overflow:hidden;
    box-sizing:border-box;
  ">
    <!-- Background pattern: repeating dots in colorGrey300 -->
    <div style="
      position:absolute;
      inset:0;
      background:radial-gradient(circle, ${tokens.colorGrey300} 1px, transparent 1px);
      background-size:24px 24px;
    "></div>

    <!-- Content wrapper -->
    <div style="
      position:relative;
      z-index:1;
      text-align:center;
      padding:${tokens.space400}px;
    ">
      <!-- Logo badge: 64x64 circle with "V" letter -->
      <div style="
        width:64px;
        height:64px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorTextPrimary};
        display:inline-flex;
        align-items:center;
        justify-content:center;
        margin:0 auto;
      ">
        <span style="
          color:#ffffff;
          font-family:'${tokens.typeDisplayXl.fontFamily}',sans-serif;
          font-size:32px;
          font-weight:${tokens.typeDisplayXl.fontWeight};
          line-height:1;
        ">V</span>
      </div>

      <!-- Brand name in typeDisplayXl (Manjari 700) -->
      <div style="
        font-family:'${tokens.typeDisplayXl.fontFamily}',sans-serif;
        font-size:${tokens.typeDisplayXl.fontSize}px;
        font-weight:${tokens.typeDisplayXl.fontWeight};
        line-height:${tokens.typeDisplayXl.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-top:${tokens.space300}px;
        letter-spacing:${tokens.typeDisplayXl.letterSpacing}em;
      ">VoltVenture</div>

      <!-- Tagline in typeBodyMd -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextSecondary};
        margin-top:${tokens.space200}px;
      ">Ride. Discover. Sustain.</div>

      <!-- Loader track -->
      <div style="
        width:120px;
        height:4px;
        background:${tokens.colorGrey200};
        border-radius:${tokens.radiusFull}px;
        margin:${tokens.space800}px auto 0;
        overflow:hidden;
      ">
        <!-- Progress fill: 40% -->
        <div style="
          width:40%;
          height:100%;
          background:${tokens.colorActionPrimary};
          border-radius:${tokens.radiusFull}px;
        "></div>
      </div>

      <!-- Version label in typeLabelSm -->
      <div style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
        margin-top:${tokens.space400}px;
      ">v1.0.0</div>
    </div>
  </div>
`;
