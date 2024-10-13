"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

interface ProgressBarProviderProps {
  children: React.ReactNode;
}

const LoadingProgressBar = () => {
  return (
    <>
      <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
    </>
  );
};

export default LoadingProgressBar;
