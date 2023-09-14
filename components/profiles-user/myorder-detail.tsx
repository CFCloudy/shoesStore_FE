import { useAppDispatch, useAppSelector } from "@/app/hook";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Radio,
  Row,
  Select,
  Image,
  Spin,
  Timeline,
  Space,
} from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BoxInfoUser, WrapperOrder } from "./profiles-tyled";
import axios from "axios";
import {
  createAddresss,
  getAddressDetails,
  selectUser,
  updateAddress,
} from "@/features/user-slice";
import {
  ICreateAddress,
  IGetAddressDetails,
  IResDetailAdd,
  IUpdateAddress,
} from "@/models/user";
import {
  getOrderById,
  getOrderLog,
  updateTrangThaiDonHang,
} from "@/features/order-slice";
import moment from "moment";
import { formatter } from "@/models/common";
import { ButtonBlack } from "../home-pages/home-pages-styled";
import { IUpdateStatusOrder } from "@/models/order";

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

export const MyOrderDetail = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const [dataLog, setDataLog] = useState<any>();
  const { loginInfo } = useAppSelector(selectUser);
  useEffect(() => {
    if (router.query.id) {
      dispatch(getOrderById(Number(router.query.id)))
        .unwrap()
        .then()
        .then((res: any) => {
          setData(res);
        });
    }
  }, [Number(router.query.id)]);

  useEffect(() => {
    if (router.query.id) {
      dispatch(getOrderLog(router.query.id))
        .unwrap()
        .then()
        .then((res: any) => {
          setDataLog(res);
        });
    }
  }, []);

  console.log(data);

  const handleUpdateTrangThai = (status: number) => {
    let payload: IUpdateStatusOrder = {
      status: status,
      uId: Number(router.query.id),
      idBoss: Number(router.query.id),
    };
    dispatch(updateTrangThaiDonHang(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        message.success("Cập nhật trạng thái thành công");
        dispatch(getOrderLog(router.query.id))
          .unwrap()
          .then()
          .then((res: any) => {
            setDataLog(res);
          });
        dispatch(getOrderById(router.query.id))
          .unwrap()
          .then()
          .then((res: any) => {
            setData(res);
          });
      })
      .catch((e: any) => {
        message.error("Cập nhật trạng thái thất bại");
      });
  };

  return (
    <Spin spinning={false} delay={500}>
      <BoxInfoUser>
        <div className="info">Thông tin đơn hàng</div>

        <div>
          {data && data.status == 0
            ? `Đơn hàng đang đợi người bán duyệt`
            : data.status == 1
            ? `Đơn hàng đã được duyệt và đang đợi giao hàng`
            : data.status == 2
            ? "Đơn hàng đã bị hủy bởi người bán"
            : data.status == 3
            ? `Đơn hàng đang được giao`
            : data.status == 4
            ? `Đơn hàng đang được giao tới bạn`
            : data.status == 5
            ? `Đơn hàng giao không thành công do bạn từ chối nhận hàng`
            : `Đơn hàng đã hoàn thành`}
        </div>
        <br />
        <br />
        {data && data.status == 0 ? (
          <ButtonBlack onClick={() => handleUpdateTrangThai(6)}>
            Hủy đơn hàng
          </ButtonBlack>
        ) : data.status == 4 ? (
          <React.Fragment>
            <ButtonBlack onClick={() => handleUpdateTrangThai(5)}>
              Đã nhận được hàng
            </ButtonBlack>
            <ButtonBlack onClick={() => handleUpdateTrangThai(7)}>
             Từ chối nhận hàng
            </ButtonBlack>
          </React.Fragment>
        ):null}

        <br />
        <br />
        <hr />

        <Row gutter={[15, 15]}>
          <Col span={8}>
            <div
              style={{
                marginLeft: "12px",
                marginTop: "12px",
                lineHeight: "26px",
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: 600 }}>
                {" "}
                Địa chỉ nhận hàng
              </div>
              <p style={{ fontWeight: 600, marginTop: "20px" }}>Hoang Chung </p>
              <p>Số điện thoại: 099009999</p>
              <p>Địaa chỉ sd sa d dsa dá d asd á dá d sdasd á ds</p>
            </div>
          </Col>
          <Col span={15}>
            <div>
              <Timeline style={{ marginTop: "20px" }}>
                {dataLog &&
                  dataLog.map((x: any, index: number) => (
                    <Timeline.Item key={index}>
                      {index == 0 ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            {`${x.tenKhachHang}  `}
                            {x.message}
                          </div>
                          <div>
                            {moment(x.logTime).format("DD/MM/YYYY H:mm")}
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            {" "}
                            {`${
                              x.tenBoss == null ? x.tenKhachHang : x.tenBoss
                            }  `}
                            {x.message}
                          </div>
                          <div>
                            {moment(x.logTime).format("DD/MM/YYYY H:mm")}
                          </div>
                        </div>
                      )}
                    </Timeline.Item>
                  ))}
              </Timeline>
            </div>
          </Col>
        </Row>
        <div>
          {data && data.items && data.items.length > 0
            ? data.items.map((item: any, index: number) => {
                return (
                  <WrapperOrder key={index}>
                    <div className="line">
                      <Image
                        src={item.img}
                        width={"50px"}
                        height={"50px"}
                        style={{ flex: 0 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div className="name">{item.variantName}</div>
                        <div className="wp">
                          <div>
                            <div>Màu sắc:{item.color}</div>
                            <div>Kích thước:{item.size}</div>
                          </div>
                          <div>x{item.quantity}</div>
                        </div>
                        <div className="wp">
                          <div></div>
                          <div className="price">
                            {formatter.format(item.price)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </WrapperOrder>
                );
              })
            : null}
          {data && data.items && data.items.length > 0 ? (
            <div
              className="wp"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{data.items.length} sản phẩm</div>
              <div>
                <Space>
                  <div>Thành tiền</div>
                  <div style={{ marginLeft: "100px" }}>
                    {formatter.format(
                      data.items.reduce(
                        (accumulator: number, currentValue: any) => {
                          return (
                            accumulator +
                            currentValue.price * currentValue.quantity
                          );
                        },
                        0
                      )
                    )}
                  </div>
                </Space>
              </div>
            </div>
          ) : null}
          {data.soTienDuocTru ? (
            <div
              className="wp"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div></div>
              <div>
                <Space>
                  <div>Voucher từ KingShoes</div>
                  <div style={{ marginLeft: "120px" }}>
                    {" "}
                    {formatter.format(data.soTienDuocTru)}
                  </div>
                </Space>
              </div>
            </div>
          ) : null}
          {data.soTienDuocTru ? (
            <div
              className="wp"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div></div>
              <div>
                <Space>
                  <div>Tổng</div>
                  <div style={{ marginLeft: "100px" }}>
                    {" "}
                    {formatter.format(
                      data.items.reduce(
                        (accumulator: number, currentValue: any) => {
                          return (
                            accumulator +
                            currentValue.price * currentValue.quantity
                          );
                        },
                        0
                      ) - data.soTienDuocTru
                    )}
                  </div>
                </Space>
              </div>
            </div>
          ) : null}
        </div>
      </BoxInfoUser>
    </Spin>
  );
};
