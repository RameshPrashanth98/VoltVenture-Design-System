import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/Button' };

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
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--vv-space-5);padding:0 var(--vv-space-5);box-sizing:border-box';

  // Primary button
  const primaryBtn = document.createElement('button');
  primaryBtn.style.cssText = `width:100%;height:48px;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;cursor:pointer;border:none;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};transition:transform var(--vv-duration-fast) var(--vv-easing-standard),background-color var(--vv-duration-fast) var(--vv-easing-standard);box-sizing:border-box`;
  primaryBtn.textContent = 'Book a Ride';
  primaryBtn.addEventListener('pointerdown', () => { primaryBtn.style.backgroundColor = 'var(--vv-color-action-primary-pressed)'; primaryBtn.style.transform = 'scale(0.97)'; });
  primaryBtn.addEventListener('pointerup', () => { primaryBtn.style.backgroundColor = tokens.colorActionPrimary; primaryBtn.style.transform = 'scale(1)'; });
  primaryBtn.addEventListener('pointerleave', () => { primaryBtn.style.backgroundColor = tokens.colorActionPrimary; primaryBtn.style.transform = 'scale(1)'; });

  // Secondary button
  const secondaryBtn = document.createElement('button');
  secondaryBtn.style.cssText = `width:100%;height:48px;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;cursor:pointer;border:none;background:${tokens.colorActionSecondary};color:${tokens.colorTextOnInverse};transition:transform var(--vv-duration-fast) var(--vv-easing-standard),background-color var(--vv-duration-fast) var(--vv-easing-standard);box-sizing:border-box`;
  secondaryBtn.textContent = 'Continue';
  secondaryBtn.addEventListener('pointerdown', () => { secondaryBtn.style.backgroundColor = tokens.colorGrey800; secondaryBtn.style.transform = 'scale(0.97)'; });
  secondaryBtn.addEventListener('pointerup', () => { secondaryBtn.style.backgroundColor = tokens.colorActionSecondary; secondaryBtn.style.transform = 'scale(1)'; });
  secondaryBtn.addEventListener('pointerleave', () => { secondaryBtn.style.backgroundColor = tokens.colorActionSecondary; secondaryBtn.style.transform = 'scale(1)'; });

  // Ghost button
  const ghostBtn = document.createElement('button');
  ghostBtn.style.cssText = `width:100%;height:48px;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;cursor:pointer;background:none;border:1px solid ${tokens.colorBorderSubtle};color:${tokens.colorTextPrimary};transition:opacity var(--vv-duration-fast) var(--vv-easing-standard);box-sizing:border-box`;
  ghostBtn.textContent = 'Sign in instead';
  ghostBtn.addEventListener('pointerdown', () => { ghostBtn.style.opacity = '0.6'; });
  ghostBtn.addEventListener('pointerup', () => { ghostBtn.style.opacity = '1'; });
  ghostBtn.addEventListener('pointerleave', () => { ghostBtn.style.opacity = '1'; });

  // Disabled button
  const disabledBtn = document.createElement('button');
  disabledBtn.style.cssText = `width:100%;height:48px;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;border:none;background:${tokens.colorGrey200};color:${tokens.colorTextDisabled};pointer-events:none;box-sizing:border-box`;
  disabledBtn.textContent = 'Book a Ride';

  content.appendChild(primaryBtn);
  content.appendChild(secondaryBtn);
  content.appendChild(ghostBtn);
  content.appendChild(disabledBtn);
  screen.appendChild(content);
  return frame;
};

export const Primary = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorActionPrimary};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:pointer;
    box-sizing:border-box;
  ">Book a Ride</button>
`;

export const Secondary = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorActionSecondary};
    color:${tokens.colorTextOnInverse};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:pointer;
    box-sizing:border-box;
  ">Continue</button>
`;

export const Ghost = () => `
  <button style="
    background:none;
    border:none;
    color:${tokens.colorTextPrimary};
    text-decoration:underline;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    cursor:pointer;
    padding:0;
  ">Sign in instead</button>
`;

export const Disabled = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    background:${tokens.colorGrey200};
    color:${tokens.colorTextDisabled};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
    font-size:${tokens.typeHeadingSm.fontSize}px;
    font-weight:${tokens.typeHeadingSm.fontWeight};
    line-height:${tokens.typeHeadingSm.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:not-allowed;
    box-sizing:border-box;
  " disabled>Book a Ride</button>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Button — HTML Source</div>${_blk('Primary',Primary())}${_blk('Secondary',Secondary())}${_blk('Ghost',Ghost())}${_blk('Disabled',Disabled())}</div>`;
