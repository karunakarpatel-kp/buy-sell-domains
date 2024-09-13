"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import registerSlice from "./Slices/RegisterSlice/RegisterSlice";
import PaymentSlice from "./Slices/RazorPaySlice/PaymentSlice";
import loginSlice from "./Slices/LoginSlice/loginSlice";
import UISlice from "./Slices/UISlice/UISlice";

const store = configureStore({
  reducer: {
    // One Reducer
    loginSlice: loginSlice,
    registerSlice: registerSlice,
    paymentSlice: PaymentSlice,
    // UI Slice
    UISlice: UISlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//? Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
