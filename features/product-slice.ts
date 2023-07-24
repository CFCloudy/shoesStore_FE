import { RootState, store } from "@/app/store";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productApi from "./services/product-api";
import { IInitStateProduct } from "@/models/product";

export const getListColors = createAsyncThunk("getListColors", async () => {
  try {
    const response = await productApi.getListColor();
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
  }
});
export const getListStyles = createAsyncThunk("getListStyles", async () => {
  try {
    const response = await productApi.getListStyles();
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
  }
});

export const getListSize = createAsyncThunk("getListSize", async () => {
  try {
    const response = await productApi.getListSize();
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
  }
});

export const getListFeature = createAsyncThunk("getListSize", async () => {
  try {
    const response = await productApi.getListFeature();
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
  }
});

export const getListBrands = createAsyncThunk("getListSize", async () => {
  try {
    const response = await productApi.getListBrands();
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
  }
});

const initState: IInitStateProduct = {
  error: false,
  loading: false,
};

const productSlice = createSlice({
  name: "user_slice",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getListColors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListColors.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(getListColors.rejected, (state, { error }) => {
        state.error = false;
        state.loading = false;
      });
  },
});

const { reducer, actions } = productSlice;
export const selectProduct = (state: RootState) => state.product;
export default reducer;
