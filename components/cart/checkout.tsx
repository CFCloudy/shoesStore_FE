import { Col, Row, Steps } from "antd";
import { WrapperProfile } from "../profiles-user/profiles-tyled";
import { useState } from "react";
import { Cart } from "./cart";
import { Box, BoxBody, BoxHeader, StepsCustom } from "./cart-styled";

export const CheckOut = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const description = "ok";
  return (
    <WrapperProfile>
      <StepsCustom
        current={current}
        onChange={onChange}
        style={{ width: "60%" }}
        items={[
          {
            title: "Giỏ hàng",
          },
          {
            title: "Thanh toán",
          },
          {
            title: "Hoàn thành đơn hàng",
          },
        ]}
      />
      {current == 1 ? (
        <div>
          <Row gutter={[20, 20]}>
            <Col span={16}>
              <Box>
                <BoxHeader>
                  <div>2. Thanh toán</div>
                </BoxHeader>
                <BoxBody>
                  <div className="wpbox">
                    <div className="title">Thanh toán khi nhận hàng</div>
                    <p>
                      Phí thu hộ: 0đ . ƯU đãi về phí vận chuyển (nếu có) áp dụng
                      cả với phí thu hộ.
                    </p>
                  </div>
                  <div className="wpbox">Thanh toán bằng thẻ</div>
                </BoxBody>
              </Box>
            </Col>
          </Row>
        </div>
      ) : null}
    </WrapperProfile>
  );
};
