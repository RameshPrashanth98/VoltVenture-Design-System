import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/EditProfile' };

// ── makePhoneFrame (inline per file — Phase 7 spec: 402×874px, #0F0F0F bezel, 44px radius) ──
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
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:#ffffff;">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

// ── Default export: Hi-Fi Edit Profile screen (frame amAsI) ──────────────────
export const Default = () => `
<div style="
  width:393px;
  min-height:852px;
  display:flex;
  flex-direction:column;
  background:${tokens.colorSurfaceBase};
  box-sizing:border-box;
">
  <!-- Status Bar (light) -->
  <div style="
    flex-shrink:0;
    height:62px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:${tokens.colorSurfaceBase};
    padding:0 20px;
    box-sizing:border-box;
  ">
    <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span>
    <span style="font-family:Inter,sans-serif;font-size:11px;color:${tokens.colorTextPrimary};letter-spacing:2px;">&#9646; WiFi &#9650;</span>
  </div>

  <!-- Header Row (44px) -->
  <div style="
    flex-shrink:0;
    height:44px;
    display:flex;
    align-items:center;
    padding:0 16px;
    gap:12px;
    box-sizing:border-box;
  ">
    <!-- Back Button 36×36px -->
    <div style="
      width:36px;
      height:36px;
      background:${tokens.colorGrey100};
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      flex-shrink:0;
    ">
      <span style="font-size:18px;color:${tokens.colorTextPrimary};line-height:1;">&#8592;</span>
    </div>
    <!-- Title -->
    <span style="
      font-family:Manjari,sans-serif;
      font-size:20px;
      font-weight:700;
      color:${tokens.colorTextPrimary};
      line-height:1;
    ">Edit Profile</span>
  </div>

  <!-- Avatar Section -->
  <div style="
    padding:24px 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:12px;
  ">
    <!-- Avatar Wrap: position:relative, 88×88 container -->
    <div style="
      position:relative;
      width:88px;
      height:88px;
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <!-- Avatar Circle: 76×76px black circle -->
      <div style="
        width:76px;
        height:76px;
        background:${tokens.colorSurfaceInverse};
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
      ">
        <span style="font-size:34px;color:#ffffff;line-height:1;">&#128100;</span>
      </div>
      <!-- Camera Button: 28×28px, position:absolute bottom-right -->
      <div style="
        position:absolute;
        bottom:0;
        right:0;
        width:28px;
        height:28px;
        background:${tokens.colorActionPrimary};
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      ">
        <span style="font-size:13px;line-height:1;">&#128247;</span>
      </div>
    </div>
    <!-- Change photo text -->
    <span style="
      font-family:Inter,sans-serif;
      font-size:11px;
      font-weight:500;
      color:${tokens.colorTextAccent};
      cursor:pointer;
    ">Change photo</span>
  </div>

  <!-- Form Section -->
  <div style="
    padding:0 16px;
    display:flex;
    flex-direction:column;
    gap:16px;
    box-sizing:border-box;
  ">

    <!-- FIELD 1: FULL NAME -->
    <div>
      <!-- Label Row -->
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:6px;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:11px;
          font-weight:500;
          color:${tokens.colorGrey500};
          text-transform:uppercase;
          letter-spacing:0.5px;
        ">Full Name</span>
      </div>
      <!-- Input Row -->
      <div style="
        background:${tokens.colorGrey050};
        border-radius:${tokens.radiusMd}px;
        padding:12px 16px;
        border:1px solid ${tokens.colorGrey200};
        display:flex;
        align-items:center;
        gap:8px;
        cursor:text;
        box-sizing:border-box;
      ">
        <span style="font-size:16px;color:${tokens.colorGrey300};line-height:1;">&#128100;</span>
        <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:400;color:${tokens.colorTextPrimary};">Alex Johnson</span>
      </div>
    </div>

    <!-- FIELD 2: EMAIL ADDRESS -->
    <div>
      <!-- Label Row -->
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:6px;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:11px;
          font-weight:500;
          color:${tokens.colorGrey500};
          text-transform:uppercase;
          letter-spacing:0.5px;
        ">Email Address</span>
        <!-- VerifiedChip -->
        <div style="
          background:${tokens.colorGreen100};
          border-radius:${tokens.radiusFull}px;
          padding:2px 8px;
          display:inline-flex;
          align-items:center;
        ">
          <span style="
            font-family:Inter,sans-serif;
            font-size:11px;
            font-weight:500;
            color:${tokens.colorTextAccent};
          ">&#10003; Verified</span>
        </div>
      </div>
      <!-- Input Row -->
      <div style="
        background:${tokens.colorGrey050};
        border-radius:${tokens.radiusMd}px;
        padding:12px 16px;
        border:1px solid ${tokens.colorGrey200};
        display:flex;
        align-items:center;
        gap:8px;
        cursor:text;
        box-sizing:border-box;
      ">
        <span style="font-size:16px;color:${tokens.colorGrey300};line-height:1;">&#9993;</span>
        <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:400;color:${tokens.colorTextPrimary};">alex.johnson@email.com</span>
      </div>
    </div>

    <!-- FIELD 3: PHONE NUMBER -->
    <div>
      <!-- Label Row -->
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:6px;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:11px;
          font-weight:500;
          color:${tokens.colorGrey500};
          text-transform:uppercase;
          letter-spacing:0.5px;
        ">Phone Number</span>
        <!-- VerifiedChip -->
        <div style="
          background:${tokens.colorGreen100};
          border-radius:${tokens.radiusFull}px;
          padding:2px 8px;
          display:inline-flex;
          align-items:center;
        ">
          <span style="
            font-family:Inter,sans-serif;
            font-size:11px;
            font-weight:500;
            color:${tokens.colorTextAccent};
          ">&#10003; Verified</span>
        </div>
      </div>
      <!-- Input Row -->
      <div style="
        background:${tokens.colorGrey050};
        border-radius:${tokens.radiusMd}px;
        padding:12px 16px;
        border:1px solid ${tokens.colorGrey200};
        display:flex;
        align-items:center;
        gap:8px;
        cursor:text;
        box-sizing:border-box;
      ">
        <span style="font-size:16px;color:${tokens.colorGrey300};line-height:1;">&#128241;</span>
        <span style="font-family:Inter,sans-serif;font-size:15px;font-weight:400;color:${tokens.colorTextPrimary};">+91 98XXXXXXXX</span>
      </div>
    </div>

  </div>

  <!-- Spacer -->
  <div style="flex:1;"></div>

  <!-- CTA Wrap -->
  <div style="padding:16px;box-sizing:border-box;padding-bottom:34px;">
    <button style="
      height:56px;
      width:100%;
      background:${tokens.colorActionPrimary};
      border-radius:${tokens.radiusFull}px;
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      box-sizing:border-box;
    ">
      <span style="font-size:16px;line-height:1;">&#10003;</span>
      <span style="
        font-family:Inter,sans-serif;
        font-size:15px;
        font-weight:600;
        color:${tokens.colorTextPrimary};
      ">Save Changes</span>
    </button>
  </div>
</div>
`;

