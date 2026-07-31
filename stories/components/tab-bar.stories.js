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

export const RideActive = () => tabBar('Ride');
export const DiscoverActive = () => tabBar('Discover');
export const WalletActive = () => tabBar('Wallet');
export const AccountActive = () => tabBar('Account');
