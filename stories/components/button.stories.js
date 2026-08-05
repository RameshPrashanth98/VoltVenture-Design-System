import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/Button' };

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
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:0 16px;box-sizing:border-box';

  // Primary button
  const primaryBtn = document.createElement('button');
  primaryBtn.style.cssText = `width:100%;height:48px;border-radius:999px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;cursor:pointer;border:none;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary};transition:transform 100ms ease,background-color 100ms ease;box-sizing:border-box`;
  primaryBtn.textContent = 'Book a Ride';
  primaryBtn.addEventListener('pointerdown', () => { primaryBtn.style.backgroundColor = '#a8de1a'; primaryBtn.style.transform = 'scale(0.97)'; });
  primaryBtn.addEventListener('pointerup', () => { primaryBtn.style.backgroundColor = tokens.colorActionPrimary; primaryBtn.style.transform = 'scale(1)'; });
  primaryBtn.addEventListener('pointerleave', () => { primaryBtn.style.backgroundColor = tokens.colorActionPrimary; primaryBtn.style.transform = 'scale(1)'; });

  // Secondary button
  const secondaryBtn = document.createElement('button');
  secondaryBtn.style.cssText = `width:100%;height:48px;border-radius:999px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;cursor:pointer;border:none;background:${tokens.colorActionSecondary};color:${tokens.colorTextOnInverse};transition:transform 100ms ease,background-color 100ms ease;box-sizing:border-box`;
  secondaryBtn.textContent = 'Continue';
  secondaryBtn.addEventListener('pointerdown', () => { secondaryBtn.style.backgroundColor = tokens.colorGrey800; secondaryBtn.style.transform = 'scale(0.97)'; });
  secondaryBtn.addEventListener('pointerup', () => { secondaryBtn.style.backgroundColor = tokens.colorActionSecondary; secondaryBtn.style.transform = 'scale(1)'; });
  secondaryBtn.addEventListener('pointerleave', () => { secondaryBtn.style.backgroundColor = tokens.colorActionSecondary; secondaryBtn.style.transform = 'scale(1)'; });

  // Ghost button
  const ghostBtn = document.createElement('button');
  ghostBtn.style.cssText = `width:100%;height:48px;border-radius:999px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;cursor:pointer;background:none;border:1px solid ${tokens.colorBorderSubtle};color:${tokens.colorTextPrimary};transition:opacity 100ms ease;box-sizing:border-box`;
  ghostBtn.textContent = 'Sign in instead';
  ghostBtn.addEventListener('pointerdown', () => { ghostBtn.style.opacity = '0.6'; });
  ghostBtn.addEventListener('pointerup', () => { ghostBtn.style.opacity = '1'; });
  ghostBtn.addEventListener('pointerleave', () => { ghostBtn.style.opacity = '1'; });

  // Disabled button
  const disabledBtn = document.createElement('button');
  disabledBtn.style.cssText = `width:100%;height:48px;border-radius:999px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;line-height:20px;border:none;background:${tokens.colorGrey200};color:${tokens.colorTextDisabled};pointer-events:none;box-sizing:border-box`;
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
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// Button — HTML Source</div>${_blk('Primary',Primary())}${_blk('Secondary',Secondary())}${_blk('Ghost',Ghost())}${_blk('Disabled',Disabled())}</div>`;
