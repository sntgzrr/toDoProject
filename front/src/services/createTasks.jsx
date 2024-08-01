import { API_URL } from '../../config.js';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const createTasks = async ({ titleTask, descriptionTask, markTask }) => {
    // v4 library initialization
    uuidv4();
    const newTask = { id: uuidv4(), title: titleTask, description: descriptionTask, completed: markTask }

    try {
        const response = await axios.post(API_URL, newTask)
        return response.data
    } catch (error) {
        console.error('Error creating task:', error)
    }
}
