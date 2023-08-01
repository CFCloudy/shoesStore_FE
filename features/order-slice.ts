import { RootState, store } from "@/app/store";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import orderApi from "./services/order-api";
import { IFilterData, IInitStateProduct } from "@/models/product";
import {
  IAddToCart,
  ICartResponse,
  IFilterOrder,
  IInitStateOrder,
  IPayloadOrder,
} from "@/models/order";

export const createOrder = createAsyncThunk(
  "createOrder",
  async (payload: IPayloadOrder, { rejectWithValue }) => {
    try {
      const response = await orderApi.createrOrder(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const AddToCart = createAsyncThunk(
  "AddToCart",
  async (payload: IAddToCart, { rejectWithValue }) => {
    try {
      const response = await orderApi.addToCart(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getOrderByUserId = createAsyncThunk(
  "createOrder",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await orderApi.getOrderByUserId(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getListOrder = createAsyncThunk(
  "getListOrder",
  async (payload: IFilterOrder, { rejectWithValue }) => {
    try {
      const response = await orderApi.getListOrder(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      throw rejectWithValue(err.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  "getCart",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await orderApi.getCart(payload);
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err.response;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const getListVoucher = createAsyncThunk("getListVoucher", async () => {
  try {
    const response = await orderApi.getListVoucher();
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err.response;
    }
  }
});
const storagecart =
  typeof window !== "undefined" ? localStorage.getItem("cart") : undefined;
const initState: IInitStateOrder = {
  error: false,
  loading: false,
  cart: storagecart
    ? (JSON.parse(storagecart) as ICartResponse)
    : ({} as ICartResponse),
};

const orderSlice = createSlice({
  name: "user_slice",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getListOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getListOrder.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        //   state.token=payload as ILoginResponseNotActive
      })
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(AddToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(AddToCart.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(AddToCart.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cart = payload;
      })
      .addCase(getCart.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      });
  },
});

const { reducer, actions } = orderSlice;
export const selectOrder = (state: RootState) => state.order;
export default reducer;
