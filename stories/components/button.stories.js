import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/Button' };

export const Primary = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorActionPrimary};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:pointer;
    box-sizing:border-box;
  ">Book a Ride</button>
`;

export const Secondary = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorActionSecondary};
    color:${tokens.colorTextOnInverse};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:pointer;
    box-sizing:border-box;
  ">Continue</button>
`;

export const Ghost = () => `
  <button style="
    background:none;
    border:none;
    color:${tokens.colorTextPrimary};
    text-decoration:underline;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    cursor:pointer;
    padding:0;
  ">Sign in instead</button>
`;

export const Disabled = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorGrey200};
    color:${tokens.colorTextDisabled};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:not-allowed;
    box-sizing:border-box;
  " disabled>Book a Ride</button>
`;
