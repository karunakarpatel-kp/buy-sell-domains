"use client";
import React, { useState, useEffect } from "react";

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const updateProgressBar = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgressBar);
    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <div
      className="h-[1px] fixed top-[61px] bg-[#ffffff] border-0 border-red-800 block z-[999999999]"
      style={{ width: `${width}%` }}
    ></div>
  );
};

export default ReadingProgressBar;
