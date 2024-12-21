import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Your backend URL

// Axios instance for general requests
export default axios.create({
  baseURL: BASE_URL,
});

// Axios instance for private requests (with Authorization header)
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // Ensure cookies are included for private requests
});
