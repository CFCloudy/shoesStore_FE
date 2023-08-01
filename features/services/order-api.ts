import { IAddToCart, IFilterOrder, IPayloadOrder } from "@/models/order";
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

  addToCart(payload: IAddToCart) {
    return axiosClient({
      method: "post",
      url: "/api/Cart",
      data: payload,
    });
  }

  getCart(payload: any) {
    return axiosClient({
      method: "get",
      url: `/api/Cart?userId=${payload}`,
      data: payload,
    });
  }
  getListOrder(payload: IFilterOrder) {
    return axiosClient({
      method: "post",
      url: `api/Orders/GetAll`,
      data: payload,
    });
  }
}

export default new OrderApi();
