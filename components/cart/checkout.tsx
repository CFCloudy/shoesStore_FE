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
            // disabled:true
          },
          {
            title: "Hoàn thành đơn hàng",
            disabled:true
          },
        ]}
      />
      {current==1?
      <div className="info">
        
      </div>:''}
      {current==2?<div className="payment">
        <div className="">Thanh toán khi nhận hàng</div>
        <div className="">Chuyển khoản</div>
      </div>:''}
    </WrapperProfile>
  );
};
