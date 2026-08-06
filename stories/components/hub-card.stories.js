import * as tokens from '../../generated/tokens.js';

// Hardcoded brand values — no token equivalent:
// '#e8e8e8' — cafe photo placeholder (map/image placeholder color, same as static map bg)
// '#F5C518' — VIP gold badge (brand exception, not in token system)

export default { title: 'Components/HubCard' };

// ── Default (HTML string) ────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    display:flex;
    align-items:center;
    padding:12px 16px;
    gap:12px;
    background:${tokens.colorSurfaceBase};
    border-bottom:1px solid ${tokens.colorGrey100};
    box-sizing:border-box;
    cursor:pointer;
    width:393px;
    font-family:Inter,sans-serif;
  ">

    <!-- Cafe Photo (72x72px placeholder) -->
    <div style="
      width:72px;
      height:72px;
      background:#e8e8e8;
      border-radius:${tokens.radiusMd}px;
      flex-shrink:0;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="font-size:24px;">&#9749;</span>
    </div>

    <!-- Hub Info -->
    <div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;">
      <!-- Hub Name -->
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeBodyMd}px;
        font-weight:600;
        color:${tokens.colorTextPrimary};
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      ">The Grind</span>
      <!-- Distance + Type -->
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:${tokens.colorTextSecondary};
      ">&#9749; VIP Hub &middot; 0.4 km away</span>
      <!-- Available Slots -->
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:${tokens.colorGreen700};
      ">6 charging slots available</span>
    </div>

    <!-- Chevron -->
    <span style="
      font-family:Inter,sans-serif;
      font-size:20px;
      color:${tokens.colorGrey300};
      flex-shrink:0;
      line-height:1;
    ">&#8250;</span>

  </div>
