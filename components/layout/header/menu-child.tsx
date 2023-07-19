import { data_category } from "@/data/data_category";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { ContainerMenuChild, WrapperChild } from "./header-styled";

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
}

export const MenuChild = (props: IMenuChild) => {
  const { isOpen, onMouseLeave, mainTitle } = props;

  const data = data_category.find((x: any) => x.name == mainTitle);
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
        {data?.children_category.map((x: any, index: number) => {
          return (
            <Col key={index} span={4} className="wrapp_col">
              <WrapperChild>
                <div className="title">{x.name}</div>
                <ul>
                  {x.sub_sub_category.map((c: any) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
                </ul>
              </WrapperChild>
            </Col>
          );
        })}
      </Row>
    </ContainerMenuChild>
  );
};
