import axios from "axios"
export const axiosClient = axios.create({
    baseURL: import.meta.env.API_URL || "http://localhost:3000/v1",
    withCredentials: true,
})
axiosClient.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("chat-app-auth-token")
    if (authToken) {
        config.headers.set('Authorization', `Bearer ${authToken}`);
    }
    return config;
})
axiosClient.interceptors.response.use((response) => response, (error) => {
    const status = error.status
    if (status == 401) {
        window.location.href = "/auth/login"
        localStorage.removeItem("chat-app-auth-token")
    }
    return Promise.reject(error)
})