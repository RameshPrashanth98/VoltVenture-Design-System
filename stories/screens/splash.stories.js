import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Splash' };

// ── Default ───────────────────────────────────────────────────────────────────
export const Default = () => `
  <style>
    @keyframes loaderFill {
      from { width: 0px; }
      to   { width: 108px; }
    }
  </style>
  <div style="
    width:393px;
    min-height:852px;
    background:${tokens.colorSurfaceBase};
    position:relative;
    overflow:hidden;
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">
    <!-- Background pattern layer (opacity:0.08): angled decorative rectangles -->
    <div style="position:absolute;inset:0;pointer-events:none;opacity:0.08">
      <!-- 8 thin angled rectangles: colorGrey200 fill, 3x40px, scattered -->
      <div style="position:absolute;top:60px;left:30px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(-35deg)"></div>
      <div style="position:absolute;top:110px;left:340px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(20deg)"></div>
      <div style="position:absolute;top:200px;left:60px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(50deg)"></div>
      <div style="position:absolute;top:300px;left:360px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(-60deg)"></div>
      <div style="position:absolute;top:500px;left:20px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(15deg)"></div>
      <div style="position:absolute;top:620px;left:350px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(-45deg)"></div>
      <div style="position:absolute;top:700px;left:90px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(70deg)"></div>
      <div style="position:absolute;top:760px;left:300px;width:3px;height:40px;background:${tokens.colorGrey200};transform:rotate(-25deg)"></div>
      <!-- 6 small grey dots (6x6px circles, colorGrey300) -->
      <div style="position:absolute;top:80px;left:180px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey300}"></div>
      <div style="position:absolute;top:160px;left:320px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey300}"></div>
      <div style="position:absolute;top:380px;left:50px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey300}"></div>
      <div style="position:absolute;top:450px;left:370px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey300}"></div>
      <div style="position:absolute;top:560px;left:200px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey300}"></div>
      <div style="position:absolute;top:680px;left:130px;width:6px;height:6px;border-radius:var(--vv-radius-full);background:${tokens.colorGrey300}"></div>
    </div>

    <!-- Center content (absolutely centered) -->
    <div style="
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
      width:100%;
    ">
      <!-- Logo Badge: 96x96px green circle with V lettermark -->
      <div style="
        width:96px;
        height:96px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorActionPrimary};
        display:flex;
        align-items:center;
        justify-content:center;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:48px;
          font-weight:var(--ds-font-weight-display);
          color:${tokens.colorTextPrimary};
          line-height:1;
        ">V</span>
      </div>

      <!-- Brand Name -->
      <div style="
        margin-top:var(--vv-space-5);
        font-family:Inter,sans-serif;
        font-size:var(--vv-text-display-md-size);
        font-weight:var(--ds-font-weight-display);
        line-height:36px;
        color:${tokens.colorTextPrimary};
        letter-spacing:-0.02em;
      ">VoltVenture</div>

      <!-- Divider: 48x2px centered, 16px vertical margin -->
      <div style="
        width:48px;
        height:2px;
        background:${tokens.colorGrey200};
        margin:var(--vv-space-5) auto;
      "></div>

      <!-- Tagline -->
      <div style="
        font-family:Inter,sans-serif;
        font-size:14px;
        font-weight:var(--ds-font-weight-body);
        line-height:20px;
        color:${tokens.colorTextSecondary};
      ">Ride. Explore. Repeat.</div>
    </div>

    <!-- Loader Area: position:absolute, bottom:120px, centered -->
    <div style="
      position:absolute;
      bottom:120px;
      left:50%;
      transform:translateX(-50%);
      display:flex;
      flex-direction:column;
      align-items:center;
    ">
      <!-- Track: 180x4px -->
      <div style="
        width:180px;
        height:4px;
        background:${tokens.colorGrey200};
        border-radius:4px;
        overflow:hidden;
      ">
        <!-- Fill: 108px = 60% of track, animated -->
        <div style="
          width:108px;
          height:4px;
          background:${tokens.colorActionPrimary};
          border-radius:4px;
          animation:loaderFill 2s ease-out forwards;
        "></div>
      </div>
    </div>

    <!-- Version text: bottom:24px, centered -->
    <div style="
      position:absolute;
      bottom:24px;
      left:50%;
      transform:translateX(-50%);
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-label-sm-size);
      font-weight:var(--ds-font-weight-body);
      line-height:16px;
      color:${tokens.colorGrey300};
      white-space:nowrap;
    ">v1.0.0</div>
  </div>
`;

