"use client";

import React from "react";

const Button = () => {
  const onClickHandler = () => {
    alert("hi");
  };
  return (
    <button style={{ backgroundColor: "green" }} onClick={onClickHandler}>
      Click Me
    </button>
  );
};

export default Button;
