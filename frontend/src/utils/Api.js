const axios = require("axios");

const domain = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: domain,
});

export function fetchTicketsApi(data) {
  return axiosInstance.get(`/help/tickets`, data);
}
