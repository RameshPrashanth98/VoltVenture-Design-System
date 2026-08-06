import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/AddPaymentMethod' };

// ── Phone frame helper (402×874px, Volt Black bezel, 44px radius) ─────────────
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

// ── HTML helpers ────────────────────────────────────────────────────────────────
function _esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function _blk(label,html){return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(html)}</pre></div>`;}

// ── Default export (static HTML) ────────────────────────────────────────────────
export const Default = () => `
<div style="
  width:393px;
  min-height:852px;
  background:${tokens.colorSurfaceBase};
  font-family:Inter,sans-serif;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
">
  <!-- Status Bar -->
  <div style="height:62px;background:#0f0f0f;display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-sizing:border-box;">
    <span style="font-size:15px;font-weight:600;color:#ffffff;">9:41</span>
    <span style="font-size:11px;color:#ffffff;">&#9646; WiFi &#9650;</span>
  </div>

  <!-- Header Row -->
  <div style="height:44px;display:flex;align-items:center;padding:0 16px;gap:12px;box-sizing:border-box;">
    <div style="width:36px;height:36px;border-radius:50%;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">&#8592;</div>
    <div style="font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};">Add Payment</div>
  </div>

  <!-- Subtitle -->
  <div style="padding:4px 16px 16px;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};">Choose how to pay for this ride.</div>

  <!-- Ride Summary Card -->
  <div style="margin:0 16px 16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:16px;display:flex;align-items:center;gap:12px;box-sizing:border-box;">
    <div style="width:40px;height:40px;background:rgba(198,255,45,0.13);border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">&#9889;</div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:${tokens.typeBodyMd.fontSize}px;color:#ffffff;font-weight:500;">VoltVenture Ride</div>
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:2px;">Electric e-bike</div>
    </div>
    <div style="text-align:right;flex-shrink:0;">
      <div style="font-size:${tokens.typeBodyMd.fontSize}px;color:#ffffff;font-weight:500;">&#8377; 2.50/min</div>
      <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:2px;">+ &#8377; 200 deposit</div>
    </div>
  </div>

  <!-- Options Label -->
  <div style="padding:0 16px 8px;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;">Payment Method</div>

  <!-- Options List -->
  <div style="margin:0 16px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};box-sizing:border-box;">
    <!-- Row A — Apple Pay (unselected) -->
    <div style="display:flex;align-items:center;padding:12px 16px;gap:12px;background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:16px;color:#ffffff;">&#63743;</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};">Apple Pay</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:2px;">Touch ID</div>
      </div>
      <div style="width:24px;height:24px;border-radius:50%;background:#ffffff;border:2px solid ${tokens.colorGrey200};box-sizing:border-box;flex-shrink:0;"></div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 16px;"></div>
    <!-- Row B — Google Wallet (unselected) -->
    <div style="display:flex;align-items:center;padding:12px 16px;gap:12px;background:${tokens.colorSurfaceBase};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:16px;font-weight:700;color:${tokens.colorTextPrimary};">G</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};">Google Wallet</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:2px;">Pay with Google</div>
      </div>
      <div style="width:24px;height:24px;border-radius:50%;background:#ffffff;border:2px solid ${tokens.colorGrey200};box-sizing:border-box;flex-shrink:0;"></div>
    </div>
    <!-- Divider -->
    <div style="height:1px;background:${tokens.colorGrey100};margin:0 16px;"></div>
    <!-- Row C — Credit/Debit Card (PRE-SELECTED) -->
    <div style="display:flex;align-items:center;padding:12px 16px;gap:12px;background:${tokens.colorGreen100};min-height:56px;box-sizing:border-box;">
      <div style="width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:#ffffff;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:20px;">&#x1F4B3;</span>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};">Credit / Debit Card</div>
        <div style="font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:2px;">Add new card</div>
      </div>
      <div style="width:24px;height:24px;border-radius:50%;background:${tokens.colorActionPrimary};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:700;">&#10003;</span>
      </div>
    </div>
  </div>

  <!-- Trust Row -->
  <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;">
    <span style="font-size:14px;color:${tokens.colorGrey300};">&#128274;</span>
    <span style="font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Secured by Stripe</span>
  </div>

  <!-- Spacer -->
  <div style="flex:1;"></div>

  <!-- Confirm CTA -->
  <div style="padding:16px;box-sizing:border-box;">
    <button style="
      width:100%;height:56px;background:${tokens.colorActionPrimary};
      border-radius:${tokens.radiusFull}px;border:none;
      font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;
      font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;
      box-sizing:border-box;
    ">&#9658; Confirm Start Ride</button>
  </div>
