import * as tokens from '../../generated/tokens.js';

// Alpha fills — NOT in token system (design-layer values):
// rgba(255,255,255,0.13) — top nav circle button backgrounds
// rgba(255,255,255,0.20) — QR frame border
// rgba(198,255,45,0.80)  — #C6FF2DCC — QR scan line
// rgba(0,0,0,0.53)       — instructions banner background
// rgba(255,255,255,0.07) — #FFFFFF12 — bottom panel chip background
// rgba(255,255,255,0.094)— #FFFFFF18 — divider

export default { title: 'Screens/QrUnlockScan' };

export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceInverse};
    overflow:hidden;
    box-sizing:border-box;
  ">

    <!-- Status Bar (62px) -->
    <div style="
      height:62px;
      background:#0f0f0f;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:#ffffff;">9:41</span>
      <span style="font-family:Inter,sans-serif;font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>
    </div>

    <!-- Top Navigation (52px) -->
    <div style="
      height:52px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Close button -->
      <div style="
        width:36px;
        height:36px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.13);
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      ">
        <span style="color:#ffffff;font-size:14px;line-height:1;font-family:Inter,sans-serif;">&#10005;</span>
      </div>
      <!-- Title -->
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeHeadingSm}px;
        font-weight:${tokens.fontWeightHeadingSm};
        color:#ffffff;
      ">Scan QR Code</span>
      <!-- Torch button -->
      <div style="
        width:36px;
        height:36px;
        border-radius:${tokens.radiusFull}px;
        background:rgba(255,255,255,0.13);
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      ">
        <span style="font-size:16px;line-height:1;">&#128294;</span>
      </div>
    </div>

    <!-- Camera Viewport (flex:1) -->
    <div style="
      flex:1;
      background:${tokens.colorGrey900};
      position:relative;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <!-- QR Frame (210x210px, centered, shifted up) -->
      <div style="
        position:absolute;
        width:210px;
        height:210px;
        top:50%;
        left:50%;
        transform:translate(-50%, -55%);
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
        height:48px;
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
        ">Hold QR code steady inside the frame</span>
      </div>
    </div>

    <!-- Bottom Status Panel -->
    <div style="
      background:${tokens.colorGrey900};
      padding:20px 16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Bike Reminder Chip -->
      <div style="
        display:inline-flex;
        align-items:center;
        background:rgba(255,255,255,0.07);
        border-radius:${tokens.radiusFull}px;
        padding:6px 12px;
        margin-bottom:12px;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:#ffffff;
        ">&#128690; VV-4829</span>
      </div>

      <!-- Scanning Status Row -->
      <div style="
        display:flex;
        align-items:center;
        gap:8px;
        margin-bottom:12px;
      ">
        <div style="
          width:8px;
          height:8px;
          border-radius:50%;
          background:${tokens.colorActionPrimary};
          flex-shrink:0;
        "></div>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:${tokens.colorGrey500};
        ">Scanning...</span>
      </div>

      <!-- Divider -->
      <div style="
        width:100%;
        height:1px;
        background:rgba(255,255,255,0.094);
        margin-bottom:12px;
      "></div>

      <!-- Enter Code Button -->
      <div style="
        width:100%;
        height:48px;
        background:rgba(255,255,255,0.07);
        border-radius:${tokens.radiusLg}px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeHeadingSm}px;
          font-weight:${tokens.fontWeightHeadingSm};
          color:#ffffff;
        ">Enter Code Manually</span>
      </div>
    </div>

  </div>