// ── Interactive export: DOM element, phone-framed ─────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Scrollable content area (white bg to match spec)
  const content = document.createElement('div');
  content.style.cssText = 'flex:1;overflow-y:auto;display:flex;flex-direction:column;background:#ffffff;box-sizing:border-box;';

  // ── Header Row ──────────────────────────────────────────────────────────────
  const headerRow = document.createElement('div');
  headerRow.style.cssText = 'flex-shrink:0;height:44px;display:flex;align-items:center;padding:0 16px;gap:12px;box-sizing:border-box;';

  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;background:${tokens.colorGrey100};border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;transition:background-color 100ms ease;`;
  backBtn.innerHTML = '<span style="font-size:18px;color:#0f0f0f;line-height:1;">&#8592;</span>';
  backBtn.addEventListener('pointerdown', () => { backBtn.style.backgroundColor = tokens.colorGrey200; });
  backBtn.addEventListener('pointerup', () => { backBtn.style.backgroundColor = tokens.colorGrey100; });
  backBtn.addEventListener('pointerleave', () => { backBtn.style.backgroundColor = tokens.colorGrey100; });

  const pageTitle = document.createElement('span');
  pageTitle.style.cssText = `font-family:Manjari,sans-serif;font-size:20px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1;`;
  pageTitle.textContent = 'Edit Profile';

  headerRow.appendChild(backBtn);
  headerRow.appendChild(pageTitle);

  // ── Avatar Section ──────────────────────────────────────────────────────────
  const avatarSection = document.createElement('div');
  avatarSection.style.cssText = 'padding:24px 20px;display:flex;flex-direction:column;align-items:center;gap:12px;';

  const avatarWrap = document.createElement('div');
  avatarWrap.style.cssText = 'position:relative;width:88px;height:88px;display:flex;align-items:center;justify-content:center;';

  const avatarCircle = document.createElement('div');
  avatarCircle.style.cssText = `width:76px;height:76px;background:${tokens.colorSurfaceInverse};border-radius:50%;display:flex;align-items:center;justify-content:center;`;
  avatarCircle.innerHTML = '<span style="font-size:34px;color:#ffffff;line-height:1;">&#128100;</span>';

  const cameraBtn = document.createElement('div');
  cameraBtn.style.cssText = `position:absolute;bottom:0;right:0;width:28px;height:28px;background:${tokens.colorActionPrimary};border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform 100ms ease;`;
  cameraBtn.innerHTML = '<span style="font-size:13px;line-height:1;">&#128247;</span>';
  cameraBtn.addEventListener('pointerdown', () => { cameraBtn.style.transform = 'scale(0.90)'; });
  cameraBtn.addEventListener('pointerup', () => { cameraBtn.style.transform = 'scale(1)'; });
  cameraBtn.addEventListener('pointerleave', () => { cameraBtn.style.transform = 'scale(1)'; });

  avatarWrap.appendChild(avatarCircle);
  avatarWrap.appendChild(cameraBtn);

  const changePhotoText = document.createElement('span');
  changePhotoText.style.cssText = `font-family:Inter,sans-serif;font-size:11px;font-weight:500;color:${tokens.colorTextAccent};cursor:pointer;`;
  changePhotoText.textContent = 'Change photo';

  avatarSection.appendChild(avatarWrap);
  avatarSection.appendChild(changePhotoText);

  // ── Form Section ────────────────────────────────────────────────────────────
  const formSection = document.createElement('div');
  formSection.style.cssText = 'padding:0 16px;display:flex;flex-direction:column;gap:16px;box-sizing:border-box;';

  // Helper: create a form field with optional VerifiedChip and hidden input
  function makeField(labelText, iconHtml, valueText, inputType, hasVerifiedChip) {
    const fieldWrap = document.createElement('div');

    // Label Row
    const labelRow = document.createElement('div');
    labelRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;';

    const label = document.createElement('span');
    label.style.cssText = `font-family:Inter,sans-serif;font-size:11px;font-weight:500;color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;`;
    label.textContent = labelText;
    labelRow.appendChild(label);

    if (hasVerifiedChip) {
      const chip = document.createElement('div');
      chip.style.cssText = `background:${tokens.colorGreen100};border-radius:${tokens.radiusFull}px;padding:2px 8px;display:inline-flex;align-items:center;`;
      chip.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:11px;font-weight:500;color:${tokens.colorTextAccent};">&#10003; Verified</span>`;
      labelRow.appendChild(chip);
    }

    // Input Row (visible styled container)
    const inputRow = document.createElement('div');
    inputRow.style.cssText = `position:relative;background:${tokens.colorGrey050};border-radius:${tokens.radiusMd}px;padding:12px 16px;border:1px solid ${tokens.colorGrey200};display:flex;align-items:center;gap:8px;cursor:text;box-sizing:border-box;`;

    const iconSpan = document.createElement('span');
    iconSpan.style.cssText = `font-size:16px;color:${tokens.colorGrey300};line-height:1;flex-shrink:0;`;
    iconSpan.innerHTML = iconHtml;

    const valueSpan = document.createElement('span');
    valueSpan.style.cssText = `font-family:Inter,sans-serif;font-size:15px;font-weight:400;color:${tokens.colorTextPrimary};flex:1;`;
    valueSpan.textContent = valueText;

    // Hidden native input for keyboard capture (opacity:0 overlay)
    const hiddenInput = document.createElement('input');
    hiddenInput.type = inputType || 'text';
    hiddenInput.value = valueText;
    hiddenInput.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:text;border:none;background:transparent;font-size:15px;padding:12px 16px 12px 44px;box-sizing:border-box;';

    // Focus / blur state changes on the visible inputRow border
    hiddenInput.addEventListener('focus', () => {
      inputRow.style.border = `1px solid ${tokens.colorSurfaceInverse}`;
    });
    hiddenInput.addEventListener('blur', () => {
      inputRow.style.border = `1px solid ${tokens.colorGrey200}`;
      // Sync visible value with typed value
      valueSpan.textContent = hiddenInput.value;
    });
    hiddenInput.addEventListener('input', () => {
      valueSpan.textContent = hiddenInput.value;
    });

    inputRow.appendChild(iconSpan);
    inputRow.appendChild(valueSpan);
    inputRow.appendChild(hiddenInput);

    fieldWrap.appendChild(labelRow);
    fieldWrap.appendChild(inputRow);
    return fieldWrap;
  }

  const nameField = makeField('Full Name', '&#128100;', 'Alex Johnson', 'text', false);
  const emailField = makeField('Email Address', '&#9993;', 'alex.johnson@email.com', 'email', true);
  const phoneField = makeField('Phone Number', '&#128241;', '+91 98XXXXXXXX', 'tel', true);

  formSection.appendChild(nameField);
  formSection.appendChild(emailField);
  formSection.appendChild(phoneField);

  // ── Spacer ──────────────────────────────────────────────────────────────────
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';

  // ── CTA Wrap ────────────────────────────────────────────────────────────────
  const ctaWrap = document.createElement('div');
  ctaWrap.style.cssText = 'padding:16px;padding-bottom:34px;box-sizing:border-box;';

  const saveBtn = document.createElement('button');
  saveBtn.style.cssText = `height:56px;width:100%;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;transition:transform 100ms ease,background-color 100ms ease;`;
  saveBtn.innerHTML = `<span style="font-size:16px;line-height:1;">&#10003;</span><span style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">Save Changes</span>`;
  saveBtn.addEventListener('pointerdown', () => {
    saveBtn.style.backgroundColor = tokens.colorGreen600;
    saveBtn.style.transform = 'scale(0.97)';
  });
  saveBtn.addEventListener('pointerup', () => {
    saveBtn.style.backgroundColor = tokens.colorActionPrimary;
    saveBtn.style.transform = 'scale(1)';
  });
  saveBtn.addEventListener('pointerleave', () => {
    saveBtn.style.backgroundColor = tokens.colorActionPrimary;
    saveBtn.style.transform = 'scale(1)';
  });

  ctaWrap.appendChild(saveBtn);

  // ── Assemble ────────────────────────────────────────────────────────────────
  content.appendChild(headerRow);
  content.appendChild(avatarSection);
  content.appendChild(formSection);
  content.appendChild(spacer);
  content.appendChild(ctaWrap);

  screen.appendChild(content);
  return frame;
};

