// import { useAppSelector } from '@/app/hooks';

import { LayoutProps } from "@/models/common";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Avatar, Button, Col, Form, Input, Row, Space } from "antd";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { selectUser } from "@/features/user-slice";
import { MainLayout } from "../layout/main-layout/main-layout";
import { WrapperProfile } from "./profiles-tyled";
import { useAppSelector } from "@/app/hook";
export interface IMainLayout {}

function ProfileLayout({ children }: LayoutProps) {
  const router = useRouter();

  //   const {isAuthentication,loginInfo} = useAppSelector(selectUser)
  //   useEffect(() => {
  //     if(!isAuthentication) router.push('/landingpages')
  //     },[router, isAuthentication,loginInfo])
  const {loginInfo}=useAppSelector(selectUser)

  const storage =
    typeof window !== "undefined" ? localStorage.getItem("u") : undefined;
  return (
    <WrapperProfile>
      <Row gutter={[20, 20]}>
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar style={{ marginRight: "16px" }}  src={loginInfo&&loginInfo.payload?loginInfo.payload.avartar:""}/>
            <Space direction="vertical">
              <div style={{ fontSize: "15px" }}>Tài khoản của {loginInfo&&loginInfo.payload?loginInfo.payload.fullName:""}{}</div>
            </Space>
          </div>
          <div
            className="wrapbutton"
            onClick={() => {
              router.push("/profiles");
            }}
          >
            <UserOutlined style={{ marginRight: "8px" }} /> Thông tin tài khoản
          </div>
          <div
            className="wrapbutton"
            onClick={() => {
              router.push("/book-address");
            }}
          >
            <HeartOutlined style={{ marginRight: "8px" }} /> Sổ địa chỉ
          </div>
          <div
            className="wrapbutton"
            onClick={() => {
              router.push("/my-oder");
            }}
          >
            <ShoppingOutlined style={{ marginRight: "8px" }} /> Đơn hàng của tôi
          </div>
          <div
            className="wrapbutton"
            onClick={() => {
              router.push("/change-pass");
            }}
          >
            <UserOutlined style={{ marginRight: "8px" }} /> Thay đổi mật khẩu
          </div>
          <div className="wrapbutton">
            <UserOutlined style={{ marginRight: "8px" }} /> Đăng xuất tài khoản
          </div>
        </Col>
        <Col span={18}>{children}</Col>
      </Row>
    </WrapperProfile>
  );
}
ProfileLayout.Layout = MainLayout;
export default ProfileLayout;
