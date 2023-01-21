import axios from "axios";

const URL = 'http://localhost:3000' || 'http://10.0.2.2:3000';

export const api = axios.create({
  baseURL: URL,
});
