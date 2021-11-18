import axios from "axios";

// const baseURL = "https://localhost:5000";

const axiosInstance = axios.create({ baseURL: "https://medi4allbackend-grumpy-gnu-dj.eu-de.mybluemix.net/" });

export default axiosInstance;
