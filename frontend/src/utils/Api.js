//Author: Jay Patel (B00881906)
const axios = require("axios");

const port = process.env.PORT || 8080;

const backEndUrl =
  process.env.REACT_APP_BACKEND_HOSTNAME || "https://dalffins.herokuapp.com";

const domain = `${backEndUrl}`;

const axiosInstance = axios.create({
  baseURL: domain,
});

export function fetchTicketsApi(data) {
  return axiosInstance.get(`/help/tickets`, data);
}

export function fetchAllTicketsApi() {
  return axiosInstance.get(`/help/admin/tickets`);
}

export function updateTicketApi(ticket) {
  return axiosInstance.put(`/tickets/${ticket.id}`, ticket);
}

export function saveTicketApi(data) {
  return axiosInstance.post(`/help/tickets`, data);
}

export function saveUser(data, header) {
  return axiosInstance.post(`/user/signUp`, data, header);
}

export function validateLogin(data, header) {
  return axiosInstance.post(`/user/login`, data, header);
}

export function fetchUserProfile(userId, header) {
  return axiosInstance.get(`/user/userProfile/${userId}`, header);
}

export function updateUserProfile(userId, data, header) {
  return axiosInstance.put(`/user/updateProfile/${userId}`, data, header);
}

export function deleteUserProfile(userId) {
  return axiosInstance.delete(`/user/deleteProfile/${userId}`);
}

export function emailCheck(data, header) {
  return axiosInstance.post(`/user/emailCheck`, data, header);
}

export function resetPassword(data, header) {
  return axiosInstance.put(`/user/resetPassword`, data, header);
}
