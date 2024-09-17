import AddListingUI from "@Components/ListingCards/AddListingUI";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Websites List",
  description: "This is the Basic Description for the Websites Page",
};

const AddListingPage = () => {
  return (
    <>
      <div className="mt-20 min-h-[65vh]">
        <h1 className="font-semibold px-3 text-center pt-4 ">Add Listing Page</h1>
        <AddListingUI />
      </div>
    </>
  );
};

export default AddListingPage;
