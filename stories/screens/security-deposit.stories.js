import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/SecurityDeposit' };

// ── Default (static HTML) ───────────────────────────────────────────────────

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

    <!-- Header Row (44px) -->
    <div style="
      height:44px;
      display:flex;
      align-items:center;
      padding:0 16px;
      gap:12px;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Back Button 36x36px -->
      <div style="
        width:36px;
        height:36px;
        border-radius:50%;
        background:${tokens.colorGrey100};
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
        cursor:pointer;
      ">
        <span style="font-size:16px;color:${tokens.colorTextPrimary};font-weight:600;">&#8249;</span>
      </div>
      <!-- Screen Title -->
      <span style="
        font-family:Manjari,sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:700;
        color:${tokens.colorTextPrimary};
        line-height:1.2;
      ">Security Deposit</span>
    </div>

    <!-- Subtitle Row -->
    <div style="
      padding:4px 16px 16px;
      font-family:Inter,sans-serif;
      font-size:${tokens.typeBodyMd.fontSize}px;
      font-weight:${tokens.typeBodyMd.fontWeight};
      color:${tokens.colorTextSecondary};
      flex-shrink:0;
      box-sizing:border-box;
    ">Your deposit will be released after verification.</div>

    <!-- Deposit Status Banner (dark card) -->
    <div style="
      margin:0 16px 16px;
      background:${tokens.colorSurfaceInverse};
      border-radius:${tokens.radiusLg}px;
      padding:20px;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Banner Top Row -->
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGrey500};
        ">Deposit Amount</span>
        <!-- Status Chip -->
        <span style="
          background:${tokens.colorGrey700};
          color:#ffffff;
          border-radius:${tokens.radiusFull}px;
          padding:4px 10px;
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
        ">Under Review</span>
      </div>

      <!-- Amount Row -->
      <div style="
        margin-top:8px;
        font-family:Manjari,sans-serif;
        font-size:32px;
        font-weight:700;
        color:#ffffff;
      ">&#8377; 200.00</div>

      <!-- Conversion Row -->
      <div style="
        margin-top:4px;
        font-family:Inter,sans-serif;
        font-size:${tokens.typeLabelSm.fontSize}px;
        font-weight:${tokens.typeLabelSm.fontWeight};
        color:${tokens.colorTextSecondary};
      ">&#8776; 80 VoltCoins value</div>

      <!-- Divider -->
      <div style="height:1px;background:rgba(255,255,255,0.13);margin:16px 0;"></div>

      <!-- Note Row -->
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:14px;color:${tokens.colorGrey500};">&#9432;</span>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeLabelSm.fontSize}px;
          font-weight:${tokens.typeLabelSm.fontWeight};
          color:${tokens.colorGrey500};
        ">Deposits typically release in 24&#8211;72 hours</span>
      </div>
    </div>

    <!-- Tracker Section Label -->
    <div style="
      padding:0 16px 8px;
      margin-top:8px;
      font-family:Inter,sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
      color:${tokens.colorGrey500};
      text-transform:uppercase;
      letter-spacing:0.5px;
      flex-shrink:0;
      box-sizing:border-box;
    ">Deposit Tracker</div>

    <!-- Tracker Card -->
    <div style="
      margin:0 16px 16px;
      background:${tokens.colorSurfaceBase};
      border-radius:${tokens.radiusLg}px;
      border:1px solid ${tokens.colorGrey100};
      padding:24px 20px;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Track Container (position:relative, margin for step circles + labels) -->
      <div style="position:relative;margin:16px 0 56px;">
        <!-- Track BG: 281x3px -->
        <div style="
          width:281px;
          height:3px;
          background:${tokens.colorGrey200};
          border-radius:4px;
          position:relative;
        ">
          <!-- Track Fill: 140x3px (Steps 1+2 complete, halfway to step 3) -->
          <div style="
            width:140px;
            height:3px;
            background:${tokens.colorActionPrimary};
            position:absolute;
            left:0;
            top:0;
            border-radius:4px;
          "></div>
        </div>

        <!-- Step Circle 0 — Ride Ended (completed, colorGreen100) -->
        <div style="
          position:absolute;
          left:0;
          top:-14px;
          width:32px;
          height:32px;
          border-radius:50%;
          background:${tokens.colorGreen100};
          display:flex;
          align-items:center;
          justify-content:center;
          box-sizing:border-box;
        ">
          <span style="font-size:14px;color:${tokens.colorTextAccent};font-weight:700;">&#10003;</span>
        </div>
        <div style="position:absolute;top:22px;left:0;width:60px;text-align:center;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};line-height:1.3;">Ride Ended</div>

        <!-- Step Circle 1 — Hold Confirmed (completed, colorGreen100, left≈78px) -->
        <div style="
          position:absolute;
          left:78px;
          top:-14px;
          width:32px;
          height:32px;
          border-radius:50%;
          background:${tokens.colorGreen100};
          display:flex;
          align-items:center;
          justify-content:center;
          box-sizing:border-box;
        ">
          <span style="font-size:14px;color:${tokens.colorTextAccent};font-weight:700;">&#10003;</span>
        </div>
        <div style="position:absolute;top:22px;left:62px;width:64px;text-align:center;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};line-height:1.3;">Hold Confirmed</div>

        <!-- Step Circle 2 — Verifying (active, white + colorActionPrimary border, left≈171px) -->
        <div style="
          position:absolute;
          left:171px;
          top:-14px;
          width:32px;
          height:32px;
          border-radius:50%;
          background:#ffffff;
          border:2px solid ${tokens.colorActionPrimary};
          display:flex;
          align-items:center;
          justify-content:center;
          box-sizing:border-box;
        ">
          <span style="font-size:10px;color:${tokens.colorTextPrimary};font-weight:700;">&#9679;</span>
        </div>
        <div style="position:absolute;top:22px;left:155px;width:60px;text-align:center;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextPrimary};line-height:1.3;">Verifying</div>

        <!-- Step Circle 3 — Released (pending, colorGrey100, left≈249px) -->
        <div style="
          position:absolute;
          left:249px;
          top:-14px;
          width:32px;
          height:32px;
          border-radius:50%;
          background:${tokens.colorGrey100};
          display:flex;
          align-items:center;
          justify-content:center;
          box-sizing:border-box;
        ">
          <span style="font-size:18px;color:${tokens.colorGrey300};font-weight:700;">&#183;</span>
        </div>
        <div style="position:absolute;top:22px;left:233px;width:64px;text-align:center;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey300};line-height:1.3;">Released</div>
      </div>
    </div>

    <!-- Info Section Label -->
    <div style="
      padding:0 16px 8px;
      margin-top:8px;
      font-family:Inter,sans-serif;
      font-size:${tokens.typeLabelSm.fontSize}px;
      font-weight:${tokens.typeLabelSm.fontWeight};
      color:${tokens.colorGrey500};
      flex-shrink:0;
      box-sizing:border-box;
    ">Deposit Info</div>

    <!-- Info Card -->
    <div style="
      margin:0 16px 16px;
      border-radius:${tokens.radiusLg}px;
      border:1px solid ${tokens.colorGrey100};
      padding:16px;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Credit Hold Row -->
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Credit Hold</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};">&#8377; 200.00</span>
      </div>
      <!-- Divider -->
      <div style="height:1px;background:${tokens.colorGrey100};margin:12px 0;"></div>
      <!-- Actual Charge Row -->
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Actual Charge</span>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextAccent};">&#8377; 18.20</span>
      </div>
    </div>

    <!-- Contact Support Row -->
    <div style="
      margin:0 16px;
      background:${tokens.colorGrey050};
      border-radius:${tokens.radiusLg}px;
      padding:16px;
      display:flex;
      align-items:center;
      gap:12px;
      cursor:pointer;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <!-- Support Icon Chip -->
      <div style="
        width:34px;
        height:34px;
        border-radius:50%;
        background:${tokens.colorGrey100};
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      ">
        <span style="font-size:16px;">&#127911;</span>
      </div>
      <!-- Text Col -->
      <div style="flex:1;display:flex;flex-direction:column;gap:2px;">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.typeBodyMd.fontSize}px;
          font-weight:500;
          color:${tokens.colorTextPrimary};
        ">Contact Support</span>
      </div>
      <!-- Chevron -->
      <span style="font-size:20px;color:${tokens.colorGrey300};font-weight:400;">&#8250;</span>
    </div>

    <!-- Spacer -->
    <div style="flex:1;min-height:16px;"></div>

    <!-- Tab Bar -->
    <div style="
      display:flex;
      align-items:center;
      height:60px;
      padding-bottom:8px;
      flex-shrink:0;
      box-sizing:border-box;
      border-top:1px solid ${tokens.colorGrey100};
    ">
      <!-- Ride Tab -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;">
        <div style="width:28px;height:28px;border-radius:${tokens.radiusFull}px;background:${tokens.colorGrey200};display:flex;align-items:center;justify-content:center;">
          <span style="font-size:14px;">&#9889;</span>
        </div>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Ride</span>
      </div>
      <!-- Discover Tab -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;">
        <div style="width:28px;height:28px;border-radius:${tokens.radiusFull}px;background:${tokens.colorGrey200};display:flex;align-items:center;justify-content:center;">
          <span style="font-size:14px;">&#128205;</span>
        </div>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Discover</span>
      </div>
      <!-- Wallet Tab (ACTIVE) -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;">
        <div style="width:28px;height:28px;border-radius:${tokens.radiusFull}px;background:${tokens.colorSurfaceInverse};display:flex;align-items:center;justify-content:center;">
          <span style="font-size:14px;filter:invert(1);">&#128179;</span>
        </div>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:600;color:${tokens.colorTextAccent};">Wallet</span>
      </div>
      <!-- Account Tab -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;">
        <div style="width:28px;height:28px;border-radius:${tokens.radiusFull}px;background:${tokens.colorGrey200};display:flex;align-items:center;justify-content:center;">
          <span style="font-size:14px;">&#128100;</span>
        </div>
        <span style="font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};">Account</span>
      </div>
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

