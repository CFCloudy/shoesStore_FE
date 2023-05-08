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
import { CSSProperties } from "styled-components";
export const SneakerDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [idColorChooes,setIdColorChooes]=useState<Number>()
  const [idSizeChooes,setIdSizeChooes]=useState<Number>()
  const [notExist,setNotExist]=useState<any>();
  const [isActiveColor,setIsActiveColor]=useState<boolean>(false)
  const [isActiveSize,setIsActiveSize]=useState<boolean>(false)
  const [chooseColor,setChooseColor]=useState<String>('')
  const [chooseSizes,setChooseSizes]=useState<String>('')

  const onChooseOption=(type:String,value:any,id:Number)=>{
    if(type=="Color"){
      let checkColor=listProduct[0].variant.find((p:any)=>p.color==value)
      if(checkColor){
        if(isActiveColor&&chooseColor==value){
          setIsActiveColor(false)
          setChooseColor('')
          setIdColorChooes(0)
        }else{
          setIsActiveColor(true)
          setChooseColor(value)
          setIdColorChooes(id)
        }
      }
    }else if(type=="Size"){
      let checkSize=listProduct[0].variant.find((p:any)=>p.size==value)
      if(checkSize){
        if(isActiveSize&&chooseSizes==value){
          setIdSizeChooes(0)
          setChooseSizes('')
          setIsActiveSize(false)
        }else{
          setIdSizeChooes(id)
          setChooseSizes(value)
          setIsActiveSize(true)
        }
      }
    }
  }

  const checkColor=(value:String)=>{
    let checkColor=listProduct[0].variant.find((p:any)=>p.color==value)
    if(checkColor){
      return {
        check:true,
        quantity:checkColor.quantity
      }
    }else{
      return {
        check:false,
        quantity:0
      }
    }
  }
  const checkSize=(value:String)=>{
    let checkSizes=listProduct[0].variant.find((p:any)=>p.size==value)
    if(checkSizes){
      return {
        check:true,
        quantity:checkSizes.quantity
      }
    }else{
      return {
        check:false,
        quantity:0
      }
    }
  }

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
                } as CSSProperties}
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
                      <div className="color" key={index} >
                        <Image
                          style={{
                            border:`${isActiveColor&&chooseColor==x?'solid 1px #c9192e':'none'}`,
                            background: `${
                              checkColor(x)&&checkColor(x).quantity>0
                                ? "rgba(198, 198, 198, 0.88)"
                                : "#fff"
                            }`,  
                          }}
                          preview={false}
                          onClick={()=>onChooseOption("Color",x,product.id)}
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
                  {
                    product.sizes.map((sz:any)=>{
                      return (
                        <div className="box" 
                          onClick={()=>onChooseOption("Size",sz,product.id)}
                          style={{
                            border:`${isActiveSize&&chooseSizes==sz?'solid 1px #c9192e':'none'}`,
                            background: `${
                              checkSize(sz).check&&checkSize(sz).quantity>0
                              ? "rgba(198, 198, 198, 0.88) !important"
                              : "#fff !important"
                            }`, 
                          }}
                        >{sz}</div>
                      )
                    })
                  }
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
