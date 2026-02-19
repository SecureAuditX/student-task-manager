import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Stack = createNativeStackNavigator()

function RootNavigator(){
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAuthenticated ? (
                 <Stack.Screen name="App" component={AppStack} />
            ) : (
                <Stack.Screen name="Auth" component={AuthStack} />
            )}
           
        </Stack.Navigator>
    )
}

export default RootNavigator