// ── Interactive export ────────────────────────────────────────────────────────

export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Scroll container
  const scrollArea = document.createElement('div');
  scrollArea.style.cssText = 'flex:1;overflow-y:auto;display:flex;flex-direction:column;';

  // ── Header Row ──
  const headerRow = document.createElement('div');
  headerRow.style.cssText = 'height:44px;display:flex;align-items:center;padding:0 16px;gap:12px;flex-shrink:0;box-sizing:border-box;';

  const backBtn = document.createElement('div');
  backBtn.style.cssText = `width:36px;height:36px;border-radius:50%;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;`;
  backBtn.innerHTML = `<span style="font-size:16px;color:${tokens.colorTextPrimary};font-weight:600;">&#8249;</span>`;

  const screenTitle = document.createElement('span');
  screenTitle.style.cssText = `font-family:Manjari,sans-serif;font-size:${tokens.typeHeadingMd.fontSize}px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1.2;`;
  screenTitle.textContent = 'Security Deposit';

  headerRow.appendChild(backBtn);
  headerRow.appendChild(screenTitle);

  // ── Subtitle ──
  const subtitle = document.createElement('div');
  subtitle.style.cssText = `padding:4px 16px 16px;font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:${tokens.typeBodyMd.fontWeight};color:${tokens.colorTextSecondary};flex-shrink:0;box-sizing:border-box;`;
  subtitle.textContent = 'Your deposit will be released after verification.';

  // ── Deposit Status Banner ──
  const banner = document.createElement('div');
  banner.style.cssText = `margin:0 16px 16px;background:${tokens.colorSurfaceInverse};border-radius:${tokens.radiusLg}px;padding:20px;flex-shrink:0;box-sizing:border-box;`;

  // Banner top row
  const bannerTopRow = document.createElement('div');
  bannerTopRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;';

  const depositAmtLabel = document.createElement('span');
  depositAmtLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};`;
  depositAmtLabel.textContent = 'Deposit Amount';

  const statusChip = document.createElement('span');
  statusChip.style.cssText = `background:${tokens.colorGrey700};color:#ffffff;border-radius:${tokens.radiusFull}px;padding:4px 10px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};`;
  statusChip.textContent = 'Under Review';

  bannerTopRow.appendChild(depositAmtLabel);
  bannerTopRow.appendChild(statusChip);

  // Amount
  const amountRow = document.createElement('div');
  amountRow.style.cssText = 'margin-top:8px;font-family:Manjari,sans-serif;font-size:32px;font-weight:700;color:#ffffff;';
  amountRow.innerHTML = '&#8377; 200.00';

  // Conversion
  const conversionRow = document.createElement('div');
  conversionRow.style.cssText = `margin-top:4px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorTextSecondary};`;
  conversionRow.innerHTML = '&#8776; 80 VoltCoins value';

  // Divider
  const bannerDivider = document.createElement('div');
  bannerDivider.style.cssText = 'height:1px;background:rgba(255,255,255,0.13);margin:16px 0;';

  // Note Row
  const noteRow = document.createElement('div');
  noteRow.style.cssText = 'display:flex;align-items:center;gap:8px;';
  const noteIcon = document.createElement('span');
  noteIcon.style.cssText = `font-size:14px;color:${tokens.colorGrey500};`;
  noteIcon.innerHTML = '&#9432;';
  const noteText = document.createElement('span');
  noteText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};`;
  noteText.innerHTML = 'Deposits typically release in 24&#8211;72 hours';
  noteRow.appendChild(noteIcon);
  noteRow.appendChild(noteText);

  banner.appendChild(bannerTopRow);
  banner.appendChild(amountRow);
  banner.appendChild(conversionRow);
  banner.appendChild(bannerDivider);
  banner.appendChild(noteRow);

  // ── Tracker Section Label ──
  const trackerLabel = document.createElement('div');
  trackerLabel.style.cssText = `padding:0 16px 8px;margin-top:8px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0;box-sizing:border-box;`;
  trackerLabel.textContent = 'Deposit Tracker';

  // ── Tracker Card ──
  const trackerCard = document.createElement('div');
  trackerCard.style.cssText = `margin:0 16px 16px;background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:24px 20px;flex-shrink:0;box-sizing:border-box;`;

  // Track container
  const trackContainer = document.createElement('div');
  trackContainer.style.cssText = 'position:relative;margin:16px 0 56px;';

  // Track BG
  const trackBg = document.createElement('div');
  trackBg.style.cssText = `width:281px;height:3px;background:${tokens.colorGrey200};border-radius:4px;position:relative;`;

  // Track Fill (140px = halfway through 4 steps, steps 0+1 complete, step 2 active)
  const trackFill = document.createElement('div');
  trackFill.style.cssText = `width:140px;height:3px;background:${tokens.colorActionPrimary};position:absolute;left:0;top:0;border-radius:4px;`;
  trackBg.appendChild(trackFill);
  trackContainer.appendChild(trackBg);

  // Step definitions
  const steps = [
    { left: 0,   bg: tokens.colorGreen100,   border: 'none',                                     icon: '&#10003;', iconColor: tokens.colorTextAccent, label: 'Ride Ended',     labelColor: tokens.colorTextSecondary, labelLeft: 0 },
    { left: 78,  bg: tokens.colorGreen100,   border: 'none',                                     icon: '&#10003;', iconColor: tokens.colorTextAccent, label: 'Hold Confirmed', labelColor: tokens.colorTextSecondary, labelLeft: 62 },
    { left: 171, bg: '#ffffff',              border: `2px solid ${tokens.colorActionPrimary}`,    icon: '&#9679;',  iconColor: tokens.colorTextPrimary, label: 'Verifying',      labelColor: tokens.colorTextPrimary,   labelLeft: 155 },
    { left: 249, bg: tokens.colorGrey100,   border: 'none',                                     icon: '&#183;',   iconColor: tokens.colorGrey300,    label: 'Released',       labelColor: tokens.colorGrey300,       labelLeft: 233 },
  ];

  steps.forEach((step) => {
    // Circle
    const circle = document.createElement('div');
    circle.style.cssText = `position:absolute;left:${step.left}px;top:-14px;width:32px;height:32px;border-radius:50%;background:${step.bg};${step.border !== 'none' ? 'border:' + step.border + ';' : ''}display:flex;align-items:center;justify-content:center;box-sizing:border-box;`;
    const iconEl = document.createElement('span');
    iconEl.style.cssText = `font-size:${step.icon === '&#183;' ? 18 : (step.icon === '&#9679;' ? 10 : 14)}px;color:${step.iconColor};font-weight:700;`;
    iconEl.innerHTML = step.icon;
    circle.appendChild(iconEl);
    trackContainer.appendChild(circle);

    // Label
    const labelEl = document.createElement('div');
    labelEl.style.cssText = `position:absolute;top:22px;left:${step.labelLeft}px;width:${step.label === 'Hold Confirmed' || step.label === 'Released' ? 64 : 60}px;text-align:center;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${step.labelColor};line-height:1.3;`;
    labelEl.textContent = step.label;
    trackContainer.appendChild(labelEl);
  });

  trackerCard.appendChild(trackContainer);

  // ── Info Section Label ──
  const infoLabel = document.createElement('div');
  infoLabel.style.cssText = `padding:0 16px 8px;margin-top:8px;font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tokens.typeLabelSm.fontWeight};color:${tokens.colorGrey500};flex-shrink:0;box-sizing:border-box;`;
  infoLabel.textContent = 'Deposit Info';

  // ── Info Card ──
  const infoCard = document.createElement('div');
  infoCard.style.cssText = `margin:0 16px 16px;border-radius:${tokens.radiusLg}px;border:1px solid ${tokens.colorGrey100};padding:16px;flex-shrink:0;box-sizing:border-box;`;

  const creditHoldRow = document.createElement('div');
  creditHoldRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;';
  creditHoldRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Credit Hold</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextPrimary};">&#8377; 200.00</span>`;

  const infoDivider = document.createElement('div');
  infoDivider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin:12px 0;`;

  const actualChargeRow = document.createElement('div');
  actualChargeRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;';
  actualChargeRow.innerHTML = `<span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;color:${tokens.colorTextPrimary};">Actual Charge</span><span style="font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:600;color:${tokens.colorTextAccent};">&#8377; 18.20</span>`;

  infoCard.appendChild(creditHoldRow);
  infoCard.appendChild(infoDivider);
  infoCard.appendChild(actualChargeRow);

  // ── Contact Support Row (interactive — press feedback) ──
  const supportRow = document.createElement('div');
  supportRow.style.cssText = `margin:0 16px;background:${tokens.colorGrey050};border-radius:${tokens.radiusLg}px;padding:16px;display:flex;align-items:center;gap:12px;cursor:pointer;flex-shrink:0;box-sizing:border-box;transition:background-color 100ms ease;`;

  const supportIconChip = document.createElement('div');
  supportIconChip.style.cssText = `width:34px;height:34px;border-radius:50%;background:${tokens.colorGrey100};display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
  supportIconChip.innerHTML = '<span style="font-size:16px;">&#127911;</span>';

  const supportTextCol = document.createElement('div');
  supportTextCol.style.cssText = 'flex:1;display:flex;flex-direction:column;gap:2px;';
  const supportTitle = document.createElement('span');
  supportTitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeBodyMd.fontSize}px;font-weight:500;color:${tokens.colorTextPrimary};`;
  supportTitle.textContent = 'Contact Support';
  supportTextCol.appendChild(supportTitle);

  const supportChevron = document.createElement('span');
  supportChevron.style.cssText = `font-size:20px;color:${tokens.colorGrey300};`;
  supportChevron.innerHTML = '&#8250;';

  supportRow.appendChild(supportIconChip);
  supportRow.appendChild(supportTextCol);
  supportRow.appendChild(supportChevron);

  // Press feedback on Contact Support row
  supportRow.addEventListener('pointerdown', () => { supportRow.style.backgroundColor = tokens.colorGrey100; });
  supportRow.addEventListener('pointerup', () => { supportRow.style.backgroundColor = tokens.colorGrey050; });
  supportRow.addEventListener('pointerleave', () => { supportRow.style.backgroundColor = tokens.colorGrey050; });

  // ── Spacer ──
  const spacer = document.createElement('div');
  spacer.style.cssText = 'flex:1;min-height:16px;';

  // ── Tab Bar ──
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `display:flex;align-items:center;height:60px;padding-bottom:8px;flex-shrink:0;box-sizing:border-box;border-top:1px solid ${tokens.colorGrey100};`;

  const tabDefs = [
    { label: 'Ride',     icon: '&#9889;',  active: false },
    { label: 'Discover', icon: '&#128205;', active: false },
    { label: 'Wallet',   icon: '&#128179;', active: true  },
    { label: 'Account',  icon: '&#128100;', active: false },
  ];

  tabDefs.forEach((tab) => {
    const tabItem = document.createElement('div');
    tabItem.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;cursor:pointer;';

    const iconCircle = document.createElement('div');
    iconCircle.style.cssText = `width:28px;height:28px;border-radius:${tokens.radiusFull}px;background:${tab.active ? tokens.colorSurfaceInverse : tokens.colorGrey200};display:flex;align-items:center;justify-content:center;`;
    iconCircle.innerHTML = `<span style="font-size:14px;${tab.active ? 'filter:invert(1);' : ''}">${tab.icon}</span>`;

    const tabLabel = document.createElement('span');
    tabLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.typeLabelSm.fontSize}px;font-weight:${tab.active ? 600 : tokens.typeLabelSm.fontWeight};color:${tab.active ? tokens.colorTextAccent : tokens.colorTextSecondary};`;
    tabLabel.textContent = tab.label;

    tabItem.appendChild(iconCircle);
    tabItem.appendChild(tabLabel);
    tabBar.appendChild(tabItem);
  });

  // ── Assemble scroll area ──
  scrollArea.appendChild(headerRow);
  scrollArea.appendChild(subtitle);
  scrollArea.appendChild(banner);
  scrollArea.appendChild(trackerLabel);
  scrollArea.appendChild(trackerCard);
  scrollArea.appendChild(infoLabel);
  scrollArea.appendChild(infoCard);
  scrollArea.appendChild(supportRow);
  scrollArea.appendChild(spacer);
  scrollArea.appendChild(tabBar);

  screen.appendChild(scrollArea);
  return frame;
};

// ── Source code panel ─────────────────────────────────────────────────────────

function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:20px"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c6ff2d;letter-spacing:.5px">${label}</div><pre style="margin:0;padding:16px;background:#1a1a1a;border-radius:8px;overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_SECURITY_DEPOSIT_JSX = `// SecurityDeposit Screen — React Native Paper
import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// tokens.colorSurfaceBase      = '#FFFFFF'
// tokens.colorSurfaceInverse   = '#0F0F0F'
// tokens.colorActionPrimary    = '#C6FF2D'  — electric green
// tokens.colorGreen100         = '#F4FFD9'  — completed step circles
// tokens.colorGrey050          = '#FAFAFA'  — contact support row bg
// tokens.colorGrey100          = '#F5F5F5'  — pending step circle, dividers
// tokens.colorGrey200          = '#EBEBEB'  — track background
// tokens.colorGrey300          = '#C9C9C9'  — pending step icon + label
// tokens.colorGrey500          = '#808080'  — secondary labels
// tokens.colorGrey700          = '#4A4A4A'  — status chip bg
// tokens.colorTextPrimary      = '#0F0F0F'
// tokens.colorTextSecondary    = '#808080'
// tokens.colorTextAccent       = '#7D9220'  — completed step check, actual charge
// tokens.radiusLg              = 20
// tokens.radiusFull            = 999

const SecurityDepositScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backIcon}>\\u2039</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Security Deposit</Text>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your deposit will be released after verification.
      </Text>

      {/* Deposit Status Banner (dark) */}
      <View style={styles.banner}>
        <View style={styles.bannerTopRow}>
          <Text style={styles.depositAmtLabel}>Deposit Amount</Text>
          <View style={styles.statusChip}>
            <Text style={styles.statusChipText}>Under Review</Text>
          </View>
        </View>
        <Text style={styles.amountText}>\\u20B9 200.00</Text>
        <Text style={styles.conversionText}>\\u2248 80 VoltCoins value</Text>
        <View style={styles.bannerDivider} />
        <View style={styles.noteRow}>
          <Text style={styles.noteIcon}>\\u2139</Text>
          <Text style={styles.noteText}>
            Deposits typically release in 24\\u201372 hours
          </Text>
        </View>
      </View>

      {/* Tracker Section Label */}
      <Text style={styles.sectionLabel}>DEPOSIT TRACKER</Text>

      {/* Tracker Card */}
      <View style={styles.trackerCard}>
        <View style={styles.trackContainer}>
          {/* Track BG */}
          <View style={styles.trackBg}>
            {/* Track Fill — 140 of 281px = ~50% (steps 1+2 complete) */}
            <View style={styles.trackFill} />
          </View>

          {/* Step 0: Ride Ended (completed) */}
          <View style={[styles.stepCircle, { left: 0, backgroundColor: '#f4ffd9' }]}>
            <Text style={[styles.stepIcon, { color: '#7d9220' }]}>\\u2713</Text>
          </View>
          <Text style={[styles.stepLabel, { left: 0, color: '#808080' }]}>Ride Ended</Text>

          {/* Step 1: Hold Confirmed (completed) */}
          <View style={[styles.stepCircle, { left: 78, backgroundColor: '#f4ffd9' }]}>
            <Text style={[styles.stepIcon, { color: '#7d9220' }]}>\\u2713</Text>
          </View>
          <Text style={[styles.stepLabel, { left: 62, color: '#808080' }]}>Hold Confirmed</Text>

          {/* Step 2: Verifying (active) */}
          <View style={[styles.stepCircle, { left: 171, backgroundColor: '#ffffff', borderWidth: 2, borderColor: '#c6ff2d' }]}>
            <Text style={[styles.stepIcon, { color: '#0f0f0f', fontSize: 10 }]}>\\u25CF</Text>
          </View>
          <Text style={[styles.stepLabel, { left: 155, color: '#0f0f0f' }]}>Verifying</Text>

          {/* Step 3: Released (pending) */}
          <View style={[styles.stepCircle, { left: 249, backgroundColor: '#f5f5f5' }]}>
            <Text style={[styles.stepIcon, { color: '#c9c9c9', fontSize: 18 }]}>\\u00B7</Text>
          </View>
          <Text style={[styles.stepLabel, { left: 233, color: '#c9c9c9' }]}>Released</Text>
        </View>
      </View>

      {/* Info Section Label */}
      <Text style={styles.sectionLabel}>Deposit Info</Text>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowLabel}>Credit Hold</Text>
          <Text style={styles.infoRowValue}>\\u20B9 200.00</Text>
        </View>
        <View style={styles.infoDivider} />
        <View style={styles.infoRow}>
          <Text style={styles.infoRowLabel}>Actual Charge</Text>
          <Text style={[styles.infoRowValue, { color: '#7d9220' }]}>\\u20B9 18.20</Text>
        </View>
      </View>

      {/* Contact Support Row */}
      <TouchableOpacity style={styles.supportRow} activeOpacity={0.7}>
        <View style={styles.supportIconChip}>
          <Text style={{ fontSize: 16 }}>\\uD83C\\uDFA7</Text>
        </View>
        <Text style={styles.supportTitle}>Contact Support</Text>
        <Text style={styles.supportChevron}>\\u203A</Text>
      </TouchableOpacity>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {['Ride', 'Discover', 'Wallet', 'Account'].map((tab) => (
          <TouchableOpacity key={tab} style={styles.tabItem}>
            <View style={[styles.tabCircle, tab === 'Wallet' && styles.tabCircleActive]}>
              <Text style={{ fontSize: 14, ...(tab === 'Wallet' && { filter: 'invert(1)' }) }}>
                {tab === 'Ride' ? '\\u26A1' : tab === 'Discover' ? '\\uD83D\\uDCCD' : tab === 'Wallet' ? '\\uD83D\\uDCB3' : '\\uD83D\\uDC64'}
              </Text>
            </View>
            <Text style={[styles.tabLabel, tab === 'Wallet' && styles.tabLabelActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  headerRow: { height: 44, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 12 },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center' },
  backIcon: { fontSize: 16, color: '#0f0f0f', fontWeight: '600' },
  screenTitle: { fontSize: 20, fontWeight: '700', color: '#0f0f0f', fontFamily: 'Manjari' },
  subtitle: { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 4, fontSize: 15, color: '#808080', fontFamily: 'Inter' },
  banner: { marginHorizontal: 16, marginBottom: 16, backgroundColor: '#0f0f0f', borderRadius: 20, padding: 20 },
  bannerTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  depositAmtLabel: { fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  statusChip: { backgroundColor: '#4a4a4a', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  statusChipText: { fontSize: 11, fontWeight: '500', color: '#ffffff', fontFamily: 'Inter' },
  amountText: { fontSize: 32, fontWeight: '700', color: '#ffffff', marginTop: 8, fontFamily: 'Manjari' },
  conversionText: { fontSize: 11, fontWeight: '500', color: '#808080', marginTop: 4, fontFamily: 'Inter' },
  bannerDivider: { height: 1, backgroundColor: 'rgba(255,255,255,0.13)', marginVertical: 16 },
  noteRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  noteIcon: { fontSize: 14, color: '#808080' },
  noteText: { fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  sectionLabel: { paddingHorizontal: 16, paddingBottom: 8, marginTop: 8, fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 0.5 },
  trackerCard: { marginHorizontal: 16, marginBottom: 16, backgroundColor: '#ffffff', borderRadius: 20, borderWidth: 1, borderColor: '#f5f5f5', padding: 20 },
  trackContainer: { position: 'relative', marginTop: 16, marginBottom: 56, height: 3 },
  trackBg: { width: 281, height: 3, backgroundColor: '#ebebeb', borderRadius: 4 },
  trackFill: { width: 140, height: 3, backgroundColor: '#c6ff2d', position: 'absolute', left: 0, top: 0, borderRadius: 4 },
  stepCircle: { position: 'absolute', top: -14, width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  stepIcon: { fontSize: 14, fontWeight: '700' },
  stepLabel: { position: 'absolute', top: 22, width: 60, textAlign: 'center', fontSize: 11, fontWeight: '500', fontFamily: 'Inter', lineHeight: 14 },
  infoCard: { marginHorizontal: 16, marginBottom: 16, borderRadius: 20, borderWidth: 1, borderColor: '#f5f5f5', padding: 16 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  infoRowLabel: { fontSize: 15, color: '#0f0f0f', fontFamily: 'Inter' },
  infoRowValue: { fontSize: 15, fontWeight: '600', color: '#0f0f0f', fontFamily: 'Inter' },
  infoDivider: { height: 1, backgroundColor: '#f5f5f5', marginVertical: 12 },
  supportRow: { marginHorizontal: 16, backgroundColor: '#fafafa', borderRadius: 20, padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
  supportIconChip: { width: 34, height: 34, borderRadius: 17, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center' },
  supportTitle: { flex: 1, fontSize: 15, fontWeight: '500', color: '#0f0f0f', fontFamily: 'Inter' },
  supportChevron: { fontSize: 20, color: '#c9c9c9' },
  tabBar: { flexDirection: 'row', alignItems: 'center', height: 60, paddingBottom: 8, borderTopWidth: 1, borderTopColor: '#f5f5f5', marginTop: 'auto' },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4 },
  tabCircle: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#ebebeb', alignItems: 'center', justifyContent: 'center' },
  tabCircleActive: { backgroundColor: '#0f0f0f' },
  tabLabel: { fontSize: 11, fontWeight: '500', color: '#808080', fontFamily: 'Inter' },
  tabLabelActive: { fontWeight: '600', color: '#7d9220' },
});

export default SecurityDepositScreen;`;

export const SourceCode = () => `<div style="padding:24px;background:#0f0f0f;min-height:400px"><div style="margin:0 0 20px;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;color:#c6ff2d">// SecurityDeposit — React Native Paper</div>${_blk('SecurityDepositScreen', RN_SECURITY_DEPOSIT_JSX)}</div>`;
