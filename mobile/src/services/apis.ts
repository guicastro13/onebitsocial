import axios, { AxiosInstance } from "axios";
import { API_BASE_AUTH } from "@env";

export const APIUsers: AxiosInstance = axios.create({
  baseURL: `${API_BASE_AUTH}`,
});
// export const APIGoogle = axios.create({
//   baseURL: ,
// });
// export const APILinkedin = axios.create({
//   baseURL: ,
// });
// export const APIGithub = axios.create({
//   baseURL: ,
// });
