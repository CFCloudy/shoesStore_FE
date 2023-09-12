import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import { Button, Form, Input, message } from "antd";
import Router, { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { WrapperAuthen } from "../auth-styled";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { selectUser, userResendOTP, userSignin } from "@/features/user-slice";
import { ILoginPayload, IResendOTP } from "@/models/user";
import { error } from "console";
import { BtnVetify, ModelWrapper, WrapperFooter } from "@/components/dialog_size/dialog_size_styled";
import { CloseCircleOutlined } from "@ant-design/icons";

export enum MessageErrorSignin {
  NOTFOUND = "Sai tên đăng nhập hoặc mật khẩu",
  INCORRECT_PASSWORD = "Mật khẩu bạn vừa nhập không đúng, vui lòng thử lại.",
  CONTENT_NOTACTIVE1 = "Nếu là bạn, để đăng nhập vui lòng",
  CONTENT_NOTACTIVE2 = "click button dưới thực hiện",
  CONTENT_NOTACTIVE3 = "xác thực tài khoản",
  TIITLE = "Thông báo",
  BUTTONVERIFY = "Xác thực tài khoản",
  EXIST = "đã tồn tại trong hệ thống!",
}
export const ValidateNotActiveAccount = (email: string) => {
  return `Tài khoản [${email}] đã được tạo`;
};
export const SignIn = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectUser);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
const [idUser,setIdUser]=useState<string>('')
  const showModalActiveAccount = () => {
    setIsModalVisible(true);
  };
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
        if(error.message=="Bạn chưa confirm OTP"){
          setIdUser(error.payload.id)
          showModalActiveAccount();
        }
      });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSendOtp = () => {
    let payload: IResendOTP = {
      UserId: idUser,
    };
    dispatch(userResendOTP(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        router.push({
          pathname: "/auth/send-otp",
        });
      });
  };

  return (
    <WrapperAuthen>
      <h2>Bạn đã có tài khoản?</h2>
      <p>Nếu bạn có tài khoản, hay đăng nhập bằng địa chỉ email của bạn.</p>
      <div className="form">
        <Form layout="vertical" onFinish={handllerlogin}>
          <Form.Item label="Email" name={"email"}>
            <Input className="signin"></Input>
          </Form.Item>
          <Form.Item label="Mật khẩu" name={"password"}>
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
      <ModelWrapper
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        title={MessageErrorSignin.TIITLE}
        closeIcon={<CloseCircleOutlined />}
        width={"450px"}
        footer={
          <WrapperFooter>
            <BtnVetify
              // loading={loadingSendOtp}
              onClick={handleSendOtp}
              loading={loading}
            >
              {MessageErrorSignin.BUTTONVERIFY}
            </BtnVetify>
          </WrapperFooter>
        }
      >
        <div className="wrappcontent">
          <div>{ValidateNotActiveAccount(form.getFieldValue("userName"))}</div>
          <div>{MessageErrorSignin.CONTENT_NOTACTIVE1}</div>
          <div>{MessageErrorSignin.CONTENT_NOTACTIVE2}</div>
          <div>{MessageErrorSignin.CONTENT_NOTACTIVE3}</div>
        </div>
      </ModelWrapper>
    </WrapperAuthen>
  );
};

