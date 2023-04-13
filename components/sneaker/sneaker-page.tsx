import { data_filter } from "@/data/data_filter";
import {
  CaretDownOutlined,
  CloseSquareOutlined,
  DownOutlined,
  FilterOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Col,
  Drawer,
  Image,
  Row,
  Select,
  Space,
  Tooltip,
} from "antd";
import { Fragment, useEffect, useState } from "react";
import { CommonProduct, listProduct } from "../product/product";
import { ContainerSneaker, Container_Filter } from "./sneaker-pages-styled";

export const Sneaker = () => {
  const [hideFilter, setHideFilter] = useState<boolean>(true);
  const [hideSidebar, setHideSidebar] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [open, setOpen] = useState(false);
  const [listId, setListId] = useState<any>([]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 980) {
        setHideFilter(false);
        setHideSidebar(false);
      }
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleHideFilter = () => {
    if (screenSize.width <= 980) {
      setHideFilter(false);
      setHideSidebar(false);
      setOpen(true);
    } else {
      setHideFilter(!hideFilter);
      setHideSidebar(!hideSidebar);
    }
  };
  function arrayRemove(arr: any, value: any) {
    return arr.filter(function (ele: any) {
      return ele != value;
    });
  }

  const handleChooseId = (id: any) => {
    if (listId.length >= 0 && listId.find((x: any) => x == id)) {
      setListId(listId.filter((x: any) => x !== id));
    } else {
      if (listId.length == 0) {
        setListId([id]);
      } else {
        setListId([...listId, id]);
      }
    }
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleHideSideBar = () => {};
  return (
    <ContainerSneaker>
      <Breadcrumb>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Nam</Breadcrumb.Item>
        <Breadcrumb.Item>Giày</Breadcrumb.Item>
        <Breadcrumb.Item>Tất cả giày</Breadcrumb.Item>
      </Breadcrumb>
      <div className="banner">Giày nam</div>
      <div className="container">
        <div className="filter" onClick={handleHideFilter}>
          <div className="wrap_col">
            <div className="hide">
              {hideFilter ? "Ẩn bộ lọc" : "Hiện bộ lọc"}
            </div>
            <div className="icon">
              <FilterOutlined />
            </div>
          </div>
        </div>
        <div className="result">
          <div className="wrap_col">
            <div className="title">190 kết quả</div>
            <div className="icon">{/* <FilterOutlined /> */}</div>
          </div>
        </div>
        <div className="range">
          <div className="wrap_col2">
            <div className="hide">Sắp xếp theo:</div>
            <div className="wrap">
              {/* <div className="filter2">Tăng dần</div>
              <div className="icon">
                <CaretDownOutlined />
              </div> */}
              <Select
                defaultValue="lucy"
                style={{ width: "auto" }}
                // onChange={handleChange}
                // className="filter2"
                bordered={false}
                suffixIcon={<CaretDownOutlined />}
                options={[
                  { value: "jack", label: "Giá tăng dần" },
                  { value: "lucy", label: "Giá thấp  dần" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div
          className="column_sidebar"
          style={{ display: `${hideSidebar ? "block" : "none"}` }}
        >
          {data_filter.map((filter: any) => {
            return (
              <div
                className="filter_option"
                // style={{ padding: "0 0px 18px 0px" }}
                key={filter.id}
              >
                <div className="wrapp">
                  <div className="text">{filter.name}</div>
                  <div
                    className="icon"
                    onClick={() => handleChooseId(filter.id)}
                  >
                    {listId.length > 0 &&
                    listId.find((x: any) => x == filter.id) ? (
                      <MinusOutlined />
                    ) : (
                      <PlusOutlined />
                    )}
                  </div>
                </div>
                <div
                  className="wrapp_color"
                  style={{
                    display: `${
                      listId.length > 0 &&
                      listId.find((x: any) => x == filter.id)
                        ? ""
                        : "none"
                    }`,
                  }}
                >
                  {filter.name === "Màu sắc"
                    ? filter.arrays.map((arr: any) => {
                        return (
                          <Tooltip title={arr.color}>
                            <div
                              className="box_color"
                              style={{ background: `rgba(${arr.rgba})` }}
                            ></div>
                          </Tooltip>
                        );
                      })
                    : filter.name === "Kích cỡ"
                    ? filter.arrays.map((arr: any) => {
                        return <div className="box_size">{arr.size}</div>;
                      })
                    : filter.name === "Phong cách"
                    ? filter.arrays.map((arr: any) => {
                        return (
                          <div className="box_styles">
                            <div className="name">{arr.styles}</div>
                            <div className="count">112</div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="column_main"
          style={{
            width: `${hideSidebar ? "80%" : "100%"}`,
          }}
        >
          <Row gutter={[20, 20]}>
            {listProduct.map((x) => {
              return (
                <Col
                  xs={!hideSidebar ? 12 : 24}
                  md={!hideSidebar ? 12 : 8}
                  xxl={8}
                  lg={!hideSidebar ? 8 : 6}
                >
                  <CommonProduct data={x} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <Drawer
        title="Lọc"
        placement={"right"}
        width={500}
        onClose={onClose}
        closable={false}
        size={"large"}
        style={{ width: "auto" }}
        open={open}
        extra={
          <Space style={{ fontSize: "22px", cursor: "pointer" }}>
            <CloseSquareOutlined onClick={onClose} />
          </Space>
        }
      >
        <Container_Filter>
          {data_filter.map((filter: any, index: number) => {
            return (
              <div
                className="filter_option"
                key={filter.id}
                style={{ padding: `${index == 0 ? "0 0 18px 0" : "18px 0"}` }}
              >
                <div className="wrapp">
                  <div className="text">{filter.name}</div>
                  <div
                    className="icon"
                    onClick={() => handleChooseId(filter.id)}
                  >
                    {listId.length > 0 &&
                    listId.find((x: any) => x == filter.id) ? (
                      <MinusOutlined />
                    ) : (
                      <PlusOutlined />
                    )}
                  </div>
                </div>
                <div
                  className="wrapp_color"
                  style={{
                    display: `${
                      listId.length > 0 &&
                      listId.find((x: any) => x == filter.id)
                        ? ""
                        : "none"
                    }`,
                  }}
                >
                  {filter.name === "Màu sắc"
                    ? filter.arrays.map((arr: any) => {
                        return (
                          <Tooltip title={arr.color}>
                            <div
                              className="box_color"
                              style={{ background: `rgba(${arr.rgba})` }}
                            ></div>
                          </Tooltip>
                        );
                      })
                    : filter.name === "Kích cỡ"
                    ? filter.arrays.map((arr: any) => {
                        return <div className="box_size">{arr.size}</div>;
                      })
                    : filter.name === "Phong cách"
                    ? filter.arrays.map((arr: any) => {
                        return (
                          <div className="box_styles">
                            <div className="name">{arr.styles}</div>
                            <div className="count">112</div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            );
          })}
        </Container_Filter>
      </Drawer>
    </ContainerSneaker>
  );
};
