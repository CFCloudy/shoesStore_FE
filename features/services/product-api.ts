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

class ProductApi {
  getListColor() {
    return axiosClient({
      method: "get",
      url: "/api/ColorControllerAPI",
      // params: ,
    });
  }
  getListBrands() {
    return axiosClient({
      method: "get",
      url: "/api/BrandControllerAPI",
      // params: ,
    });
  }
  getListFeature() {
    return axiosClient({
      method: "get",
      url: "/api/FeatureControllerAPI",
      // params: ,
    });
  }
  getListSize() {
    return axiosClient({
      method: "get",
      url: "/api/SizeControllerAPI",
      // params: ,
    });
  }
  getListStyles() {
    return axiosClient({
      method: "get",
      url: "/api/StyleControllerAPI",
      // params: ,
    });
  }
}

export default new ProductApi();