// ── SourceCode export: React Native Paper JSX ────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_EDIT_PROFILE = `
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorActionPrimary  = '#c6ff2d'
// tokens.colorGreen600       = '#a8de1a'  (pressed)
// tokens.colorGreen100       = '#f4ffd9'  (VerifiedChip bg)
// tokens.colorGrey050        = '#fafafa'  (input field bg)
// tokens.colorGrey200        = '#ebebeb'  (input border rest)
// tokens.colorGrey300        = '#c9c9c9'  (field icon color)
// tokens.colorGrey500        = '#808080'  (label color)
// tokens.colorTextAccent     = '#7d9220'  (VerifiedChip text, "Change photo")
// tokens.colorSurfaceInverse = '#0f0f0f'  (avatar bg, focused border)
// tokens.radiusMd            = 16         (input border-radius)
// tokens.radiusFull          = 999        (button, chip border-radius)

const theme = createVoltVentureTheme();

function VerifiedChip() {
  return (
    <View style={styles.verifiedChip}>
      <Text style={styles.verifiedChipText}>&#10003; Verified</Text>
    </View>
  );
}

function FormField({ label, icon, value, onChangeText, keyboardType, hasVerifiedChip, isFocused, onFocus, onBlur }) {
  return (
    <View style={styles.fieldWrap}>
      <View style={styles.labelRow}>
        <Text style={styles.fieldLabel}>{label}</Text>
        {hasVerifiedChip && <VerifiedChip />}
      </View>
      <View style={[styles.inputRow, isFocused && styles.inputRowFocused]}>
        <Text style={styles.fieldIcon}>{icon}</Text>
        <TextInput
          style={styles.fieldInput}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType || 'default'}
          onFocus={onFocus}
          onBlur={onBlur}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
}

