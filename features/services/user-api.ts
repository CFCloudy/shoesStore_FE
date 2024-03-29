import {
  IChangePassWord,
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
  IUpdateProfiles,
} from "@/models/user";
import axiosClient from "./axios-client";

class UserApi {
  userSigIn(payload: ILoginPayload) {
    return axiosClient({
      method: "post",
      url: "/api/Authentication/login",
      data: payload,
    });
  }
  userRefreshToken(payload: IPayloadRefresToken) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/refresh-token",
      data: payload,
    });
  }
  userRegister(payload: IRegisterPayload) {
    return axiosClient({
      method: "post",
      url: "/api/Authentication/register",
      data: payload,
    });
  }
  // sendOTP(payload:)
  userConfirmOTP(payload: IConfirmOTP) {
    return axiosClient({
      method: "post",
      url: "/api/Authentication/confirm-otp",
      data: payload,
    });
  }
  userLogout(payload: ILogoutPayload) {
    return axiosClient({
      method: "post",
      url: `/api/Authentication/revoke?id=${payload.id}`,
      data: payload,
    });
  }
  reSendOTP(payload: IResendOTP) {
    return axiosClient({
      method: "post",
      url: "/api/Authentication/resend-otp",
      data: payload,
    });
  }
  forgotpass(payload: IForgotPass) {
    return axiosClient({
      method: "post",
      url: `/api/Authentication/forgotpass?email=${payload}`,
      data: payload,
    });
  }
  getListAddress(payload: any) {
    return axiosClient({
      method: "get",
      url: "/api/Address/get-book-address",
      params: payload,
    });
  }

  updateProfiles(payload: IUpdateProfiles) {
    return axiosClient({
      method: "put",
      url: "/api/User/update-profiles",
      data: payload,
    });
  }

  createAddress(payload: ICreateAddress) {
    return axiosClient({
      method: "post",
      url: `/api/Address/create-address`,
      data: payload,
    });
  }

  updateAddress(payload: IUpdateAddress) {
    return axiosClient({
      method: "put",
      url: `/api/Address/update-address`,
      data: payload,
    });
  }

  getAddressDetails(payload: IGetAddressDetails) {
    return axiosClient({
      method: "get",
      url: `/api/Address/get-address-detail?id=${payload.id}`,
      data: payload,
    });
  }

  removeAdress(payload: IGetAddressDetails) {
    return axiosClient({
      method: "delete",
      url: `/api/Address/delete-address-detail?id=${payload.id}`,
      data: payload,
    });
  }
  changePassword(payload: IChangePassWord) {
    return axiosClient({
      method: "post",
      url: `/api/Authentication/changepass`,
      data: payload,
    });
  }
}

export default new UserApi();
