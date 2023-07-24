import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { SpaceGrotesk_700Bold, SpaceGrotesk_400Regular } from '@expo-google-fonts/space-grotesk';

export function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'SpaceGrotesk_700Bold': SpaceGrotesk_700Bold,
          'SpaceGrotesk_400Regular': SpaceGrotesk_400Regular,
        });

        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setFontsLoaded(false); // Set fontsLoaded to false to handle the error state
      }
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}