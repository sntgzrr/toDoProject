import { API_URL } from '../../config.js';
import axios from 'axios';

export const deleteTask = async ({ taskId }) => {
    try {
        const response = await axios.delete(`${API_URL}/${taskId}`);
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        return response.data; 
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error; 
    }
}
