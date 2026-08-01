import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function SplashPreview() {
  return (
    <View style={styles.container}>
      {/* Logo badge: 64x64 circle with "V" */}
      <View style={styles.logoBadge}>
        <Text style={styles.logoLetter}>V</Text>
      </View>

      {/* Brand wordmark in electric green */}
      <Text style={styles.wordmark}>VoltVenture</Text>

      {/* Tagline in white */}
      <Text style={styles.tagline}>Ride. Discover. Sustain.</Text>

      {/* Progress track */}
      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>

      {/* Version label */}
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceInverse,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.space400,
  },
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLetter: {
    color: tokens.colorTextPrimary,
    fontSize: 32,
    fontFamily: 'Manjari_700Bold',
    lineHeight: 36,
  },
  wordmark: {
    color: tokens.colorActionPrimary,
    fontSize: 48,
    fontFamily: 'Manjari_700Bold',
    marginTop: tokens.space300,
    lineHeight: 56,
  },
  tagline: {
    color: tokens.colorTextOnInverse,
    fontSize: 16, // typeBodyMd.fontSize
    marginTop: tokens.space200,
  },
  progressTrack: {
    width: 120,
    height: 4,
    backgroundColor: tokens.colorBorderSubtle,
    borderRadius: tokens.radiusFull,
    marginTop: tokens.space800,
    overflow: 'hidden',
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: tokens.colorActionPrimary,
    borderRadius: tokens.radiusFull,
  },
  version: {
    color: tokens.colorTextSecondary,
    fontSize: 11, // typeLabelSm.fontSize
    marginTop: tokens.space400,
  },
});

export const SplashSourceCode = `
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function SplashPreview() {
  return (
    <View style={styles.container}>
      {/* Logo badge: 64x64 circle with "V" */}
      <View style={styles.logoBadge}>
        <Text style={styles.logoLetter}>V</Text>
      </View>

      {/* Brand wordmark in electric green */}
      <Text style={styles.wordmark}>VoltVenture</Text>

      {/* Tagline in white */}
      <Text style={styles.tagline}>Ride. Discover. Sustain.</Text>

      {/* Progress track */}
      <View style={styles.progressTrack}>
        <View style={styles.progressFill} />
      </View>

      {/* Version label */}
      <Text style={styles.version}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceInverse,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.space400,
  },
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLetter: {
    color: tokens.colorTextPrimary,
    fontSize: 32,
    fontFamily: 'Manjari_700Bold',
    lineHeight: 36,
  },
  wordmark: {
    color: tokens.colorActionPrimary,
    fontSize: 48,
    fontFamily: 'Manjari_700Bold',
    marginTop: tokens.space300,
    lineHeight: 56,
  },
  tagline: {
    color: tokens.colorTextOnInverse,
    fontSize: 16,
    marginTop: tokens.space200,
  },
  progressTrack: {
    width: 120,
    height: 4,
    backgroundColor: tokens.colorBorderSubtle,
    borderRadius: tokens.radiusFull,
    marginTop: tokens.space800,
    overflow: 'hidden',
  },
  progressFill: {
    width: '40%',
    height: '100%',
    backgroundColor: tokens.colorActionPrimary,
    borderRadius: tokens.radiusFull,
  },
  version: {
    color: tokens.colorTextSecondary,
    fontSize: 11,
    marginTop: tokens.space400,
  },
});
`.trim();
