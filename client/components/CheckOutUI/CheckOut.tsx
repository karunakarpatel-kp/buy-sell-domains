"use client";
import { clearPaymentOrder } from "app/GlobalStore/Slices/RazorPaySlice/rzPayOrderSlice";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useRazorpay from "react-razorpay";

const CheckOut = () => {
  const [razorPay] = useRazorpay();
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const rzPayOrderDetails = useAppSelector((state) => state.rzPayOrderSlice.rzPayOrder.paymentOrder);

  let options = {
    key: "", // Enter the Key ID generated from the Dashboard
    amount: "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "",
    name: "Karunakar Patel Company", // your business name
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "Gaurav Kumar", // your customer's name
      email: "gaurav.kumar@example.com",
      contact: "9000090000", // Provide the customer's phone number for better conversion rates
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
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
    rzp1.on("payment.failed", function (response: any) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  const onBackClickHandler = () => {
    dispatch(clearPaymentOrder({}));
    navigate.back();
  };

  return (
    <>
      <div className="border border-red-500 w-full ">
        <div className="flex ">
          <div className="mr-2">Amount</div>
          <div>{"0000"}</div>
        </div>
        <div className="flex ">
          <div className="mr-2">Receipt</div>
          <div>{"Default Receipt"}</div>
        </div>
        <div>
          <button
            className="border border-slate-700 p-1 px-2 mt-4  rounded-md bg-brandColor text-white"
            onClick={onCheckOutClickHandler}
          >
            CheckOut Now
          </button>
        </div>
      </div>
      <div>
        <button
          className="border border-slate-700 p-1 px-2 mt-4  rounded-md bg-brandColor text-white"
          onClick={onBackClickHandler}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default CheckOut;
