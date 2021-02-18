import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-gamesblog.herokuapp.com'
});

export default api;