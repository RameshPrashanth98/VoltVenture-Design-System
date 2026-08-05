import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SocialAuthButtons' };

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
  const { frame, screen } = makePhoneFrame();
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:0 16px;box-sizing:border-box';

  // Apple button
  const appleBtn = document.createElement('button');
  appleBtn.style.cssText = `width:100%;height:48px;border-radius:999px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;cursor:pointer;border:none;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};transition:opacity 100ms ease;box-sizing:border-box`;
  appleBtn.textContent = '\uF8FF Continue with Apple';
  appleBtn.addEventListener('pointerdown', () => { appleBtn.style.opacity = '0.7'; });
  appleBtn.addEventListener('pointerup', () => { appleBtn.style.opacity = '1'; });
  appleBtn.addEventListener('pointerleave', () => { appleBtn.style.opacity = '1'; });

  // Google button
  const googleBtn = document.createElement('button');
  googleBtn.style.cssText = `width:100%;height:48px;border-radius:999px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;cursor:pointer;background:${tokens.colorSurfaceBase};color:${tokens.colorTextPrimary};border:1px solid ${tokens.colorBorderSubtle};transition:opacity 100ms ease;box-sizing:border-box`;
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
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// SocialAuthButtons — HTML Source</div>${_blk('Apple',AppleButton())}${_blk('Google',GoogleButton())}</div>`;
