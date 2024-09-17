"use client";
import SmallCards from "@Components/SmallCards/SmallCards";
import { useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import sampleImage from "@Public/hi.jpg";
import Image from "next/image";

const SuccessUI = () => {
  const navigate = useRouter();
  const userSelectedList = useAppSelector((state) => state.addListingSlice.userSelectedList);
  const rzPaymentOrderDetails = useAppSelector((state) => state.rzPayOrderSlice.rzPayOrder);
  const rzPaySuccessDetails = useAppSelector((state) => state.rzPayOrderSlice.rzPaymentSuccess);
  const userLoggedIn = useAppSelector((state) => state.loginSlice.loginServiceState.userLoggedIn);

  const loginUserServiceData = useAppSelector((state) => state.loginSlice.loginServiceState.loginUserServiceData);
  const userSelectedObj = useAppSelector((state) => state.addListingSlice.userSelectedList);

  useEffect(() => {
    if (userSelectedList === null || rzPaymentOrderDetails === null || rzPaySuccessDetails === null || !userLoggedIn) {
      navigate.push("/login");
    }
  }, []);

  return (
    <div>
      <p className="text-2xl px-3 italic">Thanks for purchasing Karunakar Patel</p>
      <div className="grid grid-cols-12 pt-2 pb-2 gap-2">
        <SmallCards
          Query="UserName"
          Answer={loginUserServiceData !== null ? loginUserServiceData.userName : ""}
          colSpan={3}
        />
        <SmallCards
          Query="firstName"
          Answer={loginUserServiceData !== null ? loginUserServiceData.userName : ""}
          colSpan={3}
        />
        <SmallCards
          Query="Email"
          Answer={loginUserServiceData !== null ? loginUserServiceData.userName : ""}
          colSpan={3}
        />
        <SmallCards
          Query="PhoneNumber"
          Answer={loginUserServiceData !== null ? loginUserServiceData.userName : ""}
          colSpan={3}
        />
      </div>
      <div className="grid grid-cols-12 shadow-lg m-0 p-0 mt-5 z-30 bg-white dark:bg-slate-900 relative">
        <div className="col-span-12 md:col-span-4 lg:col-span-4 p-0">
          <Image src={sampleImage} alt="google-analytics-image" width={520} className="p-1 m-auto" />
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-8 ">
          <div className="text-2xl font-semibold p-2 pl-3">{userSelectedObj !== null && userSelectedObj[0].title}</div>
          <div className="text-wrap text-xl p-2 pl-3 font-normal ">
            {userSelectedObj !== null && userSelectedObj[0].listDescription}
          </div>

          <div className="grid grid-cols-12 pt-2 pb-2 gap-2">
            <SmallCards Query="Category" Answer={userSelectedObj !== null && userSelectedObj[0].category} colSpan={3} />
            <SmallCards
              Query="Registration Date"
              Answer={userSelectedObj !== null && userSelectedObj[0].registrationDate}
              colSpan={3}
            />
            <SmallCards
              Query="Monetization "
              Answer={userSelectedObj !== null && userSelectedObj[0].monetization}
              colSpan={3}
            />
            <SmallCards
              Query="Monthly Income"
              Answer={userSelectedObj !== null && userSelectedObj[0].monthlyIncome}
              colSpan={3}
            />
          </div>
        </div>
        {true && (
          <div className="soldOutWrapper absolute top-2 left-2">
            <div className="text-xl font-bold text-red-600 z-40 border border-red-400  px-2 py-1 bg-red-100  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white">
              Purchased Successfully
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row space-x-4 flex-wrap justify-evenly mt-5">
        {rzPaySuccessDetails !== null && (
          <>
            <div className="flex flex-col  justify-center text-center border border-slate-100 p-5 shadow-lg rounded-lg px-9">
              <span className="text-slate-600 text-2xl font-semibold py-3">Payment Status</span>
              <span className="text-brandColor text-xl font-semibold">Success</span>
            </div>
            <div className="flex flex-col justify-center text-center border border-slate-100 p-5 shadow-lg rounded-lg px-9">
              <span className="text-slate-600 text-2xl font-semibold py-3">Order Id</span>
              <span className="text-brandColor text-xl font-semibold">{rzPaySuccessDetails.razorpay_order_id}</span>
            </div>
            <div className="flex flex-col justify-center text-center border border-slate-100 p-5 shadow-lg rounded-lg px-9">
              <span className="text-slate-600 text-2xl font-semibold py-3">Payment Id</span>
              <span className="text-brandColor text-xl font-semibold">{rzPaySuccessDetails.razorpay_payment_id}</span>
            </div>
            <div className="flex flex-col justify-center text-center text-wrap break-words border border-slate-100 p-5 shadow-lg rounded-lg px-9">
              <span className="text-slate-600 text-2xl  font-semibold py-3">Payment Signature</span>
              <span className="text-brandColor text-xl font-semibold text-wrap">
                {rzPaySuccessDetails.razorpay_signature}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="border-0 border-slate-100 p-5 text-center ">
        <p className="text-3xl text-red-500 animate-pulse">
          Please take the screen shot of the Receipt and whatsapp it to 999999999 to get the credentials
        </p>
      </div>

      {/* <div>
        <button
          className="border border-slate-700 p-2 px-4 mt-4  rounded-md bg-brandColor text-white"
          // onClick={onBackClickHandler}
        >
          Print Receipt
        </button>
      </div> */}
    </div>
  );
};

export default SuccessUI;
