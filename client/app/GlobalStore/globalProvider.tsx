"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface globalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider = (props: globalProviderProps) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default GlobalProvider;
