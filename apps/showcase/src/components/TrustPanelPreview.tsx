import React from 'react';
import { Surface, Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function TrustPanelPreview() {
  return (
    <Surface
      elevation={1}
      style={{
        borderRadius: tokens.radiusLg,
        padding: tokens.space500,
        margin: tokens.space400,
      }}
    >
      <Text
        style={{
          fontSize: 15, // typeHeadingSm.fontSize — not re-exported from lib/index.ts
          fontWeight: '600', // typeHeadingSm.fontWeight
          color: tokens.colorTextPrimary,
          marginBottom: tokens.space200,
        }}
      >
        Why VoltVenture?
      </Text>
      <Text
        style={{
          color: tokens.colorTextSecondary,
          fontSize: 13, // typeBodySm.fontSize
          marginBottom: tokens.space100,
        }}
      >
        {'\u2713'} Verified drivers with background checks
      </Text>
      <Text
        style={{
          color: tokens.colorTextSecondary,
          fontSize: 13,
          marginBottom: tokens.space100,
        }}
      >
        {'\u2713'} Real-time trip sharing
      </Text>
      <Text
        style={{
          color: tokens.colorTextSecondary,
          fontSize: 13,
        }}
      >
        {'\u2713'} 24/7 rider support
      </Text>
    </Surface>
  );
}

export const TrustPanelSourceCode = `
import React from 'react';
import { Surface, Text } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function TrustPanelPreview() {
  return (
    <Surface
      elevation={1}
      style={{
        borderRadius: tokens.radiusLg,
        padding: tokens.space500,
        margin: tokens.space400,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: '600',
          color: tokens.colorTextPrimary,
          marginBottom: tokens.space200,
        }}
      >
        Why VoltVenture?
      </Text>
      <Text
        style={{
          color: tokens.colorTextSecondary,
          fontSize: 13,
          marginBottom: tokens.space100,
        }}
      >
        {'\\u2713'} Verified drivers with background checks
      </Text>
      <Text
        style={{
          color: tokens.colorTextSecondary,
          fontSize: 13,
          marginBottom: tokens.space100,
        }}
      >
        {'\\u2713'} Real-time trip sharing
      </Text>
      <Text
        style={{
          color: tokens.colorTextSecondary,
          fontSize: 13,
        }}
      >
        {'\\u2713'} 24/7 rider support
      </Text>
    </Surface>
  );
}
`.trim();
