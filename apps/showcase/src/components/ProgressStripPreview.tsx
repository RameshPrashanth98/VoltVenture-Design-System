import React from 'react';
import { View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ProgressStripPreview() {
  return (
    <View
      style={{
        padding: tokens.space400,
      }}
    >
      <Text
        style={{
          color: tokens.colorTextPrimary,
          fontSize: tokens.typeBodySm.fontSize,
          marginBottom: tokens.space200,
        }}
      >
        Step 1 of 3
      </Text>
      <View style={{ marginTop: tokens.space200 }}>
        <ProgressBar
          progress={0.33}
          color={tokens.colorActionPrimary}
          style={{ borderRadius: tokens.radiusXs, height: 4 }}
        />
      </View>
    </View>
  );
}

export const ProgressStripSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ProgressStripPreview() {
  return (
    <View
      style={{
        padding: tokens.space400,
      }}
    >
      <Text
        style={{
          color: tokens.colorTextPrimary,
          fontSize: tokens.typeBodySm.fontSize,
          marginBottom: tokens.space200,
        }}
      >
        Step 1 of 3
      </Text>
      <View style={{ marginTop: tokens.space200 }}>
        <ProgressBar
          progress={0.33}
          color={tokens.colorActionPrimary}
          style={{ borderRadius: tokens.radiusXs, height: 4 }}
        />
      </View>
    </View>
  );
}
`.trim();
