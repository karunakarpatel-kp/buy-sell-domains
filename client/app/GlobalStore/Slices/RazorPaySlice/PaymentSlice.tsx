import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "app/axiosInstance";
import axios from "axios";

interface initialStateProps {
  paymentOrder: any;
  paymentOrderStatus: "pending" | "success" | "failed";
}

const initialState: initialStateProps = {
  paymentOrder: [],
  paymentOrderStatus: "pending",
};

export const fetchPaymentOrder = createAsyncThunk("fetchPaymentOrder", async (incomingObj, thunkAPI) => {
  const response = await axiosInstance.get("/login");
  const data = await response.data;
  return data;
});

const paymentSlice = createSlice({
  name: "payment-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPaymentOrder.pending, (state, action) => {
      state.paymentOrderStatus = "pending";
    });
    builder.addCase(fetchPaymentOrder.fulfilled, (state, action) => {
      state.paymentOrderStatus = action.payload;
    });
    builder.addCase(fetchPaymentOrder.rejected, (state, action) => {
      state.paymentOrderStatus = "failed";
    });
  },
});

export default paymentSlice.reducer;
