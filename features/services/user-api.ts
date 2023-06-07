import {
  IConfirmOTP,
  ILoginPayload,
  IPayloadRefresToken,
  IRegisterPayload,
  IResendOTP,
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

  reSendOTP(payload: IResendOTP) {
    return axiosClient({
      method: "post",
      url: "/api/Authenticate/confirm-otp",
      data: payload,
    });
  }
}

export default new UserApi();
