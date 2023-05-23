import axios from "axios";

const api = axios.create({
    baseURL: 'https://439b-37-252-93-46.ngrok-free.app/api',
    timeout: 10000
});

export default api;