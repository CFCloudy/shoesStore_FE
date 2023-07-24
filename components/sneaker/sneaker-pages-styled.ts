import styled from "styled-components";

export const ContainerSneaker = styled.div`
  padding: 20px 70px;
  @media (max-width: 1360px) {
    padding: 0 20px 0 20px;
  }
  .banner {
    background: url(https://converse.ca/media/cms_upload/banner/D-Converse-SU21-PWH-Womens.jpg);
    height: 220px;
    width: auto;
    background-repeat: no-repeat;
    overflow-clip-margin: content-box;
    overflow: clip;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #fff;
    object-fit: cover;
  }
  .container {
    width: 100%;
    margin: 20px 0;
    display: flex;
    border: 0.0625rem solid #e5e5e5;
    .wrap_col {
      padding: 20px 15px;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
      .hide {
        color: rgba(0, 0, 0, 0.45);
      }
      .title {
        font-weight: 600;
      }
      border-right: 0.0625rem solid #e5e5e5;
    }
    .wrap_col2 {
      padding: 10px 15px;
      display: flex;
      align-items: center !important;
      justify-content: space-between;
      height: 100%;
      .wrap {
        display: flex;
        gap: 8px;
      }
      .hide {
        color: rgba(0, 0, 0, 0.45);
      }
      .filter2 {
        font-weight: 600;
        height: 200px;
      }
    }
    .filter {
      width: 23%;
    }
    .range {
      width: 23%;
    }
    .result {
      width: 56%;
    }
    @media (max-width: 1090px) {
      font-size: 13px;
      .filter {
        width: 23%;
      }
      .range {
        width: 30%;
      }
      .result {
        width: 49%;
      }
    }
    @media (max-width: 750px) {
      .filter {
        width: 23%;
      }
      .range {
        width: 35%;
      }
      .result {
        width: 44%;
      }
    }
    @media (max-width: 647px) {
      .filter {
        width: 23%;
      }
      .range {
        width: 40%;
      }
      .result {
        width: 39%;
      }
    }
    @media (max-width: 572px) {
      .filter {
        width: 26%;
      }
      .range {
        width: 45%;
      }
      .result {
        width: 31%;
      }
    }
    @media (max-width: 513px) {
      .filter {
        width: 26%;
      }
      .range {
        width: 46%;
      }
      .result {
        width: 28%;
      }
    }
    @media (max-width: 487px) {
      .filter {
        width: 26%;
      }
      .range {
        width: 48%;
      }
      .result {
        width: 26%;
      }
    }
  }
  .columns {
    display: flex;
    width: 100%;
    .column_sidebar {
      width: 20%;
      padding: 0 30px 10px 0;
      animation-duration: 3s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      @keyframes move-right {
        0% {
          left: 0;
        }
        100% {
          left: calc(100% - 100px);
        }
      }
      .filterBox {
        display: flex;
        gap: 15px;
        padding: 4px;
        width: max-content;
        background-color: #f7f7f7;
        text-transform: uppercase;
        margin: 8px 0;
      }
      .filter_option {
        padding: 18px 0;
        border-bottom: 0.0625rem solid #e5e5e5;
        .wrapp {
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* padding: 18px 0;
          border-bottom: 0.0625rem solid #e5e5e5; */
          .text {
            font-weight: 600;
          }
          .icon {
            cursor: pointer;
            font-size: 18px;
          }
        }
        .menu_child {
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 30px;
          color: #757575;
          font-size: 12.5px;
        }
        .wrapp_color {
          padding-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          color: #757575;
          font-size: 12px;
        }
        .box_color {
          width: 30px;
          height: 30px;
          display: flex;
        }
        .box_size {
          padding: 6.5px 16px;
          border: 0.0625rem solid #e5e5e5;
          cursor: pointer;
          :hover {
            border: solid 1px black;
          }
        }
        .box_styles {
          justify-content: space-between;
          display: flex;
          align-items: center;
          width: 100%;
          cursor: pointer;
          :hover {
            color: black;
            font-weight: 600;
          }
        }
      }
    }
    .column_main {
      width: 80%;
    }
    @media (max-width: 986) {
      .column_sidebar {
        display: block;
      }
    }
  }

  .mySwiper2 {
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mySwiper {
    height: 16%;
    box-sizing: border-box;
  }
  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Container_Filter = styled.div`
  padding: 0 10px 10px 0;
  .filter_option {
    padding: 18px 0;
    border-bottom: 0.0625rem solid #e5e5e5;
    .wrapp {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .text {
        font-weight: 600;
      }
      .icon {
        cursor: pointer;
        font-size: 18px;
      }
    }
    .menu_child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 30px;
      color: #757575;
      font-size: 12.5px;
    }
    .wrapp_color {
      padding-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      color: #757575;
      font-size: 12px;
    }
    .box_color {
      width: 30px;
      height: 30px;
      display: flex;
    }
    .box_size {
      padding: 6.5px 16px;
      border: 0.0625rem solid #e5e5e5;
      cursor: pointer;
      :hover {
        border: solid 1px black;
      }
    }
    .box_styles {
      justify-content: space-between;
      display: flex;
      align-items: center;
      width: 100%;
      cursor: pointer;
      :hover {
        color: black;
        font-weight: 600;
      }
    }
  }
`;

export const Swap_Product_Detail = styled.div`
  padding: 80px 0 0 0;
  @media (max-width: 992px) {
    padding: 0;
  }
  .name {
    font-weight: 600;
    padding-bottom: 10px;
    font-size: 18px;
  }
  .price {
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
  }
  .decription {
    padding-bottom: 12px;
    font-size: 14px;
  }
  .title {
    padding-top: 20px;
  }
  .wrap_color {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .color {
      padding-top: 14px;
      height: 88.2px;
      img {
        width: 86.2px;
        height: 86.2px;
        margin-right: 10px;
        cursor: pointer;
      }
      p {
        width: 86.2px;
        height: 3px;
        background-color: black;
      }
    }
    .box {
      width: 30.33333333%;
      height: 32px;
      border: 0.0625rem solid #e5e5e5;
      margin-top: 10px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      :hover {
        border: 1px solid black;
      }
      @media (max-width: 992px) {
        padding: auto;
      }
    }
  }
`;

export const SizeGuid = styled.div`
  p {
    font-size: 15px;
    color: black;
  }
`;
