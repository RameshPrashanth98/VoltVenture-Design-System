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

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Button — HTML Source</div>${_blk('Primary',Primary())}${_blk('Secondary',Secondary())}${_blk('Ghost',Ghost())}${_blk('Disabled',Disabled())}</div>`;
