import axios from "axios";

const api = axios.create({
    baseURL: "http://10.10.0.210:8000/api",
});

export default api;
