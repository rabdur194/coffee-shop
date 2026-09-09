import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITEA_API_URL,
  headers: {
    "Content-Type": "apllication/json",
  },
});
export default api;
