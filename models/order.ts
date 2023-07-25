export interface IPayloadOrder {
  userID: number;
  total: number;
  status: number;
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
  shippingDetails: [
    {
      shippingName: number;
      shippingAddress: number;
      shippingPhone: number;
      orderNote: number;
      status: number;
    }
  ];
}
