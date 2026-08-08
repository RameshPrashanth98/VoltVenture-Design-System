import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Login' };

// ── makePhoneFrame (inline per file — Phase 7 spec: 402×874px, #0F0F0F bezel, 44px radius) ──
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
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-text-on-inverse);">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

// ── Default export: Hi-Fi Login screen (frame TS9Td — 2nd frame per D-03) ───
export const Default = () => `
<div style="
  width:393px;
  min-height:852px;
  display:flex;
  flex-direction:column;
  background:${tokens.colorSurfaceBase};
  padding:0 var(--vv-space-6);
  box-sizing:border-box;
">
  <!-- Status Bar (light surface) -->
  <div style="
    flex-shrink:0;
    height:62px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
  ">
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:${tokens.colorTextPrimary};letter-spacing:2px;">&#9646; WiFi &#9650;</span>
  </div>

  <!-- Back Navigation (44px) -->
  <div style="
    flex-shrink:0;
    height:44px;
    display:flex;
    align-items:center;
  ">
    <span style="font-size:var(--vv-text-heading-lg-size);color:${tokens.colorTextPrimary};cursor:pointer;line-height:1;">&#8592;</span>
  </div>

  <!-- Main Content / Top Section -->
  <div style="padding:var(--vv-space-7) 0 0;">
    <!-- Header: Welcome back -->
    <div style="
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-body);
      color:${tokens.colorTextSecondary};
      margin-bottom:var(--vv-space-2);
    ">Welcome back</div>
    <!-- Brand Title -->
    <div style="
      font-family:Manjari,sans-serif;
      font-size:24px;
      font-weight:var(--ds-font-weight-display);
      color:${tokens.colorTextPrimary};
      line-height:1.2;
      margin-bottom:var(--vv-space-2);
    ">VoltVenture</div>
    <!-- Subtitle -->
    <div style="
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-body);
      color:${tokens.colorTextSecondary};
      line-height:22px;
      margin-bottom:var(--vv-space-7);
    ">Sign in to continue your journey.</div>

    <!-- Social Buttons -->
    <!-- Apple Button -->
    <button style="
      height:56px;
      width:100%;
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusFull}px;
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:var(--vv-space-3);
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-heading);
      color:var(--vv-color-text-on-inverse);
      box-sizing:border-box;
      margin-bottom:var(--vv-space-4);
    ">&#63743;  Sign in with Apple</button>
    <!-- Google Button -->
    <button style="
      height:56px;
      width:100%;
      background:${tokens.colorSurfaceBase};
      border:1px solid ${tokens.colorGrey200};
      border-radius:${tokens.radiusFull}px;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:var(--vv-space-3);
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-heading);
      color:${tokens.colorTextPrimary};
      box-sizing:border-box;
    ">G  Sign in with Google</button>

    <!-- OR Divider -->
    <div style="display:flex;align-items:center;gap:var(--vv-space-4);margin:var(--vv-space-6) 0;">
      <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
      <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">OR</span>
      <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
    </div>

    <!-- Input Section -->
    <!-- Method Toggle (segmented control): Email active by default -->
    <div style="
      display:flex;
      background:${tokens.colorGrey100};
      border-radius:${tokens.radiusFull}px;
      padding:var(--vv-space-2);
      gap:var(--vv-space-2);
    ">
      <!-- Email tab (active) -->
      <div style="
        flex:1;
        background:${tokens.colorSurfaceInverse};
        color:var(--vv-color-text-on-inverse);
        border-radius:${tokens.radiusFull}px;
        padding:var(--vv-space-3) var(--vv-space-7);
        text-align:center;
        font-family:Inter,sans-serif;
        font-size:var(--vv-text-body-md-size);
        font-weight:var(--ds-font-weight-heading);
        cursor:pointer;
      ">Email</div>
      <!-- Phone tab (inactive) -->
      <div style="
        flex:1;
        background:transparent;
        color:${tokens.colorTextSecondary};
        border-radius:${tokens.radiusFull}px;
        padding:var(--vv-space-3) var(--vv-space-7);
        text-align:center;
        font-family:Inter,sans-serif;
        font-size:var(--vv-text-body-md-size);
        font-weight:var(--ds-font-weight-heading);
        cursor:pointer;
      ">Phone</div>
    </div>

    <!-- Phone Input Row (colorGrey050 background) -->
    <div style="
      margin-top:var(--vv-space-5);
      background:${tokens.colorGrey050};
      border-radius:${tokens.radiusLg}px;
      padding:var(--vv-space-4) var(--vv-space-5);
      display:flex;
      align-items:center;
      gap:var(--vv-space-3);
      box-sizing:border-box;
    ">
      <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">&#127470;&#127475; +91</span>
      <div style="width:1px;height:24px;background:${tokens.colorGrey200};flex-shrink:0;"></div>
      <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextPrimary};">98XXXXXXXX</span>
    </div>

    <!-- Cached Hint row -->
    <div style="
      margin-top:var(--vv-space-3);
      display:flex;
      align-items:center;
      gap:6px;
    ">
      <span style="font-size:12px;">&#9203;</span>
      <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">Last used: phone ending in 29</span>
    </div>

    <!-- Continue Login Button: colorSurfaceInverse (BLACK — not green) -->
    <button style="
      margin-top:var(--vv-space-7);
      height:56px;
      width:100%;
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusFull}px;
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-heading);
      color:var(--vv-color-text-on-inverse);
      box-sizing:border-box;
    ">Continue &#8594;</button>
  </div>

  <!-- Sign Up Anchor -->
  <div style="
    text-align:center;
    margin-top:var(--vv-space-5);
    padding-bottom:34px;
  ">
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};">Don&apos;t have an account? </span>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextAccent};">Sign Up</span>
  </div>
</div>
`;

