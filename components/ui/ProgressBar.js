import {
    View,
    Text,
    StyleSheet,
    Pressable
}
from 'react-native'

function ProgressBar({ percent }){
    const safePercent = Math.min(100, Math.max(0, percent))
    return (
        <View style={styles.progressBarContainer}>
            <Text style={styles.label2}>Weekly Progress</Text>
            <Text style={styles.label}>{safePercent}% Completed</Text>

            <View style={styles.track}>
                <View style={[styles.fill, {width: `${safePercent}%`}]}></View>
            </View>

            <Pressable style={styles.pressableViewDetailsContainer}>
                    <Text style={styles.viewDetailsText}>View Details</Text>
                </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBarContainer: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#155DFC",
        marginTop: 20,
        width: 370,
        height: 180,
        paddingHorizontal: 20,
        borderRadius: 25
    },
    track: {
        height: 8,
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.35)",
        borderRadius: 4,
        overflow: "hidden",
        marginTop: 10
    },
    fill: {
        height: "100%",
        backgroundColor: "#FFFFFF",
        
    },
    label: {
        marginTop: 6,
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },
    label2: {
        marginTop: 20,
        fontSize: 14,
        color: "white"
    },
    pressableViewDetailsContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "white",
        borderRadius: 20,
        width: 110,
        height: 35,
        marginTop: 25,
        marginLeft: 215
    },
    viewDetailsText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
})

export default ProgressBar