import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen'; // Recommended for a smooth start
import { useEffect } from 'react';

import Signup from './components/Signup';
import Login from './components/Login';
import Success from './components/screens/Success';
import HomeScreen from './components/Dashboard/Home';
import NewTaskScreen from './components/Dashboard/NewTask';

// Keep the splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'ButtonText': require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    'TitleText': require("./assets/fonts/NotoSansSC-Bold.ttf"),
    'noteText': require("./assets/fonts/NotoSansSC-Light.ttf"),
    'SuccessText': require("./assets/fonts/NotoSansSC-Medium.ttf"),
    'SuccessTitleText': require("./assets/fonts/NotoSansSC-Bold.ttf"),
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="SuccessScreen" component={Success} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="NewTask" component={NewTaskScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}