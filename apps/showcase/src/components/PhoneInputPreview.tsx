import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function PhoneInputPreview() {
  return (
    <View style={{ padding: tokens.space400 }}>
      <TextInput
        mode="outlined"
        label="Phone number"
        keyboardType="phone-pad"
        left={<TextInput.Affix text="+1" />}
        style={{ borderRadius: tokens.radiusSm }}
      />
    </View>
  );
}

export const PhoneInputSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function PhoneInputPreview() {
  return (
    <View style={{ padding: tokens.space400 }}>
      <TextInput
        mode="outlined"
        label="Phone number"
        keyboardType="phone-pad"
        left={<TextInput.Affix text="+1" />}
        style={{ borderRadius: tokens.radiusSm }}
      />
    </View>
  );
}
`.trim();
