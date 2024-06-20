import { Button } from "antd";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const WrappHomePages = styled.div`
  img {
      animation: fade linear forwards;
      scale: 0;
      opacity: 0%;
      animation-timeline: view();
      animation-range-start: entry -70px;
      animation-range-end: exit -80px;
  }

  @keyframes fade {
      100% {
          scale: 1;
          opacity: 100%;
      }
  }
  .nav_style {
    padding: 35px 0;
    /* background: ${props => props.theme.bg}; */
    text-align: center;
    /* padding: 40px 0; */
    line-height: 55px;
    h2 {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 62px;
    }
    span,
    p {
      font-size: 21px;
    }
    @media (max-width: 882px) {
      h2{
        font-size: 50px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  .visual_nav {
    .wrapp_visual {
      .content {
        font-size: 30px;
        padding: 20px 0;
        font-weight: 600;
      }
    }
  }
  .nav_slider {
    .swiper_navigator {
      display: flex;
      gap: 20px;
      justify-content: flex-end;
      align-items: center;
      padding: 20px 15px;
      font-size: 33px;
      .prev,
      .next {
        padding: 6px;
        cursor: pointer;
        :hover {
          background-color: black;
          color: #fff;
        }
      }
      .view_all {
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
    }
    .mySwiper {
      width: 100%;
      height: auto;
      .swiperSlide {
        width: 100%;
        height: 100%;
      }
      .swiper-button-next {
        color: red;
      }
    }
  }
`;

export const SwiperCustom = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonBlack = styled(Button)`
  background-color: black;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  height: 50px;
  padding: 0 40px;
  border-radius: 0;
  :hover {
    background-color: #fff;
    color: black !important;
    border: 1px solid black !important;
  }
`;
