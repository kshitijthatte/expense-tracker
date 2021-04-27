import { API } from "../backend";
import axios from "axios";

export const addTransaction = (userId, token, transactionData) => {
  return axios
    .post(`${API}/transactions/${userId}/add/`, transactionData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((err) => err.response.data);
};

export const getTransaction = (userId, token) => {
  return axios
    .get(`${API}/transactions/${userId}/transactions/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((err) => err.response.data);
};

export const getAllTransactions = (userId, token) => {
  return axios
    .get(`${API}/transactions/${userId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data)
    .catch((err) => err.response.data);
};
