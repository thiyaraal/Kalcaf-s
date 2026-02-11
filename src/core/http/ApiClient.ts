import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/kalcaf",
});

export const apiClient2 = axios.create({
  baseURL: "https://dummyjson.com",
});