`;

// ── makePhoneFrame helper (inline, per-file) ────────────────────────────────────
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

export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();
  // Dark screen override (QR Unlock is a dark camera screen)
  screen.style.background = '#0f0f0f';

  // Inject animation keyframes
  if (!document.getElementById('gsd-qrscan-anim')) {
    const style = document.createElement('style');
    style.id = 'gsd-qrscan-anim';
    style.textContent = `
      @keyframes qrScan {
        0%,100% { top: 10px; }
        50% { top: 190px; }
      }
      @keyframes dotPulse {
        0%,100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
  }

  // Top navigation
  const topNav = document.createElement('div');
  topNav.style.cssText = 'flex-shrink:0;height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;';

  const closeBtn = document.createElement('div');
  closeBtn.style.cssText = 'width:36px;height:36px;border-radius:999px;background:rgba(255,255,255,0.13);display:flex;align-items:center;justify-content:center;cursor:pointer;';
  closeBtn.innerHTML = '<span style="color:#ffffff;font-size:14px;line-height:1;font-family:Inter,sans-serif;">&#10005;</span>';

  const titleEl = document.createElement('span');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:${tokens.fontWeightHeadingSm};color:#ffffff;`;
  titleEl.textContent = 'Scan QR Code';

  const torchBtn = document.createElement('div');
  torchBtn.style.cssText = 'width:36px;height:36px;border-radius:999px;background:rgba(255,255,255,0.13);display:flex;align-items:center;justify-content:center;cursor:pointer;';
  torchBtn.innerHTML = '<span style="font-size:16px;line-height:1;">&#128294;</span>';

  topNav.appendChild(closeBtn);
  topNav.appendChild(titleEl);
  topNav.appendChild(torchBtn);

  // Camera viewport
  const cameraViewport = document.createElement('div');
  cameraViewport.style.cssText = `flex:1;background:${tokens.colorGrey900};position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;`;

  // QR Frame (210x210)
  const qrFrame = document.createElement('div');
  qrFrame.style.cssText = 'position:absolute;width:210px;height:210px;top:50%;left:50%;transform:translate(-50%,-55%);border:1px solid rgba(255,255,255,0.20);box-sizing:border-box;';

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
  cornerDefs.forEach(c => {
    const accentBar = document.createElement('div');
    let css = `position:absolute;background:${tokens.colorActionPrimary};width:${c.width};height:${c.height};`;
    if (c.top !== undefined) css += `top:${c.top};`;
    if (c.bottom !== undefined) css += `bottom:${c.bottom};`;
    if (c.left !== undefined) css += `left:${c.left};`;
    if (c.right !== undefined) css += `right:${c.right};`;
    accentBar.style.cssText = css;
    qrFrame.appendChild(accentBar);
  });

  // Animated scan line
  const scanLine = document.createElement('div');
  scanLine.style.cssText = 'position:absolute;width:178px;height:2px;background:rgba(198,255,45,0.80);left:50%;transform:translateX(-50%);top:10px;animation:qrScan 2s ease-in-out infinite;';
  qrFrame.appendChild(scanLine);

  cameraViewport.appendChild(qrFrame);

  // Instructions banner
  const instrBanner = document.createElement('div');
  instrBanner.style.cssText = 'position:absolute;bottom:0;left:0;width:393px;height:48px;background:rgba(0,0,0,0.53);display:flex;align-items:center;justify-content:center;box-sizing:border-box;';
  const instrText = document.createElement('span');
  instrText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;`;
  instrText.textContent = 'Hold QR code steady inside the frame';
  instrBanner.appendChild(instrText);
  cameraViewport.appendChild(instrBanner);

  // Bottom Status Panel
  const statusPanel = document.createElement('div');
  statusPanel.style.cssText = `background:${tokens.colorGrey900};padding:20px 16px;box-sizing:border-box;flex-shrink:0;`;

  // Bike Reminder Chip
  const bikeChip = document.createElement('div');
  bikeChip.style.cssText = `display:inline-flex;align-items:center;background:rgba(255,255,255,0.07);border-radius:${tokens.radiusFull}px;padding:6px 12px;margin-bottom:12px;`;
  const bikeChipText = document.createElement('span');
  bikeChipText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;`;
  bikeChipText.textContent = '\u{1F6B2} VV-4829';
  bikeChip.appendChild(bikeChipText);

  // Scanning Status Row
  const scanStatusRow = document.createElement('div');
  scanStatusRow.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:12px;';

  const greenDot = document.createElement('div');
  greenDot.style.cssText = `width:8px;height:8px;border-radius:50%;background:${tokens.colorActionPrimary};flex-shrink:0;animation:dotPulse 1.5s ease-in-out infinite;`;

  const scanStatusText = document.createElement('span');
  scanStatusText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  scanStatusText.textContent = 'Scanning...';

  scanStatusRow.appendChild(greenDot);
  scanStatusRow.appendChild(scanStatusText);

  // Divider
  const divider = document.createElement('div');
  divider.style.cssText = 'width:100%;height:1px;background:rgba(255,255,255,0.094);margin-bottom:12px;';

  // Enter Code Button
  const enterCodeBtn = document.createElement('div');
  enterCodeBtn.style.cssText = `width:100%;height:48px;background:rgba(255,255,255,0.07);border-radius:${tokens.radiusLg}px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;transition:opacity 100ms ease;`;
  const enterCodeText = document.createElement('span');
  enterCodeText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:${tokens.fontWeightHeadingSm};color:#ffffff;`;
  enterCodeText.textContent = 'Enter Code Manually';
  enterCodeBtn.appendChild(enterCodeText);

  enterCodeBtn.addEventListener('pointerdown', () => { enterCodeBtn.style.opacity = '0.6'; });
  enterCodeBtn.addEventListener('pointerup', () => { enterCodeBtn.style.opacity = '1'; });
  enterCodeBtn.addEventListener('pointerleave', () => { enterCodeBtn.style.opacity = '1'; });

  statusPanel.appendChild(bikeChip);
  statusPanel.appendChild(scanStatusRow);
  statusPanel.appendChild(divider);
  statusPanel.appendChild(enterCodeBtn);

  screen.appendChild(topNav);
  screen.appendChild(cameraViewport);
  screen.appendChild(statusPanel);

  return frame;
};

