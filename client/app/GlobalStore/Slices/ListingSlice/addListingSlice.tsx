import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { sendNotificationToast } from "../UISlice/UISlice";

interface addListingServiceProps {
  addListingService: {
    addListingServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
    addListingServiceData: any;
  };
  userSelectedList: any;
}

const initialState: addListingServiceProps = {
  addListingService: {
    addListingServiceStatus: "PENDING",
    addListingServiceData: null,
  },
  userSelectedList: null,
};

export const addListingService = createAsyncThunk("addListingService", async (incomingObj: any, thunkAPI) => {
  const data = JSON.stringify(incomingObj);
  const config = {
    url: "http://localhost:5050/add-listing",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const dataResp = await resP.data;
    thunkAPI.dispatch(sendNotificationToast({ Toast: { message: dataResp.message, variant: "success" } }));
    return dataResp;
  } catch (err: any) {
    thunkAPI.dispatch(sendNotificationToast({ Toast: { message: err.response.data.message, variant: "error" } }));
    return err.response.message;
  }
});

const addListingSlice = createSlice({
  name: "addListingSlice",
  initialState,
  reducers: {
    sendUserSelectedList: (state, action: PayloadAction<any>) => {
      state.userSelectedList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addListingService.pending, (state, action) => {
      state.addListingService.addListingServiceStatus = "PENDING";
      state.addListingService.addListingServiceData = null;
    });
    builder.addCase(addListingService.fulfilled, (state, action) => {
      state.addListingService.addListingServiceStatus = "FULFILLED";
      state.addListingService.addListingServiceData = action.payload;
    });
    builder.addCase(addListingService.rejected, (state, action) => {
      state.addListingService.addListingServiceStatus = "REJECTED";
      state.addListingService.addListingServiceData = null;
    });
  },
});

export const { sendUserSelectedList } = addListingSlice.actions;

export default addListingSlice.reducer;
