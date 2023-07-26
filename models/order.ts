export interface IPayloadOrder {
  userID: number;
  total: number;
  status: number;
  orderCode:string;
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
  shippingDetails: 
    {
      shippingName: string;
      shippingAddress: string;
      shippingPhone: string;
      orderNote: string;
      status: number;
    }
  
}
