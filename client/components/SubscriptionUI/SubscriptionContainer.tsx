"use client";
import React, { useEffect } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { useRouter } from "next/navigation";
import { sendUserSelectedSubscriptionDetails } from "app/GlobalStore/Slices/UserDetailsSlice/userDetailSlice";
import { createRZPayOrder } from "app/GlobalStore/Slices/RazorPaySlice/rzPayOrderSlice";

export const BasicCardList = [
  {
    available: true,
    description: "Karunakar is good boy",
  },
  {
    available: false,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: false,
    description: "Paypal ",
  },
];

export const BasicList = [
  {
    available: true,
    description: "Karunakar is good boy and is very good boy",
  },
  {
    available: false,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: true,
    description: "Paypal [12% Extra Fee on Paypal, Payoneer, Binance]",
  },
  {
    available: false,
    description: "Paypal ",
  },
];

const SubscriptionContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const userDetails: any = useAppSelector(
    (state) => state.userDetailSlice.getUserDetailsService.getUserDetailsServiceData
  );
  const userLoggedIn = useAppSelector((state) => state.loginSlice.loginServiceState.userLoggedIn);

  useEffect(() => {
    if (!userLoggedIn) {
      navigate.push("/");
    }
  }, [userLoggedIn]);

  const sellerChosenSubscriptionCard = (incomingObj: any) => {
    if (userDetails !== null) {
      const completeUserObj = {
        ...userDetails,
        ...incomingObj,
      };
      dispatch(sendUserSelectedSubscriptionDetails(completeUserObj));
    }
    const priceInString = incomingObj.price.toString();
    const createOrderObj = {
      amount: priceInString,
      reciept: incomingObj.receipt,
      currency: "INR",
    };
    console.log(createOrderObj);
    dispatch(createRZPayOrder(createOrderObj));
    navigate.push("/view-subscription");
  };

  return (
    <div className="border-0 border-slate-200 grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard
          title="Basic"
          price={0}
          list={BasicList}
          sellerChosenSubscriptionCard={sellerChosenSubscriptionCard}
        />
      </div>
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard
          title="Advanced"
          price={9999}
          list={BasicCardList}
          sellerChosenSubscriptionCard={sellerChosenSubscriptionCard}
        />
      </div>
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard
          title="Premium"
          price={9999}
          list={BasicCardList}
          sellerChosenSubscriptionCard={sellerChosenSubscriptionCard}
        />
      </div>
      <div className="col-span-12 lg:col-span-3 mx-3 lg:mx-0">
        <SubscriptionCard
          title="More Advanced"
          price={9999}
          list={BasicCardList}
          sellerChosenSubscriptionCard={sellerChosenSubscriptionCard}
        />
      </div>
    </div>
  );
};

export default SubscriptionContainer;
