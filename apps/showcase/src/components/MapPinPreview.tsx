import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as tokens from 'voltventure-design-system';

export function MapPinPreview() {
  return (
    <View
      style={{
        padding: tokens.space400,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: tokens.space1200,
          height: tokens.space1200,
          borderRadius: tokens.radiusFull,
          backgroundColor: tokens.colorActionPrimary,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons
          name="location"
          size={tokens.iconSizeLg}
          color={tokens.colorTextPrimary}
        />
      </View>
      <Text
        style={{
          color: tokens.colorTextPrimary,
          marginTop: tokens.space100,
          fontSize: 11, // typeLabelSm.fontSize — not re-exported from lib/index.ts
        }}
      >
        Home
      </Text>
    </View>
  );
}

export const MapPinSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as tokens from 'voltventure-design-system';

export function MapPinPreview() {
  return (
    <View
      style={{
        padding: tokens.space400,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: tokens.space1200,
          height: tokens.space1200,
          borderRadius: tokens.radiusFull,
          backgroundColor: tokens.colorActionPrimary,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons
          name="location"
          size={tokens.iconSizeLg}
          color={tokens.colorTextPrimary}
        />
      </View>
      <Text
        style={{
          color: tokens.colorTextPrimary,
          marginTop: tokens.space100,
          fontSize: 11,
        }}
      >
        Home
      </Text>
    </View>
  );
}
`.trim();
