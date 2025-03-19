import axios from "axios"
export const axiosClient = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3000",
    withCredentials: true
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
    }
    return Promise.reject(error)
})