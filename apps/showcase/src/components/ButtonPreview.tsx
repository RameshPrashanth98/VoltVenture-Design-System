import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ButtonPreview() {
  return (
    <View
      style={{
        padding: tokens.space400,
        gap: tokens.space200,
      }}
    >
      <Button
        mode="contained"
        onPress={() => {}}
        style={{ borderRadius: tokens.radiusFull }}
        labelStyle={{ color: tokens.colorTextPrimary }}
        contentStyle={{ height: tokens.space1200 }}
      >
        Book a Ride
      </Button>
      <Button
        mode="outlined"
        onPress={() => {}}
        style={{ borderRadius: tokens.radiusFull }}
      >
        Cancel Ride
      </Button>
      <Button
        mode="text"
        onPress={() => {}}
      >
        Learn More
      </Button>
    </View>
  );
}

export const ButtonSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ButtonPreview() {
  return (
    <View
      style={{
        padding: tokens.space400,
        gap: tokens.space200,
      }}
    >
      <Button
        mode="contained"
        onPress={() => {}}
        style={{ borderRadius: tokens.radiusFull }}
        labelStyle={{ color: tokens.colorTextPrimary }}
        contentStyle={{ height: tokens.space1200 }}
      >
        Book a Ride
      </Button>
      <Button
        mode="outlined"
        onPress={() => {}}
        style={{ borderRadius: tokens.radiusFull }}
      >
        Cancel Ride
      </Button>
      <Button
        mode="text"
        onPress={() => {}}
      >
        Learn More
      </Button>
    </View>
  );
}
`.trim();
