"use client";

import {
  AlignLeftOutlined,
  DeleteOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  DrawerProps,
  Input,
  Space,
  Image,
  Dropdown,
  message,
  Badge,
  Spin,
} from "antd";
import Router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  ContainerHeader,
  DrawerCustom,
  FooterPopupCart,
  WrapCartItemPopup,
  WrapUser,
  WrapperSearch,
} from "./header-styled";
import logo from "@/assets/logo-no-background_home.svg";

import { MenuChild } from "./menu-child";
import { data_category } from "../../../data/data_category";
import { formatter } from "@/models/common";
import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import type { MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import {
  selectUser,
  userLogout,
} from "@/features/user-slice";
import { ILogoutPayload } from "@/models/user";
import { getCart, removeCartItem, selectOrder } from "@/features/order-slice";
import { IRemoveItem } from "@/features/services/order-api";
import {
  IFilterData,
} from "@/models/product";
import {
  getListProduct,
  selectProduct,
} from "@/features/product-slice";


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

  const { cart } = useAppSelector(selectOrder);
  useEffect(() => {
    if (loginInfo && loginInfo.payload) {
      dispatch(getCart(loginInfo.payload.profilesID))
        .unwrap()
        .then()
        .then((res: any) => {
        });
    }
  }, []);
  const logout = () => {
    let payload: ILogoutPayload = {
      id: loginInfo.payload.id,
    };
    dispatch(userLogout(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        message.success("Đăng xuất thành công");
        Router.push("/");
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
        <div onClick={() => Router.push("/my-oder")}>
          <ShoppingOutlined
            style={{ marginRight: "8px", color: "black", fontWeight: "600" }}
          ></ShoppingOutlined>
          Giỏ hành của tôi
        </div>
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
  const { loading } = useAppSelector(selectProduct);
  const [data, setData] = useState<any>();
  const [payloadFilter, setPayloadFilter] = useState<IFilterData>(
    {
      skipCount: 0,
      maxResultCount: 12,
      sorting: "ok",
    } as IFilterData
  );
  const handleSearch = (e: any) => {
    e.preventDefault();
    let payload = payloadFilter;
    payload.nameShoe = e.target.value;
    setIsEditTarget(true);
    dispatch(getListProduct(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        setData(res);
      });
  };

  const handleDeleteItem = (item: any) => {
    let payload: IRemoveItem[] = [
      {
        cartId: item.cartId,
        id: item.id,
        variantName: item.variantName,
        productVariantId: item.productVariantId,
      },
    ];
    dispatch(removeCartItem(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        dispatch(getCart(loginInfo.payload.profilesID))
          .unwrap()
          .then()
          .then((res: any) => {
            // setCart(res)
          });
        message.success("Xóa sản phẩm khỏi giỏ hàng thành công");
      })
      .catch((error: any) => {
        message.error("Xóa thất bại!!!");
      });
  };
  const wrapperRef = useRef(null);
  const [isEditTarget, setIsEditTarget] = useState<boolean>(false);
  useOutsideTarget(wrapperRef);

  function useOutsideTarget(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsEditTarget(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const updateParentState = () => {
    setOpenMenu("none");
  };

  let title = `Giỏ hàng của tôi. ${Object.entries(cart).length > 0 &&
    cart.payload &&
    cart.payload.cartItemDTOs.length > 0
    ? cart.payload.cartItemDTOs.length
    : 0
    } sản phẩm`;
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
                onClick={() => {
                  Router.push("/sneaker")
                  document.title = "King Shoes"
                }}
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
            onClickState={updateParentState}
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
              <Badge
                count={
                  Object.entries(cart).length > 0 &&
                    cart.payload &&
                    cart.payload.cartItemDTOs.length > 0
                    ? cart.payload.cartItemDTOs.length
                    : 0
                }
                size="small"
                showZero
              >
                <ShoppingCartOutlined
                  style={{ fontSize: "20px" }}
                  className="iconShopingcart"
                  onClick={() => {
                    setOpenCart(true);
                  }}
                />
              </Badge>
            </li>
            <li>
              <Input
                bordered
                size="large"
                style={{ width: "300px" }}
                className="input"
                onChange={(e: any) => {
                  handleSearch(e);
                }}
              ></Input>
            </li>
            <Spin spinning={false} delay={500}>
              <WrapperSearch
                ref={wrapperRef}
                hidden={isEditTarget ? false : true}
              >
                {data &&
                  data.shoes &&
                  data.shoes.map((x: any, index: number) =>
                    index >= 4 ? (
                      ""
                    ) : (
                      <div
                        className="wrap"
                        key={index}
                        onClick={() => {
                          Router.push(`/sneaker/detail/${x.id}`);
                        }}
                      >
                        <div className="img">
                          <Image
                            src={x.displayImage}
                            preview={false}
                            width={"60px"}
                            height={"60px"}
                          />
                        </div>
                        <div className="detail">
                          <div>{x.productName}</div>
                          <div className="price">
                            {formatter.format(x.displayPrice)}
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </WrapperSearch>
            </Spin>
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
        title={title}
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
            {cart && cart?.payload && cart?.payload.cartItemDTOs
              ? cart.payload.cartItemDTOs.map((item: any) => (
                <WrapCartItemPopup key={item.id}>
                  <div className="img">
                    <img
                      src={item.image}
                      alt=""
                      width={"110px"}
                      height={"110px"}
                    />
                  </div>
                  <div className="right_content">
                    <div className="title">
                      TURBODRK Chuck 70 Low Top in Silver/Egret/Black
                    </div>
                    {/* <details>
                        <summary>Chi tiết</summary>
                        <p>Màu sắc: {` ${item.color}`}</p>
                        <p>Kích thước: {` ${item.size}`}</p>
                      </details> */}
                    <div className="price">
                      {formatter.format(item.price)}
                    </div>

                    <div className="action">
                      {/* <EditOutlined /> */}
                      <DeleteOutlined
                        onClick={() => handleDeleteItem(item)}
                      />
                    </div>
                  </div>
                </WrapCartItemPopup>
              ))
              : ""}
          </div>
          <FooterPopupCart>
            <div className="sum">
              <div className="title">Tổng cộng</div>
              <div className="price">
                {cart && cart.payload && cart.payload.cartItemDTOs
                  ? formatter.format(
                    cart.payload.cartItemDTOs.reduce(
                      (accumulator: number, currentValue: any) => {
                        return (
                          accumulator +
                          currentValue.price * currentValue.quantity
                        );
                      },
                      0
                    )
                  )
                  : formatter.format(0)}
              </div>
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
