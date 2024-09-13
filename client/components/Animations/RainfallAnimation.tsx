"use client";

import React, { useEffect, useState } from "react";

import useWindowSize from "react-use/lib/useWindowSize";
import ReactConfetti from "react-confetti";
import { useAppSelector } from "app/GlobalStore/store";

const RainfallAnimation = () => {
  const { width, height } = useWindowSize();
  const showConfetti = useAppSelector((state) => state.UISlice.showConfetti);

  return (
    showConfetti && (
      <ReactConfetti width={width} height={height} numberOfPieces={1400} recycle={false} style={{ zIndex: 99999 }} />
    )
  );
};

export default RainfallAnimation;
