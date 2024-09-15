"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import registerSlice from "./Slices/RegisterSlice/RegisterSlice";
import loginSlice from "./Slices/LoginSlice/loginSlice";
import UISlice from "./Slices/UISlice/UISlice";
import rzPayOrderSlice from "./Slices/RazorPaySlice/rzPayOrderSlice";
import addListingSlice from "./Slices/ListingSlice/addListingSlice";
import getAllListingSlice from "./Slices/ListingSlice/getAllListingSlice";

const store = configureStore({
  reducer: {
    // One Reducer
    loginSlice: loginSlice,
    registerSlice: registerSlice,
    rzPayOrderSlice: rzPayOrderSlice,
    addListingSlice: addListingSlice,
    getAllListingSlice: getAllListingSlice,
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
