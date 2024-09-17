import RainfallAnimation from "@Components/Animations/RainfallAnimation";
import Login from "@Components/LoginUI/Login";
import SubscriptionCheckout from "@Components/SubscriptionUI/SubscriptionCheckout";
import SubscriptionContainer from "@Components/SubscriptionUI/SubscriptionContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Websites List",
  description: "This is the Basic Description for the Websites Page",
};

const ViewSubscriptionPage = () => {
  return (
    <>
      <RainfallAnimation />
      <div className="mt-20 min-h-[65vh]">
        <h1 className="font-semibold px-3 text-center pt-4 ">Subscription Plan Selected</h1>
        <SubscriptionCheckout />
      </div>
    </>
  );
};

export default ViewSubscriptionPage;
