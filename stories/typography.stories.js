import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Typography',
};

function specimen(tokenName, t, copy, extra) {
  const styleParts = [
    `font-family:'${t.fontFamily}',sans-serif`,
    `font-size:${t.fontSize}px`,
    `font-weight:${t.fontWeight}`,
    `line-height:${t.lineHeight}px`,
    `letter-spacing:${t.letterSpacing}em`,
    `color:#0f0f0f`,
  ];
  if (extra) styleParts.push(extra);
  const style = styleParts.join(';');
  return `
    <div style="border-bottom:1px solid #ebebeb;padding:16px 0;display:grid;grid-template-columns:160px 1fr 220px;gap:16px;align-items:center;">
      <div style="font-family:Inter,sans-serif;font-size:11px;font-weight:600;color:#808080;">${tokenName}</div>
      <div style="${style}">${copy}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#808080;line-height:1.5;">
        ${t.fontSize}px / ${t.lineHeight}px / ${t.fontWeight}<br>${t.fontFamily}
      </div>
    </div>
  `;
}

export const TypeScale = () => `
  <div style="padding:32px;background:#ffffff;font-family:Inter,sans-serif;">
    <h2 style="font-size:15px;font-weight:600;color:#0f0f0f;margin:0 0 4px;">Type Scale</h2>
    <p style="font-size:13px;color:#808080;margin:0 0 24px;">All 14 VoltVenture type styles — rendered with Google Fonts (Manjari, Inter, JetBrains Mono)</p>
    <div style="display:grid;grid-template-columns:160px 1fr 220px;gap:16px;padding-bottom:8px;border-bottom:2px solid #0f0f0f;margin-bottom:0;">
      <div style="font-family:Inter,sans-serif;font-size:11px;font-weight:700;color:#0f0f0f;text-transform:uppercase;letter-spacing:0.08em;">Token</div>
      <div style="font-family:Inter,sans-serif;font-size:11px;font-weight:700;color:#0f0f0f;text-transform:uppercase;letter-spacing:0.08em;">Specimen</div>
      <div style="font-family:Inter,sans-serif;font-size:11px;font-weight:700;color:#0f0f0f;text-transform:uppercase;letter-spacing:0.08em;">Metrics</div>
    </div>
    ${specimen('typeDisplayXl', tokens.typeDisplayXl, 'Good morning, Arjun')}
    ${specimen('typeDisplayLg', tokens.typeDisplayLg, 'Nearby Drivers')}
    ${specimen('typeDisplayMd', tokens.typeDisplayMd, 'Trip History')}
    ${specimen('typeNumericLg', tokens.typeNumericLg, '1,247', 'font-variant-numeric:tabular-nums')}
    ${specimen('typeNumericMd', tokens.typeNumericMd, '₹ 248.00', 'font-variant-numeric:tabular-nums')}
    ${specimen('typeHeadingLg', tokens.typeHeadingLg, 'My Rewards')}
    ${specimen('typeHeadingMd', tokens.typeHeadingMd, 'Booking Summary')}
    ${specimen('typeHeadingSm', tokens.typeHeadingSm, 'Payment Method')}
    ${specimen('typeBodyLg', tokens.typeBodyLg, 'Your driver is 2 minutes away')}
    ${specimen('typeBodyMd', tokens.typeBodyMd, 'Estimated arrival in 4 minutes')}
    ${specimen('typeBodySm', tokens.typeBodySm, 'Last updated 3 minutes ago')}
    ${specimen('typeLabelMd', tokens.typeLabelMd, 'Confirm Ride')}
    ${specimen('typeLabelSm', tokens.typeLabelSm, 'Cancel')}
    ${specimen('typeOverline', tokens.typeOverline, 'SAFETY STATUS', 'text-transform:uppercase')}
  </div>
`;
