import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

const customers = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: { Accept: "*/*", "Content-Type": "application/json;charset=utf-8" },
});

// for using authentication with tokens
// apiLcrd.interceptors.request.use((config) => {
//   const token = window.sessionStorage.getItem("token");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

export default {
  customers,
};
