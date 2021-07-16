const axios = require("axios");

const domain = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: domain,
});

export function fetchTicketsApi(data) {
  return axiosInstance.get(`/help/tickets`, data);
}

export function fetchAllTicketsApi() {
  return axiosInstance.get(`/help/admin/tickets`);
}

export function saveTicketApi(data) {
  return axiosInstance.post(`/help/tickets`, data);
}
