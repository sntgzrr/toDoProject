import { useState, useContext } from 'react'
import { createTasks } from '../services/createTasks'
import './Form.css'
import { TasksContext } from '../context/tasks'

// This component creates the Form element
export function Form() {

    // Task states
    const [titleTask, setTitleTask] = useState("")
    const [descriptionTask, setDescriptionTask] = useState("")
    const [markTask, setMarkTask] = useState(false)
    const { taskList, setTaskList } = useContext(TasksContext);

    // Method to add a Task to the list and create a task in the API
    const addToDoList = async () => {
        const newTask = await createTasks({ titleTask, descriptionTask, markTask });
        setTaskList([...taskList, newTask]);
    };

    // Method to update the title of the task
    const handleChangeTitle = (event) => {
        const newTitle = event.target.value
        setTitleTask(newTitle)
    }

    // Method to update the description of the task
    const handleChangeDescription = (event) => {
        const newDescription = event.target.value
        setDescriptionTask(newDescription)
    }

    // Method to update the mark of the task
    const handleMark = () => {
        setMarkTask(!markTask)
    }

    // Method to handle the submit action on the form
    const handleSubmit = (event) => {
        event.preventDefault();
        addToDoList()
        setTitleTask("")
        setDescriptionTask("")
        setMarkTask(false)
    }

    return (
        <header>
            <h1>To-Do Web Application</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="task-title-input">Task Title:</label>
                <input id='task-title-input' value={titleTask} onChange={handleChangeTitle} type="text" placeholder='Eat lunch, do laundry...' />
                <label htmlFor="task-description-input">Task Description:</label>
                <input id='task-description-input' value={descriptionTask} onChange={handleChangeDescription} type="text" placeholder='Go to the restaurant at 13:00, Do not forget the special soap...' />
                <div className='check-box'>
                    <label htmlFor="task-mark-input">Is completed? </label>
                    <input id='task-mark-input' checked={markTask} onChange={handleMark} type="checkbox" />
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </header>
    )
}
