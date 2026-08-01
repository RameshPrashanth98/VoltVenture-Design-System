import React from 'react';
import { View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function SegmentedTogglePreview() {
  const [selected, setSelected] = React.useState('ride');

  return (
    <View style={{ padding: tokens.space400 }}>
      <SegmentedButtons
        value={selected}
        onValueChange={setSelected}
        buttons={[
          { value: 'ride', label: 'Ride' },
          { value: 'package', label: 'Package' },
        ]}
      />
    </View>
  );
}

export const SegmentedToggleSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function SegmentedTogglePreview() {
  const [selected, setSelected] = React.useState('ride');

  return (
    <View style={{ padding: tokens.space400 }}>
      <SegmentedButtons
        value={selected}
        onValueChange={setSelected}
        buttons={[
          { value: 'ride', label: 'Ride' },
          { value: 'package', label: 'Package' },
        ]}
      />
    </View>
  );
}
`.trim();
