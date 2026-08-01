import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function IdScanPreview() {
  return (
    <View style={styles.container}>
      {/* Dark top nav */}
      <View style={styles.topNav}>
        {/* Close button */}
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>✕</Text>
        </View>
        {/* Flashlight button */}
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>⚡</Text>
        </View>
      </View>

      {/* Step label + ProgressStrip */}
      <View style={styles.stepSection}>
        <Text style={styles.stepLabel}>Step 1 of 2</Text>
        <View style={styles.progressRow}>
          <View style={styles.progressSegmentActive} />
          <View style={styles.progressSegmentInactive} />
        </View>
      </View>

      {/* Camera viewport */}
      <View style={styles.cameraViewport}>
        {/* ID card guide frame */}
        <View style={styles.idFrame} />

        {/* Instructions banner */}
        <View style={styles.instructionsBanner}>
          <Text style={styles.instructionsText}>
            Position your ID card within the frame
          </Text>
        </View>
      </View>

      {/* Trust panel */}
      <View style={styles.trustPanel}>
        <Text style={styles.shieldIcon}>🛡</Text>
        <Text style={styles.trustTitle}>Secure Identity Scan</Text>
        <Text style={styles.trustBody}>Your data is encrypted and never shared.</Text>
        <Button
          mode="contained"
          onPress={() => {}}
          labelStyle={{ color: tokens.colorTextPrimary }}
          style={styles.scanButton}
          contentStyle={styles.scanButtonContent}
        >
          Scan My ID
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceInverse,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.space400,
    paddingTop: tokens.space800,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorGrey800,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    color: tokens.colorTextOnInverse,
    fontSize: 16, // typeBodyMd.fontSize
  },
  stepSection: {
    paddingHorizontal: tokens.space400,
    paddingBottom: tokens.space300,
  },
  stepLabel: {
    color: tokens.colorTextSecondary,
    fontSize: 11, // typeLabelMd.fontSize
    marginBottom: tokens.space200,
  },
  progressRow: {
    flexDirection: 'row',
    gap: tokens.space200,
  },
  progressSegmentActive: {
    flex: 1,
    height: 4,
    borderRadius: tokens.radiusXs,
    backgroundColor: tokens.colorSurfaceBase,
  },
  progressSegmentInactive: {
    flex: 1,
    height: 4,
    borderRadius: tokens.radiusXs,
    backgroundColor: tokens.colorGrey700,
  },
  cameraViewport: {
    flex: 1,
    backgroundColor: tokens.colorGrey900,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  idFrame: {
    width: 280,
    height: 180,
    borderWidth: tokens.borderWidthFocus,
    borderColor: tokens.colorActionPrimary,
    borderRadius: tokens.radiusXs,
    borderStyle: 'dashed',
  },
  instructionsBanner: {
    position: 'absolute',
    bottom: tokens.space300,
    backgroundColor: tokens.colorGrey800,
    borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space200,
    paddingHorizontal: tokens.space400,
  },
  instructionsText: {
    color: tokens.colorTextOnInverse,
    fontSize: 11, // typeLabelSm.fontSize
  },
  trustPanel: {
    backgroundColor: tokens.colorGrey900,
    borderTopLeftRadius: tokens.radiusXl,
    borderTopRightRadius: tokens.radiusXl,
    padding: tokens.space600,
    paddingBottom: tokens.space800,
  },
  shieldIcon: {
    fontSize: 32,
    marginBottom: tokens.space400,
  },
  trustTitle: {
    color: tokens.colorTextOnInverse,
    fontSize: 15, // typeHeadingSm.fontSize
    fontWeight: '600',
    marginBottom: tokens.space200,
  },
  trustBody: {
    color: tokens.colorTextSecondary,
    fontSize: 13, // typeBodySm.fontSize
    marginBottom: tokens.space600,
  },
  scanButton: {
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorSurfaceBase,
  },
  scanButtonContent: {
    height: tokens.space1200,
  },
});

export const IdScanSourceCode = `
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function IdScanPreview() {
  return (
    <View style={styles.container}>
      {/* Dark top nav */}
      <View style={styles.topNav}>
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>✕</Text>
        </View>
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>⚡</Text>
        </View>
      </View>

      {/* Step label + ProgressStrip */}
      <View style={styles.stepSection}>
        <Text style={styles.stepLabel}>Step 1 of 2</Text>
        <View style={styles.progressRow}>
          <View style={styles.progressSegmentActive} />
          <View style={styles.progressSegmentInactive} />
        </View>
      </View>

      {/* Camera viewport */}
      <View style={styles.cameraViewport}>
        <View style={styles.idFrame} />
        <View style={styles.instructionsBanner}>
          <Text style={styles.instructionsText}>
            Position your ID card within the frame
          </Text>
        </View>
      </View>

      {/* Trust panel */}
      <View style={styles.trustPanel}>
        <Text style={styles.shieldIcon}>🛡</Text>
        <Text style={styles.trustTitle}>Secure Identity Scan</Text>
        <Text style={styles.trustBody}>Your data is encrypted and never shared.</Text>
        <Button
          mode="contained"
          onPress={() => {}}
          labelStyle={{ color: tokens.colorTextPrimary }}
          style={styles.scanButton}
          contentStyle={styles.scanButtonContent}
        >
          Scan My ID
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceInverse,
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.space400,
    paddingTop: tokens.space800,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorGrey800,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    color: tokens.colorTextOnInverse,
    fontSize: 16,
  },
  stepSection: {
    paddingHorizontal: tokens.space400,
    paddingBottom: tokens.space300,
  },
  stepLabel: {
    color: tokens.colorTextSecondary,
    fontSize: 11,
    marginBottom: tokens.space200,
  },
  progressRow: {
    flexDirection: 'row',
    gap: tokens.space200,
  },
  progressSegmentActive: {
    flex: 1,
    height: 4,
    borderRadius: tokens.radiusXs,
    backgroundColor: tokens.colorSurfaceBase,
  },
  progressSegmentInactive: {
    flex: 1,
    height: 4,
    borderRadius: tokens.radiusXs,
    backgroundColor: tokens.colorGrey700,
  },
  cameraViewport: {
    flex: 1,
    backgroundColor: tokens.colorGrey900,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  idFrame: {
    width: 280,
    height: 180,
    borderWidth: tokens.borderWidthFocus,
    borderColor: tokens.colorActionPrimary,
    borderRadius: tokens.radiusXs,
    borderStyle: 'dashed',
  },
  instructionsBanner: {
    position: 'absolute',
    bottom: tokens.space300,
    backgroundColor: tokens.colorGrey800,
    borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space200,
    paddingHorizontal: tokens.space400,
  },
  instructionsText: {
    color: tokens.colorTextOnInverse,
    fontSize: 11,
  },
  trustPanel: {
    backgroundColor: tokens.colorGrey900,
    borderTopLeftRadius: tokens.radiusXl,
    borderTopRightRadius: tokens.radiusXl,
    padding: tokens.space600,
    paddingBottom: tokens.space800,
  },
  shieldIcon: {
    fontSize: 32,
    marginBottom: tokens.space400,
  },
  trustTitle: {
    color: tokens.colorTextOnInverse,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: tokens.space200,
  },
  trustBody: {
    color: tokens.colorTextSecondary,
    fontSize: 13,
    marginBottom: tokens.space600,
  },
  scanButton: {
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorSurfaceBase,
  },
  scanButtonContent: {
    height: tokens.space1200,
  },
});
`.trim();
