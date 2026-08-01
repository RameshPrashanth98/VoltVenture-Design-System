import React from 'react';
import { View } from 'react-native';
import { Surface, Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function BottomCardPreview() {
  return (
    <Surface
      elevation={4}
      style={{
        borderTopLeftRadius: tokens.radiusXl,
        borderTopRightRadius: tokens.radiusXl,
        padding: tokens.space500,
        backgroundColor: tokens.colorSurfaceBase,
      }}
    >
      <Text
        style={{
          fontSize: 15, // typeHeadingSm.fontSize — not re-exported from lib/index.ts
          fontWeight: '600',
          color: tokens.colorTextPrimary,
          marginBottom: tokens.space400,
        }}
      >
        Your ride
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: tokens.space200,
        }}
      >
        <Text style={{ color: tokens.colorTextSecondary, fontSize: 13 }}>
          Estimated fare
        </Text>
        <Text style={{ color: tokens.colorTextPrimary, fontSize: 13, fontWeight: '600' }}>
          12 IMP
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => {}}
        style={{
          marginTop: tokens.space400,
          borderRadius: tokens.radiusFull,
        }}
        labelStyle={{ color: tokens.colorTextPrimary }}
        contentStyle={{ height: tokens.space1200 }}
      >
        Confirm Booking
      </Button>
    </Surface>
  );
}

export const BottomCardSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { Surface, Text, Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function BottomCardPreview() {
  return (
    <Surface
      elevation={4}
      style={{
        borderTopLeftRadius: tokens.radiusXl,
        borderTopRightRadius: tokens.radiusXl,
        padding: tokens.space500,
        backgroundColor: tokens.colorSurfaceBase,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: '600',
          color: tokens.colorTextPrimary,
          marginBottom: tokens.space400,
        }}
      >
        Your ride
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: tokens.space200,
        }}
      >
        <Text style={{ color: tokens.colorTextSecondary, fontSize: 13 }}>
          Estimated fare
        </Text>
        <Text style={{ color: tokens.colorTextPrimary, fontSize: 13, fontWeight: '600' }}>
          12 IMP
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => {}}
        style={{
          marginTop: tokens.space400,
          borderRadius: tokens.radiusFull,
        }}
        labelStyle={{ color: tokens.colorTextPrimary }}
        contentStyle={{ height: tokens.space1200 }}
      >
        Confirm Booking
      </Button>
    </Surface>
  );
}
`.trim();
