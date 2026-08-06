import * as tokens from '../../generated/tokens.js';

// Alpha fills — NOT in token system (design-layer values):
// rgba(0,0,0,0.07) — secure label pill on illustration

export default { title: 'Screens/SafetyMount' };

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

    <!-- Status Bar (62px) — light surface -->
    <div style="
      height:62px;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-family:Inter,sans-serif;font-size:11px;color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
    </div>

    <!-- Header Section -->
    <div style="
      padding:20px 16px 16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Safety Badge pill -->
      <div style="
        display:inline-flex;
        align-items:center;
        background:${tokens.colorSurfaceInverse};
        color:#ffffff;
        padding:4px 12px;
        border-radius:${tokens.radiusFull}px;
        margin-bottom:12px;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:#ffffff;
        ">&#128737; Safety Step</span>
      </div>

      <!-- Step Dots -->
      <div style="display:flex;gap:6px;margin-bottom:16px;">
        <div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorSurfaceInverse};"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorSurfaceInverse};"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:${tokens.colorGrey300};"></div>
      </div>

      <!-- Main Title -->
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeHeadingMd}px;
        font-weight:${tokens.fontWeightHeadingMd};
        color:${tokens.colorTextPrimary};
        margin-bottom:6px;
        line-height:1.3;
      ">Mount Your Phone Securely</div>

      <!-- Subtitle -->
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeBodyMd}px;
        font-weight:${tokens.fontWeightBodyMd};
        color:${tokens.colorTextSecondary};
        line-height:1.5;
      ">Attach before scanning your QR code.</div>
    </div>

    <!-- Mount Illustration -->
    <div style="
      background:${tokens.colorGrey100};
      padding:24px 0;
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      height:220px;
      flex-shrink:0;
    ">
      <!-- BG Circle -->
      <div style="
        position:absolute;
        width:148px;
        height:148px;
        border-radius:50%;
        background:${tokens.colorGrey200};
        z-index:0;
      "></div>

      <!-- Handlebar (285x22) -->
      <div style="
        position:absolute;
        width:285px;
        height:22px;
        background:${tokens.colorSurfaceInverse};
        border-radius:${tokens.radiusMd}px;
        z-index:1;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      ">
        <!-- Left Grip (42x42 ellipse) -->
        <div style="
          position:absolute;
          width:42px;
          height:42px;
          border-radius:50%;
          background:${tokens.colorGrey700};
          top:50%;
          left:-10px;
          transform:translateY(-50%);
        "></div>
        <!-- Right Grip (42x42 ellipse) -->
        <div style="
          position:absolute;
          width:42px;
          height:42px;
          border-radius:50%;
          background:${tokens.colorGrey700};
          top:50%;
          right:-10px;
          transform:translateY(-50%);
        "></div>

        <!-- Mount Clamp (47x36) centered on handlebar -->
        <div style="
          position:absolute;
          width:47px;
          height:36px;
          background:${tokens.colorGrey800};
          border-radius:6px;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          z-index:2;
        "></div>
      </div>

      <!-- Phone Body (59x100) above clamp -->
      <div style="
        position:absolute;
        width:59px;
        height:100px;
        background:${tokens.colorSurfaceInverse};
        border-radius:8px;
        z-index:3;
        top:50%;
        left:50%;
        transform:translate(-50%, -95%);
        display:flex;
        align-items:center;
        justify-content:center;
      ">
        <!-- Phone Screen (49x74) -->
        <div style="
          width:49px;
          height:74px;
          background:${tokens.colorGrey900};
          border-radius:4px;
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          <!-- App Icon on Screen -->
          <span style="font-size:17px;color:${tokens.colorActionPrimary};">&#9889;</span>
        </div>
      </div>

      <!-- Secure Label (bottom-center) -->
      <div style="
        position:absolute;
        bottom:12px;
        left:50%;
        transform:translateX(-50%);
        background:${tokens.colorSurfaceInverse};
        color:#ffffff;
        padding:4px 10px;
        border-radius:${tokens.radiusFull}px;
        display:inline-flex;
        align-items:center;
        gap:4px;
        white-space:nowrap;
        z-index:4;
      ">
        <span style="font-size:10px;">&#128274;</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;">Secured</span>
      </div>
    </div>

    <!-- Warning Card -->
    <div style="
      background:${tokens.colorGrey050};
      border-radius:${tokens.radiusLg}px;
      margin:16px;
      padding:16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeBodySm}px;
        font-weight:${tokens.fontWeightBodySm};
        color:${tokens.colorTextSecondary};
        line-height:1.5;
      ">&#9888; Do not ride without securing your phone. Unsecured phones can be a hazard.</span>
    </div>

    <!-- Confirmation Area -->
    <div style="
      padding:0 16px 32px;
      display:flex;
      flex-direction:column;
      gap:16px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <!-- Checkbox Row -->
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="
          width:22px;
          height:22px;
          border-radius:4px;
          background:${tokens.colorActionPrimary};
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          cursor:pointer;
        ">
          <span style="font-size:13px;color:#0f0f0f;font-weight:600;line-height:1;">&#10003;</span>
        </div>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeBodyMd}px;
          font-weight:${tokens.fontWeightBodyMd};
          color:${tokens.colorTextPrimary};
        ">I've safely mounted my phone</span>
      </div>

      <!-- Swipe Slider -->
      <div style="
        position:relative;
        width:100%;
        height:29px;
        background:${tokens.colorGrey100};
        border-radius:${tokens.radiusFull}px;
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:${tokens.colorGrey500};
        ">Slide to confirm &#8594;</span>
        <!-- Thumb (44x44 circle, overflows track) -->
        <div style="
          position:absolute;
          width:44px;
          height:44px;
          border-radius:50%;
          background:${tokens.colorSurfaceInverse};
          left:4px;
          top:-7px;
          cursor:pointer;
        "></div>
      </div>

      <!-- Secured CTA Button (disabled) -->
      <div style="
        height:56px;
        width:100%;
        background:${tokens.colorActionPrimary};
        border-radius:${tokens.radiusFull}px;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        box-sizing:border-box;
        opacity:0.5;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeHeadingSm}px;
          font-weight:${tokens.fontWeightHeadingSm};
          color:#0f0f0f;
        ">&#128737; Proceed to Scan</span>
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
  // Inner screen stays #ffffff (light screen for Safety Mount)

  // State
  let checked = true;
  let sliderConfirmed = false;

  // Status bar (light)
  const statusBar = document.createElement('div');
  statusBar.style.cssText = `flex-shrink:0;height:62px;background:${tokens.colorSurfaceBase};display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-sizing:border-box;`;
  statusBar.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span><span style="font-family:Inter,sans-serif;font-size:11px;color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>`;

  // Header Section
  const headerSection = document.createElement('div');
  headerSection.style.cssText = 'padding:20px 16px 16px;box-sizing:border-box;flex-shrink:0;';

  // Safety Badge pill
  const safetyBadge = document.createElement('div');
  safetyBadge.style.cssText = `display:inline-flex;align-items:center;background:${tokens.colorSurfaceInverse};padding:4px 12px;border-radius:${tokens.radiusFull}px;margin-bottom:12px;`;
  const safetyBadgeText = document.createElement('span');
  safetyBadgeText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;`;
  safetyBadgeText.textContent = '\u{1F6E1} Safety Step';
  safetyBadge.appendChild(safetyBadgeText);

  // Step Dots
  const stepDots = document.createElement('div');
  stepDots.style.cssText = 'display:flex;gap:6px;margin-bottom:16px;';
  [tokens.colorSurfaceInverse, tokens.colorSurfaceInverse, tokens.colorGrey300].forEach(bg => {
    const dot = document.createElement('div');
    dot.style.cssText = `width:8px;height:8px;border-radius:50%;background:${bg};`;
    stepDots.appendChild(dot);
  });

  // Main Title
  const mainTitle = document.createElement('div');
  mainTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingMd}px;font-weight:${tokens.fontWeightHeadingMd};color:${tokens.colorTextPrimary};margin-bottom:6px;line-height:1.3;`;
  mainTitle.textContent = 'Mount Your Phone Securely';

  // Subtitle
  const subtitle = document.createElement('div');
  subtitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};color:${tokens.colorTextSecondary};line-height:1.5;`;
  subtitle.textContent = 'Attach before scanning your QR code.';

  headerSection.appendChild(safetyBadge);
  headerSection.appendChild(stepDots);
  headerSection.appendChild(mainTitle);
  headerSection.appendChild(subtitle);

  // Mount Illustration
  const illustration = document.createElement('div');
  illustration.style.cssText = `background:${tokens.colorGrey100};padding:24px 0;display:flex;align-items:center;justify-content:center;position:relative;height:220px;flex-shrink:0;`;

  // BG Circle
  const bgCircle = document.createElement('div');
  bgCircle.style.cssText = `position:absolute;width:148px;height:148px;border-radius:50%;background:${tokens.colorGrey200};z-index:0;`;
  illustration.appendChild(bgCircle);

  // Handlebar wrapper (285x22)
  const handlebar = document.createElement('div');
  handlebar.style.cssText = `position:absolute;width:285px;height:22px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusMd}px;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%);`;

  // Left Grip
  const leftGrip = document.createElement('div');
  leftGrip.style.cssText = `position:absolute;width:42px;height:42px;border-radius:50%;background:${tokens.colorGrey700};top:50%;left:-10px;transform:translateY(-50%);`;
  handlebar.appendChild(leftGrip);

  // Right Grip
  const rightGrip = document.createElement('div');
  rightGrip.style.cssText = `position:absolute;width:42px;height:42px;border-radius:50%;background:${tokens.colorGrey700};top:50%;right:-10px;transform:translateY(-50%);`;
  handlebar.appendChild(rightGrip);

  // Mount Clamp (47x36) centered
  const mountClamp = document.createElement('div');
  mountClamp.style.cssText = `position:absolute;width:47px;height:36px;background:${tokens.colorGrey800};border-radius:6px;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2;`;
  handlebar.appendChild(mountClamp);

  illustration.appendChild(handlebar);

  // Phone Body (59x100) above clamp
  const phoneBody = document.createElement('div');
  phoneBody.style.cssText = `position:absolute;width:59px;height:100px;background:${tokens.colorSurfaceInverse};border-radius:8px;z-index:3;top:50%;left:50%;transform:translate(-50%,-95%);display:flex;align-items:center;justify-content:center;`;

  // Phone Screen (49x74)
  const phoneScreen = document.createElement('div');
  phoneScreen.style.cssText = `width:49px;height:74px;background:${tokens.colorGrey900};border-radius:4px;display:flex;align-items:center;justify-content:center;`;
  const appIcon = document.createElement('span');
  appIcon.style.cssText = `font-size:17px;color:${tokens.colorActionPrimary};`;
  appIcon.innerHTML = '&#9889;';
  phoneScreen.appendChild(appIcon);
  phoneBody.appendChild(phoneScreen);
  illustration.appendChild(phoneBody);

  // Secure Label
  const secureLabel = document.createElement('div');
  secureLabel.style.cssText = `position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:${tokens.colorSurfaceInverse};color:#ffffff;padding:4px 10px;border-radius:${tokens.radiusFull}px;display:inline-flex;align-items:center;gap:4px;white-space:nowrap;z-index:4;`;
  secureLabel.innerHTML = `<span style="font-size:10px;">&#128274;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:#ffffff;">Secured</span>`;
  illustration.appendChild(secureLabel);

  // Warning Card
  const warningCard = document.createElement('div');
  warningCard.style.cssText = `background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;margin:16px;padding:16px;box-sizing:border-box;flex-shrink:0;`;
  const warningText = document.createElement('span');
  warningText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodySm}px;font-weight:${tokens.fontWeightBodySm};color:${tokens.colorTextSecondary};line-height:1.5;`;
  warningText.textContent = '\u26A0 Do not ride without securing your phone. Unsecured phones can be a hazard.';
  warningCard.appendChild(warningText);

  // Confirmation Area
  const confirmArea = document.createElement('div');
  confirmArea.style.cssText = 'padding:0 16px 32px;display:flex;flex-direction:column;gap:16px;box-sizing:border-box;flex-shrink:0;';

  // Checkbox Row
  const checkboxRow = document.createElement('div');
  checkboxRow.style.cssText = 'display:flex;align-items:center;gap:12px;';

  const checkbox = document.createElement('div');
  checkbox.style.cssText = `width:22px;height:22px;border-radius:4px;background:${tokens.colorActionPrimary};display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;`;
  const checkmark = document.createElement('span');
  checkmark.style.cssText = 'font-size:13px;color:#0f0f0f;font-weight:600;line-height:1;';
  checkmark.innerHTML = '&#10003;';
  checkbox.appendChild(checkmark);

  checkbox.addEventListener('pointerdown', () => {
    checked = !checked;
    checkbox.style.background = checked ? tokens.colorActionPrimary : tokens.colorGrey200;
    checkmark.innerHTML = checked ? '&#10003;' : '';
  });

  const checkboxLabel = document.createElement('span');
  checkboxLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};color:${tokens.colorTextPrimary};`;
  checkboxLabel.textContent = "I've safely mounted my phone";

  checkboxRow.appendChild(checkbox);
  checkboxRow.appendChild(checkboxLabel);

  // Swipe Slider
  const sliderTrack = document.createElement('div');
  sliderTrack.style.cssText = `position:relative;width:100%;height:29px;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;`;

  const trackLabel = document.createElement('span');
  trackLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorGrey500};`;
  trackLabel.innerHTML = 'Slide to confirm &#8594;';
  sliderTrack.appendChild(trackLabel);

  const sliderThumb = document.createElement('div');
  sliderThumb.style.cssText = `position:absolute;width:44px;height:44px;border-radius:50%;background:${tokens.colorSurfaceInverse};left:4px;top:-7px;cursor:pointer;transition:left 200ms ease;`;
  sliderTrack.appendChild(sliderThumb);

  sliderThumb.addEventListener('pointerdown', () => {
    if (!sliderConfirmed) {
      sliderConfirmed = true;
      sliderThumb.style.left = 'calc(100% - 48px)';
      trackLabel.innerHTML = '&#10003; Confirmed';
      ctaBtn.style.opacity = '1';
    }
  });

  // CTA Button (disabled until slider moves)
  const ctaBtn = document.createElement('div');
  ctaBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;opacity:0.5;transition:transform 100ms ease,opacity 200ms ease;`;
  const ctaBtnText = document.createElement('span');
  ctaBtnText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:${tokens.fontWeightHeadingSm};color:#0f0f0f;`;
  ctaBtnText.innerHTML = '&#128737; Proceed to Scan';
  ctaBtn.appendChild(ctaBtnText);

  ctaBtn.addEventListener('pointerdown', () => { ctaBtn.style.transform = 'scale(0.97)'; });
  ctaBtn.addEventListener('pointerup', () => { ctaBtn.style.transform = 'scale(1)'; });
  ctaBtn.addEventListener('pointerleave', () => { ctaBtn.style.transform = 'scale(1)'; });

  confirmArea.appendChild(checkboxRow);
  confirmArea.appendChild(sliderTrack);
  confirmArea.appendChild(ctaBtn);

  // Assemble screen (note: makePhoneFrame already adds its own status bar via bar element)
  // We skip the frame's bar since we want light-mode status bar below
  // The makePhoneFrame bar uses dark background; we need to customize for light screen
  // Solution: screen's first child is already the dark bar from makePhoneFrame
  // We add our own light content after that bar
  screen.appendChild(headerSection);
  screen.appendChild(illustration);
  screen.appendChild(warningCard);
  screen.appendChild(confirmArea);

  return frame;
};

