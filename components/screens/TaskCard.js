import {
    View,
    Text,
    StyleSheet
} from 'react-native'

function TaskCard({ task }){
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.meta}>
                Priority: {task.priority} • {task.progress}%
            </Text>
        </View>
    )
}

// Styling
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  meta: {
    marginTop: 4,
    color: "#666",
    fontSize: 12,
  },
})

export default TaskCard