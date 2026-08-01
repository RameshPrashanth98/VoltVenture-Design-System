import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function FacialScanPreview() {
  return (
    <View style={styles.container}>
      {/* Step indicator */}
      <Text style={styles.stepLabel}>Step 2 of 2</Text>

      {/* Progress strip */}
      <View style={styles.progressStrip}>
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
      </View>

      {/* Camera viewport with oval face guide */}
      <View style={styles.cameraViewport}>
        {/* Outer dashed ring */}
        <View style={styles.dashedRing} />

        {/* Oval face guide */}
        <View style={styles.ovalGuide}>
          <Text style={styles.ovalLabel}>[ Face Frame ]</Text>
        </View>

        {/* Instructions banner */}
        <View style={styles.instructionsBanner}>
          <Text style={styles.instructionsText}>Center your face in the oval</Text>
        </View>
      </View>

      {/* Trust panel bottom section */}
      <View style={styles.trustPanel}>
        {/* Shield badge */}
        <View style={styles.shieldBadge}>
          <Text style={styles.shieldIcon}>🛡</Text>
        </View>

        <Text style={styles.trustHeading}>Facial Recognition</Text>
        <Text style={styles.trustBody}>Your biometric data is processed locally.</Text>

        {/* Progress bar */}
        <ProgressBar
          progress={0.5}
          color={tokens.colorActionPrimary}
          style={styles.progressBar}
        />
        <Text style={styles.scanningLabel}>Scanning...</Text>

        {/* CTA */}
        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.ctaButton}
          labelStyle={styles.ctaLabel}
          contentStyle={styles.ctaContent}
        >
          Start Face Scan
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceInverse,
    padding: tokens.space400,
  },
  stepLabel: {
    fontSize: 11, // typeLabelSm.fontSize — not re-exported from lib/index.ts
    color: tokens.colorTextSecondary,
    marginBottom: tokens.space200,
  },
  progressStrip: {
    flexDirection: 'row',
    gap: tokens.space200,
    marginBottom: tokens.space400,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: tokens.radiusXs,
    backgroundColor: tokens.colorSurfaceBase,
  },
  cameraViewport: {
    flex: 1,
    backgroundColor: '#111111', // Static camera placeholder — not a brand token
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 280,
    marginBottom: tokens.space400,
  },
  dashedRing: {
    position: 'absolute',
    width: 224,
    height: 264,
    borderRadius: tokens.radiusFull,
    borderWidth: 2,
    borderColor: tokens.colorTextOnInverse,
    borderStyle: 'dashed',
    opacity: 0.3,
  },
  ovalGuide: {
    width: 200,
    height: 250,
    borderRadius: tokens.radiusFull,
    borderWidth: 2,
    borderColor: tokens.colorActionPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ovalLabel: {
    color: tokens.colorTextSecondary,
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
  },
  instructionsBanner: {
    position: 'absolute',
    bottom: tokens.space300,
    backgroundColor: 'rgba(0,0,0,0.53)', // #00000088 — design alpha fill, no token
    borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space200,
    paddingHorizontal: tokens.space400,
  },
  instructionsText: {
    fontSize: 11, // typeLabelSm.fontSize — not re-exported from lib/index.ts
    color: tokens.colorTextOnInverse,
  },
  trustPanel: {
    backgroundColor: tokens.colorSurfaceInverse,
    borderTopLeftRadius: tokens.radiusXl,
    borderTopRightRadius: tokens.radiusXl,
    paddingTop: tokens.space600,
    paddingBottom: tokens.space800,
  },
  shieldBadge: {
    width: 56,
    height: 56,
    borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(255,255,255,0.09)', // #FFFFFF18 — design alpha fill, no token
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: tokens.space400,
  },
  shieldIcon: {
    fontSize: 24,
  },
  trustHeading: {
    fontSize: 15, // typeHeadingSm.fontSize — not re-exported from lib/index.ts
    fontWeight: '600',
    color: tokens.colorTextOnInverse,
    marginBottom: tokens.space200,
  },
  trustBody: {
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
    color: tokens.colorTextSecondary,
    marginBottom: tokens.space400,
  },
  progressBar: {
    marginTop: tokens.space400,
    borderRadius: tokens.radiusXs,
  },
  scanningLabel: {
    color: tokens.colorTextOnInverse,
    textAlign: 'center',
    marginTop: tokens.space200,
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
  },
  ctaButton: {
    marginTop: tokens.space400,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorSurfaceBase,
  },
  ctaLabel: {
    color: tokens.colorTextPrimary,
  },
  ctaContent: {
    height: tokens.space1200,
  },
});