</div>
`;

// ── Interactive export (DOM element, phone-framed) ──────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  const content = document.createElement('div');
  content.style.cssText = 'flex:1;display:flex;flex-direction:column;overflow-y:auto;background:#ffffff;';

  // Header Row
  const header = document.createElement('div');
  header.style.cssText = `height:44px;display:flex;align-items:center;padding:0 16px;gap:12px;box-sizing:border-box;flex-shrink:0;`;
  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;border-radius:50%;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;cursor:pointer;`;
  backBtn.innerHTML = '&#8592;';
  const titleEl = document.createElement('div');
  titleEl.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};`;
  titleEl.textContent = 'Add Payment';
  header.appendChild(backBtn);
  header.appendChild(titleEl);
  content.appendChild(header);

  // Subtitle
  const subtitle = document.createElement('div');
  subtitle.style.cssText = `padding:4px 16px 16px;font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextSecondary};flex-shrink:0;`;
  subtitle.textContent = 'Choose how to pay for this ride.';
  content.appendChild(subtitle);

  // Ride Summary Card
  const summaryCard = document.createElement('div');
  summaryCard.style.cssText = `margin:0 16px 16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:16px;display:flex;align-items:center;gap:12px;box-sizing:border-box;flex-shrink:0;`;
  const bikeChip = document.createElement('div');
  bikeChip.style.cssText = `width:40px;height:40px;background:rgba(198,255,45,0.13);border-radius:${tokens.radiusMd}px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;`;
  bikeChip.innerHTML = '&#9889;';
  const rideTextCol = document.createElement('div');
  rideTextCol.style.cssText = 'flex:1;min-width:0;';
  rideTextCol.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:#ffffff;font-weight:500;">VoltVenture Ride</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:2px;">Electric e-bike</div>`;
  const rateCol = document.createElement('div');
  rateCol.style.cssText = 'text-align:right;flex-shrink:0;';
  rateCol.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:#ffffff;font-weight:500;">&#8377; 2.50/min</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorGrey500};margin-top:2px;">+ &#8377; 200 deposit</div>`;
  summaryCard.appendChild(bikeChip);
  summaryCard.appendChild(rideTextCol);
  summaryCard.appendChild(rateCol);
  content.appendChild(summaryCard);

  // Options Label
  const optLabel = document.createElement('div');
  optLabel.style.cssText = `padding:0 16px 8px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0;`;
  optLabel.textContent = 'Payment Method';
  content.appendChild(optLabel);

  // Options List container
  const optList = document.createElement('div');
  optList.style.cssText = `margin:0 16px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;border:1px solid ${tokens.colorGrey100};box-sizing:border-box;flex-shrink:0;`;

  const payRows = [
    { icon: '&#63743;', iconBg: tokens.colorSurfaceInverse, iconColor: '#ffffff', title: 'Apple Pay', sub: 'Touch ID', selected: false },
    { icon: 'G', iconBg: tokens.colorGrey100, iconColor: tokens.colorTextPrimary, title: 'Google Wallet', sub: 'Pay with Google', selected: false },
    { icon: '&#x1F4B3;', iconBg: '#ffffff', iconColor: '', title: 'Credit / Debit Card', sub: 'Add new card', selected: true },
  ];

  const rowEls = [];

  function applyRowState(el, isSelected) {
    el.style.background = isSelected ? tokens.colorGreen100 : tokens.colorSurfaceBase;
    el._chip.style.background = isSelected ? (el._chipSelectedBg) : el._chipDefaultBg;
    el._radio.style.background = isSelected ? tokens.colorActionPrimary : '#ffffff';
    el._radio.style.border = isSelected ? 'none' : '2px solid ' + tokens.colorGrey200;
    el._radio.innerHTML = isSelected
      ? `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:700;">&#10003;</span>`
      : '';
  }

  payRows.forEach((data, idx) => {
    if (idx > 0) {
      const divider = document.createElement('div');
      divider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin:0 16px;`;
      optList.appendChild(divider);
    }

    const row = document.createElement('div');
    row.style.cssText = `display:flex;align-items:center;padding:12px 16px;gap:12px;min-height:56px;box-sizing:border-box;cursor:pointer;background:${data.selected ? tokens.colorGreen100 : tokens.colorSurfaceBase};`;

    const chip = document.createElement('div');
    chip.style.cssText = `width:40px;height:40px;border-radius:${tokens.radiusMd}px;background:${data.iconBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
    if (data.iconColor) {
      chip.innerHTML = `<span style="font-size:${data.icon.length > 3 ? '20' : '16'}px;color:${data.iconColor};font-weight:700;">${data.icon}</span>`;
    } else {
      chip.innerHTML = `<span style="font-size:20px;">${data.icon}</span>`;
    }

    const textCol = document.createElement('div');
    textCol.style.cssText = 'flex:1;min-width:0;';
    textCol.innerHTML = `<div style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};">${data.title}</div><div style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;color:${tokens.colorTextSecondary};margin-top:2px;">${data.sub}</div>`;

    const radio = document.createElement('div');
    radio.style.cssText = `width:24px;height:24px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box;background:${data.selected ? tokens.colorActionPrimary : '#ffffff'};${data.selected ? '' : 'border:2px solid ' + tokens.colorGrey200 + ';'}`;
    if (data.selected) {
      radio.innerHTML = `<span style="font-size:12px;color:${tokens.colorTextPrimary};font-weight:700;">&#10003;</span>`;
    }

    row._chip = chip;
    row._radio = radio;
    row._chipDefaultBg = data.iconBg;
    row._chipSelectedBg = data.selected ? data.iconBg : '#ffffff';

    row.appendChild(chip);
    row.appendChild(textCol);
    row.appendChild(radio);
    optList.appendChild(row);
    rowEls.push(row);

    row.addEventListener('pointerdown', () => {
      rowEls.forEach((r, i) => applyRowState(r, i === idx));
    });
  });

  content.appendChild(optList);

  // Trust Row
  const trustRow = document.createElement('div');
  trustRow.style.cssText = 'display:flex;align-items:center;gap:8px;padding:12px 16px;flex-shrink:0;';
  trustRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:14px;color:${tokens.colorGrey300};">&#128274;</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Secured by Stripe</span>`;
  content.appendChild(trustRow);

  // Spacer
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;';
  content.appendChild(spacer);

  // Confirm CTA
  const ctaWrapper = document.createElement('div');
  ctaWrapper.style.cssText = 'padding:16px;box-sizing:border-box;flex-shrink:0;';
  const confirmBtn = document.createElement('button');
  confirmBtn.style.cssText = `width:100%;height:56px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;font-family:Inter,sans-serif;font-size:${tokens.typeHeadingSm.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};cursor:pointer;box-sizing:border-box;transition:background 120ms ease,transform 100ms ease;`;
  confirmBtn.innerHTML = '&#9658; Confirm Start Ride';
  confirmBtn.addEventListener('pointerdown', () => {
    confirmBtn.style.background = tokens.colorGreen600;
    confirmBtn.style.transform = 'scale(0.97)';
  });
  confirmBtn.addEventListener('pointerup', () => {
    confirmBtn.style.background = tokens.colorActionPrimary;
    confirmBtn.style.transform = 'scale(1)';
  });
  confirmBtn.addEventListener('pointerleave', () => {
    confirmBtn.style.background = tokens.colorActionPrimary;
    confirmBtn.style.transform = 'scale(1)';
  });
  ctaWrapper.appendChild(confirmBtn);
  content.appendChild(ctaWrapper);

  screen.appendChild(content);
  return frame;
};

// ── SourceCode export ──────────────────────────────────────────────────────────
const _rnJSX = `
// AddPaymentMethod — React Native Paper
import { Surface, Button, Text } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { createVoltVentureTheme } from 'voltventure-design-system';

const theme = createVoltVentureTheme();

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF', // colorSurfaceBase
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 16,
    gap: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5', // colorGrey100
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Manjari',
    fontSize: 20, // typeHeadingMd
    fontWeight: '700',
    color: '#0F0F0F', // colorTextPrimary
  },
  subtitle: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 16,
    fontFamily: 'Inter',
    fontSize: 15, // typeBodyMd
    color: '#808080', // colorTextSecondary
  },
  summaryCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#0F0F0F', // colorSurfaceInverse
    borderRadius: 20, // radiusLg
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bikeChip: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(198,255,45,0.13)',
    borderRadius: 16, // radiusMd
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsList: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20, // radiusLg
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F5F5F5', // colorGrey100
  },
  optRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    minHeight: 56,
  },
  optRowSelected: {
    backgroundColor: '#F4FFD9', // colorGreen100
  },
  radioSelected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#C6FF2D', // colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioUnselected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#EBEBEB', // colorGrey200
  },
  cta: {
    marginHorizontal: 16,
    marginBottom: 16,
    height: 56,
    borderRadius: 999, // radiusFull
    backgroundColor: '#C6FF2D', // colorActionPrimary
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaLabel: {
    fontFamily: 'Inter',
    fontSize: 15, // typeHeadingSm
    fontWeight: '600',
    color: '#0F0F0F', // colorTextPrimary
  },
});

export function AddPaymentMethodScreen({ onConfirm }) {
  const [selected, setSelected] = React.useState('credit');
  const paymentOptions = [
    { id: 'apple', label: 'Apple Pay', sub: 'Touch ID' },
    { id: 'google', label: 'Google Wallet', sub: 'Pay with Google' },
    { id: 'credit', label: 'Credit / Debit Card', sub: 'Add new card' },
  ];
  return (
    <Surface style={styles.screen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Text>&#8592;</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Add Payment</Text>
        </View>
        <Text style={styles.subtitle}>Choose how to pay for this ride.</Text>
        <View style={styles.summaryCard}>
          <View style={styles.bikeChip}><Text style={{ fontSize: 20 }}>&#9889;</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: 15 }}>VoltVenture Ride</Text>
            <Text style={{ color: '#808080', fontFamily: 'Inter', fontSize: 11, marginTop: 2 }}>Electric e-bike</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: '#FFFFFF', fontFamily: 'Inter', fontSize: 15 }}>&#8377; 2.50/min</Text>
            <Text style={{ color: '#808080', fontFamily: 'Inter', fontSize: 11, marginTop: 2 }}>+ &#8377; 200 deposit</Text>
          </View>
        </View>
        <View style={styles.optionsList}>
          {paymentOptions.map((opt, i) => (
            <TouchableOpacity
              key={opt.id}
              style={[styles.optRow, selected === opt.id && styles.optRowSelected]}
              onPress={() => setSelected(opt.id)}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'Inter', fontSize: 15, fontWeight: '600', color: '#0F0F0F' }}>{opt.label}</Text>
                <Text style={{ fontFamily: 'Inter', fontSize: 11, color: '#808080', marginTop: 2 }}>{opt.sub}</Text>
              </View>
              {selected === opt.id
                ? <View style={styles.radioSelected}><Text style={{ fontSize: 12, fontWeight: '700', color: '#0F0F0F' }}>&#10003;</Text></View>
                : <View style={styles.radioUnselected} />}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.cta} onPress={onConfirm}>
          <Text style={styles.ctaLabel}>&#9658; Confirm Start Ride</Text>
        </TouchableOpacity>
      </ScrollView>
    </Surface>
  );
}
`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// AddPaymentMethod — React Native Paper</div>${_blk('AddPaymentMethodScreen',_rnJSX)}</div>`;
