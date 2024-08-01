import { API_URL } from '../../config.js';
import axios from 'axios';

export const getTask = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        console.error('Error fetching tasks:', error)
    }
}
