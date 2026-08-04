import * as tokens from '../generated/tokens.js';

export default { title: 'Home/Overview' };

export const DesignSystem = () => `
  <div style="font-family:'Inter',sans-serif;min-height:100vh;background:${tokens.colorSurfaceBase};margin:0">

    <!-- Hero: Volt Black bg with electric green branding -->
    <div style="background:${tokens.colorTextPrimary};padding:64px 48px 48px;text-align:center">

      <!-- V logo badge -->
      <div style="
        width:72px;height:72px;
        border-radius:${tokens.radiusFull}px;
        background:${tokens.colorActionPrimary};
        display:inline-flex;align-items:center;justify-content:center;
        margin-bottom:${tokens.space400}px;
      ">
        <span style="font-family:'Manjari',sans-serif;font-size:36px;font-weight:700;color:${tokens.colorTextPrimary};line-height:1">V</span>
      </div>

      <!-- Brand wordmark -->
      <div style="
        font-family:'Manjari',sans-serif;
        font-size:${tokens.typeDisplayXl.fontSize}px;
        font-weight:${tokens.typeDisplayXl.fontWeight};
        line-height:${tokens.typeDisplayXl.lineHeight}px;
        color:${tokens.colorActionPrimary};
        letter-spacing:${tokens.typeDisplayXl.letterSpacing}em;
        margin-bottom:${tokens.space200}px;
      ">VoltVenture</div>

      <!-- Tagline -->
      <div style="
        font-family:'Inter',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        color:rgba(255,255,255,0.55);
        margin-bottom:${tokens.space400}px;
      ">Ride. Discover. Sustain.</div>

      <!-- Version chip -->
      <div style="
        display:inline-block;
        background:rgba(198,255,45,0.12);
        border:1px solid rgba(198,255,45,0.25);
        border-radius:${tokens.radiusFull}px;
        padding:${tokens.space100}px ${tokens.space300}px;
        font-family:'JetBrains Mono',monospace;
        font-size:${tokens.typeLabelSm.fontSize}px;
        color:${tokens.colorActionPrimary};
        letter-spacing:.5px;
      ">Design System v1.0</div>

    </div>

    <!-- About section -->
    <div style="padding:${tokens.space800}px;max-width:680px;margin:0 auto;box-sizing:border-box">

      <h2 style="
        font-family:'Manjari',sans-serif;
        font-size:${tokens.typeHeadingLg.fontSize}px;
        font-weight:${tokens.typeHeadingLg.fontWeight};
        line-height:${tokens.typeHeadingLg.lineHeight}px;
        color:${tokens.colorTextPrimary};
        margin:0 0 ${tokens.space300}px;
      ">About This Design System</h2>

      <p style="
        font-family:'Inter',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextSecondary};
        margin:0 0 ${tokens.space300}px;
      ">VoltVenture is a sustainable ride-hailing app that connects urban commuters with eco-friendly electric bike rentals. This design system provides the complete token foundation, component library, and HIFI screen compositions needed to build consistent, accessible VoltVenture experiences across platforms.</p>

      <p style="
        font-family:'Inter',sans-serif;
        font-size:${tokens.typeBodyMd.fontSize}px;
        font-weight:${tokens.typeBodyMd.fontWeight};
        line-height:${tokens.typeBodyMd.lineHeight}px;
        color:${tokens.colorTextSecondary};
        margin:0;
      ">All design decisions live in W3C DTCG JSON token files, processed by Style Dictionary v4, and emitted as TypeScript constants and a React Native Paper MD3 theme — a single source of truth from design token to production component.</p>

    </div>

    <!-- Stats grid -->
    <div style="padding:0 ${tokens.space800}px ${tokens.space800}px;max-width:680px;margin:0 auto;box-sizing:border-box">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:${tokens.space300}px">
        ${[
          ['12', 'Token Categories'],
          ['80+', 'Design Tokens'],
          ['11', 'Components'],
          ['9', 'HIFI Screens'],
        ].map(([n, label]) => `
          <div style="
            background:${tokens.colorGrey050};
            border:1px solid ${tokens.colorGrey100};
            border-radius:${tokens.radiusSm}px;
            padding:${tokens.space400}px ${tokens.space200}px;
            text-align:center;
          ">
            <div style="
              font-family:'Manjari',sans-serif;
              font-size:${tokens.typeDisplayMd.fontSize}px;
              font-weight:${tokens.typeDisplayMd.fontWeight};
              color:${tokens.colorActionPrimary};
              line-height:1;
              margin-bottom:${tokens.space100}px;
            ">${n}</div>
            <div style="
              font-family:'Inter',sans-serif;
              font-size:${tokens.typeLabelSm.fontSize}px;
              color:${tokens.colorTextSecondary};
              line-height:1.3;
            ">${label}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Tech stack -->
    <div style="padding:0 ${tokens.space800}px ${tokens.space800}px;max-width:680px;margin:0 auto;box-sizing:border-box">
      <h3 style="
        font-family:'Manjari',sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:${tokens.typeHeadingMd.fontWeight};
        color:${tokens.colorTextPrimary};
        margin:0 0 ${tokens.space300}px;
      ">Tech Stack</h3>
      <div style="display:flex;flex-wrap:wrap;gap:${tokens.space200}px">
        ${['Style Dictionary v4','W3C DTCG JSON','Storybook 10.5.5','React Native Paper','TypeScript','Expo SDK 57'].map(t => `
          <div style="
            background:${tokens.colorTextPrimary};
            color:${tokens.colorActionPrimary};
            border-radius:${tokens.radiusFull}px;
            padding:${tokens.space100}px ${tokens.space300}px;
            font-family:'JetBrains Mono',monospace;
            font-size:${tokens.typeLabelSm.fontSize}px;
            font-weight:500;
          ">${t}</div>
        `).join('')}
      </div>
    </div>

    <!-- Navigation guide -->
    <div style="padding:0 ${tokens.space800}px ${tokens.space1200}px;max-width:680px;margin:0 auto;box-sizing:border-box">
      <h3 style="
        font-family:'Manjari',sans-serif;
        font-size:${tokens.typeHeadingMd.fontSize}px;
        font-weight:${tokens.typeHeadingMd.fontWeight};
        color:${tokens.colorTextPrimary};
        margin:0 0 ${tokens.space300}px;
      ">Explore</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:${tokens.space300}px">
        ${[
          ['Foundation', 'Color, Typography, Spacing, Radius, Elevation, Border, Grid, Iconography', '🎨'],
          ['Components', 'StatusBar, Button, PhoneInput, SegmentedToggle, TabBar, BottomCard + 5 more', '🧩'],
          ['Screens', 'Splash, Onboarding, Registration, Login, IdScan, FacialScan, HomeMap + 2 more', '📱'],
        ].map(([sec, desc, icon]) => `
          <div style="
            background:${tokens.colorSurfaceBase};
            border:1px solid ${tokens.colorGrey100};
            border-radius:${tokens.radiusSm}px;
            padding:${tokens.space400}px;
          ">
            <div style="font-size:24px;margin-bottom:${tokens.space200}px">${icon}</div>
            <div style="
              font-family:'Manjari',sans-serif;
              font-size:${tokens.typeHeadingSm.fontSize}px;
              font-weight:${tokens.typeHeadingSm.fontWeight};
              color:${tokens.colorTextPrimary};
              margin-bottom:${tokens.space100}px;
            ">${sec}</div>
            <div style="
              font-family:'Inter',sans-serif;
              font-size:${tokens.typeLabelSm.fontSize}px;
              color:${tokens.colorTextSecondary};
              line-height:1.4;
            ">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

  </div>
`;
