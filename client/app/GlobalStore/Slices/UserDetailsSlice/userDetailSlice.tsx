import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface getUserDetailsServiceProps {
  getUserDetailsService: {
    getUserDetailsServiceData: any;
    getUserDetailsServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
  };
  userSelectedSubscription: any;
}

const initialState = {
  getUserDetailsService: {
    getUserDetailsServiceData: null,
    getUserDetailsServiceStatus: "PENDING",
  },
  userSelectedSubscription: null,
};

export const getUserDetailsService = createAsyncThunk("getUserDetailsService", async (incomingObj: any, thunkAPI) => {
  const token = incomingObj;
  let data;
  const config = {
    url: "http://localhost:5050/getUserDetails",
    method: "POST",
    headers: {
      "Content-Type": "applicaton/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const resPdata = await resP.data;
    return resPdata;
  } catch (err: any) {
    return err.response.message;
  }
});

const userDetailSlice = createSlice({
  name: "userDetailSlice",
  initialState,
  reducers: {
    sendUserSelectedSubscriptionDetails: (state, action: PayloadAction<any>) => {
      state.userSelectedSubscription = action.payload;
    },
    clearUserDetailsService: (state: any, action: PayloadAction<any>) => {
      state.getUserDetailsService.getUserDetailsServiceData = null;
      state.getUserDetailsService.getUserDetailsServiceStatus = " PENDING";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUserDetailsService.pending, (state, action) => {
      state.getUserDetailsService.getUserDetailsServiceStatus = " PENDING";
      state.getUserDetailsService.getUserDetailsServiceData = null;
    });

    builder.addCase(getUserDetailsService.fulfilled, (state, action) => {
      state.getUserDetailsService.getUserDetailsServiceStatus = "FULFILLED";
      state.getUserDetailsService.getUserDetailsServiceData = action.payload;
    });

    builder.addCase(getUserDetailsService.rejected, (state, action) => {
      state.getUserDetailsService.getUserDetailsServiceStatus = "REJECTED";
      state.getUserDetailsService.getUserDetailsServiceData = null;
    });
  },
});

export const { clearUserDetailsService, sendUserSelectedSubscriptionDetails } = userDetailSlice.actions;

export default userDetailSlice.reducer;
