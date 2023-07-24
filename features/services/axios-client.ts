// import { ILoginResponse, IRefreshTokenResponse } from "@/models/user";
import axios from "axios";
// import config from "../../config";
import { store } from "../../app/store";
// import { IRefreshTokenResponse } from "@/models/user";
import { userRefreshToken } from "../user-slice";
// import { userRefreshToken } from "../user-slice";
const storage =
  typeof window !== "undefined" ? localStorage.getItem("u") : undefined;
let AccessToken = "";
let RefreshToken = "";
if (storage) {
  let loginInfo = JSON.parse(storage);
  if (loginInfo) {
    AccessToken = loginInfo.Payload?.AccessToken;
    RefreshToken = loginInfo.Payload?.RefreshToken;
  }
}

const axiosClient = axios.create({
  baseURL: "https://localhost:44311",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      storage ? JSON.parse(storage).payload?.accessToken : null
    }`,
  },
});

// axiosClient.interceptors.request.use(
//     function (config) {
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);

//     }
// )
axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const response: IRefreshTokenResponse = (await userApi.userRefreshToken(refreshToken)).data;
      const response = await store.dispatch(
        userRefreshToken({ RefreshToken: RefreshToken, AccessSystem: "" })
      );
      let refreshTokenResult = response.payload;
      AccessToken = refreshTokenResult.AccessToken;
      RefreshToken = refreshTokenResult.RefreshToken;
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + refreshTokenResult.AccessToken;
      return axiosClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
