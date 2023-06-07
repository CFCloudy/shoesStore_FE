import { Drawer, Dropdown } from "antd";
import exp from "constants";
import styled from "styled-components";

export const WrapperMenu = styled.div``;
export const ContainerHeader = styled.div`
  height: 76px;
  font-size: 0.8rem;
  font-weight: 550;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  padding: 0 70px 0 70px;
  @media (max-width: 1360px) {
    padding: 0 20px 0 20px;
  }
  .hideMenu {
    display: none;
  }
  @media (max-width: 1050px) {
    .logo {
      position: absolute;
      left: 45%;
      /* right: 50%; */
    }
    .hideMenu {
      display: block !important;
    }
  }
  .menu {
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    .menuUl {
      list-style: none;
      display: flex;
      height: 70px;
      display: flex;
      @media (max-width: 1050px) {
        display: none;
      }
      align-items: center;
      li {
        display: inline-block;
        margin: 0 30px;
        /* width: 100%; */
        cursor: pointer;
      }
      .hover {
        opacity: 0.7;
      }
      .resthover {
        color: rebeccapurple;
      }
    }
    .rightMenu {
      .ul_rightMenu {
        list-style: none;
        @media (max-width: 1050px) {
          .shoppingcart {
            display: block !important;
          }
        }
        li {
          display: inline-block;
          margin: 0 12px;
          cursor: pointer;
          @media (max-width: 1160px) {
            .input {
              width: 200px !important;
            }
          }
          @media (max-width: 1050px) {
            display: none;
            .shoppingcart {
              display: block !important;
            }
            .iconShopingcart {
              font-size: 30px !important;
            }
          }
        }
      }
    }
  }
`;

export const ContainerMenuChild = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 0 120px 0 120px;
  height: auto;
  position: absolute;
  left: 0;
  top: 76px;
  .main_title {
    margin: 30px 30px !important;
    font-size: 24px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .wrapp_col {
    border-right: 1px solid #867b7b;
    width: 100%;
    padding: 20px 30px 0 70px !important;
    .title {
      font-size: 16px;
    }
  }
  ul li {
    list-style: none;
    margin: 10px 0;
    opacity: 0.7;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const WrapperChild = styled.div``;

export const DropDownCustom = styled(Dropdown)`
  width: 300px !important;
  height: 1000px !important;
  .ant-dropdown-menu {
    width: 700px !important;
  }
`;

export const WrapCartItemPopup = styled.div`
  display: flex;
  margin: 30px;
  line-height: 23px;
  border-bottom: 0.0625rem solid #e5e5e5;
  .img {
    width: 50%;
  }
  .title {
    /* font-size: 13px; */
    font-weight: 600;
  }
  .price {
    font-weight: 600;
    font-size: 13px;
    padding-top: 10px;
  }
  .action {
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 13px;
    cursor: pointer;
    padding-bottom: 12px;
  }
`;

export const FooterPopupCart = styled.div`
  bottom: 0 !important;
  position: fixed;
  height: 200px;
  background: #f7f7f7;
  width: 100%;
  .sum {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn {
    left: 40px;
    top: 30px;
    position: relative;
  }
`;
export const DrawerCustom = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  .wrapp {
    /* height: 100%; */
    @media (min-height: 480px) {
      height: auto;
      overflow: auto;
      max-height: 700px;
    }
    .item {
    }
  }
`;
export const WrapUser = styled.div`
  font-size: 16px;
  margin-right: 8px;
  font-weight: 600;
  cursor: pointer;
`;
