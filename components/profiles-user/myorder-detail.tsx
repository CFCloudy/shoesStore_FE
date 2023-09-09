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
import { getOrderById } from "@/features/order-slice";

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

  const { loginInfo } = useAppSelector(selectUser);

  const handelSubmit = (values: any) => {
    let payload: ICreateAddress = {
      addressDetail: values.addressDetail,
      city: values.City,
      phoneNumber: values.phoneNumber,
      name: values.name,
      district: values.District,
      type: values.typeAdress == undefined ? true : false,
      userId: loginInfo.payload.profilesID,
      isDefault: values.isDefault,
      ward: values.Ward,
    };
    if (router.query.id === "new") {
      dispatch(createAddresss(payload))
        .unwrap()
        .then()
        .then((res: any) => {
          message.success("Thêm địa chỉ mới thành công");
          router.back();
        })
        .catch((error: any) => {
          message.error("Thêm mới địa chỉ thất bại !!");
        });
    } else {
      let payloadUpdate: IUpdateAddress = {
        addressDetail: values.addressDetail,
        city: values.City,
        phoneNumber: values.phoneNumber,
        name: values.name,
        district: values.District,
        type: values.typeAdress == undefined ? true : false,
        userId: loginInfo.payload.profilesID,
        isDefault: values.isDefault,
        ward: values.Ward,
        id: Number(router.query.id),
      };
      dispatch(updateAddress(payloadUpdate))
        .unwrap()
        .then()
        .then((res: any) => {
          message.success("Cập nhât địa chỉ mới thành công");
          router.back();
        })
        .catch((error: any) => {
          message.error("Cập nhât địa chỉ thất bại !!");
        });
    }
  };

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

  console.log(data);

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
      </BoxInfoUser>
    </Spin>
  );
};
