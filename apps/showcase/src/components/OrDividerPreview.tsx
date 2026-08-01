import React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function OrDividerPreview() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: tokens.space400,
      }}
    >
      <Divider style={{ flex: 1 }} />
      <Text style={{ paddingHorizontal: tokens.space200, color: tokens.colorTextSecondary }}>
        or
      </Text>
      <Divider style={{ flex: 1 }} />
    </View>
  );
}

export const OrDividerSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function OrDividerPreview() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: tokens.space400,
      }}
    >
      <Divider style={{ flex: 1 }} />
      <Text style={{ paddingHorizontal: tokens.space200, color: tokens.colorTextSecondary }}>
        or
      </Text>
      <Divider style={{ flex: 1 }} />
    </View>
  );
}
`.trim();
