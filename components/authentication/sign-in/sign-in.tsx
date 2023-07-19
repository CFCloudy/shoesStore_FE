import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input, message } from "antd";
import Router, { useRouter } from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { selectUser, userSignin } from "@/features/user-slice";
import { ILoginPayload } from "@/models/user";
import { error } from "console";

export const SignIn = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectUser);
  const handllerlogin = (data: any) => {
    const payload: ILoginPayload = { ...data };

    dispatch(userSignin(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        Router.push("/");
        message.success("Đăng nhập thành công");
      })
      .catch((error: any) => {
        message.error(error.message);
      });
  };

  return (
    <WrapperAuthen>
      <h2>Bạn đã có tài khoản?</h2>
      <p>Nếu bạn có tài khoản, hay đăng nhập bằng địa chỉ email của bạn.</p>
      <div className="form">
        <Form layout="vertical" onFinish={handllerlogin}>
          <Form.Item label="Email" name={"Email"}>
            <Input className="signin"></Input>
          </Form.Item>
          <Form.Item label="Mật khẩu" name={"Password"}>
            <Input
              type="password"
              size={"large"}
              maxLength={20}
              className="signin"
            />
          </Form.Item>
          <ButtonBlack htmlType="submit" loading={loading}>
            Đăng nhập
          </ButtonBlack>
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
