// src/utils/API.js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.apiurl,
  withCredentials: true, // if using cookies
});

export default API;
