import {
    View, 
    Text, 
    Pressable, 
    Image, 
    StyleSheet
} from 'react-native'
import {useState} from 'react'

function SignUp(){

    return(
        <View style={StyleSheet.container}>
            {/* Image container */}
            <View style={styles.imageContainer}>
                <Image 
                source={require("../assets/logo.png")}
                style={styles.image}
                />
            </View>
        </View>
    )
}

// Styling sheet
const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        backgroundColor: "#155DFC",
        marginTop: 50,
        borderRadius: 15,
        width: 65,
        height: 66, 
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: "contain",  
    }
})

export default SignUp