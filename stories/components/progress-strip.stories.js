// Alpha fill — not in token system: #FFFFFF33 = rgba(255,255,255,0.20) — inactive segment
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/ProgressStrip' };

function strip(activeStep) {
  const seg1 = activeStep >= 1
    ? `background:${tokens.colorSurfaceBase};`
    : `background:rgba(255,255,255,0.20); /* #FFFFFF33 — design alpha fill, no token */`;
  const seg2 = activeStep >= 2
    ? `background:${tokens.colorSurfaceBase};`
    : `background:rgba(255,255,255,0.20); /* #FFFFFF33 — design alpha fill, no token */`;
  return `
    <div style="
      background:${tokens.colorGrey900};
      padding:${tokens.space300}px ${tokens.space400}px;
    ">
      <div style="display:flex;gap:${tokens.space200}px;">
        <div style="flex:1;height:4px;border-radius:${tokens.radiusXs}px;${seg1}"></div>
        <div style="flex:1;height:4px;border-radius:${tokens.radiusXs}px;${seg2}"></div>
      </div>
    </div>
  `;
}

export const Step1Active = () => strip(1);
export const Step2Active = () => strip(2);

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// ProgressStrip — HTML Source</div>${_blk('Step1Active',Step1Active())}${_blk('Step2Active',Step2Active())}</div>`;
