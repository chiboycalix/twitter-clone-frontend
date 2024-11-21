import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TweetResponse, TweetState } from "../../types";
import api from "../../api/axios";

const initialState: TweetState = {
  tweets: [],
  createdTweet: null,
  loading: false,
  error: null,
};

export const fetchTweets = createAsyncThunk(
  "tweets/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/tweets");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Fetch Tweets failed"
      );
    }
  }
);

export const createTweet = createAsyncThunk(
  "tweets/create",
  async (
    data: { content: string; sharedWith: string[] },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/tweets", data);

      const newTweet = response.data;

      if (data.sharedWith.length > 0) {
        await api.post("/tweets/share", {
          shareWithUserIds: data.sharedWith,
          tweetId: newTweet.data.id,
        });
      }

      return newTweet;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Create and Share Tweets failed"
      );
    }
  }
);

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTweets.fulfilled,
        (state, action: PayloadAction<TweetResponse>) => {
          state.loading = false;
          state.tweets = action.payload.data;
          state.error = null;
        }
      )
      .addCase(fetchTweets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createTweet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTweet.fulfilled, (state, action) => {
        state.loading = false;
        state.createdTweet = action.payload.data;
        state.error = null;
      })
      .addCase(createTweet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = tweetSlice.actions;
export default tweetSlice.reducer;
