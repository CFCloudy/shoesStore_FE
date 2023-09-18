export interface IStylesResponse {
  id: number;
  styleName: string;
  displayOrder: number;
  type: "Style";
}
export interface ISizesResponse {
  id: number;
  size1: string;
  displayOrder: number;
  locale: string;
  type: "Size";
}

export interface IFeaturesResponse {
  id: number;
  featureName: string;
  displayOrder: number;
  type: "Feature";
}
export interface IBrandsResponse {
  id: number;
  brandName: string;
  displayOrder: number;
  type: "Brand";
}
export interface IColorsResponse {
  id: number;
  colorName: string;
  displayOrder: number;
  type: "Color";
}

export interface IInitStateProduct {
  error: boolean;
  loading: boolean;
}

export interface IFilterData {
  nameShoe?: string;
  sorting: string;
  brandDTOs?: [
    {
      id: number;
      brandName: string;
      type: string;
    }
  ];
  featureDTOs?: [
    {
      id: number;
      featureName: string;
      type: string;
    }
  ];
  styleDTOs?: [
    {
      id: number;
      styleName: string;
      type: string;
    }
  ];
  sizeDTOs?: [
    {
      id: number;
      size1: string;
    }
  ];
  colorDTOs?: [
    {
      id: number;
      colorName: string;
    }
  ];
  isDecrease?: boolean;
  isAscending?: boolean;
  page: number;
  skipCount: number;
  maxResultCount: number;
}
