import {
  IConfirmOTP,
  ICreateAddress,
  IForgotPass,
  IGetAddressDetails,
  ILoginPayload,
  ILogoutPayload,
  IPayloadRefresToken,
  IRegisterPayload,
  IResendOTP,
  IUpdateAddress,
} from "@/models/user";
import axiosClient from "./axios-client";

class UserApi {
  userSigIn(payload: ILoginPayload) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/login",
      data: payload,
    });
  }
  userRefreshToken(payload: IPayloadRefresToken) {
    return axiosClient({
      method: "post",
      url: "/msa-identity/odata/Auth/RefreshToken",
      data: payload,
    });
  }
  userRegister(payload: IRegisterPayload) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/register",
      data: payload,
    });
  }
  // sendOTP(payload:)
  userConfirmOTP(payload: IConfirmOTP) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/confirm-otp",
      data: payload,
    });
  }
  userLogout(payload: ILogoutPayload) {
    return axiosClient({
      method: "post",
      url: `/api/Authenticate/revoke/${payload.id}`,
      data: payload,
    });
  }
  reSendOTP(payload: IResendOTP) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/confirm-otp",
      data: payload,
    });
  }
  forgotpass(payload: IForgotPass) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/forgotpass",
      data: payload,
    });
  }
  getListAddress(payload: any) {
    return axiosClient({
      method: "get",
      url: "/api/BookAddress/get-book-address",
      params: payload,
    });
  }

  createAddress(payload: ICreateAddress) {
    return axiosClient({
      method: "post",
      url: `/api/BookAddress/create-address`,
      data: payload,
    });
  }

  updateAddress(payload: IUpdateAddress) {
    return axiosClient({
      method: "put",
      url: `/api/BookAddress/update-address`,
      data: payload,
    });
  }

  getAddressDetails(payload: IGetAddressDetails) {
    return axiosClient({
      method: "get",
      url: `/api/BookAddress/get-address-detail?id=${payload.id}`,
      data: payload,
    });
  }

  removeAdress(payload: IGetAddressDetails) {
    return axiosClient({
      method: "delete",
      url: `/api/BookAddress/delete-address-detail?id=${payload.id}`,
      data: payload,
    });
  }
}

export default new UserApi();
