"use client";
import {
  clearPaymentOrder,
  sendrzPaymentFailureDetails,
  sendrzPaymentSuccessDetails,
} from "app/GlobalStore/Slices/RazorPaySlice/rzPayOrderSlice";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import useRazorpay from "react-razorpay";

import sampleImage from "@Public/hi.jpg";
import SmallCards from "@Components/SmallCards/SmallCards";
import Image from "next/image";
import { sendConfetti, sendNotificationToast } from "app/GlobalStore/Slices/UISlice/UISlice";

const CheckOut = () => {
  const [razorPay] = useRazorpay();
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const rzPayOrderDetails = useAppSelector((state) => state.rzPayOrderSlice.rzPayOrder.paymentOrder);

  const loginUserServiceData = useAppSelector((state) => state.loginSlice.loginServiceState.loginUserServiceData);
  const userSelectedObj = useAppSelector((state) => state.addListingSlice.userSelectedList);

  useEffect(() => {
    if (loginUserServiceData === null && userSelectedObj === null) {
      navigate.push("/login");
      return;
    }
  }, []);

  const rzPayHandlerFn = (response: any) => {
    dispatch(
      sendrzPaymentSuccessDetails({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      })
    );
    dispatch(sendNotificationToast({ Toast: { message: "Payment successfull", variant: "success" } }));
    navigate.push("/success");
  };

  const rzPaymentFailedHandler = (response: any) => {
    dispatch(sendrzPaymentFailureDetails(response.error));
    dispatch(sendNotificationToast({ Toast: { message: response.error.description, variant: "error" } }));
    alert(response.error.description);
    dispatch(
      sendNotificationToast({
        Toast: {
          message: "Payment is still not successfull, Please try with different payment methods",
          variant: "error",
        },
      })
    );
    // navigate.push("/failure");
    // navigate.push("/failure");
    // alert(response.error.code);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
  };

  let options = {
    key: "", // Enter the Key ID generated from the Dashboard
    amount: "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "",
    name: "Karunakar Patel Company", // your business name
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: (response: any) => rzPayHandlerFn(response),
    prefill: {
      name: "Gaurav Kumar", // your customer's name
      email: "gaurav.kumar@example.com",
      contact: "9000090000", // Provide the customer's phone number for better conversion rates
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#36106a",
    },
  };

  if (rzPayOrderDetails !== null) {
    options = {
      ...options,
      key: process.env.RAZORPAY_KEY_ID!,
      amount: rzPayOrderDetails.amount,
      currency: rzPayOrderDetails.currency,
      order_id: rzPayOrderDetails.id,
    };
  }

  const onCheckOutClickHandler = (event: any) => {
    const rzp1 = new razorPay(options);
    rzp1.on("payment.failed", (response: any) => rzPaymentFailedHandler(response));
    rzp1.open();
  };

  const onBackClickHandler = () => {
    dispatch(clearPaymentOrder({}));
    navigate.back();
  };

  return (
    <>
      <h4 className="font-semibold px-3  text-3xl">{`Welcome ${
        loginUserServiceData !== null ? loginUserServiceData.userName : ""
      }`}</h4>
      <p className="text-2xl px-3 italic">You are about to purchase</p>
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
        <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
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
        <div className="flex flex-col text-center lg:justify-around col-span-12 md:col-span-2 lg:col-span-2 border my-2 mx-4 py-5 md:border lg:border-0 lg:border-l lg:border-l-slate-300 dark:border-l-slate-600 border-dotted">
          <div className="text-2xl font-semibold my-4 lg:my-0">Checkout Price</div>
          <div className="text-3xl font-bold my-4 lg:my-0">
            {userSelectedObj !== null && userSelectedObj[0].sellingPrice}
          </div>
          <div className="">
            <button
              onClick={onCheckOutClickHandler}
              className={`w-full flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor p-2 px-6 mx-2 rounded-lg  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white dark:bg-slate-900 `}
            >
              Check Out
              <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a]  animate-ping" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <button
          className="border border-slate-700 p-2 px-4 mt-4  rounded-md bg-brandColor text-white"
          onClick={onBackClickHandler}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default CheckOut;
