// Alpha fill — not in token system: #FFFFFF33 = rgba(255,255,255,0.20) — inactive segment
import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/ProgressStrip' };

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
  let step = 1;

  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = `flex:1;background:${tokens.colorGrey900};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--vv-space-7);padding:0 var(--vv-space-7);box-sizing:border-box`;

  // Step label
  const stepLabel = document.createElement('div');
  stepLabel.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse)';
  stepLabel.textContent = 'Step 1 of 4';

  // 4-segment strip
  const stripContainer = document.createElement('div');
  stripContainer.style.cssText = 'display:flex;gap:var(--vv-space-3);width:100%';

  const segs = [];
  for (let i = 0; i < 4; i++) {
    const seg = document.createElement('div');
    seg.style.cssText = `flex:1;height:8px;border-radius:${tokens.radiusXs}px;transition:background var(--vv-duration-standard) var(--vv-easing-standard)`;
    segs.push(seg);
    stripContainer.appendChild(seg);
  }

  // Navigation buttons
  const backBtn = document.createElement('button');
  backBtn.style.cssText = `border-radius:${tokens.radiusFull}px;padding:var(--vv-space-4) var(--vv-space-7);font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);font-family:Inter,sans-serif;border:none;cursor:pointer;background:${tokens.colorGrey200};color:${tokens.colorTextPrimary}`;
  backBtn.textContent = '← Back';

  const nextBtn = document.createElement('button');
  nextBtn.style.cssText = `border-radius:${tokens.radiusFull}px;padding:var(--vv-space-4) var(--vv-space-7);font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);font-family:Inter,sans-serif;border:none;cursor:pointer;background:${tokens.colorActionPrimary};color:${tokens.colorTextPrimary}`;
  nextBtn.textContent = 'Next →';

  const navRow = document.createElement('div');
  navRow.style.cssText = 'display:flex;gap:var(--vv-space-4);justify-content:center';
  navRow.appendChild(backBtn);
  navRow.appendChild(nextBtn);

  function updateUI() {
    segs.forEach((seg, i) => {
      seg.style.background = i < step ? tokens.colorActionPrimary : 'rgba(255,255,255,0.20)'; /* #FFFFFF33 — no token */
    });
    stepLabel.textContent = 'Step ' + step + ' of 4';
    nextBtn.style.opacity = step === 4 ? '0.4' : '1';
    nextBtn.style.cursor = step === 4 ? 'default' : 'pointer';
    backBtn.style.opacity = step === 1 ? '0.4' : '1';
    backBtn.style.cursor = step === 1 ? 'default' : 'pointer';
  }

  nextBtn.addEventListener('click', () => { if (step < 4) { step++; updateUI(); } });
  backBtn.addEventListener('click', () => { if (step > 1) { step--; updateUI(); } });

  updateUI(); // set initial disabled state

  content.appendChild(stepLabel);
  content.appendChild(stripContainer);
  content.appendChild(navRow);
  screen.appendChild(content);
  return frame;
};

function strip(activeStep) {
  const seg1 = activeStep >= 1
    ? `background:${tokens.colorSurfaceBase};`
    : `background:rgba(255,255,255,0.20); /* #FFFFFF33 — design alpha fill, no token */`;
  const seg2 = activeStep >= 2
    ? `background:${tokens.colorSurfaceBase};`
    : `background:rgba(255,255,255,0.20); /* #FFFFFF33 — design alpha fill, no token */`;
  return `
    <div style="
      background:${tokens.colorGrey900};
      padding:${tokens.space300}px ${tokens.space400}px;
    ">
      <div style="display:flex;gap:${tokens.space200}px;">
        <div style="flex:1;height:4px;border-radius:${tokens.radiusXs}px;${seg1}"></div>
        <div style="flex:1;height:4px;border-radius:${tokens.radiusXs}px;${seg2}"></div>
      </div>
    </div>
  `;
}

export const Step1Active = () => strip(1);
export const Step2Active = () => strip(2);

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// ProgressStrip — HTML Source</div>${_blk('Step1Active',Step1Active())}${_blk('Step2Active',Step2Active())}</div>`;
