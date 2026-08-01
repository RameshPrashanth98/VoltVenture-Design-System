import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { TabBarPreview } from '../components/TabBarPreview';
import { BottomCardPreview } from '../components/BottomCardPreview';

export function HomeMapPreview() {
  return (
    <View style={styles.outer}>
      {/* Static map placeholder */}
      <View style={styles.mapPlaceholder}>
        {/* Top search bar overlay */}
        <View style={styles.topOverlay}>
          <Surface elevation={2} style={styles.searchBar}>
            <Text style={styles.searchPlaceholder}>🔍  Where to?</Text>
          </Surface>
        </View>

        {/* Nearby badge overlay */}
        <View style={styles.nearbyBadge}>
          <Text style={styles.nearbyText}>6 bikes nearby</Text>
        </View>

        {/* Location pulse overlay */}
        <View style={styles.pulseOuter}>
          <View style={styles.pulseInner} />
        </View>

        {/* Bottom card overlay */}
        <View style={styles.bottomOverlay}>
          <BottomCardPreview />
        </View>
      </View>

      {/* TabBar rendered below the map */}
      <TabBarPreview />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: 600,
    position: 'relative',
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
  searchBar: {
    margin: tokens.space400,
    borderRadius: tokens.radiusLg,
    padding: tokens.space300,
    backgroundColor: tokens.colorSurfaceBase,
  },
  searchPlaceholder: {
    color: tokens.colorTextSecondary,
    fontSize: 13, // typeBodySm.fontSize — not re-exported from lib/index.ts
  },
  nearbyBadge: {
    position: 'absolute',
    top: 68,
    left: tokens.space400,
    backgroundColor: tokens.colorActionPrimary,
    borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space100,
    paddingHorizontal: tokens.space300,
  },
  nearbyText: {
    color: tokens.colorTextPrimary,
    fontSize: 11, // typeLabelSm.fontSize — not re-exported from lib/index.ts
    fontWeight: '600',
  },
  pulseOuter: {
    position: 'absolute',
    top: 200,
    left: '50%' as any,
    width: 32,
    height: 32,
    borderRadius: tokens.radiusFull,
    backgroundColor: 'rgba(198,255,45,0.20)', // colorActionPrimary at 20% — design alpha, no token
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -16,
  },
  pulseInner: {
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

export const HomeMapSourceCode = `
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';
import { TabBarPreview } from '../components/TabBarPreview';
import { BottomCardPreview } from '../components/BottomCardPreview';

export function HomeMapPreview() {
  return (
    <View style={styles.outer}>
      <View style={styles.mapPlaceholder}>
        <View style={styles.topOverlay}>
          <Surface elevation={2} style={styles.searchBar}>
            <Text style={styles.searchPlaceholder}>🔍  Where to?</Text>
          </Surface>
        </View>
        <View style={styles.nearbyBadge}>
          <Text style={styles.nearbyText}>6 bikes nearby</Text>
        </View>
        <View style={styles.pulseOuter}>
          <View style={styles.pulseInner} />
        </View>
        <View style={styles.bottomOverlay}>
          <BottomCardPreview />
        </View>
      </View>
      <TabBarPreview />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { height: 600, position: 'relative' },
  mapPlaceholder: { flex: 1, backgroundColor: '#e8e8e8', position: 'relative' },
  topOverlay: { position: 'absolute', top: 0, left: 0, right: 0 },
  searchBar: { margin: tokens.space400, borderRadius: tokens.radiusLg, padding: tokens.space300, backgroundColor: tokens.colorSurfaceBase },
  searchPlaceholder: { color: tokens.colorTextSecondary, fontSize: 13 },
  nearbyBadge: {
    position: 'absolute', top: 68, left: tokens.space400,
    backgroundColor: tokens.colorActionPrimary, borderRadius: tokens.radiusFull,
    paddingVertical: tokens.space100, paddingHorizontal: tokens.space300,
  },
  nearbyText: { color: tokens.colorTextPrimary, fontSize: 11, fontWeight: '600' },
  pulseOuter: {
    position: 'absolute', top: 200, left: '50%', width: 32, height: 32,
    borderRadius: tokens.radiusFull, backgroundColor: 'rgba(198,255,45,0.20)',
    alignItems: 'center', justifyContent: 'center', marginLeft: -16,
  },
  pulseInner: { width: 12, height: 12, borderRadius: tokens.radiusFull, backgroundColor: tokens.colorActionPrimary },
  bottomOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0 },
});
`.trim();
