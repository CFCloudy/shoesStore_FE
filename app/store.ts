import userSlice from "@/features/user-slice";
import productSlice from "@/features/product-slice";
import orderSlice from "@/features/order-slice";
import commentSlice from "@/features/comment-slice"
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from "@reduxjs/toolkit";

const rootReducer = {
  user: userSlice,
  product: productSlice,
  order: orderSlice,
  comment: commentSlice
};
export const store = configureStore({
  reducer: rootReducer,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
