import { API_URL } from '../../config.js';
import axios from 'axios';

export const updateTask = async (task) => {
    try {
        const response = await axios.put(`${API_URL}/${task.id}`, task);
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
}
