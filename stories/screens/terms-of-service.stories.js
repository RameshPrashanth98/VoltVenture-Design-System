import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/TermsOfService' };

// ── Helpers ───────────────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}

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

// ── Section data ──────────────────────────────────────────────────────────────
const TOS_SECTIONS = [
  {
    heading: '1. Acceptance of Terms',
    body: 'By accessing and using VoltVenture e-bike services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
  },
  {
    heading: '2. Eligibility & Rental Agreement',
    body: 'You must be 18 years or older to use VoltVenture. By creating an account, you confirm that you hold a valid driver\'s licence or cycling permit as required in your jurisdiction. Each ride constitutes a rental agreement governed by these terms.'
  },
  {
    heading: '3. Payment, Fees & Deposits',
    body: 'Rides are billed per minute at the applicable rate displayed before ride start. A refundable security deposit is held at the start of each ride and released within 24–72 hours of ride completion. All charges are processed via your selected payment method.'
  },
  {
    heading: '4. Rider Responsibilities & Safety',
    body: 'You agree to follow all applicable traffic laws, wear a helmet where required, and return bikes to authorised zones. You are responsible for any damage to the vehicle caused during your rental period.'
  },
  {
    heading: '5. Governing Law & Contact',
    body: 'These terms are governed by the laws of your jurisdiction. For questions or disputes, contact us at legal@voltventure.com or through the in-app Support section.'
  }
];

// ── Default export (static HTML string) ──────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    display:flex;
    flex-direction:column;
    background:${tokens.colorSurfaceBase};
    box-sizing:border-box;
    font-family:Inter,sans-serif;
  ">

    <!-- Status Bar (62px, light) -->
    <div style="
      flex-shrink:0;
      height:62px;
      background:${tokens.colorSurfaceBase};
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      box-sizing:border-box;
    ">
      <span style="font-size:15px;font-weight:600;color:${tokens.colorTextPrimary};">9:41</span>
      <span style="font-size:11px;color:${tokens.colorTextPrimary};">&#9646; WiFi &#9650;</span>
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
      <!-- Back Button -->
      <div style="
        width:36px;
        height:36px;
        border-radius:50%;
        background:${tokens.colorGrey100};
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
        font-family:'${tokens.typeHeadingMd.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:${tokens.typeHeadingMd.fontWeight};
        line-height:${tokens.typeHeadingMd.lineHeight}px;
        color:${tokens.colorTextPrimary};
      ">Terms of Service</span>
    </div>

    <!-- Meta Row -->
    <div style="
      flex-shrink:0;
      padding:4px 20px 12px;
      border-bottom:1px solid ${tokens.colorGrey100};
      box-sizing:border-box;
    ">
      <span style="
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
      ">Last updated: 1 January 2025</span>
    </div>

    <!-- Body Area (scrollable in Interactive, visible in Default) -->
    <div style="
      flex:1;
      overflow-y:auto;
      padding:20px;
      box-sizing:border-box;
    ">
      <!-- Section 1 -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:700;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-bottom:8px;
      ">1. Acceptance of Terms</div>
      <div style="
        font-size:13px;
        line-height:1.6;
        color:${tokens.colorGrey700};
        margin-bottom:24px;
      ">By accessing and using VoltVenture e-bike services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</div>

      <!-- Section 2 -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:700;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-bottom:8px;
      ">2. Eligibility &amp; Rental Agreement</div>
      <div style="
        font-size:13px;
        line-height:1.6;
        color:${tokens.colorGrey700};
        margin-bottom:24px;
      ">You must be 18 years or older to use VoltVenture. By creating an account, you confirm that you hold a valid driver's licence or cycling permit as required in your jurisdiction. Each ride constitutes a rental agreement governed by these terms.</div>

      <!-- Section 3 -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:700;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-bottom:8px;
      ">3. Payment, Fees &amp; Deposits</div>
      <div style="
        font-size:13px;
        line-height:1.6;
        color:${tokens.colorGrey700};
        margin-bottom:24px;
      ">Rides are billed per minute at the applicable rate displayed before ride start. A refundable security deposit is held at the start of each ride and released within 24–72 hours of ride completion. All charges are processed via your selected payment method.</div>

      <!-- Section 4 -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:700;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-bottom:8px;
      ">4. Rider Responsibilities &amp; Safety</div>
      <div style="
        font-size:13px;
        line-height:1.6;
        color:${tokens.colorGrey700};
        margin-bottom:24px;
      ">You agree to follow all applicable traffic laws, wear a helmet where required, and return bikes to authorised zones. You are responsible for any damage to the vehicle caused during your rental period.</div>

      <!-- Section 5 -->
      <div style="
        font-family:'${tokens.typeBodyMd.fontFamily}',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:700;
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin-bottom:8px;
      ">5. Governing Law &amp; Contact</div>
      <div style="
        font-size:13px;
        line-height:1.6;
        color:${tokens.colorGrey700};
        margin-bottom:24px;
      ">These terms are governed by the laws of your jurisdiction. For questions or disputes, contact us at legal@voltventure.com or through the in-app Support section.</div>

      <!-- Footer note -->
      <div style="
        margin-top:8px;
        padding-bottom:16px;
        font-family:'${tokens.typeLabelSm.fontFamily}',sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorTextSecondary};
        text-align:center;
      ">© 2025 VoltVenture. All rights reserved.</div>
    </div>

    <!-- Sticky Footer: I Agree button -->
    <div style="
      flex-shrink:0;
      padding:16px 20px;
      background:${tokens.colorSurfaceBase};
      border-top:1px solid ${tokens.colorGrey100};
      box-sizing:border-box;
    ">
      <button style="
        display:block;
        width:100%;
        height:56px;
        background:${tokens.colorActionPrimary};
        border:none;
        border-radius:${tokens.radiusFull}px;
        font-family:'${tokens.typeHeadingSm.fontFamily}',sans-serif;
        font-size:${tokens.typeHeadingSm.fontSize}px;
        font-weight:600;
        color:${tokens.colorTextPrimary};
        cursor:pointer;
        box-sizing:border-box;
      ">I Agree</button>
    </div>

  </div>