`;

// ── makePhoneFrame helper (inline, per-file) ─────────────────────────────────
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

// Hub data for Interactive export
const HUB_DATA = [
  { name: 'The Grind',     subtitle: '\u2615 VIP Hub \u00B7 0.4 km', slots: '6 charging slots available', icon: '\u2615' },
  { name: 'Sunrise Cafe',  subtitle: '\u2615 VIP Hub \u00B7 0.8 km', slots: '4 charging slots available', icon: '\u2615' },
  { name: 'Urban Bean',    subtitle: '\u2615 VIP Hub \u00B7 1.2 km', slots: '8 charging slots available', icon: '\u2615' },
  { name: 'Lotus Coffee',  subtitle: '\u2615 VIP Hub \u00B7 1.6 km', slots: '2 charging slots available', icon: '\u2615' },
];

// ── Interactive (returns DOM element) ────────────────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();
  // Light screen (hub list is a light surface)
  screen.style.background = '#ffffff';

  // Screen header
  const header = document.createElement('div');
  header.style.cssText = `flex-shrink:0;padding:16px 16px 12px;box-sizing:border-box;border-bottom:1px solid ${tokens.colorGrey100};`;
  const headerTitle = document.createElement('span');
  headerTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:${tokens.fontWeightHeadingMd};color:${tokens.colorTextPrimary};`;
  headerTitle.textContent = 'VIP Charging Hubs';
  header.appendChild(headerTitle);
  screen.appendChild(header);

  // Hub list container
  const listContainer = document.createElement('div');
  listContainer.style.cssText = 'flex:1;overflow-y:auto;';

  HUB_DATA.forEach(hub => {
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;padding:12px 16px;gap:12px;background:${tokens.colorSurfaceBase};border-bottom:1px solid ${tokens.colorGrey100};box-sizing:border-box;cursor:pointer;`;

    // Cafe photo placeholder
    const photo = document.createElement('div');
    photo.style.cssText = `width:72px;height:72px;background:#e8e8e8;border-radius:${tokens.radiusMd}px;flex-shrink:0;display:flex;align-items:center;justify-content:center;`;
    const photoIcon = document.createElement('span');
    photoIcon.style.cssText = 'font-size:24px;';
    photoIcon.textContent = hub.icon;
    photo.appendChild(photoIcon);

    // Hub info column
    const info = document.createElement('div');
    info.style.cssText = 'flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;';

    const nameEl = document.createElement('span');
    nameEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`;
    nameEl.textContent = hub.name;

    const subtitleEl = document.createElement('span');
    subtitleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};`;
    subtitleEl.textContent = hub.subtitle;

    const slotsEl = document.createElement('span');
    slotsEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGreen700};`;
    slotsEl.textContent = hub.slots;

    info.appendChild(nameEl);
    info.appendChild(subtitleEl);
    info.appendChild(slotsEl);

    // Chevron
    const chevron = document.createElement('span');
    chevron.style.cssText = `font-family:Inter,sans-serif;font-size:20px;color:${tokens.colorGrey300};flex-shrink:0;line-height:1;`;
    chevron.textContent = '\u203A';

    row.appendChild(photo);
    row.appendChild(info);
    row.appendChild(chevron);

    // Press feedback
    row.addEventListener('pointerdown', () => { row.style.backgroundColor = tokens.colorGrey050; });
    row.addEventListener('pointerup', () => { row.style.backgroundColor = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.backgroundColor = tokens.colorSurfaceBase; });

    listContainer.appendChild(row);
  });

  screen.appendChild(listContainer);

  return frame;
};

// ── Source code panel ────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_HUBCARD_JSX = `// HubCard Component — React Native Paper
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase   = '#ffffff'
// tokens.colorGrey100       = '#f5f5f5'  — divider / border-bottom
// tokens.colorGrey050       = '#fafafa'  — press feedback background
// tokens.colorGrey300       = '#c9c9c9'  — chevron color
// tokens.colorTextPrimary   = '#0f0f0f'
// tokens.colorTextSecondary = '#808080'
// tokens.colorGreen700      = '#7d9220'  — slots available text
// tokens.radiusMd           = 16         — cafe photo border-radius
// '#e8e8e8'                 — cafe photo placeholder (no token)
// '#F5C518'                 — VIP gold badge (brand exception, no token)

const HubCard = ({ name, distance, slots, onPress }) => (
  <TouchableOpacity
    style={styles.row}
    onPress={onPress}
    activeOpacity={0.7}
  >
    {/* Cafe Photo */}
    <View style={styles.photo}>
      <Text style={styles.photoIcon}>&#9749;</Text>
    </View>

    {/* Hub Info */}
    <View style={styles.info}>
      <Text style={styles.hubName}>{name}</Text>
      <Text style={styles.distance}>{distance}</Text>
      <Text style={styles.slots}>{slots}</Text>
    </View>

    {/* Chevron */}
    <Text style={styles.chevron}>&#8250;</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
    backgroundColor: '#ffffff', // tokens.colorSurfaceBase
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5', // tokens.colorGrey100 (#F5F5F5)
  },
  photo: {
    width: 72,
    height: 72,
    backgroundColor: '#e8e8e8', // placeholder — no token
    borderRadius: 16, // tokens.radiusMd
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoIcon: {
    fontSize: 24,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  hubName: {
    fontFamily: 'Inter',
    fontSize: 15, // tokens.fontSizeBodyMd
    fontWeight: '600',
    color: '#0f0f0f', // tokens.colorTextPrimary
  },
  distance: {
    fontFamily: 'Inter',
    fontSize: 11, // tokens.fontSizeLabelSm
    fontWeight: '500', // tokens.fontWeightLabelSm
    color: '#808080', // tokens.colorTextSecondary
  },
  slots: {
    fontFamily: 'Inter',
    fontSize: 11, // tokens.fontSizeLabelSm
    fontWeight: '500',
    color: '#7d9220', // tokens.colorGreen700
  },
  chevron: {
    fontSize: 20,
    color: '#c9c9c9', // tokens.colorGrey300
    lineHeight: 22,
  },
});

export default HubCard;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// HubCard — React Native Paper</div>${_blk('HubCard', RN_HUBCARD_JSX)}</div>`;