export default function EditProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState('Alex Johnson');
  const [email, setEmail] = useState('alex.johnson@email.com');
  const [phone, setPhone] = useState('+91 98XXXXXXXX');
  const [focusedField, setFocusedField] = useState(null);

  return (
    <Surface style={styles.screen}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>&#8592;</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Edit Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrap}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarIcon}>&#128100;</Text>
            </View>
            <TouchableOpacity style={styles.cameraBtn}>
              <Text style={styles.cameraIcon}>&#128247;</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.changePhotoText}>Change photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <FormField
            label="FULL NAME"
            icon="&#128100;"
            value={fullName}
            onChangeText={setFullName}
            keyboardType="default"
            hasVerifiedChip={false}
            isFocused={focusedField === 'name'}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
          />
          <FormField
            label="EMAIL ADDRESS"
            icon="&#9993;"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            hasVerifiedChip={true}
            isFocused={focusedField === 'email'}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
          <FormField
            label="PHONE NUMBER"
            icon="&#128241;"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            hasVerifiedChip={true}
            isFocused={focusedField === 'phone'}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
          />
        </View>
      </ScrollView>

      {/* Save Changes CTA */}
      <View style={styles.ctaWrap}>
        <Button
          mode="contained"
          buttonColor="#c6ff2d"
          textColor="#0f0f0f"
          style={styles.saveBtn}
          contentStyle={styles.saveBtnContent}
          onPress={() => navigation.goBack()}
        >
          &#10003;  Save Changes
        </Button>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  headerRow: { flexDirection: 'row', alignItems: 'center', height: 44, paddingHorizontal: 16, gap: 12 },
  backBtn: {
    width: 36, height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5', // tokens.colorGrey100
    alignItems: 'center', justifyContent: 'center',
  },
  backArrow: { fontSize: 18, color: '#0f0f0f' },
  pageTitle: { fontFamily: 'Manjari', fontSize: 20, fontWeight: '700', color: '#0f0f0f' },
  scrollContent: { flexGrow: 1, paddingBottom: 16 },
  avatarSection: { paddingVertical: 24, paddingHorizontal: 20, alignItems: 'center', gap: 12 },
  avatarWrap: { width: 88, height: 88, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  avatarCircle: {
    width: 76, height: 76,
    borderRadius: 38,
    backgroundColor: '#0f0f0f', // tokens.colorSurfaceInverse
    alignItems: 'center', justifyContent: 'center',
  },
  avatarIcon: { fontSize: 34, color: '#ffffff' },
  cameraBtn: {
    position: 'absolute', bottom: 0, right: 0,
    width: 28, height: 28,
    borderRadius: 14,
    backgroundColor: '#c6ff2d', // tokens.colorActionPrimary
    alignItems: 'center', justifyContent: 'center',
  },
  cameraIcon: { fontSize: 13 },
  changePhotoText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#7d9220' }, // tokens.colorTextAccent
  formSection: { paddingHorizontal: 16, gap: 16 },
  fieldWrap: { gap: 6 },
  labelRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  fieldLabel: {
    fontFamily: 'Inter', fontSize: 11, fontWeight: '500',
    color: '#808080', // tokens.colorGrey500
    textTransform: 'uppercase', letterSpacing: 0.5,
  },
  verifiedChip: {
    backgroundColor: '#f4ffd9', // tokens.colorGreen100
    borderRadius: 999, // tokens.radiusFull
    paddingVertical: 2, paddingHorizontal: 8,
  },
  verifiedChipText: { fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#7d9220' }, // tokens.colorTextAccent
  inputRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    backgroundColor: '#fafafa', // tokens.colorGrey050
    borderRadius: 16, // tokens.radiusMd
    paddingVertical: 12, paddingHorizontal: 16,
    borderWidth: 1, borderColor: '#ebebeb', // tokens.colorGrey200
  },
  inputRowFocused: { borderColor: '#0f0f0f' }, // tokens.colorSurfaceInverse
  fieldIcon: { fontSize: 16, color: '#c9c9c9' }, // tokens.colorGrey300
  fieldInput: {
    flex: 1, fontFamily: 'Inter', fontSize: 15, fontWeight: '400',
    color: '#0f0f0f', // tokens.colorTextPrimary
  },
  ctaWrap: { padding: 16, paddingBottom: 34 },
  saveBtn: { borderRadius: 999 }, // tokens.radiusFull
  saveBtnContent: { height: 56 },
});
`.trim();

export const SourceCode = () =>
  `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// EditProfile — React Native Paper</div>${_blk('EditProfileScreen.tsx', RN_EDIT_PROFILE)}</div>`;
