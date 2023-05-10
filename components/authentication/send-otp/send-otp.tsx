import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";

export const SendOTP = () => {

  const onSubmit=(value:any)=>{
    Router.push("/auth/confirm-password")
  }

  return (
    <WrapperAuthen>
      <h2>Nhập mã xác nhận</h2>
      <p>Vui lòng nhập mã xác nhận để tiếp tục.</p>
      <div className="form">
        <Form layout="vertical"
              onFinish={onSubmit}
        >
          <Form.Item
            label="Mã OTP"
            name={"email"}
            required
            rules={[
              {
                type: "number",
                message: "Mã Otp bạn nhập không hợp lệ!",
              },
              {
                required:true,
                message:'Mã Otp không được để trống!'
              }
            ]}
          >
            <Input className="signin" minLength={5} maxLength={5}></Input>
          </Form.Item>
          <p>
            Bạn không nhận được mã OTP? <Button type="link">Gửi lại</Button>
          </p>
          <br />
          <ButtonBlack htmlType="submit">
            Xác nhận
          </ButtonBlack>
        </Form>
      </div>
    </WrapperAuthen>
  );
};
