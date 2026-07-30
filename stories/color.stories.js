import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Color',
};

const swatch = (name, hex, label) => `
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
    <div style="width:48px;height:48px;border-radius:8px;background:${hex};border:1px solid #ebebeb;flex-shrink:0;"></div>
    <div>
      <div style="font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:#0f0f0f;">${name}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#808080;">${hex}</div>
      <div style="font-family:Inter,sans-serif;font-size:11px;color:#808080;">${label}</div>
    </div>
  </div>
`;

export const SemanticColors = () => `
  <div style="padding:24px;background:${tokens.colorSurfaceBase};">
    <h2 style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:#0f0f0f;margin:0 0 16px;">Semantic Colors</h2>
    ${swatch('colorActionPrimary', tokens.colorActionPrimary, 'Primary CTA — Electric Green')}
    ${swatch('colorTextPrimary', tokens.colorTextPrimary, 'Primary text — Volt Black')}
    ${swatch('colorTextSecondary', tokens.colorTextSecondary, 'Secondary text — Mid Gray')}
    ${swatch('colorSurfaceBase', tokens.colorSurfaceBase, 'Base light surface')}
    ${swatch('colorSurfaceSunken', tokens.colorSurfaceSunken, 'Recessed surface — input fields')}
    ${swatch('colorSurfaceRaised', tokens.colorSurfaceRaised, 'Elevated card surface')}
    ${swatch('colorSurfaceInverse', tokens.colorSurfaceInverse, 'Dark surface — tooltips, toasts')}
    ${swatch('colorBorderFocus', tokens.colorBorderFocus, 'Focus ring — always Electric Green')}
  </div>
`;

export const PrimitiveGreyRamp = () => `
  <div style="padding:24px;background:${tokens.colorSurfaceBase};">
    <h2 style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:#0f0f0f;margin:0 0 16px;">Primitive Grey Ramp</h2>
    ${swatch('colorGrey050', tokens.colorGrey050, 'Grey 050 — lightest')}
    ${swatch('colorGrey100', tokens.colorGrey100, 'Grey 100 — list row fill')}
    ${swatch('colorGrey200', tokens.colorGrey200, 'Grey 200 — dividers')}
    ${swatch('colorGrey300', tokens.colorGrey300, 'Grey 300 — disabled elements')}
    ${swatch('colorGrey500', tokens.colorGrey500, 'Grey 500 — Mid Gray / secondary text')}
    ${swatch('colorGrey700', tokens.colorGrey700, 'Grey 700 — dark surface borders')}
    ${swatch('colorGrey800', tokens.colorGrey800, 'Grey 800 — Charcoal')}
    ${swatch('colorGrey900', tokens.colorGrey900, 'Grey 900 — raised dark surface')}
    ${swatch('colorGrey950', tokens.colorGrey950, 'Grey 950 — Volt Black alias')}
  </div>
`;

export const PrimitiveGreenRamp = () => `
  <div style="padding:24px;">
    <h2 style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:#0f0f0f;margin:0 0 16px;">Primitive Green Ramp</h2>
    ${swatch('colorGreen100', tokens.colorGreen100, 'Green 100 — tint background')}
    ${swatch('colorGreen300', tokens.colorGreen300, 'Green 300 — hover/focus wash')}
    <div style="background:#0f0f0f;border-radius:8px;padding:12px;margin-bottom:8px;">
      ${swatch('colorGreen500', tokens.colorGreen500, 'Electric Green — foreground-safe on dark only')}
    </div>
    ${swatch('colorGreen600', tokens.colorGreen600, 'Green 600 — pressed state')}
    ${swatch('colorGreen700', tokens.colorGreen700, 'Green 700 — accessible text on white (4.6:1)')}
  </div>
`;
