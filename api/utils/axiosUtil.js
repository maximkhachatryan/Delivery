import axios from "axios";

const api = axios.create({
    baseURL: 'https://1865-46-36-117-209.ngrok-free.app/api',
    timeout: 10000
});

export default api;