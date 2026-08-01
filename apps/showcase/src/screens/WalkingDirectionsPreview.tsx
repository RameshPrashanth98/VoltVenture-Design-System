import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { BottomCardPreview } from '../components/BottomCardPreview';

export function WalkingDirectionsPreview() {
  return (
    <View style={styles.outer}>
      {/* Static map placeholder with position:absolute overlays */}
      <View style={styles.mapPlaceholder}>

        {/* Top navigation instruction card */}
        <View style={styles.topOverlay}>
          <Surface elevation={2} style={styles.instructionCard}>
            <Text style={styles.instructionHeading}>Walking</Text>
            <View style={styles.instructionRow}>
              <Text style={styles.instructionDirection}>↑  Head north on Main St</Text>
            </View>
          </Surface>
        </View>

        {/* Bike destination pin */}
        <View style={styles.destinationPin}>
          <Text style={styles.destinationPinIcon}>🚲</Text>
        </View>

        {/* Remaining route line (dashed) */}
        <View style={styles.remainingRoute} />

        {/* Walked route line (colorActionPrimary — completed portion) */}
        <View style={styles.walkedRoute} />

        {/* Walking path indicator — dashed electric green line */}
        <View style={styles.walkingPathIndicator} />

        {/* User location pulse */}
        <View style={styles.userPulseOuter}>
          <View style={styles.userPulseInner} />
        </View>

        {/* Bottom card overlay */}
        <View style={styles.bottomOverlay}>
          <BottomCardPreview />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: 600,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#e8e8e8', // Static map placeholder — not a brand token
    position: 'relative',
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  instructionCard: {
    margin: tokens.space400,
    borderRadius: tokens.radiusLg,
    padding: tokens.space300,
    backgroundColor: tokens.colorSurfaceInverse,
  },
  instructionHeading: {
    fontSize: 15, // typeHeadingSm.fontSize — not re-exported from lib/index.ts
    fontWeight: '600',
    color: tokens.colorTextOnInverse,
    marginBottom: tokens.space100,
  },
  instructionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructionDirection: {
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
    color: tokens.colorTextSecondary,
  },
  destinationPin: {
    position: 'absolute',
    top: 100,
    left: '50%' as any,
    marginLeft: -16,
    width: 32,
    height: 32,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  destinationPinIcon: {
    fontSize: 16,
  },
  remainingRoute: {
    position: 'absolute',
    top: 132,
    left: '50%' as any,
    marginLeft: -1,
    width: 2,
    height: 80,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    borderColor: tokens.colorTextDisabled,
  },
  walkedRoute: {
    position: 'absolute',
    top: 212,
    left: '50%' as any,
    marginLeft: -1,
    width: 3,
    height: 120,
    backgroundColor: tokens.colorActionPrimary,
  },
  walkingPathIndicator: {
    position: 'absolute',
    top: 300,
    alignSelf: 'center',
    left: '50%' as any,
    marginLeft: -60,
    width: 120,
    height: 2,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: tokens.colorActionPrimary,
  },
  userPulseOuter: {
    position: 'absolute',
    bottom: 260,
    left: '50%' as any,
    marginLeft: -16,
    width: 32,
    height: 32,
    borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(198,255,45,0.20)', // colorActionPrimary at 20% — design alpha, no token
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPulseInner: {
    width: 12,
    height: 12,
    borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary,
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const WalkingDirectionsSourceCode = `
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { BottomCardPreview } from '../components/BottomCardPreview';

export function WalkingDirectionsPreview() {
  return (
    <View style={styles.outer}>
      <View style={styles.mapPlaceholder}>
        <View style={styles.topOverlay}>
          <Surface elevation={2} style={styles.instructionCard}>
            <Text style={styles.instructionHeading}>Walking</Text>
            <View style={styles.instructionRow}>
              <Text style={styles.instructionDirection}>↑  Head north on Main St</Text>
            </View>
          </Surface>
        </View>
        <View style={styles.destinationPin}>
          <Text style={styles.destinationPinIcon}>🚲</Text>
        </View>
        <View style={styles.remainingRoute} />
        <View style={styles.walkedRoute} />
        <View style={styles.walkingPathIndicator} />
        <View style={styles.userPulseOuter}>
          <View style={styles.userPulseInner} />
        </View>
        <View style={styles.bottomOverlay}>
          <BottomCardPreview />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { height: 600 },
  mapPlaceholder: { flex: 1, backgroundColor: '#e8e8e8', position: 'relative' },
  topOverlay: { position: 'absolute', top: 0, left: 0, right: 0 },
  instructionCard: { margin: tokens.space400, borderRadius: tokens.radiusLg, padding: tokens.space300, backgroundColor: tokens.colorSurfaceInverse },
  instructionHeading: { fontSize: 15, fontWeight: '600', color: tokens.colorTextOnInverse, marginBottom: tokens.space100 },
  instructionRow: { flexDirection: 'row', alignItems: 'center' },
  instructionDirection: { fontSize: 13, color: tokens.colorTextSecondary },
  destinationPin: {
    position: 'absolute', top: 100, left: '50%', marginLeft: -16,
    width: 32, height: 32, borderRadius: tokens.radiusFull,
    backgroundColor: tokens.colorActionPrimary, alignItems: 'center', justifyContent: 'center',
  },
  destinationPinIcon: { fontSize: 16 },
  remainingRoute: {
    position: 'absolute', top: 132, left: '50%', marginLeft: -1,
    width: 2, height: 80, borderLeftWidth: 2, borderStyle: 'dashed', borderColor: tokens.colorTextDisabled,
  },
  walkedRoute: {
    position: 'absolute', top: 212, left: '50%', marginLeft: -1,
    width: 3, height: 120, backgroundColor: tokens.colorActionPrimary,
  },
  walkingPathIndicator: {
    position: 'absolute', top: 300, left: '50%', marginLeft: -60,
    width: 120, height: 2, borderWidth: 1, borderStyle: 'dashed', borderColor: tokens.colorActionPrimary,
  },
  userPulseOuter: {
    position: 'absolute', bottom: 260, left: '50%', marginLeft: -16,
    width: 32, height: 32, borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(198,255,45,0.20)', alignItems: 'center', justifyContent: 'center',
  },
  userPulseInner: { width: 12, height: 12, borderRadius: tokens.radiusFull, backgroundColor: tokens.colorActionPrimary },
  bottomOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0 },
});
`.trim();
