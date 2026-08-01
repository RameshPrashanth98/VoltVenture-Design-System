import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function Onboarding1Preview() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {/* Illustration placeholder */}
      <View style={styles.illustrationPlaceholder}>
        <Text style={styles.illustrationLabel}>[ Illustration ]</Text>
      </View>

      {/* Pagination dots */}
      <View style={styles.dotsRow}>
        {/* Active dot — elongated pill */}
        <View style={styles.dotActive} />
        {/* Inactive dots */}
        <View style={styles.dotInactive} />
        <View style={styles.dotInactive} />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Ride green, explore more</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>Unlock sustainable rides across your city.</Text>

      {/* CTA button */}
      <Button
        mode="contained"
        onPress={() => {}}
        labelStyle={{ color: tokens.colorTextPrimary }}
        style={styles.ctaButton}
        contentStyle={styles.ctaContent}
      >
        Next
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceBase,
  },
  content: {
    flexGrow: 1,
  },
  illustrationPlaceholder: {
    height: 320,
    backgroundColor: tokens.colorSurfaceInverse,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationLabel: {
    color: tokens.colorTextOnInverse,
    fontSize: 14, // typeBodySm.fontSize
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.space200,
    marginTop: tokens.space300,
    paddingVertical: tokens.space300,
  },
  dotActive: {
    width: 24,
    height: 8,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorBorderSubtle,
  },
  heading: {
    color: tokens.colorTextPrimary,
    fontSize: 28, // typeDisplayMd.fontSize
    fontFamily: 'Manjari_700Bold',
    paddingHorizontal: tokens.space400,
    lineHeight: 34,
  },
  subtext: {
    color: tokens.colorTextSecondary,
    fontSize: 16, // typeBodyMd.fontSize
    paddingHorizontal: tokens.space400,
    marginTop: tokens.space200,
    lineHeight: 24,
  },
  ctaButton: {
    marginHorizontal: tokens.space400,
    marginTop: tokens.space400,
    marginBottom: tokens.space800,
    borderRadius: tokens.radiusFull,
  },
  ctaContent: {
    height: tokens.space1200,
  },
});

export const Onboarding1SourceCode = `
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function Onboarding1Preview() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {/* Illustration placeholder */}
      <View style={styles.illustrationPlaceholder}>
        <Text style={styles.illustrationLabel}>[ Illustration ]</Text>
      </View>

      {/* Pagination dots */}
      <View style={styles.dotsRow}>
        <View style={styles.dotActive} />
        <View style={styles.dotInactive} />
        <View style={styles.dotInactive} />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Ride green, explore more</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>Unlock sustainable rides across your city.</Text>

      {/* CTA button */}
      <Button
        mode="contained"
        onPress={() => {}}
        labelStyle={{ color: tokens.colorTextPrimary }}
        style={styles.ctaButton}
        contentStyle={styles.ctaContent}
      >
        Next
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceBase,
  },
  content: {
    flexGrow: 1,
  },
  illustrationPlaceholder: {
    height: 320,
    backgroundColor: tokens.colorSurfaceInverse,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationLabel: {
    color: tokens.colorTextOnInverse,
    fontSize: 14,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.space200,
    marginTop: tokens.space300,
    paddingVertical: tokens.space300,
  },
  dotActive: {
    width: 24,
    height: 8,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorBorderSubtle,
  },
  heading: {
    color: tokens.colorTextPrimary,
    fontSize: 28,
    fontFamily: 'Manjari_700Bold',
    paddingHorizontal: tokens.space400,
    lineHeight: 34,
  },
  subtext: {
    color: tokens.colorTextSecondary,
    fontSize: 16,
    paddingHorizontal: tokens.space400,
    marginTop: tokens.space200,
    lineHeight: 24,
  },
  ctaButton: {
    marginHorizontal: tokens.space400,
    marginTop: tokens.space400,
    marginBottom: tokens.space800,
    borderRadius: tokens.radiusFull,
  },
  ctaContent: {
    height: tokens.space1200,
  },
});
`.trim();
