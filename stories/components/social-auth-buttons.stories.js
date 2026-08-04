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

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// SocialAuthButtons — HTML Source</div>${_blk('Apple',AppleButton())}${_blk('Google',GoogleButton())}</div>`;
