import { Col, Row, Steps, message, Image } from "antd";
import { WrapperProfile } from "../profiles-user/profiles-tyled";
import { useState } from "react";
import { Cart } from "./cart";
import {
  Box,
  BoxBody,
  BoxHeader,
  CheckOut,
  SpaceBetW,
  StepsCustom,
  WrapProduct,
} from "./cart-styled";
import { ButtonBlack } from "../home-pages/home-pages-styled";
import { formatter } from "@/models/common";
import { IPayloadOrder } from "@/models/order";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { selectUser } from "@/features/user-slice";
import {
  createOrder,
  getCart,
  removeCartItem,
  selectOrder,
  useVoucher,
} from "@/features/order-slice";
import { useRouter } from "next/router";
import { IRemoveItem } from "@/features/services/order-api";
import {
  AppstoreAddOutlined,
  CarOutlined,
  CheckOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";

export const CheckOutPage = () => {
  const [current, setCurrent] = useState(1);
  const [chooseType, setChooseType] = useState<boolean>(false);
  const [chooseCard, setChooseCard] = useState<boolean>(false);
  const { loginInfo } = useAppSelector(selectUser);
  const { cart, loading } = useAppSelector(selectOrder);
  const [maHD, setMaHD] = useState<any>("");
  const dispatch = useAppDispatch();
  const onChange = (value: number) => {
    setCurrent(value);
    if (value == 0) {
      router.push("/cart");
    }
  };
  const router = useRouter();
  let sum = 0;
  const description = "ok";
  const handleThanhtoan = () => {
    let data: any = [];

    if (cart && cart.payload && cart.payload.cartItemDTOs) {
      for (let i = 0; i < cart.payload.cartItemDTOs.length; i++) {
        let obj = {
          price: cart.payload.cartItemDTOs[i].price,
          productId: 1,
          quantity: cart.payload.cartItemDTOs[i].quantity,
          subTotal: cart.payload.cartItemDTOs.reduce(
            (accumulator: number, currentValue: any) => {
              return accumulator + currentValue.price * currentValue.quantity;
            },
            0
          ),
          variantID: cart.payload.cartItemDTOs[i].productVariantId,
          variantName: cart.payload.cartItemDTOs[i].variantName,
          cartId: cart.payload.cartItemDTOs[i].cartId,
          id: cart.payload.cartItemDTOs[i].id,
        };
        data.push(obj);
      }
    }
    let total = data;
    let payload: IPayloadOrder = {
      orderCode: "",
      listItems: data,
      status: 0,
      shippingDetails: {
        orderNote: "ok",
        shippingAddress: "2",
        shippingName: "32",
        shippingPhone: "",
        status: 0,
        shippingId: Number(router.query.id),
      },
      total: data.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.subTotal;
      }, 0),
      userID: loginInfo.payload.profilesID,
    };
    dispatch(createOrder(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        message.success("Thanh toán thành công");
        localStorage.removeItem("cart");
        if (router.query.vcid) {
          let useVo = {
            voucherUserId: Number(router.query.vcid),
            orderId: res.orderId,
            price: Number(router.query.value),
          };
          // dispatch(useVoucher(useVo)).unwrap().then().then().catch();
        }
        setMaHD(res.maDonHang);
        dispatch(removeCartItem(data))
          .unwrap()
          .then()
          .then((res: any) => {
            dispatch(getCart(loginInfo.payload.profilesID))
              .unwrap()
              .then()
              .then((res: any) => {
                // setCart(res)
              });
          });
        setCurrent(2);
      })
      .catch((error: any) => {
        message.error("Thanh toán thất bại");
      });
  };

  return (
    <WrapperProfile>
      <StepsCustom
        current={current}
        onChange={onChange}
        style={{ width: "60%" }}
        items={[
          {
            title: "Giỏ hàng",
          },
          {
            title: "Thanh toán",
            disabled: current == 2 ? true : false,
          },
          {
            title: "Hoàn thành đơn hàng",
            disabled: !chooseCard && !chooseType ? true : false,
          },
        ]}
      />
      {current == 1 ? (
        <div>
          <Row gutter={[20, 20]}>
            <Col span={16}>
              <Box>
                <BoxHeader>
                  <div>2. Thanh toán</div>
                </BoxHeader>
                <BoxBody>
                  <div
                    className="wpbox"
                    onClick={() => {
                      setChooseType((chooseType) => !chooseType);
                      if (chooseCard) {
                        setChooseCard(false);
                      }
                    }}
                    style={{
                      border: `${chooseType ? "solid 1px black" : "none"}`,
                    }}
                  >
                    <div className="title">Thanh toán khi nhận hàng</div>
                    <p>
                      Không cần thanh toán trực tuyến - trả tiền mặt bằng cách
                      sử dụng thay đổi chính xác sau khi các mặt hàng của bạn
                      được giao!
                    </p>
                    <p>
                      Thông tin chi tiết về tài khoản ngân hàng của bạn sẽ chỉ
                      được yêu cầu nếu bạn muốn trả lại bất kỳ sản phẩm nào để
                      được hoàn tiền.
                    </p>
                  </div>
                  {/* <div
                    className="wpbox"
                    onClick={() => {
                      setChooseCard((chooseCard) => !chooseCard);
                      if (chooseType) {
                        setChooseType(false);
                      }
                    }}
                    style={{
                      border: `${chooseCard ? "solid 1px black" : "none"}`,
                    }}
                  >
                    <div className="title">Thanh toán bằng thẻ</div>
                  </div> */}

                  <ButtonBlack
                    style={{
                      padding: "-10px 80px",
                    }}
                    onClick={handleThanhtoan}
                    disabled={!chooseCard && !chooseType ? true : false}
                    loading={loading}
                  >
                    Hoàn thành đơn hàng
                  </ButtonBlack>
                </BoxBody>
              </Box>
            </Col>
            <Col span={8}>
              <WrapProduct>
                <div className="title">Tóm tắt đơn hàng</div>
                <CheckOut>
                  <div>{` ${Object.entries(cart).length > 0 &&
                      cart.payload &&
                      cart.payload.cartItemDTOs.length > 0
                      ? cart.payload.cartItemDTOs.length
                      : 0
                    } sản phẩm`}</div>
                  {/* <div>{Object.entries(dataCart).length > 0 ? sum : ""}</div> */}
                  <div>
                    {" "}
                    {cart && cart.payload && cart.payload.cartItemDTOs
                      ? formatter.format(
                        cart.payload.cartItemDTOs.reduce(
                          (accumulator: number, currentValue: any) => {
                            return (
                              accumulator +
                              currentValue.price * currentValue.quantity
                            );
                          },
                          0
                        )
                      )
                      : formatter.format(0)}
                  </div>
                </CheckOut>
                <CheckOut>
                  <div>Giao hàng</div>
                  <div>Miễn phí</div>
                </CheckOut>
                <CheckOut>
                  <div>Giảm giá</div>
                  <div>
                    {router.query.vcid
                      ? formatter.format(Number(router.query.value))
                      : formatter.format(0)}
                  </div>
                </CheckOut>
                <CheckOut>
                  <div>Tổng tiền hàng</div>
                  <div>
                    {cart && cart.payload && cart.payload.cartItemDTOs
                      ? formatter.format(
                        cart.payload.cartItemDTOs.reduce(
                          (accumulator: number, currentValue: any) => {
                            return (
                              accumulator +
                              currentValue.price * currentValue.quantity
                            );
                          },
                          0
                        ) -
                        Number(router.query.value ? router.query.value : 0)
                      )
                      : formatter.format(0)}
                  </div>
                </CheckOut>
                <br />
                <h3 >Chi tiết đơn hàng</h3>
                {/* {cart&&cart.payload&&cart.payload.cartItemDTOs
                      ? cart.payload.cartItemDTOs.map((shoes: any, i: number) => (
                          <div className="line" key={i}>
                            <Image
                              src={shoes.img}
                              width={"50px"}
                              height={"50px"}
                              style={{ flex: 0 }}
                            />
                            <div style={{ flex: 1 }}>
                              <div className="name">{shoes.variantName}</div>
                              <div className="wp">
                                <div>
                                  <div>Màu sắc:{shoes.color}</div>
                                  <div>Kích thước:{shoes.color}</div>
                                </div>
                                <div>x{shoes.quantity}</div>
                              </div>
                              <div className="wp">
                                <div></div>
                                <div className="price">
                                  {formatter.format(shoes.price)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : null} */}
              </WrapProduct>
            </Col>
          </Row>
        </div>
      ) : current == 2 ? (
        <Row gutter={[20, 20]}>
          <Col span={16}>
            <div style={{ marginTop: "10px", lineHeight: "30px" }}>
              <h2>Cảm ơn bạn!</h2>
              <p>Đơn hàng của bạn đang được xử lý</p>
              <div>Mã đơn hàng: {maHD}</div>
              <div>
                Bạn sẽ sớm nhận được email xác nhận. Đơn hàng sẽ xuất hiện trong
                tài khoản của bạn ngay sau khi bạn nhận được email.{" "}
              </div>
              <div>
                Trong khi chờ đợi giao hàng, bạn luôn có thể khám phá trang web
                của chúng tôi để tìm thêm sản phẩm.
              </div>
            </div>
          </Col>
          <Col span={8}>
            <h2>Các bước tiếp theo</h2>
            <SpaceBetW>
              <div>
                <CodeSandboxOutlined style={{ fontSize: "32px" }} />
              </div>
              <div>
                <h3>Chờ duyệt</h3>
                <div>Chủ cửa hàng sẽ duyệt và lên đơn cho bạn</div>
              </div>
            </SpaceBetW>
            <SpaceBetW>
              <div>
                <AppstoreAddOutlined style={{ fontSize: "32px" }} />
              </div>
              <div>
                <h3>Đang tiến hành</h3>
                <div>Đơn hàng của bạn sẽ được chuẩn bị tại kho</div>
              </div>
            </SpaceBetW>
            <SpaceBetW>
              <div>
                <CarOutlined style={{ fontSize: "32px" }} />
              </div>
              <div>
                <h3>Đang trên đường</h3>
                <div>
                  Khi đơn hàng của bạn được chuyển đi bạn sẽ nhận được thông tin
                  theo dõi qua email.
                </div>
              </div>
            </SpaceBetW>
            <SpaceBetW>
              <div>
                <CheckOutlined style={{ fontSize: "32px" }} />
              </div>
              <div>
                <h3>Đã giao hàng</h3>
                <div>
                  Đơn hàng của bạn sẽ được giao đến địa chỉ đã chọn hoặc điểm
                  lấy hàng.
                </div>
              </div>
            </SpaceBetW>
          </Col>
        </Row>
      ) : null}
    </WrapperProfile>
  );
};
