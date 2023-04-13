import styled from "styled-components";

export const WrapperFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 0 70px;
  border-top: 0.0625rem solid #e5e5e5;
  background-color: #fff;
`;

export const WrappColFooter = styled.div`
  border-right: 0.0625rem solid #e5e5e5;
  @media (max-width: 768px) {
    border-bottom: 0.0625rem solid #e5e5e5;
    border-right: 0rem solid #e5e5e5;
    text-align: center;
  }
  @media (max-width: 992px) {
    border-bottom: 0.0625rem solid #e5e5e5;
    height: 145px;
  }
  padding: 20px 10px 32px 32px;
  width: 100%;
  .input_email {
    padding: 8px 0;
    display: flex;
    align-items: center;
  }
  input,
  button {
    border-radius: 0px;
    height: 40px;
  }
  button {
    border-left: 0px;
    background-color: black;
    color: #fff;
    :hover {
    }
  }
  .title {
    font-weight: 600;
    padding: 5px 0;
  }
  p {
    font-size: 13px;
    padding: 5px 0;
  }
  .wrapp_icon {
    display: flex;
    /* gap: 20px; */
    padding-top: 12px;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        padding: 10px 40px !important;
      }
    }
    font-size: 24px;
    a {
      border-top: 0.0625rem solid #e5e5e5;
      border-bottom: 0.0625rem solid #e5e5e5;
      border-left: 0.0625rem solid #e5e5e5;
      padding: 10px 12px;
    }
  }
  ul li {
    list-style: none;
    cursor: pointer;
    font-size: 13px;
    line-height: 20px;
    :hover {
      text-decoration: underline;
    }
  }
`;