// ── Interactive ───────────────────────────────────────────────────────────────
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

  // Inject loaderFill keyframe once
  if (!document.getElementById('splash-keyframes')) {
    const style = document.createElement('style');
    style.id = 'splash-keyframes';
    style.textContent = '@keyframes loaderFill { from { width:0px } to { width:108px } }';
    document.head.appendChild(style);
  }

  const { frame, screen } = makePhoneFrame();
  // Splash is a light-variant screen — screen background stays #ffffff (default)

  // Content wrapper: fills remaining space, centered
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;position:relative;overflow:hidden';

  // ── Background pattern layer ──
  const patternLayer = document.createElement('div');
  patternLayer.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0.08';

  const rects = [
    { top:60,  left:30,  rot:-35 }, { top:110, left:340, rot:20  },
    { top:200, left:60,  rot:50  }, { top:300, left:360, rot:-60 },
    { top:500, left:20,  rot:15  }, { top:620, left:350, rot:-45 },
    { top:700, left:90,  rot:70  }, { top:760, left:300, rot:-25 }
  ];
  rects.forEach(function(r) {
    const el = document.createElement('div');
    el.style.cssText = 'position:absolute;width:3px;height:40px;background:' + tokens.colorGrey200
      + ';top:' + r.top + 'px;left:' + r.left + 'px;transform:rotate(' + r.rot + 'deg)';
    patternLayer.appendChild(el);
  });

  const dots = [
    { top:80,  left:180 }, { top:160, left:320 },
    { top:380, left:50  }, { top:450, left:370 },
    { top:560, left:200 }, { top:680, left:130 }
  ];
  dots.forEach(function(d) {
    const el = document.createElement('div');
    el.style.cssText = 'position:absolute;width:6px;height:6px;border-radius:var(--vv-radius-full);background:'
      + tokens.colorGrey300 + ';top:' + d.top + 'px;left:' + d.left + 'px';
    patternLayer.appendChild(el);
  });
  content.appendChild(patternLayer);

  // ── Center content ──
  const centerWrap = document.createElement('div');
  centerWrap.style.cssText = [
    'position:absolute', 'top:50%', 'left:50%',
    'transform:translate(-50%,-50%)',
    'display:flex', 'flex-direction:column', 'align-items:center',
    'text-align:center', 'width:100%'
  ].join(';');

  // Logo badge
  const badge = document.createElement('div');
  badge.style.cssText = [
    'width:96px', 'height:96px', 'border-radius:' + tokens.radiusFull + 'px',
    'background:' + tokens.colorActionPrimary,
    'display:flex', 'align-items:center', 'justify-content:center'
  ].join(';');
  const vLetter = document.createElement('span');
  vLetter.style.cssText = 'font-family:Inter,sans-serif;font-size:48px;font-weight:var(--ds-font-weight-display);color:' + tokens.colorTextPrimary + ';line-height:1';
  vLetter.textContent = 'V';
  badge.appendChild(vLetter);
  centerWrap.appendChild(badge);

  // Brand name
  const brandName = document.createElement('div');
  brandName.style.cssText = 'margin-top:var(--vv-space-5);font-family:Inter,sans-serif;font-size:var(--vv-text-display-md-size);font-weight:var(--ds-font-weight-display);line-height:36px;color:' + tokens.colorTextPrimary + ';letter-spacing:-0.02em';
  brandName.textContent = 'VoltVenture';
  centerWrap.appendChild(brandName);

  // Divider
  const divider = document.createElement('div');
  divider.style.cssText = 'width:48px;height:2px;background:' + tokens.colorGrey200 + ';margin:var(--vv-space-5) auto';
  centerWrap.appendChild(divider);

  // Tagline
  const tagline = document.createElement('div');
  tagline.style.cssText = 'font-family:Inter,sans-serif;font-size:14px;font-weight:var(--ds-font-weight-body);line-height:20px;color:' + tokens.colorTextSecondary;
  tagline.textContent = 'Ride. Explore. Repeat.';
  centerWrap.appendChild(tagline);

  content.appendChild(centerWrap);

  // ── Loader area ──
  const loaderArea = document.createElement('div');
  loaderArea.style.cssText = [
    'position:absolute', 'bottom:120px', 'left:50%', 'transform:translateX(-50%)',
    'display:flex', 'flex-direction:column', 'align-items:center'
  ].join(';');

  const track = document.createElement('div');
  track.style.cssText = 'width:180px;height:4px;background:' + tokens.colorGrey200 + ';border-radius:4px;overflow:hidden';

  const fill = document.createElement('div');
  fill.style.cssText = 'width:0px;height:4px;background:' + tokens.colorActionPrimary + ';border-radius:4px;animation:loaderFill 2s ease-out forwards';

  track.appendChild(fill);
  loaderArea.appendChild(track);
  content.appendChild(loaderArea);

  // ── Version text ──
  const version = document.createElement('div');
  version.style.cssText = [
    'position:absolute', 'bottom:24px', 'left:50%', 'transform:translateX(-50%)',
    'font-family:Inter,sans-serif', 'font-size:var(--vv-text-label-sm-size)', 'font-weight:var(--ds-font-weight-body)',
    'line-height:16px', 'color:' + tokens.colorGrey300, 'white-space:nowrap'
  ].join(';');
  version.textContent = 'v1.0.0';
  content.appendChild(version);

  screen.appendChild(content);
  return frame;
};

