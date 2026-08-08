import * as tokens from '../../generated/tokens.js';

export default { title: 'Screens/CuratedRoutes' };

// Hardcoded brand values — no token equivalent:
// '#e8e8e8'                  — hero image placeholder (no token)
// 'rgba(255,255,255,0.93)'   = '#FFFFFFEE' — range badge background
// 'rgba(15,15,15,0.87)'      = '#0F0F0FDD' — time badge background
// 'rgba(0,0,0,0.50)'         — hero photo gradient overlay
// '#a8de1a'                  = tokens.colorGreen600 — Start Route pressed state

// ── Default (HTML string) ────────────────────────────────────────────────────
export const Default = () => `
  <div style="
    width:393px;
    min-height:852px;
    background:${tokens.colorSurfaceBase};
    font-family:Inter,sans-serif;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
  ">

    <!-- Status Bar -->
    <div style="
      height:62px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 ${tokens.space400}px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        font-weight:var(--ds-font-weight-heading);
        color:${tokens.colorTextPrimary};
      ">9:41</span>
      <span style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeLabelSm}px;
        color:${tokens.colorTextSecondary};
      ">&#9679; &#9650; &#9650;</span>
    </div>

    <!-- Header -->
    <div style="
      padding:${tokens.space400}px ${tokens.space400}px ${tokens.space200}px;
      box-sizing:border-box;
      flex-shrink:0;
    ">
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeHeadingLg}px;
        font-weight:var(--ds-font-weight-display);
        color:${tokens.colorTextPrimary};
        line-height:${tokens.fontLineHeightHeadingLg}px;
      ">Curated Routes</div>
      <div style="
        font-family:Inter,sans-serif;
        font-size:${tokens.fontSizeBodyMd}px;
        font-weight:${tokens.fontWeightBodyMd};
        color:${tokens.colorTextSecondary};
        margin-top:var(--vv-space-2);
        line-height:${tokens.fontLineHeightBodyMd}px;
      ">Handpicked rides for every rider</div>
    </div>

    <!-- Range Pills Row -->
    <div style="
      display:flex;
      gap:${tokens.space200}px;
      padding:0 ${tokens.space400}px ${tokens.space300}px;
      box-sizing:border-box;
      overflow-x:auto;
      flex-shrink:0;
    ">
      <!-- Pill 1: active (100km) -->
      <button style="
        background:${tokens.colorActionPrimary};
        color:${tokens.colorTextPrimary};
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space200}px ${tokens.space400}px;
        border:none;
        cursor:pointer;
        display:flex;
        flex-direction:column;
        align-items:center;
        flex-shrink:0;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextPrimary};
        ">100km</span>
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:${tokens.fontWeightLabelSm};
          color:${tokens.colorTextSecondary};
          margin-top:var(--vv-space-1);
        ">Best range</span>
      </button>
      <!-- Pill 2: inactive (200km) -->
      <button style="
        background:var(--vv-color-surface-base);
        border:1px solid ${tokens.colorGrey100};
        color:${tokens.colorTextPrimary};
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space200}px ${tokens.space400}px;
        cursor:pointer;
        display:flex;
        flex-direction:column;
        align-items:center;
        flex-shrink:0;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextPrimary};
        ">200km</span>
      </button>
      <!-- Pill 3: inactive (300km) -->
      <button style="
        background:var(--vv-color-surface-base);
        border:1px solid ${tokens.colorGrey100};
        color:${tokens.colorTextPrimary};
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space200}px ${tokens.space400}px;
        cursor:pointer;
        display:flex;
        flex-direction:column;
        align-items:center;
        flex-shrink:0;
        box-sizing:border-box;
      ">
        <span style="
          font-family:Inter,sans-serif;
          font-size:${tokens.fontSizeLabelSm}px;
          font-weight:var(--ds-font-weight-heading);
          color:${tokens.colorTextPrimary};
        ">300km</span>
      </button>
    </div>

    <!-- Header Divider -->
    <div style="
      height:1px;
      background:${tokens.colorGrey100};
      margin:0 ${tokens.space400}px;
      flex-shrink:0;
    "></div>

    <!-- Route List -->
    <div style="
      display:flex;
      flex-direction:column;
      gap:${tokens.space400}px;
      padding:${tokens.space400}px;
      overflow-y:auto;
      flex:1;
      box-sizing:border-box;
    ">

      <!-- Route Card 1: Old Town Loop -->
      <div style="
        background:${tokens.colorSurfaceBase};
        border-radius:${tokens.radiusLg}px;
        overflow:hidden;
        box-sizing:border-box;
        box-shadow:var(--vv-elevation-raised);
      ">
        <!-- Hero Image -->
        <div style="
          position:relative;
          width:100%;
          height:180px;
          background:#e8e8e8;
          flex-shrink:0;
        ">
          <!-- Photo gradient -->
          <div style="
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:80px;
            background:linear-gradient(to top, rgba(0,0,0,0.50), transparent);
          "></div>
          <!-- Range Badge -->
          <div style="
            position:absolute;
            top:12px;
            left:12px;
            background:rgba(255,255,255,0.93);
            border-radius:${tokens.radiusFull}px;
            padding:var(--vv-space-2) 10px;
            display:inline-flex;
            align-items:center;
            box-sizing:border-box;
          ">
            <span style="
              font-family:Inter,sans-serif;
              font-size:${tokens.fontSizeLabelSm}px;
              font-weight:var(--ds-font-weight-heading);
              color:${tokens.colorTextPrimary};
            ">&#9889; 32km</span>
          </div>
          <!-- Time Badge -->
          <div style="
            position:absolute;
            top:12px;
            right:12px;
            background:rgba(15,15,15,0.87);
            border-radius:${tokens.radiusFull}px;
            padding:var(--vv-space-2) 10px;
            display:inline-flex;
            align-items:center;
            box-sizing:border-box;
          ">
            <span style="
              font-family:Inter,sans-serif;
              font-size:${tokens.fontSizeLabelSm}px;
              font-weight:var(--ds-font-weight-heading);
              color:var(--vv-color-text-on-inverse);
            ">&#9201; 45 min</span>
          </div>
          <!-- Title Overlay -->
          <div style="
            position:absolute;
            bottom:12px;
            left:12px;
          ">
            <span style="
              font-family:Inter,sans-serif;
              font-size:${tokens.fontSizeBodyMd}px;
              font-weight:var(--ds-font-weight-display);
              color:var(--vv-color-text-on-inverse);
            ">Old Town Loop</span>
          </div>
        </div>
        <!-- Card Body -->
        <div style="padding:${tokens.space400}px;box-sizing:border-box;">
          <!-- Meta Row -->
          <div style="display:flex;gap:${tokens.space200}px;margin-bottom:${tokens.space200}px;flex-wrap:wrap;">
            <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">&#129001; Easy</span>
            </div>
            <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">&#127961; City Tour</span>
            </div>
          </div>
          <!-- Stops Label -->
          <div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-bottom:6px;">3 stops</div>
          <!-- Stops Row -->
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:var(--vv-space-4);">
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Town Hall</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Market</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">River Park</span>
            </div>
          </div>
          <!-- Start Route Button -->
          <button style="
            width:100%;
            height:${tokens.space1200}px;
            background:${tokens.colorActionPrimary};
            border-radius:${tokens.radiusFull}px;
            border:none;
            cursor:pointer;
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeHeadingSm}px;
            font-weight:var(--ds-font-weight-heading);
            color:${tokens.colorTextPrimary};
            display:flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
          ">&#9654; Start Route</button>
        </div>
      </div>

      <!-- Route Card 2: Coastal Sunset Ride -->
      <div style="
        background:${tokens.colorSurfaceBase};
        border-radius:${tokens.radiusLg}px;
        overflow:hidden;
        box-sizing:border-box;
        box-shadow:var(--vv-elevation-raised);
      ">
        <!-- Hero Image -->
        <div style="
          position:relative;
          width:100%;
          height:180px;
          background:#e8e8e8;
          flex-shrink:0;
        ">
          <div style="
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:80px;
            background:linear-gradient(to top, rgba(0,0,0,0.50), transparent);
          "></div>
          <div style="
            position:absolute;
            top:12px;
            left:12px;
            background:rgba(255,255,255,0.93);
            border-radius:${tokens.radiusFull}px;
            padding:var(--vv-space-2) 10px;
            display:inline-flex;
            align-items:center;
            box-sizing:border-box;
          ">
            <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">&#9889; 58km</span>
          </div>
          <div style="
            position:absolute;
            top:12px;
            right:12px;
            background:rgba(15,15,15,0.87);
            border-radius:${tokens.radiusFull}px;
            padding:var(--vv-space-2) 10px;
            display:inline-flex;
            align-items:center;
            box-sizing:border-box;
          ">
            <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">&#9201; 1h 20 min</span>
          </div>
          <div style="position:absolute;bottom:12px;left:12px;">
            <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-on-inverse);">Coastal Sunset Ride</span>
          </div>
        </div>
        <!-- Card Body -->
        <div style="padding:${tokens.space400}px;box-sizing:border-box;">
          <div style="display:flex;gap:${tokens.space200}px;margin-bottom:${tokens.space200}px;flex-wrap:wrap;">
            <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">&#128993; Moderate</span>
            </div>
            <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">&#127754; Coastal</span>
            </div>
          </div>
          <div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-bottom:6px;">4 stops</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:var(--vv-space-4);">
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Harbor</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Pier</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Lighthouse</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Dunes</span>
            </div>
          </div>
          <button style="
            width:100%;
            height:${tokens.space1200}px;
            background:${tokens.colorActionPrimary};
            border-radius:${tokens.radiusFull}px;
            border:none;
            cursor:pointer;
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeHeadingSm}px;
            font-weight:var(--ds-font-weight-heading);
            color:${tokens.colorTextPrimary};
            display:flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
          ">&#9654; Start Route</button>
        </div>
      </div>

      <!-- Route Card 3: Mountain Pass Adventure -->
      <div style="
        background:${tokens.colorSurfaceBase};
        border-radius:${tokens.radiusLg}px;
        overflow:hidden;
        box-sizing:border-box;
        box-shadow:var(--vv-elevation-raised);
      ">
        <!-- Hero Image -->
        <div style="
          position:relative;
          width:100%;
          height:180px;
          background:#e8e8e8;
          flex-shrink:0;
        ">
          <div style="
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:80px;
            background:linear-gradient(to top, rgba(0,0,0,0.50), transparent);
          "></div>
          <div style="
            position:absolute;
            top:12px;
            left:12px;
            background:rgba(255,255,255,0.93);
            border-radius:${tokens.radiusFull}px;
            padding:var(--vv-space-2) 10px;
            display:inline-flex;
            align-items:center;
            box-sizing:border-box;
          ">
            <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};">&#9889; 89km</span>
          </div>
          <div style="
            position:absolute;
            top:12px;
            right:12px;
            background:rgba(15,15,15,0.87);
            border-radius:${tokens.radiusFull}px;
            padding:var(--vv-space-2) 10px;
            display:inline-flex;
            align-items:center;
            box-sizing:border-box;
          ">
            <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);">&#9201; 2h 10 min</span>
          </div>
          <div style="position:absolute;bottom:12px;left:12px;">
            <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-on-inverse);">Mountain Pass Adventure</span>
          </div>
        </div>
        <!-- Card Body -->
        <div style="padding:${tokens.space400}px;box-sizing:border-box;">
          <div style="display:flex;gap:${tokens.space200}px;margin-bottom:${tokens.space200}px;flex-wrap:wrap;">
            <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">&#128308; Challenging</span>
            </div>
            <div style="background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">&#9968; Mountain</span>
            </div>
          </div>
          <div style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-bottom:6px;">5 stops</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:var(--vv-space-4);">
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Base Camp</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Vista Point</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Ridge</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Summit</span>
            </div>
            <div style="background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;">
              <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};">Valley</span>
            </div>
          </div>
          <button style="
            width:100%;
            height:${tokens.space1200}px;
            background:${tokens.colorActionPrimary};
            border-radius:${tokens.radiusFull}px;
            border:none;
            cursor:pointer;
            font-family:Inter,sans-serif;
            font-size:${tokens.fontSizeHeadingSm}px;
            font-weight:var(--ds-font-weight-heading);
            color:${tokens.colorTextPrimary};
            display:flex;
            align-items:center;
            justify-content:center;
            box-sizing:border-box;
          ">&#9654; Start Route</button>
        </div>
      </div>

    </div>

    <!-- Tab Bar -->
    <div style="
      display:flex;
      border-top:1px solid ${tokens.colorGrey100};
      background:${tokens.colorSurfaceBase};
      height:60px;
      flex-shrink:0;
      box-sizing:border-box;
    ">
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;cursor:pointer;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">Ride</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;cursor:pointer;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};">Discover</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;cursor:pointer;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">Wallet</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;cursor:pointer;">
        <span style="font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};">Account</span>
      </div>
    </div>

  </div>
`;

