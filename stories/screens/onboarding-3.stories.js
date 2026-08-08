import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Onboarding3' };

// ── Shared template helpers ────────────────────────────────────────────────────

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

// ── Default export ─────────────────────────────────────────────────────────────

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    overflow:hidden;
    box-sizing:border-box;
  ">
    <!-- Status Bar (light surface) -->
    <div style="
      height:62px;
      flex-shrink:0;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 ${tokens.space400}px;
      background:${tokens.colorSurfaceBase};
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        color:${tokens.colorTextPrimary};
      ">9:41</span>
      <span style="
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorTextPrimary};
        letter-spacing:2px;
      ">&#9646; WiFi &#9650;</span>
    </div>

    <!-- Skip row (44px, right-aligned) -->
    <div style="
      height:44px;
      flex-shrink:0;
      display:flex;
      align-items:center;
      justify-content:flex-end;
      padding:0 ${tokens.space400}px;
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelMd.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelMd.fontSize}px;
        font-weight:${tokens.typeLabelMd.fontWeight};
        color:${tokens.colorTextSecondary};
        cursor:pointer;
      ">Skip</span>
    </div>

    <!-- Illustration area (420px, position:relative) -->
    <div style="
      height:420px;
      flex-shrink:0;
      background:#e8e8e8;
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="
        font-family:'${tokens.typeBodySm.fontFamily}',sans-serif;
        font-size:${tokens.typeBodySm.fontSize}px;
        color:${tokens.colorTextSecondary};
      ">[ Illustration ]</span>
      <!-- Screen number badge -->
      <div style="
        position:absolute;
        top:${tokens.space400}px;
        right:${tokens.space400}px;
        background:${tokens.colorSurfaceBase};
        color:${tokens.colorGrey500};
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        border-radius:${tokens.radiusFull}px;
        padding:var(--vv-space-2) var(--vv-space-4);
        box-sizing:border-box;
      ">03 / 03</div>
    </div>

    <!-- Content area -->
    <div style="
      flex:1;
      padding:${tokens.space600}px ${tokens.space500}px;
      display:flex;
      flex-direction:column;
      box-sizing:border-box;
    ">
      <!-- Pagination dots row -->
      <div style="
        display:flex;
        gap:6px;
        margin-bottom:${tokens.space500}px;
      ">
        <!-- Dot 1: inactive (8×8px circle) -->
        <div style="
          width:8px;
          height:8px;
          border-radius:var(--vv-radius-full);
          background:${tokens.colorGrey300};
          flex-shrink:0;
        "></div>
        <!-- Dot 2: inactive (8×8px circle) -->
        <div style="
          width:8px;
          height:8px;
          border-radius:var(--vv-radius-full);
          background:${tokens.colorGrey300};
          flex-shrink:0;
        "></div>
        <!-- Dot 3: active (24×8px pill) -->
        <div style="
          width:24px;
          height:8px;
          border-radius:4px;
          background:${tokens.colorSurfaceInverse};
          flex-shrink:0;
        "></div>
      </div>

      <!-- Headline -->
      <div style="
        font-family:'${tokens.typeHeadingLg.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingLg.fontSize}px;
        font-weight:${tokens.typeHeadingLg.fontWeight};
        line-height:${tokens.typeHeadingLg.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-bottom:${tokens.space300}px;
      ">Earn While You Ride</div>

      <!-- Subtext -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextSecondary};
      ">Collect VoltCoins on every ride. Redeem for discounts, perks, and VIP hub access.</div>

      <!-- Spacer -->
      <div style="flex:1;"></div>

      <!-- CTA Button -->
      <button style="
        width:100%;
        height:56px;
        background:${tokens.colorActionPrimary};
        color:${tokens.colorTextPrimary};
        border:none;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:var(--ds-font-weight-heading);
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;
        padding-bottom:${tokens.space200}px;
      ">Get Started &#8594;</button>
    </div>
  </div>
