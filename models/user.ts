export interface IInitStateUser {
  loading: boolean;
  error: boolean;
  register: any;
}

export interface ILoginPayload {
  Email: string;
  Password: string;
}

export interface ILoginResponse {
  Email: string;
  UserProfilesId: number;
  Role: string;
  PhoneNumber: string;
  Gender: boolean;
  Avatar: any;
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
