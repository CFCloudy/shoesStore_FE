import { ButtonBlack } from "@/components/home-pages/home-pages-styled";
import {
  FacebookOutlined,
  InstagramOutlined,
  SkypeOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Row, Tooltip } from "antd";
import { Fragment } from "react";
import { WrappColFooter, WrapperFooter } from "./footer-styled";

export const Footer = () => {
  return (
    <WrapperFooter>
      <Row>
        <Col xs={24} md={12} xxl={6} lg={6}>
          <WrappColFooter>
            <div className="title">Để không bỏ lỡ</div>
            <p>
              Hãy là người đầu tiên biết về việc ra mắt sản phẩm mới nhất. Đăng
              ký nhận email của chúng tôi.
            </p>
            <div className="input_email">
              <Input placeholder="Nhập email của bạn"></Input>
              <ButtonBlack style={{ padding: "0 16px" }}>Gửi</ButtonBlack>
            </div>
          </WrappColFooter>
        </Col>
        <Col xs={24} md={12} xxl={6} lg={6}>
          <WrappColFooter>
            <div className="title">Thẻ quà tặng</div>
            <div className="title">Hãy theo dõi chúng tôi</div>
            <div className="wrapp_icon">
              <Tooltip placement="top" title="Instagram">
                <a href="#">
                  <InstagramOutlined />
                </a>
              </Tooltip>
              <Tooltip placement="top" title="Facebook">
                <a href="#">
                  <FacebookOutlined />
                </a>
              </Tooltip>
              <Tooltip placement="top" title="Skype">
                <a href="#" style={{ borderRight: "0.0625rem solid #e5e5e5" }}>
                  <SkypeOutlined />
                </a>
              </Tooltip>
            </div>
          </WrappColFooter>
        </Col>
        <Col xs={24} md={12} xxl={6} lg={6}>
          <WrappColFooter>
            <div className="title">Bạn cần giúp đỡ?</div>
            <ul>
              <li>Liên hệ với chúng tôi</li>
              <li>Vận chuyển và giao hàng</li>
              <li>Đơn hàng và trả hàng</li>
              <li>Câu hỏi thường gặp</li>
            </ul>
          </WrappColFooter>
        </Col>
        <Col xs={24} md={12} xxl={6} lg={6}>
          <WrappColFooter>
            <div className="title">Về chúng tôi</div>
            <ul>
              <li>Nghề nghiệp & Văn hóa</li>
              <li>Nike.com</li>
              <li>Adidas.com</li>
            </ul>
          </WrappColFooter>
        </Col>
      </Row>
    </WrapperFooter>
  );
};
