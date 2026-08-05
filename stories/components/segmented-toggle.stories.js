import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SegmentedToggle' };

function makePhoneFrame() {
  const frame = document.createElement('div');
  frame.style.cssText = [
    'width:402px', 'height:874px', 'background:#0f0f0f',
    'border-radius:44px', 'padding:6px', 'box-sizing:border-box',
    'position:relative', 'overflow:hidden', 'display:inline-block',
    'font-family:Inter,sans-serif'
  ].join(';');
  const screen = document.createElement('div');
  screen.style.cssText = [
    'width:100%', 'height:100%', 'background:#ffffff',
    'border-radius:38px', 'overflow:hidden', 'position:relative',
    'display:flex', 'flex-direction:column'
  ].join(';');
  const bar = document.createElement('div');
  bar.style.cssText = [
    'flex-shrink:0', 'height:54px', 'background:#0f0f0f',
    'display:flex', 'align-items:center', 'justify-content:space-between',
    'padding:0 20px', 'box-sizing:border-box'
  ].join(';');
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;color:#ffffff;">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  let active = 'phone';

  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;align-items:center;justify-content:center;padding:0 16px;box-sizing:border-box';

  const toggleContainer = document.createElement('div');
  toggleContainer.style.cssText = `background:${tokens.colorGrey100};border-radius:999px;padding:4px;display:flex;width:100%`;

  const phoneTab = document.createElement('div');
  phoneTab.style.cssText = `background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};border-radius:999px;padding:10px 24px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;flex:1;text-align:center;cursor:pointer`;
  phoneTab.textContent = 'Phone';

  const emailTab = document.createElement('div');
  emailTab.style.cssText = `background:transparent;color:${tokens.colorTextSecondary};border-radius:999px;padding:10px 24px;font-size:15px;font-weight:600;font-family:Inter,sans-serif;flex:1;text-align:center;cursor:pointer`;
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
      padding:4px;
      gap:4px;
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
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// SegmentedToggle — HTML Source</div>${_blk('PhoneActive',PhoneActive())}${_blk('EmailActive',EmailActive())}</div>`;
