import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Iconography',
};

const ICON_SIZES = [
  { name: 'iconSizeXs', size: tokens.iconSizeXs },
  { name: 'iconSizeSm', size: tokens.iconSizeSm },
  { name: 'iconSizeMd', size: tokens.iconSizeMd },
  { name: 'iconSizeLg', size: tokens.iconSizeLg },
];

export const IconSizes = () => {
  const boxes = ICON_SIZES.map(({ name, size }) => {
    const isDefault = name === 'iconSizeMd';
    const liveAreaInset = isDefault ? `
      <div style="
        position:absolute;
        top:${tokens.iconPadding}px;
        left:${tokens.iconPadding}px;
        width:${tokens.iconLiveArea}px;
        height:${tokens.iconLiveArea}px;
        border:1px dashed #808080;
        background:transparent;
        box-sizing:border-box;
      "></div>
    ` : '';

    return `
      <div style="
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:8px;
      ">
        <div style="
          width:${size}px;
          height:${size}px;
          background:#ebebeb;
          border:1px solid #c9c9c9;
          position:relative;
          box-sizing:border-box;
          flex-shrink:0;
        ">
          ${liveAreaInset}
        </div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:11px;
          font-weight:600;
          color:#0f0f0f;
          text-align:center;
        ">${name}</div>
        <div style="
          font-family:'JetBrains Mono',monospace;
          font-size:11px;
          color:#808080;
          text-align:center;
        ">${size}dp</div>
      </div>
    `;
  }).join('');

  return `
    <div style="
      padding:32px;
      background:#ffffff;
      font-family:Inter,sans-serif;
    ">
      <div style="
        font-size:15px;
        font-weight:600;
        color:#0f0f0f;
        margin-bottom:24px;
        font-family:Inter,sans-serif;
      ">Iconography Size System</div>

      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:32px;
        align-items:flex-end;
        margin-bottom:24px;
      ">
        ${boxes}
      </div>

      <div style="
        font-size:12px;
        color:#808080;
        font-family:Inter,sans-serif;
        line-height:18px;
        border-top:1px solid #ebebeb;
        padding-top:16px;
      ">
        <div>iconCanvas: ${tokens.iconCanvas}dp — default canvas bounding box. The dashed inner box shows the ${tokens.iconLiveArea}dp live area (${tokens.iconPadding}dp padding on all sides). Glyph artwork must not exceed the live area.</div>
        <div style="margin-top:4px;">iconSizeLg: ${tokens.iconSizeLg}dp — feature callouts and large icon moments.</div>
      </div>
    </div>
  `;
};
