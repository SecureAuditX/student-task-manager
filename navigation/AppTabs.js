import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/Home";
import StudySchedule from "../screens/home/StudySchedule";
import Subject from "../screens/home/Subject";
import Settings from "../screens/home/Settings";

const Tab = createBottomTabNavigator()

function AppTabs(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home"     component={HomeScreen} />
            <Tab.Screen name="Schedule" component={StudySchedule} />
            <Tab.Screen name="Subject"  component={Subject} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default AppTabs