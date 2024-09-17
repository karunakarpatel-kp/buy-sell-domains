import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "app/axiosInstance";
import axios from "axios";
import { sendConfetti, sendNotificationToast } from "../UISlice/UISlice";

interface initialStateProps {
  rzPayOrder: {
    paymentOrder: any;
    paymentOrderStatus: "PENDING" | "FULFILLED" | "REJECTED";
  };
  rzPaymentSuccess: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  };
  rzPaymentFailure: any;
}

const initialState: initialStateProps = {
  rzPayOrder: {
    paymentOrder: null,
    paymentOrderStatus: "PENDING",
  },
  rzPaymentSuccess: {
    razorpay_order_id: "",
    razorpay_signature: "",
    razorpay_payment_id: "",
  },
  rzPaymentFailure: null,
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
    return data;
  } catch (err: any) {
    return err.resP.data;
  }
});

const rzPayOrderSlice = createSlice({
  name: "payment-slice",
  initialState,
  reducers: {
    sendrzPaymentSuccessDetails: (
      state,
      action: PayloadAction<{ razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }>
    ) => {
      state.rzPaymentSuccess.razorpay_order_id = action.payload.razorpay_order_id;
      state.rzPaymentSuccess.razorpay_payment_id = action.payload.razorpay_payment_id;
      state.rzPaymentSuccess.razorpay_signature = action.payload.razorpay_signature;
    },
    sendrzPaymentFailureDetails: (state, action: PayloadAction<any>) => {
      state.rzPaymentFailure = action.payload;
    },
    clearPaymentOrder: (state: any, action: PayloadAction<any>) => {
      state.rzPayOrder.paymentOrder = null;
      state.rzPayOrder.paymentOrderStatus = "PENDING";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createRZPayOrder.pending, (state, action) => {
      state.rzPayOrder.paymentOrderStatus = "PENDING";
      state.rzPayOrder.paymentOrder = null;
    });
    builder.addCase(createRZPayOrder.fulfilled, (state, action) => {
      state.rzPayOrder.paymentOrderStatus = "FULFILLED";
      state.rzPayOrder.paymentOrder = action.payload;
    });
    builder.addCase(createRZPayOrder.rejected, (state, action) => {
      state.rzPayOrder.paymentOrderStatus = "REJECTED";
      state.rzPayOrder.paymentOrder = null;
    });
  },
});

export const { clearPaymentOrder, sendrzPaymentSuccessDetails, sendrzPaymentFailureDetails } = rzPayOrderSlice.actions;

export default rzPayOrderSlice.reducer;
