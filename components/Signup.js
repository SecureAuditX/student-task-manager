import {
    View, 
    Text, 
    Pressable, 
    Image, 
    StyleSheet,
    TextInput, 
} from 'react-native'
import {useState} from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import {useFonts} from 'expo-font'

function SignUp(){
    let [fontsLoaded] = useFonts({
        "Geologica": require("../assets/fonts/Geologica-Medium.ttf")
    })

    if(!fontsLoaded) return null

    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            {/* Logo */}
            <View style={styles.imageContainer}>
                <Image 
                source={require("../assets/logo.png")}
                style={styles.image}
                />
            </View>

            {/* Title (Heading) */}
            <View style={styles.title}>
                    <Text style={styles.textTitle}>
                        Create Account
                    </Text>
                    <Text style={styles.textTitle2}>
                        Join thousands of students and start organizing today
                        </Text>
                </View>

                <View style={styles.inputMainContainer}>
                <View style={styles.inputContainer}>
                    {/* Full name input */}
                    <Image 
                    style={styles.userIcon}
                    source={require("../assets/user.png")}/>
                    <TextInput 
                    placeholder="Full Name"
                    placeholderTextColor="#7B8AA0"
                    autoCorrect={false}
                    style={styles.nameLabel}
                    />
                </View>

                <View style={styles.inputContainer}>
                    {/* Email input */}
                    <Image 
                    style={styles.emailIcon}
                    source={require("../assets/mail.png")}
                    />
                     <TextInput 
                    placeholder="Email Address"
                    placeholderTextColor="#7B8AA0"
                    autoCorrect={false}
                    style={styles.emailLabel}
                    />
                </View>

                <View style={styles.inputContainer}>
                    {/* Password input */}
                    <Image 
                    style={styles.lockIcon}
                    source={require("../assets/lock.png")}
                    />
                    <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#7B8AA0"
                    autoCorrect={false}
                    secureTextEntry
                    style={styles.passwordLabel}
                    />
                </View>
                </View>

                {/* Create account button */}
                <Pressable 
                onPress={() => {}}
                style={styles.button}
                >
                     <Text style={styles.buttonText}>Create Account</Text>
                </Pressable>

                {/* Already Register? */}
                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Already have an account? </Text>
                    <Pressable
                    onPress={() => {}}
                    >
                        <Text style={styles.signInText2}>Sign In</Text>
                    </Pressable>
                </View>

        </SafeAreaView>
        </SafeAreaProvider>
    )
}

// Styling sheet
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 50
    },
    imageContainer: {
        backgroundColor: "#155DFC",
        marginTop: 50,
        borderRadius: 15,
        width: 65,
        height: 66, 
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: "contain", 
        color: "black" 
    },
    textTitle: {
        fontSize: 25,
        fontFamily: "Geologica",
        fontWeight: "bold",
        marginTop: 50
    },
    textTitle2: {
        fontSize: 15,
        marginTop: 5,
        color: "#222831"
    }, 
    inputMainContainer: {
        marginTop: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        borderWidth: 1,
        borderColor: '#E3EAF4',
        borderRadius: 12,
        paddingHorizontal: 14,
        marginBottom: 14,
        backgroundColor: '#FFFFFF',
        marginTop: 10
  },
    userIcon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
        tintColor: '#7B8AA0'
       
    },
    emailIcon: {
         width: 18,
        height: 18,
        resizeMode: "contain",
        tintColor: '#7B8AA0'
    },
    lockIcon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
        tintColor: '#7B8AA0'
    },
    nameLabel: {
        width: 300,
        height: 100,
        fontSize: 16,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    emailLabel: {
        width: 300,
        height: 100,
        fontSize: 16,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        color: "#111827",
    },
    passwordLabel: {
        width: 300,
        height: 100,
        fontSize: 16,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        color: "#111827"
    },
    button: {
        
        backgroundColor: "#155DFC",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#155DFC",
        width: 370,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }, 
    signInContainer: {
        flexDirection: "row",
        padding: 30
    },
    signInText: {
        color: "#7B8AA0"
    },
    signInText2: {
        color: "#155DFC",
        fontWeight: "bold"
    }

})

export default SignUp