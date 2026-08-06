import * as tokens from '../../generated/tokens.js';

export default { title: 'Components/NavTurnCard' };

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

// ── Helpers ────────────────────────────────────────────────────────────────────
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function shadowFromToken(token) {
  if (token === 'none') return 'none';
  return token.offsetX + 'px ' + token.offsetY + 'px ' + token.blur + 'px ' + token.spread + 'px ' + hexToRgba(token.color);
}

// ── Default (static HTML) — 264x52px card ─────────────────────────────────────
export const Default = () => `
  <div style="
    width:264px;height:52px;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusMd}px;
    box-shadow:${shadowFromToken(tokens.elevationFloating)};
    display:flex;align-items:center;
    padding:0 12px;gap:10px;
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">
    <!-- Turn Arrow Chip -->
    <div style="
      width:36px;height:36px;
      background:${tokens.colorGrey100};
      border-radius:${tokens.radiusSm}px;
      display:flex;align-items:center;justify-content:center;
      font-size:18px;color:${tokens.colorTextPrimary};
      flex-shrink:0;
    ">&#11013;</div>
    <!-- Turn Text Col -->
    <div style="flex:1;min-width:0;">
      <div style="font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};">Turn left onto</div>
      <div style="font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Marine Drive</div>
    </div>
  </div>
`;

// ── Interactive — tap to fade out and remove ───────────────────────────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  // Map background
  const mapArea = document.createElement('div');
  mapArea.style.cssText = 'flex:1;background:#e8e8e8;position:relative;padding:16px;box-sizing:border-box;';

  // Nav Turn Card
  const card = document.createElement('div');
  card.style.cssText = `
    width:264px;height:52px;
    background:${tokens.colorSurfaceBase};
    border-radius:${tokens.radiusMd}px;
    box-shadow:${shadowFromToken(tokens.elevationFloating)};
    display:flex;align-items:center;
    padding:0 12px;gap:10px;
    box-sizing:border-box;
    font-family:Inter,sans-serif;
    cursor:pointer;
    transition:opacity 0.3s ease;
  `;

  const turnChip = document.createElement('div');
  turnChip.style.cssText = `width:36px;height:36px;background:${tokens.colorGrey100};border-radius:${tokens.radiusSm}px;display:flex;align-items:center;justify-content:center;font-size:18px;color:${tokens.colorTextPrimary};flex-shrink:0;`;
  turnChip.textContent = '\u2B05';

  const turnTextCol = document.createElement('div');
  turnTextCol.style.cssText = 'flex:1;min-width:0;';
  const turnAction = document.createElement('div');
  turnAction.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  turnAction.textContent = 'Turn left onto';
  const turnStreet = document.createElement('div');
  turnStreet.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:600;color:${tokens.colorTextPrimary};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`;
  turnStreet.textContent = 'Marine Drive';
  turnTextCol.appendChild(turnAction);
  turnTextCol.appendChild(turnStreet);

  card.appendChild(turnChip);
  card.appendChild(turnTextCol);

  // Tap → fade out → remove
  card.addEventListener('pointerdown', () => {
    card.style.opacity = '0';
    setTimeout(() => {
      if (card.parentNode) card.parentNode.removeChild(card);
    }, 300);
  });

  // Help text below
  const hint = document.createElement('div');
  hint.style.cssText = `margin-top:12px;font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  hint.textContent = 'Tap the card to dismiss it';

  mapArea.appendChild(card);
  mapArea.appendChild(hint);
  screen.appendChild(mapArea);
  return frame;
};

// ── Source Code ────────────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `import React, { useRef } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

// colorSurfaceBase: '#FFFFFF'   colorGrey100: '#F5F5F5'
// colorGrey500: '#808080'   colorTextPrimary: '#0F0F0F'
// elevationFloating shadow: 0 8px 24px 0 rgba(15,15,15,0.10)
// Card size: 264x52px, radiusMd: 16px

const NavTurnCard = ({ direction = 'left', street = 'Marine Drive', onDismiss }) => {
  const opacity = useRef(new Animated.Value(1)).current;

  const handleTap = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (onDismiss) onDismiss();
    });
  };

  return (
    <TouchableOpacity onPress={handleTap} activeOpacity={1}>
      <Animated.View style={[styles.card, { opacity }]}>
        <View style={styles.arrowChip}>
          <Text style={styles.arrowIcon}>{direction === 'left' ? '\u2B05' : '\u27A1'}</Text>
        </View>
        <View style={styles.textCol}>
          <Text style={styles.actionText}>Turn {direction} onto</Text>
          <Text style={styles.streetText} numberOfLines={1}>{street}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 264,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,           // radiusMd
    elevation: 4,               // elevationFloating
    shadowColor: '#0F0F0F',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
  },
  arrowChip: {
    width: 36,
    height: 36,
    backgroundColor: '#F5F5F5',  // colorGrey100
    borderRadius: 12,             // radiusSm
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIcon: { fontSize: 18, color: '#0F0F0F' },
  textCol: { flex: 1 },
  actionText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
  streetText: { fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' },
});

export default NavTurnCard;`;

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px">` +
  `<div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// NavTurnCard — React Native Paper (C-05)</div>` +
  _blk('NavTurnCard.tsx', RN_JSX) +
  `</div>`;
