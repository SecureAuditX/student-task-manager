import { createContext, useState } from 'react'

// context object
export const TaskContext = createContext()

function TaskProvider({ children }){
    const [tasks, setTasks] = useState([]);

    const addTask = (tasks) => {
        setTasks((prev) => [tasks, ...prev])
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider