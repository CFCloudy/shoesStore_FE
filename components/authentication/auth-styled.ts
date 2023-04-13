import styled from "styled-components";

export const WrapperAuthen = styled.div`
  padding: 30px 0;
  line-height: 36px;
  margin: auto;
  width: 500px;
  p {
    font-size: 13px;
  }
  p,
  h2 {
    text-align: center;
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
  }
  input,
  .signin {
    display: flex;
    justify-content: center;
    width: 460px;
    border-style: outset;
    border: none;
    font-size: 16px;
    color: #000000;
    mix-blend-mode: multiply;
    opacity: 0.6;
    outline: 0 !important;
    border-width: 0 0 2px;
    border-color: blue;
    outline: 0;
    border-bottom: 1px solid #000000;
    transform: matrix(1, 0, 0, 1, 0, 0);
    border-radius: 0px;
    :hover {
      outline: 0;
    }
    :focus {
      outline: 0;
      box-shadow: none !important;
    }
  }
  .forgot {
    margin-left: 20px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