`;

// ── Interactive export (DOM element, phone-framed, scrollable body) ────────────
export const Interactive = () => {
  /* @storybook/html-vite — returns DOM element */
  const { frame, screen } = makePhoneFrame();

  // Inner content wrapper: height:100%, overflow:hidden at screen level — body scrolls
  const container = document.createElement('div');
  container.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow:hidden;background:#ffffff;font-family:Inter,sans-serif';

  // Header Row
  const headerRow = document.createElement('div');
  headerRow.style.cssText = 'flex-shrink:0;height:44px;display:flex;align-items:center;padding:0 16px;gap:12px;box-sizing:border-box;background:#ffffff';

  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;border-radius:50%;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0`;
  backBtn.innerHTML = `<span style="font-size:18px;color:${tokens.colorTextPrimary};line-height:1;">&#8592;</span>`;

  const title = document.createElement('span');
  title.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:${tokens.typeHeadingMd.fontWeight};line-height:${tokens.typeHeadingMd.lineHeight}px;color:${tokens.colorTextPrimary}`;
  title.textContent = 'Terms of Service';

  headerRow.appendChild(backBtn);
  headerRow.appendChild(title);

  // Meta Row
  const metaRow = document.createElement('div');
  metaRow.style.cssText = `flex-shrink:0;padding:4px 20px 12px;border-bottom:1px solid ${tokens.colorGrey100};box-sizing:border-box;background:#ffffff`;
  const metaText = document.createElement('span');
  metaText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary}`;
  metaText.textContent = 'Last updated: 1 January 2025';
  metaRow.appendChild(metaText);

  // Scrollable Body Area
  const bodyArea = document.createElement('div');
  bodyArea.style.cssText = 'flex:1;overflow-y:auto;padding:20px;box-sizing:border-box;background:#ffffff';

  TOS_SECTIONS.forEach(section => {
    const heading = document.createElement('div');
    heading.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:700;line-height:${tokens.typeBodyMd.lineHeight}px;color:${tokens.colorTextPrimary};margin-bottom:8px`;
    heading.textContent = section.heading;

    const body = document.createElement('div');
    body.style.cssText = `font-family:Inter,sans-serif;font-size:13px;line-height:1.6;color:${tokens.colorGrey700};margin-bottom:24px`;
    body.textContent = section.body;

    bodyArea.appendChild(heading);
    bodyArea.appendChild(body);
  });

  // Footer note inside body
  const footerNote = document.createElement('div');
  footerNote.style.cssText = `margin-top:8px;padding-bottom:16px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};text-align:center`;
  footerNote.textContent = '© 2025 VoltVenture. All rights reserved.';
  bodyArea.appendChild(footerNote);

  // Sticky Footer with I Agree button
  const stickyFooter = document.createElement('div');
  stickyFooter.style.cssText = `flex-shrink:0;padding:16px 20px;background:${tokens.colorSurfaceBase};border-top:1px solid ${tokens.colorGrey100};box-sizing:border-box`;

  const agreeBtn = document.createElement('button');
  agreeBtn.style.cssText = `display:block;width:100%;height:56px;background:${tokens.colorActionPrimary};border:none;border-radius:${tokens.radiusFull}px;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;box-sizing:border-box;transition:transform 100ms ease,background-color 100ms ease`;
  agreeBtn.textContent = 'I Agree';
  agreeBtn.addEventListener('pointerdown', () => {
    agreeBtn.style.backgroundColor = tokens.colorGreen600;
    agreeBtn.style.transform = 'scale(0.97)';
  });
  agreeBtn.addEventListener('pointerup', () => {
    agreeBtn.style.backgroundColor = tokens.colorActionPrimary;
    agreeBtn.style.transform = 'scale(1)';
  });
  agreeBtn.addEventListener('pointerleave', () => {
    agreeBtn.style.backgroundColor = tokens.colorActionPrimary;
    agreeBtn.style.transform = 'scale(1)';
  });

  stickyFooter.appendChild(agreeBtn);

  container.appendChild(headerRow);
  container.appendChild(metaRow);
  container.appendChild(bodyArea);
  container.appendChild(stickyFooter);

  screen.appendChild(container);
  return frame;
};

