import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as tokens from 'voltventure-design-system';

export function SocialAuthButtonsPreview() {
  return (
    <View style={{ padding: tokens.space400 }}>
      <Button
        mode="outlined"
        onPress={() => {}}
        icon={() => (
          <Ionicons name="logo-google" size={tokens.iconSizeMd} color={tokens.colorTextPrimary} />
        )}
        style={{
          borderRadius: tokens.radiusFull,
          borderColor: tokens.colorBorderSubtle,
          marginBottom: tokens.space200,
        }}
      >
        Continue with Google
      </Button>
      <Button
        mode="outlined"
        onPress={() => {}}
        icon={() => (
          <Ionicons name="logo-apple" size={tokens.iconSizeMd} color={tokens.colorTextPrimary} />
        )}
        style={{
          borderRadius: tokens.radiusFull,
          borderColor: tokens.colorBorderSubtle,
          marginBottom: tokens.space200,
        }}
      >
        Continue with Apple
      </Button>
    </View>
  );
}

export const SocialAuthButtonsSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as tokens from 'voltventure-design-system';

export function SocialAuthButtonsPreview() {
  return (
    <View style={{ padding: tokens.space400 }}>
      <Button
        mode="outlined"
        onPress={() => {}}
        icon={() => (
          <Ionicons name="logo-google" size={tokens.iconSizeMd} color={tokens.colorTextPrimary} />
        )}
        style={{
          borderRadius: tokens.radiusFull,
          borderColor: tokens.colorBorderSubtle,
          marginBottom: tokens.space200,
        }}
      >
        Continue with Google
      </Button>
      <Button
        mode="outlined"
        onPress={() => {}}
        icon={() => (
          <Ionicons name="logo-apple" size={tokens.iconSizeMd} color={tokens.colorTextPrimary} />
        )}
        style={{
          borderRadius: tokens.radiusFull,
          borderColor: tokens.colorBorderSubtle,
          marginBottom: tokens.space200,
        }}
      >
        Continue with Apple
      </Button>
    </View>
  );
}
`.trim();
