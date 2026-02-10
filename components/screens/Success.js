import {View, Text, StyleSheet, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useEffect} from 'react'

function Success({navigation}){
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Login")
        }, 2000)
        return () => clearTimeout(timer)
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={require("../../assets/success.png")}
                style={styles.image}
                />
            </View>

            <View style={styles.successTextContainer}>
                <Text style={styles.successText}>Success!</Text>
            </View>

            <View style={styles.successNoteContainer}>
                <Text style={styles.successNote}>
                    Your account creation is successful
                </Text>
            </View>

            <View style={styles.redirectTextContainer}>
                <Text style={styles.redirectText}>Redirecting...</Text>
            </View>
        </SafeAreaView>
    )
}

// Styling the screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 50
    },
    imageContainer: {
        padding: 10,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    successTextContainer: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    successText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#155DFC"
    },
    successNoteContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    successNote: {
        fontSize: 18
    },
    redirectTextContainer: {
        flexDirection: "column",
        marginTop: 350,
        justifyContent: "center",
        alignItems: "center"
    },
    redirectText: {
        fontSize: 18,
        
    }
})

export default Success