import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 1000,
});

export default axiosInstance;
