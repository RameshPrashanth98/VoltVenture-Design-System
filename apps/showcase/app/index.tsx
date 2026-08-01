import { SectionList, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { List, Divider } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

const SECTIONS = [
  {
    title: 'Components',
    data: [
      'StatusBar',
      'Button',
      'SocialAuthButtons',
      'OrDivider',
      'PhoneInput',
      'SegmentedToggle',
      'ProgressStrip',
      'TrustPanel',
      'MapPin',
      'TabBar',
      'BottomCard',
    ],
  },
  {
    title: 'Screens',
    data: [
      'Splash',
      'Onboarding1',
      'Registration',
      'Login',
      'IdScan',
      'FacialScan',
      'HomeMap',
      'NavigateToBike',
      'WalkingDirections',
    ],
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section }) => (
          <List.Subheader>{section.title}</List.Subheader>
        )}
        renderItem={({ item }) => (
          <>
            <List.Item
              title={item}
              onPress={() => router.push(`/${item}`)}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
            />
            <Divider />
          </>
        )}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceBase,
  },
});
