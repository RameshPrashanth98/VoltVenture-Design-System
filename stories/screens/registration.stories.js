import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Registration' };

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
    padding:${tokens.space400}px;
  ">
    <!-- StatusBar (light surface) -->
    <div style="
      width:100%;
      height:44px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      background:${tokens.colorSurfaceBase};
      box-sizing:border-box;
      margin:0 -${tokens.space400}px;
      padding:0 ${tokens.space400}px;
      width:calc(100% + ${tokens.space400 * 2}px);
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

    <!-- Logo row: centered pill "V" badge -->
    <div style="
      display:flex;
      justify-content:center;
      margin:${tokens.space800}px 0 ${tokens.space400}px;
    ">
      <div style="
        width:40px;
        height:40px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorTextPrimary};
        display:inline-flex;
        align-items:center;
        justify-content:center;
      ">
        <span style="
          color:#ffffff;
          font-family:'${tokens.typeDisplayXl.fontFamily}',sans-serif;
          font-size:18px;
          font-weight:700;
          line-height:1;
        ">V</span>
      </div>
    </div>

    <!-- Page title in typeHeadingLg -->
    <div style="
      font-family:'${tokens.typeHeadingLg.fontFamily}',sans-serif;
      font-size:${tokens.typeHeadingLg.fontSize}px;
      font-weight:${tokens.typeHeadingLg.fontWeight};
      line-height:${tokens.typeHeadingLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
      text-align:center;
    ">Create your account</div>

    <!-- Subtitle in typeBodyMd -->
    <div style="
      font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyMd.fontSize}px;
      font-weight:${tokens.typeBodyMd.fontWeight};
      line-height:${tokens.typeBodyMd.lineHeight}px;
      color:${tokens.colorTextSecondary};
      text-align:center;
      margin-bottom:${tokens.space600}px;
      margin-top:${tokens.space200}px;
    ">Join VoltVenture and ride sustainably.</div>

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

    <!-- WhatsApp phone button: green pill -->
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
      font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyMd.fontSize}px;
      font-weight:${tokens.typeBodyMd.fontWeight};
      padding:0 ${tokens.space600}px;
    ">📱 Continue with WhatsApp</button>

    <!-- Email link: ghost-style button -->
    <button style="
      background:none;
      border:none;
      color:${tokens.colorTextPrimary};
      text-decoration:underline;
      cursor:pointer;
      width:100%;
      margin-top:${tokens.space200}px;
      font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyMd.fontSize}px;
      font-weight:${tokens.typeBodyMd.fontWeight};
      padding:${tokens.space200}px 0;
      box-sizing:border-box;
    ">Use email instead</button>

    <!-- Sign-in anchor: center-aligned secondary text -->
    <div style="
      text-align:center;
      font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
      font-size:${tokens.typeBodySm.fontSize}px;
      font-weight:${tokens.typeBodySm.fontWeight};
      color:${tokens.colorTextSecondary};
      margin-top:${tokens.space400}px;
    ">Already have an account? Sign in</div>

    <!-- Terms row: checkbox placeholder + terms text -->
    <div style="
      display:flex;
      gap:${tokens.space200}px;
      align-items:flex-start;
      margin-top:${tokens.space400}px;
    ">
      <!-- Checkbox placeholder -->
      <div style="
        width:16px;
        height:16px;
        border:${tokens.borderWidthHairline}px solid ${tokens.colorBorderSubtle};
        border-radius:4px;
        flex-shrink:0;
        margin-top:2px;
      "></div>
      <!-- Terms text -->
      <span style="
        font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
        font-size:${tokens.typeBodySm.fontSize}px;
        font-weight:${tokens.typeBodySm.fontWeight};
        color:${tokens.colorTextSecondary};
        line-height:${tokens.typeBodySm.lineHeight}px;
      ">I agree to the Terms of Service and Privacy Policy</span>
    </div>
  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Screens/Registration — Full Screen HTML</div>${_blk('Default',Default())}</div>`;
