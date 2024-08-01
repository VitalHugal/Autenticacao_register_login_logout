import axios from "axios";

const api = axios.create({
    baseURL: "http://10.10.0.210:8000/api",
    headers: {
        "Accept": "application/json",
    }
});

// Adicionar um interceptor para incluir o token nas requisições
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        // console.log(token);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
