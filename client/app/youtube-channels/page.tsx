import ListingCard from "@Components/ListingCards/ListingCard";
import { blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Youtube Videos List",
  description: "This is the Basic Description for the Websites Page",
};

const BlogPage = () => {
  return (
    <>
      <div className="border-0 border-black mt-20 h-dvh ">
        <ListingCard />
      </div>
    </>
  );
};

export default BlogPage;
