import axios from "axios";
import Cookies from "js-cookie";

export const axiosClient = axios.create({
    baseURL: "http://localhost/api/v1/"
});
axiosClient.interceptors.request.use((config) => {
    const token = Cookies.get("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});