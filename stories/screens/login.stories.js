import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Login' };

// PhoneTab and EmailTab share identical markup except which toggle segment is active.
// Frame yfZaz (Phone tab active) and TS9Td (Email tab active) are design review duplicates
// in the .pen file — mapped here to a single file with two named exports.
function loginScreen(activeTab) {
  const phoneSegStyle = activeTab === 'phone'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  const emailSegStyle = activeTab === 'email'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;

  // Phone input label differs slightly per tab
  const inputHint = activeTab === 'phone' ? 'Mobile number' : 'Email address';
  const inputPrefix = activeTab === 'phone'
    ? `<span style="
        font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyLg.fontSize}px;
        font-weight:${tokens.typeBodyLg.fontWeight};
        color:${tokens.colorTextPrimary};
      ">+91</span>
      <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};flex-shrink:0;"></div>`
    : '';

  return `
    <div style="
      width:393px;
      min-height:852px;
      display:flex;
      flex-direction:column;
      background:${tokens.colorSurfaceBase};
      box-sizing:border-box;
      padding:0 ${tokens.space400}px ${tokens.space800}px;
    ">
      <!-- StatusBar (light surface) -->
      <div style="
        height:44px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:${tokens.colorSurfaceBase};
        box-sizing:border-box;
        margin:0 -${tokens.space400}px;
        padding:0 ${tokens.space400}px;
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

      <!-- Header row: back arrow + "Sign in" title -->
      <div style="
        display:flex;
        align-items:center;
        gap:${tokens.space300}px;
        padding:${tokens.space400}px 0;
        margin-bottom:${tokens.space600}px;
      ">
        <span style="
          font-size:20px;
          color:${tokens.colorTextPrimary};
          cursor:pointer;
        ">←</span>
        <span style="
          font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:${tokens.typeHeadingMd.fontWeight};
          line-height:${tokens.typeHeadingMd.lineHeight}px;
          color:${tokens.colorTextPrimary};
        ">Sign in</span>
      </div>

      <!-- Apple button: green pill -->
      <button style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:${tokens.space200}px;
        background:${tokens.colorActionPrimary};
        color:${tokens.colorTextPrimary};
        border-radius:${tokens.radiusFull}px;
        min-height:${tokens.space1200}px;
        width:100%;
        border:none;
        cursor:pointer;
        box-sizing:border-box;
        margin-bottom:${tokens.space300}px;
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        padding:0 ${tokens.space600}px;
      "> Continue with Apple</button>

      <!-- Google button: white pill with border -->
      <button style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:${tokens.space200}px;
        background:${tokens.colorSurfaceBase};
        color:${tokens.colorTextPrimary};
        border:${tokens.borderWidthHairline}px solid ${tokens.colorBorderSubtle};
        border-radius:${tokens.radiusFull}px;
        min-height:${tokens.space1200}px;
        width:100%;
        cursor:pointer;
        box-sizing:border-box;
        margin-bottom:${tokens.space400}px;
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        padding:0 ${tokens.space600}px;
      ">G  Continue with Google</button>

      <!-- OR divider -->
      <div style="
        display:flex;
        align-items:center;
        gap:${tokens.space300}px;
        margin-bottom:${tokens.space400}px;
      ">
        <div style="flex:1;height:${tokens.borderWidthHairline}px;background:${tokens.colorBorderSubtle};"></div>
        <span style="
          font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorTextSecondary};
        ">OR</span>
        <div style="flex:1;height:${tokens.borderWidthHairline}px;background:${tokens.colorBorderSubtle};"></div>
      </div>

      <!-- SegmentedToggle: Phone / Email -->
      <div style="
        display:flex;
        background:${tokens.colorGrey100};
        border-radius:${tokens.radiusFull}px;
        padding:4px;
        gap:4px;
        margin:${tokens.space400}px 0;
      ">
        <div style="
          flex:1;
          padding:${tokens.space200}px ${tokens.space400}px;
          border-radius:${tokens.radiusFull}px;
          text-align:center;
          font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
          font-size:${tokens.typeHeadingSm.fontSize}px;
          font-weight:${tokens.typeHeadingSm.fontWeight};
          cursor:pointer;
          ${phoneSegStyle}
        ">Phone</div>
        <div style="
          flex:1;
          padding:${tokens.space200}px ${tokens.space400}px;
          border-radius:${tokens.radiusFull}px;
          text-align:center;
          font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
          font-size:${tokens.typeHeadingSm.fontSize}px;
          font-weight:${tokens.typeHeadingSm.fontWeight};
          cursor:pointer;
          ${emailSegStyle}
        ">Email</div>
      </div>

      <!-- Input row (phone number or email depending on activeTab) -->
      <div style="
        background:${tokens.colorGrey050};
        border-radius:${tokens.radiusSm}px;
        display:flex;
        align-items:center;
        min-height:${tokens.space1200}px;
        padding:0 ${tokens.space400}px;
        margin-bottom:${tokens.space400}px;
        gap:${tokens.space300}px;
        box-sizing:border-box;
      ">
        ${inputPrefix}
        <span style="
          font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
          font-size:${tokens.typeBodyLg.fontSize}px;
          font-weight:${tokens.typeBodyLg.fontWeight};
          color:${tokens.colorTextSecondary};
        ">${inputHint}</span>
      </div>

      <!-- Continue button: green pill -->
      <button style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        background:${tokens.colorActionPrimary};
        color:${tokens.colorTextPrimary};
        border-radius:${tokens.radiusFull}px;
        min-height:${tokens.space1200}px;
        width:100%;
        border:none;
        cursor:pointer;
        box-sizing:border-box;
        margin-bottom:${tokens.space400}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
      ">Continue</button>

      <!-- Sign-up anchor: center-aligned secondary text -->
      <div style="
        text-align:center;
        font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
        font-size:${tokens.typeBodySm.fontSize}px;
        font-weight:${tokens.typeBodySm.fontWeight};
        color:${tokens.colorTextSecondary};
      ">Don't have an account? Sign up</div>
    </div>
  `;
}

export const PhoneTab = () => loginScreen('phone');
export const EmailTab = () => loginScreen('email');

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Screens/Login — Full Screen HTML</div>${_blk('PhoneTab',PhoneTab())}${_blk('EmailTab',EmailTab())}</div>`;
