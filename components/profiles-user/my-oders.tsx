import { useAppDispatch, useAppSelector } from "@/app/hook";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row, Image, Tabs } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BoxInfoUser, WrapperOrder } from "./profiles-tyled";
import { getOrderByUserId } from "@/features/order-slice";
import { selectUser } from "@/features/user-slice";
import { formatter } from "@/models/common";

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
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const { loginInfo } = useAppSelector(selectUser);

  useEffect(() => {
    if (loginInfo && loginInfo.payload) {
      dispatch(getOrderByUserId(loginInfo.payload.profilesID))
        .unwrap()
        .then()
        .then((res: any) => {
          setData(res);
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

  console.log(data);

  

  return (
    <div>
      <BoxInfoUser style={{ minHeight: "560px" }}>
        <div className="info">Địa chỉ của tôi</div>
        <div className="form">
          <Tabs tabBarStyle={{ fontSize: "20px" }} size="middle">
            <Tabs.TabPane key="item-1" tab="Tất cả">
              {/* {renderEmpty()} */}
              {/* {data && data.map((item: any) => <div>{item.createDate}</div>)} */}
              {data &&
                data.map((item: any, index: number) => (
                  <WrapperOrder>
                    <div className="line">
                      <Image
                        src={item.items && item.items[0]?.img}
                        width={"50px"}
                        height={"50px"}
                        style={{ flex: 0 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div className="name">
                          {item.items && item.items[0]?.color}
                        </div>
                        <div className="wp">
                          <div>
                            <div>
                              Màu sắc:{item.items && item.items[0]?.color}
                            </div>
                            <div>
                              Kích thước:{item.items && item.items[0]?.color}
                            </div>
                          </div>
                          <div>2</div>
                        </div>
                        <div className="wp">
                          <div></div>
                          <div className="price">
                            {formatter.format(200000)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wp">
                      <div>{`${item.items.length} sản phẩm`}</div>
                      <div>Thành tiền {formatter.format(200000)}</div>
                    </div>
                    <div className="wp">
                      <div></div>
                      <div
                        className="detail"
                        onClick={() =>
                          router.push(
                            `/my-oder/my-order-detail/${item.orderId}`
                          )
                        }
                      >
                        Xem chi tiết
                      </div>
                    </div>
                  </WrapperOrder>
                ))}
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