// ── makePhoneFrame helper (inline, per-file) ─────────────────────────────────
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
  bar.innerHTML = '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-body-md-size);font-weight:var(--ds-font-weight-heading);line-height:20px;color:var(--vv-color-text-on-inverse);">9:41</span>'
    + '<span style="font-family:Inter,sans-serif;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-text-on-inverse);">&#9646; WiFi &#9650;</span>';
  screen.appendChild(bar);
  frame.appendChild(screen);
  return { frame, screen };
}

// ── Route card builder for Interactive export ─────────────────────────────────
function buildRouteCard(route) {
  const card = document.createElement('div');
  card.style.cssText = `background:${tokens.colorSurfaceBase};border-radius:${tokens.radiusLg}px;overflow:hidden;box-sizing:border-box;flex-shrink:0;`;

  // Hero image
  const hero = document.createElement('div');
  hero.style.cssText = 'position:relative;width:100%;height:180px;background:#e8e8e8;flex-shrink:0;';

  // Gradient overlay
  const gradient = document.createElement('div');
  gradient.style.cssText = 'position:absolute;bottom:0;left:0;width:100%;height:80px;background:linear-gradient(to top, rgba(0,0,0,0.50), transparent);pointer-events:none;';
  hero.appendChild(gradient);

  // Range badge
  const rangeBadge = document.createElement('div');
  rangeBadge.style.cssText = `position:absolute;top:12px;left:12px;background:rgba(255,255,255,0.93);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
  const rangeText = document.createElement('span');
  rangeText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
  rangeText.textContent = route.range;
  rangeBadge.appendChild(rangeText);
  hero.appendChild(rangeBadge);

  // Time badge
  const timeBadge = document.createElement('div');
  timeBadge.style.cssText = `position:absolute;top:12px;right:12px;background:rgba(15,15,15,0.87);border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
  const timeText = document.createElement('span');
  timeText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:var(--vv-color-text-on-inverse);`;
  timeText.textContent = route.time;
  timeBadge.appendChild(timeText);
  hero.appendChild(timeBadge);

  // Title overlay
  const titleOverlay = document.createElement('div');
  titleOverlay.style.cssText = 'position:absolute;bottom:12px;left:12px;';
  const titleText = document.createElement('span');
  titleText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:var(--ds-font-weight-display);color:var(--vv-color-text-on-inverse);`;
  titleText.textContent = route.title;
  titleOverlay.appendChild(titleText);
  hero.appendChild(titleOverlay);

  card.appendChild(hero);

  // Card body
  const body = document.createElement('div');
  body.style.cssText = 'padding:var(--vv-space-5);box-sizing:border-box;';

  // Meta row
  const metaRow = document.createElement('div');
  metaRow.style.cssText = 'display:flex;gap:var(--vv-space-3);margin-bottom:var(--vv-space-3);flex-wrap:wrap;';
  [route.difficulty, route.category].forEach(label => {
    const chip = document.createElement('div');
    chip.style.cssText = `background:${tokens.colorGrey100};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
    const chipText = document.createElement('span');
    chipText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};`;
    chipText.textContent = label;
    chip.appendChild(chipText);
    metaRow.appendChild(chip);
  });
  body.appendChild(metaRow);

  // Stops label
  const stopsLabel = document.createElement('div');
  stopsLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-bottom:6px;`;
  stopsLabel.textContent = `${route.stops.length} stops`;
  body.appendChild(stopsLabel);

  // Stops row
  const stopsRow = document.createElement('div');
  stopsRow.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;margin-bottom:var(--vv-space-4);';
  route.stops.forEach(stop => {
    const chip = document.createElement('div');
    chip.style.cssText = `background:${tokens.colorGrey050};border-radius:${tokens.radiusFull}px;padding:var(--vv-space-2) 10px;display:inline-flex;align-items:center;`;
    const chipText = document.createElement('span');
    chipText.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextPrimary};`;
    chipText.textContent = stop;
    chip.appendChild(chipText);
    stopsRow.appendChild(chip);
  });
  body.appendChild(stopsRow);

  // Start Route button
  const startBtn = document.createElement('button');
  startBtn.type = 'button';
  startBtn.style.cssText = `width:100%;height:${tokens.space1200}px;background:${tokens.colorActionPrimary};border-radius:${tokens.radiusFull}px;border:none;cursor:pointer;font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};display:flex;align-items:center;justify-content:center;box-sizing:border-box;transition:background-color var(--vv-duration-fast) var(--vv-easing-standard),transform var(--vv-duration-fast) var(--vv-easing-standard);`;
  startBtn.textContent = '\u25B6 Start Route';

  startBtn.addEventListener('pointerdown', () => {
    startBtn.style.background = 'var(--vv-color-action-primary-pressed)';
    startBtn.style.transform = 'scale(0.97)';
  });
  startBtn.addEventListener('pointerup', () => {
    startBtn.style.background = tokens.colorActionPrimary;
    startBtn.style.transform = 'scale(1)';
  });
  startBtn.addEventListener('pointerleave', () => {
    startBtn.style.background = tokens.colorActionPrimary;
    startBtn.style.transform = 'scale(1)';
  });

  body.appendChild(startBtn);
  card.appendChild(body);

  return card;
}

