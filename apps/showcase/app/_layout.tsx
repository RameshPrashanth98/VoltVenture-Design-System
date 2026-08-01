import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Manjari_400Regular,
  Manjari_700Bold,
} from '@expo-google-fonts/manjari';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { createVoltVentureTheme } from 'voltventure-design-system';

SplashScreen.preventAutoHideAsync();

const theme = createVoltVentureTheme();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manjari_400Regular,
    Manjari_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    JetBrainsMono_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
