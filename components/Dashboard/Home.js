import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
    Image,
    ScrollView
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
            
            <ScrollView>
            {/* Progress Bar Tracker Container */}
            <View>
                <ProgressBar percent={65}/>
            </View>
            
            <View style={styles.taskSection}>
                {/* Add Task Button */}
            <Pressable style={styles.addTaskButton}>
                <View>
                    <Image 
                    source={require("../../assets/add.png")}
                    style={{width: 45, height: 45, resizeMode: "contain"}}
                    />
                </View>  
                <Text style={styles.addTaskText}>Add Task</Text>  
            </Pressable>

                {/* Q&A Section */}
            <Pressable style={styles.QAButton}>
                <View>
                    <Image 
                    source={require("../../assets/Q&A.png")}
                    style={{width: 35, height: 35, resizeMode: "contain"}}
                    />
                </View>  
                <Text style={styles.QAText}>Q&A Section</Text>  
            </Pressable>
            </View>

            {/* Tasks Section */}
            <View>
                <Text>Upcoming Tasks</Text>
              
            </View>
            </ScrollView>

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
    },
    taskSection: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 40,
        alignItems: "center"
    },
    addTaskButton: {
        backgroundColor: "#0F172A",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 120,
        borderRadius: 20,
        borderColor: "#030712",
        marginRight: 20
    },
    addTaskText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginTop: 10
    },
    QAButton: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 120,
        borderRadius: 20,
        borderColor: "#EDEDED",
    },
    QAText: {
        fontSize: 14,
        color: "#030712",
        fontWeight: "bold",
        marginTop: 10
    }
})

export default HomeScreen