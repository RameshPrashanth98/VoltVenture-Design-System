import React from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as tokens from 'voltventure-design-system';

type Route = {
  key: string;
  title: string;
  focusedIcon: string;
  unfocusedIcon: string;
};

const routes: Route[] = [
  { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
  { key: 'ride', title: 'Ride', focusedIcon: 'bicycle', unfocusedIcon: 'bicycle-outline' },
  { key: 'profile', title: 'Profile', focusedIcon: 'person', unfocusedIcon: 'person-outline' },
];

export function TabBarPreview() {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{ paddingTop: tokens.space400 }}>
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={({ route }) => {
          const idx = routes.indexOf(route as Route);
          if (idx !== -1) setIndex(idx);
        }}
        renderIcon={({ route, focused, color }) => (
          <Ionicons
            name={(focused ? (route as Route).focusedIcon : (route as Route).unfocusedIcon) as any}
            size={tokens.iconSizeMd}
            color={color}
          />
        )}
        shifting={false}
      />
    </View>
  );
}

export const TabBarSourceCode = `
import React from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as tokens from 'voltventure-design-system';

const routes = [
  { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
  { key: 'ride', title: 'Ride', focusedIcon: 'bicycle', unfocusedIcon: 'bicycle-outline' },
  { key: 'profile', title: 'Profile', focusedIcon: 'person', unfocusedIcon: 'person-outline' },
];

export function TabBarPreview() {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={{ paddingTop: tokens.space400 }}>
      <BottomNavigation.Bar
        navigationState={{ index, routes }}
        onTabPress={({ route }) => {
          const idx = routes.indexOf(route);
          if (idx !== -1) setIndex(idx);
        }}
        renderIcon={({ route, focused, color }) => (
          <Ionicons
            name={focused ? route.focusedIcon : route.unfocusedIcon}
            size={tokens.iconSizeMd}
            color={color}
          />
        )}
        shifting={false}
      />
    </View>
  );
}
`.trim();
