import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { PhoneInputPreview } from '../components/PhoneInputPreview';
import { SocialAuthButtonsPreview } from '../components/SocialAuthButtonsPreview';
import { OrDividerPreview } from '../components/OrDividerPreview';

export function RegistrationPreview() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {/* Heading */}
      <Text style={styles.heading}>Create Account</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>Enter your phone number to get started.</Text>

      {/* Phone input */}
      <View style={styles.phoneInputSection}>
        <PhoneInputPreview />
      </View>

      {/* Continue button */}
      <Button
        mode="contained"
        onPress={() => {}}
        labelStyle={{ color: tokens.colorTextPrimary }}
        style={styles.continueButton}
        contentStyle={styles.continueContent}
      >
        Continue
      </Button>

      {/* OR divider */}
      <View style={styles.dividerSection}>
        <OrDividerPreview />
      </View>

      {/* Social auth buttons */}
      <View style={styles.socialSection}>
        <SocialAuthButtonsPreview />
      </View>

      {/* Terms text */}
      <Text style={styles.termsText}>
        By continuing, you agree to our Terms and Privacy Policy.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceBase,
  },
  content: {
    padding: tokens.space400,
    flexGrow: 1,
  },
  heading: {
    color: tokens.colorTextPrimary,
    fontSize: 28, // typeDisplayMd.fontSize
    fontFamily: 'Manjari_700Bold',
    lineHeight: 34,
  },
  subtext: {
    color: tokens.colorTextSecondary,
    fontSize: 16, // typeBodyMd.fontSize
    marginTop: tokens.space200,
    lineHeight: 24,
  },
  phoneInputSection: {
    marginTop: tokens.space400,
    marginHorizontal: -tokens.space400,
  },
  continueButton: {
    marginTop: tokens.space300,
    borderRadius: tokens.radiusFull,
  },
  continueContent: {
    height: tokens.space1200,
  },
  dividerSection: {
    marginTop: tokens.space400,
    marginHorizontal: -tokens.space400,
  },
  socialSection: {
    marginTop: tokens.space300,
    marginHorizontal: -tokens.space400,
  },
  termsText: {
    color: tokens.colorTextSecondary,
    fontSize: 12,
    marginTop: tokens.space400,
    textAlign: 'center',
    lineHeight: 18,
  },
});

export const RegistrationSourceCode = `
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { PhoneInputPreview } from '../components/PhoneInputPreview';
import { SocialAuthButtonsPreview } from '../components/SocialAuthButtonsPreview';
import { OrDividerPreview } from '../components/OrDividerPreview';

export function RegistrationPreview() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subtext}>Enter your phone number to get started.</Text>

      <View style={styles.phoneInputSection}>
        <PhoneInputPreview />
      </View>

      <Button
        mode="contained"
        onPress={() => {}}
        labelStyle={{ color: tokens.colorTextPrimary }}
        style={styles.continueButton}
        contentStyle={styles.continueContent}
      >
        Continue
      </Button>

      <View style={styles.dividerSection}>
        <OrDividerPreview />
      </View>

      <View style={styles.socialSection}>
        <SocialAuthButtonsPreview />
      </View>

      <Text style={styles.termsText}>
        By continuing, you agree to our Terms and Privacy Policy.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceBase,
  },
  content: {
    padding: tokens.space400,
    flexGrow: 1,
  },
  heading: {
    color: tokens.colorTextPrimary,
    fontSize: 28,
    fontFamily: 'Manjari_700Bold',
    lineHeight: 34,
  },
  subtext: {
    color: tokens.colorTextSecondary,
    fontSize: 16,
    marginTop: tokens.space200,
    lineHeight: 24,
  },
  phoneInputSection: {
    marginTop: tokens.space400,
    marginHorizontal: -tokens.space400,
  },
  continueButton: {
    marginTop: tokens.space300,
    borderRadius: tokens.radiusFull,
  },
  continueContent: {
    height: tokens.space1200,
  },
  dividerSection: {
    marginTop: tokens.space400,
    marginHorizontal: -tokens.space400,
  },
  socialSection: {
    marginTop: tokens.space300,
    marginHorizontal: -tokens.space400,
  },
  termsText: {
    color: tokens.colorTextSecondary,
    fontSize: 12,
    marginTop: tokens.space400,
    textAlign: 'center',
    lineHeight: 18,
  },
});
`.trim();