// Route data for Interactive export
const ROUTES_DATA = [
  {
    title: 'Old Town Loop',
    range: '\u26A1 32km',
    time: '\u23F1 45 min',
    difficulty: '\uD83D\uDFE2 Easy',
    category: '\uD83C\uDFD9 City Tour',
    stops: ['Town Hall', 'Market', 'River Park'],
  },
  {
    title: 'Coastal Sunset Ride',
    range: '\u26A1 58km',
    time: '\u23F1 1h 20 min',
    difficulty: '\uD83D\uDFE1 Moderate',
    category: '\uD83C\uDF0A Coastal',
    stops: ['Harbor', 'Pier', 'Lighthouse', 'Dunes'],
  },
  {
    title: 'Mountain Pass Adventure',
    range: '\u26A1 89km',
    time: '\u23F1 2h 10 min',
    difficulty: '\uD83D\uDD34 Challenging',
    category: '\u26F0 Mountain',
    stops: ['Base Camp', 'Vista Point', 'Ridge', 'Summit', 'Valley'],
  },
];

// ── Interactive (returns DOM element) ────────────────────────────────────────
export const Interactive = () => {
  const { frame, screen } = makePhoneFrame();

  // Inner scrollable area (all content below phone status bar)
  const inner = document.createElement('div');
  inner.style.cssText = 'flex:1;overflow-y:auto;display:flex;flex-direction:column;background:var(--vv-color-surface-base);';

  // Header
  const header = document.createElement('div');
  header.style.cssText = `padding:${tokens.space400}px ${tokens.space400}px ${tokens.space200}px;box-sizing:border-box;flex-shrink:0;`;
  const title = document.createElement('div');
  title.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeHeadingLg}px;font-weight:var(--ds-font-weight-display);color:${tokens.colorTextPrimary};line-height:${tokens.fontLineHeightHeadingLg}px;`;
  title.textContent = 'Curated Routes';
  const subtitle = document.createElement('div');
  subtitle.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeBodyMd}px;font-weight:${tokens.fontWeightBodyMd};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-2);line-height:${tokens.fontLineHeightBodyMd}px;`;
  subtitle.textContent = 'Handpicked rides for every rider';
  header.appendChild(title);
  header.appendChild(subtitle);
  inner.appendChild(header);

  // Range Pills Row
  const pillsRow = document.createElement('div');
  pillsRow.style.cssText = `display:flex;gap:${tokens.space200}px;padding:0 ${tokens.space400}px ${tokens.space300}px;box-sizing:border-box;overflow-x:auto;flex-shrink:0;`;

  const PILLS = [
    { label: '100km', subLabel: 'Best range' },
    { label: '200km', subLabel: null },
    { label: '300km', subLabel: null },
  ];

  let activePill = 0;
  const pillEls = [];

  function updateActivePill(idx) {
    activePill = idx;
    pillEls.forEach((pill, i) => {
      if (i === activePill) {
        pill.style.background = tokens.colorActionPrimary;
        pill.style.border = 'none';
      } else {
        pill.style.background = 'var(--vv-color-surface-base)';
        pill.style.border = `1px solid ${tokens.colorGrey100}`;
      }
    });
  }

  PILLS.forEach((pillData, idx) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    const isActive = idx === 0;
    pill.style.cssText = `background:${isActive ? tokens.colorActionPrimary : '#ffffff'};border:${isActive ? 'none' : `1px solid ${tokens.colorGrey100}`};border-radius:${tokens.radiusFull}px;padding:${tokens.space200}px ${tokens.space400}px;cursor:pointer;display:flex;flex-direction:column;align-items:center;flex-shrink:0;box-sizing:border-box;`;

    const pillLabel = document.createElement('span');
    pillLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:var(--ds-font-weight-heading);color:${tokens.colorTextPrimary};`;
    pillLabel.textContent = pillData.label;
    pill.appendChild(pillLabel);

    if (pillData.subLabel) {
      const subLabel = document.createElement('span');
      subLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${tokens.fontWeightLabelSm};color:${tokens.colorTextSecondary};margin-top:var(--vv-space-1);`;
      subLabel.textContent = pillData.subLabel;
      pill.appendChild(subLabel);
    }

    pill.addEventListener('pointerdown', () => updateActivePill(idx));

    pillEls.push(pill);
    pillsRow.appendChild(pill);
  });

  inner.appendChild(pillsRow);

  // Divider
  const divider = document.createElement('div');
  divider.style.cssText = `height:1px;background:${tokens.colorGrey100};margin:0 ${tokens.space400}px;flex-shrink:0;`;
  inner.appendChild(divider);

  // Route List
  const routeList = document.createElement('div');
  routeList.style.cssText = `display:flex;flex-direction:column;gap:${tokens.space400}px;padding:${tokens.space400}px;box-sizing:border-box;flex:1;`;

  ROUTES_DATA.forEach(route => {
    routeList.appendChild(buildRouteCard(route));
  });

  inner.appendChild(routeList);

  // Tab Bar
  const tabBar = document.createElement('div');
  tabBar.style.cssText = `display:flex;border-top:1px solid ${tokens.colorGrey100};background:${tokens.colorSurfaceBase};height:60px;flex-shrink:0;box-sizing:border-box;`;

  const TAB_LABELS = ['Ride', 'Discover', 'Wallet', 'Account'];
  TAB_LABELS.forEach((label, idx) => {
    const tab = document.createElement('div');
    const isActive = idx === 1; // Discover is active
    tab.style.cssText = `display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;cursor:pointer;`;
    const tabLabel = document.createElement('span');
    tabLabel.style.cssText = `font-family:Inter,sans-serif;font-size:${tokens.fontSizeLabelSm}px;font-weight:${isActive ? 700 : tokens.fontWeightLabelSm};color:${isActive ? tokens.colorTextPrimary : tokens.colorTextSecondary};`;
    tabLabel.textContent = label;
    tab.appendChild(tabLabel);
    tabBar.appendChild(tab);
  });

  screen.appendChild(inner);
  screen.appendChild(tabBar);

  return frame;
};

