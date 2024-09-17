"use client";

import React, { useEffect } from "react";
import ListingCard from "./ListingCard";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { getAllListingService } from "app/GlobalStore/Slices/ListingSlice/getAllListingSlice";
import { sendUserSelectedList } from "app/GlobalStore/Slices/ListingSlice/addListingSlice";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

interface ListingCardProps {
  id: string;
  soldOut: boolean;
  websiteURL: string;
  title: string;
  listDescription: string;
  category: string;
  registrationDate: string;
  monetization: string;
  monthlyIncome: string;
  sellingPrice: string;
  pageDescripton: string;
  pinVerified: string;
  paymentReceived: string;
  websiteName: string;
  websiteType: string;
  websiteStartingDate: string;
  domainRenewalDate: string;
  keywords: string;
  platForm: string;
  imagesForProof: string[];
  aboutWebsite: string;
  monetizationPlatform: string;
  siteMonetizationDate: string;
  monetizationCountry: string;
  expectedMonthlyTraffic: string;
  last1MonthEarning: string;
  last6MonthEarning: string;
}

const ListingCardUI = (props: any) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const getAllListingServiceData = useAppSelector(
    (state) => state.getAllListingSlice.getAllListingService.getAllListingServiceData
  );
  const userLoggedIn = useAppSelector((state) => state.loginSlice.loginServiceState.userLoggedIn);
  const getUserDetails: any = useAppSelector(
    (state) => state.userDetailSlice.getUserDetailsService.getUserDetailsServiceData
  );

  useEffect(() => {
    dispatch(getAllListingService());
  }, []);

  const userSelectedListing = (incomingListingID: any) => {
    if (getAllListingServiceData !== null) {
      const userSelectedListingObj = getAllListingServiceData.filter(
        (singleItemObj: any) => singleItemObj._id === incomingListingID
      );
      dispatch(sendUserSelectedList(userSelectedListingObj));
      navigate.push(`/shop/${userSelectedListingObj[0]._id}`);
    }
  };

  const onSellBtnClickHandler = () => {
    navigate.push("/subscription");
  };

  return (
    <>
      {getUserDetails !== null && getUserDetails.user_role === "seller" && (
        <div className="border border-slate-100 shadow-lg w-2/4 flex justify-between m-auto items-center align-middle mt-10 rounded-md bg-slate-100 py-2 ">
          <div className="text-xl font-semibold text-center pl-4">
            Do you want to sell a Product, Add your listing in here
          </div>
          <button
            onClick={onSellBtnClickHandler}
            className={
              "flex justify-center items-center text-xl bg-brandColor  text-white hover:bg-white  hover:text-[#36106a] hover:ease-in-out border hover:border-brandColor p-2 px-6 mx-2 rounded-lg  dark:hover:bg-slate-900 dark:hover:text-white dark:hover:border-white dark:bg-slate-900"
            }
          >
            Sell
            <FaArrowRight fontSize="medium" className="ml-2 hover:text-[#36106a] animate-bounce" />
          </button>
        </div>
      )}

      {getAllListingServiceData !== null &&
        getAllListingServiceData.map((singleListing: any, index: any) => {
          return (
            <ListingCard
              key={singleListing.id}
              singleListingData={singleListing}
              userLoggedIn={userLoggedIn}
              userSelectedListing={userSelectedListing}
            />
          );
        })}
    </>
  );
};

export default ListingCardUI;
