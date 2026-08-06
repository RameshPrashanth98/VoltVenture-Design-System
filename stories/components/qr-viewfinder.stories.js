import * as tokens from '../../generated/tokens.js';

// Alpha fills — NOT in token system (design-layer values):
// rgba(255,255,255,0.20) — QR frame border
// rgba(198,255,45,0.80)  — #C6FF2DCC — QR scan line
// rgba(0,0,0,0.53)       — instructions banner background

export default { title: 'Components/QrViewfinder' };

// ── Default (HTML string) ────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;
    height:260px;
    background:${tokens.colorGrey900};
    position:relative;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
  ">

    <!-- QR Frame (210x210px, centered) -->
    <div style="
      position:absolute;
      width:210px;
      height:210px;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      border:1px solid rgba(255,255,255,0.20);
      box-sizing:border-box;
    ">
      <!-- Corner accent: top-left H (32x4) -->
      <div style="position:absolute;width:32px;height:4px;top:0;left:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: top-left V (4x32) -->
      <div style="position:absolute;width:4px;height:32px;top:0;left:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: top-right H (32x4) -->
      <div style="position:absolute;width:32px;height:4px;top:0;right:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: top-right V (4x32) -->
      <div style="position:absolute;width:4px;height:32px;top:0;right:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: bottom-left H (32x4) -->
      <div style="position:absolute;width:32px;height:4px;bottom:0;left:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: bottom-left V (4x32) -->
      <div style="position:absolute;width:4px;height:32px;bottom:0;left:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: bottom-right H (32x4) -->
      <div style="position:absolute;width:32px;height:4px;bottom:0;right:0;background:${tokens.colorActionPrimary};"></div>
      <!-- Corner accent: bottom-right V (4x32) -->
      <div style="position:absolute;width:4px;height:32px;bottom:0;right:0;background:${tokens.colorActionPrimary};"></div>

      <!-- Scan Line (static in Default) -->
      <div style="
        position:absolute;
        width:178px;
        height:2px;
        background:rgba(198,255,45,0.80);
        left:50%;
        transform:translateX(-50%);
        top:50%;
      "></div>
    </div>

    <!-- Instructions Banner -->
    <div style="
      position:absolute;
      bottom:0;
      left:0;
      width:393px;
      height:40px;
      background:rgba(0,0,0,0.53);
      display:flex;
      align-items:center;
      justify-content:center;
      box-sizing:border-box;
    ">
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:#ffffff;
      ">Hold QR code steady</span>
    </div>

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

// ── Interactive (returns DOM element) ────────────────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();
  // Dark screen override — QR Viewfinder is a camera component on dark background
  screen.style.background = '#0f0f0f';

  // Inject animation keyframes
  if (!document.getElementById('gsd-qrviewfinder-anim')) {
    const style = document.createElement('style');
    style.id = 'gsd-qrviewfinder-anim';
    style.textContent = `
      @keyframes qrScanBounce {
        0%,100% { top: calc(50% - 90px); }
        50% { top: calc(50% + 80px); }
      }
      @keyframes cornerPulse {
        0%,100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
    `;
    document.head.appendChild(style);
  }

  // Camera viewport
  const viewport = document.createElement('div');
  viewport.style.cssText = `flex:1;background:${tokens.colorGrey900};position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;`;

  // QR Frame (210x210)
  const qrFrame = document.createElement('div');
  qrFrame.style.cssText = 'position:absolute;width:210px;height:210px;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,0.20);box-sizing:border-box;';

  // Corner accents (32x4 H + 4x32 V per corner)
  const cornerDefs = [
    { top:'0', left:'0',  width:'32px', height:'4px' },
    { top:'0', left:'0',  width:'4px',  height:'32px' },
    { top:'0', right:'0', width:'32px', height:'4px' },
    { top:'0', right:'0', width:'4px',  height:'32px' },
    { bottom:'0', left:'0',  width:'32px', height:'4px' },
    { bottom:'0', left:'0',  width:'4px',  height:'32px' },
    { bottom:'0', right:'0', width:'32px', height:'4px' },
    { bottom:'0', right:'0', width:'4px',  height:'32px' },
  ];
  const cornerEls = [];
  cornerDefs.forEach(c => {
    const accentBar = document.createElement('div');
    let css = `position:absolute;background:${tokens.colorActionPrimary};width:${c.width};height:${c.height};animation:cornerPulse 2s ease-in-out infinite;`;
    if (c.top !== undefined) css += `top:${c.top};`;
    if (c.bottom !== undefined) css += `bottom:${c.bottom};`;
    if (c.left !== undefined) css += `left:${c.left};`;
    if (c.right !== undefined) css += `right:${c.right};`;
    accentBar.style.cssText = css;
    cornerEls.push(accentBar);
    qrFrame.appendChild(accentBar);
  });

  // Animated scan line
  const scanLine = document.createElement('div');
  scanLine.style.cssText = 'position:absolute;width:178px;height:2px;background:rgba(198,255,45,0.80);left:50%;transform:translateX(-50%);animation:qrScanBounce 1.8s ease-in-out infinite;';
  qrFrame.appendChild(scanLine);

  viewport.appendChild(qrFrame);

  // Instructions banner
  const instrBanner = document.createElement('div');
  instrBanner.style.cssText = 'position:absolute;bottom:0;left:0;width:100%;height:40px;background:rgba(0,0,0,0.53);display:flex;align-items:center;justify-content:center;box-sizing:border-box;';
  const instrText = document.createElement('span');
  instrText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;`;
  instrText.textContent = 'Hold QR code steady';
  instrBanner.appendChild(instrText);
  viewport.appendChild(instrBanner);

  screen.appendChild(viewport);

  return frame;
};

// ── Source code panel ────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_QRVIEWFINDER_JSX = `// QrViewfinder Component — React Native Paper
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorGrey900       = '#1A1A1A'
// tokens.colorActionPrimary = '#C6FF2D'

