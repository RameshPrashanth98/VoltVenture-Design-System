import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/MapPin' };

export const RangePin = () => `
  <div style="
    display:inline-flex;
    align-items:center;
    gap:${tokens.space100}px;
    background:${tokens.colorGrey900};
    color:${tokens.colorTextOnInverse};
    padding:${tokens.space100}px ${tokens.space200}px;
    border-radius:${tokens.radiusFull}px;
  ">
    <span style="color:${tokens.colorActionPrimary};font-size:12px;">&#x26A1;</span>
    <span style="
      font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
    ">0.3 km</span>
  </div>
`;

export const SelectedPin = () => `
  <div style="
    position:relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:64px;
    height:64px;
  ">
    <!-- pulse ring -->
    <div style="
      position:absolute;
      width:56px;
      height:56px;
      border-radius:${tokens.radiusFull}px;
      background:rgba(198,255,45,0.20);
    "></div>
    <!-- pin badge -->
    <div style="
      position:relative;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusFull}px;
      padding:${tokens.space100}px ${tokens.space200}px;
      display:inline-flex;
      gap:${tokens.space100}px;
      align-items:center;
    ">
      <span style="font-size:12px;">&#x1F6B2;</span>
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextPrimary};
      ">VV-042</span>
    </div>
  </div>
`;
