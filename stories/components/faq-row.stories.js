import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/FaqRow' };

// ── Phone frame helper ─────────────────────────────────────────────────────────
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

// ── Collapsed — question visible, answer hidden ────────────────────────────────
export const Collapsed = () => `
  <div style="
    padding:var(--vv-space-5) 0;border-bottom:1px solid ${tokens.colorGrey100};
    cursor:pointer;font-family:Inter,sans-serif;max-width:390px;
    box-sizing:border-box;
  ">
    <div style="display:flex;align-items:center;padding:0 var(--vv-space-5);">
      <span style="
        flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);
        line-height:${tokens.fontLineHeightBodyMd}px;
        color:${tokens.colorTextPrimary};
      ">How is the price calculated?</span>
      <span style="
        color:${tokens.colorGrey300};font-size:var(--vv-text-heading-lg-size);line-height:1;
        display:inline-block;transform:rotate(0deg);
        transition:transform var(--vv-duration-standard) var(--vv-easing-standard);flex-shrink:0;margin-left:var(--vv-space-3);
      ">›</span>
    </div>
  </div>
`;

// ── Expanded — question + answer visible, chevron rotated 90deg ────────────────
export const Expanded = () => `
  <div style="
    padding:var(--vv-space-5) 0;border-bottom:1px solid ${tokens.colorGrey100};
    cursor:pointer;font-family:Inter,sans-serif;max-width:390px;
    box-sizing:border-box;
  ">
    <div style="display:flex;align-items:center;padding:0 var(--vv-space-5);">
      <span style="
        flex:1;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);
        line-height:${tokens.fontLineHeightBodyMd}px;
        color:${tokens.colorTextPrimary};
      ">How is the price calculated?</span>
      <span style="
        color:${tokens.colorTextPrimary};font-size:var(--vv-text-heading-lg-size);line-height:1;
        display:inline-block;transform:rotate(90deg);
        transition:transform var(--vv-duration-standard) var(--vv-easing-standard);flex-shrink:0;margin-left:var(--vv-space-3);
      ">›</span>
    </div>
    <div style="
      display:block;margin-top:var(--vv-space-3);padding:0 var(--vv-space-5);
      font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};
      line-height:1.5;color:${tokens.colorTextSecondary};
    ">Rides are billed per minute based on the rate shown at ride start. Electricity surcharges may apply during peak hours. The final bill is displayed on the Ride Complete screen.</div>
  </div>
`;

