"use client";

import React, { useEffect, useState } from "react";

import useWindowSize from "react-use/lib/useWindowSize";
import ReactConfetti from "react-confetti";

const RainfallAnimation = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowConfetti(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <>
      {showConfetti && (
        <ReactConfetti width={width} height={height} numberOfPieces={1400} recycle={false} style={{ zIndex: 99999 }} />
      )}
    </>
  );
};

export default RainfallAnimation;
