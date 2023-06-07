import { RootState, store } from "@/app/store";
import {
  IConfirmOTP,
  IInitStateUser,
  ILoginPayload,
  IPayloadRefresToken,
  IRegisterPayload,
  IResendOTP,
} from "@/models/user";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userApi from "./services/user-api";

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

const initState: IInitStateUser = {
  error: false,
  loading: false,
  register: {},
};

const userSlice = createSlice({
  name: "user_slice",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userSignin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignin.fulfilled, (state, { payload }) => {
        state.loading = false;
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
      });
  },
});

const { reducer, actions } = userSlice;
export const selectUser = (state: RootState) => state.user;
export default reducer;
