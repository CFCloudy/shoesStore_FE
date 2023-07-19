"use client";

import {
  AlignLeftOutlined,
  AlignRightOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  DrawerProps,
  Input,
  Row,
  Space,
  Image,
  Dropdown,
  Menu,
  message,
} from "antd";
import Router from "next/router";
import { Fragment, useState } from "react";
import {
  ContainerHeader,
  DrawerCustom,
  FooterPopupCart,
  WrapCartItemPopup,
  WrapUser,
} from "./header-styled";
import logo from "@/assets/logo-no-background_home.svg";

import { MenuChild } from "./menu-child";
import { data_category } from "../../../data/data_category";
import { formatter } from "@/models/common";
import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import type { MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { selectUser, userLogout } from "@/features/user-slice";
import { ILogoutPayload } from "@/models/user";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const { loginInfo } = useAppSelector(selectUser);
  const [menu, setMenu] = useState<any>(data_category);

  const [isOpenMenu, setOpenMenu] = useState<string>("none");
  const [mainTiltle, setMainTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const storage =
    typeof window !== "undefined" ? localStorage.getItem("u") : undefined;
  const handleOpenMenu = (id: any) => {
    if (id == "Nam1") setOpenMenu("block");
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onCloseCart = () => {
    setOpenCart(false);
  };

  const logout = () => {
    let payload: ILogoutPayload = {
      id: loginInfo.payload.id,
    };
    dispatch(userLogout(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        message.success("Đăng xuất thành công");
      })
      .catch((e) => {
        message.error("Đăng xuất thất bại");
      });
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div onClick={() => Router.push("/profiles")}>
          <UserOutlined
            style={{ marginRight: "8px", color: "black", fontWeight: "600" }}
          ></UserOutlined>
          Tài khoản của tôi
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          Giỏ hành của tôi
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <p onClick={logout}>
          <LogoutOutlined style={{ marginRight: "8px" }}></LogoutOutlined> Đăng
          xuất
        </p>
      ),
    },
  ];
  const [idchoose, setId] = useState<number>(0);
  return (
    <ContainerHeader>
      <div className="hideMenu" onClick={showDrawer}>
        <AlignLeftOutlined style={{ fontSize: "30px" }} />
      </div>
      <div className="logo" onClick={() => Router.push("/")}>
        <Image preview={false} src={logo.src} width={"130px"} />
      </div>
      <div className="menu">
        <div className="leftMenu">
          <ul
            className="menuUl"
            onMouseLeave={() => {
              let newMenu = [...menu];
              for (let i = 0; i < newMenu.length; i++) {
                newMenu[i].color = "#000";
              }
              setMenu(newMenu);
            }}
          >
            {menu.map((x: any, index: number) => (
              <li
                key={index}
                className={idchoose === x.id ? "hover" : "resthover"}
                onMouseEnter={() => {
                  let newMenu = [...menu];
                  let index: number = newMenu.findIndex((c) => c.id === x.id);
                  if (index > -1) {
                    let choo = newMenu[index];
                    choo = {
                      ...choo,
                      color: "#000",
                    };
                    newMenu[index] = choo;
                    for (
                      let i = 0;
                      i < newMenu.filter((v: any) => v.id !== x.id).length;
                      i++
                    ) {
                      newMenu.filter((v: any) => v.id !== x.id)[i].color =
                        "#867b7b";
                    }
                    setMenu(newMenu);
                    handleOpenMenu(x.id);
                    setMainTitle(x.name);
                  }
                }}
                onClick={() => Router.push("/sneaker")}
                style={{ color: `${x.color}` }}
              >
                {x.name}
              </li>
            ))}
          </ul>
          <MenuChild
            isOpen={isOpenMenu}
            onMouseLeave={() => setOpenMenu("none")}
            mainTitle={mainTiltle}
          />
        </div>
        <div className="rightMenu">
          <ul className="ul_rightMenu">
            {storage ? null : (
              <li onClick={() => Router.push("/auth/sign-in")}>Sign In</li>
            )}
            <li>
              {storage ? (
                <Dropdown menu={{ items }} placement="bottom" arrow>
                  <WrapUser style={{ marginLeft: "10px" }}>
                    {" "}
                    {/* {storage && loginInfo !== undefined
                    ? loginInfo.payload.fullName
                    : ""} */}
                    <ul>
                      <UserOutlined style={{ marginRight: "8px" }} />
                      {storage ? loginInfo.payload.fullName : ""}
                    </ul>
                  </WrapUser>
                </Dropdown>
              ) : null}
            </li>
            <li className="shoppingcart">
              <ShoppingCartOutlined
                style={{ fontSize: "20px" }}
                className="iconShopingcart"
                onClick={() => setOpenCart(true)}
              />
            </li>
            <li>
              <Input
                bordered
                size="large"
                style={{ width: "300px" }}
                className="input"
              ></Input>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        size={"large"}
        style={{ width: "auto" }}
        open={open}
        extra={<Space>ôkk</Space>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <DrawerCustom
        title="Giỏ hàng của tôi, 1 sản phẩm"
        placement={"right"}
        width={400}
        onClose={onCloseCart}
        closeIcon={false}
        size={"large"}
        style={{ width: "auto" }}
        open={openCart}
        extra={
          <Space
            onClick={() => setOpenCart(false)}
            style={{ cursor: "pointer" }}
          >
            X
          </Space>
        }
      >
        <div className="wrapp">
          <div className="item">
            <WrapCartItemPopup>
              <div className="img">
                <img
                  src="https://converse.ca/media/catalog/product/cache/2e72b5cbec682aae37213b8085d64166/m/5/m5039c_a.jpg"
                  alt=""
                />
              </div>
              <div className="right_content">
                <div className="title">
                  TURBODRK Chuck 70 Low Top in Silver/Egret/Black
                </div>
                <details>
                  <summary>Chi tiết</summary>
                  <p>Màu sắc</p>
                  <p>Kích thước</p>
                </details>
                <div className="price">{formatter.format(1000000)}</div>

                <div className="action">
                  <EditOutlined />
                  <DeleteOutlined />
                </div>
              </div>
            </WrapCartItemPopup>
            <WrapCartItemPopup>
              <div className="img">
                <img
                  src="https://converse.ca/media/catalog/product/cache/2e72b5cbec682aae37213b8085d64166/m/5/m5039c_a.jpg"
                  alt=""
                />
              </div>
              <div className="right_content">
                <div className="title">
                  TURBODRK Chuck 70 Low Top in Silver/Egret/Black
                </div>
                <details>
                  <summary>Chi tiết</summary>
                  <p>Màu sắc</p>
                  <p>Kích thước</p>
                </details>
                <div className="price">{formatter.format(1000000)}</div>

                <div className="action">
                  <EditOutlined />
                  <DeleteOutlined />
                </div>
              </div>
            </WrapCartItemPopup>
          </div>
          <FooterPopupCart>
            <div className="sum">
              <div className="title">Tổng cộng</div>
              <div className="price">{formatter.format(1000000)}</div>
            </div>
            <div className="btn">
              <ButtonBlack
                style={{
                  padding: "10px 120px",
                }}
                onClick={() => Router.push("/cart")}
              >
                Thanh toán
              </ButtonBlack>
            </div>
          </FooterPopupCart>
        </div>
      </DrawerCustom>
    </ContainerHeader>
  );
};
