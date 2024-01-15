import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosPostService } from "../../../constants/AxiosServices";

let URL = "http://127.0.0.1:8000/";

export const loginUser = createAsyncThunk(
  "appDataSlice/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      let url = `${URL}api/login/`;
      // console.log(data)
      console.log({url})

      const res = await AxiosPostService(url, data);
      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserTokenOffline = createAsyncThunk(
  "appDataSlice/getUserTokenOffline",
  async (key) => {
    // let data = await StoreofflineLocalStorage(key);
    return key;
  }
);

export const getUserOffline = createAsyncThunk(
  "appDataSlice/getUserOffline",
  async (key) => {
    return key;
  }
);

let offlineUserToken = {
  loading: true,
  userToken: null,
  error: "",
  isPresent: null,
  userOffline: null,
};

let loginUserState = {
  loading: true,
  data: null,
  error: "",
  success: null,
  isLoggedIn: false,
  isLoggedOutButton: null,
  isChangePassword: null,
};

const appDataSlice = createSlice({
  name: "appData",
  initialState: {
    loginUserState,
    offlineUserToken,
    offlineTokenIsPresent: null,
  },
  reducers: {
    updateToken: (state, action) => {
      // let { payload } = action;
      state.offlineUserToken.loading = null;
      state.offlineUserToken.userToken = action.payload;
      state.offlineUserToken.error = "";

      if (action.payload) {
        state.offlineUserToken.isPresent = true;
        state.offlineTokenIsPresent = true;
        state.loginUserState.isLoggedIn = true;
      } else {
        state.offlineUserToken.isPresent = false;
        state.loginUserState = loginUserState;
      }
    },

    logoutUser: (state, action) => {
      state.loginUserState.isLoggedIn = false;
      state.loginUserState.data = null;
      state.offlineUserToken = {
        loading: true,
        userToken: null,
        error: "",
        isPresent: null,
        userOffline: null,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loginUserState.loading = true;
      state.loginUserState.success = false;
      state.loginUserState.error = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginUserState.data = action.payload;
      state.loginUserState.isLoggedIn = true;
      state.loginUserState.error = "";
      state.loginUserState.loading = false;
      state.loginUserState.success = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {});

    builder.addCase(getUserTokenOffline.pending, (state) => {
      state.offlineUserToken.loading = true;
      state.offlineUserToken.error = "";
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = null;
    });

    builder.addCase(getUserTokenOffline.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.offlineUserToken.loading = null;
      state.offlineUserToken.userToken = action.payload;
      state.offlineUserToken.error = "";

      if (action.payload) {
        state.offlineUserToken.isPresent = true;
        state.offlineTokenIsPresent = true;
        state.loginUserState.isLoggedIn = true;
      } else {
        state.offlineUserToken.isPresent = false;
        state.loginUserState = loginUserState;
      }
    });

    builder.addCase(getUserTokenOffline.rejected, (state, action) => {
      state.loginUserState.loading = null;
      state.getUserTokenOffline.loading = null;
      state.offlineTokenIsPresent = null;
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = false;
      state.loginUserState = loginUserState;
    });

    builder.addCase(getUserOffline.pending, (state) => {});

    builder.addCase(getUserOffline.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state.loginUserState.data = action.payload.user;

        state.loginUserState.loading = false;
      } else {
      }
    });

    builder.addCase(getUserOffline.rejected, (state, action) => {
      state.loginUserState.loading = null;
      state.getUserTokenOffline.loading = null;
      state.offlineTokenIsPresent = null;
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = false;
      state.loginUserState = loginUserState;
    });
  },
});

export const { updateToken, logoutUser, toggleShowSampleFarmers } =
  appDataSlice.actions;

export default appDataSlice.reducer;
