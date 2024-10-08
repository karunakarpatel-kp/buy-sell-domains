import ListingCard from "@Components/ListingCards/ListingCard";
import Registration from "@Components/RegistrationUI/Registration";
import { blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Websites List",
  description: "This is the Basic Description for the Websites Page",
};

const RegisterPage = () => {
  return (
    <>
      <div className="mt-20 min-h-[65vh]">
        <h1 className="font-semibold px-3 text-center pt-4 ">User Registration</h1>
        <Registration />
      </div>
    </>
  );
};

export default RegisterPage;
