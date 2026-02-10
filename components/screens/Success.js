import {View, Text, StyleSheet, Image, Animated} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useEffect, useState, useRef} from 'react'


function Success({navigation}){
    const [dots, setDots] = useState("")
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // 2. Start the "Pop" animation immediately
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3, // Lower = more "bouncy"
            tension: 40,
            useNativeDriver: true,
        }).start();

        // Dots Animation
        const dotInterval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""))
        }, 500)

        // Redirect timer
        const timer = setTimeout(() => {
            navigation.replace("Login")
        }, 2500); // Increased slightly so user can enjoy the animation

        return () => {
            clearInterval(dotInterval);
            clearTimeout(timer);
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.imageContainer,
                { transform: [{ scale: scaleValue}]}
            ]}>
                <Image 
                source={require("../../assets/success.png")}
                style={styles.image}
                />
            </Animated.View>

            <View style={styles.successTextContainer}>
                <Text style={styles.successText}>Success!</Text>
            </View>

            <View style={styles.successNoteContainer}>
                <Text style={styles.successNote}>
                    Your account creation is successful
                </Text>
            </View>

            <View style={styles.redirectTextContainer}>
                <Text style={styles.redirectText}>Redirecting{dots}</Text>
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
        color: "#155DFC",
        fontFamily: "SuccessText"
    },
    successNoteContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    successNote: {
        fontSize: 17,
        fontFamily: "SuccessTitleText"
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