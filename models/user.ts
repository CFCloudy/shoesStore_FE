export interface IInitStateUser {
  loading: boolean;
  error: boolean;
  register: any;
  isforgot: boolean;
  loginInfo: ILoginResponse;
  loadingAdress: boolean;
  loadingDeleteAdress: boolean;
}

export interface ILoginPayload {
  Email: string;
  Password: string;
}

export interface ILoginResponse {
  Message: string;
  payload: {
    email: string;
    userProfilesId: number;
    role: string;
    phoneNumber: string;
    gender: boolean;
    fullName: string;
    Avatar: any;
    refreshToken: string;
    RefreshTokenExpiryTime: Date;
    id: string;
    profilesID: number;
    accessToken: string;
  };
  Status: string;
}

export interface IPayloadRefresToken {
  RefreshToken: string;
  AccessSystem: string;
}

export interface IRegisterPayload {
  Email: string;
  Password: string;
  FullName: string;
}

export interface IConfirmOTP {
  UserId: string;
  Code: string;
}

export interface IResendOTP {
  UserId: string;
}

export interface IForgotPass {
  Email: string;
}

export interface ICreateAddress {
  userId: number;
  name: string;
  phoneNumber: string;
  district: string;
  city: string;
  ward: string;
  addressDetail: string;
  type: boolean;
  isDefault: boolean;
}

export interface IUpdateAddress {
  addressDetail: string;
  city: string;
  isDefault: boolean;
  name: string;
  phoneNumber: string;
  district: string;
  type: boolean;
  id: number;
  userId: number;
  ward: string;
}

export interface IResDetailAdd {
  addressDetail: string;
  city: string;
  isDefault: boolean;
  name: string;
  phoneNumber: string;
  district: string;
  typeAdress: string;
  id: string;
  userId: string;
  ward: string;
}

export interface IGetAddressDetails {
  id: number;
}

export interface ILogoutPayload {
  id: string;
}
