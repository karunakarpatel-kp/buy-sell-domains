import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface getAllListingServiceProps {
  getAllListingService: {
    getAllListingServiceData: any;
    getAllListingServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
  };
}

const initialState: getAllListingServiceProps = {
  getAllListingService: {
    getAllListingServiceData: null,
    getAllListingServiceStatus: "PENDING",
  },
};

export const getAllListingService = createAsyncThunk("getAllListingService", async (incomingObj, thunkAPI) => {
  const data = incomingObj;
  const config = {
    url: "http://localhost:5050/all-listing",
    method: "GET",
    header: {
      "Content-Type": "applciation/json",
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const resPData = await resP.data;
    return resPData;
  } catch (err: any) {
    return err.response.message;
  }
});

const getAllListingSlice = createSlice({
  name: "getAllListingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllListingService.pending, (state, action) => {
      state.getAllListingService.getAllListingServiceStatus = "PENDING";
      state.getAllListingService.getAllListingServiceData = null;
    });
    builder.addCase(getAllListingService.fulfilled, (state, action: PayloadAction<any>) => {
      state.getAllListingService.getAllListingServiceStatus = "FULFILLED";
      state.getAllListingService.getAllListingServiceData = action.payload;
    });
    builder.addCase(getAllListingService.rejected, (state, action) => {
      state.getAllListingService.getAllListingServiceStatus = "REJECTED";
      state.getAllListingService.getAllListingServiceData = null;
    });
  },
});

export default getAllListingSlice.reducer;
