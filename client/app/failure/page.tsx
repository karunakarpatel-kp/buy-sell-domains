import RainfallAnimation from "@Components/Animations/RainfallAnimation";
import ListingCard from "@Components/ListingCards/ListingCard";
import Registration from "@Components/RegistrationUI/Registration";
import SuccessUI from "@Components/Success/SuccessUI";
import { blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Websites List",
  description: "This is the Basic Description for the Websites Page",
};

const PaymentFailedPage = () => {
  return (
    <div className="mt-20 min-h-[65vh]">
      <RainfallAnimation />
      <h1 className="font-semibold px-3 text-center pt-4 border-b border-b-slate-100 pb-4">Payment Failed </h1>
      <p className="font-semibold px-3 text-center pt-4  pb-4 text-2xl text-brandColor">
        Payment has been failed due to technical Issue. Please try logout and login again.
      </p>
    </div>
  );
};

export default PaymentFailedPage;
