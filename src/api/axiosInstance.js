import axios from "axios";

// const baseURL = "https://localhost:5000";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000" });

export default axiosInstance;
