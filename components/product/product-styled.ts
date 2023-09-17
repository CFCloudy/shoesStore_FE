import styled from "styled-components";

export const WrappProduct = styled.div`
  width: 100%;
  /* height: 260px; */
  .image {
    width: 100%;
    height: 260px;
  }
  @media (max-width: 502px) {
    .image_product {
      height: 360px;
    }
  }
  @media (max-width: 1160px) {
    .image_product.image {
      height: 360px;
    }
  }
  .image_product {
    width: 100% !important;
  }
  .name_product {
    cursor: pointer;
    padding-top: 20px;
    :hover {
      text-decoration: underline;
    }
  }
  .color {
    display: flex;
    padding: 5px 0;
    gap: 8px;
    .circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: red;
    }
  }
`;
