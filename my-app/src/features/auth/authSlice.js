import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isWalletConnected: false,
  dataShared: [],
  message: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const addAddress = createAsyncThunk(
  "auth/addAddress",
  async (data, thunkAPI) => {
    try {
      console.log("in auth slice add address !!!!!!");
      return await authService.addAddress(data);
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

export const getDataShared = createAsyncThunk(
  "auth/getDataShared",
  async (data, thunkAPI) => {
    try {
      console.log("in auth slice get data shared !!!!!!");
      return await authService.getDataShared(data);
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

export const removeDataShared = createAsyncThunk(
  "auth/removeDataShared",
  async (data, thunkAPI) => {
    try {
      console.log("in auth slice REMOVE data shared !!!!!!");
      return await authService.removeDataShared(data);
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

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.isWalletConnected = false;
      state.message = "";
    },
    setWalletConnectedState: (state, action) => {
      console.log("INSIDE REDUX");
      state.isWalletConnected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dataShared = action.payload;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.dataShared = null;
      })
      .addCase(getDataShared.fulfilled, (state, action) => {
        state.dataShared = [...action.payload.userList];
      })
      .addCase(removeDataShared.fulfilled, (state, action) => {
        state.dataShared = action.payload;
      });
  },
});

export const { reset, setWalletConnectedState } = authSlice.actions;
export default authSlice.reducer;
