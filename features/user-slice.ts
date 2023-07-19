import { RootState, store } from "@/app/store";
import {
  IConfirmOTP,
  ICreateAddress,
  IForgotPass,
  IGetAddressDetails,
  IInitStateUser,
  ILoginPayload,
  ILoginResponse,
  ILogoutPayload,
  IPayloadRefresToken,
  IRegisterPayload,
  IResendOTP,
  IUpdateAddress,
} from "@/models/user";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userApi from "./services/user-api";
import { ICartResponse } from "@/components/sneaker/sneaker-detail";

export const userSignin = createAsyncThunk(
  "UserSignin",
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const response = await userApi.userSigIn(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      throw rejectWithValue(err.response.data);
    }
  }
);

export const userRegister = createAsyncThunk(
  "userRegister",
  async (payload: IRegisterPayload, { rejectWithValue }) => {
    try {
      const response = await userApi.userRegister(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      throw rejectWithValue(err.response.data);
    }
  }
);

export const confirmOTP = createAsyncThunk(
  "confirmOTP",
  async (payload: IConfirmOTP, { rejectWithValue }) => {
    try {
      const response = await userApi.userConfirmOTP(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      throw rejectWithValue(err.response.data);
    }
  }
);

export const userRefreshToken = createAsyncThunk(
  "REFRESH_TOKEN",
  async (payload: IPayloadRefresToken, { rejectWithValue }) => {
    try {
      const response = await userApi.userRefreshToken(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const userForgotPass = createAsyncThunk(
  "userForgotPass",
  async (payload: IForgotPass, { rejectWithValue }) => {
    try {
      const response = await userApi.forgotpass(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const userResendOTP = createAsyncThunk(
  "userResendOTP",
  async (payload: IResendOTP, { rejectWithValue }) => {
    try {
      const response = await userApi.reSendOTP(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getListAdress = createAsyncThunk(
  "getListAdress",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await userApi.getListAddress(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const createAddresss = createAsyncThunk(
  "createaddress",
  async (payload: ICreateAddress, { rejectWithValue }) => {
    try {
      const response = await userApi.createAddress(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const updateAddress = createAsyncThunk(
  "updateaaddress",
  async (payload: IUpdateAddress, { rejectWithValue }) => {
    try {
      const response = await userApi.updateAddress(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getAddressDetails = createAsyncThunk(
  "getAddressDetails",
  async (payload: IGetAddressDetails, { rejectWithValue }) => {
    try {
      const response = await userApi.getAddressDetails(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const userLogout = createAsyncThunk(
  "LOGOUT",
  async (payload: ILogoutPayload, { rejectWithValue }) => {
    try {
      const response = await userApi.userLogout(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const removeAddress = createAsyncThunk(
  "removeAddress",
  async (payload: IGetAddressDetails, { rejectWithValue }) => {
    try {
      const response = await userApi.removeAdress(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateStorageValue = (newValue:any) => ({
  type: 'UPDATE_STORAGE_VALUE',
  payload: newValue,
});

const storage =
  typeof window !== "undefined" ? localStorage.getItem("u") : undefined;
  const storagecart =
  typeof window !== "undefined" ? localStorage.getItem("cart") : undefined;
const initState: IInitStateUser = {
  error: false,
  loading: false,
  register: {},
  isforgot: false,
  loginInfo: storage
    ? (JSON.parse(storage) as ILoginResponse)
    : ({} as ILoginResponse),
  loadingAdress: false,
  loadingDeleteAdress: false,
  cart:storagecart
  ? (JSON.parse(storagecart) as ICartResponse)
  : ({} as ICartResponse),
};

const userSlice = createSlice({
  name: "user_slice",
  initialState: initState,
  reducers: {
    updateStorageValue: (state, action) => {
      state.cart = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userSignin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.loginInfo = payload as ILoginResponse;
        if (typeof window !== "undefined") {
          localStorage.setItem("u", JSON.stringify(payload));
        }
      })
      .addCase(userSignin.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.register = payload;
      })
      .addCase(userRegister.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(confirmOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmOTP.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(confirmOTP.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogout.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.loginInfo = {} as ILoginResponse;
        if (typeof window !== "undefined") {
          localStorage.clear();
        }
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(userResendOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(userResendOTP.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(userResendOTP.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(userForgotPass.pending, (state) => {
        state.loading = true;
      })
      .addCase(userForgotPass.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isforgot = true;
      })
      .addCase(userForgotPass.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(userRefreshToken.pending, (state) => {})
      .addCase(userRefreshToken.fulfilled, (state, { payload }) => {
        // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
        // state.isAuthentication = true;
        if (typeof window !== "undefined") {
          localStorage.setItem("u", JSON.stringify(payload));
        }
        state.loginInfo = payload;
      })
      .addCase(userRefreshToken.rejected, (state, { payload }) => {
        state.error = true;
      })
      .addCase(createAddresss.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAddresss.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createAddresss.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getAddressDetails.pending, (state) => {
        state.loadingAdress = true;
      })
      .addCase(getAddressDetails.fulfilled, (state, { payload }) => {
        state.loadingAdress = false;
      })
      .addCase(getAddressDetails.rejected, (state, action) => {
        state.loadingAdress = false;
        state.error = true;
      })

      .addCase(removeAddress.pending, (state) => {
        state.loadingDeleteAdress = true;
      })
      .addCase(removeAddress.fulfilled, (state, { payload }) => {
        state.loadingDeleteAdress = false;
      })
      .addCase(removeAddress.rejected, (state, action) => {
        state.loadingDeleteAdress = false;
        state.error = true;
      })

      .addCase(updateAddress.pending, (state) => {
        state.loadingAdress = true;
      })
      .addCase(updateAddress.fulfilled, (state, { payload }) => {
        state.loadingAdress = false;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loadingAdress = false;
        state.error = true;
      })
      .addCase(getListAdress.pending, (state) => {
        state.loadingAdress = true;
      })
      .addCase(getListAdress.fulfilled, (state, { payload }) => {
        state.loadingAdress = false;
      })
      .addCase(getListAdress.rejected, (state, { error }) => {
        state.error = false;
        state.loadingAdress = false;
      });
  },
});

const { reducer, actions } = userSlice;
export const selectUser = (state: RootState) => state.user;
export default reducer;
