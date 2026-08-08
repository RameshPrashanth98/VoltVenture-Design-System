import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/TabBar' };

// Copied from stories/elevation.stories.js — helper not exported from that file
/**
 * Convert #RRGGBBAA (8-char hex) to CSS rgba().
 * @param {string} hex8 — e.g. "#0F0F0F1A"
 * @returns {string} — e.g. "rgba(15, 15, 15, 0.10)"
 */
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

/**
 * Build a CSS box-shadow string from an elevation token value.
 */
function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

function tabBar(activeTab) {
  const tabs = TABS.map(label => {
    const isActive = label === activeTab;
    return `
      <div style="
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:${tokens.space100}px;
        flex:1;
      ">
        <div style="
          width:48px;
          height:32px;
          border-radius:${tokens.radiusFull}px;
          background:${isActive ? tokens.colorTextPrimary : tokens.colorGrey200};
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          <span style="font-size:14px;color:${isActive ? tokens.colorTextOnInverse : tokens.colorTextSecondary};">●</span>
        </div>
        <span style="
          font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};
        ">${label}</span>
      </div>
    `;
  }).join('');

  return `
    <div style="
      width:393px;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      padding:${tokens.space200}px ${tokens.space400}px ${tokens.space500}px;
      box-shadow:${shadowFromToken(tokens.elevationFloating)};
      box-sizing:border-box;
    ">
      ${tabs}
    </div>
  `;
}

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
  // UI-SPEC labels (overrides RESEARCH.md A1 wireframe draft labels)
  const INTERACTIVE_TABS = ['Home', 'Ride', 'Rewards', 'Profile'];
  let activeTab = 'Ride';

  const { frame, screen } = makePhoneFrame();
  // screen has position:relative — required for position:absolute bottom:0 tabBar

  // Tab bar container — pinned to bottom
  const tabBarEl = document.createElement('div');
  tabBarEl.style.cssText = `position:absolute;bottom:0;left:0;right:0;background:${tokens.colorSurfaceBase};display:flex;padding:var(--vv-space-3) 0 var(--vv-space-4);box-shadow:${shadowFromToken(tokens.elevationFloating)}`;

  const tabRefs = [];

  INTERACTIVE_TABS.forEach(label => {
    const tabDiv = document.createElement('div');
    tabDiv.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--vv-space-2);cursor:pointer';

    const indicator = document.createElement('div');
    indicator.style.cssText = 'width:32px;height:32px;border-radius:var(--vv-radius-full)';

    const labelEl = document.createElement('span');
    labelEl.style.cssText = 'font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);font-family:Inter,sans-serif';
    labelEl.textContent = label;

    // Initial state
    const isActive = label === activeTab;
    indicator.style.background = isActive ? tokens.colorActionPrimary : tokens.colorGrey200;
    labelEl.style.color = isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary;

    tabDiv.appendChild(indicator);
    tabDiv.appendChild(labelEl);
    tabBarEl.appendChild(tabDiv);

    tabRefs.push({ label, indicator, labelEl, tabDiv });

    tabDiv.addEventListener('click', () => {
      activeTab = label;
      tabRefs.forEach(ref => {
        const active = ref.label === activeTab;
        ref.indicator.style.background = active ? tokens.colorActionPrimary : tokens.colorGrey200;
        ref.labelEl.style.color = active ? tokens.colorTextPrimary : tokens.colorTextSecondary;
      });
    });
  });

  screen.appendChild(tabBarEl);
  return frame;
};

export const RideActive = () => tabBar('Ride');
export const DiscoverActive = () => tabBar('Discover');
export const WalletActive = () => tabBar('Wallet');
export const AccountActive = () => tabBar('Account');

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}
export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// TabBar — HTML Source</div>${_blk('RideActive (representative)',RideActive())}</div>`;
