import { Col, Image, Row } from "antd";
import { Fragment, useCallback, useRef } from "react";
import banner from "@/assets/banershoes.jpg";
import { ButtonBlack, SwiperCustom, WrappHomePages } from "./home-pages-styled";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CommonProduct, listProduct } from "../product/product";
export const HomePages = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <WrappHomePages>
      <Image
        src={
          "https://converse.ca/media/wysiwyg/cms_upload/home/1-col/2-15/D-HP-P1-CTAS-Construct-Shai-.jpg"
        }
        preview={false}
        className="img_bg"
      />
      <div className="visual_nav">
        <h2>Bạn muốn mua sắm cho ?</h2>
        <Row gutter={[20, 20]}>
          <Col xs={24} md={8}>
            <div className="wrapp_visual">
              <Image
                preview={false}
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/viVN/Images/nav-men-d_tcm337-819364.jpg"
              />
              <div className="content">Nam</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="wrapp_visual">
              <Image
                preview={false}
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/viVN/Images/nav-women-d_tcm337-819363.jpg "
              />
              <div className="content">Nữ</div>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="wrapp_visual">
              <Image
                preview={false}
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/viVN/Images/nav-kids-d_tcm337-819367.jpg"
              />
              <div className="content">Trẻ em</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="nav_style">
        <span>Just In: Mercurial Dream Speed 6</span>
        <h2>Dream Fast </h2>
        <p>
          Inspired by Cristiano. Designed to meet the needs of the fastest
          player on earth.
        </p>
        <ButtonBlack>Mua ngay</ButtonBlack>
      </div>
      <div className="nav_slider">
        <div className="swiper_navigator">
          <span className="view_all">Xem tất cả</span>
          <div className="prev" onClick={handlePrev}>
            <LeftOutlined />
          </div>
          <div className="next" onClick={handleNext}>
            <RightOutlined />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          ref={sliderRef}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {listProduct.map((x, index: number) => {
            return (
              <SwiperSlide className="swiperSlide" key={index}>
                <CommonProduct data={x} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </WrappHomePages>
  );
};
