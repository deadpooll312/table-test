import axios from "axios";
const baseURL = "https://poloniex.com/public";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
