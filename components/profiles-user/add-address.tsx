import { useAppDispatch, useAppSelector } from "@/app/hook";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Radio,
  Row,
  Select,
  Space,
  Spin,
} from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BoxInfoUser } from "./profiles-tyled";
import axios from "axios";
import {
  createAddresss,
  getAddressDetails,
  selectUser,
  updateAddress,
} from "@/features/user-slice";
import {
  ICreateAddress,
  IGetAddressDetails,
  IResDetailAdd,
  IUpdateAddress,
} from "@/models/user";

export interface IResponseAdress {
  userAddressId: string;
  userId: string;
  name: string;
  phoneNumber: string;
  province: string;
  cityDistrict: string;
  wardCommune: string;
  addressDetail: string;
  typeAdress: string;
  isDefault: string;
  user: string;
}

export const AddNewAddress = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const [ProvinceData, setProvinceData] = useState<[]>([]);
  const [provinceDistrict, setDistrictData] = useState<[]>([]);
  const [wardData, setWardData] = useState<[]>([]);
  const [checkDistrict, setCheckDistrict] = useState<boolean>(true);
  const [checkWard, setCheckWard] = useState<boolean>(true);
  const { loginInfo } = useAppSelector(selectUser);
  const onFieldsChange = (changedFields: any, allValues: any) => {
    if (changedFields && changedFields[0]?.name[0] === "City") {
      setCheckDistrict(false);
      form.setFieldsValue({
        District: "",
        Ward: "",
      });
      if (changedFields[0].value === undefined) {
        setWardData([]);
      }
      let payload: any = {};
      payload.$filter = `Context eq '${changedFields[0].value}'`;
      axios({
        method: "get",
        url: "https://kpi-api.dpotech.vn/msa-configuration/odata/Configurations",
        params: payload,
      })
        .then()
        .then((res: any) => {
          if (res) {
            setDistrictData(res.data.Payload);
          }
        });
    }
    if (changedFields && changedFields[0]?.name[0] === "District") {
      setCheckWard(false);
      let payload: any = {};
      form.setFieldsValue({
        Ward: "",
      });
      payload.$filter = `Context eq '${changedFields[0].value}'`;

      axios({
        method: "get",
        url: "https://kpi-api.dpotech.vn/msa-configuration/odata/Configurations",
        params: payload,
      })
        .then()
        .then((res: any) => {
          if (res) {
            setWardData(res.data.Payload);
          }
        });
    }
  };

  const handelSubmit = (values: any) => {
    let payload: ICreateAddress = {
      addressDetail: values.addressDetail,
      city: values.City,
      phoneNumber: values.phoneNumber,
      name: values.name,
      district: values.District,
      type: values.typeAdress == undefined ? true : false,
      userId: loginInfo.payload.profilesID,
      isDefault: values.isDefault,
      ward: values.Ward,
    };
    if (router.query.id === "new") {
      dispatch(createAddresss(payload))
        .unwrap()
        .then()
        .then((res: any) => {
          message.success("Thêm địa chỉ mới thành công");
          router.back();
        })
        .catch((error: any) => {
          message.error("Thêm mới địa chỉ thất bại !!");
        });
    } else {
      let payloadUpdate: IUpdateAddress = {
        addressDetail: values.addressDetail,
        city: values.City,
        phoneNumber: values.phoneNumber,
        name: values.name,
        district: values.District,
        type: values.typeAdress == undefined ? true : false,
        userId: loginInfo.payload.profilesID,
        isDefault: values.isDefault,
        ward: values.Ward,
        id: Number(router.query.id),
      };
      dispatch(updateAddress(payloadUpdate))
        .unwrap()
        .then()
        .then((res: any) => {
          message.success("Cập nhât địa chỉ mới thành công");
          router.back();
        })
        .catch((error: any) => {
          message.error("Cập nhât địa chỉ thất bại !!");
        });
    }
  };

  useEffect(() => {
    let payload: any = {};
    payload.$filter = `Context eq 'Province'`;

    axios({
      method: "get",
      url: "https://kpi-api.dpotech.vn/msa-configuration/odata/Configurations",
      params: payload,
    }).then((res: any) => {
      if (res) {
        setProvinceData(res.data.Payload);
      }
    });
  }, []);
  console.log(router.query.id);

  useEffect(() => {
    if (router.query.id !== "new") {
      let payload: IGetAddressDetails = {
        id: Number(router.query.id),
      };
      dispatch(getAddressDetails(payload))
        .unwrap()
        .then()
        .then((res: any) => {
          let newdata: IResDetailAdd = {
            ...res.payload,
            City: res.payload.city.split("|").slice(-1)[0],
            District: res.payload.district.split("|").slice(-1)[0],
            Ward: res.payload.ward.split("|").slice(-1)[0],
          };
          setData(newdata);
          setFieldsValue(newdata);
        });
    }
  }, []);

  return (
    <Spin spinning={false} delay={500}>
      <BoxInfoUser>
        <div className="info">Thêm mới địa chỉ</div>
        <div className="form">
          <Form
            layout={"horizontal"}
            form={form}
            onFinish={handelSubmit}
            scrollToFirstError
            labelAlign="left"
            labelCol={{ flex: "152px" }}
            wrapperCol={{ span: 24 }}
            onFieldsChange={onFieldsChange}

            // style={{ marginLeft: '20px' }}
          >
            <Form.Item
              label="Họ và tên"
              name={"name"}
              rules={[
                { required: true, message: "Họ tên không được để trống" },
              ]}
            >
              <Input placeholder="Họ và tên" size="middle" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name={"phoneNumber"}
              rules={[
                { required: true, message: "Họ tên không được để trống" },
                {
                  validator: async (rule: any, value: any, callback) => {
                    // if (value) {
                    //   if (
                    //     RegexValidation.REGEXPHONENUMBER.test(value) == false
                    //   ) {
                    //     return Promise.reject("Số điện thoại không hợp lệ");
                    //   }
                    // }
                  },
                },
              ]}
            >
              <Input placeholder="Số điện thoại" size="middle" />
            </Form.Item>
            <Form.Item
              name={"City"}
              label="Tỉnh/Thành phố"
              rules={[
                {
                  required: true,
                  message: "Tỉnh/Thành phố không được để trống",
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp="children"
                dropdownStyle={{ minWidth: "20%", height: "100px" }}
                allowClear
                size="middle"
                placeholder={"Tỉnh/Thành phố"}
                filterOption={(input: string, option: any) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0 ||
                  option.props.value
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {ProvinceData &&
                  ProvinceData.map((item) => (
                    <Select.Option key={item["Id"]} value={item["Key"]}>
                      {item["Value"]}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={"District"}
              label="Quận/Huyện"
              rules={[
                {
                  required: true,
                  message: "Quận/Huyện phố không được để trống",
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                size="middle"
                placeholder={"Quận/Huyện"}
                disabled={checkDistrict}
                dropdownStyle={{ minWidth: "20%", height: "100px" }}
                filterOption={(input: string, option: any) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0 ||
                  option.props.value
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {provinceDistrict &&
                  provinceDistrict.map((item) => (
                    <Select.Option key={item["Id"]} value={item["Key"]}>
                      {item["Value"]}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={"Ward"}
              label="Phường/Xã"
              rules={[
                {
                  required: true,
                  message: "Phường/Xã không được để trống",
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                size="middle"
                placeholder={"Phường/Xã"}
                dropdownStyle={{ minWidth: "20%", height: "100px" }}
                disabled={checkWard}
                filterOption={(input: string, option: any) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0 ||
                  option.props.value
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {wardData &&
                  wardData.map((item) => (
                    <Select.Option key={item["Id"]} value={item["Key"]}>
                      {item["Value"]}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Địa chỉ"
              name={"addressDetail"}
              rules={[
                {
                  required: true,
                  message: "Địa chỉ cụ thể không được để trống",
                },
              ]}
            >
              <Input placeholder="Địa chỉ củ thể" />
            </Form.Item>
            <Form.Item label="Loại địa chỉ" name={"typeAdress"}>
              <Radio.Group defaultValue={"Nhà riêng/ Chung cư"}>
                <Radio value={"Nhà riêng/ Chung cư"}>Nhà riêng/ Chung cư</Radio>
                <Radio value={"Cơ quan / Công ty"}>Cơ quan / Công ty</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="" name={"isDefault"} valuePropName="checked">
              <Checkbox style={{ marginLeft: "152px" }} value={true}>
                Đặt làm địa chỉ mặc định
              </Checkbox>
            </Form.Item>
            <Button htmlType="submit" style={{ marginLeft: "152px" }}>
              {router.query.id === "new" ? "Thêm mới" : "Cập nhật"}
            </Button>
          </Form>
        </div>
      </BoxInfoUser>
    </Spin>
  );
};
