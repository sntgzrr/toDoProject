import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/tasks";
import { useFilters } from "../hooks/useFilters";
import { Filters } from './Filters.jsx';
import { getTask } from "../services/getTasks.jsx";
import './Tasks.css'

// This component creates the Tasks element
export function Tasks() {

    // Using TasksContext to handle task states
    const { taskList, setTaskList, removeTask, saveTask, editingTask, setEditingTask } = useContext(TasksContext);
    // Using filterTasks method to filter tasks based on the user's selected option
    const { filterTasks } = useFilters();
    // Task editing states
    const [editedTitle, setEditedTitle] = useState("")
    const [editedDescription, setEditedDescription] = useState("")
    const [editedCompleted, setEditedCompleted] = useState(false)
    // Filtering states
    const filteredTasks = filterTasks(taskList);

    // Get API task list
    const getTasks = async () => {
        const tasks = await getTask()
        setTaskList(tasks)
    }

    // Method to put values within the inputs of the edit form
    const handleEditClick = (task) => {
        setEditingTask(task.id)
        setEditedTitle(task.title)
        setEditedDescription(task.description)
        setEditedCompleted(task.completed)
    }

    // Method to save the edited task and refresh tasks
    const handleSaveClick = async () => {
        await saveTask({ id: editingTask, title: editedTitle, description: editedDescription, completed: editedCompleted });
        await getTasks()
        setEditingTask(null)
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <main>
            <h1>Tasks</h1>
            <div className="filters">
                <Filters />
            </div>
            <ul className="tasks">
                {
                    filteredTasks.map(task => (
                        editingTask === task.id ? (
                            <li className='task' key={task.id}>
                                <label htmlFor=""> <h3>Task Title:</h3>
                                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                                </label>

                                <label htmlFor=""> <h3>Task Description:</h3>
                                    <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
                                </label>
                                <label>
                                    <h3>Completed:</h3>
                                    <div className='check-box'>
                                        <label className="switch">
                                            <input
                                                id='task-mark-input'
                                                checked={editedCompleted}
                                                onChange={(e) => setEditedCompleted(e.target.checked)}
                                                type="checkbox" />
                                            <div className="slider"></div>
                                            <div className="slider-card">
                                                <div className="slider-card-face slider-card-front"></div>
                                                <div className="slider-card-face slider-card-back"></div>
                                            </div>
                                        </label>
                                    </div>
                                </label>
                                <button onClick={handleSaveClick}>
                                    Save
                                </button>
                                <button onClick={() => setEditingTask(null)}>
                                    Cancel
                                </button>
                            </li>
                        ) : (
                            <li className='task' key={task.id}>
                                <h2 style={task.completed ? { color: "#379237" } : { color: "#DC3535" }} >{task.title}</h2>
                                <p>{task.description}</p>
                                <div>
                                    <button onClick={() => removeTask(task.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                        </svg>
                                    </button>

                                    <button onClick={() => handleEditClick(task)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        )
                    ))
                }
            </ul>
        </main>
    )
}
