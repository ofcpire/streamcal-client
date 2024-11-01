import axios from 'axios';
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

export default api;
