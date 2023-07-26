import { IPayloadOrder } from "@/models/order";
import axiosClient from "./axios-client";
import { IFilterData } from "@/models/product";

class OrderApi {
  createrOrder(payload: IPayloadOrder) {
    return axiosClient({
      method: "post",
      url: "/api/Orders/create-order?isShip=false",
      data: payload,
    });
  }
}

export default new OrderApi();
