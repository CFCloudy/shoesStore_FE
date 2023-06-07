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
type MenuItem = Required<MenuProps>["items"][number];
import type { MenuProps } from "antd";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [menu, setMenu] = useState<any>(data_category);

  var items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  const [isOpenMenu, setOpenMenu] = useState<string>("none");
  const [mainTiltle, setMainTitle] = useState<string>("");

  const handleOpenMenu = () => {
    setOpenMenu("block");
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
                  console.log("object", newMenu);
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
                    handleOpenMenu();
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
            <li onClick={() => Router.push("/auth/sign-in")}>Sign In</li>
            <li>
              <Dropdown menu={menu}>
                <WrapUser style={{ marginLeft: "10px" }}>
                  {" "}
                  <UserOutlined style={{ marginRight: "8px" }} />
                </WrapUser>
              </Dropdown>
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
                <span>
                  Chi tiết <DownOutlined />
                </span>
                <div>Màu sắc</div>
                <div>Kích thước</div>
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
                <span>
                  Chi tiết <DownOutlined />
                </span>
                <div>Màu sắc</div>
                <div>Kích thước</div>
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
                <span>
                  Chi tiết <DownOutlined />
                </span>
                <div>Màu sắc</div>
                <div>Kích thước</div>
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
              <ButtonBlack style={{ padding: "10px 120px" }}>
                Thanh toán
              </ButtonBlack>
            </div>
          </FooterPopupCart>
        </div>
      </DrawerCustom>
    </ContainerHeader>
  );
};
