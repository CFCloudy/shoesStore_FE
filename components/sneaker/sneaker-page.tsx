import { data_filter } from "@/data/data_filter";
import {
  CaretDownOutlined,
  CloseOutlined,
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
  Pagination,
  Row,
  Select,
  Space,
  Tooltip,
} from "antd";
import { Fragment, useEffect, useState } from "react";
import { CommonProduct, listProduct } from "../product/product";
import { ContainerSneaker, Container_Filter } from "./sneaker-pages-styled";
import { Paging } from "../paging/paging";
import { useAppDispatch } from "@/app/hook";
import {
  getListBrands,
  getListColors,
  getListFeature,
  getListProduct,
  getListSize,
  getListStyles,
} from "@/features/product-slice";
import {
  IBrandsResponse,
  IColorsResponse,
  IFeaturesResponse,
  IFilterData,
  ISizesResponse,
  IStylesResponse,
} from "@/models/product";

export const Sneaker = () => {
  const [hideFilter, setHideFilter] = useState<boolean>(true);
  const [hideSidebar, setHideSidebar] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [open, setOpen] = useState(false);
  const [listId, setListId] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(20);
  const [filter, setFilter] = useState<any>([]);
  const [dataColors, setDataColors] = useState<IColorsResponse[]>([]);
  const [dataStyles, setDataStyles] = useState<IStylesResponse[]>([]);
  const [dataSizes, setDataSizes] = useState<ISizesResponse[]>([]);
  const [dataBrands, setDataBrands] = useState<IBrandsResponse[]>([]);
  const [dataFeature, setDataFeatures] = useState<IFeaturesResponse[]>([]);
  const [dataF, setDataF] = useState<any>();
  const [data, setData] = useState<any>([]);
  // const [dataColors, setDataColors] = useState<IColorsResponse[]>([]);
  const [daataFilter, setDataFilter] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [payloadFilter, setPayloadFilter] = useState<IFilterData>(
    {} as IFilterData
  );
  const dispatch = useAppDispatch();

  const totalItems = 100;
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  };
  useEffect(() => {
    fectchDataAsyn(payloadFilter);
  }, []);
  const fectchDataAsyn = async (filter: any) => {
    dispatch(getListProduct(filter))
      .unwrap()
      .then()
      .then((res: any) => {
        setData(res);
      });
  };

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

  useEffect(() => {
    dispatch(getListColors())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataColors(res);
      })
      .catch((er: any) => {});
  }, []);

  useEffect(() => {
    dispatch(getListStyles())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataStyles(res);
      })
      .catch((er: any) => {});
  }, []);
  useEffect(() => {
    dispatch(getListSize())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataSizes(res);
      })
      .catch((er: any) => {});
  }, []);
  useEffect(() => {
    dispatch(getListFeature())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataFeatures(res);
      })
      .catch((er: any) => {});
  }, []);
  useEffect(() => {
    dispatch(getListBrands())
      .unwrap()
      .then()
      .then((res: any) => {
        setDataBrands(res);
      })
      .catch((er: any) => {});
  }, []);

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
  const handleFilter = (e: any, category: any) => {
    e.preventDefault();

    if (category.colorName) {
      category.type = "Color";
    } else if (category.size1) {
      category.type = "Size";
    } else if (category.brandName) {
      category.type = "Brand";
    } else if (category.featureName) {
      category.type = "Feature";
    } else if (category.styleName) {
      category.type = "Style";
    }

    var fake: any = [...filter];
    if (filter.length == 0) {
      setFilter([category]);
    } else {
      if (
        filter?.find(
          (x: any) => x.id === category.id && x.type === category.type
        )
      ) {
        setFilter(
          filter.filter(
            (x: any) => !(x.id === category.id && x.type === category.type)
          )
        );
      } else {
        setFilter([...filter, category]);
      }
    }
  };

  useEffect(() => {
    var fake: any = [...filter];
    let filterpayloaf: IFilterData = {
      ...payloadFilter,
    };
    if (fake && fake.length > 0) {
      var arrStyle: any = [];
      var arrColor: any = [];
      var arrSizes: any = [];
      var arrBrands: any = [];
      var arrFeature: any = [];
      for (let i = 0; i < fake.length; i++) {
        if (fake[i].type == "Style") {
          arrStyle.push({
            id: fake[i].id,
            styleName: fake[i].styleName,
            type: "Style",
          });
          filterpayloaf.styleDTOs = arrStyle;
        } else if (fake[i].type == "Color") {
          arrColor.push({
            id: fake[i].id,
            colorName: fake[i].colorName,
            type: "Color",
          });
          filterpayloaf.colorDTOs = arrColor;
        } else if (fake[i].type == "Size") {
          arrColor.push({
            id: fake[i].id,
            size1: fake[i].size1,
            type: "Color",
          });
          filterpayloaf.sizeDTOs = arrSizes;
        } else if (fake[i].type == "Brand") {
          arrBrands.push({
            id: fake[i].id,
            brandName: fake[i].brandName,
            type: "brand",
          });
          filterpayloaf.brandDTOs = arrBrands;
        } else if (fake[i].type == "Feature") {
          arrFeature.push({
            id: fake[i].id,
            featureName: fake[i].featureName,
            type: "Feature",
          });
          filterpayloaf.featureDTOs = arrFeature;
        }
      }
      // setPayloadFilter(filterpayloaf);
    } else {
      if (filterpayloaf.styleDTOs) {
        delete filterpayloaf.styleDTOs;
      }
      if (filterpayloaf.brandDTOs) {
        delete filterpayloaf.brandDTOs;
      }
      if (filterpayloaf.colorDTOs) {
        delete filterpayloaf.colorDTOs;
      }
      if (filterpayloaf.featureDTOs) {
        delete filterpayloaf.featureDTOs;
      }
      if (filterpayloaf.sizeDTOs) {
        delete filterpayloaf.sizeDTOs;
      }
    }
    setPayloadFilter(filterpayloaf);
    fectchDataAsyn(filterpayloaf);
  }, [filter]);

  useEffect(() => {
    const data_filter = [
      {
        id: 1,
        name: "Phong cách",
        arrays: dataStyles,
      },
      {
        id: 2,
        name: "Màu sắc",
        arrays: dataColors,
      },
      {
        id: 3,
        name: "Kích cỡ",
        arrays: dataSizes,
      },
      {
        id: 4,
        name: "Hãng",
        arrays: dataBrands,
      },
      {
        id: 5,
        name: "Feature",
        arrays: dataFeature,
      },
    ];
    setDataFilter(data_filter);
  }, [dataBrands, dataColors, dataFeature, dataSizes, dataStyles]);

  const handleChange = (value: any) => {
    var fil: IFilterData = {
      ...payloadFilter,
    };
    if (value == "isDecrease") {
      fil.isAscending = true;
      if (fil.isDecrease) {
        fil.isDecrease = false;
      }
    } else if (value == "isAscending") {
      fil.isDecrease = true;
      if (fil.isAscending) {
        fil.isAscending = false;
      }
    }
    setPayloadFilter(fil);
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
                defaultValue="Tất cả"
                style={{ width: "auto" }}
                onChange={handleChange}
                // className="filter2"
                bordered={false}
                suffixIcon={<CaretDownOutlined />}
                options={[
                  { value: "all", label: "Tất cả" },
                  { value: "isAscending", label: "Giá tăng dần" },
                  { value: "isDecrease", label: "Giá thấp dần" },
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
          {filter &&
            filter.length > 0 &&
            filter.map((f: any, index: number) => (
              <div className="filterBox" key={index}>
                <div>
                  {f.size1
                    ? "Kích cỡ :"
                    : f.styleName
                    ? "Phong cách: "
                    : f.colorName
                    ? "Màu sắc :"
                    : f.brandName
                    ? "Hãng : "
                    : "Feature : "}
                  {f.size1
                    ? f.size1
                    : f.styleName
                    ? f.styleName
                    : f.colorName
                    ? f.colorName
                    : f.brandName
                    ? f.brandName
                    : f.featureName}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleFilter(e, f)}
                >
                  <CloseOutlined />
                </div>
              </div>
            ))}

          {daataFilter &&
            daataFilter.map((filter: any) => {
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
                      ? filter.arrays &&
                        filter.arrays.map((arr: any, index: number) => {
                          return (
                            <Tooltip title={arr.color} key={index}>
                              <div
                                onClick={(e) => {
                                  handleFilter(e, arr);
                                }}
                                className="box_color"
                                style={{ background: `rgba(${arr.rgba})` }}
                              ></div>
                            </Tooltip>
                          );
                        })
                      : filter.name === "Kích cỡ"
                      ? filter.arrays.map((arr: any, index: number) => {
                          return (
                            <div
                              className="box_size"
                              key={index}
                              onClick={(e) => handleFilter(e, arr)}
                            >
                              {arr.size1}
                            </div>
                          );
                        })
                      : filter.name === "Phong cách"
                      ? filter.arrays.map((arr: any, index: number) => {
                          return (
                            <div
                              className="box_styles"
                              key={index}
                              onClick={(e) => handleFilter(e, arr)}
                            >
                              <div className="name">{arr.styleName}</div>
                              <div className="count">112</div>
                            </div>
                          );
                        })
                      : filter.name === "Hãng"
                      ? filter.arrays.map((arr: any, index: number) => {
                          return (
                            <div
                              className="box_styles"
                              key={index}
                              onClick={(e) => handleFilter(e, arr)}
                            >
                              <div className="name">{arr.brandName}</div>
                              <div className="count">112</div>
                            </div>
                          );
                        })
                      : filter.name === "Feature"
                      ? filter.arrays.map((arr: any, index: number) => {
                          return (
                            <div
                              className="box_styles"
                              key={index}
                              onClick={(e) => handleFilter(e, arr)}
                            >
                              <div className="name">{arr.featureName}</div>
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
            {data &&
              data.shoes &&
              data.shoes.map((x: any, index: number) => {
                return (
                  <Col
                    xs={!hideSidebar ? 12 : 24}
                    md={!hideSidebar ? 12 : 8}
                    xxl={8}
                    lg={!hideSidebar ? 8 : 6}
                    key={x.id}
                  >
                    <CommonProduct data={x} />
                  </Col>
                );
              })}
          </Row>
          <Pagination
            defaultCurrent={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            current={currentPage}
            pageSize={itemsPerPage}
            total={totalItems}
            onChange={handlePageChange}
          />
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
                    ? filter.arrays
                        .filter((x: any) => x.type === "Color")
                        .map((arr: any, index: number) => {
                          return (
                            <Tooltip title={arr.color} key={index}>
                              <div
                                className="box_color"
                                style={{ background: `rgba(${arr.rgba})` }}
                              ></div>
                            </Tooltip>
                          );
                        })
                    : filter.name === "Kích cỡ"
                    ? filter.arrays.map((arr: any, index: number) => {
                        return (
                          <div className="box_size" key={index}>
                            {arr.size}
                          </div>
                        );
                      })
                    : filter.name === "Phong cách"
                    ? filter.arrays.map((arr: any, index: number) => {
                        return (
                          <div className="box_styles" key={index}>
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
