import { selectUser } from "@/features/user-slice";
import {
  CameraOutlined,
  CloseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row, Image, Upload } from "antd";
import { useEffect, useState } from "react";
import { BoxImage, BoxInfoUser, UploadCustom } from "./profiles-tyled";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { uploadFile } from "@/features/product-slice";
import { useSelector } from "react-redux";
const storage =
  typeof window !== "undefined" ? localStorage.getItem("u") : undefined;

export const Profile = () => {
  const [data, setData] = useState<any>();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const [media, setMedia] = useState<any>();
  const { loginInfo } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleonsubmit = (values: any) => {
    console.log("valu", values);
  };
  const handleChange = (options: any) => {
    const { onSuccess, onError, file } = options;
    if (file) {
      let formData = new FormData();
      let files = file;
      formData.append("file", files);
      dispatch(uploadFile(formData))
        .unwrap()
        .then()
        .then((res) => {
          setMedia(null);
          setMedia(res.payload);
          onSuccess("Ok");
        })
        .catch((error: any) => {});
    }
  };

  const handleDeleteMedia = () => {
    setMedia("");
  };
  console.log("object", loginInfo.payload);
  useEffect(() => {
    setFieldsValue(loginInfo.payload);
  }, []);
  return (
    <div>
      <BoxInfoUser>
        <div className="info">Thông tin tài khoản</div>
        <Form
          className="form"
          scrollToFirstError
          labelAlign="left"
          labelCol={{ flex: "152px" }}
          wrapperCol={{ span: 24 }}
          onFinish={handleonsubmit}
          form={form}
        >
          <Form.Item label="Email" name={"email"}>
            <Input readOnly placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Họ tên"
            name={"fullName"}
            rules={[{ required: true, message: "Họ không được để trống" }]}
          >
            <Input placeholder="Họ" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name={"phoneNumber"}
            rules={[{ required: true, message: "Tên không được để trống" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item label="Giới tính" name={"userName"}>
            <Input />
          </Form.Item>
          <Form.Item label="Avartar" name={"avartar"}>
            {media ? (
              <BoxImage>
                <Image src={media.url} width={"130px"} height={"130px"} />
                <CloseCircleOutlined
                  className="icon"
                  onClick={handleDeleteMedia}
                />
              </BoxImage>
            ) : (
              <UploadCustom
                customRequest={handleChange}
                multiple={true}
                showUploadList={false}
              >
                <CameraOutlined
                  style={{
                    fontSize: "20px",
                    color: "#ffff",
                    marginTop: "8px",
                  }}
                />
              </UploadCustom>
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Chỉnh sửa thông tin
          </Button>
        </Form>
      </BoxInfoUser>
    </div>
  );
};
