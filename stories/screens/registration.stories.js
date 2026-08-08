import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/Registration' };

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

// ── Default export: Hi-Fi Registration screen (frame Y9ojN) ──────────────────
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
    padding:0;
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

  <!-- Logo Section (text-align:center) -->
  <div style="
    text-align:center;
    padding:var(--vv-space-7) 0 var(--vv-space-5);
    display:flex;
    flex-direction:column;
    align-items:center;
  ">
    <!-- 44×44 logo circle: colorActionPrimary bg, black "V" -->
    <div style="
      width:44px;
      height:44px;
      background:${tokens.colorActionPrimary};
      border-radius:var(--vv-radius-full);
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="font-family:Manjari,sans-serif;font-size:var(--vv-text-numeric-md-size);font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1;">V</span>
    </div>
    <!-- Brand name -->
    <div style="
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-heading-md-size);
      font-weight:var(--ds-font-weight-display);
      color:${tokens.colorTextPrimary};
      margin-top:var(--vv-space-3);
    ">VoltVenture</div>
  </div>

  <!-- Header Section -->
  <div style="margin-bottom:var(--vv-space-7);">
    <div style="
      font-family:Manjari,sans-serif;
      font-size:24px;
      font-weight:var(--ds-font-weight-display);
      color:${tokens.colorTextPrimary};
      line-height:1.2;
      margin-bottom:6px;
    ">Create Account</div>
    <div style="
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-body);
      color:${tokens.colorTextSecondary};
      line-height:22px;
    ">Join VoltVenture to start your first ride.</div>
  </div>

  <!-- Social Buttons Section -->
  <div style="display:flex;flex-direction:column;gap:var(--vv-space-4);">
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
    ">&#63743;  Continue with Apple</button>
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
    ">G  Continue with Google</button>
  </div>

  <!-- OR Divider -->
  <div style="display:flex;align-items:center;gap:var(--vv-space-4);margin:var(--vv-space-6) 0;">
    <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">OR</span>
    <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
  </div>

  <!-- WhatsApp Section -->
  <!-- WhatsApp brand green: #25D366 — no VoltVenture token -->
  <button style="
    height:56px;
    width:100%;
    background:#25D366;
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
  ">&#128241;  Continue with WhatsApp</button>

  <!-- Email link row -->
  <div style="
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  ">
    <span style="
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-md-size);
      font-weight:var(--ds-font-weight-body);
      color:${tokens.colorTextSecondary};
      text-decoration:underline;
    ">Continue with email</span>
  </div>

  <!-- Sign In row -->
  <div style="
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
  ">
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};">Already have an account? </span>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextAccent};margin-left:var(--vv-space-2);">Sign In</span>
  </div>

  <!-- Terms Section -->
  <div style="
    display:flex;
    align-items:flex-start;
    gap:var(--vv-space-4);
    margin-top:var(--vv-space-5);
    padding-bottom:34px;
  ">
    <!-- Checkbox: checked = colorActionPrimary -->
    <div style="
      width:22px;
      height:22px;
      background:${tokens.colorActionPrimary};
      border-radius:4px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-shrink:0;
      cursor:pointer;
    ">
      <span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-display);">&#10003;</span>
    </div>
    <span style="
      font-family:Inter,sans-serif;
      font-size:var(--vv-text-body-sm-size);
      font-weight:var(--ds-font-weight-body);
      color:${tokens.colorTextSecondary};
      line-height:1.5;
    ">By continuing, you agree to our Terms of Service and Privacy Policy</span>
  </div>
