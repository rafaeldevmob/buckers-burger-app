import axios from "axios";

export const URL_BASE = 'http://10.0.2.2:3000';

export const api = axios.create({
  baseURL: URL_BASE,
});