export const FacialScanSourceCode = `
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function FacialScanPreview() {
  return (
    <View style={styles.container}>
      <Text style={styles.stepLabel}>Step 2 of 2</Text>
      <View style={styles.progressStrip}>
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
      </View>
      <View style={styles.cameraViewport}>
        <View style={styles.dashedRing} />
        <View style={styles.ovalGuide}>
          <Text style={styles.ovalLabel}>[ Face Frame ]</Text>
        </View>
        <View style={styles.instructionsBanner}>
          <Text style={styles.instructionsText}>Center your face in the oval</Text>
        </View>
      </View>
      <View style={styles.trustPanel}>
        <View style={styles.shieldBadge}>
          <Text style={styles.shieldIcon}>🛡</Text>
        </View>
        <Text style={styles.trustHeading}>Facial Recognition</Text>
        <Text style={styles.trustBody}>Your biometric data is processed locally.</Text>
        <ProgressBar
          progress={0.5}
          color={tokens.colorActionPrimary}
          style={styles.progressBar}
        />
        <Text style={styles.scanningLabel}>Scanning...</Text>
        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.ctaButton}
          labelStyle={styles.ctaLabel}
          contentStyle={styles.ctaContent}
        >
          Start Face Scan
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceInverse,
    padding: tokens.space400,
  },
  stepLabel: { fontSize: 11, color: tokens.colorTextSecondary, marginBottom: tokens.space200 },
  progressStrip: { flexDirection: 'row', gap: tokens.space200, marginBottom: tokens.space400 },
  progressSegment: { flex: 1, height: 4, borderRadius: tokens.radiusXs, backgroundColor: tokens.colorSurfaceBase },
  cameraViewport: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minHeight: 280,
    marginBottom: tokens.space400,
  },
  dashedRing: {
    position: 'absolute',
    width: 224,
    height: 264,
    borderRadius: tokens.radiusFull,
    borderWidth: 2,
    borderColor: tokens.colorTextOnInverse,
    borderStyle: 'dashed',
    opacity: 0.3,
  },
  ovalGuide: {
    width: 200,
    height: 250,
    borderRadius: tokens.radiusFull,
    borderWidth: 2,
    borderColor: tokens.colorActionPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ovalLabel: { color: tokens.colorTextSecondary, fontSize: 13 },
  instructionsBanner: {
    position: 'absolute',
    bottom: tokens.space300,
    backgroundColor: 'rgba(0,0,0,0.53)',
    borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space200,
    paddingHorizontal: tokens.space400,
  },
  instructionsText: { fontSize: 11, color: tokens.colorTextOnInverse },
  trustPanel: {
    backgroundColor: tokens.colorSurfaceInverse,
    borderTopLeftRadius: tokens.radiusXl,
    borderTopRightRadius: tokens.radiusXl,
    paddingTop: tokens.space600,
    paddingBottom: tokens.space800,
  },
  shieldBadge: {
    width: 56,
    height: 56,
    borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(255,255,255,0.09)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: tokens.space400,
  },
  shieldIcon: { fontSize: 24 },
  trustHeading: { fontSize: 15, fontWeight: '600', color: tokens.colorTextOnInverse, marginBottom: tokens.space200 },
  trustBody: { fontSize: 13, color: tokens.colorTextSecondary, marginBottom: tokens.space400 },
  progressBar: { marginTop: tokens.space400, borderRadius: tokens.radiusXs },
  scanningLabel: { color: tokens.colorTextOnInverse, textAlign: 'center', marginTop: tokens.space200, fontSize: 13 },
  ctaButton: { marginTop: tokens.space400, borderRadius: tokens.radiusFull, backgroundColor: tokens.colorSurfaceBase },
  ctaLabel: { color: tokens.colorTextPrimary },
  ctaContent: { height: tokens.space1200 },
});
`.trim();
