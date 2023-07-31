import { IPayloadOrder } from "@/models/order";
import axiosClient from "./axios-client";
import { IFilterData } from "@/models/product";

class OrderApi {
  createrOrder(payload: IPayloadOrder) {
    return axiosClient({
      method: "post",
      url: "/api/Orders/Create?isShip=false",
      data: payload,
    });
  }
  getOrderByUserId(payload: any) {
    return axiosClient({
      method: "get",
      url: `/api/Orders/GetOrdersByUserId?uId=${payload}`,
      data: payload,
    });
  }

  getListVoucher() {
    return axiosClient({
      method: "get",
      url: `/api/Voucher`,
    });
  }
}

export default new OrderApi();
