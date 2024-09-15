"use client";
import { registrationService, sendUserRegistrationDetails } from "app/GlobalStore/Slices/RegisterSlice/RegisterSlice";
import { sendNotificationToast } from "app/GlobalStore/Slices/UISlice/UISlice";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const userRegistered = useAppSelector((state) => state.registerSlice.registrationService.userRegistered);
  const onRegistrationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const buyerOrSeller = formData.get("buyer-or-seller");

    if (buyerOrSeller === "None") {
      dispatch(
        sendNotificationToast({
          Toast: { message: "Please Select the Option Value for Buyer or Seller", variant: "error" },
        })
      );
      return;
    }

    const userEnteredRegObj: any = {
      userName: formData.get("userName"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      passWord: formData.get("passWord"),
      user_role: formData.get("buyer-or-seller"),
      // addressProof: formData.get("address-proof"),
      addressProof: "address-proof",
    };

    dispatch(sendUserRegistrationDetails({ registerUser: userEnteredRegObj }));
    dispatch(registrationService(userEnteredRegObj));
  };

  // useEffect(() => {
  //   if (userRegistered) {
  //     navigate.push("/login");
  //   }
  // }, [userRegistered]);

  return (
    <div className="border border-slate-100 rounded-md shadow-md w-5/6 m-auto  py-4 px-6">
      <form onSubmit={onRegistrationSubmit} name="registration-form">
        <label className="block">
          <span className="block  font-semibold mt-3 pl-1">Please Enter UserName</span>
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

        <label className="block">
          <span className="block font-semibold mt-3 pl-1">Please Enter Your Full Name</span>
          <input
            type="text"
            alt="fullName"
            name="fullName"
            title="Full Name"
            autoComplete="false"
            required
            placeholder="Please Enter Your Full Name"
            className="mt-1 px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md  focus:ring-1"
          />
        </label>
        <label className="block mt-3">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3">
            Email
          </span>
          <input
            type="email"
            name="email"
            autoComplete="false"
            required
            className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
            placeholder="you@example.com"
          />
        </label>

        <label className="block mt-3">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 mt-3 pl-1">
            Phone Number
          </span>
          <input
            type="number"
            name="phoneNumber"
            autoComplete="false"
            required
            step={0}
            className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1 appearance-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Phone Number"
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
            placeholder="Set Password"
          />
        </label>

        <label className="block mt-3" htmlFor="select-buyer-seller">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1">
            Select an Option
          </span>
          <select
            required
            name="buyer-or-seller"
            id="select-buyer-seller"
            className="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md focus:ring-1"
          >
            <option value="None">None</option>
            <option value="buyer">Buyer (Do you need to buy any product?)</option>
            <option value="seller">Seller (Do you need to sell any product)</option>
          </select>
        </label>

        {/* AddressProof */}

        <label className="block mt-3 border-0 border-green-800 cursor-pointer">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block  font-medium text-slate-700 pl-1 mt-3 cursor-pointer">
            Address Proof
          </span>
          <input
            type="file"
            name="address-proof"
            className="block w-full text-sm text-slate-500 pl-1 border border-slate-100 py-2 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 mt-2 cursor-pointer"
          />
        </label>

        {/* Submit */}
        <label className="block mt-3">
          <input
            type="submit"
            name="submit"
            autoComplete="false"
            required
            className="px-3 py-2 bg-brandColor block  rounded-md focus:ring-1 text-white w-3/6 mt-6 mb-3 font-semibold text-lg m-auto cursor-pointer hover:bg-white hover:text-brandColor hover:border-brandColor hover:border"
            placeholder="Submit"
          />
        </label>
      </form>
    </div>
  );
};

export default Registration;
