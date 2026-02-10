import {
    View, 
    Text, 
    Pressable, 
    Image, 
    StyleSheet,
    TextInput, 
} from 'react-native'
import { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

function Signup({navigation}) {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const validateInput = () => {
        let errors = {}

        if(!fullname) errors.fullname = "Full Name is required";
        if(!email) errors.email = "Email is required";
        if(!password) errors.password = "Password is required";
        else if (password.length < 8) errors.password = "Password is too weak";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if (validateInput()) {
            console.log("Submitted", fullname, email, password)
            setFullName("")
            setEmail("")
            setPassword("")
            setErrors({})
            navigation.navigate("SuccessScreen")
        }
    }

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

                {/* Title */}
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Create Account</Text>
                    <Text style={styles.textTitle2}>
                        Join thousands of students and start organizing today
                    </Text>
                </View>

                <View style={styles.inputMainContainer}>
                    
                    {/* Full Name Field */}
                    <View style={styles.fieldWrapper}>
                        <View style={styles.inputContainer}>
                            <Image style={styles.icon} source={require("../assets/user.png")}/>
                            <TextInput 
                                placeholder="Full Name"
                                placeholderTextColor="#7B8AA0"
                                autoCorrect={false}
                                value={fullname}
                                onChangeText={setFullName}
                                style={styles.inputStyle}
                            />
                        </View>
                        {errors.fullname && <Text style={styles.errorText}>{errors.fullname}</Text>}
                    </View>

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

                {/* Submit Button */}
                <Pressable
                    onPress={handleSubmit}
                    style={({ pressed }) => ({
                        transform: [{ scale: pressed ? 0.97 : 1 }],
                        opacity: pressed ? 0.9 : 1,
                    })}
                    >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </View>
                    </Pressable>

                {/* Footer */}
                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Already have an account? </Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.signInText2}>Sign In</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
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
        paddingHorizontal: 20,
    },
    textTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10
    },
    textTitle2: {
        fontSize: 15,
        marginTop: 5,
        color: "#222831",
        textAlign: 'center'
    }, 
    inputMainContainer: {
        marginTop: 30
    },
    fieldWrapper: {
        width: 370,
        marginBottom: 15, // Gap between different input fields
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
        marginLeft: 12,
        color: "#111827",
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
        alignSelf: "flex-start" // Forces text to the left
    },
    button: {
        backgroundColor: "#155DFC",
        borderRadius: 15,
        width: 370,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }, 
    signInContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    signInText: {
        color: "#7B8AA0",
        fontSize: 14
    },
    signInText2: {
        color: "#155DFC",
        fontWeight: "bold"
    }
})

export default Signup;