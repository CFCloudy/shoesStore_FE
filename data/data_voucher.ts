export interface IDiscount {
  endDate: Date;
  maxValue: number;
  minValue: number;
  nameVoucher: string;
  quantity: number;
  startDate: Date;
  status: boolean;
  tLimitQuantity: string;
  value: string;
  voucherId: string;
  unit: boolean;
}

export const data_voucher: IDiscount[] = [
  {
    endDate: new Date("07/20/2023"),
    maxValue: 10000,
    minValue: 90000,
    nameVoucher: "GGXJDJS09",
    quantity: 12,
    startDate: new Date("07/18/2023"),
    status: true,
    tLimitQuantity: "",
    unit: true,
    value: "3",
    voucherId: "1",
  },
  {
    endDate: new Date("07/20/2023"),
    maxValue: 100000,
    minValue: 90000,
    nameVoucher: "GGXJDJS09",
    quantity: 12,
    startDate: new Date("07/18/2023"),
    status: true,
    tLimitQuantity: "",
    unit: false,
    value: "100000",
    voucherId: "2",
  },
];
