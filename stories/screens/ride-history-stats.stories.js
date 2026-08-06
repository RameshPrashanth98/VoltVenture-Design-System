import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/RideHistoryStats' };

// ── Phone frame helper (inline per file — 402×874px, Volt Black #0f0f0f, 44px radius) ──
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

const RIDES = [
  { name: 'Coastal Sunset Ride', meta: '12 min \u00B7 3.2 km \u00B7 \u20B9 18', date: 'Today' },
  { name: 'Old Town Loop',        meta: '18 min \u00B7 4.7 km \u00B7 \u20B9 24', date: 'Today' },
  { name: 'Quick City Ride',      meta: '8 min \u00B7 2.1 km \u00B7 \u20B9 12',  date: 'Yesterday' },
  { name: 'Riverside Cafe Run',   meta: '22 min \u00B7 5.9 km \u00B7 \u20B9 30', date: 'Yesterday' },
];

// ── Default (static HTML) ──────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">

    <!-- Status Bar (62px) — light surface -->
    <div style="
      height:62px;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-family:Inter,sans-serif;font-size:11px;color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>

    <!-- Header Row -->
    <div style="
      height:44px;
      display:flex;
      align-items:center;
      padding:0 16px;
      gap:12px;
      flex-shrink:0;
    ">
      <div style="
        width:36px;height:36px;
        background:${tokens.colorGrey100};
        border-radius:${tokens.radiusSm}px;
        display:flex;align-items:center;justify-content:center;
        font-size:18px;cursor:pointer;flex-shrink:0;
      ">&#8592;</div>
      <span style="
        font-family:Manjari,sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:700;
        color:${tokens.colorTextPrimary};
        flex:1;
      ">Ride History &amp; Stats</span>
    </div>

    <!-- Stats Overview Card — dark surface -->
    <div style="
      margin:16px;
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusXl}px;
      padding:20px 0;
      display:flex;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Block 1: Total Rides -->
      <div style="flex:1;text-align:center;">
        <div style="
          font-family:Manjari,sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:700;
          color:#ffffff;
          line-height:1.2;
        ">24</div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGrey500};
          margin-top:4px;
        ">Total Rides</div>
      </div>
      <!-- Divider -->
      <div style="width:1px;height:40px;background:rgba(255,255,255,0.13);align-self:center;"></div>
      <!-- Block 2: Distance -->
      <div style="flex:1;text-align:center;">
        <div style="
          font-family:Manjari,sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:700;
          color:#ffffff;
          line-height:1.2;
        ">87.3 km</div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGrey500};
          margin-top:4px;
        ">Distance</div>
      </div>
      <!-- Divider -->
      <div style="width:1px;height:40px;background:rgba(255,255,255,0.13);align-self:center;"></div>
      <!-- Block 3: VoltCoins -->
      <div style="flex:1;text-align:center;">
        <div style="
          font-family:Manjari,sans-serif;
          font-size:${tokens.typeHeadingMd.fontSize}px;
          font-weight:700;
          color:${tokens.colorActionPrimary};
          line-height:1.2;
        ">289</div>
        <div style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGrey500};
          margin-top:4px;
        ">VoltCoins</div>
      </div>
    </div>

    <!-- History Label -->
    <div style="
      padding:0 16px 8px;
      font-family:Inter,sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
      color:${tokens.colorGrey500};
      text-transform:uppercase;
      letter-spacing:0.5px;
      flex-shrink:0;
    ">Recent Rides</div>

    <!-- History List -->
    <div style="
      margin:0 16px;
      border-radius:${tokens.radiusLg}px;
      border:1px solid ${tokens.colorGrey100};
      overflow:hidden;
      flex-shrink:0;
    ">
      ${RIDES.map((ride, i) => `
        <div style="
          display:flex;
          align-items:center;
          padding:12px 16px;
          gap:12px;
          background:${tokens.colorSurfaceBase};
          cursor:pointer;
          min-height:56px;
          box-sizing:border-box;
          ${i < RIDES.length - 1 ? `border-bottom:1px solid ${tokens.colorGrey100};` : ''}
        ">
          <div style="
            width:36px;height:36px;
            background:${tokens.colorGrey100};
            border-radius:${tokens.radiusSm}px;
            display:flex;align-items:center;justify-content:center;
            font-size:18px;flex-shrink:0;
          ">&#128692;</div>
          <div style="flex:1;min-width:0;">
            <div style="
              font-family:Inter,sans-serif;
              font-size:${tokens.typeBodyMd.fontSize}px;
              font-weight:600;
              color:${tokens.colorTextPrimary};
            ">${ride.name}</div>
            <div style="
              font-family:Inter,sans-serif;
              font-size:${tokens.typeLabelSm.fontSize}px;
              font-weight:${tokens.typeLabelSm.fontWeight};
              color:${tokens.colorTextSecondary};
              margin-top:2px;
            ">${ride.meta}</div>
          </div>
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeLabelSm.fontSize}px;
            font-weight:${tokens.typeLabelSm.fontWeight};
            color:${tokens.colorGrey500};
            flex-shrink:0;
          ">${ride.date}</span>
          <span style="color:${tokens.colorGrey300};font-size:20px;line-height:1;flex-shrink:0;">&#8250;</span>
        </div>
      `).join('')}
    </div>

    <!-- Bottom Spacer -->
    <div style="flex:1;"></div>

    <!-- Tab Bar -->
    <div style="
      display:flex;
      background:${tokens.colorSurfaceBase};
      border-top:1px solid ${tokens.colorGrey100};
      padding:8px 0 24px;
      flex-shrink:0;
    ">
      ${TABS.map((label, i) => {
        const isActive = i === 3; // Account tab active
        return `<div style="
          flex:1;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:4px;
          cursor:pointer;
        ">
          <div style="
            width:40px;height:26px;
            border-radius:${tokens.radiusFull}px;
            background:${isActive ? tokens.colorSurfaceInverse : tokens.colorGrey200};
            display:flex;align-items:center;justify-content:center;
          "></div>
          <span style="
            font-family:Inter,sans-serif;
            font-size:${tokens.typeLabelSm.fontSize}px;
            font-weight:${tokens.typeLabelSm.fontWeight};
            color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};
          ">${label}</span>
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
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:auto;background:#ffffff;';

  // Header Row
  const header = document.createElement('div');
  header.style.cssText = 'height:44px;display:flex;align-items:center;padding:0 16px;gap:12px;flex-shrink:0;';

  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;flex-shrink:0;`;
  backBtn.textContent = '\u2190';

  const headerTitle = document.createElement('span');
  headerTitle.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};flex:1;`;
  headerTitle.textContent = 'Ride History & Stats';

  header.appendChild(backBtn);
  header.appendChild(headerTitle);
  content.appendChild(header);

  // Stats Overview Card
  const statsCard = document.createElement('div');
  statsCard.style.cssText = `margin:16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusXl}px;padding:20px 0;display:flex;flex-shrink:0;box-sizing:border-box;`;

  function makeStatBlock(value, label, valueColor) {
    const block = document.createElement('div');
    block.style.cssText = 'flex:1;text-align:center;';
    const num = document.createElement('div');
    num.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:700;color:${valueColor || '#ffffff'};line-height:1.2;`;
    num.textContent = value;
    const lbl = document.createElement('div');
    lbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};margin-top:4px;`;
    lbl.textContent = label;
    block.appendChild(num);
    block.appendChild(lbl);
    return block;
  }

  function makeStatDivider() {
    const d = document.createElement('div');
    d.style.cssText = 'width:1px;height:40px;background:rgba(255,255,255,0.13);align-self:center;'; /* dark card dividers */
    return d;
  }

  statsCard.appendChild(makeStatBlock('24', 'Total Rides'));
  statsCard.appendChild(makeStatDivider());
  statsCard.appendChild(makeStatBlock('87.3 km', 'Distance'));
  statsCard.appendChild(makeStatDivider());
  statsCard.appendChild(makeStatBlock('289', 'VoltCoins', tokens.colorActionPrimary));
  content.appendChild(statsCard);

  // History Label
  const historyLabel = document.createElement('div');
  historyLabel.style.cssText = `padding:0 16px 8px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0;`;
  historyLabel.textContent = 'Recent Rides';
  content.appendChild(historyLabel);

  // History List
  const historyList = document.createElement('div');
  historyList.style.cssText = `margin:0 16px;border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};overflow:hidden;flex-shrink:0;`;

  RIDES.forEach((ride, i) => {
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;padding:12px 16px;gap:12px;background:${tokens.colorSurfaceBase};cursor:pointer;min-height:56px;box-sizing:border-box;`;

    // Press feedback
    row.addEventListener('pointerdown', () => { row.style.backgroundColor = tokens.colorGrey100; });
    row.addEventListener('pointerup', () => { row.style.backgroundColor = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.backgroundColor = tokens.colorSurfaceBase; });

    const chip = document.createElement('div');
    chip.style.cssText = `width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;`;
    chip.textContent = '\uD83D\uDEB4';

    const info = document.createElement('div');
    info.style.cssText = 'flex:1;min-width:0;';
    const rideName = document.createElement('div');
    rideName.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};`;
    rideName.textContent = ride.name;
    const rideMeta = document.createElement('div');
    rideMeta.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};margin-top:2px;`;
    rideMeta.textContent = ride.meta;
    info.appendChild(rideName);
    info.appendChild(rideMeta);

    const dateEl = document.createElement('span');
    dateEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};flex-shrink:0;`;
    dateEl.textContent = ride.date;

    const chevron = document.createElement('span');
    chevron.style.cssText = `color:${tokens.colorGrey300};font-size:20px;line-height:1;flex-shrink:0;`;
    chevron.textContent = '\u203A';

    row.appendChild(chip);
    row.appendChild(info);
    row.appendChild(dateEl);
    row.appendChild(chevron);
    historyList.appendChild(row);

    // Divider between rows (not after last)
    if (i < RIDES.length - 1) {
      const divEl = document.createElement('div');
      divEl.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
      historyList.appendChild(divEl);
    }
  });

  content.appendChild(historyList);

  // Bottom Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  screen.appendChild(content);

  // Tab Bar
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `display:flex;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};padding:8px 0 24px;flex-shrink:0;`;

  let activeTab = 3; // Account
  const tabEls = [];

  TABS.forEach((label, i) => {
    const tab = document.createElement('div');
    tab.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;';

    const pill = document.createElement('div');
    pill.style.cssText = `width:40px;height:26px;border-radius:${tokens.radiusFull}px;background:${i === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;`;

    const tabLabel = document.createElement('span');
    tabLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${i === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    tabLabel.textContent = label;

    tab.appendChild(pill);
    tab.appendChild(tabLabel);
    tabEls.push({ pill, tabLabel });

    tab.addEventListener('pointerdown', () => {
      activeTab = i;
      tabEls.forEach(({ pill: p, tabLabel: tl }, idx) => {
        p.style.background = idx === activeTab ? tokens.colorSurfaceInverse : tokens.colorGrey200;
        tl.style.color = idx === activeTab ? tokens.colorTextPrimary : tokens.colorTextSecondary;
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

const _rideHistorySnippet = `import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Surface, Divider } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// Key tokens:
// colorSurfaceBase: '#FFFFFF'     colorSurfaceInverse: '#0F0F0F'
// colorGrey100: '#F5F5F5'         colorGrey500: '#808080'
// colorActionPrimary: '#C6FF2D'   (VoltCoins value color)
// Dark card dividers: rgba(255,255,255,0.13)  // semi-transparent white on #0F0F0F card

