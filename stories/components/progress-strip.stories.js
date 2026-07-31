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