// ── Source code panel ─────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}

const _rnSource = `import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

// Token constants (from voltventure_tokens.ts)
// colorActionPrimary: '#C6FF2D'
// colorSurfaceBase:   '#FFFFFF'
// colorTextPrimary:   '#0F0F0F'
// colorTextSecondary: '#808080'
// colorGrey200:       '#EBEBEB'
// colorGrey300:       '#C9C9C9'

export function SplashScreen() {
  const loaderAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(loaderAnim, {
      toValue: 108,
      duration: 2000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [loaderAnim]);

  return (
    <View style={styles.screen}>
      {/* Center content */}
      <View style={styles.center}>
        {/* Logo Badge */}
        <View style={styles.badge}>
          <Text style={styles.vLetter}>V</Text>
        </View>
        {/* Brand Name */}
        <Text style={styles.brandName}>VoltVenture</Text>
        {/* Divider */}
        <View style={styles.divider} />
        {/* Tagline */}
        <Text style={styles.tagline}>Ride. Explore. Repeat.</Text>
      </View>

      {/* Loader */}
      <View style={styles.loaderArea}>
        <View style={styles.loaderTrack}>
          <Animated.View style={[styles.loaderFill, { width: loaderAnim }]} />
        </View>
      </View>

      {/* Version */}
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  center: {
    alignItems: 'center',
  },
  badge: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#C6FF2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vLetter: {
    fontSize: 48,
    fontWeight: '700',
    color: '#0F0F0F',
    lineHeight: 52,
  },
  brandName: {
    marginTop: 16,
    fontSize: 28,
    fontWeight: '700',
    color: '#0F0F0F',
    letterSpacing: -0.56,
  },
  divider: {
    width: 48,
    height: 2,
    backgroundColor: '#EBEBEB',
    marginVertical: 16,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
    lineHeight: 20,
  },
  loaderArea: {
    position: 'absolute',
    bottom: 120,
    alignItems: 'center',
  },
  loaderTrack: {
    width: 180,
    height: 4,
    backgroundColor: '#EBEBEB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  loaderFill: {
    height: 4,
    backgroundColor: '#C6FF2D',
    borderRadius: 4,
  },
  version: {
    position: 'absolute',
    bottom: 24,
    fontSize: 11,
    color: '#C9C9C9',
    lineHeight: 16,
  },
});`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Screens/Splash — React Native Paper JSX</div>${_blk('SplashScreen.tsx',_rnSource)}</div>`;
