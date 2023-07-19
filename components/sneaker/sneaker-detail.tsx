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
import { Col, Image, Row, message } from "antd";
import { formatter } from "@/models/common";
import { listProduct } from "../product/product";
import { Confirm } from "../dialog_size";
import { ButtonBlack } from "../home-pages/home-pages-styled";
import { CSSProperties } from "styled-components";
import Router from "next/router";
import { useAppDispatch } from "@/app/hook";
import { updateStorageValue } from "@/features/user-slice";


export interface IAddToCart {
  cartToken?: string;
  userId?: string;
  productVariantId: number;
  price: number;
  quantity: number;
  img?:string
}

export interface ICartResponse {
  cartSessionId: string;
  total: number;
  items: IAddToCart[]
}
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
  }

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
  const dispatch=useAppDispatch()
  const handleAddToCard=()=>{
    const cartstorage=
    typeof window !== "undefined" ? localStorage.getItem("cart") : undefined;
   var cart= cartstorage
   ? (JSON.parse(cartstorage) as ICartResponse)
   : ({} as ICartResponse);
    
    if(chooseColor&&chooseSizes){
      let productVariant=listProduct[0].variant.find((p:any)=>p.color==chooseColor&&p.size==chooseSizes)
      if(productVariant){
        let payload: IAddToCart = {
          quantity: 1,
          price: productVariant.prices,
          productVariantId: productVariant.id,
          img:listProduct.find(x=>x.id==Number(Router.query.id))?.available_colors[indexImg].src[0]
        };
        
        if(cart.cartSessionId){
          var it=cart.items.find(x=>x.productVariantId==payload.productVariantId)
          if(it){
            it.quantity=it.quantity+1;
          }else{
            cart.items=[...cart.items,payload]

          }
        }else{
          cart.items=[payload]
        cart.cartSessionId='001',
        cart.total=payload.price
        }
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(cart));
        }
        // dispatch(updateStorageValue(cart))
      }
     

      message.success(`Bạn đã thêm sản phẩm ${productVariant?.sku} vào giỏ hàng thành công`)
    }else if(chooseColor==""&&chooseSizes==""){
      message.error(`Bạn chưa chọn màu sắc và kích cỡ sản phẩm `)
    }
    else if(chooseColor==""||chooseSizes==""){
      message.error(`Bạn chưa chọn ${chooseColor==""?"màu sắc của sản phẩm":"kích cỡ của sản phẩm"}`)
    }

    
  }

  return (
    <ContainerSneaker>
      {listProduct.filter(x=>x.id==Number(Router.query.id)).map((product: any,index:number) => {
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
                <ButtonBlack onClick={handleAddToCard}>Thêm vào giỏ hàng</ButtonBlack>
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