// ── Interactive — phone-framed with expand/collapse per row ────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;padding:0 0 var(--vv-space-5);box-sizing:border-box;overflow:auto;';

  // Section header
  const sectionHdr = document.createElement('div');
  sectionHdr.style.cssText = `padding:var(--vv-space-5) var(--vv-space-5) var(--vv-space-3);font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  sectionHdr.textContent = 'Frequently Asked Questions';
  content.appendChild(sectionHdr);

  // FAQ data
  const faqs = [
    {
      question: 'How is the price calculated?',
      answer: 'Rides are billed per minute based on the rate shown at ride start. Electricity surcharges may apply during peak hours. The final bill is displayed on the Ride Complete screen.',
      startExpanded: true,
    },
    {
      question: 'What if I can\'t find a charging hub?',
      answer: 'Charging hubs are visible on the map. If all nearby hubs are full, the app shows the next available hub within 2 km. You can also dock the bike at any authorised zone.',
      startExpanded: false,
    },
    {
      question: 'Is my deposit refundable?',
      answer: 'Yes. The security deposit is fully refundable if the bike is returned in good condition to an authorised zone. Releases typically take 24\u201372 hours.',
      startExpanded: false,
    },
    {
      question: 'What happens if I\'m in an accident?',
      answer: 'Your safety is our priority. In case of an accident, press the SOS button in the Active Ride screen to alert emergency services. Report the incident through the in-app Support section.',
      startExpanded: false,
    },
  ];

  faqs.forEach(({ question, answer, startExpanded }) => {
    // Per-row state
    let expanded = startExpanded;

    const rowWrap = document.createElement('div');
    rowWrap.style.cssText = `padding:0;border-bottom:1px solid ${tokens.colorGrey100};box-sizing:border-box;`;

    // Question row (clickable)
    const qRow = document.createElement('div');
    qRow.style.cssText = 'display:flex;align-items:center;padding:var(--vv-space-5) var(--vv-space-5) 0;cursor:pointer;user-select:none;';

    const qText = document.createElement('span');
    qText.style.cssText = `flex:1;font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-heading);line-height:${tokens.fontLineHeightBodyMd}px;color:${tokens.colorTextPrimary};`;
    qText.textContent = question;

    const chevron = document.createElement('span');
    chevron.style.cssText = `font-size:var(--vv-text-heading-lg-size);line-height:1;display:inline-block;flex-shrink:0;margin-left:var(--vv-space-3);transition:transform var(--vv-duration-standard) var(--vv-easing-standard);`;
    chevron.textContent = '›';

    // Answer element
    const answerEl = document.createElement('div');
    answerEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};line-height:1.5;color:${tokens.colorTextSecondary};padding:var(--vv-space-3) var(--vv-space-5) var(--vv-space-5);`;
    answerEl.textContent = answer;

    // Set initial state
    if (expanded) {
      chevron.style.transform = 'rotate(90deg)';
      chevron.style.color = tokens.colorTextPrimary;
      answerEl.style.display = 'block';
    } else {
      chevron.style.transform = 'rotate(0deg)';
      chevron.style.color = tokens.colorGrey300;
      answerEl.style.display = 'none';
    }

    qRow.appendChild(qText);
    qRow.appendChild(chevron);

    // Toggle on pointerdown
    qRow.addEventListener('pointerdown', () => {
      expanded = !expanded;
      if (expanded) {
        answerEl.style.display = 'block';
        chevron.style.transform = 'rotate(90deg)';
        chevron.style.color = tokens.colorTextPrimary;
      } else {
        answerEl.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
        chevron.style.color = tokens.colorGrey300;
      }
    });

    rowWrap.appendChild(qRow);
    rowWrap.appendChild(answerEl);
    content.appendChild(rowWrap);
  });

  screen.appendChild(content);
  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, html) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;
}

const _collapsedSnippet = `import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

// colorGrey100: '#F5F5F5'  colorGrey300: '#C9C9C9'
// colorTextPrimary: '#0F0F0F'  colorTextSecondary: '#808080'

// FAQ Row — Collapsed state
<View style={{ paddingVertical: 0 }}>
  <TouchableOpacity
    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}
    onPress={toggleExpand}
  >
    <Text style={{
      flex: 1,
      fontFamily: 'Inter', fontSize: 15, fontWeight: '600', lineHeight: 22,
      color: '#0F0F0F',
    }}>
      How is the price calculated?
    </Text>
    <Text style={{
      fontSize: 20, color: '#C9C9C9',
      transform: [{ rotate: '0deg' }],
    }}>›</Text>
  </TouchableOpacity>
  <Divider style={{ backgroundColor: '#F5F5F5' }} />
</View>`;

const _expandedSnippet = `// FAQ Row — Expanded state (answer visible, chevron rotated 90deg)
const [expanded, setExpanded] = useState(true);

<View style={{ paddingVertical: 0 }}>
  <TouchableOpacity
    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}
    onPress={() => setExpanded(v => !v)}
  >
    <Text style={{
      flex: 1,
      fontFamily: 'Inter', fontSize: 15, fontWeight: '600', lineHeight: 22,
      color: '#0F0F0F',
    }}>
      How is the price calculated?
    </Text>
    <Text style={{
      fontSize: 20,
      color: expanded ? '#0F0F0F' : '#C9C9C9',
      transform: [{ rotate: expanded ? '90deg' : '0deg' }],
    }}>›</Text>
  </TouchableOpacity>

  {expanded && (
    <Text style={{
      fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: 22,
      color: '#808080', paddingBottom: 16,
    }}>
      Rides are billed per minute based on the rate shown at ride start.
      Electricity surcharges may apply during peak hours.
      The final bill is displayed on the Ride Complete screen.
    </Text>
  )}
  <Divider style={{ backgroundColor: '#F5F5F5' }} />
</View>`;

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px">` +
  `<div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// FaqRow — React Native Paper</div>` +
  _blk('Collapsed state', _collapsedSnippet) +
  _blk('Expanded state (stateful)', _expandedSnippet) +
  `</div>`;
