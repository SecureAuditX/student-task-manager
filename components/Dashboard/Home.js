import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
    Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ProgressBar from '../ui/ProgressBar'

function HomeScreen(){
    return(
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
            <StatusBar style="dark" />

            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Hi, User</Text>
            </View>

            <View style={styles.dashboardTextContainer}>
                <Text style={styles.dashboardText}>Dashboard</Text>
                <Pressable
                // onPress={}
                style={styles.pressableSearchContainer}
                >
                    <Image 
                    source={require("../../assets/search.png")}
                    style={{width: 25, height: 25, resizeMode: "contain", 
                        justifyContent: "center",
                        alignSelf: "center"
                    }}
                    />
                </Pressable>
                <Pressable
                // onPress={}
                style={styles.pressableNotifyContainer}
                >
                    <Image 
                    source={require("../../assets/notification.png")}
                    style={{width: 25, height: 25, resizeMode: "contain", 
                        justifyContent: "center",
                        alignSelf: "center"
                    }}
                    />
                </Pressable>
            </View>
            
            <View>
                <ProgressBar percent={65}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDEDED",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    welcomeTextContainer: {
        justifyContent: "flex-start",
        
    },
    welcomeText: {
        fontSize: 15
    },
    dashboardTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop:  5
    },
    dashboardText:  {
        fontSize: 25,
        fontWeight: "bold"
    },
    pressableSearchContainer: {
        flexDirection: 'row',
        marginLeft: 160,
        borderColor: "#2C2C2C",
        borderWidth: 1,
        borderRadius: 40,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    pressableNotifyContainer: {
        flexDirection: 'row',
        borderColor: "#2C2C2C",
        borderWidth: 1,
        borderRadius: 40,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeScreen