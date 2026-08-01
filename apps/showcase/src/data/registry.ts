import React from 'react';
import { StatusBarPreview, StatusBarSourceCode } from '../components/StatusBarPreview';
import { ButtonPreview, ButtonSourceCode } from '../components/ButtonPreview';
import { SocialAuthButtonsPreview, SocialAuthButtonsSourceCode } from '../components/SocialAuthButtonsPreview';
import { OrDividerPreview, OrDividerSourceCode } from '../components/OrDividerPreview';
import { PhoneInputPreview, PhoneInputSourceCode } from '../components/PhoneInputPreview';
import { SegmentedTogglePreview, SegmentedToggleSourceCode } from '../components/SegmentedTogglePreview';

export type RegistryEntry = {
  Preview: React.ComponentType;
  sourceCode: string;
};

// REGISTRY is populated by Wave 2/3 plans as component and screen implementations are added.
// Batch A (Plan 04-03): StatusBar, Button, SocialAuthButtons, OrDivider, PhoneInput, SegmentedToggle
// Batch B (Plan 04-04): ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard
// Screens (Plan 04-05 / 04-06): all 9 HIFI screens
export const REGISTRY: Record<string, RegistryEntry> = {
  StatusBar: { Preview: StatusBarPreview, sourceCode: StatusBarSourceCode },
  Button: { Preview: ButtonPreview, sourceCode: ButtonSourceCode },
  SocialAuthButtons: { Preview: SocialAuthButtonsPreview, sourceCode: SocialAuthButtonsSourceCode },
  OrDivider: { Preview: OrDividerPreview, sourceCode: OrDividerSourceCode },
  PhoneInput: { Preview: PhoneInputPreview, sourceCode: PhoneInputSourceCode },
  SegmentedToggle: { Preview: SegmentedTogglePreview, sourceCode: SegmentedToggleSourceCode },
};
