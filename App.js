import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen'; // Recommended for a smooth start
import { useEffect } from 'react';
import TaskProvider from './context/TaskContext';
import RootNavigator from "./navigation/RootNavigator"
import AuthProvider from './context/AuthContext';

// Keep the splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'HeaderText': require("./assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf"),
    'InputText': require("./assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
    'NoteText': require("./assets/fonts/Inter/static/Inter_18pt-Light.ttf"),
    // 'SuccessText': require("./assets/fonts/NotoSansSC-Medium.ttf"),
    // 'SuccessTitleText': require("./assets/fonts/NotoSansSC-Bold.ttf"),
  });

  // Hide the splash screen once fonts are ready
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If fonts aren't loaded and there's no error, show nothing (Splash screen stays up)
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
    <TaskProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </TaskProvider>
    </AuthProvider>
  );
}