import * as tokens from '../../generated/tokens.js';

// Alpha fills — NOT in token system (design-layer values):
// #FFFFFF22 = rgba(255,255,255,0.13) — top nav circle button backgrounds
// #FFFFFF33 = rgba(255,255,255,0.20) — progress strip inactive segment
// #C6FF2DBB = rgba(198,255,45,0.73)  — scan line color
// #00000088 = rgba(0,0,0,0.53)       — instructions banner background
// #FFFFFF18 = rgba(255,255,255,0.094) — MRZ lines, photo slot fill

export default { title: 'Screens/IdScan' };

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
        <span style="color:#ffffff;font-size:14px;line-height:1;font-family:Inter,sans-serif;">✕</span>
      </div>
      <!-- Title -->
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeHeadingSm}px;
        font-weight:${tokens.fontWeightHeadingSm};
        color:#ffffff;
      ">ID Scan</span>
      <!-- Flashlight toggle -->
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
        <span style="font-size:16px;line-height:1;">&#9889;</span>
      </div>
    </div>

    <!-- Progress Strip (56px) -->
    <div style="
      height:56px;
      display:flex;
      align-items:center;
      padding:0 20px;
      gap:8px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:${tokens.fontWeightLabelSm};
        color:${tokens.colorGrey500};
        white-space:nowrap;
        margin-right:4px;
      ">Step 1 of 2</span>
      <!-- Segment 1 (active) -->
      <div style="width:80px;height:3px;background:#ffffff;border-radius:2px;flex-shrink:0;"></div>
      <!-- Segment 2 (inactive) -->
      <div style="width:80px;height:3px;background:rgba(255,255,255,0.20);border-radius:2px;flex-shrink:0;"></div>
    </div>

    <!-- Camera Viewport -->
    <div style="
      flex:1;
      background:${tokens.colorGrey900};
      position:relative;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <!-- ID Card Frame (290x190px, centered, shifted up slightly) -->
      <div style="
        position:absolute;
        width:290px;
        height:190px;
        top:50%;
        left:50%;
        transform:translate(-50%, -60%);
        border:1px solid rgba(255,255,255,0.20);
        box-sizing:border-box;
      ">
        <!-- Corner accent bars: top-left -->
        <div style="position:absolute;width:28px;height:3px;top:0;left:0;background:${tokens.colorActionPrimary};"></div>
        <div style="position:absolute;width:3px;height:28px;top:0;left:0;background:${tokens.colorActionPrimary};"></div>
        <!-- Corner accent bars: top-right -->
        <div style="position:absolute;width:28px;height:3px;top:0;right:0;background:${tokens.colorActionPrimary};"></div>
        <div style="position:absolute;width:3px;height:28px;top:0;right:0;background:${tokens.colorActionPrimary};"></div>
        <!-- Corner accent bars: bottom-left -->
        <div style="position:absolute;width:28px;height:3px;bottom:0;left:0;background:${tokens.colorActionPrimary};"></div>
        <div style="position:absolute;width:3px;height:28px;bottom:0;left:0;background:${tokens.colorActionPrimary};"></div>
        <!-- Corner accent bars: bottom-right -->
        <div style="position:absolute;width:28px;height:3px;bottom:0;right:0;background:${tokens.colorActionPrimary};"></div>
        <div style="position:absolute;width:3px;height:28px;bottom:0;right:0;background:${tokens.colorActionPrimary};"></div>

        <!-- ID Photo Slot (left portion) -->
        <div style="
          position:absolute;
          top:50%;
          left:12px;
          transform:translateY(-50%);
          width:52px;
          height:70px;
          background:rgba(255,255,255,0.10);
          border-radius:3px;
        "></div>

        <!-- Scan Line (static in Default) -->
        <div style="
          position:absolute;
          width:266px;
          height:2px;
          background:rgba(198,255,45,0.73);
          left:50%;
          transform:translateX(-50%);
          top:50%;
        "></div>

        <!-- MRZ lines (bottom of ID frame) -->
        <div style="position:absolute;bottom:24px;left:8px;right:8px;height:1px;background:rgba(255,255,255,0.094);"></div>
        <div style="position:absolute;bottom:18px;left:8px;right:8px;height:1px;background:rgba(255,255,255,0.094);"></div>
        <div style="position:absolute;bottom:12px;left:8px;right:8px;height:1px;background:rgba(255,255,255,0.094);"></div>
      </div>

      <!-- Lock Badge -->
      <div style="
        position:absolute;
        bottom:60px;
        left:50%;
        transform:translateX(-50%);
        font-size:20px;
      ">&#128274;</div>

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
        ">Hold your ID steady inside the frame</span>
      </div>
    </div>

    <!-- Bottom Trust Panel -->
    <div style="
      background:${tokens.colorGrey900};
      padding:20px 16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Shield Row -->
      <div style="
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:16px;
      ">
        <span style="font-size:18px;">&#128737;</span>
        <div>
          <div style="
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeHeadingSm}px;
            font-weight:${tokens.fontWeightHeadingSm};
            color:#ffffff;
            line-height:1.3;
          ">Your data stays on device</div>
          <div style="
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeBodySm}px;
            font-weight:${tokens.fontWeightBodySm};
            color:${tokens.colorGrey500};
            line-height:1.4;
          ">Encrypted and never shared</div>
        </div>
      </div>
      <!-- Scan CTA Button -->
      <div style="
        width:100%;
        height:56px;
        background:#ffffff;
        color:#0f0f0f;
        border-radius:${tokens.radiusFull}px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-sizing:border-box;
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeHeadingSm}px;
        font-weight:${tokens.fontWeightHeadingSm};
      ">Scan ID &#8594;</div>
    </div>

  </div>
