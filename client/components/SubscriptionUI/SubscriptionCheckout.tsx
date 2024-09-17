"use client";
import {
  clearPaymentOrder,
  sendrzPaymentFailureDetails,
  sendrzPaymentSuccessDetails,
} from "app/GlobalStore/Slices/RazorPaySlice/rzPayOrderSlice";
import { sendNotificationToast } from "app/GlobalStore/Slices/UISlice/UISlice";
import { useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import useRazorpay from "react-razorpay";
import { useDispatch } from "react-redux";

const SubscriptionCheckout = () => {
  const navigate = useRouter();
  const [razorPay] = useRazorpay();
  const dispatch = useDispatch();
  const userSelectedSubscription: any = useAppSelector((state) => state.userDetailSlice.userSelectedSubscription);
  const rzPayOrderDetails = useAppSelector((state) => state.rzPayOrderSlice.rzPayOrder.paymentOrder);

  const onBackBtnClickHandler = () => {
    navigate.back();
    dispatch(clearPaymentOrder({}));
  };

  useEffect(() => {
    if (userSelectedSubscription === null) {
      navigate.push("/");
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
    navigate.push("/add-listing");
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

  return (
    <>
      <div className="border border-slate-200 shadow-md w-full md:w-2/4 lg:w-2/4 ml-3 mr-3 md:m-auto lg:m-auto">
        <div className={`headTitle border border-slate-200 text-center text-white p-6 bg-brandColor`}>
          <h3 className="text-white text-3xl font-semibold m-0 mb-4">
            {userSelectedSubscription !== null ? userSelectedSubscription.title : ""}
          </h3>
          <p className="text-md font-semibold mb-0 text-slate-100">For 365 days</p>
        </div>
        <div className="price bg-slate-100 text-center text-4xl font-bold py-7 ">{`${
          userSelectedSubscription !== null ? userSelectedSubscription.price : ""
        }`}</div>

        <div className="feature-list border-0 border-yellow-500">
          <ol className="list-none  m-0 p-0 divide-y divide-slate-200  last-of-type:border-b last-of-type:border-b-slate-200">
            {userSelectedSubscription !== null &&
              userSelectedSubscription.list.map((singleItem: any, index: any) => {
                return (
                  <li
                    key={index}
                    className={`py-2 ${singleItem.available ? "" : "decoration-brandColor line-through"}`}
                  >
                    <span className="flex items-center  ">
                      <span className=" pr-4 pl-2">
                        {singleItem.available ? (
                          <MdVerified className="text-brandColor dark:text-white text-xl" />
                        ) : (
                          <FaCircleExclamation className="text-brandColor dark:text-white text-xl" />
                        )}
                      </span>
                      <span className="text-lg font-medium">{singleItem.description}</span>
                    </span>
                  </li>
                );
              })}
          </ol>
          <button
            onClick={onCheckOutClickHandler}
            className={`button  no-underline flex justify-center items-center text-xl bg-brandColor text-white cursor-pointer hover:ease-in-out border border-brandColor p-2 px-6 rounded-lg hover:bg-white hover:text-brandColor w-3/4 m-auto my-4`}
          >
            CheckOut
          </button>
        </div>
      </div>

      <button
        onClick={onBackBtnClickHandler}
        className={`button no-underline flex text-xl bg-brandColor text-white cursor-pointer hover:ease-in-out border border-brandColor p-2 px-6 rounded-lg hover:bg-white hover:text-brandColor  my-8`}
      >
        Go back
      </button>
    </>
  );
};

export default SubscriptionCheckout;
