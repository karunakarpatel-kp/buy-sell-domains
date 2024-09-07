import Login from "@Components/LoginUI/Login";
import SubscriptionContainer from "@Components/SubscriptionUI/SubscriptionContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Websites List",
  description: "This is the Basic Description for the Websites Page",
};

const SubscriptionPage = () => {
  return (
    <>
      <div className="mt-20 min-h-[65vh]">
        <h1 className="font-semibold px-3 text-center pt-4 ">Subscription Plan</h1>
        <SubscriptionContainer />
      </div>
    </>
  );
};

export default SubscriptionPage;