</div>
`;

// ── Interactive export: DOM element, phone-framed ─────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Hidden phone input for keyboard capture
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'tel';
  hiddenInput.style.cssText = 'position:absolute;opacity:0;top:-9999px;left:-9999px;width:1px;height:1px;';

  // Scrollable content area
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;overflow-y:auto;padding:0 var(--vv-space-6) 34px;box-sizing:border-box;background:var(--vv-color-surface-base);';

  // Back nav
  const backNav = document.createElement('div');
  backNav.style.cssText = 'height:44px;display:flex;align-items:center;';
  backNav.innerHTML = '<span style="font-size:var(--vv-text-heading-lg-size);color:var(--vv-color-text-primary);cursor:pointer;line-height:1;">&#8592;</span>';

  // Logo section
  const logoSection = document.createElement('div');
  logoSection.style.cssText = 'text-align:center;padding:var(--vv-space-7) 0 var(--vv-space-5);display:flex;flex-direction:column;align-items:center;';

  const logoCircle = document.createElement('div');
  logoCircle.style.cssText = `width:44px;height:44px;background:${tokens.colorActionPrimary};border-radius:var(--vv-radius-full);display:flex;align-items:center;justify-content:center;`;
  logoCircle.innerHTML = `<span style="font-family:Manjari,sans-serif;font-size:var(--vv-text-numeric-md-size);font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1;">V</span>`;

  const brandName = document.createElement('div');
  brandName.style.cssText = 'font-family:Inter,sans-serif;font-size:var(--vv-text-heading-md-size);font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-primary);margin-top:var(--vv-space-3);';
  brandName.textContent = 'VoltVenture';

  logoSection.appendChild(logoCircle);
  logoSection.appendChild(brandName);

  // Header
  const header = document.createElement('div');
  header.style.cssText = 'margin-bottom:var(--vv-space-7);';
  header.innerHTML = `
    <div style="font-family:Manjari,sans-serif;font-size:24px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:1.2;margin-bottom:6px;">Create Account</div>
    <div style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};line-height:22px;">Join VoltVenture to start your first ride.</div>
  `;

  // Social buttons wrapper
  const socialWrap = document.createElement('div');
  socialWrap.style.cssText = 'display:flex;flex-direction:column;gap:var(--vv-space-4);';

  // Apple button
  const appleBtn = document.createElement('button');
  appleBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);box-sizing:border-box;transition:transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  appleBtn.innerHTML = '&#63743;  Continue with Apple';
  appleBtn.addEventListener('pointerdown', () => { appleBtn.style.backgroundColor = tokens.colorGrey900; appleBtn.style.transform = 'scale(0.97)'; });
  appleBtn.addEventListener('pointerup', () => { appleBtn.style.backgroundColor = tokens.colorSurfaceInverse; appleBtn.style.transform = 'scale(1)'; });
  appleBtn.addEventListener('pointerleave', () => { appleBtn.style.backgroundColor = tokens.colorSurfaceInverse; appleBtn.style.transform = 'scale(1)'; });

  // Google button
  const googleBtn = document.createElement('button');
  googleBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorSurfaceBase};border:1px solid ${tokens.colorGrey200};border-radius:${tokens.radiusFull}px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};box-sizing:border-box;transition:transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  googleBtn.innerHTML = 'G  Continue with Google';
  googleBtn.addEventListener('pointerdown', () => { googleBtn.style.backgroundColor = tokens.colorGrey050; });
  googleBtn.addEventListener('pointerup', () => { googleBtn.style.backgroundColor = tokens.colorSurfaceBase; });
  googleBtn.addEventListener('pointerleave', () => { googleBtn.style.backgroundColor = tokens.colorSurfaceBase; });

  socialWrap.appendChild(appleBtn);
  socialWrap.appendChild(googleBtn);

  // OR divider
  const orDiv = document.createElement('div');
  orDiv.style.cssText = 'display:flex;align-items:center;gap:var(--vv-space-4);margin:var(--vv-space-6) 0;';
  orDiv.innerHTML = `
    <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
    <span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);font-weight:var(--ds-font-weight-label-sm);color:${tokens.colorTextSecondary};">OR</span>
    <div style="flex:1;height:1px;background:${tokens.colorGrey200};"></div>
  `;

  // WhatsApp button — #25D366 brand green, no VoltVenture token
  const waBtn = document.createElement('button');
  waBtn.style.cssText = 'height:56px;width:100%;background:#25D366;border-radius:var(--vv-radius-full);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:var(--vv-space-3);font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);box-sizing:border-box;transition:transform var(--vv-duration-fast) var(--vv-easing-standard);';
  waBtn.innerHTML = '&#128241;  Continue with WhatsApp';
  waBtn.addEventListener('pointerdown', () => { waBtn.style.backgroundColor = '#1eb858'; waBtn.style.transform = 'scale(0.97)'; });
  waBtn.addEventListener('pointerup', () => { waBtn.style.backgroundColor = '#25D366'; waBtn.style.transform = 'scale(1)'; });
  waBtn.addEventListener('pointerleave', () => { waBtn.style.backgroundColor = '#25D366'; waBtn.style.transform = 'scale(1)'; });

  // Email link row
  const emailRow = document.createElement('div');
  emailRow.style.cssText = `height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;`;
  emailRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};text-decoration:underline;">Continue with email</span>`;

  // Sign In row
  const signInRow = document.createElement('div');
  signInRow.style.cssText = 'height:44px;display:flex;align-items:center;justify-content:center;';
  signInRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};">Already have an account?&nbsp;</span><span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextAccent};cursor:pointer;">Sign In</span>`;

  // Terms section with checkbox toggle
  let checked = true;
  const termsSection = document.createElement('div');
  termsSection.style.cssText = 'display:flex;align-items:flex-start;gap:var(--vv-space-4);margin-top:var(--vv-space-5);';

  const checkbox = document.createElement('div');
  checkbox.style.cssText = `width:22px;height:22px;background:${tokens.colorActionPrimary};border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;`;
  checkbox.innerHTML = `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-display);">&#10003;</span>`;
  checkbox.addEventListener('pointerdown', () => {
    checked = !checked;
    if (checked) {
      checkbox.style.background = tokens.colorActionPrimary;
      checkbox.innerHTML = `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:var(--ds-font-weight-display);">&#10003;</span>`;
    } else {
      checkbox.style.background = tokens.colorGrey200;
      checkbox.innerHTML = '';
    }
  });

  const termsText = document.createElement('span');
  termsText.style.cssText = `font-family:Inter,sans-serif;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-body);color:${tokens.colorTextSecondary};line-height:1.5;`;
  termsText.textContent = 'By continuing, you agree to our Terms of Service and Privacy Policy';

  termsSection.appendChild(checkbox);
  termsSection.appendChild(termsText);

  // Assemble content
  content.appendChild(hiddenInput);
  content.appendChild(backNav);
  content.appendChild(logoSection);
  content.appendChild(header);
  content.appendChild(socialWrap);
  content.appendChild(orDiv);
  content.appendChild(waBtn);
  content.appendChild(emailRow);
  content.appendChild(signInRow);
  content.appendChild(termsSection);

  screen.appendChild(content);
  return frame;
};

