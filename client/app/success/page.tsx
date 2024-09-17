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

const SuccessPage = () => {
  return (
    <div className="mt-20 min-h-[65vh]">
      <RainfallAnimation />
      <h1 className="font-semibold px-3 text-center pt-4 border-b border-b-slate-100 pb-4">Success Page</h1>
      <SuccessUI />
    </div>
  );
};

export default SuccessPage;
