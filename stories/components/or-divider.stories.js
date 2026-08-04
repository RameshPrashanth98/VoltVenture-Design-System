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

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// OrDivider — HTML Source</div>${_blk('Default',Default())}</div>`;
