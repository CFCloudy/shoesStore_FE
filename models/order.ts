export interface IPayloadOrder {
  userID: number;
  total: number;
  status: number;
  orderCode: string;
  listItems: [
    {
      variantID: number;
      variantName: string;
      productId: number;
      quantity: number;
      price: number;
      subTotal: number;
    }
  ];
  shippingDetails: {
    shippingName: string;
    shippingAddress: string;
    shippingPhone: string;
    orderNote: string;
    status: number;
    shippingId?: number;
  };
}
export interface IUpdateStatusOrder {
  uId: number;
  status: number;
  idBoss?: number;
}
export interface IAddToCart {
  userId: number;
  cartItemDTOs: [
    {
      ProductVariantId: number;
      quantity: number;
      price: number;
    }
  ];
}

export interface IUpdateCart {
  cartItemId: number;
  cartItemDTO: [
    {
      quantity: number;
      id: number;
    }
  ];
}

export interface IInitStateOrder {
  loading: boolean;
  error: boolean;
  cart: ICartResponse;
}
export interface IFilterOrder {
  userId?: number;
  orderCode?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;
}

export interface IFilterPhieuGiaHang {
  userId?: number;
  orderCode?: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;
}
export interface ICartResponse {
  payload: {
    id: number;
    userId: number;
    totalItem: number;
    cartItemDTOs: [
      {
        id: number;
        cartId: number;
        productVariantId: number;
        variantName: string;
        description: string;
        image: string;
        price: number;
        quantity: number;
      }
    ];
  };
}
