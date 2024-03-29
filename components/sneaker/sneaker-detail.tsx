import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  ContainerSneaker,
  SizeGuid,
  Swap_Product_Detail,
} from "./sneaker-pages-styled";
import { FreeMode, Navigation, Thumbs, Scrollbar, EffectCube } from "swiper";
import React, { useEffect, useState } from "react";
import { Col, Image, Row, message } from "antd";
import { formatter } from "@/models/common";
import { listProduct } from "../product/product";
import { Confirm } from "../dialog_size";
import { ButtonBlack } from "../home-pages/home-pages-styled";
import { CSSProperties } from "styled-components";
import Router from "next/router";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { selectUser, updateStorageValue } from "@/features/user-slice";
import { getProductDetail } from "@/features/product-slice";
import { IAddToCart } from "@/models/order";
import { AddToCart, getCart, selectOrder } from "@/features/order-slice";

export const SneakerDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [idColorChooes, setIdColorChooes] = useState<Number>();
  const [idSizeChooes, setIdSizeChooes] = useState<Number>();
  const [notExist, setNotExist] = useState<any>();
  const [isActiveColor, setIsActiveColor] = useState<boolean>(false);
  const [isActiveSize, setIsActiveSize] = useState<boolean>(false);
  const [chooseColor, setChooseColor] = useState<String>("");
  const [chooseSizes, setChooseSizes] = useState<String>("");
  const [indexImg, setIndexImg] = useState<any>(0);
  const [price, setPrice] = useState<number>(0);
  const [data, setData] = useState<any>();
  const onChooseOption = (
    type: String,
    value: any,
    id: Number,
    index: Number
  ) => {
    if (type == "Color") {
      setIndexImg(index);
      let checkColor = data.shoesVariantDTOs.find((p: any) => p.color == value);
      console.log(checkColor);
      if (checkColor) {
        if (isActiveColor && chooseColor == value) {
          setIsActiveColor(false);
          setChooseColor("");
          setIdColorChooes(0);
          setPrice(0);
        } else {
          setIsActiveColor(true);
          setChooseColor(value);
          setIdColorChooes(id);
          setPrice(checkColor.price);
        }
      }
    } else if (type == "Size") {
      let checkSize = data.shoesVariantDTOs.find(
        (p: any) => p.size == String(value)
      );
      if (checkSize) {
        if (isActiveSize && chooseSizes == String(value)) {
          setIdSizeChooes(0);
          setChooseSizes("");
          setIsActiveSize(false);
        } else {
          setIdSizeChooes(id);
          setChooseSizes(value);
          setIsActiveSize(true);
        }
      }
    }
  };
  const { id } = Router.query;

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(getProductDetail(Number(Router.query.id)))
        .unwrap()
        .then()
        .then((res: any) => {
          setData(res);
        });
    }
  }, [Router.query.id]);

  const checkColor = (value: String) => {
    let checkSizes = data.shoesVariantDTOs.find(
      (p: any) => p.color == value && p.size == chooseSizes
    );
    if (chooseSizes == "") {
      return;
    } else if (chooseSizes && chooseColor == "" && checkSizes) {
      if (checkSizes && checkSizes.quantity > 0) {
        return {
          check: true,
          quantity: checkSizes.quantity,
        };
      } else {
        return {
          check: false,
          quantity: 0,
        };
      }
    } else if (chooseSizes && chooseColor && checkSizes) {
      if (checkSizes.color == chooseColor && checkSizes.size == chooseSizes) {
        if (checkSizes.quantity > 0) {
          return {
            check: true,
            quantity: checkSizes.quantity,
          };
        } else {
          return {
            check: false,
            quantity: 0,
          };
        }
      } else if (checkSizes.quantity > 0) {
        return {
          check: true,
          quantity: 0,
        };
      } else {
        return {
          check: false,
          quantity: 0,
        };
      }
    }
  };

  const checkSize = (value: String) => {
    let checkSizes = data.shoesVariantDTOs.find(
      (p: any) => p.size == value && p.color == chooseColor
    );
    if (chooseColor == "") {
      return;
    } else if (chooseColor && chooseSizes == "" && checkSizes) {
      if (checkSizes && checkSizes.quantity > 0) {
        return {
          check: true,
          quantity: checkSizes.quantity,
        };
      } else {
        return {
          check: false,
          quantity: 0,
        };
      }
    } else if (chooseSizes && chooseColor && checkSizes) {
      if (checkSizes.color == chooseColor && checkSizes.size == chooseSizes) {
        if (checkSizes.quantity > 0) {
          return {
            check: true,
            quantity: checkSizes.quantity,
          };
        } else {
          return {
            check: false,
            quantity: 0,
          };
        }
      } else if (checkSizes.quantity > 0) {
        return {
          check: true,
          quantity: 0,
        };
      } else {
        return {
          check: false,
          quantity: 0,
        };
      }
    }
  };
  const dispatch = useAppDispatch();
  const { loginInfo } = useAppSelector(selectUser);
  const { loading } = useAppSelector(selectOrder);
  const [choseShoes, setChoseShoes] = useState<any>();
  const handleAddToCard = () => {
    if (!loginInfo || !loginInfo.payload) {
      message.error("Vui lòng đăng nhập, hoặc đăng ký rồi tiếp tục mua hàng");
      return;
    }
    if (chooseColor && chooseSizes) {
      let productVariant = data.shoesVariantDTOs.find(
        (p: any) => p.color == chooseColor && p.size == String(chooseSizes)
      );

      setChoseShoes(productVariant);
      let payload: IAddToCart = {
        userId: loginInfo.payload.profilesID,
        cartItemDTOs: [
          {
            price: productVariant?.price,
            quantity: 1,
            ProductVariantId: productVariant.id,
          },
        ],
      };
      dispatch(AddToCart(payload))
        .unwrap()
        .then()
        .then((res: any) => {
          message.success(
            `Bạn đã thêm sản phẩm ${productVariant?.variantName} vào giỏ hàng thành công`
          );
          if (loginInfo && loginInfo.payload) {
            dispatch(getCart(loginInfo.payload.profilesID))
              .unwrap()
              .then()
              .then((res: any) => {});
          }
        })
        .catch((e: any) => {
          message.error("Số lượng trong kho không đủ để thêm!");
        });
    } else if (chooseColor == "" && chooseSizes == "") {
      message.error(`Bạn chưa chọn màu sắc và kích cỡ sản phẩm `);
    } else if (chooseColor == "" || chooseSizes == "") {
      message.error(
        `Bạn chưa chọn ${
          chooseColor == "" ? "màu sắc của sản phẩm" : "kích cỡ của sản phẩm"
        }`
      );
    }
  };

  return (
    <ContainerSneaker>
      {data ? (
        <Row gutter={[40, 20]} key={data.id}>
          <Col xs={24} md={24} xxl={15} lg={15}>
            {data.available_colors[indexImg] ? (
              <React.Fragment>
                <Swiper
                  style={
                    {
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    } as CSSProperties
                  }
                  scrollbar={{
                    hide: true,
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                  className="mySwiper2"
                >
                  {data.available_colors[indexImg] &&
                    data.available_colors[indexImg].imageVariants.map(
                      (img: any, index: number) => {
                        return (
                          <SwiperSlide key={index}>
                            <img src={img.url} />
                          </SwiperSlide>
                        );
                      }
                    )}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  grabCursor={true}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
                  scrollbar={{
                    hide: true,
                  }}
                  className="mySwiper"
                >
                  {data.available_colors[indexImg] &&
                    data.available_colors[indexImg].imageVariants.map(
                      (img: any, index: number) => {
                        return (
                          <SwiperSlide key={index}>
                            <img src={img.url} />
                          </SwiperSlide>
                        );
                      }
                    )}
                </Swiper>
              </React.Fragment>
            ) : null}
          </Col>
          <Col xs={24} md={24} xxl={9} lg={9}>
            <Swap_Product_Detail>
              <div className="name">{data.productName}</div>
              <div className="price">
                {formatter.format(price == 0 ? data.displayPrice : price)}
              </div>
              <div className="decription">{data.description}</div>
              <hr />
              <br />
              <span className="title">Màu sắc</span>

              <div className="wrap_color">
                {data.available_colors.map((x: any, index: number) => {
                  return (
                    <div
                      className="color"
                      key={index}
                      style={{
                        pointerEvents: `${
                          chooseSizes
                            ? checkColor(x.name)?.check
                              ? "auto"
                              : "none"
                            : "auto"
                        }`,
                      }}
                    >
                      <Image
                        style={{
                          // background: `${
                          //   checkColor(x.name)?.check
                          //     ? "rgba(198, 198, 198, 0.88)"
                          //     : "#fff"
                          // }`,
                          border: `${
                            checkColor(x.name)?.check
                              ? "solid 1px black"
                              : "none"
                          }`,
                        }}
                        preview={false}
                        onClick={() =>
                          onChooseOption("Color", x.name, data.id, index)
                        }
                        src={x.imageVariants[0].url}
                      />
                      {isActiveColor && chooseColor == x.name ? <p></p> : null}
                    </div>
                  );
                })}
              </div>
              <br />
              <span>Kích cỡ</span>
              <br />
              <div className="wrap_color">
                {data.available_sizes.map((sz: any, index: Number) => {
                  return (
                    <div
                      className="box"
                      onClick={() => onChooseOption("Size", sz, data.id, index)}
                      style={{
                        background: `${
                          isActiveSize && chooseSizes == sz ? "black" : "white"
                        }`,
                        color: `${
                          isActiveSize && chooseSizes == sz ? "white" : "black"
                        }`,
                        border: `${
                          checkSize(sz)?.check
                            ? "solid 1px black"
                            : "0.0625rem solid #e5e5e5"
                        }`,
                        // pointerEvents:`${
                        //   chooseColor&&chooseSizes?checkSize(sz)?.check?'auto':'none'
                        //   :'auto'
                        // }`
                        pointerEvents: `${
                          chooseColor
                            ? checkSize(sz)?.check
                              ? "auto"
                              : "none"
                            : "auto"
                        }`,
                      }}
                      key={sz}
                    >
                      {sz}
                    </div>
                  );
                })}
              </div>
              <br />
              <hr />
              <br />
              <p
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsConfirm(true);
                }}
              >
                Hướng dẫn chọn size
              </p>
              <ButtonBlack onClick={handleAddToCard} loading={loading}>
                Thêm vào giỏ hàng
              </ButtonBlack>
            </Swap_Product_Detail>
          </Col>
          <div className="decription">{data.descriptionDetails}</div>
        </Row>
      ) : null}
      <Confirm
        buttonLeft={""}
        buttonRight={""}
        changeActive={(e: any) => setIsConfirm(e)}
        content={""}
        handleAction={() => console.log(1)}
        title={""}
        stateButton={false}
        wrapper={
          <SizeGuid>
            <h1 style={{ textAlign: "center" }}>Hướng dẫn chọn size giày</h1>
            <p>Hotline tư vấn chọn size: 090000099</p>

            <div>Bảng Size giày nam</div>
          </SizeGuid>
        }
        width={"720px"}
        openModalConfirm={isConfirm}
      />
    </ContainerSneaker>
  );
};
