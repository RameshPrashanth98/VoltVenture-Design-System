import * as tokens from '../generated/tokens.js';

export default { title: 'Foundation/Spacing' };

function bar(name, value) {
  return `
    <div style="margin-bottom:16px;">
      <div style="
        height:24px;
        width:${value}px;
        background-color:#c6ff2d;
        border-radius:4px;
      "></div>
      <div style="margin-top:6px;">
        <span style="
          font-family:Inter,sans-serif;
          font-size:11px;
          font-weight:600;
          color:#0f0f0f;
          margin-right:8px;
        ">${name}</span>
        <span style="
          font-family:'JetBrains Mono',monospace;
          font-size:11px;
          color:#808080;
        ">${value}dp</span>
      </div>
    </div>
  `;
}

export const SpacingRamp = () => `
  <div style="
    padding:32px;
    background:#ffffff;
    max-width:480px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
  ">
    ${bar('space050', tokens.space050)}
    ${bar('space100', tokens.space100)}
    ${bar('space200', tokens.space200)}
    ${bar('space300', tokens.space300)}
    ${bar('space400', tokens.space400)}
    ${bar('space500', tokens.space500)}
    ${bar('space600', tokens.space600)}
    ${bar('space800', tokens.space800)}
    ${bar('space1000', tokens.space1000)}
    ${bar('space1200', tokens.space1200)}
    ${bar('space1600', tokens.space1600)}
  </div>
`;
