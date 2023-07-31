import { RootState, store } from "@/app/store";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import orderApi from "./services/order-api";
import { IFilterData, IInitStateProduct } from "@/models/product";
import { IPayloadOrder } from "@/models/order";

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

const initState: IInitStateProduct = {
  error: false,
  loading: false,
};

const orderSlice = createSlice({
  name: "user_slice",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      });
  },
});

const { reducer, actions } = orderSlice;
export const selectProduct = (state: RootState) => state.order;
export default reducer;
