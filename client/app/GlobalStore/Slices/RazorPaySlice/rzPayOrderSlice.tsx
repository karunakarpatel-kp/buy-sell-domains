import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "app/axiosInstance";
import axios from "axios";
import { sendConfetti, sendNotificationToast } from "../UISlice/UISlice";

interface initialStateProps {
  rzPayOrder: {
    paymentOrder: any;
    paymentOrderStatus: "PENDING" | "FULFILLED" | "REJECTED";
  };
}

const initialState: initialStateProps = {
  rzPayOrder: {
    paymentOrder: null,
    paymentOrderStatus: "PENDING",
  },
};

export const createRZPayOrder = createAsyncThunk("createOrder", async (incomingObj: any, thunkAPI) => {
  const data = JSON.stringify(incomingObj);
  const config = {
    url: "http://localhost:5050/order",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resP = await axios(config);
    const data = await resP.data;
    thunkAPI.dispatch(sendNotificationToast({ Toast: { message: "Order created successfully", variant: "success" } }));
    thunkAPI.dispatch(sendConfetti(true));
    console.log({ razorPayData: data });
    return data;
  } catch (err: any) {
    return err.resP.data;
  }
});

const rzPayOrderSlice = createSlice({
  name: "payment-slice",
  initialState,
  reducers: {
    clearPaymentOrder: (state: any, action: PayloadAction<any>) => {
      state.rzPayOrder.paymentOrder = null;
      state.rzPayOrder.paymentOrderStatus = "PENDING";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createRZPayOrder.pending, (state, action) => {
      state.rzPayOrder.paymentOrderStatus = "PENDING";
    });
    builder.addCase(createRZPayOrder.fulfilled, (state, action) => {
      state.rzPayOrder.paymentOrderStatus = "FULFILLED";
      state.rzPayOrder.paymentOrder = action.payload;
    });
    builder.addCase(createRZPayOrder.rejected, (state, action) => {
      state.rzPayOrder.paymentOrderStatus = "REJECTED";
    });
  },
});

export const { clearPaymentOrder } = rzPayOrderSlice.actions;

export default rzPayOrderSlice.reducer;
