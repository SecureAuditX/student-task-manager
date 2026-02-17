import {
    View, 
    Text, 
    Pressable, 
    Image, 
    StyleSheet,
    TextInput, 
    Platform
} from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function Login({navigation}) {  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const validateInput = () => {
        let errors = {}

        if(!email) errors.email = "Email is required";
        if(!password) errors.password = "Password is required";
        else if (password.length < 8) errors.password = "Password is too weak";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if (validateInput()) {
            console.log("Submitted", email, password)
            setEmail("")
            setPassword("")
            setErrors({})
        }
        navigation.replace("Home")
    }

    return(
        
            <SafeAreaView style={styles.container}>
                {/* Logo */}
                <View style={styles.imageContainer}>
                    <Image 
                        source={require("../assets/logo.png")}
                        style={styles.image}
                    />
                </View>

                {/* Title */}
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Welcome back!</Text>
                    <Text style={styles.textTitle2}>
                        Sign in to continue your learning journey
                    </Text>
                </View>

                <View style={styles.inputMainContainer}>

                    {/* Email Field */}
                    <View style={styles.fieldWrapper}>
                        <View style={styles.inputContainer}>
                            <Image style={styles.icon} source={require("../assets/mail.png")}/>
                            <TextInput 
                                placeholder="Email Address"
                                placeholderTextColor="#7B8AA0"
                                autoCorrect={false}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                                style={styles.inputStyle}
                            />
                        </View>
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    </View>

                    {/* Password Field */}
                    <View style={styles.fieldWrapper}>
                        <View style={styles.inputContainer}>
                            <Image style={styles.icon} source={require("../assets/lock.png")}/>
                            <TextInput 
                                placeholder="Password"
                                placeholderTextColor="#7B8AA0"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                                style={styles.inputStyle}
                            />
                        </View>
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                    </View>
                </View>
                    <Pressable style={styles.forgetPasswordContainter}
                    onPress={() => {}}
                    >
                        <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
                        
                    </Pressable>

                {/* Submit Button */}
                <Pressable
                onPress={handleSubmit}
                style={({ pressed }) => ({
                    transform: [{ scale: pressed ? 0.97 : 1 }],
                    opacity: pressed ? 0.9 : 1,
                })}
                >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </View>
                </Pressable>


                {/* Footer */}
                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Don't have an account? </Text>
                    <Pressable onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.signInText2}>Sign Up</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
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
    },
    title: {
        alignItems: 'flex-start',
        marginRight: 70,
        marginTop: 10
    },
    textTitle: {
        fontSize: 25,
        fontWeight: Platform.OS === "ios" ? "bold" : "",
        marginTop: 10, 
        fontFamily: "HeaderText",
        color: "#081129",
    },
    textTitle2: {
        fontSize: 15,
        marginTop: Platform.OS === "ios" ? 5 : 0,
        color: "#081129",
        textAlign: 'center',
        fontFamily: "InputText"
    }, 
    inputMainContainer: {
        marginTop: 30
    },
    fieldWrapper: {
        width: 370,
        marginBottom: 25, 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        borderWidth: 1,
        borderColor: '#E3EAF4',
        borderRadius: 12,
        paddingHorizontal: 14,
        backgroundColor: '#FFFFFF',
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
        tintColor: '#7B8AA0',
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
        fontFamily: "NoteText",
        marginLeft: 12,
        color: "#111827",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        fontFamily: "NoteText",
        position: "absolute",
        bottom: -20,
        left: 5 
    },
    forgetPasswordContainter: {
        width: 370,
        marginBottom: 20,
        alignItems: "flex-end"
    },
    forgetPasswordText: {
        fontSize: 15,
        fontFamily: "InputText",
        color: "#155DFC",
        marginLeft: 200,
        marginBottom: 20
    },
    button: {
        backgroundColor: "#155DFC",
        borderRadius: 15,
        width: 370,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        
    },
    buttonText: {
        fontSize: 18,
        fontWeight: Platform.OS === "ios" ? "bold" : "",
        color: "white",
        fontFamily: "HeaderText"
    }, 
    signInContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    signInText: {
        color: "#7B8AA0",
        fontSize: 14,
        fontFamily: "NoteText"
    },
    signInText2: {
        color: "#155DFC",
        fontFamily: "InputText"
    }
})

export default Login;