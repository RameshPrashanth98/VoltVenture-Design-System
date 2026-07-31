import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/PhoneInput' };

export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextSecondary};
    ">Mobile number</span>
  </div>
`;

export const Filled = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">98765 43210</span>
  </div>
`;
