import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Typography' };

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

function specimen(tokenName, t, copy, extra) {
  const styleParts = [
    `font-family:'${t.fontFamily}',sans-serif`,
    `font-size:${t.fontSize}px`,
    `font-weight:${t.fontWeight}`,
    `line-height:${t.lineHeight}px`,
    `letter-spacing:${t.letterSpacing}em`,
    `color:var(--vv-color-text-primary)`,
    `word-break:break-word`,
  ];
  if (extra) styleParts.push(extra);
  const specimenStyle = styleParts.join(';');

  return `
    <div style="
      padding:22px 0;
      border-bottom:1px solid #ebebeb;
      display:grid;
      grid-template-columns:200px 1fr 160px;
      gap:28px;
      align-items:center;
    ">
      <div>
        <div style="
          display:inline-block;
          background:var(--vv-color-surface-inverse);
          padding:var(--vv-space-2) 10px;
          border-radius:5px;
          ${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.03em;
        ">${tokenName}</div>
      </div>
      <div style="${specimenStyle}">${copy}</div>
      <div style="
        background:#f4f4f4;
        border-radius:10px;
        padding:10px 14px;
        text-align:right;
      ">
        <div style="${mono};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);">
          ${t.fontSize}px / ${t.fontWeight}
        </div>
        <div style="${mono};font-size:var(--vv-text-overline-size);color:#999;margin-top:3px;">
          ${t.lineHeight}px leading
        </div>
        <div style="${mono};font-size:var(--vv-text-overline-size);color:#bbb;margin-top:3px;">
          ${t.fontFamily}
        </div>
      </div>
    </div>
  `;
}

export const TypeScale = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Type Scale', '14 styles — Manjari for display, Inter for UI, JetBrains Mono for code & numerics')}
    <div style="background:var(--vv-color-surface-base);padding:36px 44px var(--vv-space-10);">

      <div style="
        display:grid;
        grid-template-columns:200px 1fr 160px;
        gap:28px;
        padding-bottom:14px;
        border-bottom:2px solid #0f0f0f;
      ">
        <div style="${sans};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:#999;text-transform:uppercase;letter-spacing:0.1em;">Token</div>
        <div style="${sans};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:#999;text-transform:uppercase;letter-spacing:0.1em;">Specimen</div>
        <div style="${sans};font-size:var(--vv-text-overline-size);font-weight:var(--ds-font-weight-display);color:#999;text-transform:uppercase;letter-spacing:0.1em;text-align:right;">Metrics</div>
      </div>

      ${specimen('typeDisplayXl',  tokens.typeDisplayXl,  'Good morning, Arjun')}
      ${specimen('typeDisplayLg',  tokens.typeDisplayLg,  'Nearby Drivers')}
      ${specimen('typeDisplayMd',  tokens.typeDisplayMd,  'Trip History')}
      ${specimen('typeNumericLg',  tokens.typeNumericLg,  '₹ 1,247', 'font-variant-numeric:tabular-nums')}
      ${specimen('typeNumericMd',  tokens.typeNumericMd,  '₹ 248.00', 'font-variant-numeric:tabular-nums')}
      ${specimen('typeHeadingLg',  tokens.typeHeadingLg,  'My Rewards')}
      ${specimen('typeHeadingMd',  tokens.typeHeadingMd,  'Booking Summary')}
      ${specimen('typeHeadingSm',  tokens.typeHeadingSm,  'Payment Method')}
      ${specimen('typeBodyLg',     tokens.typeBodyLg,     'Your driver is 2 minutes away')}
      ${specimen('typeBodyMd',     tokens.typeBodyMd,     'Estimated arrival in 4 minutes')}
      ${specimen('typeBodySm',     tokens.typeBodySm,     'Last updated 3 minutes ago')}
      ${specimen('typeLabelMd',    tokens.typeLabelMd,    'Confirm Ride')}
      ${specimen('typeLabelSm',    tokens.typeLabelSm,    'Cancel')}
      ${specimen('typeOverline',   tokens.typeOverline,   'SAFETY STATUS', 'text-transform:uppercase')}
    </div>
  </div>
`;
