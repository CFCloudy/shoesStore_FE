import {
  IAddToCart,
  IFilterOrder,
  IFilterPhieuGiaHang,
  IPayloadOrder,
} from "@/models/order";
import axiosClient from "./axios-client";
import { IFilterData } from "@/models/product";

class OrderApi {
  createrOrder(payload: IPayloadOrder) {
    return axiosClient({
      method: "post",
      url: "/api/Orders/Create?isShip=true",
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
  getOrderLog(payload: any) {
    return axiosClient({
      method: "get",
      url: `api/Orders/GetUseLog?orderId=${payload}`,
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

  removeItemCart(payload: any) {
    return axiosClient({
      method: "delete",
      url: `/api/Cart`,
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

  getOrderById(payload: any) {
    return axiosClient({
      method: "get",
      url: `/api/Orders/GetOrderItemsById?orderId=${payload}`,
      data: payload,
    });
  }

  getListPhieuGiaoHang(payload: IFilterPhieuGiaHang) {
    return axiosClient({
      method: "post",
      url: `api/Orders/GetAllPhieuGiaoHang`,
      data: payload,
    });
  }
}

export default new OrderApi();

export interface IRemoveItem {
  id: number;
  cartId: number;
  productVariantId: number;
  variantName: string;
}
