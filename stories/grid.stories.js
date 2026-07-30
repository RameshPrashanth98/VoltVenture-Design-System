import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Grid',
};

export const GridLayout = () => {
  const columns = Array.from({ length: tokens.gridColumns }, () => `
    <div style="
      flex:1;
      background:rgba(198,255,45,0.15);
      min-height:200px;
    "></div>
  `).join('');

  return `
    <div style="
      position:relative;
      width:393px;
      background:#f5f5f5;
      padding-top:24px;
      padding-bottom:24px;
      margin:32px auto;
      font-family:Inter,sans-serif;
      box-sizing:border-box;
    ">
      <div style="
        font-size:14px;
        font-weight:600;
        color:#0f0f0f;
        padding:0 ${tokens.gridMargin}px 16px;
        font-family:Inter,sans-serif;
      ">4-Column Grid — 393dp Reference</div>

      <div style="
        margin:0 ${tokens.gridMargin}px;
        background:#ffffff;
        min-height:200px;
        position:relative;
        overflow:hidden;
      ">
        <div style="
          display:flex;
          gap:${tokens.gridGutter}px;
          min-height:200px;
        ">
          ${columns}
        </div>
      </div>

      <div style="
        padding:16px ${tokens.gridMargin}px 0;
        font-size:12px;
        color:#4a4a4a;
        font-family:Inter,sans-serif;
        line-height:20px;
      ">
        <div>gridColumns: ${tokens.gridColumns} columns</div>
        <div>gridMargin: ${tokens.gridMargin}dp (each side)</div>
        <div>gridGutter: ${tokens.gridGutter}dp</div>
        <div>gridContentWidth: ${tokens.gridContentWidth}dp</div>
        <div>gridTouchTarget: ${tokens.gridTouchTarget}dp minimum</div>
      </div>
    </div>
  `;
};
