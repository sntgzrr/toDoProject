/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { deleteTask } from "../services/deleteTask";
import { updateTask } from "../services/updateTasks";

// This context provides the states of the tasks and ways to modify them
export const TasksContext = createContext()

export function TasksProvider({ children }) {
    // Tasks states
    const [taskList, setTaskList] = useState([])
    const [editingTask, setEditingTask] = useState(null)

    // Method to remove a task from the list and API
    const removeTask = async (taskId) => {
        try {
            await deleteTask({ taskId });
            setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error removing task:', error);
        }
    }

    // Method to update a task from the list
    const saveTask = async (taskToUpdate) => {
        try {
            await updateTask(taskToUpdate);
            setTaskList(prevTaskList => prevTaskList.map(task => task.id === taskToUpdate.id ? task : task));
            setEditingTask(null);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }

    return (
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