// ── Source code panel ──────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_SAFETYMOUNT_JSX = `// SafetyMount Screen — React Native Paper
import React from 'react';
import { View, StyleSheet, TouchableOpacity, PanResponder, Animated } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase     = '#FFFFFF'
// tokens.colorSurfaceInverse  = '#0F0F0F'
// tokens.colorActionPrimary   = '#C6FF2D'
// tokens.colorGrey100         = '#F5F5F5'
// tokens.colorGrey200         = '#EBEBEB'
// tokens.colorGrey300         = '#C9C9C9'
// tokens.colorGrey700         = '#4A4A4A'
// tokens.colorGrey800         = '#2F2F2F'
// tokens.colorGrey900         = '#1A1A1A'
// tokens.colorGrey050         = '#FAFAFA'
// tokens.colorTextPrimary     = '#0F0F0F'
// tokens.colorTextSecondary   = '#808080'
// tokens.radiusFull           = 999
// tokens.radiusLg             = 20
// tokens.radiusMd             = 16

const SafetyMountScreen = () => {
  const [checked, setChecked] = React.useState(true);
  const [sliderConfirmed, setSliderConfirmed] = React.useState(false);
  const thumbX = React.useRef(new Animated.Value(4)).current;

  const handleSliderConfirm = () => {
    if (!sliderConfirmed) {
      Animated.timing(thumbX, { toValue: /* track width - 48 */ 312, duration: 200, useNativeDriver: false }).start();
      setSliderConfirmed(true);
    }
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.safetyBadge}>
          <Text style={styles.badgeText}>&#128737; Safety Step</Text>
        </View>
        <View style={styles.stepDots}>
          <View style={[styles.dot, { backgroundColor: '#0f0f0f' }]} />
          <View style={[styles.dot, { backgroundColor: '#0f0f0f' }]} />
          <View style={[styles.dot, { backgroundColor: '#c9c9c9' }]} />
        </View>
        <Text style={styles.mainTitle}>Mount Your Phone Securely</Text>
        <Text style={styles.subtitle}>Attach before scanning your QR code.</Text>
      </View>

      {/* Mount Illustration */}
      <View style={styles.illustration}>
        <View style={styles.bgCircle} />
        <View style={styles.handlebar}>
          <View style={[styles.grip, { left: -10 }]} />
          <View style={[styles.grip, { right: -10 }]} />
          <View style={styles.mountClamp} />
        </View>
        <View style={styles.phoneBody}>
          <View style={styles.phoneScreen}>
            <Text style={{ fontSize: 17, color: '#c6ff2d' }}>&#9889;</Text>
          </View>
        </View>
        <View style={styles.secureLabel}>
          <Text style={{ fontSize: 10 }}>&#128274;</Text>
          <Text style={styles.secureLabelText}>Secured</Text>
        </View>
      </View>

      {/* Warning Card */}
      <View style={styles.warningCard}>
        <Text style={styles.warningText}>
          &#9888; Do not ride without securing your phone. Unsecured phones can be a hazard.
        </Text>
      </View>

      {/* Confirmation Area */}
      <View style={styles.confirmArea}>
        {/* Checkbox Row */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setChecked(v => !v)}
        >
          <View style={[styles.checkbox, { backgroundColor: checked ? '#c6ff2d' : '#ebebeb' }]}>
            {checked && <Text style={styles.checkmark}>&#10003;</Text>}
          </View>
          <Text style={styles.checkboxLabel}>I've safely mounted my phone</Text>
        </TouchableOpacity>

        {/* Swipe Slider */}
        <View style={styles.sliderTrack}>
          <Text style={styles.sliderLabel}>
            {sliderConfirmed ? '&#10003; Confirmed' : 'Slide to confirm \u2192'}
          </Text>
          <TouchableOpacity onPress={handleSliderConfirm}>
            <Animated.View style={[styles.sliderThumb, { left: thumbX }]} />
          </TouchableOpacity>
        </View>

        {/* CTA Button */}
        <Button
          mode="contained"
          buttonColor="#c6ff2d"
          textColor="#0f0f0f"
          style={[styles.ctaBtn, { opacity: sliderConfirmed ? 1 : 0.5 }]}
          disabled={!sliderConfirmed}
        >
          &#128737; Proceed to Scan
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff', flexDirection: 'column' },
  header: { padding: 20, paddingBottom: 16 },
  safetyBadge: { alignSelf: 'flex-start', backgroundColor: '#0f0f0f', paddingVertical: 4, paddingHorizontal: 12, borderRadius: 999, marginBottom: 12 },
  badgeText: { color: '#ffffff', fontSize: 11, fontWeight: '500', fontFamily: 'Inter' },
  stepDots: { flexDirection: 'row', gap: 6, marginBottom: 16 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  mainTitle: { fontSize: 17, fontWeight: '600', color: '#0f0f0f', marginBottom: 6, fontFamily: 'Inter' },
  subtitle: { fontSize: 15, color: '#808080', fontFamily: 'Inter' },
  illustration: { backgroundColor: '#f5f5f5', height: 220, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  bgCircle: { position: 'absolute', width: 148, height: 148, borderRadius: 74, backgroundColor: '#ebebeb' },
  handlebar: { position: 'absolute', width: 285, height: 22, backgroundColor: '#0f0f0f', borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  grip: { position: 'absolute', width: 42, height: 42, borderRadius: 21, backgroundColor: '#4a4a4a' },
  mountClamp: { width: 47, height: 36, backgroundColor: '#2f2f2f', borderRadius: 6 },
  phoneBody: { position: 'absolute', width: 59, height: 100, backgroundColor: '#0f0f0f', borderRadius: 8, bottom: '50%', marginBottom: -8, alignItems: 'center', justifyContent: 'center' },
  phoneScreen: { width: 49, height: 74, backgroundColor: '#1a1a1a', borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  secureLabel: { position: 'absolute', bottom: 12, flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#0f0f0f', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999 },
  secureLabelText: { color: '#ffffff', fontSize: 11, fontFamily: 'Inter', fontWeight: '500' },
  warningCard: { backgroundColor: '#fafafa', borderRadius: 20, margin: 16, padding: 16 },
  warningText: { color: '#808080', fontSize: 13, fontFamily: 'Inter', lineHeight: 19 },
  confirmArea: { paddingHorizontal: 16, paddingBottom: 32, gap: 16 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  checkbox: { width: 22, height: 22, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  checkmark: { fontSize: 13, color: '#0f0f0f', fontWeight: '600' },
  checkboxLabel: { fontSize: 15, color: '#0f0f0f', fontFamily: 'Inter' },
  sliderTrack: { height: 29, backgroundColor: '#f5f5f5', borderRadius: 999, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  sliderLabel: { color: '#808080', fontSize: 11, fontFamily: 'Inter', fontWeight: '500' },
  sliderThumb: { position: 'absolute', width: 44, height: 44, borderRadius: 22, backgroundColor: '#0f0f0f', top: -7 },
  ctaBtn: { height: 56, borderRadius: 999 },
});

export default SafetyMountScreen;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// SafetyMount — React Native Paper</div>${_blk('SafetyMountScreen', RN_SAFETYMOUNT_JSX)}</div>`;
