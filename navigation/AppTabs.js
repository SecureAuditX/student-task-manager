import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/Home";
import StudySchedule from "../screens/home/StudySchedule";
import Subject from "../screens/home/Subject";
import Settings from "../screens/home/Settings";
import {Image, View} from 'react-native'

const Tab = createBottomTabNavigator()

function AppTabs(){
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#1E5BFF",
            tabBarInactiveTintColor: "#9cb0cd",
            tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: "InputText",
                 marginTop: 10
            },
            tabBarStyle: {
                height: 90,

            },
            tabBarItemStyle: {
                paddingVertical: 6  // main control for icon+label spacing
            },

        }}>
            <Tab.Screen name="Home"     component={HomeScreen} 
            options={{
                tabBarIcon: ({ focused, color, size }) => 
                <View
                style={{
                    backgroundColor: focused? "#E8F0FF" : "transparent",
                    padding: 10,
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 14,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    
                }}
                >
                    <Image source={require("../assets/home.png")}  
                    style={{width: size, height: size, tintColor: color}}
                    resizeMode="contain"
                    />
                </View>
            }}
            />
            <Tab.Screen name="Schedule" component={StudySchedule} 
            options={{
                tabBarIcon: ({focused, color, size}) => 
                <View
                style={{
                    backgroundColor: focused? "#E8F0FF" : "transparent",
                    padding: 10,
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 14,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    
                }}
                >
                    <Image source={require("../assets/appointment.png")}
                    style={{width: size, height: size, tintColor: color}}
                    resizeMode="contain"
                    />
                </View>
            }}
            />
            <Tab.Screen name="Subject"  component={Subject} 
            options={{
                tabBarIcon: ({ focused, color, size }) =>
                <View
                style={{
                    backgroundColor: focused? "#E8F0FF" : "transparent",
                    padding: 10,
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 14,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    
                }}
                >
                    <Image source={require("../assets/book.png")}
                    style={{width: size, height: size, tintColor: color}}
                    resizeMode="contain"
                    />
                 </View>
            }}
            />
            <Tab.Screen name="Settings" component={Settings} 
            options={{
                tabBarIcon: ({focused, color, size }) => 
                <View
                style={{
                    backgroundColor: focused? "#E8F0FF" : "transparent",
                    padding: 10,
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 14,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    
                }}
                >
                    <Image source={require("../assets/settings.png")}
                    style={{width: size, height: size, tintColor: color}}
                    resizeMode="contain"
                    />
                </View>
            }}
            />
        </Tab.Navigator>
    )
}

export default AppTabs