// ── Source code panel ──────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_QRSCAN_JSX = `// QrUnlockScan Screen — React Native Paper
import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceInverse  = '#0F0F0F'
// tokens.colorGrey900         = '#1A1A1A'
// tokens.colorActionPrimary   = '#C6FF2D'
// tokens.colorGrey500         = '#808080'
// tokens.radiusFull           = 999
// tokens.radiusLg             = 20

const QrUnlockScanScreen = () => {
  const scanAnim = React.useRef(new Animated.Value(0)).current;
  const dotAnim  = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, { toValue: 1, duration: 1000, useNativeDriver: false }),
        Animated.timing(scanAnim, { toValue: 0, duration: 1000, useNativeDriver: false }),
      ])
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotAnim, { toValue: 0.3, duration: 750, useNativeDriver: true }),
        Animated.timing(dotAnim, { toValue: 1,   duration: 750, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const scanTop = scanAnim.interpolate({ inputRange: [0, 1], outputRange: [10, 190] });

  return (
    <View style={styles.screen}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.navCircleBtn}>
          <Text style={styles.navBtnText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>Scan QR Code</Text>
        <TouchableOpacity style={styles.navCircleBtn}>
          <Text style={styles.navBtnText}>&#128294;</Text>
        </TouchableOpacity>
      </View>

      {/* Camera Viewport */}
      <View style={styles.cameraViewport}>
        {/* QR Frame */}
        <View style={styles.qrFrame}>
          {/* Corner accents — top-left */}
          <View style={[styles.cornerH, { top: 0, left: 0 }]} />
          <View style={[styles.cornerV, { top: 0, left: 0 }]} />
          {/* Corner accents — top-right */}
          <View style={[styles.cornerH, { top: 0, right: 0 }]} />
          <View style={[styles.cornerV, { top: 0, right: 0 }]} />
          {/* Corner accents — bottom-left */}
          <View style={[styles.cornerH, { bottom: 0, left: 0 }]} />
          <View style={[styles.cornerV, { bottom: 0, left: 0 }]} />
          {/* Corner accents — bottom-right */}
          <View style={[styles.cornerH, { bottom: 0, right: 0 }]} />
          <View style={[styles.cornerV, { bottom: 0, right: 0 }]} />
          {/* Animated scan line */}
          <Animated.View style={[styles.scanLine, { top: scanTop }]} />
        </View>
        {/* Instructions Banner */}
        <View style={styles.instrBanner}>
          <Text style={styles.instrText}>Hold QR code steady inside the frame</Text>
        </View>
      </View>

      {/* Bottom Status Panel */}
      <View style={styles.statusPanel}>
        <View style={styles.bikeChip}>
          <Text style={styles.chipText}>&#128690; VV-4829</Text>
        </View>
        <View style={styles.scanRow}>
          <Animated.View style={[styles.greenDot, { opacity: dotAnim }]} />
          <Text style={styles.scanText}>Scanning...</Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.enterCodeBtn}>
          <Text style={styles.enterCodeText}>Enter Code Manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f0f0f', flexDirection: 'column' },
  topNav: { height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  navCircleBtn: { width: 36, height: 36, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.13)', alignItems: 'center', justifyContent: 'center' },
  navBtnText: { color: '#ffffff', fontSize: 14 },
  navTitle: { color: '#ffffff', fontSize: 15, fontWeight: '600', fontFamily: 'Inter' },
  cameraViewport: { flex: 1, backgroundColor: '#1a1a1a', position: 'relative', alignItems: 'center', justifyContent: 'center' },
  qrFrame: { width: 210, height: 210, borderWidth: 1, borderColor: 'rgba(255,255,255,0.20)', position: 'relative' },
  cornerH: { position: 'absolute', width: 32, height: 4, backgroundColor: '#c6ff2d' },
  cornerV: { position: 'absolute', width: 4, height: 32, backgroundColor: '#c6ff2d' },
  scanLine: { position: 'absolute', width: 178, height: 2, backgroundColor: 'rgba(198,255,45,0.80)', alignSelf: 'center' },
  instrBanner: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, backgroundColor: 'rgba(0,0,0,0.53)', alignItems: 'center', justifyContent: 'center' },
  instrText: { color: '#ffffff', fontSize: 11, fontFamily: 'Inter', fontWeight: '500' },
  statusPanel: { backgroundColor: '#1a1a1a', padding: 20 },
  bikeChip: { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 999, paddingVertical: 6, paddingHorizontal: 12, marginBottom: 12 },
  chipText: { color: '#ffffff', fontSize: 11, fontFamily: 'Inter', fontWeight: '500' },
  scanRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#c6ff2d' },
  scanText: { color: '#808080', fontSize: 11, fontFamily: 'Inter', fontWeight: '500' },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.094)', marginBottom: 12 },
  enterCodeBtn: { height: 48, backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  enterCodeText: { color: '#ffffff', fontSize: 15, fontWeight: '600', fontFamily: 'Inter' },
});

export default QrUnlockScanScreen;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// QrUnlockScan — React Native Paper</div>${_blk('QrUnlockScanScreen', RN_QRSCAN_JSX)}</div>`;
