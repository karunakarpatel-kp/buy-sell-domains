"use client";

import React, { useEffect } from "react";
import ListingCard from "./ListingCard";
import { useAppDispatch, useAppSelector } from "app/GlobalStore/store";
import { getAllListingService } from "app/GlobalStore/Slices/ListingSlice/getAllListingSlice";

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
  const getAllListingServiceData = useAppSelector(
    (state) => state.getAllListingSlice.getAllListingService.getAllListingServiceData
  );
  const userLoggedIn = useAppSelector((state) => state.loginSlice.loginServiceState.userLoggedIn);

  useEffect(() => {
    dispatch(getAllListingService());
  }, []);

  const userSelectedListing = (incomingListingID: any) => {
    const userSelectedListingObj = getAllListingServiceData.filter(
      (singleItemObj: any) => singleItemObj._id === incomingListingID
    );
  };

  return (
    <>
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
