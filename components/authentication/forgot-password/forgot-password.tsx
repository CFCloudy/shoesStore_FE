import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input, message } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { useForm } from "antd/es/form/Form";
import { selectUser, userForgotPass } from "@/features/user-slice";

export const ForgotPassWord = () => {
  const dispatch = useAppDispatch();
  const {loading}=useAppSelector(selectUser)
  const [form]=Form.useForm();
  const onSubmit = (value: any) => {
    
    dispatch(userForgotPass(value.email)).unwrap().then().then((res:any)=>{
      Router.push("/auth/send-otp");
    }
    ).catch((e:any)=>{
      message.error(e.message)
    })
  };

  return (
    <WrapperAuthen>
      <h2>Quên mật khẩu?</h2>
      <p>Vui lòng nhập địa chỉ email bạn đã đăng ký để lấy lại mật khẩu.</p>
      <div className="form">
        <Form layout="vertical" onFinish={onSubmit} form={form}>
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
          <ButtonBlack htmlType="submit" loading={loading}>Lấy lại mật khẩu</ButtonBlack>
        </Form>
      </div>
    </WrapperAuthen>
  );
};
