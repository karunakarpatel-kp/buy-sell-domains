import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { sendConfetti, sendNotificationToast } from "../UISlice/UISlice";

interface loginSliceInitialProps {
  userName: string;
  passWord: string;
  loginServiceState: {
    loginUserServiceStatus: "PENDING" | "FULLFILLED" | "REJECTED";
    loginUserServiceData: any;
    userLoggedIn: boolean;
  };
}

export const initialState: loginSliceInitialProps = {
  userName: "",
  passWord: "",
  loginServiceState: {
    loginUserServiceStatus: "PENDING",
    loginUserServiceData: null,
    userLoggedIn: false,
  },
};

interface incomingObjProps {
  userName: string;
  passWord: string;
}

export const loginUserService = createAsyncThunk(
  "loginUserService",
  async (incomingObj: incomingObjProps, thunkAPI) => {
    let data = JSON.stringify(incomingObj);
    let config = {
      method: "post",
      url: `http://localhost:5050/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const resp = await axios(config);
      const respData = await resp.data;
      thunkAPI.dispatch(sendNotificationToast({ Toast: { message: resp.data.message, variant: "success" } }));
      thunkAPI.dispatch(sendConfetti(true));
      return respData;
    } catch (err: any) {
      thunkAPI.dispatch(sendNotificationToast({ Toast: { message: err.response.data.message, variant: "error" } }));
      return err.response.data;
    }
  }
);

export const LoginSlice = createSlice({
  name: "login-slice",
  initialState,
  reducers: {
    sendLoginUserCred: (state: any, action: PayloadAction<{ userName: string; passWord: string }>) => {
      state.userName = action.payload.userName;
      state.passWord = action.payload.passWord;
    },
    logOutUser: (state) => {
      state.loginServiceState.loginUserServiceStatus = "PENDING";
      state.loginServiceState.loginUserServiceData = null;
      state.loginServiceState.userLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserService.pending, (state, action) => {
      state.loginServiceState.loginUserServiceStatus = "PENDING";
      state.loginServiceState.userLoggedIn = false;
    });
    builder.addCase(loginUserService.fulfilled, (state, action) => {
      if (action.payload !== undefined && action.payload.hasOwnProperty("token")) {
        state.loginServiceState.loginUserServiceStatus = "FULLFILLED";
        state.loginServiceState.loginUserServiceData = action.payload;
        state.loginServiceState.userLoggedIn = true;
      } else {
        state.loginServiceState.loginUserServiceStatus = "REJECTED";
        state.loginServiceState.loginUserServiceData = action.payload;
        state.loginServiceState.userLoggedIn = false;
      }
    });
    builder.addCase(loginUserService.rejected, (state, action) => {
      state.loginServiceState.loginUserServiceStatus = "REJECTED";
      state.loginServiceState.loginUserServiceData = action.error;
      state.loginServiceState.userLoggedIn = false;
    });
  },
});

export const { sendLoginUserCred, logOutUser } = LoginSlice.actions;

export default LoginSlice.reducer;
