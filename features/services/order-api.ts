import {
  IAddToCart,
  IFilterOrder,
  IFilterPhieuGiaHang,
  IPayloadOrder,
  IUpdateCart,
  IUpdateStatusOrder,
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
  getListVoucher(payload: any) {
    return axiosClient({
      method: "get",
      url: `api/Voucher/GetVoucherByUserId?uid=${payload}`,
      data: payload,
    });
  }

  addToCart(payload: IAddToCart) {
    return axiosClient({
      method: "post",
      url: "/api/Cart",
      data: payload,
    });
  }

  useVoucher(payload: any) {
    return axiosClient({
      method: "post",
      url: "/api/VouchersUseLog",
      data: payload,
    });
  }
  updateStatusOrder(payload: IUpdateStatusOrder) {
    return axiosClient({
      method: "put",
      url: `/api/Orders/UpdateTrangThai?uid=${payload.uId}&status=${payload.status}&idBoss=${payload.idBoss}`,
      data: payload,
    });
  }

  updateCart(payload: IUpdateCart) {
    return axiosClient({
      method: "put",
      url: `/api/Cart/${payload.cartItemId}`,
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
