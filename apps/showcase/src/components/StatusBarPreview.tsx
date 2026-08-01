import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as tokens from 'voltventure-design-system';

export function StatusBarPreview() {
  return (
    <View
      style={{
        backgroundColor: tokens.colorSurfaceBase,
        padding: tokens.space400,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: tokens.space1200,
      }}
    >
      <StatusBar style="dark" />
      <Text
        style={{
          color: tokens.colorTextPrimary,
          fontSize: 14,
        }}
      >
        StatusBar — dark icons on light surface
      </Text>
    </View>
  );
}

export const StatusBarSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as tokens from 'voltventure-design-system';

export function StatusBarPreview() {
  return (
    <View
      style={{
        backgroundColor: tokens.colorSurfaceBase,
        padding: tokens.space400,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: tokens.space1200,
      }}
    >
      <StatusBar style="dark" />
      <Text
        style={{
          color: tokens.colorTextPrimary,
          fontSize: 14,
        }}
      >
        StatusBar — dark icons on light surface
      </Text>
    </View>
  );
}
`.trim();
