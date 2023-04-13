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
import { useState } from "react";
import { Col, Image, Row } from "antd";
import { formatter } from "@/models/common";
import { listProduct } from "../product/product";
import { Confirm } from "../dialog_size";
import { ButtonBlack } from "../home-pages/home-pages-styled";
export const SneakerDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  return (
    <ContainerSneaker>
      {listProduct.map((product: any) => {
        return (
          <Row gutter={[40, 20]}>
            <Col xs={24} md={24} xxl={15} lg={15}>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
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
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_b_107x1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_g_107x1_2nd.jpg" />
                </SwiperSlide>
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
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_b_107x1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_g_107x1_2nd.jpg" />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col xs={24} md={24} xxl={9} lg={9}>
              <Swap_Product_Detail>
                <div className="name">{product.name}</div>
                <div className="price">
                  {formatter.format(product.selling_price)}
                </div>
                <div className="decription">
                  The Converse All Star Chuck ’70 is our re-crafted sneaker that
                  uses modern details to cele
                </div>
                <hr />
                <br />
                <span className="title">Màu sắc</span>

                <div className="wrap_color">
                  {product.available_colors.map((x: any, index: number) => {
                    return (
                      <div className="color" key={index}>
                        <Image
                          preview={false}
                          src="https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/m/7/m7650_a_107x1_2nd.jpg"
                        />
                        <p></p>
                      </div>
                    );
                  })}
                </div>
                <br />
                <span>Kích cỡ</span>
                <br />
                <div className="wrap_color">
                  <div className="box">M3 / W5</div>
                  <div className="box">M3 / W5</div>
                  <div className="box">M3 / W5</div>
                  <div className="box">M3 / W5</div>
                  <div className="box">M3 / W5</div>
                  <div className="box">M3 / W5</div>
                  <div className="box">M3 / W5</div>
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
                <ButtonBlack>Thêm vào giỏ hàng</ButtonBlack>
              </Swap_Product_Detail>
            </Col>
          </Row>
        );
      })}
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