// ── Interactive export: DOM element, phone-framed ─────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Scrollable content area
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;overflow-y:auto;padding:0 var(--vv-space-6) 34px;box-sizing:border-box;background:var(--vv-color-surface-base);position:relative;';

  // Hidden phone input for keyboard capture
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'tel';
  hiddenInput.style.cssText = 'position:absolute;opacity:0;top:-9999px;left:-9999px;width:1px;height:1px;';

  // Back nav
  const backNav = document.createElement('div');
  backNav.style.cssText = 'height:44px;display:flex;align-items:center;';
  backNav.innerHTML = '<span style="font-size:var(--vv-text-heading-lg-size);color:var(--vv-color-text-primary);cursor:pointer;line-height:1;">&#8592;</span>';

  // Top section
  const topSection = document.createElement('div');
  topSection.style.cssText = 'padding:var(--vv-space-7) 0 0;';

  // Header
  const headerWelcome = document.createElement('div');
  headerWelcome.style.cssText = `font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};margin-bottom:var(--vv-space-2);`;
  headerWelcome.textContent = 'Welcome back';

  const headerTitle = document.createElement('div');
  headerTitle.style.cssText = `font-family:Manjari,sans-serif;font-size:24px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1.2;margin-bottom:var(--vv-space-2);`;
  headerTitle.textContent = 'VoltVenture';

  const headerSubtitle = document.createElement('div');
  headerSubtitle.style.cssText = `font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};line-height:22px;margin-bottom:var(--vv-space-7);`;
  headerSubtitle.textContent = 'Sign in to continue your journey.';

  // Apple button
  const appleBtn = document.createElement('button');
  appleBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);box-sizing:border-box;margin-bottom:var(--vv-space-4);transition:transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  appleBtn.innerHTML = '&#63743;  Sign in with Apple';
  appleBtn.addEventListener('pointerdown', () => { appleBtn.style.backgroundColor = tokens.colorGrey900; appleBtn.style.transform = 'scale(0.97)'; });
  appleBtn.addEventListener('pointerup', () => { appleBtn.style.backgroundColor = tokens.colorSurfaceInverse; appleBtn.style.transform = 'scale(1)'; });
  appleBtn.addEventListener('pointerleave', () => { appleBtn.style.backgroundColor = tokens.colorSurfaceInverse; appleBtn.style.transform = 'scale(1)'; });

  // Google button
  const googleBtn = document.createElement('button');
  googleBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};box-sizing:border-box;`;
  googleBtn.innerHTML = 'G  Sign in with Google';
  googleBtn.addEventListener('pointerdown', () => { googleBtn.style.backgroundColor = tokens.colorGrey050; });
  googleBtn.addEventListener('pointerup', () => { googleBtn.style.backgroundColor = tokens.colorSurfaceBase; });
  googleBtn.addEventListener('pointerleave', () => { googleBtn.style.backgroundColor = tokens.colorSurfaceBase; });

  // OR divider
  const orDiv = document.createElement('div');
  orDiv.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-4);margin:var(--vv-space-6) 0;';
  orDiv.innerHTML = `
    <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">OR</span>
    <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
  `;

  // Segmented toggle
  let activeMethod = 'email';

  const toggleWrap = document.createElement('div');
  toggleWrap.style.cssText = `display:flex;background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2);gap:var(--vv-space-2);`;

  const emailTab = document.createElement('div');
  emailTab.style.cssText = `flex:1;background:${tokens.colorSurfaceInverse};color:var(--vv-color-text-on-inverse);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-3) var(--vv-space-7);text-align:center;font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);cursor:pointer;`;
  emailTab.textContent = 'Email';

  const phoneTab = document.createElement('div');
  phoneTab.style.cssText = `flex:1;background:transparent;color:${tokens.colorTextSecondary};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-3) var(--vv-space-7);text-align:center;font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);cursor:pointer;`;
  phoneTab.textContent = 'Phone';

  function setActiveTab(method) {
    activeMethod = method;
    if (method === 'email') {
      emailTab.style.background = tokens.colorSurfaceInverse;
      emailTab.style.color = 'var(--vv-color-text-on-inverse)';
      phoneTab.style.background = 'transparent';
      phoneTab.style.color = tokens.colorTextSecondary;
    } else {
      phoneTab.style.background = tokens.colorSurfaceInverse;
      phoneTab.style.color = 'var(--vv-color-text-on-inverse)';
      emailTab.style.background = 'transparent';
      emailTab.style.color = tokens.colorTextSecondary;
    }
  }

  emailTab.addEventListener('pointerdown', () => setActiveTab('email'));
  phoneTab.addEventListener('pointerdown', () => setActiveTab('phone'));

  toggleWrap.appendChild(emailTab);
  toggleWrap.appendChild(phoneTab);

  // Phone input row (colorGrey050 background)
  const inputRow = document.createElement('div');
  inputRow.style.cssText = `margin-top:var(--vv-space-5);background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;padding:var(--vv-space-4) var(--vv-space-5);display:flex;align-items:center;gap:var(--vv-space-3);box-sizing:border-box;`;
  inputRow.innerHTML = `
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">&#127470;&#127475; +91</span>
    <div style="width:1px;height:24px;background:${tokens.colorGrey200};flex-shrink:0;"></div>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextPrimary};">98XXXXXXXX</span>
  `;

  // Cached hint
  const cachedHint = document.createElement('div');
  cachedHint.style.cssText = 'margin-top:var(--vv-space-3);display:flex;align-items:center;gap:6px;';
  cachedHint.innerHTML = `<span style="font-size:12px;">&#9203;</span><span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">Last used: phone ending in 29</span>`;

  // Continue button: colorSurfaceInverse = black, NOT green
  const continueBtn = document.createElement('button');
  continueBtn.style.cssText = `margin-top:var(--vv-space-7);height:56px;width:100%;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);box-sizing:border-box;transition:transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  continueBtn.innerHTML = 'Continue &#8594;';
  continueBtn.addEventListener('pointerdown', () => { continueBtn.style.backgroundColor = tokens.colorGrey800; continueBtn.style.transform = 'scale(0.97)'; });
  continueBtn.addEventListener('pointerup', () => { continueBtn.style.backgroundColor = tokens.colorSurfaceInverse; continueBtn.style.transform = 'scale(1)'; });
  continueBtn.addEventListener('pointerleave', () => { continueBtn.style.backgroundColor = tokens.colorSurfaceInverse; continueBtn.style.transform = 'scale(1)'; });

  // Sign Up anchor
  const signUpRow = document.createElement('div');
  signUpRow.style.cssText = 'text-align:center;margin-top:var(--vv-space-5);';
  signUpRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};">Don't have an account? </span><span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextAccent};cursor:pointer;">Sign Up</span>`;

  // Assemble top section
  topSection.appendChild(headerWelcome);
  topSection.appendChild(headerTitle);
  topSection.appendChild(headerSubtitle);
  topSection.appendChild(appleBtn);
  topSection.appendChild(googleBtn);
  topSection.appendChild(orDiv);
  topSection.appendChild(toggleWrap);
  topSection.appendChild(inputRow);
  topSection.appendChild(cachedHint);
  topSection.appendChild(continueBtn);

  // Assemble content
  content.appendChild(hiddenInput);
  content.appendChild(backNav);
  content.appendChild(topSection);
  content.appendChild(signUpRow);

  screen.appendChild(content);
  return frame;
};

