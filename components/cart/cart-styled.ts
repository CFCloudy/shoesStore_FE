import { Steps, Upload } from "antd";
import styled from "styled-components";

export const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin-top: 24px;
  border-radius: 10px;
`;
export const BoxHeader = styled.div`
  height: 54px;
  box-shadow: inset 0px -1px 0px black;
  display: flex;
  align-items: center;
  padding: 0px 24px 0 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BoxBody = styled.div`
  padding: 15px 24px 10px 24px;
  .option {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .css {
    input {
      width: 1000 px;
    }
  }
  .wpbox {
    .title {
      font-weight: 600;
      line-height: 28px;
    }
    padding: 10px;
    outline: 1px solid #d3d7da;
    margin: 10px 0;
    line-height: 16px;
  }
`;
export const ContenRight = styled.div`
  color: black;
  opacity: 40%;
`;

export const CartItem = styled.div`
  height: 240px;
  margin-bottom: 10px;
  border: 0.0625rem solid #e5e5e5;
  .detail {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    line-height: 22px;
    font-size: 16px;
    .quantity {
      margin-top: 40px;
      width: 120px;
      height: 50px;
      align-items: center;
      border-radius: 0;
      :hover {
        background-color: #fff;
        color: black !important;
        border: 1px solid black !important;
      }
      :active::before {
        border: 1px solid black !important;
      }
    }
  }
`;

export const CheckOut = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-bottom: 5px;
  .deal {
    text-align: right;

    .main1 {
      border-radius: 0.125rem;
      white-space: nowrap;
      max-width: 100%;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      color: #ee4d2d;
      border: 1px solid #ee4d2d;
      font-size: 12px;
      padding: 0.0625rem 0.25rem;
      cursor: pointer;
      /* background-color: blue; */
    }
  }
`;

export const WrapperVoucher = styled.div`
  input {
    width: 380px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const WrapperDiscount = styled.div`
  width: 100%;
  background-color: antiquewhite;
  height: 100px;
  display: flex;
  margin-bottom: 20px;
  box-shadow: 0.125rem 0.125rem 0.3125rem rgb(0 0 0 / 7%);
`;
export const WrapperDiscountLeft = styled.div`
  width: 26%;
  --border-color: #00bfa5;
  --background-color: #00bfa5;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0,
    transparent 0.1875rem,
    var(--background-color) 0
  );
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-radius: 0.125rem 0 0 0.125rem;
  display: flex;
  align-items: center;
  .circle {
    /* position: absolute; */
    /* top: 0.3125rem; */
    /* left: 0; */
    width: 0.25rem;
    height: 78%;
    background: radial-gradient(
      circle at 0,
      at 0.25rem,
      transparent 0,
      transparent 0.1875rem,
      var(--border-color) 0,
      var(--background-color) 0.25rem
    );
    background: radial-gradient(
      circle at 0 0.25rem,
      transparent 0,
      transparent 0.1875rem,
      var(--border-color) 0,
      var(--background-color) 0.25rem
    );
    background-size: 0.25rem 0.625rem;
    background-repeat: repeat-y;
  }
  .content {
    color: #fff;
    font-size: 1.25rem;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.375rem;
    margin-left: 20px;
    max-height: 2.75rem;
    text-transform: uppercase;
    text-align: center;
  }
`;
export const WrapperDiscountRigth = styled.div`
  width: 74%;
  background-color: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 0.75rem;
  justify-content: space-between;
  border: solid 1px #e8e8e8;
  .main {
    .main1 {
      border-radius: 0.125rem;
      white-space: nowrap;
      max-width: 100%;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      color: #ee4d2d;
      border: 1px solid #ee4d2d;
      padding: 0.0625rem 0.25rem;
    }
    .deal {
      color: #ee4d2d;
      margin-right: 20px;
    }
  }
`;

export const UploadCustom = styled(Upload)`
  .ant-upload-list-picture-card .ant-upload-list-item {
    width: 50px;
    height: 50px;
    padding: 1px;
  }
  .ant-upload-list-picture-card-container {
    width: 60px;
    height: 60px;
  }
  .ant-upload.ant-upload-select-picture-card {
    width: 50px;
    height: 50px;
    div {
      font-size: 12px;
    }
  }
  .ant-upload.ant-upload-select-picture-card > .ant-upload {
    height: auto;
  }
`;

export const WrapProduct = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin-top: 24px;
  border-radius: 10px;
  width: 100%;
  padding: 22px;
  .title {
    margin-bottom: 5px;
    font-size: 19px;
    font-weight: 600;
  }
  .addnew {
    font-size: 15px;
    font-weight: 600;
    color: blue;
    cursor: pointer;
  }
  .generateCode {
    font-weight: 600;
    font-size: 17px;
    margin-top: 20px;
  }
  .type {
    /* padding-left: px; */
  }
`;

export const BoxMedia = styled.div``;
export const WrapperOptions = styled.div`
  padding: 15px;
`;
export const OptionWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 100% !important;
  }
  .border {
    width: 95%;
  }
  svg {
    width: 15px;
    height: 15px;
  }
  .box {
  }
`;

export const StepsCustom = styled(Steps)`
  .custom-steps .ant-steps-item-process .ant-steps-item-title {
    color: #ff0000 !important;
    background-color: #ff0000 !important;
    /* Custom color for active step title */
  }

  .ant-steps-item .ant-steps-item-process .ant-steps-item-active {
    /* background-color: #ff0000 !important; */
  }

  .ant-steps-item-finish {
    /* background-color: #ff0000 !important; */
    /* font-size: 90px !important; */
  }
`;

export const SpaceBetW = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 6px;
  line-height: 22px;
`;
