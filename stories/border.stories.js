import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Border' };

export const BorderWidths = () => `
  <div style="
    padding:32px;
    background:#ffffff;
    max-width:480px;
  ">

    <!-- borderWidthNone -->
    <div style="margin-bottom:32px;">
      <div style="
        font-family:Inter,sans-serif;
        font-size:13px;
        color:#808080;
        margin-bottom:8px;
      ">borderWidthNone — ${tokens.borderWidthNone}dp — no border <em>(not visible)</em></div>
      <div style="
        height:1px;
        background:transparent;
      "></div>
    </div>

    <!-- borderWidthHairline -->
    <div style="margin-bottom:32px;">
      <div style="
        border-bottom:${tokens.borderWidthHairline}px solid #0f0f0f;
        padding-bottom:8px;
        margin-bottom:8px;
      "></div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:13px;
        color:#808080;
      ">borderWidthHairline — ${tokens.borderWidthHairline}dp — dividers, outlined chips</div>
    </div>

    <!-- borderWidthStrong -->
    <div style="margin-bottom:32px;">
      <div style="
        border-bottom:${tokens.borderWidthStrong}px solid #0f0f0f;
        padding-bottom:8px;
        margin-bottom:8px;
      "></div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:13px;
        color:#808080;
      ">borderWidthStrong — ${tokens.borderWidthStrong}dp — input focus, selected card</div>
    </div>

    <!-- borderWidthFocus -->
    <div style="margin-bottom:32px;">
      <div style="
        background:#0f0f0f;
        padding:12px;
        border-radius:4px;
        margin-bottom:8px;
      ">
        <div style="
          border-bottom:${tokens.borderWidthFocus}px solid ${tokens.colorBorderFocus};
          padding-bottom:8px;
        "></div>
      </div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:13px;
        color:#808080;
      ">borderWidthFocus — ${tokens.borderWidthFocus}dp — focus ring, always Electric Green
        <span style="
          display:inline-block;
          width:12px;
          height:12px;
          background:${tokens.colorBorderFocus};
          border-radius:2px;
          vertical-align:middle;
          margin-left:4px;
        "></span>
        <span style="
          font-family:'JetBrains Mono',monospace;
          font-size:11px;
          color:#4a4a4a;
          margin-left:4px;
        ">${tokens.colorBorderFocus}</span>
      </div>
    </div>

  </div>
`;
