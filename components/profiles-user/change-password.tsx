import { changePassword, selectUser, updateProfiles } from "@/features/user-slice";
import {
  CameraOutlined,
  CloseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row, Image, Upload, Select, message } from "antd";
import { useEffect, useState } from "react";
import { BoxImage, BoxInfoUser, UploadCustom } from "./profiles-tyled";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { uploadFile, uploadMultipleFile } from "@/features/product-slice";
const { Option } = Select;
import { useSelector } from "react-redux";
import { IChangePassWord, IUpdateProfiles } from "@/models/user";
import { ButtonBlack } from "../home-pages/home-pages-styled";
import Router from "next/router";
import { WrapperAuthen } from "../authentication/auth-styled";
const storage =
  typeof window !== "undefined" ? localStorage.getItem("u") : undefined;

export const ChangePassword = () => {
  const [data, setData] = useState<any>();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const [media, setMedia] = useState<any>([]);
  const { loginInfo,loading } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleonsubmit = (values: any) => {
    console.log(values)
    let payload:IChangePassWord={
      id:loginInfo.payload.id,
      oldPassword:values.oldPassword,
      password:values.password
    }
    dispatch(changePassword(payload)).unwrap().then().then((res:any)=>{
      message.success("Đổi mật khẩu thành công")
      Router.push('/')
    }).catch(e=>{
      message.error(e.status)
    })
  };


  useEffect(() => {
    setFieldsValue(loginInfo.payload);
  }, []);
  return (
    <div>
      <BoxInfoUser>
        <WrapperAuthen> 
        <h2>Thay đổi mật khẩu</h2>
      <div className="form">
        <Form layout="vertical" 
        onFinish={handleonsubmit}
        >
             <Form.Item
            name="oldPassword"
            label=""
            rules={[
              {
                required: true,
                message: "Mật khẩu hiện tại không được để trống",
              },
            ]}
          >
            <Input.Password className="signin" placeholder={"Mật khẩu hiện tại"} />
          </Form.Item>
          <Form.Item
            name="password"
            label=""
            rules={[
              {
                required: true,
                message: "Mật khẩu mới không được để trống",
              },
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
          >
            <Input.Password className="signin" placeholder={"Mật khẩu mới"} />
          </Form.Item>
          <Form.Item
            name="confirm"
            label=""
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Xác nhận lại mật khẩu không được để trống",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Xác nhận lại mật khẩu không đúng")
                  );
                },
              }),
            ]}
          >
            <Input.Password className="signin" placeholder={"Xác nhận mật khẩu"} />
          </Form.Item>
         
          <ButtonBlack htmlType="submit" 
          loading={loading}
          >
          Thay đổi mật khẩu
          </ButtonBlack>
        </Form>
      </div>
      <br /></WrapperAuthen>
       
      </BoxInfoUser>
    </div>
  );
};
