import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';

import { tamaguiConfig } from '../../tamagui.config';

const RootLayout = () => {
  const scheme = useColorScheme();

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={scheme ?? 'light'}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="about" />
        <Stack.Screen name="index" />
      </Stack>
    </TamaguiProvider>
  );
};

export default RootLayout;
