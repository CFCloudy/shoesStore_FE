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
  const [indexImg,setIndexImg]=useState<any>(0)

  const onChooseOption=(type:String,value:any,id:Number,index:Number)=>{
    if(type=="Color"){
      setIndexImg(index)
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
  const available_sizes= [
    "M 4 / W 4.5",
    "M 4.5 / W 5",
    "M 5 / W 5.5",
    "M 5.5 / W 6",
    "M 6 / W 6.5",
    "M 6.5 / W 7",
    "M 7 / W 7.5",
    "M 7.5 / W 8",
    "M 8 / W 8.5",
    "M 8.5 / W 9",
    "M 9 / W 9.5",
    "M 9.5 / W 10",
    "M 10 / W 10.5",
    "M 10.5 / W 11",
    "M 11 / W 11.5",
    "M 11.5 / W 12",
    "M 12 / W 12.5",
    "M 12.5 / W 13",
    "M 13 / W 13.5",
    "M 13.5 / W 14",
    "M 14 / W 14.5",
    "M 14.5 / W 15",
    "M 15 / W 15.5",
    "M 15.5 / W 16",
    "M 16 / W 16.5",
  ]

  const generateProduct=()=>{
    let pr=[];
    for(let i=1;i<=25;i++){
      var obj={
        id: i,
        size: `M ${4+i-1-1} / W ${4.5+i-1-1}`,
        color: `Xanh berin`,
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: i-1,
        sku: `OLDF_OL${i}`,
      }
      pr.push(obj)
    }
    let newpr=[]
    for(let i=1;i<pr.length;i++){
      let obj={
        ...pr[i],
        size:available_sizes[i]
      }
      newpr.push(obj)
    }
    console.log(newpr)
  }

  generateProduct()

  const checkColor=(value:String)=>{
    let checkSizes=listProduct[0].variant.find((p:any)=>p.color==value&&p.size==chooseSizes)
    if(chooseSizes=="") {
      return
    }else if(chooseSizes && chooseColor=="" && checkSizes){
      if(checkSizes&&checkSizes.quantity>0){
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
    }else if(chooseSizes && chooseColor && checkSizes){
      if(checkSizes.color==chooseColor&&checkSizes.size==chooseSizes){
        if(checkSizes.quantity>0){
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
      }else if(checkSizes.quantity>0){
        return {
          check:true,
          quantity:0
        }
      }else{
        return {
          check:false,
          quantity:0
        }
      }
    }
    
  }

  
  const checkSize=(value:String)=>{
    let checkSizes=listProduct[0].variant.find((p:any)=>p.size==value&&p.color==chooseColor)
    if(chooseColor=="") {
      return
    }else if(chooseColor && chooseSizes=="" && checkSizes){
      if(checkSizes&&checkSizes.quantity>0){
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
    }else if(chooseSizes && chooseColor && checkSizes){
      if(checkSizes.color==chooseColor&&checkSizes.size==chooseSizes){
        if(checkSizes.quantity>0){
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
      else if(checkSizes.quantity>0){
        return {
          check:true,
          quantity:0
        }
      }else{
        return {
          check:false,
          quantity:0
        }
      }
    }
    
  }



  return (
    <ContainerSneaker>
      {listProduct.map((product: any,index:number) => {
        return (
          <Row gutter={[40, 20]} key={index}>
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
                {
                  product.available_colors[indexImg].src.map((img:any)=>
                    {
                      return (
                        <SwiperSlide>
                        <img src={img} />
                      </SwiperSlide>
                      )
                    }
                  )
                }
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
                {
                  product.available_colors[indexImg].src.map((img:any)=>
                    {
                      return (
                        <SwiperSlide>
                        <img src={img} />
                      </SwiperSlide>
                      )
                    }
                  )
                }
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
                      <div className="color" key={index} 
                        style={{
                          pointerEvents:`${
                            chooseSizes?checkColor(x.name)?.check?'auto':'none':'auto'
                        }`
                        }}
                      >
                        <Image
                          style={{
                            // background: `${
                            //   checkColor(x.name)?.check
                            //     ? "rgba(198, 198, 198, 0.88)"
                            //     : "#fff"
                            // }`,  
                            border:`${checkColor(x.name)?.check?'solid 1px black':'none'}`,
                          }}
                          preview={false}
                          onClick={()=>onChooseOption("Color",x.name,product.id,index)}
                          src={x.src[0]}
                        />
                        {isActiveColor&&chooseColor==x.name?<p></p>:null}
                        
                      </div>
                    );
                  })}
                </div>
                <br />
                <span>Kích cỡ</span>
                <br />
                <div className="wrap_color">
                  {
                    product.available_sizes.map((sz:any,index:Number)=>{
                      return (
                        <div className="box" 
                          onClick={()=>onChooseOption("Size",sz,product.id,index)}
                          style={{
                            background:`${isActiveSize&&chooseSizes==sz?'black':'white'}`,
                            color:`${isActiveSize&&chooseSizes==sz?'white':'black'}`, 
                            border:`${checkSize(sz)?.check?'solid 1px black':'none'}`,
                            // pointerEvents:`${
                            //   chooseColor&&chooseSizes?checkSize(sz)?.check?'auto':'none'
                            //   :'auto'
                            // }`
                            pointerEvents:`${
                                chooseColor?checkSize(sz)?.check?'auto':'none':'auto'
                            }`
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
