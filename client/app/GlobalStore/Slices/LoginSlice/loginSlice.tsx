import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginSliceInitialProps {
  userName: string;
  passWord: string;
}

export const initialState: loginSliceInitialProps = {
  userName: "",
  passWord: "",
};

export const LoginSlice = createSlice({
  name: "login-slice",
  initialState,
  reducers: {
    sendLoginUserCred: (state: any, action: PayloadAction<loginSliceInitialProps>) => {
      state.userName = action.payload.userName;
      state.passWord = action.payload.passWord;
    },
  },
});

export const { sendLoginUserCred } = LoginSlice.actions;

export default LoginSlice.reducer;
