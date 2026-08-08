import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SocialAuthButtons' };

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
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--vv-space-4);padding:0 var(--vv-space-5);box-sizing:border-box';

  // Apple button
  const appleBtn = document.createElement('button');
  appleBtn.style.cssText = `width:100%;height:48px;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);cursor:pointer;border:none;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};transition:opacity var(--vv-duration-fast) var(--vv-easing-standard);box-sizing:border-box`;
  appleBtn.textContent = '\uF8FF Continue with Apple';
  appleBtn.addEventListener('pointerdown', () => { appleBtn.style.opacity = '0.7'; });
  appleBtn.addEventListener('pointerup', () => { appleBtn.style.opacity = '1'; });
  appleBtn.addEventListener('pointerleave', () => { appleBtn.style.opacity = '1'; });

  // Google button
  const googleBtn = document.createElement('button');
  googleBtn.style.cssText = `width:100%;height:48px;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);cursor:pointer;background:${tokens.colorSurfaceBase};color:${tokens.colorTextPrimary};border:1px solid ${tokens.colorBorderSubtle};transition:opacity var(--vv-duration-fast) var(--vv-easing-standard);box-sizing:border-box`;
  googleBtn.textContent = 'G Continue with Google';
  googleBtn.addEventListener('pointerdown', () => { googleBtn.style.opacity = '0.7'; });
  googleBtn.addEventListener('pointerup', () => { googleBtn.style.opacity = '1'; });
  googleBtn.addEventListener('pointerleave', () => { googleBtn.style.opacity = '1'; });

  content.appendChild(appleBtn);
  content.appendChild(googleBtn);
  screen.appendChild(content);
  return frame;
};

export const AppleButton = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:${tokens.space200}px;
    background:${tokens.colorActionPrimary};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
    font-size:${tokens.typeBodyMd.fontSize}px;
    font-weight:${tokens.typeBodyMd.fontWeight};
    line-height:${tokens.typeBodyMd.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:none;
    cursor:pointer;
    box-sizing:border-box;
  ">&#63743; Continue with Apple</button>
`;

export const GoogleButton = () => `
  <button style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:${tokens.space200}px;
    background:${tokens.colorSurfaceBase};
    color:${tokens.colorTextPrimary};
    padding:${tokens.space400}px ${tokens.space600}px;
    border-radius:${tokens.radiusFull}px;
    font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
    font-size:${tokens.typeBodyMd.fontSize}px;
    font-weight:${tokens.typeBodyMd.fontWeight};
    line-height:${tokens.typeBodyMd.lineHeight}px;
    min-height:${tokens.space1200}px;
    width:100%;
    border:${tokens.borderWidthHairline}px solid ${tokens.colorBorderSubtle};
    cursor:pointer;
    box-sizing:border-box;
  ">G Continue with Google</button>
`;

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// SocialAuthButtons — HTML Source</div>${_blk('Apple',AppleButton())}${_blk('Google',GoogleButton())}</div>`;
