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
  Space,
  Spin,
  Timeline,
} from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BoxInfoUser } from "./profiles-tyled";
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
import { getOrderById, getOrderLog } from "@/features/order-slice";
import moment from "moment";

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
    console.log(1)

      dispatch(getOrderLog(router.query.id)).unwrap().then().then((res:any)=>{
        setDataLog(res)
      })
    }
  }, []);

  console.log(dataLog)

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
        <hr/>
        <Space>
          <div style={{width:'200px'}}>
            Địa chỉ nhận hàng
            <p>Số điện thoại: 099009999</p>
            <p>Địaa chỉ sd sa d dsa dá d asd á dá d sdasd á ds</p>
          </div>
          <div >
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
                        <div>{moment(x.logTime).format("DD/MM/YYYY H:mm")}</div>
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
                          {`${x.tenBoss}  `}
                          {x.message}
                        </div>
                        <div>{moment(x.logTime).format("DD/MM/YYYY H:mm")}</div>
                      </div>
                    )}
                  </Timeline.Item>
                ))}
            </Timeline>
          </div>
        </Space>
      </BoxInfoUser>
    </Spin>
  );
};
