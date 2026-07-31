import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/OrDivider' };

export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    gap:${tokens.space300}px;
    padding:0 ${tokens.space400}px;
  ">
    <div style="flex:1;height:${tokens.borderWidthHairline}px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
      line-height:${tokens.typeLabelSm.lineHeight}px;
      color:${tokens.colorTextSecondary};
    ">OR</span>
    <div style="flex:1;height:${tokens.borderWidthHairline}px;background:${tokens.colorBorderSubtle};"></div>
  </div>
`;
