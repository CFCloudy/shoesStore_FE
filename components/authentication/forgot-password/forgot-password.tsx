import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";

export const ForgotPassWord = () => {
  return (
    <WrapperAuthen>
      <h2>Quên mật khẩu?</h2>
      <p>Vui lòng nhập địa chỉ email bạn đã đăng ký để lấy lại mật khẩu.</p>
      <div className="form">
        <Form layout="vertical">
          <Form.Item
            label="Email"
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
          <ButtonBlack onClick={() => Router.push("/auth/send-otp")}>
            Lấy lại mật khẩu
          </ButtonBlack>
        </Form>
      </div>
    </WrapperAuthen>
  );
};
