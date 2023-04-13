import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";

export const SendOTP = () => {
  return (
    <WrapperAuthen>
      <h2>Nhập mã xác nhận</h2>
      <p>Vui lòng nhập mã xác nhận để tiếp tục.</p>
      <div className="form">
        <Form layout="vertical">
          <Form.Item
            label="Mã OTP"
            name={"email"}
            required
            rules={[
              {
                type: "email",
                message: "Email bạn vừa nhập không hợp lệ",
              },
            ]}
          >
            <Input className="signin"></Input>
          </Form.Item>
          <p>
            Bạn không nhận được mã OTP? <Button type="link">Gửi lại</Button>
          </p>
          <br />
          <ButtonBlack onClick={() => Router.push("/auth/confirm-password")}>
            Xác nhận
          </ButtonBlack>
        </Form>
      </div>
    </WrapperAuthen>
  );
};
