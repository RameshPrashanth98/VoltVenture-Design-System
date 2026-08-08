import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Spacing' };

const sans = "font-family:Inter,'Helvetica Neue',sans-serif";
const mono = "font-family:'JetBrains Mono','Courier New',monospace";

function pageHeader(title, sub) {
  return `
    <div style="background:var(--vv-color-surface-inverse);padding:36px 44px 30px;">
      <div style="${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.14em;text-transform:uppercase;margin-bottom:var(--vv-space-4);">
        Foundation · VoltVenture Design System
      </div>
      <h1 style="margin:0 0 var(--vv-space-3);${sans};font-size:38px;font-weight:800;color:var(--vv-color-text-on-inverse);letter-spacing:-0.02em;line-height:1;">
        ${title}
      </h1>
      <p style="margin:0;${sans};font-size:14px;color:#666;line-height:1.5;">${sub}</p>
    </div>
  `;
}

function spaceRow(name, value) {
  // Scale the bar: cap at 640px for readability, min 6px
  const barWidth = Math.min(Math.max(value * 3.5, 6), 640);
  return `
    <div style="
      display:grid;
      grid-template-columns:150px 1fr 72px;
      align-items:center;
      gap:var(--vv-space-6);
      padding:var(--vv-space-5) 0;
      border-bottom:1px solid #f0f0f0;
    ">
      <div style="
        display:inline-block;
        background:var(--vv-color-surface-inverse);
        padding:var(--vv-space-2) 10px;
        border-radius:5px;
        ${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.03em;
        white-space:nowrap;
      ">${name}</div>

      <div style="display:flex;align-items:center;gap:0;">
        <div style="
          width:3px;height:20px;background:var(--vv-color-surface-inverse);border-radius:2px;flex-shrink:0;
        "></div>
        <div style="
          width:${barWidth}px;
          height:20px;
          background:linear-gradient(90deg,#c6ff2d 0%,#a8e022 100%);
          flex-shrink:0;
        "></div>
        <div style="
          width:3px;height:20px;background:var(--vv-color-surface-inverse);border-radius:2px;flex-shrink:0;
        "></div>
      </div>

      <div style="
        ${mono};font-size:12px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);
        text-align:right;
        white-space:nowrap;
      ">${value}dp</div>
    </div>
  `;
}

export const SpacingRamp = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Spacing', '11 steps on a 4pt grid — use these for all margin, padding, and gap values')}
    <div style="background:var(--vv-color-surface-base);padding:36px 44px var(--vv-space-10);">

      <div style="
        display:grid;
        grid-template-columns:150px 1fr 72px;
        gap:var(--vv-space-6);
        padding-bottom:14px;
        border-bottom:2px solid #0f0f0f;
        margin-bottom:0;
      ">
        <div style="${sans};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:#999;text-transform:uppercase;letter-spacing:0.1em;">Token</div>
        <div style="${sans};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:#999;text-transform:uppercase;letter-spacing:0.1em;">Visual Scale</div>
        <div style="${sans};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:#999;text-transform:uppercase;letter-spacing:0.1em;text-align:right;">Value</div>
      </div>

      ${spaceRow('space050',  tokens.space050)}
      ${spaceRow('space100',  tokens.space100)}
      ${spaceRow('space200',  tokens.space200)}
      ${spaceRow('space300',  tokens.space300)}
      ${spaceRow('space400',  tokens.space400)}
      ${spaceRow('space500',  tokens.space500)}
      ${spaceRow('space600',  tokens.space600)}
      ${spaceRow('space800',  tokens.space800)}
      ${spaceRow('space1000', tokens.space1000)}
      ${spaceRow('space1200', tokens.space1200)}
      ${spaceRow('space1600', tokens.space1600)}
    </div>
  </div>
`;