`;

// ── Interactive export ─────────────────────────────────────────────────────────

export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Content area (below status bar)
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:hidden;background:var(--vv-color-surface-base)';

  // Skip row
  const skipRow = document.createElement('div');
  skipRow.style.cssText = 'height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding:0 var(--vv-space-5);box-sizing:border-box';
  const skipLabel = document.createElement('span');
  skipLabel.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-secondary);cursor:pointer';
  skipLabel.textContent = 'Skip';
  skipRow.appendChild(skipLabel);

  // Illustration area
  const illus = document.createElement('div');
  illus.style.cssText = 'height:420px;flex-shrink:0;background:#e8e8e8;position:relative;display:flex;align-items:center;justify-content:center';
  const illusLabel = document.createElement('span');
  illusLabel.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-body-sm-size);color:var(--vv-color-text-secondary)';
  illusLabel.textContent = '[ Illustration ]';
  illus.appendChild(illusLabel);

  // Screen number badge
  const badge = document.createElement('div');
  badge.style.cssText = 'position:absolute;top:16px;right:16px;background:var(--vv-color-surface-base);color:var(--vv-color-text-secondary);font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);border-radius:var(--vv-radius-full);padding:var(--vv-space-2) var(--vv-space-4);box-sizing:border-box';
  badge.textContent = '03 / 03';
  illus.appendChild(badge);

  // Content panel
  const panel = document.createElement('div');
  panel.style.cssText = 'flex:1;padding:var(--vv-space-7) var(--vv-space-6);display:flex;flex-direction:column;box-sizing:border-box';

  // Pagination dots row
  const dotsRow = document.createElement('div');
  dotsRow.style.cssText = 'display:flex;gap:6px;margin-bottom:var(--vv-space-6)';

  const dot1 = document.createElement('div');
  dot1.style.cssText = 'width:8px;height:8px;border-radius:var(--vv-radius-full);background:var(--vv-color-text-disabled);flex-shrink:0';
  const dot2 = document.createElement('div');
  dot2.style.cssText = 'width:8px;height:8px;border-radius:var(--vv-radius-full);background:var(--vv-color-text-disabled);flex-shrink:0';
  const dot3 = document.createElement('div');
  dot3.style.cssText = 'width:24px;height:8px;border-radius:4px;background:var(--vv-color-surface-inverse);flex-shrink:0';

  dotsRow.appendChild(dot1);
  dotsRow.appendChild(dot2);
  dotsRow.appendChild(dot3);

  // Headline
  const headline = document.createElement('div');
  headline.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-heading-lg-size);font-weight:var(--ds-font-weight-heading);line-height:26px;color:var(--vv-color-text-primary);margin-bottom:var(--vv-space-4)';
  headline.textContent = 'Earn While You Ride';

  // Subtext
  const subtext = document.createElement('div');
  subtext.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);line-height:22px;color:var(--vv-color-text-secondary)';
  subtext.textContent = 'Collect VoltCoins on every ride. Redeem for discounts, perks, and VIP hub access.';

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1';

  // CTA button
  const ctaBtn = document.createElement('button');
  ctaBtn.style.cssText = 'width:100%;height:56px;background:var(--vv-color-action-primary);color:var(--vv-color-text-primary);border:none;border-radius:var(--vv-radius-full);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);cursor:pointer;display:flex;align-items:center;justify-content:center;box-sizing:border-box;transition:transform var(--vv-duration-fast) var(--vv-easing-standard),background-color var(--vv-duration-fast) var(--vv-easing-standard)';
  ctaBtn.textContent = 'Get Started \u2192';

  ctaBtn.addEventListener('pointerdown', () => {
    ctaBtn.style.backgroundColor = 'var(--vv-color-action-primary-pressed)';
    ctaBtn.style.transform = 'scale(0.97)';
  });
  ctaBtn.addEventListener('pointerup', () => {
    ctaBtn.style.backgroundColor = 'var(--vv-color-action-primary)';
    ctaBtn.style.transform = 'scale(1)';
  });
  ctaBtn.addEventListener('pointerleave', () => {
    ctaBtn.style.backgroundColor = 'var(--vv-color-action-primary)';
    ctaBtn.style.transform = 'scale(1)';
  });

  panel.appendChild(dotsRow);
  panel.appendChild(headline);
  panel.appendChild(subtext);
  panel.appendChild(spacer);
  panel.appendChild(ctaBtn);

  content.appendChild(skipRow);
  content.appendChild(illus);
  content.appendChild(panel);
  screen.appendChild(content);

  return frame;
};

// ── SourceCode export ──────────────────────────────────────────────────────────

function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) { return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`; }

const RN_JSX = `import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorActionPrimary  = '#c6ff2d'
// tokens.colorSurfaceBase    = '#ffffff'
// tokens.colorTextPrimary    = '#0f0f0f'
// tokens.colorGrey300        = '#c9c9c9'
// tokens.colorSurfaceInverse = '#0f0f0f'

const theme = createVoltVentureTheme();

export default function Onboarding3Screen({ navigation }) {
  return (
    <Surface style={styles.container} theme={theme}>
      {/* Status bar */}
      <View style={styles.statusBar} />

      {/* Skip row */}
      <View style={styles.skipRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.skipLabel}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration placeholder */}
      <View style={styles.illustration}>
        {/* Screen number badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>03 / 03</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Pagination dots — dot 3 active */}
        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotInactive]} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <Text style={styles.headline}>
          Earn While You Ride
        </Text>
        <Text style={styles.subtext}>
          Collect VoltCoins on every ride. Redeem for discounts, perks, and VIP hub access.
        </Text>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Registration')}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaLabel}>Get Started →</Text>
        </TouchableOpacity>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  statusBar: { height: 62, backgroundColor: '#ffffff' },
  skipRow: { height: 44, justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal: 16 },
  skipLabel: { fontSize: 13, fontWeight: '600', color: '#808080', fontFamily: 'Inter' },
  illustration: { height: 420, backgroundColor: '#e8e8e8', position: 'relative', justifyContent: 'center', alignItems: 'center' },
  badge: { position: 'absolute', top: 16, right: 16, backgroundColor: '#ffffff', borderRadius: 999, paddingVertical: 4, paddingHorizontal: 12 },
  badgeText: { fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 24, paddingBottom: 34 },
  dotsRow: { flexDirection: 'row', gap: 6, marginBottom: 20 },
  dot: { height: 8, borderRadius: 999 },
  dotActive: { width: 24, backgroundColor: '#0f0f0f' },
  dotInactive: { width: 8, backgroundColor: '#c9c9c9' },
  headline: { fontSize: 20, fontWeight: '600', lineHeight: 26, color: '#0f0f0f', fontFamily: 'Inter', marginBottom: 12 },
  subtext: { fontSize: 15, fontWeight: '400', lineHeight: 22, color: '#808080', fontFamily: 'Inter' },
  ctaButton: { width: '100%', height: 56, backgroundColor: '#c6ff2d', borderRadius: 999, justifyContent: 'center', alignItems: 'center' },
  ctaLabel: { fontSize: 15, fontWeight: '600', color: '#0f0f0f', fontFamily: 'Inter' },
});`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/Onboarding3 — React Native Paper</div>${_blk('Onboarding3Screen.tsx', RN_JSX)}</div>`;
