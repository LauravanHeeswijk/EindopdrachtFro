import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Api-Key": import.meta.env.VITE_API_KEY,
    },
});

export default apiClient;
