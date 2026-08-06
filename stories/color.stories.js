import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Color' };

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

function isDark(hex) {
  if (!hex || hex[0] !== '#' || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 150;
}

function colorCard(name, hex, usage) {
  const hexLabel = isDark(hex) ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.4)';
  return `
    <div style="
      border-radius:14px;
      overflow:hidden;
      box-shadow:0 2px 12px rgba(0,0,0,0.09),0 1px 3px rgba(0,0,0,0.06);
      background:#fff;
      border:1px solid rgba(0,0,0,0.05);
      flex:1;
      min-width:148px;
      max-width:210px;
      display:flex;
      flex-direction:column;
    ">
      <div style="
        height:108px;
        background:${hex};
        display:flex;
        align-items:flex-end;
        padding:10px 14px;
        box-sizing:border-box;
        flex-shrink:0;
      ">
        <span style="${mono};font-size:10px;color:${hexLabel};font-weight:500;">${hex}</span>
      </div>
      <div style="padding:14px 16px;flex:1;">
        <div style="${mono};font-size:11px;font-weight:700;color:#0f0f0f;margin-bottom:4px;">${name}</div>
        <div style="${sans};font-size:11px;color:#888;line-height:1.45;">${usage}</div>
      </div>
    </div>
  `;
}

function rampCell(label, hex, desc, onDark) {
  const fg = isDark(hex) ? '#fff' : '#0f0f0f';
  const nameCol = onDark ? '#d0d0d0' : '#1a1a1a';
  const descCol = onDark ? '#777' : '#888';
  return `
    <div style="flex:1;min-width:72px;">
      <div style="
        height:80px;
        background:${hex};
        border-radius:10px;
        margin-bottom:10px;
        display:flex;
        align-items:flex-end;
        padding:7px 10px;
        box-sizing:border-box;
        border:1px solid rgba(${isDark(hex) ? '255,255,255' : '0,0,0'},0.07);
      ">
        <span style="${mono};font-size:9px;color:${fg};opacity:0.65;">${hex}</span>
      </div>
      <div style="${mono};font-size:10px;font-weight:700;color:${nameCol};margin-bottom:3px;">${label}</div>
      <div style="${sans};font-size:10px;color:${descCol};line-height:1.35;">${desc}</div>
    </div>
  `;
}

export const SemanticColors = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Semantic Colors', '8 design-decision tokens — reference these in all components, never primitives')}
    <div style="padding:36px 44px 48px;">
      <div style="display:flex;flex-wrap:wrap;gap:16px;">
        ${colorCard('colorActionPrimary',  tokens.colorActionPrimary,  'Primary CTA — Electric Green')}
        ${colorCard('colorTextPrimary',    tokens.colorTextPrimary,    'Primary text — Volt Black')}
        ${colorCard('colorTextSecondary',  tokens.colorTextSecondary,  'Secondary / muted text')}
        ${colorCard('colorSurfaceBase',    tokens.colorSurfaceBase,    'Base light surface')}
        ${colorCard('colorSurfaceSunken',  tokens.colorSurfaceSunken,  'Recessed — input fields')}
        ${colorCard('colorSurfaceRaised',  tokens.colorSurfaceRaised,  'Elevated card surface')}
        ${colorCard('colorSurfaceInverse', tokens.colorSurfaceInverse, 'Dark — tooltips, toasts')}
        ${colorCard('colorBorderFocus',    tokens.colorBorderFocus,    'Focus ring — Electric Green')}
      </div>
    </div>
  </div>
`;

export const PrimitiveGreyRamp = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Grey Ramp', 'Primitive grey scale — 9 steps from White to Volt Black')}
    <div style="padding:36px 44px 48px;">
      <div style="display:flex;gap:12px;align-items:flex-start;overflow-x:auto;padding-bottom:4px;">
        ${rampCell('050', tokens.colorGrey050, 'Lightest')}
        ${rampCell('100', tokens.colorGrey100, 'List row fill')}
        ${rampCell('200', tokens.colorGrey200, 'Dividers')}
        ${rampCell('300', tokens.colorGrey300, 'Disabled')}
        ${rampCell('500', tokens.colorGrey500, 'Mid Gray')}
        ${rampCell('700', tokens.colorGrey700, 'Dark borders')}
        ${rampCell('800', tokens.colorGrey800, 'Charcoal')}
        ${rampCell('900', tokens.colorGrey900, 'Dark surface')}
        ${rampCell('950', tokens.colorGrey950, 'Volt Black')}
      </div>
    </div>
  </div>
`;

export const PrimitiveGreenRamp = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#0f0f0f;min-height:100vh;">
    ${pageHeader('Electric Green Ramp', 'Brand energy scale — foreground-safe on dark backgrounds only')}
    <div style="padding:36px 44px 48px;">
      <div style="display:flex;gap:12px;align-items:flex-start;overflow-x:auto;padding-bottom:4px;">
        ${rampCell('100', tokens.colorGreen100, 'Tint bg', true)}
        ${rampCell('300', tokens.colorGreen300, 'Hover wash', true)}
        ${rampCell('500', tokens.colorGreen500, 'Electric Green', true)}
        ${rampCell('600', tokens.colorGreen600, 'Pressed state', true)}
        ${rampCell('700', tokens.colorGreen700, 'Text on white', true)}
      </div>
      <div style="
        margin-top:28px;
        padding:18px 22px;
        background:rgba(198,255,45,0.06);
        border:1px solid rgba(198,255,45,0.22);
        border-radius:10px;
        ${sans};font-size:12px;color:#888;line-height:1.65;
      ">
        <span style="color:#c6ff2d;font-weight:700;">Electric Green (#C6FF2D)</span>
        — WCAG AA pass on dark only. Use
        <span style="color:#c6ff2d;font-weight:700;">Green 700</span>
        for accessible body text on white backgrounds.
      </div>
    </div>
  </div>
`;