// ── SourceCode panel ──────────────────────────────────────────────────────────
function _esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function _blk(label, code) {
  return `<div style="margin-bottom:var(--vv-space-6)"><div style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-label-sm-size);color:var(--vv-color-action-primary);letter-spacing:.5px">${label}</div><pre style="margin:0;padding:var(--vv-space-5);background:var(--ds-color-grey-900);border-radius:var(--vv-radius-xs);overflow:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#d4d4d4;line-height:1.5;white-space:pre">${_esc(code)}</pre></div>`;
}

const RN_JSX = `// CuratedRoutes Screen — React Native Paper
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure-design-system';

// Token references (from lib/voltventure_tokens.ts):
// tokens.colorSurfaceBase    = '#ffffff'
// tokens.colorGrey050        = '#fafafa'  — stop chip bg
// tokens.colorGrey100        = '#f5f5f5'  — meta chip bg, pill inactive border, tab border
// tokens.colorTextPrimary    = '#0f0f0f'
// tokens.colorTextSecondary  = '#808080'
// tokens.colorActionPrimary  = '#c6ff2d'  — active pill bg, Start Route button bg
// tokens.colorGreen600       = '#a8de1a'  — Start Route pressed state
// tokens.radiusLg            = 20         — card corner radius
// tokens.radiusFull          = 999        — pills, badges, buttons
// '#e8e8e8'                  — hero image placeholder (no token)
// 'rgba(255,255,255,0.93)'   = '#FFFFFFEE' — range badge bg
// 'rgba(15,15,15,0.87)'      = '#0F0F0FDD' — time badge bg

const ROUTES = [
  {
    id: '1',
    title: 'Old Town Loop',
    range: '⚡ 32km',
    time: '⏱ 45 min',
    difficulty: '🟢 Easy',
    category: '🏙 City Tour',
    stops: ['Town Hall', 'Market', 'River Park'],
  },
  {
    id: '2',
    title: 'Coastal Sunset Ride',
    range: '⚡ 58km',
    time: '⏱ 1h 20 min',
    difficulty: '🟡 Moderate',
    category: '🌊 Coastal',
    stops: ['Harbor', 'Pier', 'Lighthouse', 'Dunes'],
  },
  {
    id: '3',
    title: 'Mountain Pass Adventure',
    range: '⚡ 89km',
    time: '⏱ 2h 10 min',
    difficulty: '🔴 Challenging',
    category: '⛰ Mountain',
    stops: ['Base Camp', 'Vista Point', 'Ridge', 'Summit', 'Valley'],
  },
];

const RANGE_PILLS = [
  { label: '100km', subLabel: 'Best range' },
  { label: '200km', subLabel: null },
  { label: '300km', subLabel: null },
];

const TAB_LABELS = ['Ride', 'Discover', 'Wallet', 'Account'];

function PressableRangePill({ pill, isActive, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.pill, isActive && styles.pillActive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.pillLabel}>{pill.label}</Text>
      {pill.subLabel && (
        <Text style={styles.pillSubLabel}>{pill.subLabel}</Text>
      )}
    </TouchableOpacity>
  );
}

function RouteCard({ route }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.hero}>
        <View style={styles.heroGradient} />
        <View style={styles.rangeBadge}>
          <Text style={styles.badgeText}>{route.range}</Text>
        </View>
        <View style={styles.timeBadge}>
          <Text style={styles.timeBadgeText}>{route.time}</Text>
        </View>
        <Text style={styles.heroTitle}>{route.title}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.metaRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{route.difficulty}</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{route.category}</Text>
          </View>
        </View>
        <Text style={styles.stopsLabel}>{route.stops.length} stops</Text>
        <View style={styles.stopsRow}>
          {route.stops.map((stop, i) => (
            <View key={i} style={styles.stopChip}>
              <Text style={styles.stopChipText}>{stop}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={[styles.startBtn, pressed && styles.startBtnPressed]}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          activeOpacity={1}
        >
          <Text style={styles.startBtnText}>▶ Start Route</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function CuratedRoutesScreen() {
  const [activeRange, setActiveRange] = useState(0);

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Curated Routes</Text>
        <Text style={styles.screenSubtitle}>Handpicked rides for every rider</Text>
      </View>

      {/* Range Pills */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillsRow}>
        {RANGE_PILLS.map((pill, idx) => (
          <PressableRangePill
            key={pill.label}
            pill={pill}
            isActive={idx === activeRange}
            onPress={() => setActiveRange(idx)}
          />
        ))}
      </ScrollView>

      <View style={styles.divider} />

      {/* Route List */}
      <FlatList
        data={ROUTES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RouteCard route={item} />}
        contentContainerStyle={styles.routeList}
        showsVerticalScrollIndicator={false}
      />

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {TAB_LABELS.map((label, idx) => (
          <View key={label} style={styles.tab}>
            <Text style={[styles.tabLabel, idx === 1 && styles.tabLabelActive]}>
              {label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff', // tokens.colorSurfaceBase
  },
  header: {
    paddingHorizontal: 16,   // tokens.space400
    paddingTop: 16,
    paddingBottom: 8,
  },
  screenTitle: {
    fontFamily: 'Inter',
    fontSize: 20,            // tokens.fontSizeHeadingLg
    fontWeight: '700',
    color: '#0f0f0f',        // tokens.colorTextPrimary
    lineHeight: 26,
  },
  screenSubtitle: {
    fontFamily: 'Inter',
    fontSize: 15,            // tokens.fontSizeBodyMd
    fontWeight: '400',
    color: '#808080',        // tokens.colorTextSecondary
    marginTop: 4,
    lineHeight: 22,
  },
  pillsRow: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexGrow: 0,
  },
  pill: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#f5f5f5',  // tokens.colorGrey100
    borderRadius: 999,       // tokens.radiusFull
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  pillActive: {
    backgroundColor: '#c6ff2d', // tokens.colorActionPrimary
    borderWidth: 0,
  },
  pillLabel: {
    fontFamily: 'Inter',
    fontSize: 11,            // tokens.fontSizeLabelSm
    fontWeight: '600',
    color: '#0f0f0f',
  },
  pillSubLabel: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#808080',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#f5f5f5', // tokens.colorGrey100
    marginHorizontal: 16,
  },
  routeList: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,        // tokens.radiusLg
    overflow: 'hidden',
    marginBottom: 0,
  },
  hero: {
    width: '100%',
    height: 180,
    backgroundColor: '#e8e8e8', // placeholder — no token
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    // Use expo-linear-gradient in production
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  rangeBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.93)', // '#FFFFFFEE'
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  badgeText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '600',
    color: '#0f0f0f',
  },
  timeBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(15,15,15,0.87)', // '#0F0F0FDD'
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  timeBadgeText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '600',
    color: '#ffffff',
  },
  heroTitle: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardBody: {
    padding: 16,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: '#f5f5f5', // tokens.colorGrey100
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  chipText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#0f0f0f',
  },
  stopsLabel: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#808080',
    marginBottom: 6,
  },
  stopsRow: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  stopChip: {
    backgroundColor: '#fafafa', // tokens.colorGrey050
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  stopChipText: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#0f0f0f',
  },
  startBtn: {
    height: 48,              // tokens.space1200
    backgroundColor: '#c6ff2d', // tokens.colorActionPrimary
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnPressed: {
    backgroundColor: '#a8de1a', // tokens.colorGreen600
    transform: [{ scale: 0.97 }],
  },
  startBtnText: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '600',
    color: '#0f0f0f',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
    backgroundColor: '#ffffff',
    height: 60,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '500',
    color: '#808080',
  },
  tabLabelActive: {
    fontWeight: '700',
    color: '#0f0f0f',
  },
});`;

export const SourceCode = () => `<div style="padding:var(--vv-space-7);background:var(--vv-color-surface-inverse);min-height:400px"><div style="margin:0 0 var(--vv-space-6);font-family:'JetBrains Mono',monospace;font-size:var(--vv-text-body-sm-size);font-weight:var(--ds-font-weight-heading);color:var(--vv-color-action-primary)">// CuratedRoutes — React Native Paper</div>${_blk('CuratedRoutes', RN_JSX)}</div>`;
