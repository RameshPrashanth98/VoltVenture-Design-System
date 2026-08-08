import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Iconography' };

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

const SIZES = [
  { name: 'iconSizeXs', size: tokens.iconSizeXs, desc: 'Inline, badge' },
  { name: 'iconSizeSm', size: tokens.iconSizeSm, desc: 'Compact UI' },
  { name: 'iconSizeMd', size: tokens.iconSizeMd, desc: 'Default — 48dp canvas' },
  { name: 'iconSizeLg', size: tokens.iconSizeLg, desc: 'Feature callout' },
];

function iconCard(name, size, desc) {
  const isDefault = name === 'iconSizeMd';
  const canvasSize = isDefault ? tokens.iconCanvas : size;
  const padding = isDefault ? tokens.iconPadding : 0;
  const liveArea = isDefault ? tokens.iconLiveArea : size;

  const liveAreaInset = isDefault ? `
    <div style="
      position:absolute;
      top:${padding}px;left:${padding}px;
      width:${liveArea}px;height:${liveArea}px;
      border:1.5px dashed rgba(198,255,45,0.7);
      box-sizing:border-box;
    "></div>
  ` : '';

  // Centred cross-hair placeholder for glyph artwork
  const glyphPlaceholder = `
    <div style="
      position:absolute;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
      width:${Math.round(liveArea * 0.55)}px;
      height:${Math.round(liveArea * 0.55)}px;
      border:1.5px solid rgba(255,255,255,0.18);
      border-radius:3px;
    "></div>
  `;

  return `
    <div style="
      display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-5);
    ">
      <div style="
        width:${canvasSize}px;height:${canvasSize}px;
        background:linear-gradient(135deg,#c6ff2d 0%,#a0d818 100%);
        border-radius:${Math.round(canvasSize * 0.22)}px;
        position:relative;
        box-sizing:border-box;
        box-shadow:0 6px 20px rgba(198,255,45,0.3);
        flex-shrink:0;
      ">
        ${liveAreaInset}
        ${glyphPlaceholder}
      </div>

      <div style="text-align:center;">
        <div style="
          display:inline-block;
          background:var(--vv-color-surface-inverse);
          padding:var(--vv-space-2) 10px;
          border-radius:5px;
          ${mono};font-size:var(--vv-text-overline-size);color:var(--vv-color-action-primary);letter-spacing:0.03em;
          margin-bottom:6px;
        ">${name}</div>
        <div style="${mono};font-size:14px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);margin-bottom:var(--vv-space-2);">${size}dp</div>
        <div style="${sans};font-size:var(--vv-text-label-sm-size);color:#999;">${desc}</div>
      </div>
    </div>
  `;
}

export const IconSizes = () => `
  <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
    ${pageHeader('Iconography', '4 icon sizes on a 48dp canvas — glyph artwork lives in the 40dp live area')}
    <div style="background:var(--vv-color-surface-base);padding:56px 44px var(--vv-space-11);">

      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:56px var(--vv-space-11);
        align-items:flex-end;
        justify-content:flex-start;
        margin-bottom:var(--vv-space-10);
      ">
        ${SIZES.map(({ name, size, desc }) => iconCard(name, size, desc)).join('')}
      </div>

      <!-- Anatomy explainer -->
      <div style="
        padding:var(--vv-space-7) 28px;
        background:#f8f8f8;
        border-radius:14px;
        border:1px solid #ebebeb;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:var(--vv-space-6);
      ">
        <div>
          <div style="${sans};font-size:12px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);margin-bottom:var(--vv-space-3);">Canvas vs Live Area</div>
          <div style="${sans};font-size:12px;color:#888;line-height:1.6;">
            The <strong style="color:var(--vv-color-text-primary);">48dp canvas</strong> (iconSizeMd) is the
            touch-target bounding box. Glyph artwork must stay within the
            <strong style="color:var(--vv-color-text-primary);">40dp live area</strong> (4dp padding on each side).
            The dashed border on the green card above marks this boundary.
          </div>
        </div>
        <div>
          <div style="${sans};font-size:12px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);margin-bottom:var(--vv-space-3);">Token Reference</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="${mono};font-size:var(--vv-text-label-sm-size);color:#666;">iconCanvas → ${tokens.iconCanvas}dp</div>
            <div style="${mono};font-size:var(--vv-text-label-sm-size);color:#666;">iconPadding → ${tokens.iconPadding}dp</div>
            <div style="${mono};font-size:var(--vv-text-label-sm-size);color:#666;">iconLiveArea → ${tokens.iconLiveArea}dp</div>
            <div style="${mono};font-size:var(--vv-text-label-sm-size);color:#666;">iconSizeLg → ${tokens.iconSizeLg}dp (feature moments)</div>
          </div>
        </div>
      </div>

    </div>
  </div>
`;
