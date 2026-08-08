import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/PhoneInput' };

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

  // Inject @keyframes vv-blink once (idempotency guard)
  if (!document.getElementById('vv-blink-kf')) {
    const style = document.createElement('style');
    style.id = 'vv-blink-kf';
    style.textContent = '@keyframes vv-blink { 0%,100%{opacity:1} 50%{opacity:0} }';
    document.head.appendChild(style);
  }

  const { frame, screen } = makePhoneFrame();

  let digits = '';

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 var(--vv-space-5);box-sizing:border-box';

  // Visible display div
  const displayDiv = document.createElement('div');
  displayDiv.style.cssText = `background:${tokens.colorGrey050};border-radius:${tokens.radiusSm}px;padding:14px var(--vv-space-5);border:2px solid ${tokens.colorGrey200};transition:border-color var(--vv-duration-quick) var(--vv-easing-standard);box-sizing:border-box;width:100%;display:flex;align-items:center;cursor:text`;

  // Phone number display span
  const phoneSpan = document.createElement('span');
  phoneSpan.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyLg.fontSize}px;color:${tokens.colorTextSecondary};flex:1`;
  phoneSpan.textContent = '+1 (___) ___-____';

  // Blinking cursor
  const cursor = document.createElement('span');
  cursor.style.cssText = 'display:none;width:2px;height:20px;background:var(--vv-color-surface-inverse);vertical-align:middle;margin-left:var(--vv-space-1);animation:vv-blink 1s infinite;border-radius:1px';

  displayDiv.appendChild(phoneSpan);
  displayDiv.appendChild(cursor);

  // Hidden real input for keyboard capture
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'tel';
  hiddenInput.style.cssText = 'position:absolute;opacity:0;pointer-events:none;width:1px;height:1px';
  displayDiv.appendChild(hiddenInput);

  // Format phone number display
  function formatPhone(d) {
    if (d.length === 0) return '+1 (___) ___-____';
    const part1 = (d.slice(0, 3) + '___').slice(0, 3);
    const part2 = (d.slice(3, 6) + '___').slice(0, 3);
    const part3 = (d.slice(6, 10) + '____').slice(0, 4);
    return `+1 (${part1}) ${part2}-${part3}`;
  }

  // Events
  displayDiv.addEventListener('click', () => { hiddenInput.focus(); });
  hiddenInput.addEventListener('focus', () => {
    displayDiv.style.border = '2px solid #c6ff2d'; /* tokens.colorBorderFocus */
    cursor.style.display = 'inline-block';
  });
  hiddenInput.addEventListener('blur', () => {
    displayDiv.style.border = `2px solid ${tokens.colorGrey200}`;
    cursor.style.display = 'none';
  });
  hiddenInput.addEventListener('input', () => {
    digits = hiddenInput.value.replace(/\D/g, '').slice(0, 10);
    phoneSpan.textContent = formatPhone(digits);
    if (digits.length > 0) phoneSpan.style.color = tokens.colorTextPrimary;
    else phoneSpan.style.color = tokens.colorTextSecondary;
  });

  content.appendChild(displayDiv);
  screen.appendChild(content);
  return frame;
};

export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextSecondary};
    ">Mobile number</span>
  </div>
`;

export const Filled = () => `
  <div style="
    display:flex;
    align-items:center;
    background:${tokens.colorGrey050};
    border-radius:${tokens.radiusSm}px;
    padding:0 ${tokens.space400}px;
    min-height:${tokens.space1200}px;
    box-sizing:border-box;
    gap:${tokens.space300}px;
  ">
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">+91</span>
    <div style="width:${tokens.borderWidthHairline}px;height:20px;background:${tokens.colorBorderSubtle};"></div>
    <span style="
      font-family:'${tokens.typeBodyLg.fontFamily}',sans-serif;
      font-size:${tokens.typeBodyLg.fontSize}px;
      font-weight:${tokens.typeBodyLg.fontWeight};
      line-height:${tokens.typeBodyLg.lineHeight}px;
      color:${tokens.colorTextPrimary};
    ">98765 43210</span>
  </div>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// PhoneInput — HTML Source</div>${_blk('Default',Default())}${_blk('Filled',Filled())}</div>`;
