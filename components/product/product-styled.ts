import styled from "styled-components";

// export const WrappProduct = styled.div`
//   width: 100%;
//   /* height: 260px; */
//   .image {
//     width: 100%;
//     /* height: 260px; */
//   }
//   @media (max-width: 502px) {
//     .image_product {
//       height: 360px;
//     }
//   }
//   @media (max-width: 1160px) {
//     .image_product.image {
//       height: 360px;
//     }
//   }
//   .image_product {
//     width: 100% !important;
//     img{
//       width: 100%;
//     }
//   }
//   .name_product {
//     cursor: pointer;
//     padding-top: 20px;
//     :hover {
//       text-decoration: underline;
//     }
//   }
//   .color {
//     display: flex;
//     padding: 5px 0;
//     gap: 8px;
//     .circle {
//       width: 18px;
//       height: 18px;
//       border-radius: 50%;
//       background: red;
//     }
//   }
// `;
export const WrappProduct = styled.div`
  display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          padding: 24px;
          background: white;
          border-radius: 6px;
  .image_product {
  width: 100%;
  /* max-width: 240px; */
  height: auto;
  position: relative;
  overflow: hidden;
}

.image_product .image {

  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 .name_product {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price_product {
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}

.color {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.color .circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0 5px;
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
`;
