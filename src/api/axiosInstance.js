import axios from "axios";

// const baseURL = "http://localhost:5000";
const baseURL = "https://medi4allbackend-lean-eland-cc.eu-de.mybluemix.net"
const headers = {
  "Content-Type": "application/json",
};
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers
});

export default axiosInstance;
