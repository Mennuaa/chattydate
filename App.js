import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Raleway-Regular': require('./assets/fonts/Raleway-Italic-VariableFont_wght.ttf'), 
        'Raleway-Italic': require('./assets/fonts/Raleway-VariableFont_wght.ttf'), 
        'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'), 
        'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'), 
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}