const QrViewfinder = () => {
  const scanAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Scan line bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, { toValue: 1, duration: 900, useNativeDriver: false }),
        Animated.timing(scanAnim, { toValue: 0, duration: 900, useNativeDriver: false }),
      ])
    ).start();
    // Corner accent pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 0.6, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1,   duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const scanTop = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [15, 190],
  });

  return (
    <View style={styles.viewport}>
      {/* QR Frame */}
      <View style={styles.qrFrame}>
        {/* Corner accents — top-left */}
        <Animated.View style={[styles.cornerH, { top: 0, left: 0, opacity: pulseAnim }]} />
        <Animated.View style={[styles.cornerV, { top: 0, left: 0, opacity: pulseAnim }]} />
        {/* Corner accents — top-right */}
        <Animated.View style={[styles.cornerH, { top: 0, right: 0, opacity: pulseAnim }]} />
        <Animated.View style={[styles.cornerV, { top: 0, right: 0, opacity: pulseAnim }]} />
        {/* Corner accents — bottom-left */}
        <Animated.View style={[styles.cornerH, { bottom: 0, left: 0, opacity: pulseAnim }]} />
        <Animated.View style={[styles.cornerV, { bottom: 0, left: 0, opacity: pulseAnim }]} />
        {/* Corner accents — bottom-right */}
        <Animated.View style={[styles.cornerH, { bottom: 0, right: 0, opacity: pulseAnim }]} />
        <Animated.View style={[styles.cornerV, { bottom: 0, right: 0, opacity: pulseAnim }]} />
        {/* Animated scan line */}
        <Animated.View style={[styles.scanLine, { top: scanTop }]} />
      </View>
      {/* Instructions Banner */}
      <View style={styles.instrBanner}>
        <Text style={styles.instrText}>Hold QR code steady</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewport: {
    height: 260,
    backgroundColor: '#1a1a1a', // tokens.colorGrey900
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  qrFrame: {
    width: 210,
    height: 210,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.20)',
    position: 'relative',
  },
  cornerH: { position: 'absolute', width: 32, height: 4, backgroundColor: '#c6ff2d' }, // tokens.colorActionPrimary
  cornerV: { position: 'absolute', width: 4, height: 32, backgroundColor: '#c6ff2d' }, // tokens.colorActionPrimary
  scanLine: {
    position: 'absolute',
    width: 178,
    height: 2,
    backgroundColor: 'rgba(198,255,45,0.80)',
    alignSelf: 'center',
  },
  instrBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.53)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instrText: {
    color: '#ffffff',
    fontSize: 11,  // tokens.fontSizeLabelSm
    fontFamily: 'Inter',
    fontWeight: '500', // tokens.fontWeightLabelSm
  },
});

export default QrViewfinder;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// QrViewfinder — React Native Paper</div>${_blk('QrViewfinder', RN_QRVIEWFINDER_JSX)}</div>`;
