import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SegmentedToggle' };

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
  let active = 'phone';

  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;padding:0 var(--vv-space-5);box-sizing:border-box';

  const toggleContainer = document.createElement('div');
  toggleContainer.style.cssText = `background:${tokens.colorGrey100};border-radius:var(--vv-radius-full);padding:var(--vv-space-2);display:flex;width:100%`;

  const phoneTab = document.createElement('div');
  phoneTab.style.cssText = `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};border-radius:var(--vv-radius-full);padding:10px var(--vv-space-7);font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);font-family:Inter,sans-serif;flex:1;text-align:center;cursor:pointer`;
  phoneTab.textContent = 'Phone';

  const emailTab = document.createElement('div');
  emailTab.style.cssText = `background:transparent;color:${tokens.colorTextSecondary};border-radius:var(--vv-radius-full);padding:10px var(--vv-space-7);font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);font-family:Inter,sans-serif;flex:1;text-align:center;cursor:pointer`;
  emailTab.textContent = 'Email';

  phoneTab.addEventListener('click', () => {
    active = 'phone';
    phoneTab.style.background = tokens.colorActionPrimary;
    phoneTab.style.color = tokens.colorTextPrimary;
    emailTab.style.background = 'transparent';
    emailTab.style.color = tokens.colorTextSecondary;
  });

  emailTab.addEventListener('click', () => {
    active = 'email';
    emailTab.style.background = tokens.colorActionPrimary;
    emailTab.style.color = tokens.colorTextPrimary;
    phoneTab.style.background = 'transparent';
    phoneTab.style.color = tokens.colorTextSecondary;
  });

  toggleContainer.appendChild(phoneTab);
  toggleContainer.appendChild(emailTab);
  content.appendChild(toggleContainer);
  screen.appendChild(content);
  return frame;
};

function toggle(activeTab) {
  const phoneStyle = activeTab === 'phone'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  const emailStyle = activeTab === 'email'
    ? `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};`
    : `background:transparent;color:${tokens.colorTextSecondary};`;
  return `
    <div style="
      display:inline-flex;
      background:${tokens.colorGrey100};
      border-radius:${tokens.radiusFull}px;
      padding:var(--vv-space-2);
      gap:var(--vv-space-2);
    ">
      <div style="
        padding:${tokens.space200}px ${tokens.space400}px;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        ${phoneStyle}
      ">Phone</div>
      <div style="
        padding:${tokens.space200}px ${tokens.space400}px;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:${tokens.typeHeadingSm.fontWeight};
        ${emailStyle}
      ">Email</div>
    </div>
  `;
}

export const PhoneActive = () => toggle('phone');
export const EmailActive = () => toggle('email');

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// SegmentedToggle — HTML Source</div>${_blk('PhoneActive',PhoneActive())}${_blk('EmailActive',EmailActive())}</div>`;
