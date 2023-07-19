import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input, message } from "antd";
import Router from "next/router";
import { Fragment, useState } from "react";
import { WrapperAuthen } from "../auth-styled";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { confirmOTP, selectUser, userResendOTP } from "@/features/user-slice";
import { IConfirmOTP, IResendOTP } from "@/models/user";

export const SendOTP = () => {
  const dispatch = useAppDispatch();
  const { loading, register } = useAppSelector(selectUser);
  let countDountS = 61;
  const [initSecond, setInitSecond] = useState<number>(0);

  const onSubmit = (value: any) => {
    console.log(register);
    const payload: IConfirmOTP = {
      UserId: "adbe8aac-5c27-43c6-8540-946d4465a2b5",
      Code: value.Code,
    };
    console.log(payload);
    dispatch(confirmOTP(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        if (register) {
          message.success("Chúc mừng bạn đăng ký thành công");
        } else {
        }
      })
      .catch((error: any) => {
        message.error(error.Message);
      });
  };

  const handleResendOTP = (values: any) => {
    let payload: IResendOTP = {
      UserId: register.payload.UserId,
    };
    dispatch(userResendOTP(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        const intervalId = setInterval(() => {
          countDountS = countDountS - 1;
          setInitSecond(countDountS);
          if (!countDountS) {
            clearInterval(intervalId);
            countDountS = 61;
          }
        }, 1000);
      });
  };

  return (
    <WrapperAuthen>
      <h2>Nhập mã xác nhận</h2>
      <p>Vui lòng nhập mã xác nhận để tiếp tục.</p>
      <div className="form">
        <Form layout="vertical" onFinish={onSubmit}>
          <Form.Item
            label="Mã OTP"
            name={"Code"}
            required
            rules={[
              // {
              //   type: "number",
              //   message: "Mã Otp bạn nhập không hợp lệ!",
              // },
              {
                required: true,
                message: "Mã Otp không được để trống!",
              },
            ]}
          >
            <Input className="signin" minLength={6} maxLength={6}></Input>
          </Form.Item>
          <p>
            Bạn không nhận được mã OTP?{" "}
            <Button
              type="link"
              onClick={handleResendOTP}
              disabled={initSecond > 0}
            >
              Gửi lại {initSecond == 0 ? "" : "(" + initSecond}
              {initSecond == 0 ? "" : "s)"}
            </Button>
          </p>
          <br />
          <ButtonBlack htmlType="submit" loading={loading}>
            Xác nhận
          </ButtonBlack>
        </Form>
      </div>
    </WrapperAuthen>
  );
};
