import axios from 'axios';
const api = axios.create({
    baseURL: 'https://back-end-cadastro-lyart.vercel.app'
});

export default api;