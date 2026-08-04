import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/PhoneInput' };

export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextSecondary};
    ">Mobile number</span>
  </div>
`;

export const Filled = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">98765 43210</span>
  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// PhoneInput — HTML Source</div>${_blk('Default',Default())}${_blk('Filled',Filled())}</div>`;
