import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/StatusBar' };

export const LightSurface = () => `
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
      line-height:${tokens.typeLabelMd.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">9:41</span>
    <span style="
      font-size:${tokens.typeLabelSm.fontSize}px;
      color:${tokens.colorTextPrimary};
      letter-spacing:2px;
    ">&#9650; WiFi &#9646;</span>
  </div>
`;

export const DarkSurface = () => `
  <div style="
    background:${tokens.colorGrey900};
    display:inline-block;
  ">
    <div style="
      width:393px;
      height:44px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 ${tokens.space400}px;
      background:transparent;
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        line-height:${tokens.typeLabelMd.lineHeight}px;
        color:${tokens.colorTextOnInverse};
      ">9:41</span>
      <span style="
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorTextOnInverse};
        letter-spacing:2px;
      ">&#9650; WiFi &#9646;</span>
    </div>
  </div>
`;