`;

// ── makePhoneFrame helper (inline, per-file) ───────────────────────────────────
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
  // Dark screen override (ID Scan is a dark camera screen)
  screen.style.background = '#0f0f0f';

  // Inject scan line animation keyframe
  if (!document.getElementById('gsd-idscan-anim')) {
    const style = document.createElement('style');
    style.id = 'gsd-idscan-anim';
    style.textContent = `
      @keyframes scanLineMove {
        0%,100% { top: 20px; }
        50% { top: 160px; }
      }
    `;
    document.head.appendChild(style);
  }

  // Top navigation bar
  const topNav = document.createElement('div');
  topNav.style.cssText = 'flex-shrink:0;height:52px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box;';

  const closeBtn = document.createElement('div');
  closeBtn.style.cssText = 'width:36px;height:36px;border-radius:999px;background:rgba(255,255,255,0.13);display:flex;align-items:center;justify-content:center;cursor:pointer;';
  closeBtn.innerHTML = '<span style="color:#ffffff;font-size:14px;line-height:1;font-family:Inter,sans-serif;">✕</span>';

  const titleEl = document.createElement('span');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:${tokens.fontWeightHeadingSm};color:#ffffff;`;
  titleEl.textContent = 'ID Scan';

  const flashBtn = document.createElement('div');
  flashBtn.style.cssText = 'width:36px;height:36px;border-radius:999px;background:rgba(255,255,255,0.13);display:flex;align-items:center;justify-content:center;cursor:pointer;';
  flashBtn.innerHTML = '<span style="font-size:16px;line-height:1;">&#9889;</span>';

  topNav.appendChild(closeBtn);
  topNav.appendChild(titleEl);
  topNav.appendChild(flashBtn);

  // Progress strip
  const progressStrip = document.createElement('div');
  progressStrip.style.cssText = 'flex-shrink:0;height:56px;display:flex;align-items:center;padding:0 20px;gap:8px;box-sizing:border-box;';

  const stepLabel = document.createElement('span');
  stepLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};white-space:nowrap;margin-right:4px;`;
  stepLabel.textContent = 'Step 1 of 2';

  const seg1 = document.createElement('div');
  seg1.style.cssText = 'width:80px;height:3px;background:#ffffff;border-radius:2px;flex-shrink:0;';
  const seg2 = document.createElement('div');
  seg2.style.cssText = 'width:80px;height:3px;background:rgba(255,255,255,0.20);border-radius:2px;flex-shrink:0;';

  progressStrip.appendChild(stepLabel);
  progressStrip.appendChild(seg1);
  progressStrip.appendChild(seg2);

  // Camera viewport
  const cameraViewport = document.createElement('div');
  cameraViewport.style.cssText = `flex:1;background:${tokens.colorGrey900};position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;`;

  // ID Card Frame
  const idFrame = document.createElement('div');
  idFrame.style.cssText = 'position:absolute;width:290px;height:190px;top:50%;left:50%;transform:translate(-50%,-60%);border:1px solid rgba(255,255,255,0.20);box-sizing:border-box;';

  // Corner accent bars
  const corners = [
    // [top, bottom, left, right, width, height]
    { top:'0',left:'0',width:'28px',height:'3px' },
    { top:'0',left:'0',width:'3px',height:'28px' },
    { top:'0',right:'0',width:'28px',height:'3px' },
    { top:'0',right:'0',width:'3px',height:'28px' },
    { bottom:'0',left:'0',width:'28px',height:'3px' },
    { bottom:'0',left:'0',width:'3px',height:'28px' },
    { bottom:'0',right:'0',width:'28px',height:'3px' },
    { bottom:'0',right:'0',width:'3px',height:'28px' },
  ];
  corners.forEach(c => {
    const bar = document.createElement('div');
    let css = `position:absolute;background:${tokens.colorActionPrimary};width:${c.width};height:${c.height};`;
    if (c.top !== undefined) css += `top:${c.top};`;
    if (c.bottom !== undefined) css += `bottom:${c.bottom};`;
    if (c.left !== undefined) css += `left:${c.left};`;
    if (c.right !== undefined) css += `right:${c.right};`;
    bar.style.cssText = css;
    idFrame.appendChild(bar);
  });

  // ID Photo Slot
  const photoSlot = document.createElement('div');
  photoSlot.style.cssText = 'position:absolute;top:50%;left:12px;transform:translateY(-50%);width:52px;height:70px;background:rgba(255,255,255,0.10);border-radius:3px;';
  idFrame.appendChild(photoSlot);

  // Scan line (animated in Interactive)
  const scanLine = document.createElement('div');
  scanLine.style.cssText = 'position:absolute;width:266px;height:2px;background:rgba(198,255,45,0.73);left:50%;transform:translateX(-50%);top:20px;animation:scanLineMove 2s ease-in-out infinite;';
  idFrame.appendChild(scanLine);

  // MRZ lines
  [24, 18, 12].forEach(bottom => {
    const mrzLine = document.createElement('div');
    mrzLine.style.cssText = `position:absolute;bottom:${bottom}px;left:8px;right:8px;height:1px;background:rgba(255,255,255,0.094);`;
    idFrame.appendChild(mrzLine);
  });

  cameraViewport.appendChild(idFrame);

  // Lock Badge
  const lockBadge = document.createElement('div');
  lockBadge.style.cssText = 'position:absolute;bottom:60px;left:50%;transform:translateX(-50%);font-size:20px;';
  lockBadge.innerHTML = '&#128274;';
  cameraViewport.appendChild(lockBadge);

  // Instructions banner
  const instrBanner = document.createElement('div');
  instrBanner.style.cssText = 'position:absolute;bottom:0;left:0;width:393px;height:48px;background:rgba(0,0,0,0.53);display:flex;align-items:center;justify-content:center;box-sizing:border-box;';
  const instrText = document.createElement('span');
  instrText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;`;
  instrText.textContent = 'Hold your ID steady inside the frame';
  instrBanner.appendChild(instrText);
  cameraViewport.appendChild(instrBanner);

  // Bottom Trust Panel
  const trustPanel = document.createElement('div');
  trustPanel.style.cssText = `background:${tokens.colorGrey900};padding:20px 16px;box-sizing:border-box;flex-shrink:0;`;

  const shieldRow = document.createElement('div');
  shieldRow.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:16px;';
  shieldRow.innerHTML = `<span style="font-size:18px;">&#128737;</span><div><div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:${tokens.fontWeightHeadingSm};color:#ffffff;line-height:1.3;">Your data stays on device</div><div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodySm}px;color:${tokens.colorGrey500};line-height:1.4;">Encrypted and never shared</div></div>`;

  const ctaBtn = document.createElement('div');
  ctaBtn.style.cssText = `width:100%;height:56px;background:#ffffff;color:#0f0f0f;border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:${tokens.fontWeightHeadingSm};transition:transform 100ms ease;`;
  ctaBtn.innerHTML = 'Scan ID &#8594;';

  ctaBtn.addEventListener('pointerdown', () => { ctaBtn.style.transform = 'scale(0.97)'; });
  ctaBtn.addEventListener('pointerup', () => { ctaBtn.style.transform = 'scale(1)'; });
  ctaBtn.addEventListener('pointerleave', () => { ctaBtn.style.transform = 'scale(1)'; });

  trustPanel.appendChild(shieldRow);
  trustPanel.appendChild(ctaBtn);

  screen.appendChild(topNav);
  screen.appendChild(progressStrip);
  screen.appendChild(cameraViewport);
  screen.appendChild(trustPanel);

  return frame;
};

