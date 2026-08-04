import * as tokens from '../../generated/tokens.js';

// Alpha fills — NOT in token system (design-layer values):
// #FFFFFF22 = rgba(255,255,255,0.13) — top nav button background
// #FFFFFF18 = rgba(255,255,255,0.09) — shield badge background in TrustPanel
// #00000088 = rgba(0,0,0,0.53)       — instructions banner background
// #FFFFFF33 = rgba(255,255,255,0.20) — ProgressStrip inactive segment

export default { title: 'Screens/FacialScan' };

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorGrey900};
    overflow:hidden;
    box-sizing:border-box;
  ">

    <!-- Dark top nav -->
    <div style="
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:${tokens.space400}px;
      padding-top:52px;
    ">
      <!-- Close button -->
      <div style="
        width:40px;
        height:40px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.13); /* #FFFFFF22 — design alpha fill, no token */
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      ">
        <span style="
          color:${tokens.colorTextOnInverse};
          font-size:${tokens.fontSizeHeadingMd}px;
          font-weight:${tokens.fontWeightHeadingMd};
          font-family:'${tokens.fontFamilyBody}',sans-serif;
          line-height:1;
        ">✕</span>
      </div>
      <!-- Flip-camera toggle button -->
      <div style="
        width:40px;
        height:40px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.13); /* #FFFFFF22 — design alpha fill, no token */
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      ">
        <span style="
          color:${tokens.colorTextOnInverse};
          font-size:18px;
          line-height:1;
        ">🔄</span>
      </div>
    </div>

    <!-- Step label + ProgressStrip -->
    <div style="padding:${tokens.space300}px ${tokens.space400}px;">
      <!-- Step label -->
      <div style="
        font-family:'${tokens.fontFamilyBody}',sans-serif;
        font-size:${tokens.fontSizeLabelMd}px;
        font-weight:${tokens.fontWeightLabelMd};
        line-height:${tokens.fontLineHeightLabelMd}px;
        color:${tokens.colorTextSecondary};
        margin-bottom:${tokens.space200}px;
      ">Step 2 of 2</div>
      <!-- ProgressStrip: Step 2 active — both segments lit -->
      <div style="display:flex;gap:${tokens.space200}px;">
        <div style="
          flex:1;
          height:4px;
          border-radius:${tokens.radiusXs}px;
          background:${tokens.colorSurfaceBase};
        "></div>
        <div style="
          flex:1;
          height:4px;
          border-radius:${tokens.radiusXs}px;
          background:${tokens.colorSurfaceBase};
        "></div>
      </div>
    </div>

    <!-- Camera viewport -->
    <div style="
      flex:1;
      position:relative;
      background:#111111;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <!-- Scan progress arc approximation: outer dashed ring -->
      <div style="
        position:absolute;
        width:204px;
        height:254px;
        border-radius:50%;
        border:2px dashed rgba(255,255,255,0.30);
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      "></div>

      <!-- Oval face guide: solid border in colorActionPrimary -->
      <div style="
        width:200px;
        height:250px;
        border-radius:50%;
        border:2px solid ${tokens.colorActionPrimary};
        position:relative;
      "></div>

      <!-- Instructions banner: absolute pill at bottom of viewport -->
      <div style="
        position:absolute;
        bottom:${tokens.space300}px;
        left:50%;
        transform:translateX(-50%);
        background:rgba(0,0,0,0.53); /* #00000088 — design alpha fill, no token */
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space200}px ${tokens.space400}px;
        white-space:nowrap;
      ">
        <span style="
          font-family:'${tokens.fontFamilyBody}',sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          line-height:${tokens.fontLineHeightLabelSm}px;
          color:${tokens.colorTextOnInverse};
        ">Center your face in the oval</span>
      </div>
    </div>

    <!-- TrustPanel — FacialScan variant -->
    <div style="
      background:${tokens.colorGrey900};
      border-radius:${tokens.radiusXl}px ${tokens.radiusXl}px 0 0;
      padding:${tokens.space600}px ${tokens.space400}px ${tokens.space800}px;
    ">
      <!-- Shield badge -->
      <div style="
        width:56px;
        height:56px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.09); /* #FFFFFF18 — design alpha fill, no token */
        display:inline-flex;
        align-items:center;
        justify-content:center;
        margin-bottom:${tokens.space400}px;
      ">🛡</div>
      <!-- Trust label -->
      <div style="
        font-family:'${tokens.fontFamilyBody}',sans-serif;
        font-size:${tokens.fontSizeHeadingSm}px;
        font-weight:${tokens.fontWeightHeadingSm};
        line-height:${tokens.fontLineHeightHeadingSm}px;
        color:${tokens.colorTextOnInverse};
        margin-bottom:${tokens.space200}px;
      ">Facial Recognition</div>
      <!-- Reassurance text -->
      <div style="
        font-family:'${tokens.fontFamilyBody}',sans-serif;
        font-size:${tokens.fontSizeBodySm}px;
        font-weight:${tokens.fontWeightBodySm};
        line-height:${tokens.fontLineHeightBodySm}px;
        color:${tokens.colorTextSecondary};
        margin-bottom:${tokens.space600}px;
      ">Your biometric data is processed locally.</div>
      <!-- CTA button -->
      <button style="
        width:100%;
        min-height:${tokens.space1200}px;
        background:${tokens.colorSurfaceBase};
        color:${tokens.colorTextPrimary};
        border:none;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.fontFamilyBody}',sans-serif;
        font-size:${tokens.fontSizeHeadingSm}px;
        font-weight:${tokens.fontWeightHeadingSm};
        cursor:pointer;
        box-sizing:border-box;
      ">Start Face Scan</button>
    </div>

  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Screens/FacialScan — Full Screen HTML</div>${_blk('Default',Default())}</div>`;
