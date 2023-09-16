import { selectUser } from "@/features/user-slice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { BoxInfoUser } from "./profiles-tyled";
const storage =
  typeof window !== "undefined" ? localStorage.getItem("u") : undefined;

export const Profile = () => {
  const [data, setData] = useState<any>();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const handleonsubmit = (values: any) => {
    console.log("valu", values);
  };
  

  console.log("object", data);
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
          <Form.Item label="Tên tài khoản" name={"userName"}>
            <Input readOnly placeholder="Tên tài khoản" />
          </Form.Item>
          <Form.Item
            label="Họ"
            name={"lastName"}
            rules={[{ required: true, message: "Họ không được để trống" }]}
          >
            <Input placeholder="Họ" />
          </Form.Item>
          <Form.Item
            label="Tên"
            name={"firsName"}
            rules={[{ required: true, message: "Tên không được để trống" }]}
          >
            <Input placeholder="Tên" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name={"phoneNumber"}
            rules={[{ required: true, message: "Tên không được để trống" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item label="Email" name={"email"}>
            <Input placeholder="Email" readOnly />
          </Form.Item>
          {/* <Form.Item label="Giới tính" name={"userName"}>
            <Input />
          </Form.Item> */}
          <Button type="primary" htmlType="submit">
            Chỉnh sửa thông tin
          </Button>
        </Form>
      </BoxInfoUser>
    </div>
  );
};
