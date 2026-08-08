import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Grid' };

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

function statCard(label, value, unit) {
  return `
    <div style="
      background:var(--vv-color-surface-base);
      border-radius:var(--vv-radius-sm);
      padding:18px var(--vv-space-6);
      border:1px solid #ebebeb;
      display:flex;
      flex-direction:column;
      gap:var(--vv-space-2);
      min-width:140px;
    ">
      <div style="${mono};font-size:var(--vv-text-heading-lg-size);font-weight:800;color:var(--vv-color-text-primary);line-height:1;">
        ${value}<span style="font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-body);color:#999;margin-left:3px;">${unit}</span>
      </div>
      <div style="${sans};font-size:var(--vv-text-label-sm-size);color:#888;">${label}</div>
    </div>
  `;
}

export const GridLayout = () => {
  const columns = Array.from({ length: tokens.gridColumns }, (_, i) => `
    <div style="
      flex:1;
      background:rgba(198,255,45,0.18);
      border-left:1px solid rgba(198,255,45,0.5);
      border-right:1px solid rgba(198,255,45,0.5);
      min-height:320px;
      display:flex;
      align-items:flex-start;
      justify-content:center;
      padding-top:10px;
      box-sizing:border-box;
    ">
      <span style="${mono};font-size:9px;color:rgba(198,255,45,0.7);">${i + 1}</span>
    </div>
  `).join('');

  const gutters = Array.from({ length: tokens.gridColumns - 1 }, () => `
    <div style="
      width:${tokens.gridGutter}px;
      min-height:320px;
      background:rgba(198,255,45,0.04);
      border-left:1px dashed rgba(198,255,45,0.15);
      border-right:1px dashed rgba(198,255,45,0.15);
      flex-shrink:0;
    "></div>
  `).join('');

  // Interleave columns and gutters
  const colsArr = Array.from({ length: tokens.gridColumns }, (_, i) => i);
  const interleaved = colsArr.map((i) => `
    <div style="
      flex:1;
      background:rgba(198,255,45,0.14);
      border:1px solid rgba(198,255,45,0.4);
      min-height:320px;
      display:flex;
      align-items:flex-start;
      justify-content:center;
      padding-top:10px;
      box-sizing:border-box;
    ">
      <span style="${mono};font-size:9px;color:rgba(198,255,45,0.8);">${i + 1}</span>
    </div>
    ${i < tokens.gridColumns - 1 ? `
    <div style="
      width:${tokens.gridGutter}px;
      flex-shrink:0;
      min-height:320px;
    "></div>` : ''}
  `).join('');

  return `
    <div style="${sans};max-width:980px;margin:0 auto;background:#f2f2f2;min-height:100vh;">
      ${pageHeader('Grid', '4-column layout system — 393dp iPhone reference with 20dp margins and 16dp gutters')}
      <div style="padding:36px 44px var(--vv-space-10);">

        <!-- Stats row -->
        <div style="display:flex;flex-wrap:wrap;gap:var(--vv-space-4);margin-bottom:36px;">
          ${statCard('Columns',      tokens.gridColumns,      'col')}
          ${statCard('Margin',       tokens.gridMargin,       'dp')}
          ${statCard('Gutter',       tokens.gridGutter,       'dp')}
          ${statCard('Content Width',tokens.gridContentWidth, 'dp')}
          ${statCard('Touch Target', tokens.gridTouchTarget,  'dp min')}
        </div>

        <!-- Phone frame -->
        <div style="
          display:flex;
          justify-content:center;
        ">
          <div style="
            width:393px;
            background:var(--ds-color-grey-900);
            border-radius:40px;
            padding:var(--vv-space-6) 0;
            box-shadow:0 24px 64px rgba(0,0,0,0.35),0 4px 16px rgba(0,0,0,0.2);
            overflow:hidden;
            box-sizing:border-box;
          ">
            <!-- Status bar area -->
            <div style="
              height:44px;
              display:flex;align-items:center;justify-content:space-between;
              padding:0 var(--vv-space-7);
              margin-bottom:var(--vv-space-2);
            ">
              <span style="${mono};font-size:var(--vv-text-label-sm-size);color:#fff;font-weight:var(--ds-font-weight-heading);">9:41</span>
              <div style="display:flex;gap:6px;align-items:center;">
                <div style="width:16px;height:8px;border:1px solid #fff;border-radius:2px;position:relative;">
                  <div style="width:10px;height:4px;background:#fff;border-radius:1px;position:absolute;top:1px;left:1px;"></div>
                </div>
              </div>
            </div>

            <!-- Grid canvas -->
            <div style="
              margin:0 ${tokens.gridMargin}px;
              background:#111;
              position:relative;
              overflow:hidden;
            ">
              <div style="display:flex;">
                ${interleaved}
              </div>
            </div>

            <!-- Labels -->
            <div style="
              padding:var(--vv-space-5) ${tokens.gridMargin}px 4px;
            ">
              <div style="${mono};font-size:9px;color:#666;letter-spacing:0.05em;">
                ←  ${tokens.gridMargin}dp  →  col  ←  ${tokens.gridGutter}dp  →  col  ←  ${tokens.gridGutter}dp  →  col  ←  ${tokens.gridGutter}dp  →  col  ←  ${tokens.gridMargin}dp  →
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
};
