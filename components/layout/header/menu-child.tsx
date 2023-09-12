import { data_category } from "@/data/data_category";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { ContainerMenuChild, WrapperChild } from "./header-styled";
import { IBrandsResponse, IFeaturesResponse, IStylesResponse } from "@/models/product";
import { useEffect, useState } from "react";
import { getListBrands, getListFeature, getListStyles } from "@/features/product-slice";
import { useAppDispatch } from "@/app/hook";
import Router from "next/router";

const child = [
  {
    id: "1",
    title: "Nổi bật",
    mnchil: [
      {
        id: "c1",
        content: "Hàng mới về",
      },
      {
        id: "c2",
        content: "Ultraboost",
      },
      {
        id: "c3",
        content: "Adidas",
      },
      {
        id: "c4",
        content: "Air ford 1",
      },
      {
        id: "c5",
        content: "Jodan",
      },
      {
        id: "c6",
        content: "Nike",
      },
      {
        id: "c7",
        content: "Vans",
      },
      {
        id: "c8",
        content: "Vans Old Schools",
      },
    ],
  },
];

export interface IMenuChild {
  isOpen: string;
  onMouseLeave: any;
  mainTitle: string;
  onClickState:any
}

export const MenuChild = (props: IMenuChild) => {
  const { isOpen, onMouseLeave, mainTitle ,onClickState} = props;
  const [dataStyles, setDataStyles] = useState<IStylesResponse[]>([]);
  const [dataBrands, setDataBrands] = useState<IBrandsResponse[]>([]);
  const [dataFeature, setDataFeatures] = useState<IFeaturesResponse[]>([]);
  const data = data_category.find((x: any) => x.name == mainTitle);
  const dispatch=useAppDispatch();
  useEffect(() => {
    dispatch(getListFeature())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataFeatures(res);
      })
      .catch((er: any) => {});
  }, []);
  useEffect(() => {
    dispatch(getListBrands())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataBrands(res);
      })
      .catch((er: any) => {});
  }, []);

  useEffect(() => {
    dispatch(getListStyles())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataStyles(res);
      })
      .catch((er: any) => {});
  }, []);
  return (
    <ContainerMenuChild
      style={{ display: `${isOpen}` }}
      onMouseLeave={onMouseLeave}
    >
      <div className="main_title">
        <ArrowRightOutlined style={{ marginRight: "10px" }} />
        Tất cả sản phẩm {mainTitle}
      </div>
      <hr />
      <Row gutter={[20, 20]}>
          
            <Col  span={4} className="wrapp_col">
              <WrapperChild>
                <div className="title">Phong cách</div>
                <ul>
                  {dataStyles&&dataStyles.map((c: any) => (
                    <li key={c.id} onClick={()=>{
                      Router.push({query:{id:c.id,type:'style',name:c.styleName},pathname:'/sneaker'})
                      onClickState();
                    }}>{c.styleName}</li>
                  ))}
                </ul>
              </WrapperChild>
            </Col>
            <Col  span={4} className="wrapp_col">
              <WrapperChild>
                <div className="title">Hãng giày</div>
                <ul>
                  {dataBrands&&dataBrands.map((c: any) => (
                    <li key={c.id} onClick={()=>{
                      Router.push({query:{id:c.id,type:'brand',name:c.brandName},pathname:'/sneaker'})
                      onClickState();
                    }}>{c.brandName}</li>
                  ))}
                </ul>
              </WrapperChild>
            </Col>
            <Col  span={4} className="wrapp_col">
              <WrapperChild>
                <div className="title">Đặc điểm nổi bật</div>
                <ul>
                  {dataFeature&&dataFeature.map((c: any) => (
                    <li key={c.id} onClick={()=>{
                      Router.push({query:{id:c.id,type:'feature',name:c.featureName},pathname:'/sneaker'})
                      onClickState();
                    }}>{c.featureName}</li>
                  ))}
                </ul>
              </WrapperChild>
            </Col>
      </Row>
    </ContainerMenuChild>
  );
};
