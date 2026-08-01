import React from 'react';
import { StatusBarPreview, StatusBarSourceCode } from '../components/StatusBarPreview';
import { ButtonPreview, ButtonSourceCode } from '../components/ButtonPreview';
import { SocialAuthButtonsPreview, SocialAuthButtonsSourceCode } from '../components/SocialAuthButtonsPreview';
import { OrDividerPreview, OrDividerSourceCode } from '../components/OrDividerPreview';
import { PhoneInputPreview, PhoneInputSourceCode } from '../components/PhoneInputPreview';
import { SegmentedTogglePreview, SegmentedToggleSourceCode } from '../components/SegmentedTogglePreview';
import { ProgressStripPreview, ProgressStripSourceCode } from '../components/ProgressStripPreview';
import { TrustPanelPreview, TrustPanelSourceCode } from '../components/TrustPanelPreview';
import { MapPinPreview, MapPinSourceCode } from '../components/MapPinPreview';
import { TabBarPreview, TabBarSourceCode } from '../components/TabBarPreview';
import { BottomCardPreview, BottomCardSourceCode } from '../components/BottomCardPreview';
import { SplashPreview, SplashSourceCode } from '../screens/SplashPreview';
import { Onboarding1Preview, Onboarding1SourceCode } from '../screens/Onboarding1Preview';
import { RegistrationPreview, RegistrationSourceCode } from '../screens/RegistrationPreview';
import { LoginPreview, LoginSourceCode } from '../screens/LoginPreview';
import { IdScanPreview, IdScanSourceCode } from '../screens/IdScanPreview';
import { FacialScanPreview, FacialScanSourceCode } from '../screens/FacialScanPreview';
import { HomeMapPreview, HomeMapSourceCode } from '../screens/HomeMapPreview';
import { NavigateToBikePreview, NavigateToBikeSourceCode } from '../screens/NavigateToBikePreview';
import { WalkingDirectionsPreview, WalkingDirectionsSourceCode } from '../screens/WalkingDirectionsPreview';

export type RegistryEntry = {
  Preview: React.ComponentType;
  sourceCode: string;
};

// REGISTRY — complete map of all 20 showcase items (11 components + 9 screens).
// Batch A (Plan 04-03): StatusBar, Button, SocialAuthButtons, OrDivider, PhoneInput, SegmentedToggle
// Batch B (Plan 04-04): ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard
// Screen Batch A (Plan 04-05): Splash, Onboarding1, Registration, Login, IdScan
// Screen Batch B (Plan 04-06): FacialScan, HomeMap, NavigateToBike, WalkingDirections
// Registry Merge (Plan 04-07): all 14 remaining entries added here
export const REGISTRY: Record<string, RegistryEntry> = {
  // Components — Batch A
  StatusBar: { Preview: StatusBarPreview, sourceCode: StatusBarSourceCode },
  Button: { Preview: ButtonPreview, sourceCode: ButtonSourceCode },
  SocialAuthButtons: { Preview: SocialAuthButtonsPreview, sourceCode: SocialAuthButtonsSourceCode },
  OrDivider: { Preview: OrDividerPreview, sourceCode: OrDividerSourceCode },
  PhoneInput: { Preview: PhoneInputPreview, sourceCode: PhoneInputSourceCode },
  SegmentedToggle: { Preview: SegmentedTogglePreview, sourceCode: SegmentedToggleSourceCode },
  // Components — Batch B
  ProgressStrip: { Preview: ProgressStripPreview, sourceCode: ProgressStripSourceCode },
  TrustPanel: { Preview: TrustPanelPreview, sourceCode: TrustPanelSourceCode },
  MapPin: { Preview: MapPinPreview, sourceCode: MapPinSourceCode },
  TabBar: { Preview: TabBarPreview, sourceCode: TabBarSourceCode },
  BottomCard: { Preview: BottomCardPreview, sourceCode: BottomCardSourceCode },
  // Screens — Batch A
  Splash: { Preview: SplashPreview, sourceCode: SplashSourceCode },
  Onboarding1: { Preview: Onboarding1Preview, sourceCode: Onboarding1SourceCode },
  Registration: { Preview: RegistrationPreview, sourceCode: RegistrationSourceCode },
  Login: { Preview: LoginPreview, sourceCode: LoginSourceCode },
  IdScan: { Preview: IdScanPreview, sourceCode: IdScanSourceCode },
  // Screens — Batch B
  FacialScan: { Preview: FacialScanPreview, sourceCode: FacialScanSourceCode },
  HomeMap: { Preview: HomeMapPreview, sourceCode: HomeMapSourceCode },
  NavigateToBike: { Preview: NavigateToBikePreview, sourceCode: NavigateToBikeSourceCode },
  WalkingDirections: { Preview: WalkingDirectionsPreview, sourceCode: WalkingDirectionsSourceCode },
};