// ── SourceCode export: React Native Paper JSX ────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_REGISTRATION = `
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorActionPrimary = '#c6ff2d'
// tokens.colorSurfaceInverse = '#0f0f0f'
// WhatsApp brand green: '#25D366' — no VoltVenture token

const theme = createVoltVentureTheme();

export default function RegistrationScreen({ navigation }) {
  const [agreed, setAgreed] = useState(true);

  return (
    <Surface style={styles.screen}>
      {/* Status Bar */}
      <View style={styles.statusBar} />

      {/* Back Navigation */}
      <TouchableOpacity style={styles.backNav} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoV}>V</Text>
        </View>
        <Text style={styles.brandName}>VoltVenture</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Create Account</Text>
        <Text style={styles.pageSubtitle}>Join VoltVenture to start your first ride.</Text>
      </View>

      {/* Social Buttons */}
      <Button
        mode="contained"
        buttonColor="#0f0f0f"
        textColor="#ffffff"
        style={styles.appleBtn}
        contentStyle={styles.btnContent}
        onPress={() => {}}
      >
        &#63743;  Continue with Apple
      </Button>

      <Button
        mode="outlined"
        textColor="#0f0f0f"
        style={styles.googleBtn}
        contentStyle={styles.btnContent}
        onPress={() => {}}
      >
        G  Continue with Google
      </Button>

      {/* OR Divider */}
      <View style={styles.orDivider}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      {/* WhatsApp Button — '#25D366' brand green */}
      <Button
        mode="contained"
        buttonColor="#25D366"
        textColor="#ffffff"
        style={styles.waBtn}
        contentStyle={styles.btnContent}
        onPress={() => {}}
      >
        Continue with WhatsApp
      </Button>

      {/* Email link */}
      <TouchableOpacity style={styles.emailRow} onPress={() => {}}>
        <Text style={styles.emailLink}>Continue with email</Text>
      </TouchableOpacity>

      {/* Sign In row */}
      <TouchableOpacity style={styles.signInRow} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInAccent}>Sign In</Text>
        </Text>
      </TouchableOpacity>

      {/* Terms */}
      <View style={styles.termsRow}>
        <TouchableOpacity
          style={[styles.checkbox, agreed ? styles.checkboxChecked : styles.checkboxUnchecked]}
          onPress={() => setAgreed(!agreed)}
        >
          {agreed && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 },
  statusBar: { height: 62 },
  backNav: { height: 44, justifyContent: 'center' },
  backArrow: { fontSize: 20, color: '#0f0f0f' },
  logoSection: { alignItems: 'center', paddingVertical: 24 },
  logoCircle: {
    width: 44, height: 44,
    borderRadius: 22,
    backgroundColor: '#c6ff2d', // tokens.colorActionPrimary
    alignItems: 'center', justifyContent: 'center',
  },
  logoV: { fontFamily: 'Manjari', fontSize: 22, fontWeight: '700', color: '#0f0f0f' },
  brandName: { fontFamily: 'Inter', fontSize: 17, fontWeight: '700', color: '#0f0f0f', marginTop: 8 },
  header: { marginBottom: 24 },
  pageTitle: { fontFamily: 'Manjari', fontSize: 24, fontWeight: '700', color: '#0f0f0f', marginBottom: 6 },
  pageSubtitle: { fontFamily: 'Inter', fontSize: 15, color: '#808080', lineHeight: 22 },
  appleBtn: { borderRadius: 999, marginBottom: 12 },
  googleBtn: { borderRadius: 999, borderColor: '#ebebeb' },
  btnContent: { height: 56 },
  orDivider: { flexDirection: 'row', alignItems: 'center', gap: 12, marginVertical: 20 },
  orLine: { flex: 1, height: 1, backgroundColor: '#ebebeb' },
  orText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#808080' },
  waBtn: { borderRadius: 999 },
  emailRow: { height: 44, alignItems: 'center', justifyContent: 'center' },
  emailLink: { fontFamily: 'Inter', fontSize: 15, color: '#808080', textDecorationLine: 'underline' },
  signInRow: { height: 44, alignItems: 'center', justifyContent: 'center' },
  signInText: { fontFamily: 'Inter', fontSize: 15, color: '#808080' },
  signInAccent: { color: '#7d9220' }, // tokens.colorTextAccent
  termsRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginTop: 16, paddingBottom: 34 },
  checkbox: { width: 22, height: 22, borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  checkboxChecked: { backgroundColor: '#c6ff2d' }, // tokens.colorActionPrimary
  checkboxUnchecked: { backgroundColor: '#ebebeb' }, // tokens.colorGrey200
  checkmark: { fontSize: 12, fontWeight: '700', color: '#0f0f0f' },
  termsText: { fontFamily: 'Inter', fontSize: 13, color: '#808080', lineHeight: 20, flex: 1 },
});
`.trim();

export const SourceCode = () =>
  `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// Registration — React Native Paper</div>${_blk('RegistrationScreen.tsx', RN_REGISTRATION)}</div>`;
