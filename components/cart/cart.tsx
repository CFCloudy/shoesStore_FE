import {
  Col,
  Row,
  Image,
  Space,
  Input,
  Button,
  Form,
  Radio,
  Empty,
  RadioChangeEvent,
} from "antd";
import { WrapperProfile } from "../profiles-user/profiles-tyled";
import {
  Box,
  BoxBody,
  BoxHeader,
  CartItem,
  CheckOut,
  WrapProduct,
  WrapperDiscount,
  WrapperDiscountLeft,
  WrapperDiscountRigth,
  WrapperVoucher,
} from "./cart-styled";
import { RegexValidation, formatter } from "@/models/common";
import { DeleteOutlined, TransactionOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppSelector } from "@/app/hook";
import { selectUser } from "@/features/user-slice";
import Router from "next/router";
import IconVoucher from "@/assets/teenyicons_discount-outline.svg";
import { ButtonBlack } from "../home-pages/home-pages-styled";
import { IDiscount, data_voucher } from "@/data/data_voucher";
import { Confirm } from "../popup-confirm/confirm";
import moment from "moment";
export const Cart = () => {
  const [form] = Form.useForm();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const [selectedRadio, setSelectedRadio] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [nameVoucher, setNameVoucher] = useState<string>("");
  const [numberOpen, setNumberOpen] = useState<number>(0);
  const [valueVoucher, setValueVoucher] = useState<number>(0);
  const ship = 20000;
  const [total, setTotal] = useState<number>(0);
  const [dataCart, setDataCart] = useState<any>({});
  const [dataProduct, setDataProduct] = useState<any>();
  const [dataProductVariant, setDataProductVariant] = useState<any>();
  const [dataAdress, setDataAddress] = useState<any>();
  const { loginInfo } = useAppSelector(selectUser);
  const [chooseAddress, setChooseAdress] = useState<any>();
  let sum = 120000;

  const handleUseVoucher = () => {
    let resule = data_voucher.find((x) => x.nameVoucher === nameVoucher);
    if (data_voucher.find((x) => x.nameVoucher == nameVoucher)) {
      setError("");
      if (resule?.unit && resule !== undefined) {
        let result = (Number(resule.value) * sum) / 100;
        if (Number(result) > Number(resule.maxValue)) {
          setValueVoucher(Number(Number(resule.maxValue).toFixed()));
          setTotal(sum + ship - Number(resule.maxValue));
        } else {
          setValueVoucher(Number(result.toFixed()));
          setTotal(sum + ship - result);
        }
      } else if (resule?.unit == false && resule !== undefined) {
        setValueVoucher(Number(resule?.value));
        setTotal(sum + ship - Number(resule?.value));
      } else {
        setTotal(sum + ship);
        setValueVoucher(0);
      }
    } else {
      setError("Mã giảm giá không tồn tại");
      setValueVoucher(0);
    }
  };

  const handleApdung = () => {
    let resule = data_voucher.find((x) => x.voucherId === selectedRadio);
    console.log(resule);
    if (resule?.unit && resule !== undefined) {
      let result = (Number(resule.value) * sum) / 100;
      if (Number(result) > Number(resule.maxValue)) {
        setValueVoucher(Number(Number(resule.maxValue).toFixed()));
        setTotal(sum + ship - Number(resule.maxValue));
      } else {
        setValueVoucher(Number(result.toFixed()));
        setTotal(sum + ship - result);
      }
    } else if (resule?.unit == false && resule !== undefined) {
      setValueVoucher(Number(resule?.value));
      setTotal(sum + ship - Number(resule?.value));
    } else {
      setTotal(sum + ship);
      setValueVoucher(0);
    }
    setIsConfirm(false);
  };

  const caculatorEndTime = (date: any) => {
    const result = moment
      .duration(
        moment(date, "YYYY/MM/DD HH:mm").diff(
          moment(new Date(), "YYYY/MM/DD HH:mm")
        )
      )
      .asHours();
    const time = moment.duration(
      moment(date, "YYYY/MM/DD HH:mm").diff(
        moment(new Date(), "YYYY/MM/DD HH:mm")
      )
    );
    if (result > 24) {
      let hour = result - 24;
      return `Còn ${time.days()} ngày ${hour.toFixed()} giờ`;
    } else {
      return `Còn ${time.hours()} giờ`;
    }
  };

  const onchangeRadio = (e: RadioChangeEvent) => {
    setSelectedRadio(e.target.value);
  };

  const handleDontUse = () => {
    setTotal(sum + ship);
    setValueVoucher(0);
  };

  return (
    <WrapperProfile>
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <Box>
            <BoxHeader>
              <div>Giỏ hàng của bạn</div>
            </BoxHeader>
            <BoxBody>
              {product.map((cart: any) => (
                <CartItem>
                  <Row gutter={[10, 10]}>
                    <Col span={8}>
                      <Image
                        preview={false}
                        src={cart.src}
                        alt=""
                        width={"240px"}
                        height={"240px"}
                      />
                    </Col>
                    <Col span={16}>
                      <div className="detail">
                        <Space direction="vertical">
                          <div
                            style={{
                              textTransform: "uppercase",
                              fontSize: "16px",
                              fontWeight: 500,
                              width: "260px",
                            }}
                          >
                            {cart.Productname}
                          </div>
                          <div style={{ fontWeight: "500" }}>
                            {formatter.format(cart.price)}
                          </div>
                          <div>Kích cỡ</div>
                          <Input
                            type="number"
                            // onKeyUp={(e) => {
                            //   handleUpdateQuantity(e, cart.cartSessionDetailId);
                            // }}
                            className="quantity"
                            min={1}
                            value={cart.quantity}
                            // onChange={(e) => {
                            //   handleUpdateQuantity(e, cart.cartSessionDetailId);
                            // }}
                          />
                        </Space>
                        <div>
                          <div style={{ fontWeight: "500", marginTop: "10px" }}>
                            {formatter.format(
                              Number(cart.price) * Number(cart.quantity)
                            )}
                            <DeleteOutlined
                              style={{
                                cursor: "pointer",
                                marginLeft: "10px",
                              }}
                              // onClick={() => {
                              //   removeItemFromCart(cart.cartSessionDetailId);
                              // }}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CartItem>
              ))}
            </BoxBody>
          </Box>
          <Button
            style={{
              margin: "20px 0",
              backgroundColor: "black",
              color: "#fff",
              fontWeight: 600,
            }}
          >{`< Quay lại mua hàng`}</Button>
        </Col>
        <Col span={8}>
          <WrapProduct>
            <div className="title">Chi tiết thanh toán</div>
            <CheckOut>
              <div>Tổng tiền</div>
              {/* <div>{Object.entries(dataCart).length > 0 ? sum : ""}</div> */}
              <div>{sum}</div>
            </CheckOut>
            <CheckOut>
              <div>Phí ship</div>
              <div>20.000đ</div>
            </CheckOut>
            <CheckOut>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={IconVoucher.src}></img>
                <b>{`King Shoes Voucher`}</b>
              </div>
              <b
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedRadio("");
                  setIsConfirm(true);
                  setNumberOpen(1);
                }}
              >
                Chọn Hoặc Nhập Mã
              </b>
            </CheckOut>

            <Input.Group compact>
              <Input
                style={{ width: "calc(100% - 85px)", marginTop: "10px" }}
                onChange={(e) => {
                  setNameVoucher(e.target.value);
                  if (e.target.value.length === 0) {
                    setError("");
                  }
                }}
              />
              <Button
                type="primary"
                style={{
                  marginTop: "10px",
                  backgroundColor: "black",
                  color: "#fff",
                  fontWeight: 500,
                }}
                onClick={handleUseVoucher}
                disabled={nameVoucher ? false : true}
              >
                Áp dụng
              </Button>
            </Input.Group>
            <CheckOut>
              <div style={{ color: "red" }}>{error}</div>
              <div></div>
            </CheckOut>
            <br />
            <br />
            <br />
            <CheckOut>
              <div>Tổng tiền hàng</div>
              <div>
                {" "}
                {Object.entries(dataCart).length > 0 ? sum + 20000 : ""}
              </div>
            </CheckOut>
            <CheckOut>
              <div>Giảm giá</div>
              <div className="deal">
                <div>{valueVoucher ? -valueVoucher : valueVoucher}</div>
                {valueVoucher > 0 ? (
                  <div className="main1" onClick={handleDontUse}>
                    Không sử dụng
                  </div>
                ) : null}
              </div>
            </CheckOut>
            <CheckOut>
              <div className="title">Tổng thanh toán</div>
              <div style={{ color: "red", fontSize: "18px" }}>{sum}</div>
            </CheckOut>
            {Object.entries(loginInfo).length == 0 ? (
              <div>
                <div style={{ display: "flex" }}>
                  <div>
                    <div>
                      {" "}
                      {chooseAddress ? (
                        Object.entries(chooseAddress).length > 0 ? (
                          <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "10px" }}>
                              <TransactionOutlined style={{ color: "red" }} />
                            </div>
                            <div>
                              {" "}
                              <div>
                                {chooseAddress.name} |{" "}
                                {chooseAddress.phoneNumber}
                              </div>
                              <div>{`${chooseAddress.addressDetail}, ${chooseAddress.wardCommune},${chooseAddress.province}, ${chooseAddress.cityDistrict}`}</div>
                              <div>Địa chỉ nhận hàng</div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "20px",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  right: "28px",
                                  // left: "20px",
                                  cursor: "pointer",
                                  fontSize: "20px",
                                }}
                                onClick={() => {
                                  setNumberOpen(2);
                                  // setIsConfirm(true);
                                }}
                              >{`>`}</div>
                            </div>
                          </div>
                        ) : (
                          <Button
                            type="link"
                            onClick={() => Router.push("/book-address")}
                          >
                            {" "}
                            + Thêm mới địa chỉ
                          </Button>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <CheckOut
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ButtonBlack
                      // loading={loading}
                      onClick={() => Router.push("/checkout")}
                    >
                      Thanh toán
                    </ButtonBlack>
                  </CheckOut>
                </div>
              </div>
            ) : (
              <div>
                <div className="title" style={{ fontSize: "18px" }}>
                  Thông tin người nhận hàng:
                </div>
                <Form
                  form={form}
                  // onFinish={OnSubmit}
                >
                  <Form.Item
                    name={"name"}
                    rules={[
                      {
                        required: true,
                        message: "Họ tên không được để trống",
                      },
                    ]}
                  >
                    <Input placeholder="Họ tên"></Input>
                  </Form.Item>
                  <Form.Item
                    name={"phone"}
                    rules={[
                      {
                        required: true,
                        message: "Số điện thoại không được để trống",
                      },
                      {
                        validator: async (rule: any, value: any, callback) => {
                          if (value) {
                            if (
                              RegexValidation.REGEXPHONENUMBER.test(value) ==
                              false
                            ) {
                              return Promise.reject(
                                "Số điện thoại không hợp lệ"
                              );
                            }
                          }
                        },
                      },
                    ]}
                  >
                    <Input placeholder="Số điện thoại"></Input>
                  </Form.Item>
                  <Form.Item
                    name={"address"}
                    rules={[
                      {
                        required: true,
                        message: "Địa chỉ không được để trống",
                      },
                    ]}
                  >
                    <Input placeholder="Địa chỉ"></Input>
                  </Form.Item>
                  <CheckOut
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      // loading={loading}
                    >
                      Thanh toán
                    </Button>
                  </CheckOut>
                </Form>
              </div>
            )}
          </WrapProduct>
        </Col>
      </Row>

      <Confirm
        buttonLeft=""
        buttonRight=""
        changeActive={(e: any) => setIsConfirm(e)}
        content=""
        handleAction={() => console.log(1)}
        openModalConfirm={isConfirm}
        stateButton
        title={numberOpen == 1 ? "Mã giảm giá" : "Địa chỉ"}
        wrapper={
          <WrapperVoucher>
            {numberOpen == 1 ? (
              <div>
                <Space>
                  <div>Mã giảm giá</div>
                  <div>
                    <Input />
                  </div>
                  <Button>Áp dụng</Button>
                </Space>
                <div>Giảm giá</div>
                {data_voucher &&
                  data_voucher.map((res: IDiscount, index: number) => {
                    return moment(res.endDate) > moment(new Date()) ? (
                      <WrapperDiscount>
                        <WrapperDiscountLeft>
                          <div className="circle"></div>
                          {/* <div>Số lượng có hạn</div> */}
                          <div className="content">Giảm giá</div>
                        </WrapperDiscountLeft>
                        <WrapperDiscountRigth>
                          <div className="main">
                            <Space>
                              {res.unit ? (
                                <div className="main1">{`${res.value}% đơn 0đ`}</div>
                              ) : (
                                <div className="main1">{`Giảm ${String(
                                  res.maxValue
                                ).slice(0, 3)}k`}</div>
                              )}
                              {res.maxValue ? (
                                <div className="main1">
                                  Tối đa {String(res.maxValue).slice(0, 3)}k
                                </div>
                              ) : null}
                            </Space>
                            <div>
                              <div className="deal">
                                Sắp hết hạn: {caculatorEndTime(res.endDate)}
                              </div>
                            </div>
                          </div>
                          <div className="main2">
                            <Radio
                              value={res.voucherId}
                              checked={selectedRadio === res.voucherId}
                              onChange={onchangeRadio}
                              onClick={() => {
                                if (selectedRadio === res.voucherId) {
                                  setSelectedRadio("");
                                }
                              }}
                            ></Radio>
                          </div>
                        </WrapperDiscountRigth>
                      </WrapperDiscount>
                    ) : null;
                  })}
                {data_voucher ? null : (
                  <Empty
                    imageStyle={{
                      height: 60,
                    }}
                    description={<span>Hiện tại không có voucher</span>}
                  ></Empty>
                )}
                <div className="btn">
                  <div></div>
                  <Space>
                    <Button>Hủy</Button>
                    <Button type="primary" onClick={handleApdung}>
                      Áp dụng
                    </Button>
                  </Space>
                </div>
              </div>
            ) : (
              <div>
                {dataAdress
                  ? dataAdress.length > 0
                    ? dataAdress.map((x: any) => (
                        <div
                          style={{ display: "flex", fontFamily: "sans-serif" }}
                        >
                          <div style={{ marginRight: "10px" }}>
                            <TransactionOutlined style={{ color: "red" }} />
                          </div>
                          <div>
                            {" "}
                            <div>
                              {x.name} | {x.phoneNumber}
                            </div>
                            <div>{`${x.addressDetail}, ${x.wardCommune},${x.province}, ${x.cityDistrict}`}</div>
                            <div>Địa chỉ nhận hàng</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "20px",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                right: "28px",
                                // left: "20px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setNumberOpen(2);
                                setIsConfirm(true);
                              }}
                            >
                              <Button type="link"> Sửa</Button>
                            </div>
                            {x.userAddressId == chooseAddress.userAddressId ? (
                              <div
                                style={{
                                  position: "absolute",
                                  right: "80px",
                                  // left: "20px",
                                  cursor: "pointer",
                                }}
                              >
                                Đã chọn
                              </div>
                            ) : (
                              <div
                                style={{
                                  position: "absolute",
                                  right: "80px",
                                  // left: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  setNumberOpen(2);
                                  setIsConfirm(true);
                                }}
                              >
                                <Button onClick={() => setChooseAdress(x)}>
                                  {" "}
                                  Chọn địa chỉ
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    : ""
                  : ""}
              </div>
            )}
          </WrapperVoucher>
        }
        width="600px"
      />
    </WrapperProfile>
  );
};

const product = [
  {
    Productname: "Chuck 70 Seasonal Colour Low Top",
    Decription: "Giày converse",
    Media: [
      {
        id: 1,
        absolutePath: "sdsd.jpg",
      },
      {
        id: 2,
        absolutePath: "sdsd.jpg",
      },
    ],
    quantity: 2,
    Sku: "PW-THU02112001",
    price: 12000000,
    src: "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg",
  },
];
