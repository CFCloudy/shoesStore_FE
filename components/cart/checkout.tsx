import { Steps } from "antd";
import { WrapperProfile } from "../profiles-user/profiles-tyled";
import { useState } from "react";
import { Cart } from "./cart";

export const CheckOut = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const description = "ok";
  return (
    <WrapperProfile>
      <Steps
        current={current}
        onChange={onChange}
        style={{ width: "60%" }}
        items={[
          {
            title: "Giỏ hàng",
          },
          {
            title: "Giao hàng",
          },
          {
            title: "Thanh toán",
          },
          {
            title: "Hoàn thành đơn hàng",
          },
        ]}
      />
    </WrapperProfile>
  );
};
