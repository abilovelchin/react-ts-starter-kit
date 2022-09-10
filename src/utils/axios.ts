// import { logout } from "$services/auth.service";
import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("starter:token"),
  },
});

request.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    // Not Authorization
    if (error.response.status == "401") {
      // logout();
    }

    return Promise.reject(error);
  }
);

export default request;