// ── Source code panel ──────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_IDSCAN_JSX = `// IdScan Screen — React Native Paper
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Surface, Button, Text } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceInverse = '#0F0F0F'
// tokens.colorGrey900       = '#1A1A1A'
// tokens.colorActionPrimary = '#C6FF2D'
// tokens.colorGrey500       = '#808080'
// tokens.radiusFull         = 999

const IdScanScreen = () => {
  const scanAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, { toValue: 1, duration: 1000, useNativeDriver: false }),
        Animated.timing(scanAnim, { toValue: 0, duration: 1000, useNativeDriver: false }),
      ])
    ).start();
  }, []);

  const scanTop = scanAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 160] });

  return (
    <View style={styles.screen}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <View style={styles.navBtn}><Text style={styles.navBtnText}>✕</Text></View>
        <Text style={styles.navTitle}>ID Scan</Text>
        <View style={styles.navBtn}><Text style={styles.navBtnText}>⚡</Text></View>
      </View>

      {/* Progress Strip */}
      <View style={styles.progressStrip}>
        <Text style={styles.stepLabel}>Step 1 of 2</Text>
        <View style={[styles.segment, { backgroundColor: '#ffffff' }]} />
        <View style={[styles.segment, { backgroundColor: 'rgba(255,255,255,0.20)' }]} />
      </View>

      {/* Camera Viewport */}
      <View style={styles.cameraViewport}>
        <View style={styles.idFrame}>
          {/* Corner accents */}
          <View style={[styles.cornerH, { top: 0, left: 0 }]} />
          <View style={[styles.cornerV, { top: 0, left: 0 }]} />
          <View style={[styles.cornerH, { top: 0, right: 0 }]} />
          <View style={[styles.cornerV, { top: 0, right: 0 }]} />
          <View style={[styles.cornerH, { bottom: 0, left: 0 }]} />
          <View style={[styles.cornerV, { bottom: 0, left: 0 }]} />
          <View style={[styles.cornerH, { bottom: 0, right: 0 }]} />
          <View style={[styles.cornerV, { bottom: 0, right: 0 }]} />
          {/* Photo slot */}
          <View style={styles.photoSlot} />
          {/* Animated scan line */}
          <Animated.View style={[styles.scanLine, { top: scanTop }]} />
          {/* MRZ lines */}
          <View style={[styles.mrzLine, { bottom: 24 }]} />
          <View style={[styles.mrzLine, { bottom: 18 }]} />
          <View style={[styles.mrzLine, { bottom: 12 }]} />
        </View>
        {/* Instructions Banner */}
        <View style={styles.instrBanner}>
          <Text style={styles.instrText}>Hold your ID steady inside the frame</Text>
        </View>
      </View>

      {/* Bottom Trust Panel */}
      <Surface style={styles.trustPanel}>
        <View style={styles.shieldRow}>
          <Text style={{ fontSize: 18 }}>🛡</Text>
          <View>
            <Text style={styles.shieldTitle}>Your data stays on device</Text>
            <Text style={styles.shieldSub}>Encrypted and never shared</Text>
          </View>
        </View>
        <Button
          mode="contained"
          buttonColor="#ffffff"
          textColor="#0f0f0f"
          style={{ borderRadius: 999, height: 56 }}
        >
          Scan ID →
        </Button>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0f0f0f', flexDirection: 'column' },
  topNav: { height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  navBtn: { width: 36, height: 36, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.13)', alignItems: 'center', justifyContent: 'center' },
  navBtnText: { color: '#ffffff', fontSize: 14 },
  navTitle: { color: '#ffffff', fontSize: 15, fontWeight: '600', fontFamily: 'Inter' },
  progressStrip: { height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, gap: 8 },
  stepLabel: { color: '#808080', fontSize: 11, fontWeight: '500', fontFamily: 'Inter', marginRight: 4 },
  segment: { width: 80, height: 3, borderRadius: 2 },
  cameraViewport: { flex: 1, backgroundColor: '#1a1a1a', position: 'relative' },
  idFrame: { position: 'absolute', width: 290, height: 190, top: '30%', left: '50%', marginLeft: -145, borderWidth: 1, borderColor: 'rgba(255,255,255,0.20)' },
  cornerH: { position: 'absolute', width: 28, height: 3, backgroundColor: '#c6ff2d' },
  cornerV: { position: 'absolute', width: 3, height: 28, backgroundColor: '#c6ff2d' },
  photoSlot: { position: 'absolute', top: '50%', left: 12, marginTop: -35, width: 52, height: 70, backgroundColor: 'rgba(255,255,255,0.10)', borderRadius: 3 },
  scanLine: { position: 'absolute', width: 266, height: 2, backgroundColor: 'rgba(198,255,45,0.73)', left: 12 },
  mrzLine: { position: 'absolute', left: 8, right: 8, height: 1, backgroundColor: 'rgba(255,255,255,0.094)' },
  instrBanner: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, backgroundColor: 'rgba(0,0,0,0.53)', alignItems: 'center', justifyContent: 'center' },
  instrText: { color: '#ffffff', fontSize: 11, fontFamily: 'Inter', fontWeight: '500' },
  trustPanel: { backgroundColor: '#1a1a1a', padding: 20 },
  shieldRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 16 },
  shieldTitle: { color: '#ffffff', fontSize: 15, fontWeight: '600', fontFamily: 'Inter' },
  shieldSub: { color: '#808080', fontSize: 13, fontFamily: 'Inter' },
});

export default IdScanScreen;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// IdScan — React Native Paper</div>${_blk('IdScanScreen', RN_IDSCAN_JSX)}</div>`;
