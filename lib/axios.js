import axios from "axios";

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_LOCALHOST,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin":
      process.env.NEXT_PUBLIC_BACKEND_URL_LOCALHOST,
  },
  withCredentials: true,
});