// ── SourceCode export: React Native Paper JSX ────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_LOGIN = `
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceInverse = '#0f0f0f' — Continue button (black, NOT green)
// tokens.colorGrey050 = '#fafafa' — Phone input row background
// tokens.colorActionPrimary = '#c6ff2d' — NOT used for Continue button on Login

const theme = createVoltVentureTheme();

export default function LoginScreen({ navigation }) {
  const [activeMethod, setActiveMethod] = useState('email');

  return (
    <Surface style={styles.screen}>
      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Back Navigation */}
      <TouchableOpacity style={styles.backNav} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.topSection}>
        {/* Header */}
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.brandTitle}>VoltVenture</Text>
        <Text style={styles.subtitle}>Sign in to continue your journey.</Text>

        {/* Social Buttons */}
        <Button
          mode="contained"
          buttonColor="#0f0f0f"
          textColor="#ffffff"
          style={styles.appleBtn}
          contentStyle={styles.btnContent}
          onPress={() => {}}
        >
          &#63743;  Sign in with Apple
        </Button>

        <Button
          mode="outlined"
          textColor="#0f0f0f"
          style={styles.googleBtn}
          contentStyle={styles.btnContent}
          onPress={() => {}}
        >
          G  Sign in with Google
        </Button>

        {/* OR Divider */}
        <View style={styles.orDivider}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>

        {/* Method Toggle (Email/Phone segmented control) */}
        <View style={styles.toggle}>
          <TouchableOpacity
            style={[styles.toggleOption, activeMethod === 'email' && styles.toggleActive]}
            onPress={() => setActiveMethod('email')}
          >
            <Text style={[styles.toggleLabel, activeMethod === 'email' && styles.toggleLabelActive]}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleOption, activeMethod === 'phone' && styles.toggleActive]}
            onPress={() => setActiveMethod('phone')}
          >
            <Text style={[styles.toggleLabel, activeMethod === 'phone' && styles.toggleLabelActive]}>
              Phone
            </Text>
          </TouchableOpacity>
        </View>

        {/* Phone Input Row — colorGrey050 (#fafafa) background */}
        <View style={styles.inputRow}>
          <Text style={styles.flagText}>🇮🇳 +91</Text>
          <View style={styles.separator} />
          <Text style={styles.inputValue}>98XXXXXXXX</Text>
        </View>

        {/* Cached hint */}
        <View style={styles.cachedHint}>
          <Text style={styles.hintText}>⏱ Last used: phone ending in 29</Text>
        </View>

        {/* Continue button — colorSurfaceInverse: black (#0f0f0f), NOT green */}
        <Button
          mode="contained"
          buttonColor="#0f0f0f"
          textColor="#ffffff"
          style={styles.continueBtn}
          contentStyle={styles.btnContent}
          onPress={() => {}}
        >
          Continue →
        </Button>
      </View>

      {/* Sign Up anchor */}
      <TouchableOpacity style={styles.signUpRow} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpAccent}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </Surface>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 },
  statusBar: { height: 62 },
  backNav: { height: 44, justifyContent: 'center' },
  backArrow: { fontSize: 20, color: '#0f0f0f' },
  topSection: { paddingTop: 24 },
  welcomeText: { fontFamily: 'Inter', fontSize: 15, color: '#808080', marginBottom: 4 },
  brandTitle: { fontFamily: 'Manjari', fontSize: 24, fontWeight: '700', color: '#0f0f0f', marginBottom: 4 },
  subtitle: { fontFamily: 'Inter', fontSize: 15, color: '#808080', lineHeight: 22, marginBottom: 24 },
  appleBtn: { borderRadius: 999, marginBottom: 12 },
  googleBtn: { borderRadius: 999, borderColor: '#ebebeb' },
  btnContent: { height: 56 },
  orDivider: { flexDirection: 'row', alignItems: 'center', gap: 12, marginVertical: 20 },
  orLine: { flex: 1, height: 1, backgroundColor: '#ebebeb' },
  orText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
  toggle: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5', // tokens.colorGrey100
    borderRadius: 999,
    padding: 4,
    gap: 4,
  },
  toggleOption: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
  },
  toggleActive: { backgroundColor: '#0f0f0f' }, // tokens.colorSurfaceInverse
  toggleLabel: { fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#808080' },
  toggleLabelActive: { color: '#ffffff' },
  inputRow: {
    marginTop: 16,
    backgroundColor: '#fafafa', // tokens.colorGrey050
    borderRadius: 20, // tokens.radiusLg
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flagText: { fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#808080' },
  separator: { width: 1, height: 24, backgroundColor: '#ebebeb' },
  inputValue: { fontFamily: 'Inter', fontSize: 15, color: '#0f0f0f' },
  cachedHint: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8 },
  hintText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
  continueBtn: { borderRadius: 999, marginTop: 24 },
  signUpRow: { alignItems: 'center', marginTop: 16, paddingBottom: 34 },
  signUpText: { fontFamily: 'Inter', fontSize: 15, color: '#808080' },
  signUpAccent: { color: '#7d9220' }, // tokens.colorTextAccent
});
`.trim();

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Login — React Native Paper</div>${_blk('LoginScreen.tsx', RN_LOGIN)}</div>`;
