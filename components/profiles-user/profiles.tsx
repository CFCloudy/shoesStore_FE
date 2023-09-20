import { selectUser, updateProfiles } from "@/features/user-slice";
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
import { IUpdateProfiles } from "@/models/user";
const storage =
  typeof window !== "undefined" ? localStorage.getItem("u") : undefined;

export const Profile = () => {
  const [data, setData] = useState<any>();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const [media, setMedia] = useState<any>([]);
  const { loginInfo } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleonsubmit = (values: any) => {

    let payload:IUpdateProfiles={
      FullName:values.fullName,
      Gender:values.Gender==1?true:false,
      PhoneNumber:values.phoneNumber,
      Id:loginInfo.payload.profilesID
    }
    if(media&&media.length>0){
      payload.Image=media[0].id
    }
    dispatch(updateProfiles(payload)).unwrap().then().then((res:any)=>{
      message.success("Cập nhật thông tin thành công")
    }).catch(e=>{
      message.error("Cập nhật thông tin thất bại")
    })
  };
  console.log(media)
  const handleChange = (options: any) => {
    const { onSuccess, onError, file } = options;
    if (!file.type.includes("image/")) {
      message.error("Vui lòng upload ảnh có đuôi là jpg/ png!");
      return;
    } else {
      let formData = new FormData();
      let files = file;
      formData.append("file", files);
      dispatch(uploadMultipleFile(formData))
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
    setMedia([]);
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
          <Form.Item label="Giới tính" name={"Gender"}>
            <Select>
            <Option
                          key={1}
                          value={1}
                        >
                          <p className="displayName">Nam</p>
                        </Option>
                        <Option
                          key={2}
                          value={2}
                        >
                          <p className="displayName">Nữ</p>
                        </Option>
            </Select>
          </Form.Item>
          <Form.Item label="Avartar" name={"avartar"}>
            {media&&media.length>0 ? (
              <BoxImage>
                <Image src={media[0].url} width={"130px"} height={"130px"} />
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
