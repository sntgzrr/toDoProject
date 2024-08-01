import { TasksContext } from '../context/tasks.jsx';
import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

// This component creates the Form element
export function Form() {
    // v4 library initialization
    uuidv4();

    // Task states
    const [titleTask, setTitleTask] = useState("")
    const [descriptionTask, setDescriptionTask] = useState("")
    const [markTask, setMarkTask] = useState(false)
    const { taskList, setTaskList } = useContext(TasksContext)

    // Method to add a Task to the list
    const addToDoList = () => {
        const newTask = { id: uuidv4(), title: titleTask, description: descriptionTask, completed: markTask }
        setTaskList([...taskList, newTask])
    }

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
