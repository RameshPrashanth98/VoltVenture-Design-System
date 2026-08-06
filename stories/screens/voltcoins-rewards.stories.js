import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/VoltCoinsRewards' };

// ── Phone frame helper ─────────────────────────────────────────────────────────
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

const TABS = ['Ride', 'Discover', 'Wallet', 'Account'];

// ── Default (static HTML) ──────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;min-height:852px;display:flex;flex-direction:column;
    background:${tokens.colorSurfaceBase};box-sizing:border-box;font-family:Inter,sans-serif;
  ">
    <!-- Status Bar (62px) -->
    <div style="height:62px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-sizing:border-box;flex-shrink:0;">
      <span style="font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:11px;color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>
    <!-- Header Row -->
    <div style="display:flex;align-items:center;padding:12px 16px;justify-content:space-between;flex-shrink:0;">
      <div>
        <div style="font-size:${tokens.fontSizeHeadingMd}px;font-weight:700;color:${tokens.colorTextPrimary};">VoltCoins</div>
        <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">Your rewards</div>
      </div>
      <!-- Streak Badge — colors hardcoded, no VV token -->
      <div style="background:#FFF1DC;border-radius:${tokens.radiusFull}px;padding:4px 10px;display:inline-flex;align-items:center;gap:4px;">
        <span style="font-size:14px;color:#F5871F;">&#128293;</span>
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:600;color:#B5590A;">7 Day Streak</span>
      </div>
    </div>
    <!-- Balance Dashboard Card -->
    <div style="margin:0 16px 16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusXl}px;padding:24px 20px;display:flex;flex-direction:column;gap:12px;box-sizing:border-box;">
      <!-- Coin Badge + Balance row -->
      <div style="display:flex;align-items:center;gap:16px;">
        <div style="width:48px;height:48px;background:${tokens.colorActionPrimary};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;color:${tokens.colorTextPrimary};flex-shrink:0;">&#9889;</div>
        <div>
          <div style="font-size:40px;font-weight:700;color:#ffffff;line-height:1;">1,240</div>
          <div style="font-size:${tokens.fontSizeLabelMd}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">VoltCoins</div>
        </div>
      </div>
      <!-- Level Badge -->
      <div style="display:inline-flex;align-items:center;background:rgba(255,255,255,0.13);border-radius:${tokens.radiusFull}px;padding:6px 14px;gap:6px;">
        <span style="font-size:14px;">&#127942;</span>
        <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;">Level 3 &mdash; Explorer</span>
      </div>
    </div>
    <!-- Next Reward Progress Card -->
    <div style="margin:0 16px 16px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:16px;box-sizing:border-box;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <div style="width:38px;height:38px;background:${tokens.colorGrey100};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">&#127873;</div>
        <div>
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};">Next Reward</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">260 more coins to Level 4 reward</div>
        </div>
      </div>
      <!-- Progress Track 70% -->
      <div style="position:relative;height:8px;background:${tokens.colorGrey100};border-radius:4px;">
        <div style="position:absolute;left:0;top:0;width:70%;height:8px;background:${tokens.colorActionPrimary};border-radius:4px;"></div>
        <div style="position:absolute;left:calc(70% - 6px);top:-2px;width:12px;height:12px;background:${tokens.colorSurfaceBase};border-radius:50%;border:2px solid ${tokens.colorActionPrimary};"></div>
      </div>
    </div>
    <!-- Earn Tip -->
    <div style="margin:0 16px 16px;background:${tokens.colorGreen100};border-radius:${tokens.radiusLg}px;padding:12px 16px;display:flex;align-items:center;gap:12px;box-sizing:border-box;">
      <div style="width:32px;height:32px;background:${tokens.colorActionPrimary};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;color:${tokens.colorTextPrimary};flex-shrink:0;">&#128692;</div>
      <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextAccent};">Earn VoltCoins on every ride. More coins = better rewards!</span>
    </div>
    <!-- EARN HISTORY -->
    <div style="padding:0 16px 8px;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">EARN HISTORY</div>
    <div style="margin:0 16px 16px;border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};overflow:hidden;box-sizing:border-box;">
      <!-- Row 1 -->
      <div style="display:flex;align-items:center;min-height:56px;padding:12px 16px;gap:12px;cursor:pointer;box-sizing:border-box;">
        <div style="width:36px;height:36px;background:${tokens.colorGreen100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">&#128692;</div>
        <div style="flex:1;">
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};">Coastal Sunset Ride</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">Today &middot; 3.2 km</div>
        </div>
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-size:${tokens.fontSizeLabelSm}px;font-weight:700;color:${tokens.colorTextAccent};">+15</div>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <!-- Row 2 -->
      <div style="display:flex;align-items:center;min-height:56px;padding:12px 16px;gap:12px;cursor:pointer;box-sizing:border-box;">
        <div style="width:36px;height:36px;background:${tokens.colorGreen100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">&#128692;</div>
        <div style="flex:1;">
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};">Old Town Loop</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">Yesterday &middot; 2.1 km</div>
        </div>
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-size:${tokens.fontSizeLabelSm}px;font-weight:700;color:${tokens.colorTextAccent};">+8</div>
      </div>
      <div style="height:1px;background:${tokens.colorGrey100};"></div>
      <!-- Row 3 -->
      <div style="display:flex;align-items:center;min-height:56px;padding:12px 16px;gap:12px;cursor:pointer;box-sizing:border-box;">
        <div style="width:36px;height:36px;background:${tokens.colorGreen100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">&#128692;</div>
        <div style="flex:1;">
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};">Quick City Ride</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">2 days ago &middot; 1.8 km</div>
        </div>
        <div style="background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-size:${tokens.fontSizeLabelSm}px;font-weight:700;color:${tokens.colorTextAccent};">+12</div>
      </div>
    </div>
    <!-- Spacer -->
    <div style="flex:1;"></div>
    <!-- Redeem CTA -->
    <div style="padding:0 16px 16px;">
      <div style="height:56px;display:flex;align-items:center;justify-content:center;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;cursor:pointer;box-sizing:border-box;">
        <span style="font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};">&#127873; Redeem Rewards</span>
      </div>
    </div>
    <!-- Tab Bar — Wallet active (index 2) -->
    <div style="display:flex;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};padding:8px 0 24px;flex-shrink:0;">
      ${TABS.map((label, i) => {
        const isActive = i === 2; // Wallet
        return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;">
          <div style="width:40px;height:26px;border-radius:${tokens.radiusFull}px;background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};"></div>
          <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};">${label}</span>
        </div>`;
      }).join('')}
    </div>
  </div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:auto;';

  // Status bar
  const sb = document.createElement('div');
  sb.style.cssText = `height:20px;background:${tokens.colorSurfaceBase};flex-shrink:0;`;
  content.appendChild(sb);

  // Header row
  const header = document.createElement('div');
  header.style.cssText = 'display:flex;align-items:center;padding:12px 16px;justify-content:space-between;flex-shrink:0;';
  const titleCol = document.createElement('div');
  const titleEl = document.createElement('div');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:700;color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'VoltCoins';
  const subtitleEl = document.createElement('div');
  subtitleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};`;
  subtitleEl.textContent = 'Your rewards';
  titleCol.appendChild(titleEl);
  titleCol.appendChild(subtitleEl);

  // Streak badge — colors hardcoded, no VV token
  const streak = document.createElement('div');
  streak.style.cssText = 'background:#FFF1DC;border-radius:' + tokens.radiusFull + 'px;padding:4px 10px;display:inline-flex;align-items:center;gap:4px;';
  const flameIcon = document.createElement('span');
  flameIcon.style.cssText = 'font-size:14px;color:#F5871F;';
  flameIcon.textContent = '\uD83D\uDD25';
  const streakText = document.createElement('span');
  streakText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:600;color:#B5590A;`;
  streakText.textContent = '7 Day Streak';
  streak.appendChild(flameIcon);
  streak.appendChild(streakText);

  header.appendChild(titleCol);
  header.appendChild(streak);
  content.appendChild(header);

  // Balance Dashboard Card
  const balCard = document.createElement('div');
  balCard.style.cssText = `margin:0 16px 16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusXl}px;padding:24px 20px;display:flex;flex-direction:column;gap:12px;box-sizing:border-box;`;

  const coinRow = document.createElement('div');
  coinRow.style.cssText = 'display:flex;align-items:center;gap:16px;';
  const coinBadge = document.createElement('div');
  coinBadge.style.cssText = `width:48px;height:48px;background:${tokens.colorActionPrimary};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;color:${tokens.colorTextPrimary};flex-shrink:0;`;
  coinBadge.textContent = '\u26A1';
  const balText = document.createElement('div');
  const balValue = document.createElement('div');
  balValue.style.cssText = 'font-family:Inter,sans-serif;font-size:40px;font-weight:700;color:#ffffff;line-height:1;';
  balValue.textContent = '1,240';
  const balLabel = document.createElement('div');
  balLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelMd}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  balLabel.textContent = 'VoltCoins';
  balText.appendChild(balValue);
  balText.appendChild(balLabel);
  coinRow.appendChild(coinBadge);
  coinRow.appendChild(balText);

  const levelBadge = document.createElement('div');
  levelBadge.style.cssText = `display:inline-flex;align-items:center;background:rgba(255,255,255,0.13);border-radius:${tokens.radiusFull}px;padding:6px 14px;gap:6px;`;
  const trophy = document.createElement('span');
  trophy.style.cssText = 'font-size:14px;';
  trophy.textContent = '\uD83C\uDFC6';
  const levelText = document.createElement('span');
  levelText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;`;
  levelText.textContent = 'Level 3 \u2014 Explorer';
  levelBadge.appendChild(trophy);
  levelBadge.appendChild(levelText);

  balCard.appendChild(coinRow);
  balCard.appendChild(levelBadge);
  content.appendChild(balCard);

  // Progress Card
  const progCard = document.createElement('div');
  progCard.style.cssText = `margin:0 16px 16px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:16px;box-sizing:border-box;`;
  const progTop = document.createElement('div');
  progTop.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:12px;';
  const progIcon = document.createElement('div');
  progIcon.style.cssText = `width:38px;height:38px;background:${tokens.colorGrey100};border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;`;
  progIcon.textContent = '\uD83C\uDF81';
  const progTextCol = document.createElement('div');
  const progTitle = document.createElement('div');
  progTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};`;
  progTitle.textContent = 'Next Reward';
  const progSub = document.createElement('div');
  progSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};`;
  progSub.textContent = '260 more coins to Level 4 reward';
  progTextCol.appendChild(progTitle);
  progTextCol.appendChild(progSub);
  progTop.appendChild(progIcon);
  progTop.appendChild(progTextCol);

  const trackWrap = document.createElement('div');
  trackWrap.style.cssText = `position:relative;height:8px;background:${tokens.colorGrey100};border-radius:4px;`;
  const trackFill = document.createElement('div');
  trackFill.style.cssText = `position:absolute;left:0;top:0;width:70%;height:8px;background:${tokens.colorActionPrimary};border-radius:4px;`;
  const trackDot = document.createElement('div');
  trackDot.style.cssText = `position:absolute;left:calc(70% - 6px);top:-2px;width:12px;height:12px;background:${tokens.colorSurfaceBase};border-radius:50%;border:2px solid ${tokens.colorActionPrimary};`;
  trackWrap.appendChild(trackFill);
  trackWrap.appendChild(trackDot);

  progCard.appendChild(progTop);
  progCard.appendChild(trackWrap);
  content.appendChild(progCard);

  // Earn history rows
  const histLabel = document.createElement('div');
  histLabel.style.cssText = `padding:0 16px 8px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;`;
  histLabel.textContent = 'EARN HISTORY';
  content.appendChild(histLabel);

  const histList = document.createElement('div');
  histList.style.cssText = `margin:0 16px 16px;border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};overflow:hidden;`;

  const histRows = [
    { label: 'Coastal Sunset Ride', sub: 'Today \u00B7 3.2 km', coins: '+15' },
    { label: 'Old Town Loop', sub: 'Yesterday \u00B7 2.1 km', coins: '+8' },
    { label: 'Quick City Ride', sub: '2 days ago \u00B7 1.8 km', coins: '+12' },
  ];

  histRows.forEach((data, i) => {
    if (i > 0) {
      const div = document.createElement('div');
      div.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
      histList.appendChild(div);
    }
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;min-height:56px;padding:12px 16px;gap:12px;cursor:pointer;box-sizing:border-box;`;
    row.addEventListener('pointerdown', () => { row.style.background = tokens.colorGrey100; });
    row.addEventListener('pointerup', () => { row.style.background = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.background = tokens.colorSurfaceBase; });

    const chip = document.createElement('div');
    chip.style.cssText = `width:36px;height:36px;background:${tokens.colorGreen100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;`;
    chip.textContent = '\uD83D\uDEB4';
    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;';
    const rowTitle = document.createElement('div');
    rowTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};`;
    rowTitle.textContent = data.label;
    const rowSub = document.createElement('div');
    rowSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};`;
    rowSub.textContent = data.sub;
    textCol.appendChild(rowTitle);
    textCol.appendChild(rowSub);
    const coinChip = document.createElement('div');
    coinChip.style.cssText = `background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:4px 10px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:700;color:${tokens.colorTextAccent};`;
    coinChip.textContent = data.coins;

    row.appendChild(chip);
    row.appendChild(textCol);
    row.appendChild(coinChip);
    histList.appendChild(row);
  });
  content.appendChild(histList);

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  // Redeem CTA
  const ctaWrap = document.createElement('div');
  ctaWrap.style.cssText = 'padding:0 16px 16px;';
  const redeemBtn = document.createElement('div');
  redeemBtn.style.cssText = `height:56px;display:flex;align-items:center;justify-content:center;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;cursor:pointer;box-sizing:border-box;`;
  redeemBtn.addEventListener('pointerdown', () => { redeemBtn.style.background = tokens.colorGreen600; redeemBtn.style.transform = 'scale(0.97)'; });
  redeemBtn.addEventListener('pointerup', () => { redeemBtn.style.background = tokens.colorActionPrimary; redeemBtn.style.transform = ''; });
  redeemBtn.addEventListener('pointerleave', () => { redeemBtn.style.background = tokens.colorActionPrimary; redeemBtn.style.transform = ''; });
  const redeemText = document.createElement('span');
  redeemText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:600;color:${tokens.colorTextPrimary};`;
  redeemText.textContent = '\uD83C\uDF81 Redeem Rewards';
  redeemBtn.appendChild(redeemText);
  ctaWrap.appendChild(redeemBtn);
  content.appendChild(ctaWrap);

  screen.appendChild(content);

  // Tab Bar — Wallet active (index 2)
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `display:flex;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};padding:8px 0 24px;flex-shrink:0;`;

  let activeTab = 2; // Wallet
  const tabEls = [];
  TABS.forEach((label, i) => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;';
    const pill = document.createElement('div');
    pill.style.cssText = `width:40px;height:26px;border-radius:${tokens.radiusFull}px;background:${i === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200};`;
    const lbl = document.createElement('span');
    lbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${i === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    lbl.textContent = label;
    tab.appendChild(pill);
    tab.appendChild(lbl);
    tabEls.push({ pill, lbl });
    tab.addEventListener('pointerdown', () => {
      activeTab = i;
      tabEls.forEach(({ pill: p, lbl: l }, idx) => {
        p.style.background = idx === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200;
        l.style.color = idx === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary;
      });
    });
    tabBar.appendChild(tab);
  });
  screen.appendChild(tabBar);
  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';

// colorSurfaceInverse: '#0F0F0F'   colorActionPrimary: '#C6FF2D'
// colorGreen100: '#F4FFD9'   colorTextAccent: '#7D9220'
// Streak colors hardcoded — no VV token:
//   #FFF1DC (badge bg), #F5871F (flame), #B5590A (streak text)
// rgba(255,255,255,0.13) — level badge bg (no VV token)

const VoltCoinsRewardsScreen = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    {/* Header */}
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
      <View>
        <Text style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: '700', color: '#0F0F0F' }}>VoltCoins</Text>
        <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' }}>Your rewards</Text>
      </View>
      {/* Streak Badge */}
      <View style={{ backgroundColor: '#FFF1DC', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <Text style={{ fontSize: 14, color: '#F5871F' }}>{'\uD83D\uDD25'}</Text>
        <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '600', color: '#B5590A' }}>7 Day Streak</Text>
      </View>
    </View>

    {/* Balance Card */}
    <Surface style={{ marginHorizontal: 16, marginBottom: 16, backgroundColor: '#0F0F0F', borderRadius: 28, padding: 24, gap: 12 }} elevation={0}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#C6FF2D', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, color: '#0F0F0F' }}>{'\u26A1'}</Text>
        </View>
        <View>
          <Text style={{ fontFamily: 'Inter', fontSize: 40, fontWeight: '700', color: '#FFFFFF' }}>1,240</Text>
          <Text style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#808080' }}>VoltCoins</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.13)', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 6, gap: 6, alignSelf: 'flex-start' }}>
        <Text style={{ fontSize: 14 }}>{'\uD83C\uDFC6'}</Text>
        <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#FFFFFF' }}>Level 3 \u2014 Explorer</Text>
      </View>
    </Surface>
  </ScrollView>
);

export default VoltCoinsRewardsScreen;`;

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px">` +
  `<div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// VoltCoins Rewards — React Native Paper</div>` +
  _blk('VoltCoinsRewardsScreen.tsx', RN_JSX) +
  `</div>`;
