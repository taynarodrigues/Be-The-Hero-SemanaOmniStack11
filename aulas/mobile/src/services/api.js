import axios from 'axios';

const api = axios.create({
    baseURL: 'http://exp://192.168.0.27:3333'
});

export default api;