import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";

export const SignIn = () => {
  return (
    <WrapperAuthen>
      <h2>Bạn đã có tài khoản?</h2>
      <p>Nếu bạn có tài khoản, hay đăng nhập bằng địa chỉ email của bạn.</p>
      <div className="form">
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input className="signin"></Input>
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input
              type="password"
              size={"large"}
              maxLength={20}
              className="signin"
            />
          </Form.Item>
          <ButtonBlack>Đăng nhập</ButtonBlack>
          <span
            className="forgot"
            onClick={() => Router.push("/auth/forgot-password")}
          >
            Quên mật khẩu?
          </span>
        </Form>
      </div>
      <br />
      <h2>Bạn chưa có tài khoản?</h2>
      <p>
        Nếu bạn chưa có tài khoản, hay đăng ký tài khoản cho mình để nhận những
        thông báo về các sản phẩm sắp ra mắt.
      </p>
      <div className="form">
        <ButtonBlack onClick={() => Router.push("/auth/sign-up")}>
          Tạo mới tài khoản
        </ButtonBlack>
      </div>
    </WrapperAuthen>
  );
};
