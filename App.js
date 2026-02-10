import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Signup from './components/Signup';
import Login from './components/Login';
import Success from './components/screens/Success';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
         {/* component = our function name */}
           <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="SuccessScreen" component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

