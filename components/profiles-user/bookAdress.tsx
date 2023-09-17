"use client";
import { HomeOutlined, RocketOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  List,
  message,
  Row,
  Space,
  Spin,
} from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { BoxInfoUser } from "./profiles-tyled";
import { Confirm } from "../popup-confirm/confirm";
import {
  getListAdress,
  removeAddress,
  selectUser,
  updateAddress,
} from "@/features/user-slice";
import { IGetAddressDetails, IUpdateAddress } from "@/models/user";

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

export const BookAdress = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const { loginInfo, loadingAdress, loadingDeleteAdress } =
    useAppSelector(selectUser);

  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [btnLeft, setbtnLeft] = useState<string>("");
  const [btnRight, setbtnRight] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [idAddress, setIdAdress] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const pageSize = 3;
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    if (loginInfo.payload) {
      let payload = {
        sorting: "ok",
        userId: loginInfo.payload.profilesID,
        skipCount:
          currentPage == 1
            ? 0
            : currentPage == 2
            ? 3
            : currentPage == 3
            ? 6
            : 9,
        maxResultCount: pageSize,
      };
      dispatch(getListAdress(payload))
        .unwrap()
        .then()
        .then((res: any) => {
          let newData: any = [];
          for (let i = 0; i < res.payload.length; i++) {
            res.payload[i] = {
              ...res.payload[i],
              city: res.payload[i].city.split("|").slice(-1)[0],
              ward: res.payload[i].ward.split("|").slice(-1)[0],
              district: res.payload[i].district.split("|").slice(-1)[0],
            };
            newData.push(res.payload[i]);
          }
          setData(
            newData.sort(
              (a: any, b: any) => Number(b.isDefault) - Number(a.isDefault)
            )
          );
          setTotalPages(res.totalCount);
          // setData(res.payload);
        });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRemoveAdress = () => {
    let payload: IGetAddressDetails = {
      id: Number(idAddress),
    };
    dispatch(removeAddress(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        message.success("Xóa địa chỉ thành công");
        setIsConfirm(false);
        setIdAdress("");
        fetchData();
      })
      .catch((error: any) => {
        message.error("Xóa địa chỉ thất bại");
      });
  };

  const hanldeSetAddressDefault = (values: any) => {
    const payload: IUpdateAddress = {
      ...values,
      isDefault: !values.isDefault,
    };
    dispatch(updateAddress(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        if (res.isDefault) {
          message.success("Đổi thành địa chỉ mặc định thành công");
        } else {
          message.success("Hủy địa chỉ mặc định thành công");
        }
        fetchData();
      })
      .catch((error: any) => {
        message.error("Đổi địa chỉ mặc định thất bại !!");
      });
  };

  return (
    <Spin spinning={false} delay={500}>
      <BoxInfoUser>
        <div className="info">Địa chỉ của tôi</div>
        <div className="form">
          <div className="add">
            <div></div>
            <div className="btn">
              <Button
                type="primary"
                onClick={() => {
                  router.push("/book-address/address-details/new");
                }}
              >
                Thêm mới địa chỉ
              </Button>
            </div>
          </div>
          <List
            dataSource={data}
            itemLayout="vertical"
            loading={loadingAdress}
            size="large"
            pagination={{
              onChange: handlePageChange,
              pageSize,
              current: currentPage,
              total: totalPages,
            }}
            footer={
              <div>
                <b>King Shoes</b>
              </div>
            }
            header={<div>Danh sách địa chỉ</div>}
            renderItem={(address: any, index) => (
              <List.Item key={index}>
                <div className="wrapp" key={index}>
                  <div className="wrapperAddress">
                    <div className="wrapdetail">
                      <div
                        style={{
                          opacity: 0.8,
                          fontSize: "16px",
                          marginRight: "50px",
                        }}
                      >
                        Họ và tên:
                      </div>
                      <div className="name">{address.name}</div>
                    </div>
                    <div className="wrapdetail">
                      <div
                        style={{
                          opacity: 0.8,
                          fontSize: "16px",
                          marginRight: "25px",
                        }}
                      >
                        Số điện thoại:
                      </div>
                      <div className="name">{address.phoneNumber}</div>
                    </div>
                    <div className="wrapdetail">
                      <div
                        style={{
                          opacity: 0.8,
                          fontSize: "16px",
                          marginRight: "72px",
                        }}
                      >
                        Địa chỉ:
                      </div>

                      <div className="name">{`${address.addressDetail}, ${address.ward}, ${address.district}, ${address.city}`}</div>
                    </div>
                    <div className="wrapdetail">
                      <div
                        style={{
                          opacity: 0.8,
                          fontSize: "16px",
                          marginRight: "122px",
                        }}
                      ></div>
                      {address.type ? (
                        <div className="name" style={{ color: "red" }}>
                          <HomeOutlined
                            style={{ marginRight: "10px", color: "red" }}
                          />
                          Nhà riêng/ Chung cư
                        </div>
                      ) : (
                        <div className="name" style={{ color: "red" }}>
                          <RocketOutlined
                            style={{ marginRight: "10px", color: "red" }}
                          />
                          Cơ quan / Công ty
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="wrap2">
                    <Space className="btn1">
                      <div
                        className="update"
                        onClick={() => {
                          router.push(
                            `/book-address/address-details/${address.id}`
                          );
                        }}
                      >
                        Chỉnh sửa
                      </div>
                      <div
                        className="update"
                        onClick={() => {
                          setIsConfirm(true),
                            setTitle("Xóa địa chỉ"),
                            setbtnLeft("Hủy"),
                            setbtnRight("Xóa");
                          setIdAdress(address.id);
                        }}
                      >
                        Xóa
                      </div>
                    </Space>
                    {address.isDefault ? (
                      <div className="btn2">
                        <Button
                          // loading={loadingAdress}
                          onClick={() => hanldeSetAddressDefault(address)}
                        >
                          Hủy địa chỉ mặc định
                        </Button>
                      </div>
                    ) : (
                      <div className="btn2">
                        <Button
                          // loading={loadingAdress}
                          onClick={() => hanldeSetAddressDefault(address)}
                        >
                          Thiết lập mặc định
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
      </BoxInfoUser>
      <Confirm
        buttonLeft={btnLeft}
        buttonRight={btnRight}
        changeActive={(e: any) => setIsConfirm(e)}
        content={"Bạn có chắc chắn muốn xóa địa chỉ này không"}
        handleAction={handleRemoveAdress}
        title={title}
        stateButton={false}
        wrapper={<></>}
        openModalConfirm={isConfirm}
        loading={loadingDeleteAdress}
      />
    </Spin>
  );
};
