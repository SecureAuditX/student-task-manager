import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  Platform
}
from 'react-native'
import { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import DateTimePicker from '@react-native-community/datetimepicker';

function NewTaskScreen(){
  // const {addTask} = useContext(TaskContext)
  const [courseTitle, setCourseTitle] = useState("")
  const [courseDesc, setCourseDesc] = useState("")
  const [courseCategory, setCourseCategory] = useState("")
  const [courseDueDate, setCourseDueDate] = useState("")
  const [showPicker, setShowPicker] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.headerText}>New Task</Text>

      <Text style={styles.label}>Task Title</Text>
      {/* Course input */}
      <TextInput 
        placeholder='e.g, Mathematics Assignment'
        value={courseTitle}
        style={styles.courseInput}
        onChangeText={setCourseTitle}
        />

        <Text style={styles.label}>Description</Text>
      {/* Course Desc input */}
      <TextInput 
        placeholder='What need to be done?'
        value={courseDesc}
        style={styles.courseInput2}
        onChangeText={setCourseDesc}
        multiline={true}
        textAlignVertical="top"
        /> 

        <View style={styles.input3Container}>

          {/* Category input */}
          <View style={styles.block}>
            <Text style={styles.label}>Category</Text>
            <TextInput 
            placeholder='e.g Mathematics'
            value={courseCategory}
            onChangeText={setCourseCategory}
            style={styles.courseInput3}
            />
          </View>

          {/* Date input */}
          <View style={styles.block}>
          <Text style={styles.label}>Due Date</Text>
          <Pressable
          onPress={() => setShowPicker(true)}>
          <View pointerEvents='none'>
          <TextInput 
          placeholder="mm/dd/yyyy"
          value={courseDueDate}
          editable={false}
          style={styles.courseInput3}
          />
          </View>
          </Pressable>
          </View>

          {showPicker && (
            <DateTimePicker 
            value={new Date()}
            mode="date"
            display='calendar'
            onChange={(event, selectedDate) => {
              setShowPicker(false)

              if (selectedDate) {
                const formatted = selectedDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                });
                setCourseDueDate(formatted)
              }
            }}
            />  
          )}
        </View>
      

    </SafeAreaView>
  )
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  headerText: {
    color: "#0e1933",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 24
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0e1933"
  },
  courseInput: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderColor: "rgba(110, 108, 108, 0.35)",
    backgroundColor: "#e9eff8",
    marginBottom: 20
  },
  courseInput2: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderColor: "rgba(110, 108, 108, 0.35)",
    backgroundColor: "#e9eff8",
    marginBottom: 20,
    height: 120,
  },
  // //////
  input3Container: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  courseInput3: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderColor: "rgba(110, 108, 108, 0.35)",
    backgroundColor: "#e9eff8",
    marginBottom: 20,
    width: 150
  }
}) 

export default NewTaskScreen