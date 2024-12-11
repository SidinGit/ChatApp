import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.Mode === "development" ? "http://localhost:5001/api/v1" : "/api/v1",
    withCredentials: true, //^ allows to send cookies with requests
});
