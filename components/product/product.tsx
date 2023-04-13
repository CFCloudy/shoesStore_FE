import { formatter } from "@/models/common";
import { Image } from "antd";
import Router from "next/router";
import { useState } from "react";
import { WrappProduct } from "./product-styled";

export interface IPopsProduct {
  data: any;
}
const lstColor = [
  {
    id: 1,
    rgba: "127, 255, 212	",
    color: "Xanh berin",
  },
  {
    id: 2,
    rgba: "245, 245, 220",
    color: "Be",
  },
  {
    id: 3,
    rgba: "0, 0, 0",
    color: "Đen",
  },
  {
    id: 4,
    rgba: "210, 180, 140",
    color: "Nâu tanin",
  },
];
export const CommonProduct = (props: IPopsProduct) => {
  const { data } = props;
  const [show, setShow] = useState<string>("");
  // const handleOnHover=()=>{
  //   setShow()
  // }

  return (
    <WrappProduct key={data.id}>
      <div className="image_product">
        <Image
          preview={false}
          // src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png"
          src={data.images[0]}
          //   className=""
        />
      </div>
      <div className="name_product" onClick={() => Router.push("/2")}>
        {data.name}
      </div>
      <div className="price_product">
        {formatter.format(data.selling_price)}
      </div>
      <div className="color">
        {data.variant.map((x: any) => {
          return (
            <div
              className="circle"
              key={x.id}
              style={{ background: `rgba(${x.rgba})` }}
            ></div>
          );
        })}
      </div>
    </WrappProduct>
  );
};

export const listProduct = [
  {
    name: "Chuck 70 Seasonal Colour Low Top",
    import_price: 16900000,
    id: 10001,
    selling_price: 18976377,
    categoryId: 349304,
    brand_name: "Converse",
    brand_id: 2222,
    category: "Shoes",
    sku: "CK_70_LT",
    gender: "Men",
    type: "Shoes",
    images: [
      "https://adidas-testbucket.s3-us-west-1.amazonaws.com/12fbe67574d44476b545ab480120201c_9366.webp",
      "https://adidas-testbucket.s3-us-west-1.amazonaws.com/206db773b3444f45b4e1ab3800c253f0_9366.webp",
      "https://adidas-testbucket.s3-us-west-1.amazonaws.com/6b835f38bfe6440ca914ab3800c24b4f_9366.webp",
      "https://adidas-testbucket.s3-us-west-1.amazonaws.com/d687864e981747e8aa9aab3800c243d0_9366.webp",
      "https://adidas-testbucket.s3-us-west-1.amazonaws.com/e6b8c1009b574fd4a0edab3800c23cab_9366.webp",
    ],
    size: ["M 4 / W 5", "M 4.5 / W 5.5", "M 5 / W 6  ", "M 5.5 / W 6.5"],
    available_colors: ["CORE BLACK", "CORE BLACK", "CARBON"],
    variant: [
      {
        id: 1,
        name: "M 4 / W 5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 12,
        sku: "CK_70_LT_1",
        images: [
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/12fbe67574d44476b545ab480120201c_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/206db773b3444f45b4e1ab3800c253f0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/6b835f38bfe6440ca914ab3800c24b4f_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/d687864e981747e8aa9aab3800c243d0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/e6b8c1009b574fd4a0edab3800c23cab_9366.webp",
        ],
      },
      {
        id: 2,
        name: "M 6 / W 7.5",
        prices: 1900000,
        quantity: 12,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_1",
        images: [
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/12fbe67574d44476b545ab480120201c_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/206db773b3444f45b4e1ab3800c253f0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/6b835f38bfe6440ca914ab3800c24b4f_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/d687864e981747e8aa9aab3800c243d0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/e6b8c1009b574fd4a0edab3800c23cab_9366.webp",
        ],
      },
      {
        id: 3,
        name: "M 4.5 / W 5.5",
        prices: 1900000,
        quantity: 12,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_1",
        images: [
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/12fbe67574d44476b545ab480120201c_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/206db773b3444f45b4e1ab3800c253f0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/6b835f38bfe6440ca914ab3800c24b4f_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/d687864e981747e8aa9aab3800c243d0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/e6b8c1009b574fd4a0edab3800c23cab_9366.webp",
        ],
      },
      {
        id: 4,
        name: "M 5 / W 6",
        prices: 1900000,
        quantity: 12,
        sku: "CK_70_LT_1",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
        images: [
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/12fbe67574d44476b545ab480120201c_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/206db773b3444f45b4e1ab3800c253f0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/6b835f38bfe6440ca914ab3800c24b4f_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/d687864e981747e8aa9aab3800c243d0_9366.webp",
          "https://adidas-testbucket.s3-us-west-1.amazonaws.com/e6b8c1009b574fd4a0edab3800c23cab_9366.webp",
        ],
      },
      // {
      //   id: 1,
      //   name: "M 5.5 / W 6.5",
      //   prices: 1900000,
      //   quantity: 12,
      //   sku: "CK_70_LT_1",
      //   images: [
      //     "https://adidas-testbucket.s3-us-west-1.amazonaws.com/12fbe67574d44476b545ab480120201c_9366.webp",
      //     "https://adidas-testbucket.s3-us-west-1.amazonaws.com/206db773b3444f45b4e1ab3800c253f0_9366.webp",
      //     "https://adidas-testbucket.s3-us-west-1.amazonaws.com/6b835f38bfe6440ca914ab3800c24b4f_9366.webp",
      //     "https://adidas-testbucket.s3-us-west-1.amazonaws.com/d687864e981747e8aa9aab3800c243d0_9366.webp",
      //     "https://adidas-testbucket.s3-us-west-1.amazonaws.com/e6b8c1009b574fd4a0edab3800c23cab_9366.webp",
      //   ],
      // },
    ],
  },
];
