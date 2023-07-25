export interface IStylesResponse {
  id: number;
  styleName: string;
  displayOrder: number;
}
export interface ISizesResponse {
  id: number;
  size1: string;
  displayOrder: number;
  locale: string;
}

export interface IFeaturesResponse {
  id: number;
  featureName: string;
  displayOrder: number;
}
export interface IBrandsResponse {
  id: number;
  brandName: string;
  displayOrder: number;
}
export interface IColorsResponse {
  id: number;
  colorName: string;
  displayOrder: number;
}

export interface IInitStateProduct {
  error: boolean;
  loading: boolean;
}

export interface IFilterData {
  brandDTOs?:[
    {
      id:number,
      brandName:string
    }
  ],
  featureDTOs?:[
    {
      id:number,
      featureName:string
    }
  ],
  styleDTOs?:[
    {
      id:number,
      styleName:string
    }
  ],
  isDecrease:boolean,
  isAscending:boolean
}
