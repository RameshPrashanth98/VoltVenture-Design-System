// Alpha fill — not in token system: #FFFFFF18 = rgba(255,255,255,0.09) — shield badge background
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/TrustPanel' };

function panel(ctaLabel) {
  return `
    <div style="
      background:${tokens.colorGrey900};
      border-radius:${tokens.radiusXl}px ${tokens.radiusXl}px 0 0;
      padding:${tokens.space600}px ${tokens.space400}px ${tokens.space800}px;
    ">
      <!-- Shield badge -->
      <div style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        width:56px;
        height:56px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.09); /* #FFFFFF18 — design alpha fill, no token */
        margin-bottom:${tokens.space400}px;
      ">&#x1F6E1;</div>
      <!-- Trust label -->
      <div style="
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        color:${tokens.colorTextOnInverse};
        margin-bottom:${tokens.space200}px;
      ">Secure Identity Scan</div>
      <!-- Reassurance text -->
      <div style="
        font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
        font-size:${tokens.typeBodySm.fontSize}px;
        color:${tokens.colorTextSecondary};
        margin-bottom:${tokens.space600}px;
      ">Your data is encrypted and never shared.</div>
      <!-- CTA button -->
      <button style="
        width:100%;
        min-height:${tokens.space1200}px;
        background:${tokens.colorSurfaceBase};
        color:${tokens.colorTextPrimary};
        border:none;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        cursor:pointer;
      ">${ctaLabel}</button>
    </div>
  `;
}

export const IdScan = () => panel('Scan My ID');
export const FacialScan = () => panel('Start Face Scan');

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// TrustPanel — HTML Source</div>${_blk('IdScan',IdScan())}${_blk('FacialScan',FacialScan())}</div>`;
