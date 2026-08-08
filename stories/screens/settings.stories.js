import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Settings' };

// ── Phone frame helper (inline per file — 402x874px, Volt Black #0f0f0f, 44px radius) ──
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

// ── Default (static HTML) ──────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;min-height:852px;display:flex;flex-direction:column;
    background:${tokens.colorGrey050};box-sizing:border-box;font-family:Inter,sans-serif;
  ">
    <!-- Status Bar (62px) — light surface on colorGrey050 -->
    <div style="height:62px;background:${tokens.colorGrey050};display:flex;align-items:center;justify-content:space-between;padding:0 var(--vv-space-6);box-sizing:border-box;flex-shrink:0;">
      <span style="font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:var(--vv-text-label-sm-size);color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>
    <!-- Header Row (44px) -->
    <div style="height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);flex-shrink:0;">
      <div style="width:36px;height:36px;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;box-sizing:border-box;flex-shrink:0;">&#8592;</div>
      <span style="font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);line-height:${tokens.fontLineHeightHeadingMd}px;color:${tokens.colorTextPrimary};">Settings</span>
    </div>
    <!-- ACCOUNT Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">ACCOUNT</div>
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;">
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#9881;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Preferences</span>
          <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#128272;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Login &amp; Security</span>
          <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
        </div>
      </div>
    </div>
    <!-- SUPPORT & LEGAL Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">SUPPORT &amp; LEGAL</div>
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;">
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#127911;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Help &amp; Support</span>
          <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#128196;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Terms of Service</span>
          <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
        </div>
        <div style="height:1px;background:${tokens.colorGrey100};"></div>
        <div style="display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
          <div style="width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;">&#128737;</div>
          <span style="flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Privacy Policy</span>
          <span style="color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
        </div>
      </div>
    </div>
    <!-- Danger Zone Section -->
    <div style="margin:var(--vv-space-5) var(--vv-space-5) 0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#D64545;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);">
        DANGER ZONE <!-- #D64545 — destructive red, no VV token -->
      </div>
      <div style="background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;">
        <div style="width:34px;height:34px;background:#FDECEC;border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">
          <!-- #FDECEC — pale red, no VV token -->
          &#128465;
        </div>
        <div style="flex:1;">
          <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">Delete Account</div>
          <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);">Permanent action, cannot be undone</div>
        </div>
        <span style="color:#D64545;font-size:var(--vv-text-heading-lg-size);line-height:1;">&#8250;</span>
      </div>
    </div>
    <!-- Spacer -->
    <div style="flex:1;"></div>
    <!-- Footer -->
    <div style="text-align:center;margin:var(--vv-space-5) var(--vv-space-5) var(--vv-space-7);">
      <span style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey300};">VoltVenture v1.0.0</span>
    </div>
  </div>
