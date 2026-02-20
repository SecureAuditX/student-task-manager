import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/Home";
import StudySchedule from "../screens/home/StudySchedule";
import Subject from "../screens/home/Subject";
import Settings from "../screens/home/Settings";
import {Image} from 'react-native'

const Tab = createBottomTabNavigator()

function AppTabs(){
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#1E5BFF"
        }}>
            <Tab.Screen name="Home"     component={HomeScreen} 
            options={{
                tabBarIcon: ({ color, size }) => 
                <Image source={require("../assets/home.png")}  
                style={{width: size, height: size, tintColor: color}}
                resizeMode="contain"
                />
            }}
            />
            <Tab.Screen name="Schedule" component={StudySchedule} 
            options={{
                tabBarIcon: ({ color, size}) => 
                <Image source={require("../assets/appointment.png")}
                style={{width: size, height: size, tintColor: color}}
                resizeMode="contain"
                />
            }}
            />
            <Tab.Screen name="Subject"  component={Subject} 
            options={{
                tabBarIcon: ({ color, size }) =>
                <Image source={require("../assets/book.png")}
                style={{width: size, height: size, tintColor: color}}
                resizeMode="contain"
                />
            }}
            />
            <Tab.Screen name="Settings" component={Settings} 
            options={{
                tabBarIcon: ({ color, size }) => 
                <Image source={require("../assets/settings.png")}
                style={{width: size, height: size, tintColor: color}}
                resizeMode="contain"
                />
            }}
            />
        </Tab.Navigator>
    )
}

export default AppTabs