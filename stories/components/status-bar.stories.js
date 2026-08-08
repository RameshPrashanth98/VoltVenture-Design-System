import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/StatusBar' };

function makePhoneFrame() {
  const frame = document.createElement('div');
  frame.style.cssText = [
    'width:402px', 'height:874px', 'background:var(--vv-color-surface-inverse)',
    'border-radius:44px', 'padding:6px', 'box-sizing:border-box',
    'position:relative', 'overflow:hidden', 'display:inline-block',
    'font-family:Inter,sans-serif'
  ].join(';');
  const screen = document.createElement('div');
  screen.style.cssText = [
    'width:100%', 'height:100%', 'background:var(--vv-color-surface-base)',
    'border-radius:38px', 'overflow:hidden', 'position:relative',
    'display:flex', 'flex-direction:column'
  ].join(';');
  const bar = document.createElement('div');
  bar.style.cssText = [
    'flex-shrink:0', 'height:54px', 'background:var(--vv-color-surface-inverse)',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'padding:0 var(--vv-space-6)', 'box-sizing:border-box'
  ].join(';');
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;color:var(--vv-color-text-on-inverse);">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-text-on-inverse);">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;background:var(--vv-color-surface-base)';
  const label = document.createElement('span');
  label.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-body-sm-size);color:var(--vv-color-text-secondary)'; /* tokens.colorTextSecondary */
  label.textContent = 'Screen content';
  content.appendChild(label);
  screen.appendChild(content);
  return frame;
};

export const LightSurface = () => `
  <div style="
    width:393px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 ${tokens.space400}px;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
  ">
    <span style="
      font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
      font-size:${tokens.typeLabelMd.fontSize}px;
      font-weight:${tokens.typeLabelMd.fontWeight};
      line-height:${tokens.typeLabelMd.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">9:41</span>
    <span style="
      font-size:${tokens.typeLabelSm.fontSize}px;
      color:${tokens.colorTextPrimary};
      letter-spacing:2px;
    ">&#9650; WiFi &#9646;</span>
  </div>
`;

export const DarkSurface = () => `
  <div style="
    background:${tokens.colorGrey900};
    display:inline-block;
  ">
    <div style="
      width:393px;
      height:44px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 ${tokens.space400}px;
      background:transparent;
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        line-height:${tokens.typeLabelMd.lineHeight}px;
        color:${tokens.colorTextOnInverse};
      ">9:41</span>
      <span style="
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorTextOnInverse};
        letter-spacing:2px;
      ">&#9650; WiFi &#9646;</span>
    </div>
  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// StatusBar — HTML Source</div>${_blk('LightSurface',LightSurface())}${_blk('DarkSurface',DarkSurface())}</div>`;
