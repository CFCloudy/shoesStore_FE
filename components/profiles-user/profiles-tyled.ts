import styled from "styled-components";

export const WrapperProfile = styled.div`
  padding: 30px 120px 0 120px;
  .wrapbutton {
    cursor: pointer;
    padding: 4px 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 40px;
    :hover {
      background: #ebebeb;
    }
  }
`;

export const BoxInfoUser = styled.div`
  background: #fff;
  float: left;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 13%);
  border-radius: 0.125rem;
  width: 100%;
  .info {
    margin: 15px 20px 0;
    padding-bottom: 15px;
    font-size: 20px;
    color: #000;
    border-bottom: 1px solid #efefef;
  }
  .form {
    padding: 20px 40px;
    .add {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      button {
        color: #fff;
        height: 40px;
        width: 180px;
      }
      .btn {
        margin-right: 12px;
      }
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10%;
      text-align: center;
      svg {
        font-size: 150px;
      }
    }
    .wrapp {
      border-top: 1px solid #efefef;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .wrapperAddress {
        width: calc(100% - 40px);
        margin: 0 20px;
        background: #fff;
        padding: 20px 0;
        line-height: 2;
        font-size: 14px;
        p {
        }
        .wrapdetail {
          display: flex;
          align-items: center;
          .name {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
      .wrap2 {
        .btn1 {
          display: flex;
          align-items: center;
          justify-content: center;
          .update {
            text-decoration: underline;
            font-weight: 500;
            font-size: 16px;
            cursor: pointer;
            :hover {
              text-decoration: none;
              color: #d87035;
            }
          }
        }
        .btn2 {
          padding: 10px;
          button {
            background: black;
            color: #fff;
            border-radius: 4px;
          }
        }
      }
    }
  }
`;
