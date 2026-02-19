import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./AppTabs";
import NewTaskScreen from '../screens/home/NewTask'

const Stack = createNativeStackNavigator()

function AppStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={AppTabs} />
            <Stack.Screen name="NewTask" component={NewTaskScreen} />

        </Stack.Navigator>
    )
}

export default AppStack