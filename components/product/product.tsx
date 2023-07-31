import { formatter } from "@/models/common";
import { Image } from "antd";
import Router, { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <WrappProduct key={data.id}>
      <div className="image_product">
        {/* <Image preview={false} src={data.images[0]} /> */}
        <Image preview={false} src={data.displayImage} className="image" />
      </div>
      <div
        className="name_product"
        onClick={() => {
          router.push(`/sneaker/detail/${data.id}`);
        }}
      >
        {data.productName}
      </div>
      <div className="price_product">{formatter.format(data.displayPrice)}</div>
      <div className="color">
        {data.available_colors.map((x: any, index: number) => {
          return (
            <div
              className="circle"
              key={index}
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
      "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg",
      "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_b_107x1_2nd.jpg",
      "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg",
      "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_g_107x1_2nd.jpg",
      "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg",
    ],
    available_sizes: [
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
    ],
    available_colors: [
      {
        name: "Xanh berin",
        src: [
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02756c_a_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02756c_b_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02756c_c_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02756c_d_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02756c_f_107x1.jpg",
        ],
        rgba: "245, 245, 220",
      },
      {
        name: "Be",
        rgba: "210, 180, 140",
        src: [
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02757c_a_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02757c_b_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02757c_c_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02757c_d_107x1.jpg",
          "https://converse.ca/media/catalog/product/cache/f9d46213ae1d882c35b397bec3e31308/a/0/a02757c_f_107x1.jpg",
        ],
      },
      {
        name: "Đen",
        src: [
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_b_107x1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_g_107x1_2nd.jpg",
        ],
        rgba: "0,0,0",
      },
      {
        name: "Nâu tanin",
        src: [
          "https://nguyenlieulammyphamvn.com/wp-content/uploads/2020/12/m%C3%A0u-n%C3%A2u-tan-n%C6%B0%E1%BB%9Bc-4-510x510.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_a_107x1_1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_b_107x1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_c_107x1_2nd.jpg",
          "https://converse.ca/media/catalog/product/cache/7675cebc3e2f09ee2a340c17d68ace33/m/9/m9006c_g_107x1_2nd.jpg",
        ],
        rgba: "210, 180, 140",
      },
    ],
    variant: [
      {
        id: 1,
        size: "M 4 / W 4.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_1",
      },
      {
        id: 2,
        size: "M 4.5 / W 5",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_2",
      },
      {
        id: 3,
        size: "M 5 / W 5.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_3",
      },
      {
        id: 4,
        size: "M 5.5 / W 6",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_4",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 5,
        size: "M 6 / W 6.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_5",
      },
      {
        id: 6,
        size: "M 6.5 / W 7",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_6",
      },
      {
        id: 7,
        size: "M 7 / W 7.5",
        prices: 1900000,
        quantity: 0,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_7",
      },
      {
        id: 8,
        size: "M 7.5 / W 8",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_8",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 9,
        size: "M 8 / W 8.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_9",
      },
      {
        id: 10,
        size: "M 8.5 / W 9",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_10",
      },
      {
        id: 11,
        size: "M 9 / W 9.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_11",
      },
      {
        id: 12,
        size: "M 9.5 / W 10",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_12",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 13,
        size: "M 10 / W 10.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_13",
      },
      {
        id: 14,
        size: "M 10.5 / W 11",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_14",
      },
      {
        id: 15,
        size: "M 11 / W 11.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_15",
      },
      {
        id: 16,
        size: "M 11.5 / W 12",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_16",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 17,
        size: "M 12 / W 12.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_17",
      },
      {
        id: 18,
        size: "M 12.5 / W 13",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_18",
      },
      {
        id: 19,
        size: "M 13 / W 13.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_19",
      },
      {
        id: 20,
        size: "M 13.5 / W 14",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_20",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 21,
        size: "M 14 / W 14.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_21",
      },
      {
        id: 22,
        size: "M 14.5 / W 15",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_22",
      },
      {
        id: 23,
        size: "M 15 / W 15.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_23",
      },
      {
        id: 24,
        size: "M 15.5 / W 16",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_24",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 25,
        size: "M 16 / W 16.5",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_25",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 26,
        size: "M 4 / W 4.5",
        color: "Be",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_1",
      },
      {
        id: 27,
        size: "M 4.5 / W 5",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_2",
      },
      {
        id: 28,
        size: "M 5 / W 5.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Be",
        sku: "CK_70_LT_3",
      },
      {
        id: 29,
        size: "M 5.5 / W 6",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_4",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 30,
        size: "M 6 / W 6.5",
        color: "Be",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_5",
      },
      {
        id: 31,
        size: "M 6.5 / W 7",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_6",
      },
      {
        id: 32,
        size: "M 7 / W 7.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Be",
        sku: "CK_70_LT_7",
      },
      {
        id: 33,
        size: "M 7.5 / W 8",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_8",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 34,
        size: "M 8 / W 8.5",
        color: "Be",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_9",
      },
      {
        id: 35,
        size: "M 8.5 / W 9",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_10",
      },
      {
        id: 36,
        size: "M 9 / W 9.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Be",
        sku: "CK_70_LT_11",
      },
      {
        id: 37,
        size: "M 9.5 / W 10",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_12",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 38,
        size: "M 10 / W 10.5",
        color: "Be",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_13",
      },
      {
        id: 39,
        size: "M 10.5 / W 11",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_14",
      },
      {
        id: 40,
        size: "M 11 / W 11.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Be",
        sku: "CK_70_LT_15",
      },
      {
        id: 41,
        size: "M 11.5 / W 12",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_16",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 42,
        size: "M 12 / W 12.5",
        color: "Be",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_17",
      },
      {
        id: 43,
        size: "M 12.5 / W 13",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_18",
      },
      {
        id: 44,
        size: "M 13 / W 13.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Be",
        sku: "CK_70_LT_19",
      },
      {
        id: 45,
        size: "M 13.5 / W 14",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_20",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 46,
        size: "M 14 / W 14.5",
        color: "Be",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_21",
      },
      {
        id: 47,
        size: "M 14.5 / W 15",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Be",
        sku: "CK_70_LT_22",
      },
      {
        id: 48,
        size: "M 15 / W 15.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Be",
        sku: "CK_70_LT_23",
      },
      {
        id: 49,
        size: "M 15.5 / W 16",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_24",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 50,
        size: "M 16 / W 16.5",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_25",
        rgba: "210, 180, 140",
        color: "Be",
      },
      {
        id: 51,
        size: "M 4 / W 4.5",
        color: "Nâu tanin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_1",
      },
      {
        id: 52,
        size: "M 4.5 / W 5",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Nâu tanin",
        sku: "CK_70_LT_2",
      },
      {
        id: 53,
        size: "M 5 / W 5.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Nâu tanin",
        sku: "CK_70_LT_3",
      },
      {
        id: 54,
        size: "M 5.5 / W 6",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_4",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 55,
        size: "M 6 / W 6.5",
        color: "Nâu tanin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_5",
      },
      {
        id: 56,
        size: "M 6.5 / W 7",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Nâu tanin",
        sku: "CK_70_LT_6",
      },
      {
        id: 57,
        size: "M 7 / W 7.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Nâu tanin",
        sku: "CK_70_LT_7",
      },
      {
        id: 58,
        size: "M 7.5 / W 8",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_8",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 59,
        size: "M 8 / W 8.5",
        color: "Nâu tanin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_9",
      },
      {
        id: 60,
        size: "M 8.5 / W 9",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Nâu tanin",
        sku: "CK_70_LT_10",
      },
      {
        id: 61,
        size: "M 9 / W 9.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Nâu tanin",
        sku: "CK_70_LT_11",
      },
      {
        id: 62,
        size: "M 9.5 / W 10",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_12",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 63,
        size: "M 10 / W 10.5",
        color: "Nâu tanin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 10,
        sku: "CK_70_LT_13",
      },
      {
        id: 64,
        size: "M 10.5 / W 11",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Nâu tanin",
        sku: "CK_70_LT_14",
      },
      {
        id: 65,
        size: "M 11 / W 11.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Nâu tanin",
        sku: "CK_70_LT_15",
      },
      {
        id: 66,
        size: "M 11.5 / W 12",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_16",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 67,
        size: "M 12 / W 12.5",
        color: "Nâu tanin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_17",
      },
      {
        id: 68,
        size: "M 12.5 / W 13",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Nâu tanin",
        sku: "CK_70_LT_18",
      },
      {
        id: 69,
        size: "M 13 / W 13.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Nâu tanin",
        sku: "CK_70_LT_19",
      },
      {
        id: 70,
        size: "M 13.5 / W 14",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_20",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 71,
        size: "M 14 / W 14.5",
        color: "Nâu tanin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_21",
      },
      {
        id: 72,
        size: "M 14.5 / W 15",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Nâu tanin",
        sku: "CK_70_LT_22",
      },
      {
        id: 73,
        size: "M 15 / W 15.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Nâu tanin",
        sku: "CK_70_LT_23",
      },
      {
        id: 74,
        size: "M 15.5 / W 16",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_74",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 75,
        size: "M 16 / W 16.5",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_75",
        rgba: "210, 180, 140",
        color: "Nâu tanin",
      },
      {
        id: 76,
        size: "M 4 / W 4.5",
        color: "Đen",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_1",
      },
      {
        id: 77,
        size: "M 4.5 / W 5",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Đen",
        sku: "CK_70_LT_2",
      },
      {
        id: 78,
        size: "M 5 / W 5.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_3",
      },
      {
        id: 79,
        size: "M 5.5 / W 6",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_4",
        rgba: "210, 180, 140",
        color: "Đen",
      },
      {
        id: 80,
        size: "M 6 / W 6.5",
        color: "Đen",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 3,
        sku: "CK_70_LT_5",
      },
      {
        id: 81,
        size: "M 6.5 / W 7",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Đen",
        sku: "CK_70_LT_6",
      },
      {
        id: 82,
        size: "M 7 / W 7.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_7",
      },
      {
        id: 83,
        size: "M 7.5 / W 8",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_8",
        rgba: "210, 180, 140",
        color: "Đen",
      },
      {
        id: 84,
        size: "M 8 / W 8.5",
        color: "Đen",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_9",
      },
      {
        id: 85,
        size: "M 8.5 / W 9",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Đen",
        sku: "CK_70_LT_10",
      },
      {
        id: 86,
        size: "M 9 / W 9.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_11",
      },
      {
        id: 87,
        size: "M 9.5 / W 10",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_12",
        rgba: "210, 180, 140",
        color: "Đen",
      },
      {
        id: 88,
        size: "M 10 / W 10.5",
        color: "Đen",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_13",
      },
      {
        id: 89,
        size: "M 10.5 / W 11",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Đen",
        sku: "CK_70_LT_14",
      },
      {
        id: 90,
        size: "M 11 / W 11.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_15",
      },
      {
        id: 91,
        size: "M 11.5 / W 12",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_16",
        rgba: "210, 180, 140",
        color: "Đen",
      },
      {
        id: 92,
        size: "M 12 / W 12.5",
        color: "Đen",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_17",
      },
      {
        id: 93,
        size: "M 12.5 / W 13",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Đen",
        sku: "CK_70_LT_18",
      },
      {
        id: 94,
        size: "M 13 / W 13.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_19",
      },
      {
        id: 95,
        size: "M 13.5 / W 14",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_20",
        rgba: "210, 180, 140",
        color: "Đen",
      },
      {
        id: 96,
        size: "M 14 / W 14.5",
        color: "Đen",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_21",
      },
      {
        id: 97,
        size: "M 14.5 / W 15",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Đen",
        sku: "CK_70_LT_22",
      },
      {
        id: 98,
        size: "M 15 / W 15.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Đen",
        sku: "CK_70_LT_23",
      },
      {
        id: 99,
        size: "M 15.5 / W 16",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_74",
        rgba: "210, 180, 140",
        color: "Đen",
      },
      {
        id: 100,
        size: "M 16 / W 16.5",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_75",
        rgba: "210, 180, 140",
        color: "Đen",
      },
    ],
  },
  {
    name: "ADISTAR CS 2.0 SHOES",
    import_price: 5200000,
    id: 100021,
    selling_price: 3640000,
    categoryId: 349304,
    brand_name: "Adidas",
    brand_id: 2222,
    category: "Shoes",
    sku: "CK_70_LT",
    gender: "Men",
    type: "Shoes",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b38cb5e1e1f6443e856c9e7f70f0241b_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d981a50ef584d93a10e814b309fe607_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbdfff8a842c44b2a543a13ade0ed23a_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM5.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/080a81e0ff6443919068bfca3c9b7906_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM20.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9abf959fdb5241afaca6c97279165cd6_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM8.jpg",
    ],
    available_sizes: [
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
    ],
    available_colors: [
      {
        name: "Xanh berin",
        rgba: "245, 245, 220",
        src: [
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b38cb5e1e1f6443e856c9e7f70f0241b_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM1.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d981a50ef584d93a10e814b309fe607_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM4.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbdfff8a842c44b2a543a13ade0ed23a_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM5.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/080a81e0ff6443919068bfca3c9b7906_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM20.jpg",
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9abf959fdb5241afaca6c97279165cd6_9366/Adistar_CS_2.0_Shoes_White_HP9636_HM8.jpg",
        ],
      },
    ],
    variant: [
      {
        id: 1,
        size: "M 4 / W 4.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_1",
      },
      {
        id: 2,
        size: "M 4.5 / W 5",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_2",
      },
      {
        id: 3,
        size: "M 5 / W 5.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_3",
      },
      {
        id: 4,
        size: "M 5.5 / W 6",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_4",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 5,
        size: "M 6 / W 6.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_5",
      },
      {
        id: 6,
        size: "M 6.5 / W 7",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_6",
      },
      {
        id: 7,
        size: "M 7 / W 7.5",
        prices: 1900000,
        quantity: 0,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_7",
      },
      {
        id: 8,
        size: "M 7.5 / W 8",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_8",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 9,
        size: "M 8 / W 8.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_9",
      },
      {
        id: 10,
        size: "M 8.5 / W 9",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_10",
      },
      {
        id: 11,
        size: "M 9 / W 9.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_11",
      },
      {
        id: 12,
        size: "M 9.5 / W 10",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_12",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 13,
        size: "M 10 / W 10.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_13",
      },
      {
        id: 14,
        size: "M 10.5 / W 11",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_14",
      },
      {
        id: 15,
        size: "M 11 / W 11.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_15",
      },
      {
        id: 16,
        size: "M 11.5 / W 12",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_16",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 17,
        size: "M 12 / W 12.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_17",
      },
      {
        id: 18,
        size: "M 12.5 / W 13",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_18",
      },
      {
        id: 19,
        size: "M 13 / W 13.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_19",
      },
      {
        id: 20,
        size: "M 13.5 / W 14",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_20",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
      {
        id: 21,
        size: "M 14 / W 14.5",
        color: "Xanh berin",
        rgba: "127, 255, 212",
        prices: 1900000,
        quantity: 0,
        sku: "CK_70_LT_21",
      },
      {
        id: 22,
        size: "M 14.5 / W 15",
        prices: 1900000,
        quantity: 10,
        rgba: "245, 245, 220",
        color: "Xanh berin",
        sku: "CK_70_LT_22",
      },
      {
        id: 23,
        size: "M 15 / W 15.5",
        prices: 1900000,
        quantity: 10,
        rgba: "0, 0, 0",
        color: "Xanh berin",
        sku: "CK_70_LT_23",
      },
      {
        id: 24,
        size: "M 15.5 / W 16",
        prices: 1900000,
        quantity: 70,
        sku: "CK_70_LT_24",
        rgba: "210, 180, 140",
        color: "Xanh berin",
      },
    ],
  },
];
