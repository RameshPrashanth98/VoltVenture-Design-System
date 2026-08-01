import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { MapPinPreview } from '../components/MapPinPreview';
import { BottomCardPreview } from '../components/BottomCardPreview';

export function NavigateToBikePreview() {
  return (
    <View style={styles.outer}>
      {/* Static map placeholder with position:absolute overlays */}
      <View style={styles.mapPlaceholder}>

        {/* Top instruction card overlay */}
        <View style={styles.topOverlay}>
          <Surface elevation={2} style={styles.instructionCard}>
            <Text style={styles.instructionHeading}>Walk to your bike</Text>
            <Text style={styles.instructionSubtext}>3 min · 200m</Text>
          </Surface>
        </View>

        {/* ETA pill overlay (dark) */}
        <View style={styles.etaPill}>
          <Text style={styles.etaText}>4 min · 350m</Text>
        </View>

        {/* Dashed route line */}
        <View style={styles.routeLine} />

        {/* Pulse ring behind map pin */}
        <View style={styles.pulsRing} />

        {/* Map pin overlay — centered at top-30% */}
        <View style={styles.mapPinOverlay}>
          <MapPinPreview />
        </View>

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
    backgroundColor: tokens.colorSurfaceBase,
  },
  instructionHeading: {
    fontSize: 15, // typeHeadingSm.fontSize — not re-exported from lib/index.ts
    fontWeight: '600',
    color: tokens.colorTextPrimary,
  },
  instructionSubtext: {
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
    color: tokens.colorTextSecondary,
    marginTop: tokens.space100,
  },
  etaPill: {
    position: 'absolute',
    top: 68,
    alignSelf: 'center',
    left: '50%' as any,
    marginLeft: -60,
    backgroundColor: tokens.colorSurfaceInverse,
    borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space200,
    paddingHorizontal: tokens.space400,
  },
  etaText: {
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
    color: tokens.colorTextOnInverse,
  },
  routeLine: {
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
    left: '50%' as any,
    marginLeft: -1,
    width: 2,
    height: 200,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    borderColor: tokens.colorTextSecondary,
  },
  pulsRing: {
    position: 'absolute',
    top: 145,
    alignSelf: 'center',
    left: '50%' as any,
    marginLeft: -28,
    width: 56,
    height: 56,
    borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(198,255,45,0.20)', // colorActionPrimary at 20% — design alpha, no token
  },
  mapPinOverlay: {
    position: 'absolute',
    top: '30%' as any,
    alignSelf: 'center',
    left: '50%' as any,
    marginLeft: -24,
  },
  userPulseOuter: {
    position: 'absolute',
    bottom: 240,
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

export const NavigateToBikeSourceCode = `
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { MapPinPreview } from '../components/MapPinPreview';
import { BottomCardPreview } from '../components/BottomCardPreview';

export function NavigateToBikePreview() {
  return (
    <View style={styles.outer}>
      <View style={styles.mapPlaceholder}>
        <View style={styles.topOverlay}>
          <Surface elevation={2} style={styles.instructionCard}>
            <Text style={styles.instructionHeading}>Walk to your bike</Text>
            <Text style={styles.instructionSubtext}>3 min · 200m</Text>
          </Surface>
        </View>
        <View style={styles.etaPill}>
          <Text style={styles.etaText}>4 min · 350m</Text>
        </View>
        <View style={styles.routeLine} />
        <View style={styles.pulsRing} />
        <View style={styles.mapPinOverlay}>
          <MapPinPreview />
        </View>
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
  instructionCard: { margin: tokens.space400, borderRadius: tokens.radiusLg, padding: tokens.space300, backgroundColor: tokens.colorSurfaceBase },
  instructionHeading: { fontSize: 15, fontWeight: '600', color: tokens.colorTextPrimary },
  instructionSubtext: { fontSize: 13, color: tokens.colorTextSecondary, marginTop: tokens.space100 },
  etaPill: {
    position: 'absolute', top: 68, left: '50%', marginLeft: -60,
    backgroundColor: tokens.colorSurfaceInverse, borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space200, paddingHorizontal: tokens.space400,
  },
  etaText: { fontSize: 13, color: tokens.colorTextOnInverse },
  routeLine: {
    position: 'absolute', top: 200, left: '50%', marginLeft: -1,
    width: 2, height: 200, borderLeftWidth: 2, borderStyle: 'dashed', borderColor: tokens.colorTextSecondary,
  },
  pulsRing: {
    position: 'absolute', top: 145, left: '50%', marginLeft: -28,
    width: 56, height: 56, borderRadius: tokens.radiusFull, backgroundColor: 'rgba(198,255,45,0.20)',
  },
  mapPinOverlay: { position: 'absolute', top: '30%', left: '50%', marginLeft: -24 },
  userPulseOuter: {
    position: 'absolute', bottom: 240, left: '50%', marginLeft: -16,
    width: 32, height: 32, borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(198,255,45,0.20)', alignItems: 'center', justifyContent: 'center',
  },
  userPulseInner: { width: 12, height: 12, borderRadius: tokens.radiusFull, backgroundColor: tokens.colorActionPrimary },
  bottomOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0 },
});
`.trim();
