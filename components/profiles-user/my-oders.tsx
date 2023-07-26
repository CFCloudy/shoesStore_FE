import { useAppDispatch, useAppSelector } from "@/app/hook";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row, Space, Tabs } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BoxInfoUser } from "./profiles-tyled";
import { getOrderByUserId } from "@/features/order-slice";
import { selectUser } from "@/features/user-slice";

export interface IResponseAdress {
  userAddressId: string;
  userId: string;
  name: string;
  phoneNumber: string;
  province: string;
  cityDistrict: string;
  wardCommune: string;
  addressDetail: string;
  typeAdress: string;
  isDefault: string;
  user: string;
}

export const MyOders = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IResponseAdress[]>([]);
  const router = useRouter();
  const { loginInfo } = useAppSelector(selectUser);

  useEffect(() => {
    if (loginInfo && loginInfo.payload) {
      dispatch(getOrderByUserId(loginInfo.payload.profilesID))
        .unwrap()
        .then()
        .then((res: any) => {
          setData(res?.data);
        });
    }
  }, []);

  const renderEmpty = () => {
    return (
      <div className="empty">
        <div>
          <ShoppingCartOutlined />
          <div>Bạn chưa có đơn hàng nào</div>
          <div>Mua sắm tiếp</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <BoxInfoUser style={{ minHeight: "560px" }}>
        <div className="info">Địa chỉ của tôi</div>
        <div className="form">
          <Tabs tabBarStyle={{ fontSize: "20px" }} size="middle">
            <Tabs.TabPane key="item-1" tab="Tất cả">
              {renderEmpty()}
            </Tabs.TabPane>
            <Tabs.TabPane key="item-2" tab="Chờ xác nhận"></Tabs.TabPane>
            <Tabs.TabPane key="item-3" tab="Chờ lấy hàng"></Tabs.TabPane>
            <Tabs.TabPane key="item-4" tab="Đang giao"></Tabs.TabPane>
            <Tabs.TabPane key="item-5" tab="Đã giao"></Tabs.TabPane>
            <Tabs.TabPane key="item-6" tab="Đã hủy"></Tabs.TabPane>
          </Tabs>
        </div>
      </BoxInfoUser>
    </div>
  );
};
