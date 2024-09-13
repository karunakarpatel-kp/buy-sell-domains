import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { sendConfetti, sendNotificationToast } from "../UISlice/UISlice";
import { useRouter } from "next/navigation";

interface regUserObjProps {
  registerUser: {
    userName: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    passWord: string;
    user_role: string;
    addressProof: any;
  };
  registrationService: {
    registrationServiceStatus: "PENDING" | "FULFILLED" | "REJECTED";
    registrationServiceData: any;
    userRegistered: boolean;
  };
}

interface registrationPayloadProps {
  registerUser: {
    userName: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    passWord: string;
    user_role: string;
    addressProof: any;
  };
}
export const initialState: regUserObjProps = {
  registerUser: {
    userName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    passWord: "",
    user_role: "",
    addressProof: null,
  },
  registrationService: {
    registrationServiceStatus: "PENDING",
    registrationServiceData: null,
    userRegistered: false,
  },
};

export const registrationService = createAsyncThunk(
  "registrationService",
  async (incomingObj: regUserObjProps, thunkAPI) => {
    const incomingData = JSON.stringify(incomingObj);
    const config = {
      method: "POST",
      url: "http://localhost:5050/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: incomingData,
    };
    try {
      const resP = await axios(config);
      const dataResp = await resP.data;
      thunkAPI.dispatch(sendNotificationToast({ Toast: { message: dataResp.message, variant: "success" } }));
      thunkAPI.dispatch(sendConfetti(true));
      return dataResp;
    } catch (err: any) {
      thunkAPI.dispatch(sendNotificationToast({ Toast: { message: err.response.data.message, variant: "error" } }));
      return err.resP.data;
    }
  }
);

export const registerSlice = createSlice({
  name: "register-slice",
  initialState,
  reducers: {
    sendUserRegistrationDetails: (state: regUserObjProps, action: PayloadAction<registrationPayloadProps>) => {
      state.registerUser.email = action.payload.registerUser.email;
      state.registerUser.fullName = action.payload.registerUser.fullName;
      state.registerUser.passWord = action.payload.registerUser.passWord;
      state.registerUser.phoneNumber = action.payload.registerUser.phoneNumber;
      state.registerUser.userName = action.payload.registerUser.userName;
      state.registerUser.user_role = action.payload.registerUser.user_role;
      state.registerUser.addressProof = action.payload.registerUser.addressProof;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registrationService.pending, (state, action) => {
      state.registrationService.registrationServiceStatus = "PENDING";
      state.registrationService.userRegistered = false;
    });
    builder.addCase(registrationService.fulfilled, (state: regUserObjProps, action: PayloadAction<any>) => {
      if (action.payload !== undefined) {
        state.registrationService.registrationServiceStatus = "FULFILLED";
        state.registrationService.registrationServiceData = action.payload;
        state.registrationService.userRegistered = true;
      } else {
        state.registrationService.registrationServiceStatus = "REJECTED";
        state.registrationService.registrationServiceData = action.payload;
        state.registrationService.userRegistered = false;
      }
    });
    builder.addCase(registrationService.rejected, (state, action) => {
      state.registrationService.registrationServiceData = action.error;
      state.registrationService.registrationServiceStatus = "REJECTED";
      state.registrationService.userRegistered = false;
    });
  },
});

export const { sendUserRegistrationDetails } = registerSlice.actions;

export default registerSlice.reducer;