const RIDES = [
  { name: 'Coastal Sunset Ride', meta: '12 min \u00B7 3.2 km \u00B7 \u20B9 18', date: 'Today' },
  { name: 'Old Town Loop',        meta: '18 min \u00B7 4.7 km \u00B7 \u20B9 24', date: 'Today' },
  { name: 'Quick City Ride',      meta: '8 min \u00B7 2.1 km \u00B7 \u20B9 12',  date: 'Yesterday' },
  { name: 'Riverside Cafe Run',   meta: '22 min \u00B7 5.9 km \u00B7 \u20B9 30', date: 'Yesterday' },
];

export default function RideHistoryStatsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center',
        height: 44, paddingHorizontal: 16, gap: 12 }}>
        <TouchableOpacity style={{ width: 36, height: 36, borderRadius: 12,
          backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18 }}>\u2190</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Manjari', fontSize: 20, fontWeight: '700',
          color: '#0F0F0F', flex: 1 }}>Ride History &amp; Stats</Text>
      </View>

      <ScrollView>
        {/* Stats Card — colorSurfaceInverse (#0F0F0F) background */}
        <View style={{ margin: 16, backgroundColor: '#0F0F0F',
          borderRadius: 28, paddingVertical: 20,
          flexDirection: 'row' }}>
          {/* Block 1 */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Manjari', fontSize: 20, fontWeight: '700',
              color: '#FFFFFF' }}>24</Text>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
              color: '#808080', marginTop: 4 }}>Total Rides</Text>
          </View>
          {/* Divider — rgba(255,255,255,0.13) */}
          <View style={{ width: 1, height: 40, alignSelf: 'center',
            backgroundColor: 'rgba(255,255,255,0.13)' }} />
          {/* Block 2 */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Manjari', fontSize: 20, fontWeight: '700',
              color: '#FFFFFF' }}>87.3 km</Text>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
              color: '#808080', marginTop: 4 }}>Distance</Text>
          </View>
          {/* Divider — rgba(255,255,255,0.13) */}
          <View style={{ width: 1, height: 40, alignSelf: 'center',
            backgroundColor: 'rgba(255,255,255,0.13)' }} />
          {/* Block 3 — VoltCoins uses colorActionPrimary */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Manjari', fontSize: 20, fontWeight: '700',
              color: '#C6FF2D' }}>289</Text>
            <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
              color: '#808080', marginTop: 4 }}>VoltCoins</Text>
          </View>
        </View>

        {/* History Label */}
        <Text style={{ paddingHorizontal: 16, paddingBottom: 8,
          fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
          color: '#808080', textTransform: 'uppercase', letterSpacing: 0.5 }}>
          Recent Rides
        </Text>

        {/* Ride List */}
        <View style={{ marginHorizontal: 16, borderRadius: 20,
          borderWidth: 1, borderColor: '#F5F5F5', overflow: 'hidden' }}>
          {RIDES.map((ride, i) => (
            <View key={ride.name}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',
                padding: 16, gap: 12, minHeight: 56, backgroundColor: '#FFFFFF' }}>
                <View style={{ width: 36, height: 36, borderRadius: 12,
                  backgroundColor: '#F5F5F5', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>\uD83D\uDEB4</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600',
                    color: '#0F0F0F' }}>{ride.name}</Text>
                  <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
                    color: '#808080', marginTop: 2 }}>{ride.meta}</Text>
                </View>
                <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
                  color: '#808080' }}>{ride.date}</Text>
                <Text style={{ color: '#C9C9C9', fontSize: 20 }}>\u203A</Text>
              </TouchableOpacity>
              {i < RIDES.length - 1 && (
                <Divider style={{ backgroundColor: '#F5F5F5' }} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}`;

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px">` +
  `<div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// RideHistoryStats Screen — React Native Paper</div>` +
  _blk('Ride History & Stats Screen (frame PNaMF)', _rideHistorySnippet) +
  `</div>`;
