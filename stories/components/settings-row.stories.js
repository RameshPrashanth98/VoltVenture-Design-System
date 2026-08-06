import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/SettingsRow' };

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

// ── Default — chevron variant ──────────────────────────────────────────────────
export const Default = () => `
  <div style="
    display:flex;align-items:center;min-height:48px;padding:12px 16px;gap:12px;
    background:${tokens.colorSurfaceBase};
    border-bottom:1px solid ${tokens.colorGrey100};
    box-sizing:border-box;font-family:Inter,sans-serif;
    max-width:390px;
  ">
    <div style="
      width:34px;height:34px;background:${tokens.colorGrey100};
      border-radius:${tokens.radiusSm}px;
      display:flex;align-items:center;justify-content:center;
      font-size:18px;flex-shrink:0;
    ">⚙</div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-size:${tokens.fontSizeBodyMd}px;font-weight:600;
        line-height:${tokens.fontLineHeightBodyMd}px;
        color:${tokens.colorTextPrimary};
      ">Account Settings</div>
      <div style="
        font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};
        line-height:${tokens.fontLineHeightLabelSm}px;
        color:${tokens.colorTextSecondary};margin-top:2px;
      ">Manage your account</div>
    </div>
    <span style="color:${tokens.colorGrey300};font-size:20px;line-height:1;">›</span>
  </div>
`;

// ── WithToggle — toggle pill variant (ON state) ────────────────────────────────
export const WithToggle = () => `
  <div style="
    display:flex;align-items:center;min-height:48px;padding:12px 16px;gap:12px;
    background:${tokens.colorSurfaceBase};
    border-bottom:1px solid ${tokens.colorGrey100};
    box-sizing:border-box;font-family:Inter,sans-serif;
    max-width:390px;
  ">
    <div style="
      width:34px;height:34px;background:${tokens.colorGrey100};
      border-radius:${tokens.radiusSm}px;
      display:flex;align-items:center;justify-content:center;
      font-size:18px;flex-shrink:0;
    ">🔔</div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-size:${tokens.fontSizeBodyMd}px;font-weight:600;
        line-height:${tokens.fontLineHeightBodyMd}px;
        color:${tokens.colorTextPrimary};
      ">Push Notifications</div>
    </div>
    <div style="
      width:50px;height:29px;background:${tokens.colorActionPrimary};
      border-radius:${tokens.radiusFull}px;
      position:relative;display:inline-flex;align-items:center;padding:0 4px;
      box-sizing:border-box;flex-shrink:0;
    ">
      <div style="
        width:21px;height:21px;background:#ffffff;border-radius:50%;
        position:absolute;left:26px;
        transition:left 150ms ease;
      "></div>
    </div>
  </div>
`;

// ── WithValue — value string variant ──────────────────────────────────────────
export const WithValue = () => `
  <div style="
    display:flex;align-items:center;min-height:48px;padding:12px 16px;gap:12px;
    background:${tokens.colorSurfaceBase};
    border-bottom:1px solid ${tokens.colorGrey100};
    box-sizing:border-box;font-family:Inter,sans-serif;
    max-width:390px;
  ">
    <div style="
      width:34px;height:34px;background:${tokens.colorGrey100};
      border-radius:${tokens.radiusSm}px;
      display:flex;align-items:center;justify-content:center;
      font-size:18px;flex-shrink:0;
    ">🌐</div>
    <div style="flex:1;min-width:0;">
      <div style="
        font-size:${tokens.fontSizeBodyMd}px;font-weight:600;
        line-height:${tokens.fontLineHeightBodyMd}px;
        color:${tokens.colorTextPrimary};
      ">Language</div>
    </div>
    <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
      <span style="
        font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};
        line-height:${tokens.fontLineHeightLabelSm}px;
        color:${tokens.colorTextSecondary};
      ">English</span>
      <span style="color:${tokens.colorGrey300};font-size:20px;line-height:1;">›</span>
    </div>
  </div>
`;

