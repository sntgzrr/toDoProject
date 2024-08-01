/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// This context provides the states of the tasks and ways to modify them
export const TasksContext = createContext()

export function TasksProvider ({ children }){
    // Tasks states
    const [taskList, setTaskList] = useState([])
    const [editingTask, setEditingTask] = useState(null)

    // Method to remove a task from the list
    const removeTask = (taskId) => {
        setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== taskId))
    }

    // Mehod to update a task from the list
    const saveTask = (updatedTask) => {
        setTaskList(prevTaskList => prevTaskList.map(task => task.id === updatedTask.id ? updatedTask : task))
        setEditingTask(null)
    }

    return(
        // Creating the provider of TasksContext
        <TasksContext.Provider value={{
            removeTask,
            saveTask,
            editingTask,
            setEditingTask,
            taskList,
            setTaskList
        }}>
            {children}
        </TasksContext.Provider>
    )
}
