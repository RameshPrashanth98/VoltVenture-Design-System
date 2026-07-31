import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SocialAuthButtons' };

export const AppleButton = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:${tokens.space200}px;
    background:${tokens.colorActionPrimary};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
    font-size:${tokens.typeBodyMd.fontSize}px;
    font-weight:${tokens.typeBodyMd.fontWeight};
    line-height:${tokens.typeBodyMd.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:pointer;
    box-sizing:border-box;
  ">&#63743; Continue with Apple</button>
`;

export const GoogleButton = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:${tokens.space200}px;
    background:${tokens.colorSurfaceBase};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
    font-size:${tokens.typeBodyMd.fontSize}px;
    font-weight:${tokens.typeBodyMd.fontWeight};
    line-height:${tokens.typeBodyMd.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:${tokens.borderWidthHairline}px solid ${tokens.colorBorderSubtle};
    cursor:pointer;
    box-sizing:border-box;
  ">G Continue with Google</button>
`;