// ── Interactive — phone-framed with live toggle ────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;padding:16px 0;box-sizing:border-box;overflow:auto;';

  // ── Section header ────────────────────────────────────────────────────────
  const sectionHdr = document.createElement('div');
  sectionHdr.style.cssText = `padding:0 16px 8px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:600;color:${tokens.colorTextPrimary};`;
  sectionHdr.textContent = 'Settings';
  content.appendChild(sectionHdr);

  // ── Helper: make a settings row DOM element ───────────────────────────────
  function makeRow({ icon, label, sub, rightType }) {
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;min-height:48px;padding:12px 16px;gap:12px;background:${tokens.colorSurfaceBase};border-bottom:1px solid ${tokens.colorGrey100};box-sizing:border-box;cursor:pointer;user-select:none;`;

    // Press highlight
    row.addEventListener('pointerdown', () => { row.style.background = tokens.colorGrey050; });
    row.addEventListener('pointerup', () => { row.style.background = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.background = tokens.colorSurfaceBase; });

    // Icon chip
    const chip = document.createElement('div');
    chip.style.cssText = `width:34px;height:34px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;`;
    chip.textContent = icon;
    row.appendChild(chip);

    // Text column
    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;min-width:0;';
    const titleEl = document.createElement('div');
    titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:600;line-height:${tokens.fontLineHeightBodyMd}px;color:${tokens.colorTextPrimary};`;
    titleEl.textContent = label;
    textCol.appendChild(titleEl);
    if (sub) {
      const subEl = document.createElement('div');
      subEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};line-height:${tokens.fontLineHeightLabelSm}px;color:${tokens.colorTextSecondary};margin-top:2px;`;
      subEl.textContent = sub;
      textCol.appendChild(subEl);
    }
    row.appendChild(textCol);

    // Right side
    let rightEl;
    if (rightType === 'chevron') {
      rightEl = document.createElement('span');
      rightEl.style.cssText = `color:${tokens.colorGrey300};font-size:20px;line-height:1;flex-shrink:0;`;
      rightEl.textContent = '›';
    } else if (rightType === 'toggle') {
      // Build toggle pill
      const pill = document.createElement('div');
      pill.style.cssText = `width:50px;height:29px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;position:relative;display:inline-flex;align-items:center;padding:0 4px;box-sizing:border-box;flex-shrink:0;cursor:pointer;`;
      const knob = document.createElement('div');
      knob.style.cssText = 'width:21px;height:21px;background:#ffffff;border-radius:50%;position:absolute;left:26px;transition:left 150ms ease;';
      pill.appendChild(knob);

      let toggleOn = true;
      pill.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        toggleOn = !toggleOn;
        if (toggleOn) {
          pill.style.background = tokens.colorActionPrimary;
          knob.style.left = '26px';
        } else {
          pill.style.background = tokens.colorGrey200;
          knob.style.left = '4px';
        }
      });
      rightEl = pill;
    } else if (rightType === 'value') {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'display:flex;align-items:center;gap:4px;flex-shrink:0;';
      const valEl = document.createElement('span');
      valEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};line-height:${tokens.fontLineHeightLabelSm}px;color:${tokens.colorTextSecondary};`;
      valEl.textContent = 'English';
      const chev = document.createElement('span');
      chev.style.cssText = `color:${tokens.colorGrey300};font-size:20px;line-height:1;`;
      chev.textContent = '›';
      wrap.appendChild(valEl);
      wrap.appendChild(chev);
      rightEl = wrap;
    }
    if (rightEl) row.appendChild(rightEl);
    return row;
  }

  // Row 1: Chevron (Default)
  const row1 = makeRow({ icon: '⚙', label: 'Account Settings', sub: 'Manage your account', rightType: 'chevron' });
  content.appendChild(row1);

  // Row 2: Toggle (WithToggle)
  const row2 = makeRow({ icon: '🔔', label: 'Push Notifications', sub: null, rightType: 'toggle' });
  content.appendChild(row2);

  // Row 3: Value (WithValue)
  const row3 = makeRow({ icon: '🌐', label: 'Language', sub: null, rightType: 'value' });
  content.appendChild(row3);

  screen.appendChild(content);
  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, html) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;
}

const _chevronSnippet = `import { List, Divider } from 'react-native-paper';
import { View } from 'react-native';

// colorGrey100: '#F5F5F5'  colorActionPrimary: '#C6FF2D'
// colorSurfaceBase: '#FFFFFF'  colorGrey300: '#C9C9C9'

// Settings Row — Chevron variant
<List.Item
  title="Account Settings"
  description="Manage your account"
  titleStyle={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}
  descriptionStyle={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' }}
  left={() => (
    <View style={{
      width: 34, height: 34, borderRadius: 12,
      backgroundColor: '#F5F5F5',
      alignItems: 'center', justifyContent: 'center',
      marginLeft: 16, alignSelf: 'center',
    }}>
      <Text style={{ fontSize: 18 }}>⚙</Text>
    </View>
  )}
  right={() => <List.Icon icon="chevron-right" color="#C9C9C9" />}
  style={{ paddingHorizontal: 16, backgroundColor: '#FFFFFF' }}
/>
<Divider style={{ backgroundColor: '#F5F5F5' }} />`;

const _toggleSnippet = `import { List, Switch, Divider } from 'react-native-paper';
import { View } from 'react-native';

// Settings Row — Toggle variant
const [on, setOn] = React.useState(true);

<List.Item
  title="Push Notifications"
  titleStyle={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}
  left={() => (
    <View style={{
      width: 34, height: 34, borderRadius: 12,
      backgroundColor: '#F5F5F5',
      alignItems: 'center', justifyContent: 'center',
      marginLeft: 16, alignSelf: 'center',
    }}>
      <Text style={{ fontSize: 18 }}>🔔</Text>
    </View>
  )}
  right={() => (
    <Switch
      value={on}
      onValueChange={setOn}
      color="#C6FF2D"
      style={{ alignSelf: 'center', marginRight: 16 }}
    />
  )}
  style={{ paddingHorizontal: 16, backgroundColor: '#FFFFFF' }}
/>
<Divider style={{ backgroundColor: '#F5F5F5' }} />`;

const _valueSnippet = `import { List, Divider } from 'react-native-paper';
import { View, Text } from 'react-native';

// Settings Row — Value variant
<List.Item
  title="Language"
  titleStyle={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}
  left={() => (
    <View style={{
      width: 34, height: 34, borderRadius: 12,
      backgroundColor: '#F5F5F5',
      alignItems: 'center', justifyContent: 'center',
      marginLeft: 16, alignSelf: 'center',
    }}>
      <Text style={{ fontSize: 18 }}>🌐</Text>
    </View>
  )}
  right={() => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 8 }}>
      <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' }}>
        English
      </Text>
      <List.Icon icon="chevron-right" color="#C9C9C9" />
    </View>
  )}
  style={{ paddingHorizontal: 16, backgroundColor: '#FFFFFF' }}
/>
<Divider style={{ backgroundColor: '#F5F5F5' }} />`;

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px">` +
  `<div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// SettingsRow — React Native Paper</div>` +
  _blk('Chevron variant (Default)', _chevronSnippet) +
  _blk('Toggle variant (WithToggle)', _toggleSnippet) +
  _blk('Value variant (WithValue)', _valueSnippet) +
  `</div>`;
