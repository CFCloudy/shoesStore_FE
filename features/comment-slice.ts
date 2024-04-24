
import { RootState, store } from "@/app/store";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import commentApi from "./services/comment-api";


export const getAllComment = createAsyncThunk(
    "getAllComment",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await commentApi.getComment(payload);
            return response.data;
        } catch (err: any) {
            if (!err.response) {
                throw err;
            }
            throw rejectWithValue(err.response.data);
        }
    }
);

export const postComment = createAsyncThunk(
    "postComment",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await commentApi.postComment(payload);
            return response.data;
        } catch (err: any) {
            if (!err.response) {
                throw err;
            }
            throw rejectWithValue(err.response.data);
        }
    }
);


export const reactCmt = createAsyncThunk('ReactionComt', async (payload: any, { rejectWithValue }) => {
    try {
        const response = await commentApi.reactionComment(payload);
        return response.data;
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        throw rejectWithValue(err.response.data)
    }
})
export const deleteCmt = createAsyncThunk('deleteComment', async (payload: any, { rejectWithValue }) => {
    try {
        const response = await commentApi.deleteComment(payload);
        return response.data;
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        throw rejectWithValue(err.response.data)
    }
})
const initState: any = {
    error: false,
    loading: false,
};


const commentSlice = createSlice({
    name: "user_slice",
    initialState: initState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllComment.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllComment.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(getAllComment.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(postComment.pending, (state) => {
                state.loading = true;
            })
            .addCase(postComment.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(postComment.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(reactCmt.pending, (state) => {
                state.loading = true;
            })
            .addCase(reactCmt.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(reactCmt.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deleteCmt.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCmt.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(deleteCmt.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = true;
            })
    },
});

const { reducer, actions } = commentSlice;
export const selectComment = (state: RootState) => state.comment;
export default reducer;

