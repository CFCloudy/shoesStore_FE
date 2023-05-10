import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";

export const SignUp = () => {
  return (
    <WrapperAuthen>
      <h2>Đăng ký bằng tài khoản Email của bạn</h2>

      <div className="form">
        <Form layout="vertical">
          <Form.Item label="Họ tên" 
            name={'fullname'}
            rules={[
              {
                required:true,
                message:'Họ tên không được để trống'
              },
            ]}
          >
            <Input className="signin"></Input>
          </Form.Item>
          <Form.Item label="Email"
            name={'email'}
            rules={[
              {
                required:true,
                message:'Email không được để trống!'
              },
              {
                type:'email',
                message:'Email bạn nhập không hợp lệ! Vui lòng thử lại.'
              }
            ]}
          >
            <Input type="e" size={"large"} maxLength={20} className="signin" />
          </Form.Item>
          <Form.Item
            name="passWord"
            label="Mật khẩu"
            rules={[
              { required: true, message: "Mật khẩu không được để trống" },
              { min: 8, message: "Độ dài của mật khẩu phải lớn hơn 8" },
              { max: 20, message: "Độ dài tối đa của mật khẩu là 20" },
              {
                pattern: new RegExp(
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*?[#?!@$%^&*-])[A-Za-zd@$!+-=#%*()^?&]{8,}$"
                ),
                message: (
                  <div>
                    Mật khẩu không hợp lệ
                    <ul className="cssValidation">
                      <li>
                        Sử dụng ít nhất 8 ký tự, gồm chữ thường, in hoa, chữ số,
                        ký tự đặc biệt
                      </li>
                    </ul>
                  </div>
                ),
              },
            ]}
            hasFeedback
          >
            <Input
              type="password"
              placeholder="Password"
              size={"large"}
              maxLength={20}
              className="signin"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassWord"
            label="Xác nhận mật khẩu"
            dependencies={["passWord"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Xác nhận mật khẩu không chính xác.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("passWord") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Xác nhận mật khẩu không chính xác.")
                  );
                },
              }),
            ]}
          >
            <Input type="e" size={"large"} maxLength={20} className="signin" />
          </Form.Item>
          <ButtonBlack >Đăng ký</ButtonBlack>
          <span className="forgot"  onClick={() => Router.push("/auth/forgot-password")}>Quên mật khẩu?</span>
        </Form>
      </div>
      <br />
      <h2>Bạn đã có tài khoản?</h2>
      <p>Nếu bạn có tài khoản, hay đăng nhập bằng địa chỉ email của bạn.</p>
      <div className="form">
        <ButtonBlack onClick={() => Router.push("/auth/sign-in")}>
          Đăng nhập
        </ButtonBlack>
      </div>
    </WrapperAuthen>
  );
};
