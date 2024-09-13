"use client";
import { loginUserService, sendLoginUserCred } from "app/GlobalStore/Slices/LoginSlice/loginSlice";
import { sendNotificationToast } from "app/GlobalStore/Slices/UISlice/UISlice";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const loginUserServiceStatus = useAppSelector((state) => state.loginSlice.loginServiceState.loginUserServiceStatus);
  const navigate = useRouter();

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const userEnteredObj = {
      userName: formData.get("userName") as string,
      passWord: formData.get("passWord") as string,
    };
    dispatch(sendLoginUserCred(userEnteredObj));
    dispatch(loginUserService(userEnteredObj));
  };

  useEffect(() => {
    if (loginUserServiceStatus === "FULLFILLED") {
      navigate.push("/");
    }
  }, [loginUserServiceStatus]);

  return (
    <div className="border border-slate-100 rounded-md shadow-sm w-5/6 m-auto  py-4 px-3">
      <form onSubmit={onFormSubmit} name="login-form">
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
            Username
          </span>
          <input
            type="text"
            alt="userName"
            name="userName"
            title="Username"
            autoComplete="false"
            required
            placeholder="Please Enter Your UserName"
            className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
          />
        </label>

        <label className="block mt-3">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
            Password
          </span>
          <input
            type="password"
            name="passWord"
            autoComplete="false"
            required
            className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
            placeholder="Please Enter Password"
          />
        </label>

        {/* Submit */}
        <label className="block mt-3">
          <input
            type="submit"
            name="Login"
            autoComplete="false"
            required
            className="px-3 py-2 bg-brandColor block  rounded-md focus:ring-1 text-white w-3/6 mt-6 mb-3 font-semibold text-lg m-auto cursor-pointer hover:bg-white hover:text-brandColor hover:border-brandColor hover:border"
            placeholder="Login"
          />
        </label>
      </form>
    </div>
  );
};

export default Login;
