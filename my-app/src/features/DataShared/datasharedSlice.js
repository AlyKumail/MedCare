import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import datasharedService from "./datasharedService";

const initialState = {
  id: user._id,
  datashared: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isWalletConnected: false,
  message: "",
};

export const getDataSharedWith = createAsyncThunk(
  "datashared/getdatasharedwith",
  async (user, thunkAPI) => {
    try {
      return await datasharedService.get(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const datasharedSlice = createSlice({
  name: "datashared",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataSharedWith.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDataSharedWith.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getDataSharedWith.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
    //   .addCase(login.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.user = action.payload;
    //   })
    //   .addCase(login.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //     state.user = null;
    //   });
  },
});

//   export const authSlice.actions;
export default datasharedSlice.reducer;