`;

// ── Interactive ────────────────────────────────────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();
  screen.style.background = tokens.colorGrey050; /* match settings colorGrey050 bg */

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:auto;';

  // Status bar space
  const sb = document.createElement('div');
  sb.style.cssText = `height:20px;background:${tokens.colorGrey050};flex-shrink:0;`;
  content.appendChild(sb);

  // Header
  const header = document.createElement('div');
  header.style.cssText = 'height:44px;display:flex;align-items:center;padding:0 var(--vv-space-5);gap:var(--vv-space-4);flex-shrink:0;';
  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;box-sizing:border-box;flex-shrink:0;`;
  backBtn.textContent = '\u2190';
  const titleEl = document.createElement('span');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'Settings';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  function makeDivider() {
    const d = document.createElement('div');
    d.style.cssText = `height:1px;background:${tokens.colorGrey100};`;
    return d;
  }

  function makeChevronRow(icon, label) {
    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;min-height:48px;padding:var(--vv-space-4) var(--vv-space-5);gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;background:${tokens.colorSurfaceBase};`;
    row.addEventListener('pointerdown', () => { row.style.background = tokens.colorGrey050; });
    row.addEventListener('pointerup', () => { row.style.background = tokens.colorSurfaceBase; });
    row.addEventListener('pointerleave', () => { row.style.background = tokens.colorSurfaceBase; });
    const chip = document.createElement('div');
    chip.style.cssText = `width:30px;height:30px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:var(--vv-text-body-md-size);flex-shrink:0;`;
    chip.textContent = icon;
    const text = document.createElement('span');
    text.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
    text.textContent = label;
    const chev = document.createElement('span');
    chev.style.cssText = `color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;`;
    chev.textContent = '\u203a';
    row.appendChild(chip);
    row.appendChild(text);
    row.appendChild(chev);
    return row;
  }

  // ACCOUNT section
  const accWrap = document.createElement('div');
  accWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const accLbl = document.createElement('div');
  accLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  accLbl.textContent = 'ACCOUNT';
  accWrap.appendChild(accLbl);
  const accCard = document.createElement('div');
  accCard.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;`;
  accCard.appendChild(makeChevronRow('\u2699', 'Preferences'));
  accCard.appendChild(makeDivider());
  accCard.appendChild(makeChevronRow('\uD83D\uDD10', 'Login & Security'));
  accWrap.appendChild(accCard);
  content.appendChild(accWrap);

  // SUPPORT & LEGAL section
  const suppWrap = document.createElement('div');
  suppWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const suppLbl = document.createElement('div');
  suppLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  suppLbl.textContent = 'SUPPORT & LEGAL';
  suppWrap.appendChild(suppLbl);
  const suppCard = document.createElement('div');
  suppCard.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;`;
  suppCard.appendChild(makeChevronRow('\uD83C\uDFA7', 'Help & Support'));
  suppCard.appendChild(makeDivider());
  suppCard.appendChild(makeChevronRow('\uD83D\uDCC4', 'Terms of Service'));
  suppCard.appendChild(makeDivider());
  suppCard.appendChild(makeChevronRow('\uD83D\uDEE1', 'Privacy Policy'));
  suppWrap.appendChild(suppCard);
  content.appendChild(suppWrap);

  // Danger Zone
  const dangerWrap = document.createElement('div');
  dangerWrap.style.cssText = 'margin:var(--vv-space-5) var(--vv-space-5) 0;';
  const dangerLbl = document.createElement('div');
  dangerLbl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#D64545;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:var(--vv-space-3);`;
  /* #D64545 — destructive red, no VV token */
  dangerLbl.textContent = 'DANGER ZONE';
  dangerWrap.appendChild(dangerLbl);

  const deleteRow = document.createElement('div');
  deleteRow.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-4);cursor:pointer;box-sizing:border-box;`;
  deleteRow.addEventListener('pointerdown', () => { deleteRow.style.backgroundColor = '#FEF2F2'; });
  deleteRow.addEventListener('pointerup', () => { deleteRow.style.backgroundColor = tokens.colorSurfaceBase; });
  deleteRow.addEventListener('pointerleave', () => { deleteRow.style.backgroundColor = tokens.colorSurfaceBase; });

  const deleteChip = document.createElement('div');
  deleteChip.style.cssText = `width:34px;height:34px;background:#FDECEC;border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
  /* #FDECEC — pale red, no VV token */
  deleteChip.textContent = '\uD83D\uDDD1';

  const deleteCol = document.createElement('div');
  deleteCol.style.cssText = 'flex:1;';
  const deleteTitle = document.createElement('div');
  deleteTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  deleteTitle.textContent = 'Delete Account';
  const deleteSub = document.createElement('div');
  deleteSub.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);`;
  deleteSub.textContent = 'Permanent action, cannot be undone';
  deleteCol.appendChild(deleteTitle);
  deleteCol.appendChild(deleteSub);

  const deleteChev = document.createElement('span');
  deleteChev.style.cssText = 'color:#D64545;font-size:var(--vv-text-heading-lg-size);line-height:1;';
  deleteChev.textContent = '\u203a';

  deleteRow.appendChild(deleteChip);
  deleteRow.appendChild(deleteCol);
  deleteRow.appendChild(deleteChev);
  dangerWrap.appendChild(deleteRow);
  content.appendChild(dangerWrap);

  // Spacer + footer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  const footer = document.createElement('div');
  footer.style.cssText = 'text-align:center;margin:var(--vv-space-5) var(--vv-space-5) var(--vv-space-7);';
  const footerText = document.createElement('span');
  footerText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey300};`;
  footerText.textContent = 'VoltVenture v1.0.0';
  footer.appendChild(footerText);
  content.appendChild(footer);

  screen.appendChild(content);
  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

// colorGrey050: '#FAFAFA'   colorSurfaceBase: '#FFFFFF'
// colorGrey100: '#F5F5F5'   colorGrey200: '#EBEBEB'
// colorGrey300: '#C9C9C9'   colorGrey500: '#808080'
// #FDECEC — pale red (no VV token)
// #D64545 — destructive red (no VV token)

const SettingsScreen = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
    {/* Header */}
    <View style={{ height: 44, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 }}>
      <TouchableOpacity style={{ width: 36, height: 36, borderRadius: 999, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#EBEBEB', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18 }}>{'\u2190'}</Text>
      </TouchableOpacity>
      <Text style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: '700', color: '#0F0F0F' }}>Settings</Text>
    </View>

    {/* ACCOUNT Section */}
    <Text style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', textTransform: 'uppercase' }}>ACCOUNT</Text>
    <View style={{ marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 20, overflow: 'hidden' }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', minHeight: 48, paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
        <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F', flex: 1 }}>Preferences</Text>
        <Text style={{ color: '#C9C9C9', fontSize: 20 }}>{'\u203a'}</Text>
      </TouchableOpacity>
      <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', minHeight: 48, paddingHorizontal: 16, paddingVertical: 12, gap: 12 }}>
        <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F', flex: 1 }}>Login &amp; Security</Text>
        <Text style={{ color: '#C9C9C9', fontSize: 20 }}>{'\u203a'}</Text>
      </TouchableOpacity>
    </View>

    {/* Danger Zone */}
    <Text style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8, fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#D64545', textTransform: 'uppercase' }}>
      DANGER ZONE
    </Text>
    <TouchableOpacity style={{ marginHorizontal: 16, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <View style={{ width: 34, height: 34, backgroundColor: '#FDECEC', borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>
        {/* #FDECEC — pale red, no VV token */}
        <Text style={{ fontSize: 16 }}>{'\uD83D\uDDD1'}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>Delete Account</Text>
        <Text style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080', marginTop: 2 }}>Permanent action, cannot be undone</Text>
      </View>
      <Text style={{ color: '#D64545', fontSize: 20 }}>{'\u203a'}</Text>
    </TouchableOpacity>
  </ScrollView>
);

export default SettingsScreen;`;

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px">` +
  `<div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Settings — React Native Paper</div>` +
  _blk('SettingsScreen.tsx', RN_JSX) +
  `</div>`;
