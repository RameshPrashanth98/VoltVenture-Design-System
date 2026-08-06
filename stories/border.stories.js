import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Border' };

const sans = "font-family:Inter,'Helvetica Neue',sans-serif";
const mono = "font-family:'JetBrains Mono','Courier New',monospace";

function pageHeader(title, sub) {
  return `
    <div style="background:#0f0f0f;padding:36px 44px 30px;">
      <div style="${mono};font-size:10px;color:#c6ff2d;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:12px;">
        Foundation · VoltVenture Design System
      </div>
      <h1 style="margin:0 0 8px;${sans};font-size:38px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;line-height:1;">
        ${title}
      </h1>
      <p style="margin:0;${sans};font-size:14px;color:#666;line-height:1.5;">${sub}</p>
    </div>
  `;
}

function tokenPill(name) {
  return `<span style="display:inline-block;background:#0f0f0f;padding:3px 8px;border-radius:4px;${mono};font-size:10px;color:#c6ff2d;letter-spacing:0.03em;">${name}</span>`;
}

function sectionLabel(text) {
  return `<div style="${sans};font-size:10px;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px;">${text}</div>`;
}

export const BorderWidths = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Border', '4 border widths — hairline for structure, strong for selection, focus for accessibility')}
    <div style="background:#ffffff;padding:36px 44px 48px;display:flex;flex-direction:column;gap:48px;">

      <!-- borderWidthNone -->
      <div>
        ${sectionLabel('borderWidthNone — invisible, semantic zero')}
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="
            width:280px;height:52px;
            background:#f4f4f4;
            border-radius:10px;
            display:flex;align-items:center;padding:0 16px;
            box-sizing:border-box;
          ">
            <span style="${sans};font-size:13px;color:#bbb;">No border visible</span>
          </div>
          <div>
            ${tokenPill('borderWidthNone')}
            <div style="${mono};font-size:12px;color:#999;margin-top:6px;">${tokens.borderWidthNone}dp — semantic zero</div>
          </div>
        </div>
      </div>

      <!-- borderWidthHairline -->
      <div>
        ${sectionLabel('borderWidthHairline — dividers, outlined chips')}
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="
            width:280px;height:52px;
            background:#ffffff;
            border:${tokens.borderWidthHairline}px solid #0f0f0f;
            border-radius:10px;
            display:flex;align-items:center;padding:0 16px;
            box-sizing:border-box;
          ">
            <span style="${sans};font-size:13px;color:#808080;">Input field — resting</span>
          </div>
          <div>
            ${tokenPill('borderWidthHairline')}
            <div style="${mono};font-size:12px;color:#999;margin-top:6px;">${tokens.borderWidthHairline}dp — dividers, outlined chips</div>
          </div>
        </div>
      </div>

      <!-- borderWidthStrong -->
      <div>
        ${sectionLabel('borderWidthStrong — selected cards, active input')}
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="
            width:280px;height:52px;
            background:#ffffff;
            border:${tokens.borderWidthStrong}px solid #0f0f0f;
            border-radius:10px;
            display:flex;align-items:center;padding:0 16px;
            box-sizing:border-box;
          ">
            <span style="${sans};font-size:13px;color:#0f0f0f;">Input field — active</span>
          </div>
          <div>
            ${tokenPill('borderWidthStrong')}
            <div style="${mono};font-size:12px;color:#999;margin-top:6px;">${tokens.borderWidthStrong}dp — selected state</div>
          </div>
        </div>
      </div>

      <!-- borderWidthFocus -->
      <div>
        ${sectionLabel('borderWidthFocus — Electric Green focus ring (accessibility)')}
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="
            background:#0f0f0f;
            padding:20px 20px;
            border-radius:14px;
            display:inline-flex;
            align-items:center;
            gap:16px;
          ">
            <div style="
              width:280px;height:52px;
              background:#1a1a1a;
              border:${tokens.borderWidthFocus}px solid ${tokens.colorBorderFocus};
              border-radius:10px;
              display:flex;align-items:center;padding:0 16px;
              box-sizing:border-box;
            ">
              <span style="${sans};font-size:13px;color:#ffffff;">Input field — focused</span>
            </div>
          </div>
          <div>
            ${tokenPill('borderWidthFocus')}
            <div style="${mono};font-size:12px;color:#999;margin-top:6px;">${tokens.borderWidthFocus}dp · ${tokens.colorBorderFocus}</div>
            <div style="
              margin-top:8px;
              display:flex;align-items:center;gap:6px;
            ">
              <div style="
                width:14px;height:14px;
                background:${tokens.colorBorderFocus};
                border-radius:3px;
                flex-shrink:0;
              "></div>
              <span style="${sans};font-size:11px;color:#888;">Always Electric Green — never override</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
`;
