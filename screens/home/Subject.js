import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

function Subject(){
    return (
        <SafeAreaView style={styles.container}
        edges={["top", "left", "right", "bottom"]}
        >
            <StatusBar style="dark" />

            <View style={styles.sampleContainer}>
                <Text style={styles.sampleText}>Subject Coming Soon...</Text>
            </View>
        </SafeAreaView>
    )

}

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    sampleContainer: {
        flex: 1,
        backgroundColor: "#EDEDED",
        justifyContent: "center",
        alignItems: "center"
    },
    sampleText: {
        fontSize: 25,
        fontFamily: "NoteText",
        color: "#030712"
    }
})

export default Subject