// ── Source Code export (RN Paper JSX) ────────────────────────────────────────
const RN_SOURCE = `// TermsOfService — React Native Paper
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { VoltVentureTokens as t } from './lib/voltventure_tokens';

export function TermsOfServiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Button
          mode="text"
          onPress={() => navigation.goBack()}
          icon="arrow-left"
          textColor={t.colorTextPrimary}
          style={styles.backBtn}
        />
        <Text variant="headlineMedium" style={styles.title}>
          Terms of Service
        </Text>
      </View>

      {/* Meta */}
      <View style={styles.metaRow}>
        <Text variant="labelSmall" style={styles.metaText}>
          Last updated: 1 January 2025
        </Text>
      </View>

      {/* Scrollable Body */}
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        {[
          {
            heading: '1. Acceptance of Terms',
            body: 'By accessing and using VoltVenture e-bike services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
          },
          {
            heading: '2. Eligibility & Rental Agreement',
            body: "You must be 18 years or older to use VoltVenture. By creating an account, you confirm that you hold a valid driver's licence or cycling permit as required in your jurisdiction.",
          },
          {
            heading: '3. Payment, Fees & Deposits',
            body: 'Rides are billed per minute at the applicable rate displayed before ride start. A refundable security deposit is held and released within 24–72 hours.',
          },
          {
            heading: '4. Rider Responsibilities & Safety',
            body: 'You agree to follow all applicable traffic laws, wear a helmet where required, and return bikes to authorised zones.',
          },
          {
            heading: '5. Governing Law & Contact',
            body: 'These terms are governed by the laws of your jurisdiction. Contact us at legal@voltventure.com.',
          },
        ].map((section, i) => (
          <View key={i} style={styles.section}>
            <Text variant="bodyMedium" style={styles.sectionHeading}>
              {section.heading}
            </Text>
            <Text variant="bodySmall" style={styles.sectionBody}>
              {section.body}
            </Text>
          </View>
        ))}

        <Text variant="labelSmall" style={styles.copyright}>
          © 2025 VoltVenture. All rights reserved.
        </Text>
      </ScrollView>

      {/* Sticky Footer */}
      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          style={styles.agreeBtn}
          contentStyle={styles.agreeBtnContent}
          buttonColor={t.colorActionPrimary}
          textColor={t.colorTextPrimary}
        >
          I Agree
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:       { flex: 1, backgroundColor: t.colorSurfaceBase },
  header:          { height: 44, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  backBtn:         { width: 36, height: 36 },
  title:           { color: t.colorTextPrimary, fontWeight: '700' },
  metaRow:         { paddingHorizontal: 20, paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: t.colorGrey100 },
  metaText:        { color: t.colorTextSecondary },
  body:            { flex: 1 },
  bodyContent:     { padding: 20 },
  section:         { marginBottom: 24 },
  sectionHeading:  { fontWeight: '700', color: t.colorTextPrimary, marginBottom: 8 },
  sectionBody:     { fontSize: 13, lineHeight: 20, color: t.colorGrey700 },
  copyright:       { color: t.colorTextSecondary, textAlign: 'center', marginTop: 8, paddingBottom: 16 },
  footer:          { padding: 16, backgroundColor: t.colorSurfaceBase, borderTopWidth: 1, borderTopColor: t.colorGrey100 },
  agreeBtn:        { borderRadius: 999 },
  agreeBtnContent: { height: 56 },
});`;

export const SourceCode = () => {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'padding:24px;background:#0f0f0f;min-height:400px';
  const heading = document.createElement('div');
  heading.style.cssText = "margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d";
  heading.textContent = '// TermsOfService — HTML Source';
  wrap.appendChild(heading);
  wrap.innerHTML += _blk('Default', Default());
  return wrap;
};
