import axios from "axios";

export const HttpClientMirage = axios.create({
  baseURL: "http://localhost:3000/api",
});
