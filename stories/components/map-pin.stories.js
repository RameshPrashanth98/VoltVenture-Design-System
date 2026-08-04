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

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// MapPin — HTML Source</div>${_blk('RangePin',RangePin())}${_blk('SelectedPin',SelectedPin())}</div>`;
