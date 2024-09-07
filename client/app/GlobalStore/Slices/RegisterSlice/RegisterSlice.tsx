import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface regInitialProps {
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  passWord: string;
  user_role: string;
  addressProof: any;
}

export const initialState: regInitialProps = {
  userName: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  passWord: "",
  user_role: "",
  addressProof: null,
};

export const registerSlice = createSlice({
  name: "register-slice",
  initialState,
  reducers: {
    sendUserRegistrationDetails: (state: regInitialProps, action: PayloadAction<regInitialProps>) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.passWord = action.payload.passWord;
      state.phoneNumber = action.payload.phoneNumber;
      state.userName = action.payload.userName;
      state.user_role = action.payload.user_role;
      state.addressProof = action.payload.addressProof;
    },
  },
});

export const { sendUserRegistrationDetails } = registerSlice.actions;

export default registerSlice.reducer;
