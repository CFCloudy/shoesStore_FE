import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input } from "antd";
import Router from "next/router";
import { Fragment } from "react";
import { WrapperAuthen } from "../auth-styled";
import { LockOutlined } from "@ant-design/icons";

export const ConfirmPassword = () => {
  return (
    <WrapperAuthen>
      <h2>Đổi mật khẩu?</h2>
      <p>Vui lòng nhập mật khẩu mới để đổi lại mật khẩu.</p>
      <div className="form">
        <Form layout="vertical">
          <Form.Item
            name="password"
            label=""
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
              { min: 8, message: "Mật khẩu phải có độ dài tối thiểu là 8" },
              {
                pattern: new RegExp(
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                ),
                message:
                  "Mật khẩu phải chứa ít nhất một chữ cái thường, chữ hoa, số và ký tự đặc biệt",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật khẩu mới"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label=""
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu của bạn!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Hai mật khẩu bạn đã nhập không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Nhập lại mật khẩu"
            />
          </Form.Item>
          <ButtonBlack onClick={() => Router.push("/auth/send-otp")}>
            Xác nhận
          </ButtonBlack>
        </Form>
      </div>
    </WrapperAuthen>
  );
};
