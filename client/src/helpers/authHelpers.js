import { API } from "../backend";
import axios from "axios";

export const signup = (user) => {
  return axios
    .post(`${API}/users/signup`, user)
    .then((response) => response.data)
    .catch((err) => err.response.data);
};

export const login = (user) => {
  return axios
    .post(`${API}/login`, user)
    .then((response) => response.data)
    .catch((err) => err.response.data);
};

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return axios
      .get(`${API}/signout`)
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
