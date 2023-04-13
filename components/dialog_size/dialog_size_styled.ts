import { Button, Modal } from "antd";
import styled from "styled-components";

export const ModelWrapper = styled(Modal)`
  font-style: normal;
  font-weight: 400;
  width: 380px;
  border-radius: 0px;
  svg {
    color: #1890ff;
  }
  height: 202px;
  .ant-modal-title {
    color: #5d5fef;
  }
  .ant-modal-header {
    box-shadow: inset 0px -1px 0px rgba(93, 95, 239, 0.5);
  }
  .cssDatepicker {
    width: 100%;
  }
  .ant-modal-footer {
    align-items: center;
  }
  .ant-modal-footer {
    border-top: none;
  }
  .ant-modal-body {
    padding-bottom: 10px;
  }
  p {
    color: #ff4d4f;
    text-align: center;
    font-size: 18px;
    line-height: 22px;
  }
  .ant-modal-content {
    /* border-radius: 20px; */
  }
  .wrappcontent {
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    color: #14142b;
  }
`;

export const WrapperFooter = styled.div`
  align-items: center;
  text-align: center;
  /* padding-bottom: 15px; */
`;
export const ButtonOk = styled(Button)`
  width: 104px;
  height: 32px;
  background: #1890ff;
  border: 1px solid #5d5fef;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  line-height: 22px;
`;
export const BtnVetify = styled(Button)`
  width: 100%;
  background: #1890ff;
  border: 1px solid #5d5fef;
  color: #ffffff;
  font-size: 14px;
  border-radius: 4px;
`;
export const ButtonCancle = styled(Button)`
  width: 104px;
  height: 32px;
  background: #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #002766;
  font-size: 14px;
  line-height: 22px;
`;
