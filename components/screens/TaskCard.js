import {
    View,
    Text,
    StyleSheet
} from 'react-native'

function TaskCard({ task }){
  const priorityColors = {
    High: { bg: "#FFF0F0", text: "#FFB800"},
    Medium: { bg: "#FFF9E6", text: "#FFB800"},
    Low: { bg: "#E6F9EE", text: "#00C853"}
  }

  const colors = priorityColors[task.priority] || priorityColors.Low
    return (
        <View style={styles.card}>
          <View style={[styles.meta, {backgroundColor: colors.bg}]}>
          <Text style={[styles.metaText, {color: colors.text}]}>
                {task.priority} Priority  
            </Text>
            </View>

            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
            <View style={styles.taskContainer}>
            <Text style={styles.date}>{task.dueDate}</Text>
            <Text style={styles.date}>{task.progress}%</Text>
            </View>
        </View>
    )
}

// Styling
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 3,
    marginRight: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    alignSelf: "stretch",
    // ios shadow
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    // Android shadow
    elevation: 3
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#070e21",
    marginBottom: 3
  },
  description: {
    fontSize: 13,
    color: "#5d5e60",
    marginBottom: 3
  },
  taskContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center"
  },
  date: {
    fontSize: 11,
    color: "#5d5e60",
    marginBottom: 3
  },
  meta: {
    backgroundColor: "#f8dcdc",
    fontSize: 12,
    width: 110,
    height: 22,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  metaText: {
    fontSize: 11.5,
    fontWeight: "600",
    color: "red",
  }
})

export default TaskCard